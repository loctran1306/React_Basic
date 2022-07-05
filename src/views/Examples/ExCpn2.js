import React from "react";
import Childcpn from "./childcpn";
import AddComponent from "./AddComponent";

class Mycpn extends React.Component {
    state = {
        arrayJobs: [
            { id: "abcJob1", title: "developer", salary: "500" },
            { id: "abcJob2", title: "Tester", salary: "400" },
            { id: "abcJob3", title: "Project managers", salary: "1000" },
        ],
    };
    addNewJob = (job) => {
        console.log("new add: ", job);
        let current = this.state.arrayJobs;
        current.push(job);
        this.setState({
            arrayJobs: current,
        });
        // this.setState({
        //     arrayJobs: [...this.state.arrayJobs, job],
        // });
    };
    delAJob = (job) => {
        let current = this.state.arrayJobs;
        current = current.filter((item) => item.id !== job.id);
        this.setState({
            arrayJobs: current,
        });
    };
    // componentDidUpdate(prvprops, prvstate) {
    //     console.log("hmm", "previous:", prvstate, "current: ", this.state);
    // }
    // componentDidMount() {
    //     console.log("ahihi");
    // }
    render() {
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />

                <Childcpn delAJob={this.delAJob} name={"Loc"} age={"22"} arrJobs={this.state.arrayJobs} />
            </>
        );
    }
}
export default Mycpn;
