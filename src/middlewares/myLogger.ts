import MiddlewareFunction from './index';

const myLogger: MiddlewareFunction = (store) => (next) => (action) => {
  console.log(action); // 먼저 액션을 출력합니다
  const result = next(action); // 다음 미들웨어 (또는 리듀서)에게 액션을 전달합니다.

  console.log('\t', store.getState());

  return result;
};

export default myLogger;
