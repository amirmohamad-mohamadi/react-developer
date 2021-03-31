import { all, call } from 'redux-saga/effects';

import { shopSgas } from './shop/shop.saga';
import { userSagas } from './user/user.sagas';
import { cartSagas } from './cart/cart.sagas';

export default function* rootSaga() {
    yield all([call(shopSgas), call(userSagas), call(cartSagas)]);
}