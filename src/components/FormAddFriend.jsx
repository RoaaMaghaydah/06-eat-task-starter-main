import React, { useState } from "react";

function FormAddFriend({ onAddFriend, addToggel }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState(
    `https://i.pravatar.cc/48?u=${Date.now()}`
  );

  function handleSubmit(e) {

    e.preventDefault();

    if (!name) return;

    const newFriend = {
      id: Date.now(),
      name: name,
      image: imageUrl,
      balance: 0,
    };

    onAddFriend(newFriend);
    setName("");
    setImageUrl(`https://i.pravatar.cc/48?u=${Date.now()}`);
  }
  return (
    <>
     
      {addToggel ? (
        <form className="form-add-friend" onSubmit={handleSubmit}>
          <lable>🧑‍🤝‍🧑 Friend name</lable>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          <lable>🖼️ Image Url</lable>
          <input
            type="text"
            value={`https://i.pravatar.cc/48?u=${Date.now()}`}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button className="button">Add Friend</button>
        </form>
      ) : (
        ""
      )}
    </>
  );
}

export default FormAddFriend;
