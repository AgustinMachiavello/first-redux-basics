import store from './store';

import { bugAdded, bugRemoved, bugResolved } from './actions';

const unsubscribe = store.subscribe(() => {
    console.log('Store changed', store.getState());
})

store.dispatch(bugAdded('buggy1'))

store.dispatch(bugResolved(1))

console.log(store.getState())

unsubscribe();

store.dispatch(bugRemoved(1))

console.log(store.getState())