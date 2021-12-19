import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { organizationsReducer } from '../features/organizations/reducer';
import { organizationsEpic, paginationEpic } from './../features/organizations/epic';

const epicMiddleware = createEpicMiddleware();
export const rootEpic = combineEpics(
  organizationsEpic,
  paginationEpic,
);


export const store = configureStore({
  reducer: {
    organizations: organizationsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(epicMiddleware),
});

console.log('store', store)

epicMiddleware.run(rootEpic);


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
