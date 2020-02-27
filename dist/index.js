"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  // width: 100%;\n  color: #000000;\n  border: none;\n  text-decoration: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Btn = _styledComponents["default"].button(_templateObject());

var Button = function Button(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick;
  return _react["default"].createElement(Btn, {
    onClick: onClick
  }, children);
};

exports.Button = Button;