import React, { useEffect } from 'react';
import { connect } from 'dva';
import { history } from 'umi';
import { NavBar, Icon } from 'antd-mobile';

function HomeDetails(props) {
  useEffect(() => {
    const { dispatch } = props;
    dispatch({
      type: 'home/getListHttp',
      payload: {},
    });
  });
  const { data = [] } = props;

  const dataNode = data.map(item => {
    const { id, punchline, setup } = item;
    return (
      <div key={id}>
        {id}~{punchline}-{setup}
      </div>
    );
  });

  const path = num => {
    console.log(num);
    history.push('/login');
  };

  return (
    <NavBar
      mode="dark"
      leftContent="Back"
      rightContent={[
        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
        <Icon key="1" type="ellipsis" />,
      ]}
      onLeftClick={() => {
        history.goBack();
      }}
    >
      NavBar
    </NavBar>
  );
}

const mapStateToProps = ({ life = {} }) => {
  //   console.log(home.data);
  return {
    data: life.data,
  };
};

export default connect(mapStateToProps)(HomeDetails);
