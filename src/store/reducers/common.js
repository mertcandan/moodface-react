const INITIAL_STATE = {
  themeMode: "dark",
};

export default function commonReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "TOGGLE_THEME_MODE":
      return {
        ...state,
        themeMode: state.themeMode === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
}
