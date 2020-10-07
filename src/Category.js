import React from 'react';
import {Link, Route, BrowserRouter as Router} from 'react-router-dom'
function Category({ match }) {
    return (
        <div>
            <ul>
                <Link to={`${match.url}/Shoes`}><li>Soes</li></Link>
                <Link to={`${match.url}/Boots`}><li>Boots</li></Link>
                <Link to={`${match.url}/Footwear`}><li>Footwear</li></Link>
            </ul>
            <Route path={`${match.url}/:name`} render={({ match }) =><h2>{match.params.name}</h2>} />
        </div>
    );
}
    export default Category;