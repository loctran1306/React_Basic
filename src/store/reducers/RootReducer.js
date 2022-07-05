const InitState = {
    ListUsers: [
        { id: "1", name: "Loc" },
        { id: "2", name: "thuy" },
        { id: "3", name: "my" },
    ],
};
const RootReducer = (state = InitState, action) => {
    switch (action.type) {
        case "delete_user":
            let newListUsers = [...state.ListUsers].filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                ListUsers: newListUsers,
            };
        case "add_user":
            let id = Math.floor(Math.random() * 100);
            let newUser = {
                id: id,
                name: `random ${id}`,
            };
            return {
                ...state,
                ListUsers: [...state.ListUsers, newUser],
            };

        default:
            return state;
    }
};
export default RootReducer;
