import React from "react";

/*
JSX return block(1 khối duy nhất)
+néu muốn nhiều khối thì bọc trong thẻ 
 <React.Fragment>..</React.Fragment> hoac <></>

-mot lan setState thi se re-render 1 lan
*/
class MyComponent extends React.Component {
    state = {
        name: "Tran Thanh Loc",
        age: "22",
    };

    handleOnchangeName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleClickButton = () => {
        alert("Click me");
    };

    render() {
        return (
            <>
                <div className="First">
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnchangeName(event)} />
                    hello my component, my name is {this.state["name"]}
                </div>
                <div className="second">hello my component, my age is {this.state.age}</div>
                <div className="thirst">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        );
    }
}

export default MyComponent;
