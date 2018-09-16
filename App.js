import React from 'react';
import CardList from './Cardlist';
import SearchBox from './Searchbox';
import { geeksdata } from './geeksdata';

const App = () => {
	return (
			<div className="tc">
			    <h1>My Robo Friends</h1>
                <SearchBox />
				<CardList geeksdata={geeksdata}/>
			</div>
	);
}

export default App;