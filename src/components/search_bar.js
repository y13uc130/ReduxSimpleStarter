import React, {Component} from 'react';


class SearchBar extends Component {
    constructor(props){
        super(props); 
    // super funciton here will help us 
    // call the component class that we extended here i.e., 
    // we are calling the constructor function of the parent's class. 
        this.state ={term : ''}; //inside the constructive function (this.state), we define the state object.
    }
    render () {
        return (
        <div className="search-bar">
            <input 
            value={this.state.term}
            onChange={e => this.onInputChange(e.target.value)} /> 
        </div>
    );
}
    
    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
        
}

export default SearchBar;