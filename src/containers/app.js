//全局外壳
import React, { Component } from "react";
import {
  LocaleProvider,//国际化
} from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import 'moment/locale/zh-cn';
import "./app.less"; //全局样式



class App extends Component {

  render() {
    const { children } = this.props
    return (
      <LocaleProvider locale={zh_CN}>
        <div className="container">
          {/*<Layout style={{ height: '100%' }}>*/}
            {/*<Layout style={{*/}
            {/*}}>*/}
              {/*<Content className="main-content" style={{margin:"20px"}}>*/}
                {children}
              {/*</Content>*/}
            {/*</Layout>*/}
          {/*</Layout>*/}
        </div>
      </LocaleProvider>
    );
  }
}

export default App;
