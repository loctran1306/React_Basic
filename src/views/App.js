import logo from "./logo.svg";
import "./App.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import MyComponent from "./Examples/ExCpn1.js";
import Mycpn from "./Examples/ExCpn2";
import ListTodo from "./Todo/ListTodo";
import Nav from "./Nav/Nav";
import Home from "./Examples/Home";
import ListUser from "./ListUser/ListUser";
import DetailUser from "./ListUser/DetailUser";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
/**
 * có 2 loại components: class cpn/ func cpn(func, arrow)
 *
 */
function App() {
    return (
        <Router>
            <div className="App">
                <Nav />
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    {/* <ListTodo /> */}
                    {/* <Mycpn /> */}
                    {/* <MyComponent /> */}
                    {/* <MyComponent></MyComponent> */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/todo" element={<ListTodo />} />
                        <Route path="/about" element={<Mycpn />} />
                        <Route path="/user" element={<ListUser />} />
                        <Route path="/user/:id" element={<DetailUser />} />
                    </Routes>
                </header>
                <ToastContainer
                    position="top-right"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <ToastContainer />
            </div>
        </Router>
    );
}

export default App;

