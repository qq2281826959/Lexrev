"use strict";
exports.__esModule = true;
var react_1 = require("react");
// import { getHelloWord } from './api';
var logo_svg_1 = require("@/assets/svg/logo.svg");
var App = function () {
    var handleGetHelloWord = react_1.useCallback(function () {
        // getHelloWord({
        //   id: 1
        // })
        wx.updateAppMessageShareData({
            title: '测试',
            desc: '测试',
            link: 'http://m.lexrev.edu',
            imgUrl: 'http://m.lexrev.edu/favicon.ico',
            success: function () {
                console.log('分享');
            }
        });
    }, []);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("header", { className: "App-header" },
            react_1["default"].createElement("img", { src: logo_svg_1["default"], className: "App-logo", alt: "logo" }),
            react_1["default"].createElement("p", null,
                "Edit ",
                react_1["default"].createElement("code", null, "src/App.js"),
                " and save to reload."),
            react_1["default"].createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React")),
        react_1["default"].createElement("button", { onClick: handleGetHelloWord }, "Hello word")));
};
exports["default"] = App;
