import React, { useCallback } from 'react';
// import { getHelloWord } from './api';
import logo from '@/assets/svg/logo.svg';

const App = () => {
  const handleGetHelloWord = useCallback(() => {
    // getHelloWord({
    //   id: 1
    // })
    wx.updateAppMessageShareData({ 
      title: '测试', // 分享标题
      desc: '测试', // 分享描述
      link: 'http://m.lexrev.edu', // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
      imgUrl: 'http://m.lexrev.edu/favicon.ico', // 分享图标
      success: function () {
        console.log('分享')
      }
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={handleGetHelloWord}>Hello word</button>
    </div>
  );
}

export default App;
