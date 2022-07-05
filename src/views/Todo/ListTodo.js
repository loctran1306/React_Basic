import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
// import colors from "../HOC/Color";
class ListTodo extends React.Component {
    state = {
        ListTodos: [
            { id: "1", title: "playing game" },
            { id: "2", title: "do excercise" },
            { id: "3", title: "learn english" },
        ],
        EditTodo: {},
    };
    addANewTodo = (todo) => {
        this.setState({
            ListTodos: [...this.state.ListTodos, todo],
        });
    };
    handleOnclickDel = (item) => {
        let cpListTodos = [...this.state.ListTodos].filter((Obj) => Obj.id !== item.id);
        this.setState({
            ListTodos: cpListTodos,
        });
    };
    handleOnclickEdit = (item) => {
        // save
        let { EditTodo, ListTodos } = this.state;
        let isEmpty = Object.keys(EditTodo).length === 0;
        if (!isEmpty && EditTodo.id === item.id) {
            if (EditTodo.title.length === 0) {
                alert("missing");
            } else {
                let cpListTodos = [...ListTodos];
                let objIndex = cpListTodos.findIndex((Obj) => Obj.id === item.id);
                cpListTodos[objIndex].title = EditTodo.title;
                this.setState({
                    ListTodos: cpListTodos,
                    EditTodo: "",
                });
            }

            return;
        }
        // edit
        this.setState({
            EditTodo: item,
        });
    };
    handleOnchangeInputEdit = (e) => {
        let cpEditTodo = { ...this.state.EditTodo };
        cpEditTodo.title = e.target.value;
        this.setState({
            EditTodo: cpEditTodo,
        });
    };
    render() {
        let { ListTodos, EditTodo } = this.state;
        let isEmpty = Object.keys(EditTodo).length === 0;
        return (
            <>
                {" "}
                <div className="list-Todo-Container">
                    <p>This is List To Do</p>
                    <AddTodo addANewTodo={this.addANewTodo} />

                    <div className="list-Todo-Content">
                        {ListTodos &&
                            ListTodos.length > 0 &&
                            ListTodos.map((item, index) => {
                                return (
                                    <div className="child-Todo" key={item.id}>
                                        {isEmpty === true ? (
                                            <span>
                                                {index + 1}-{item.title}
                                            </span>
                                        ) : (
                                            <>
                                                {EditTodo.id === item.id ? (
                                                    <span>
                                                        {index + 1}-
                                                        <input
                                                            onChange={(e) => this.handleOnchangeInputEdit(e)}
                                                            value={EditTodo.title}
                                                        />
                                                    </span>
                                                ) : (
                                                    <span>
                                                        {index + 1}-{item.title}
                                                    </span>
                                                )}
                                            </>
                                        )}
                                        <button onClick={() => this.handleOnclickEdit(item)} className="edit">
                                            {EditTodo.id === item.id ? "save" : "edit"}
                                        </button>
                                        <button onClick={() => this.handleOnclickDel(item)} className="detele">
                                            Delete
                                        </button>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </>
        );
    }
}
export default ListTodo;
