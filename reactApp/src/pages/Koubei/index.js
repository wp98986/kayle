import React, { useState, useEffect } from 'react';
import { connect } from 'dva';

function Example(props) {
  const [count, setCount] = useState(0);
  let { location: { pathname } = {} } = props;
  console.log(pathname)
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    const { dispatch } = props;
    dispatch({
      type: 'koubei/getListHttp',
      payload: {},
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

const mapStateToProps = ({ koubei = {} }) => {
  //   console.log(home.data);
  return {
    data: koubei.data,
  };
};

export default connect(mapStateToProps)(Example);
