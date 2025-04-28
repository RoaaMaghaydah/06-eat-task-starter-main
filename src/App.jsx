import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendsList from "./components/FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [toggel, setToggel] = useState(false);
  const [splitToggle, setSplitToggle] = useState(false);
  const [friend, setFriend] = useState(initialFriends);
  const [friendId, setFriendID] = useState("");

  function handleAddFriend(addNewFriend) {
    setFriend((i) => [...i, addNewFriend]);
  }

  function onHandelClick() {
    setToggel((i) => !i);
  }

  function onHandelClickAddFriend() {
    setSplitToggle((old) => !old);
  }

  function handelID(newid) {
    setFriendID(() => newid);
  }

  function onHandelBalance(newBalance) {
    setFriend((friends) =>
      friends.map((friend) =>
        friend.id == friendId ? { ...friend, balance: newBalance } : friend
      )
    );
  }


  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friendList={friend}
          friendId={friendId}
          onClickToggel={onHandelClickAddFriend}
          onGetID={handelID}
        />
        <FormAddFriend onAddFriend={handleAddFriend} addToggel={toggel} />
        <Button onClick={onHandelClick}>
          {!toggel ? <span>Add Frind</span> : <span>Close</span>}
        </Button>
      </div>
      <FormSplitBill
        splitToggle={splitToggle}
        friendId={friendId}
        friendList={friend}
        OnsetFriend={onHandelBalance}
        onClickToggel={onHandelClickAddFriend}
      />
    </div>
  );
}

export default App;
