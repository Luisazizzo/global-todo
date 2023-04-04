export const mainReducer = (state, action) => {
  switch (action.type) {
    case "SET_TODO_LIST":
      return {
        ...state,
        todoListData: action.payload,
      };
    case "TOGGLE_MODAL":
      return {
        ...state,
        isModalVisible: !state.isModalVisible,
      };
    case "CREATE_NEW_TODO":
      return {
        ...state,
        todoListData: [action.payload, ...state.todoListData],
        isModalVisible: false,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoListData: state.todoListData.filter(
          (item) => item.id !== action.payload
        ),
      };
  }
};
