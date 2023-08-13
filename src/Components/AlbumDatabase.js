import React, { Component } from 'react';
import DatabaseEntry from './DatabaseEntry';

class AlbumDatabase extends Component {
    static AlbumId = 0;
    
    constructor(props) {
        super(props);
        
        this.state = {
            entries: [],
            curId: AlbumDatabase.AlbumId,
            curArtist: "",
            curTitle: "",
            curGenre: "",
            curDate: ""
        };

        // this bindings
        this.addEntry = this.addEntry.bind(this);
        this.onArtist = this.onArtist.bind(this);
        this.onTitle = this.onTitle.bind(this);
        this.onGenre = this.onGenre.bind(this);
        this.onDate = this.onDate.bind(this);
    }
 
    // adds an array to the entries array in the state object
    // which then gets mapped to a proper databaseentry tag
    // in the render method.
    addEntry(event) {
        // add <DatabaseEntry idVal={AlbumDatabase.entryId} artist={curArtist} title={curTitle} genre={curGenre} date={curDate} />
        let curEntries = this.state.entries;

        curEntries.push([
            AlbumDatabase.AlbumId, 
            this.state.curArtist, 
            this.state.curTitle,
            this.state.curGenre,
            this.state.curDate
        ]);
        
        this.setState((state, props) => { 
            return { 
                entries: curEntries
            }
        });

        AlbumDatabase.AlbumId += 1;

        event.preventDefault();
    }

    // Setters for the four inputs on the lower UI
    onArtist(event) {
        this.setState((state, props) => { return { 
            curArtist: event.target.value
        }});
    }

    onTitle(event) {
        this.setState((state, props) => { return { 
            curTitle: event.target.value
        }});
    }

    onGenre(event) {
        this.setState((state, props) => { return { 
            curGenre: event.target.value
        }});
    }

    onDate(event) {
        this.setState((state, props) => { return { 
            curDate: event.target.value
        }});
    }

    // removes the entry in entries that has the id of givenId
    // thereby removing it from the UI.
    deleteEntry(givenId) {
        this.setState((state, props) => { return { 
            entries: state.entries.filter(e => e[0] !== givenId)
        }});
    }

    render() {
        let entryTags = this.state.entries.map((x, i) => 
            <div key={x[0]} class="embedded-entry">
                <DatabaseEntry idVal={x[0]} artist={x[1]} title={x[2]} genre={x[3]} date={x[4]}/>
                <button onClick={() => this.deleteEntry(x[0])}>X</button>
            </div>
        );

        if (this.state.entries.length == 0) {
            entryTags = <p class="empty-text">Try adding some albums!</p>
        }

        return (
            <div class="database-container">
                <div class="top-text">
                    <p>ID</p>
                    <p>Artist</p>
                    <p>Title</p>
                    <p>Genre</p>
                    <p>Date</p>
                </div>
                <div class="tag-container">{entryTags}</div>
                <form onSubmit={this.addEntry}>
                    <div class="submit-buttons">
                        <div class="elem-pair artist-pair">
                            <label>Artist: </label>
                            <input value={this.state.curArtist} onChange={this.onArtist}></input>
                        </div>
                        <div class="elem-pair title-pair">
                            <label>Title: </label>
                            <input value={this.state.curTitle} onChange={this.onTitle}></input>
                        </div>
                        <div class="elem-pair genre-pair">
                            <label>Genre: </label>
                            <input value={this.state.curGenre} onChange={this.onGenre}></input>
                        </div>
                        <div class="elem-pair date-pair">
                            <label>Date: </label>
                            <input value={this.state.curDate} onChange={this.onDate}></input>
                        </div>
                    </div>
                    <button type='submit'>ADD</button>
                </form>
            </div>
        );
    }
}

export default AlbumDatabase;