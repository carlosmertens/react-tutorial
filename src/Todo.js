import React, { useState } from "react";

export default function App() {
  const [newListItem, setNewListItem] = useState(""); // To add Item
  const [listItems, setListItems] = useState([
    "Banana",
    "Apple",
    "Broccoli",
    "Potatos"
  ]); // Initiate List (Array)

  return (
    <div className="App">
      <h1>Shopping List</h1>

      <form
        onSubmit={e => {
          e.preventDefault();
          setListItems([...listItems, newListItem]); // Add new item to array
          setNewListItem(""); // Clear input box
        }}
      >
        <label>
          My new item{" "}
          <input
            onChange={e => setNewListItem(e.target.value)}
            value={newListItem}
            type="text"
          />
        </label>
        <button>Add Item</button>

        <button
          onClick={e => {
            e.preventDefault();
            e.stopPropagation();

            // Remove all todos - delete listItems
            setListItems([]);
          }}
        >
          Remove All Items
        </button>
      </form>

      <ul>
        {listItems.map((singleListItem, index) => (
          <li>
            {/* Look into Array.filter() */}
            <button
              style={{ marginRight: 8 }}
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();

                setListItems([
                  ...listItems.filter(item => item !== singleListItem)
                ]);
              }}
            >
              X
            </button>
            <b>
              {index + 1}. {singleListItem}
            </b>
          </li>
        ))}
      </ul>
    </div>
  );
}
