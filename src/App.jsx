import React, { useState } from "react";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  const [showEdit, setShowEdit] = useState(-1);
  const [updatedText, setUpdatedText] = useState("");

  function addItem() {
    // ! Check for empty item
    if (!newItem) {
      alert("Press enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    // Add new item to items array
    setItems((oldList) => [...oldList, item]);

    // Reset newItem back to original state
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-purple-600">
      <main className="bg-white p-4 rounded min-w-[700px] shadow max-h-[400px] overflow-y-scroll">
        <h1 className=" flex items-center justify-center text-2xl mb-4 text-purple-600">
          TODO LIST
        </h1>
        <div className="flex mb-6">
          <input
            type="text"
            className="w-full p-3 outline-none border-2 rounded-l-sm border-purple-600"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button onClick={() => addItem()} className="flex items-center justify-center w-16">
            <span class="material-symbols-outlined bg-purple-600 w-full h-full text-white flex items-center justify-center rounded-r-sm border-2 text-3xl border-purple-600">
              add
            </span>
          </button>
        </div>
        <div>
          <ul className="p-4">
          {items.map((item) => {
            return (
              <div>
                <li key={item.id} onClick={() => setShowEdit(item.id)}>
                  <div className="flex flex-row justify-between mb-4">
                    <span className="">{item.value}</span>
                    <div className="flex gap-2">
                      <span onClick={() => deleteItem(item.id)} class="material-symbols-outlined text-red-600 cursor-pointer">
                        delete
                      </span>
                    </div>
                  </div>
                </li>
              </div>
            );
          })}
        </ul>
        </div>
      </main>
    </div>
  );
}

export default App;