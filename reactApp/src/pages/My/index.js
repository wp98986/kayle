import React, { useEffect } from 'react';
import { connect } from 'dva';
import { history } from 'umi';
import { Button } from 'antd-mobile';

function HomePage(props) {
  useEffect(() => {
    const { dispatch } = props;
    dispatch({
      type: 'my/getListHttp',
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
    // console.log(num);
    let { location: { pathname } = {} } = history;
    // console.log(pathname);
    // window.location.href = window.location.href + 'login';
    history.push('/login');
  };

  return (
    <div className="home-page">
      这是my <div>{dataNode}</div>
      <Button
        type="primary"
        onClick={() => {
          path('2');
        }}
      >
        primary
      </Button>
    </div>
  );
}

const mapStateToProps = ({ my = {} }) => {
  //   console.log(home.data);
  return {
    data: my.data,
  };
};

export default connect(mapStateToProps)(HomePage);
