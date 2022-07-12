import { all } from "redux-saga/effects";
import { typingWatcher } from "./typing";

export default function* rootSaga() {
  yield all([
    typingWatcher(),
  ]);
}
