import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyB95Jxrk5147Ib6XVKBOZjBExeuvW2UMPA";


//create a new and main component called App. this component should produce some html
class App extends Component{
    constructor(props){
        super(props);
        this.state= { vprops: [], selectedVideo: null};

        this.videoSearch('jsconf');
    }

    videoSearch(term){
        YTSearch({key:API_KEY,term: term}, (vprops)=>{
            this.setState({vprops:vprops, selectedVideo: vprops[1]});
            // since we use es6, this gets transpiles as this.setState({vprops:vprops});
        });
    }
    render() {
        const videoSearch= _.debounce(term => {this.videoSearch(term)}, 400);
        return (
        <div>
            <SearchBar onSearchTermChange={videoSearch} />
            <VideoDetail item2={this.state.selectedVideo} />
            <VideoList ssup={this.state.vprops} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
        </div>
        );
    }
}

//take this component's generated html and put it on the page (in the dom)
 
ReactDOM.render(<App />, document.querySelector('.container'));