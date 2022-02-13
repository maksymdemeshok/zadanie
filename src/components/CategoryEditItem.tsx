import React, { useState, useRef } from "react";
import { putData } from "../ajax/putData";
type CategoryEditItemProps = {
  uid: string;
  id: number;
  name: string;
};

export const CategoryEditItem = (props: CategoryEditItemProps) => {

  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const requestBody = {
    id: 0,
    uid: props.uid,
    name: inputRef.current?.value,
    updated_at: "2022-02-12T00:40:09.159Z",
    status: "ENABLED",
  };

  const onSaveClick = (event: React.MouseEvent) => {
    putData("product_categories", props.id, requestBody);

  };

  return (
    <>
      <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td className="d-flex flex-row justify-content-evenly align-items-center">
          <input
            type="text"
            ref={inputRef}
            placeholder="New name..."
            onChange={onInputChange}
            data-id={props.id}
            value={value}
          />
          <button onClick={onSaveClick} className="btn btn-primary">
            Save
          </button>
        </td>
      </tr>
    </>
  );
};
