import React from "react";

// class Childcpn extends React.Component {
//     render() {
//         // console.log("check props: ", this.props);
//         let { name, age, arrJobs } = this.props;
//         return (
//             <>
//                 <div>
//                     {" "}
//                     I'm {name} and {age} year old
//                 </div>
//                 <div className="job-lists">
//                     {arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title}-{item.salary}
//                             </div>
//                         );
//                     })}
//                 </div>
//             </>
//         );
//     }
// }
class Childcpn extends React.Component {
    state = {
        showJobs: false,
    };
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs,
        });
    };
    handleOnclickDelete = (job) => {
        console.log("complete delete: ", job);
        this.props.delAJob(job);
    };
    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        return (
            <>
                {showJobs === false ? (
                    <div>
                        <button onClick={() => this.handleShowHide()}>show</button>
                    </div>
                ) : (
                    <>
                        <div className="job-lists">
                            {arrJobs.map((item, index) => {
                                return (
                                    <div key={item.id}>
                                        {item.title} - {item.salary}$ <></>{" "}
                                        <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>hide</button>
                        </div>
                    </>
                )}
            </>
        );
    }
}

// const Childcpn = (props) => {
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className="job-lists">
//                 {arrJobs.map((item, index) => {
//                     return (
//                         <div key={item.id}>
//                             {item.title}-{item.salary}$
//                         </div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };

export default Childcpn;
