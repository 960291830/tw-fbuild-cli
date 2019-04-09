import React, { Component, Fragment } from "react";
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import settingActions from '../../actions/settingActions'
import { Button } from 'antd';

class Setting extends Component {
  constructor(props){
    super(props)
    this.state = {
      // info:"demo11"
    };
    this.getInfo = this.getInfo.bind(this)
  }
  getInfo(){
    const { settingActions } = this.props;
    settingActions.getInfo()
    //   .then(res=>{
    //     // console.log(res);
    //   }).catch(err=>{
    //   console.log(err);
    // })
  }
  render() {
    const {info} = this.props;
    return (
      <Fragment>
        <p>{info}</p>
        <Button onClick={this.getInfo} type="primary">点击请求</Button>
      </Fragment>
    );
  }
}

const mapStateToProps = state =>{
  return {
    info:state.setting.settingInfo,
  }
};
const mapDispatchToProps = dispatch =>{
  return {
    settingActions:bindActionCreators(settingActions,dispatch)
  }
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Setting)
