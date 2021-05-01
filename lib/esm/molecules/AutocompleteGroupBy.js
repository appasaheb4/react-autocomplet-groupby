var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable  */
import React from 'react';
const AutocompleteGroupBy = (props) => {
    const [data, setData] = React.useState([]);
    const [options, setOptions] = React.useState([]);
    React.useEffect(() => {
        setData(props.data);
        //setOptions(props.data)
    }, [props]);
    const uniqByKeepFirst = (a, key) => {
        const seen = new Set();
        return a.filter((item) => {
            const k = key(item);
            return seen.has(k) ? false : seen.add(k);
        });
    };
    const filter = (search, data) => {
        if (search) {
            // const filteredOptions = options?.filter(
            //   (option) => option.title.toLowerCase().indexOf(search.toLowerCase()) > -1
            // )
            let filterArray = [];
            data.filter((item) => {
                item.children.filter((children) => {
                    const childrenItem = children.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
                    if (childrenItem) {
                        const isSameArray = filterArray.filter((filterItem, index) => {
                            if (filterItem.name === item.name) {
                                const newChildren = filterArray[index].children.concat(children);
                                filterArray[index] = Object.assign(Object.assign({}, filterArray[index]), { children: newChildren });
                            }
                        });
                        if (isSameArray.length < 1) {
                            filterArray.push(Object.assign(Object.assign({}, item), { children: [children] }));
                        }
                        const uniqueChars = uniqByKeepFirst(filterArray, (it) => it.name);
                        filterArray = uniqueChars;
                    }
                });
            });
            setOptions(filterArray);
        }
        else {
            setOptions([]);
        }
    };
    const onChange = (e) => {
        const search = e.target.value;
        filter(search, data);
    };
    const onKeyUp = (e) => {
        const charCode = e.which ? e.which : e.keyCode;
        if (charCode === 8) {
            const search = e.target.value;
            filter(search, data);
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "p-2" },
            React.createElement("input", { placeholder: "Search Menu Item", 
                //   value={props.value}
                className: "leading-4 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border border-gray-300 rounded-md", onKeyUp: onKeyUp, onChange: onChange }),
            options
                ? (options === null || options === void 0 ? void 0 : options.length) > 0 && (React.createElement("div", { className: "mt-1" },
                    React.createElement("ul", { className: "bg-white p-2 rounded-sm" }, options === null || options === void 0 ? void 0 : options.map((item, index) => (React.createElement(React.Fragment, null,
                        React.createElement("li", { key: index, className: "text-gray-400" }, item.title),
                        React.createElement("ul", { className: "ml-4" }, item.children.map((children, childrenIndex) => (React.createElement("li", { key: childrenIndex, className: "hover:bg-gray-200 focus:outline-none cursor-pointer", onClick: () => __awaiter(void 0, void 0, void 0, function* () {
                                //console.log({ item });
                                setOptions([]);
                            }) }, children.title))))))))))
                : null)));
};
export default AutocompleteGroupBy;
//# sourceMappingURL=AutocompleteGroupBy.js.map