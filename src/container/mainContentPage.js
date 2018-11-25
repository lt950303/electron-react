import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";

import FoundMusicPage from './mainContentPage/foundMusicPage.js'
import PersonalMusicPage from './mainContentPage/personalMusicPage.js'
import MvPage from './mainContentPage/mvPage.js'
import FriendsPage from './mainContentPage/friendsPage.js'

class MainContentPage extends Component{
    render(){
        return (
            <div className="main-content">
            {/* <Router> */}
                {/* <Switch> */}
                    <Route path='/foundmusic' exact component = {FoundMusicPage} /> 
                    <Route path='/personalmusic' component = {PersonalMusicPage} />
                    <Route path='/mv' component = {MvPage} />
                    <Route path='/friends' component = {FriendsPage} />
                    <Redirect to='/foundmusic'/>
                {/* </Switch> */}
            {/* </Router> */}
            </div>
        );
    }
}

export default MainContentPage


