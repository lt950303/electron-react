import React, { Component } from 'react';
import logo from './logo.svg';
import style from'./App.less';
//引入antd
import {Icon} from 'antd' 

class App extends Component {
  render() {
    console.log(style);
    return (
      <div className={style.App}>
        <Icon type="retweet" />
      </div>
    );
  }
}

export default App;
