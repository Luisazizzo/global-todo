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
        todoListData: [
          { ...action.payload, id: state.todoListData.length + 1 },
          ...state.todoListData,
        ],
        isModalVisible: false,
      };
    case "DELETE_TODO":
      return {
        ...state,
        todoListData: state.todoListData.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "SET_TODO_NAME":
      return {
        ...state,
        listTodo: {
          ...state.listTodo,
          username: action.payload,
        },
      };
    case "SET_TODO_IMAGE":
      return {
        ...state,
        listTodo: {
          ...state.listTodo,
          image: action.payload,
        },
      };
    case "SET_TODO_TODO":
      return {
        ...state,
        listTodo: {
          ...state.listTodo,
          todo: action.payload,
        },
      };
    case "SET_TODO_ID":
      return {
        ...state,
        listTodo: {
          ...state.listTodo,
          id: state.todoListData.lenght + 1,
        },
      };
  }
};
