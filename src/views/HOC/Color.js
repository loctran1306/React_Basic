// hight order component
import React from "react";

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const colors = (WrapCpn) => {
    const getColor = getRandomColor();
    return (props) => {
        <div style={{ color: getColor }}>
            <WrapCpn {...props} />
        </div>;
    };
};
export default colors;
