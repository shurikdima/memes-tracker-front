/**
 * Holds state for the visual aspect of the app.
 * @param {Object} state
 * @param {String} state.section The chosen section. could be either 'newest' or 'liked'
 * @param {Object} action
 * @param {String} action.type
 * @param {String} action.section
 * @returns {Object}
 */
const visuals = (state = { section: undefined, navbar: "closed" }, action) => {
  switch (action.type) {
    case "SET_CHOSEN_SECTION":
      return {
        ...state,
        section: action.section
      };
    case "RESET_CHOSEN_SECTION":
      return {
        ...state,
        section: undefined
      };
    case "TOGGLE_NAVBAR":
      return {
        ...state,
        navbar: state.navbar === "closed" ? "open" : "closed"
      };
    default:
      return state;
  }
};

export default visuals;
