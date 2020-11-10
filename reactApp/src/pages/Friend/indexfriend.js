import React, { useState, useEffect } from 'react';
import { connect } from 'dva';

function HomePage(props) {
  // const {
  //   match: { path },
  // } = props;
  const [count, setCount] = useState(0);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    const { dispatch } = props;
    dispatch({
      type: 'friend/getListHttp',
      payload: {},
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [0]);

  const { data = [] } = props;

  const dataNode = data.map(item => {
    const { id, punchline, setup } = item;
    return (
      <div key={id}>
        {id}~{punchline}-{setup}
      </div>
    );
  });

  return (
    <div className="home-page">
      这是friend <div>{dataNode}</div>
      <p>You clicked {count} times</p>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Click me
      </button>
    </div>
  );
}

const mapStateToProps = ({ friend = {} }) => {
  //   console.log(home.data);
  return {
    data: friend.data,
  };
};

// const mapStateToProps = () => {};

export default connect(mapStateToProps)(HomePage);

// import React, { Component } from 'react';
// import { connect } from 'dva';

// @connect(({ friend }) => friend)
// class index extends Component {
//   componentDidMount() {
//     const { dispatch } = this.props;
//     dispatch({
//       type: 'friend/getListHttp',
//       payload: {},
//     });
//   }

//   render() {
//     return <div>333333</div>;
//   }
// }

// export default index;
