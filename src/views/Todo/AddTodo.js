import React from "react";
import { toast } from "react-toastify";
class AddTodo extends React.Component {
    state = {
        title: "",
    };
    handleOnchangInput = (e) => {
        this.setState({
            title: e.target.value,
        });
    };
    handleOnclickAdd = () => {
        if (!this.state.title) {
            alert("missing");
            return;
        }
        this.props.addANewTodo({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
        });
        this.setState({
            title: "",
        });
        toast.success("Add success");
    };
    render() {
        let { title } = this.state;
        return (
            <>
                <input value={title} onChange={(e) => this.handleOnchangInput(e)} type="text"></input>
                <button onClick={() => this.handleOnclickAdd()} className="add">
                    Add
                </button>
            </>
        );
    }
}
export default AddTodo;
