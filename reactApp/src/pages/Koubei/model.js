import { accountinfo1 } from '@/services/friendAPI';

export default {
  namespace: 'koubei',
  state: {
    data: [
      {
        id: 1,
        setup: ' 口碑Did you hear about the two silk worms in a race?',
        punchline: 'It ended in a tie',
      },
      {
        id: 2,
        setup: " 口碑What happens to a frog's car when it breaks down?",
        punchline: 'It gets toad away',
      },
    ],
  },

  effects: {
    // eslint-disable-next-line require-yield
    *getListHttp({ payload, callback }, { call }) {
      // console.log(accountinfo);
      console.log('request');
      if (callback) callback();
      const response = yield call(accountinfo1, payload);
    },
  },
};
