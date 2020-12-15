import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import {persistStore} from 'redux-persist';

import rootReducer from  './root-reducer';

const middleware = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware))

export const persistor = persistStore(store);

const storepersist = {
    store,
    persistor
};

export default storepersist;


// export default { store, persistStore }; In case for backup