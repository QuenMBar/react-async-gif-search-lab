import React, { Component, Fragment } from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

export default class GifListContainer extends Component {
    state = {
        gifs: [],
        query: "",
    };

    fetchApi = (e) => {
        e.preventDefault();
        fetch(
            `https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=6YW35hIX921TISGHIP3KB7c5vIFlboau&rating=g`
        )
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    gifs: data.data,
                    query: "",
                });
            });
    };

    onTextChange = (e) => {
        this.setState({
            query: e.target.value,
        });
    };

    render() {
        return (
            <Fragment>
                <GifList gifs={this.state.gifs} />
                <GifSearch textValue={this.state.query} fetchApi={this.fetchApi} onTextChange={this.onTextChange} />
            </Fragment>
        );
    }
}
