import React, { Component } from 'react';

class DatabaseEntry extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            idVal: props.idVal,
            artist: props.artist,
            title: props.title,
            genre: props.genre,
            date: props.date
        };

        // this bindings
        this.onArtistChange = this.onArtistChange.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onGenreChange = this.onGenreChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
    }
    
    onArtistChange = (event) => {
        this.setState((state, props) => { return { 
            artist: event.target.value
        }});
    }

    onTitleChange = (event) => {
        this.setState((state, props) => { return { 
            title: event.target.value
        }});
    }

    onGenreChange = (event) => {
        this.setState((state, props) => { return { 
            genre: event.target.value
        }});
    }

    onDateChange = (event) => {
        this.setState((state, props) => { return { 
            date: event.target.value
        }});
    }
    
    render() {
        return (
            <div>
                <form class="entry-elems">
                    <label>{this.state.idVal}</label>
                    <input type="text" value={this.state.artist} onChange={this.onArtistChange} placeholder={this.state.artist}/>
                    <input type="text" value={this.state.title} onChange={this.onTitleChange} placeholder={this.state.title}/>
                    <input type="text" value={this.state.genre} onChange={this.onGenreChange} placeholder={this.state.genre}/>
                    <input type="text" value={this.state.date} onChange={this.onDateChange} placeholder={this.state.date}/>
                </form>
            </div>
        );
    }
}

export default DatabaseEntry;