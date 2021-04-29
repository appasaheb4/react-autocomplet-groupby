Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var AutocompleteGroupBy = function (props) {
    var _a = React.useState(), data = _a[0], setData = _a[1];
    var _b = React.useState(), options = _b[0], setOptions = _b[1];
    React.useEffect(function () {
        setData(props.data);
        //setOptions(props.data)
    }, [props]);
    var uniqByKeepFirst = function (a, key) {
        var seen = new Set();
        return a.filter(function (item) {
            var k = key(item);
            return seen.has(k) ? false : seen.add(k);
        });
    };
    var filter = function (search, data) {
        if (search) {
            // const filteredOptions = options?.filter(
            //   (option) => option.title.toLowerCase().indexOf(search.toLowerCase()) > -1
            // )
            var filterArray_1 = [];
            data.filter(function (item) {
                item.children.filter(function (children) {
                    var childrenItem = children.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
                    if (childrenItem) {
                        var isSameArray = filterArray_1.filter(function (filterItem, index) {
                            if (filterItem.name === item.name) {
                                var newChildren = filterArray_1[index].children.concat(children);
                                filterArray_1[index] = __assign(__assign({}, filterArray_1[index]), { children: newChildren });
                            }
                        });
                        if (isSameArray.length < 1) {
                            filterArray_1.push(__assign(__assign({}, item), { children: [children] }));
                        }
                        var uniqueChars = uniqByKeepFirst(filterArray_1, function (it) { return it.name; });
                        filterArray_1 = uniqueChars;
                    }
                });
            });
            setOptions(filterArray_1);
        }
        else {
            setOptions([]);
        }
    };
    var onChange = function (e) {
        var search = e.target.value;
        filter(search, data);
    };
    var onKeyUp = function (e) {
        var charCode = e.which ? e.which : e.keyCode;
        if (charCode === 8) {
            var search = e.target.value;
            filter(search, data);
        }
    };
    return (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement("div", { className: "p-2" },
            React__default['default'].createElement("input", { placeholder: "Search Menu Item", 
                //   value={props.value}
                className: "leading-4 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border border-gray-300 rounded-md", onKeyUp: onKeyUp, onChange: onChange }),
            options
                ? (options === null || options === void 0 ? void 0 : options.length) > 0 && (React__default['default'].createElement("div", { className: "mt-1" },
                    React__default['default'].createElement("ul", { className: "bg-white p-2 rounded-sm" }, options === null || options === void 0 ? void 0 : options.map(function (item, index) { return (React__default['default'].createElement(React__default['default'].Fragment, null,
                        React__default['default'].createElement("li", { key: index, className: "text-gray-400" }, item.title),
                        React__default['default'].createElement("ul", { className: "ml-4" }, item.children.map(function (children, childrenIndex) { return (React__default['default'].createElement("li", { key: childrenIndex, className: "hover:bg-gray-200 focus:outline-none cursor-pointer", onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    console.log({ item: item });
                                    setOptions([]);
                                    return [2 /*return*/];
                                });
                            }); } }, children.title)); })))); }))))
                : null)));
};

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AutocompleteGroupBy: AutocompleteGroupBy
});

exports.Molecules = index;
//# sourceMappingURL=index.ts.map
