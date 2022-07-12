const INITIAL_STATE = {
  lastTimestamp: 0,
  interval: 300,
  kerning: 1,
  fontSize: 12,
  averageInterval: 300,
  letterCount: 0,
  wordCount: 0,
  lineCount: 0,
  text: [[[]]],
};

export default function typingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_LAST_TIMESTAMP":
      return {
        ...state,
        lastTimestamp: action.payload,
      };
    case "SET_INTERVAL":
      return {
        ...state,
        interval: action.payload,
      };
    case "SET_AVERAGE_INTERVAL":
      return {
        ...state,
        averageInterval: action.payload,
      };
    case "SET_LINE_COUNT":
      return {
        ...state,
        lineCount: action.payload,
      };
    case "SET_WORD_COUNT":
      return {
        ...state,
        wordCount: action.payload,
      };
    case "SET_LETTER_COUNT":
      return {
        ...state,
        letterCount: action.payload,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.payload,
      };
    case "SET_KERNING":
      return {
        ...state,
        kerning: action.payload,
      };
    case "SET_FONT_SIZE":
      return {
        ...state,
        fontSize: action.payload,
      };
    default:
      return state;
  }
}
