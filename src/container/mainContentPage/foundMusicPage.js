import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";
import Recommend from './fondMusic/recommend.js'
import SongList from './fondMusic/songList.js'
import Singer from './fondMusic/singer.js'

class FoundMusic extends Component{

    render(){
        console.log(this.props.match);
        const matchUrl = this.props.match.url;
        console.log(matchUrl,matchUrl+'/recommend');
        // console.log(this.props.match.params.id);
        
        return (
            <Router>
            <div className="main-content">
            
                <div className='found-top'>
                    <ul className='found-topnav'>
                        <li>
                            <NavLink activeClassName="active" to={matchUrl+'/recommend'}>个性推荐</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={matchUrl+'/songlist'}>歌单</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName="active" to={matchUrl+'/singer'}>歌手</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                <Route path={matchUrl+'/recommend'} component={Recommend} />
                <Route path={`${matchUrl}/songlist`} component={SongList} />
                <Route path={`${matchUrl}/singer`} component={Singer} />
                <Route
                    exact
                    path={matchUrl}
                    component={Recommend}
                />
                </div>

               
            </div>
            </Router>
        );
    }
}

export default FoundMusic

