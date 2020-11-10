// import styles from './index.css';
import React, { Component } from 'react';
import shallowequal from 'shallowequal';
import { history } from 'umi';
// import BaseLayout from './baseLayout'; // 底部导航的组件
import { TabBar } from 'antd-mobile';
import Friend from '@/pages/Friend/indexfriend';
import Koubei from '@/pages/Koubei';
import Life from '@/pages/Life';
import My from '@/pages/My';

const ComponentEnum = {
  Friend: Friend,
  Koubei: Koubei,
  Life: Life,
  My: My,
};

let globalPath = null;
// const ULR_NO_LAYOUT = ['/', '/home', '/class', '/my']; //判断在哪几个路由下需要出现底部导航
class BasicLayout extends Component {
  constructor(props) {
    super(props);
    let { location: { pathname } = {} } = props;
    if (pathname === '/') {
      pathname = '/life';
    }
    this.state = {
      selectedTab: pathname,
      hidden: false,
      fullScreen: false,
    };
  }
  //   componentDidMount() {}
  // renderBody = () => {
  //   const {location: {pathname}, children } = this.props;
  //   if (ULR_NO_LAYOUT.includes(pathname)) {
  //     return  (<TabBar {...this.props} />);
  //   }
  //   return (
  //     <React.Fragment>
  //       {children}
  //     </React.Fragment>
  //   );
  // }

  pathTo = pathName => {
    // history.push(pathName);

    this.setState({
      selectedTab: pathName,
    });
  };

  renderContent(content) {
    const Components = ComponentEnum[content];
    return (
      <div>
        {content}
        <Components></Components>
        {/* {this.props.children} */}
      </div>
    );
  }

  renderBody() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
        hidden={this.state.hidden}
        prerenderingSiblingsNumber={0}
      >
        <TabBar.Item
          title="Life"
          key="Life"
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selected={this.state.selectedTab === '/life'}
          badge={1}
          onPress={() => {
            this.pathTo('/life');
          }}
          data-seed="logId"
        >
          {this.renderContent('Life')}
          {/* <Friend></Friend> */}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          title="Koubei"
          key="Koubei"
          badge={'new'}
          selected={this.state.selectedTab === '/koubei'}
          onPress={() => {
            this.pathTo('/koubei');
          }}
          data-seed="logId1"
        >
          {this.renderContent('Koubei')}
        </TabBar.Item>
        <TabBar.Item
          icon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: '22px',
                height: '22px',
                background:
                  'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
              }}
            />
          }
          title="Friend"
          key="Friend"
          dot
          selected={this.state.selectedTab === '/friend'}
          onPress={() => {
            this.pathTo('/friend');
          }}
        >
          {this.renderContent('Friend')}
        </TabBar.Item>
        <TabBar.Item
          icon={{
            uri:
              'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
          }}
          selectedIcon={{
            uri:
              'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
          }}
          title="My"
          key="my"
          selected={this.state.selectedTab === '/my'}
          onPress={() => {
            this.pathTo('/my');
          }}
        >
          {this.renderContent('My')}
        </TabBar.Item>
      </TabBar>
    );
  }

  render() {
    const { location: { pathname } = {} } = this.props;
    if (pathname === '/login') {
      return <React.Fragment>{this.props.children}</React.Fragment>;
    }
    return <React.Fragment>{this.renderBody()}</React.Fragment>;
  }
}

export default BasicLayout;
