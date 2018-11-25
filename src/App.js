import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import style from'./App.less';
//引入antd
import { Layout } from 'antd';
// 引入需要的page， 注意一个坑点，就是import一定要放在模块的最前面
import HeadPage from './container/headPage.js';
import MainContentPage from './container/mainContentPage.js';
import SilderPage from './container/siderPage.js';
import axios from 'axios';

// axios.baseURL = "";

const { Header, Footer, Sider, Content } = Layout;


// bug解决示例： 这里一定要window点出来   
// const {ipcRenderer, remote} = window.require('electron');

class App extends Component {

  render() {
   console.log(style);
    return (
      <div className="app">
      <Router>
      <Layout>
        {/* 头部布局 */}
        <Header>
          <HeadPage />
        </Header>
        {/* 中部布局 */}
        <Layout>
          {/* 用户侧边栏 */}
          <Sider>
            <SilderPage/>
          </Sider>
          {/* 主题主要内容 */}
          <Content>
            <MainContentPage/>
          </Content>
        </Layout>
        {/* 脚部，播放器控件 */}
        <Footer>Footer</Footer>
      </Layout> 
      </Router>  
      </div>
    );
  }
}

export default App;
