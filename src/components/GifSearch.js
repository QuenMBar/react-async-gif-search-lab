import React from "react";

const GifSearch = (props) => {
    return (
        <div>
            <form onSubmit={props.fetchApi}>
                <input type="text" name="query" value={props.textValue} onChange={props.onTextChange} />
                <button type="submit">Search GIFS</button>
            </form>
        </div>
    );
};

export default GifSearch;
