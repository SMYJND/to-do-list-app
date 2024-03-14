import React from "react";
import ItemsList from "../components/ItemsList";

function Content({ items, handleCheck, handleDelete }) {
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p>Your list is empty</p>
      )}
    </main>
  );
}

export default Content;
