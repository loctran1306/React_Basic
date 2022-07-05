import axios from "axios";
import React from "react";
import "./ListUser.scss";
class ListUser extends React.Component {
    state = {
        ListUsers: [],
    };
    async componentDidMount() {
        let getData = await axios.get("https://reqres.in/api/users?page=2");
        this.setState({
            ListUsers: getData && getData.data && getData.data.data ? getData.data.data : [],
        });
    }
    render() {
        let { ListUsers } = this.state;
        return (
            <>
                <div className="title">this is List User</div>
                <div className="list-user-container">
                    <div className="list-user-content">
                        {ListUsers &&
                            ListUsers.length > 0 &&
                            ListUsers.map((item, index) => {
                                return (
                                    <div key={item.id} className="child-user">
                                        {index + 1} - {item.first_name} {item.last_name}
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </>
        );
    }
}
export default ListUser;
