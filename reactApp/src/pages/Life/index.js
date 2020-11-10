import React, { useEffect, useState } from 'react';
import { connect } from 'dva';
import { history } from 'umi';
import { Button, DatePicker, List } from 'antd-mobile';
import styles from './index.less';

function HomePage(props) {
  const nowTimeStamp = Date.now();
  const now = new Date(nowTimeStamp);
  const [nowDate, dateChange] = useState(now);
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
    // console.log(num);
    let { location: { pathname } = {} } = history;
    // console.log(pathname);
    // window.location.href = window.location.href + 'login';
    history.push('/login');
  };

  return (
    <div className={styles.lifeContainer}>
      这是life <div>{dataNode}</div>
      <Button
        type="primary"
        onClick={() => {
          path('2');
        }}
      >
        primary
      </Button>
      <div className={styles.h1}>啊哈还大的发的SAD SD gsdfgd 鬼地方个</div>
      <div className={styles.h2}>啊哈还大的发的SAD SD gsdfgd 鬼地方个</div>
      <div className={styles.h3}>啊哈还大的发的SAD SD gsdfgd 鬼地方个</div>
      <div className={styles.h4}>啊哈还大的发的SAD SD gsdfgd 鬼地方个</div>
      <div className={styles.item}>
        <div className={styles.itemImg}>
          <img
            src="https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9MRFBMbHRtTnk1NGtXZG9vVXlKMjFwYzBVSkFvR0xHaWJ2R09hWmtWT3hXTWlhOHJyczZpY1pTRjA3eUJNS2JJZm11ZzdqZjM0OEZ5ckl4dXBtb1RQcXRJdy82NDA?x-oss-process=image/format,png"
            alt=""
          />
        </div>
        <div className={styles.itemRight}>
          <div className={styles.goodsName}>
            原装进口 Luooma vesta 餐椅(114黑原木色/ 807铜色/113胡桃木色)
          </div>
          <div className={styles.goodsSpec}>颜色：黄色;规格：900*800*777MM</div>
          <div className={styles.goodsTotal}>
            <div className={styles.price}>￥8520</div>
            <div className={styles.goodNum}>1</div>
          </div>
        </div>
      </div>
      <DatePicker value={nowDate} onChange={date => dateChange(date)}>
        <List.Item arrow="horizontal">Datetime</List.Item>
      </DatePicker>
    </div>
  );
}

const mapStateToProps = ({ life = {} }) => {
  //   console.log(home.data);
  return {
    data: life.data,
  };
};

export default connect(mapStateToProps)(HomePage);
