import React, {useRef, useState } from "react";
import { putData } from "../ajax/putData";

type ProductsEditItemProps = {
  id: number;
  name: string;
  uid: number;
  categoryName: string;
  category_id: number;
  type: string;
  measure_type: string;
  category_uid: string;
  categories: any[]
};

export const ProductsEditItem = (props: ProductsEditItemProps) => {

  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const selectRef = useRef<HTMLSelectElement>(null);

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const requestBody = {
    id: props.id,
    name: inputRef.current?.value,
    uid: props.uid,
    category_id: props.category_id,
    measure_type: props.measure_type,
    type: props.type,
    tax_id:1,
    category: {
      name: selectRef.current?.value,
      id: props.category_id,
      status: "ENABLED",
      updatedAt: "2022-02-12T00:40:09.159Z",
      uid: props.category_uid,
    },
  };
  const onSaveClick = (event: React.MouseEvent) => {
    putData("products", props.id, requestBody);
 
  };


  return (
    <>

        <tr>
          <td>{props.id}</td>
          <td>{props.name}</td>
          <td>{props.categoryName}</td>
          <td className="d-flex flex-row justify-content-between align-items-center">
            <input
            
              type="text"
              ref={inputRef}
              placeholder="New name..."
              onChange={onInputChange}
              data-id={props.id}
              value={value}
            />
            <select ref={selectRef} defaultValue={"Select category"}>
              <option value={"Select category"}>Select category</option>
              {props.categories.map((category: any) => (
                <option key={category.id}>{category.name}</option>
              ))}
            </select>
            <button onClick={onSaveClick} className="btn btn-primary">
              Save
            </button>
          </td>
        </tr>
      {}
    </>
  );
};
