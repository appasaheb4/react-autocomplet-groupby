/* eslint-disable  */
import React from 'react';

export interface AutocompleteGroupByProps {
  data?: any[];
  onChange?: () => void;
  onClose?: () => void;
}

const AutocompleteGroupBy = (props: AutocompleteGroupByProps) => {
  const [data, setData] = React.useState<any[]>([]);
  const [options, setOptions] = React.useState<any[]>([]);
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
      let filterArray: any[] = [];
      data.filter((item) => {
        item.children.filter((children) => {
          const childrenItem =
            children.title.toLowerCase().indexOf(search.toLowerCase()) > -1;
          if (childrenItem) {
            const isSameArray = filterArray.filter((filterItem, index) => {
              if (filterItem.name === item.name) {
                const newChildren = filterArray[index].children.concat(
                  children
                );
                filterArray[index] = {
                  ...filterArray[index],
                  children: newChildren,
                };
              }
            });
            if (isSameArray.length < 1) {
              filterArray.push({ ...item, children: [children] });
            }
            const uniqueChars = uniqByKeepFirst(filterArray, (it) => it.name);
            filterArray = uniqueChars;
          }
        });
      });
      setOptions(filterArray);
    } else {
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

  return (
    <>
      <div className="p-2">
        <input
          placeholder="Search Menu Item"
          //   value={props.value}
          className="leading-4 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-base border border-gray-300 rounded-md"
          onKeyUp={onKeyUp}
          onChange={onChange}
        />
        {options
          ? options?.length > 0 && (
              <div className="mt-1">
                <ul className="bg-white p-2 rounded-sm">
                  {options?.map((item, index) => (
                    <>
                      <li key={index} className="text-gray-400">
                        {item.title}
                      </li>
                      <ul className="ml-4">
                        {item.children.map((children, childrenIndex) => (
                          <li
                            key={childrenIndex}
                            className="hover:bg-gray-200 focus:outline-none cursor-pointer"
                            onClick={async () => {
                              //console.log({ item });
                              setOptions([]);
                            }}
                          >
                            {children.title}
                          </li>
                        ))}
                      </ul>
                    </>
                  ))}
                </ul>
              </div>
            )
          : null}
      </div>
    </>
  );
};
export default AutocompleteGroupBy;
