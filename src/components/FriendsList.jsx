import React from "react";

function FriendsList({ friendList, onClickToggel, onGetID,friendId }) {
  function handelAddFrinend(id) {
    onGetID(id);
   if(id==friendId){
    onClickToggel();
  }
  }

  return (
    <ul>
      {friendList.map((friend) => (
        <li key={friend.id}>
          <img src={friend.image} alt={friend.name} />
          <h3>{friend.name}</h3>
          <p
            className={
              friend.balance == 0 ? `` : friend.balance > 0 ? "green" : "red"
            }
          >
            {friend.balance == 0
              ? `You and Anthony are even`
              : friend.balance > 0
              ? `${friend.name} owes you ${Math.abs(friend.balance)}$`
              : `You owe ${friend.name} ${Math.abs(friend.balance)}$`}
          </p>

          <button
            className="button"
            onClick={() => handelAddFrinend(friend.id)}
          >
            Select
          </button>
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;
