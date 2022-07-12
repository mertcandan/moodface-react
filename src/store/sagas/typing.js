import { takeLatest, put, select, all, call } from "redux-saga/effects";
import { ENTER_KEY, SPACE_KEY } from "../../constants";
import { calculateFontSize, calculateKerning } from "../../helpers/typing";

function* typeLetter(action) {
  const {
    lastTimestamp,
    averageInterval,
    letterCount,
    text,
    wordCount,
    lineCount,
  } = yield select((state) => state.typing);
  const { payload } = action;
  console.log("Type letter payload", payload);
  const { timeStamp } = payload;

  if (lastTimestamp === 0) {
    yield all([
      put({
        type: "SET_LAST_TIMESTAMP",
        payload: timeStamp,
      }),
      put({
        type: "SET_LETTER_COUNT",
        payload: 1,
      }),
    ]);
  } else {
    const currentInterval = timeStamp - lastTimestamp;
    const newAverageInterval =
      (averageInterval * letterCount + currentInterval) / (letterCount + 1);

    yield all([
      put({
        type: "SET_LAST_TIMESTAMP",
        payload: timeStamp,
      }),
      put({
        type: "SET_INTERVAL",
        payload: currentInterval,
      }),
      put({
        type: "SET_AVERAGE_INTERVAL",
        payload: newAverageInterval,
      }),
      put({
        type: "SET_LETTER_COUNT",
        payload: letterCount + 1,
      }),
    ]);
  }

  if (payload.which === SPACE_KEY) {
    text[lineCount].push([]);
    yield all([
      put({
        type: "SET_TEXT",
        payload: text,
      }),
      put({
        type: "SET_WORD_COUNT",
        payload: wordCount + 1,
      }),
    ]);

    return;
  }

  if (payload.which === ENTER_KEY) {
    text.push([[]]);
    yield all([
      put({
        type: "SET_TEXT",
        payload: text,
      }),
      put({
        type: "SET_LINE_COUNT",
        payload: lineCount + 1,
      }),
      put({
        type: "SET_WORD_COUNT",
        payload: 0,
      }),
    ]);

    return;
  }

  yield call(addLetter, String.fromCharCode(payload.which));
}

function* addLetter(letter) {
  const {
    interval,
    averageInterval,
    text,
    wordCount,
    lineCount,
    kerning,
    fontSize,
  } = yield select((state) => state.typing);

  const newKerning = calculateKerning(kerning, interval, averageInterval);
  const newFontSize = calculateFontSize(fontSize, interval, averageInterval);

  text[lineCount][wordCount].push({
    kerning: newKerning,
    fontSize: newFontSize,
    letter,
  });
  yield all([
    put({
      type: "SET_KERNING",
      payload: newKerning,
    }),
    put({
      type: "SET_FONT_SIZE",
      payload: newFontSize,
    }),
    put({
      type: "SET_TEXT",
      payload: text,
    }),
  ]);
}

export function* typingWatcher() {
  yield takeLatest("TYPE_LETTER", typeLetter);
}
