import React from "react";
import { connect } from "react-redux/es/exports";
import img from "../../assets/images/anh1.png";
// import colors from "../HOC/Color";
class Home extends React.Component {
    handleOnclickX = (user) => {
        this.props.deleteUser(user);
    };
    handleOnlickButtonAddUser = () => {
        this.props.addUser();
    };
    render() {
        let reduxData = this.props.reduxData;
        return (
            <>
                Hello !!! this is my homepage
                <img alt="anh 1" src={img} style={{ width: "200px", height: "200px", margin: "10px" }} />
                {reduxData &&
                    reduxData.length > 0 &&
                    reduxData.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name}
                                <span onClick={() => this.handleOnclickX(item)}> x</span>
                            </div>
                        );
                    })}
                <button onClick={() => this.handleOnlickButtonAddUser()}>Add User</button>
            </>
        );
    }
}
function mapStateToProps(state) {
    return {
        reduxData: state.ListUsers,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        deleteUser: (user) => dispatch({ type: "delete_user", payload: user }),
        addUser: () => dispatch({ type: "add_user" }),
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
// export default colors(Home);
