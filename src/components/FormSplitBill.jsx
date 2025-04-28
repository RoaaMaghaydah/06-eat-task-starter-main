import React, { useState, useEffect } from "react";

function FormSplitBill({ splitToggle, friendId, friendList, OnsetFriend,onClickToggel }) {
  const [payBy, setPayBy] = useState("user");
  const [bill, setBill] = useState();
  const [expense, setExpense] = useState();
  const [friendExpense, setFriendExpense] = useState();

  useEffect(() => {
    if (bill >= 0 && expense >= 0) {
      setFriendExpense(() => Number(bill - expense));
    }
  }, [bill, expense]);

  function onHandelbill(e) {
    e.preventDefault();
    const friend = friendList.find((elem) => elem.id == friendId);
    if (friend) {
      const newBalance =
        payBy === "user"
          ? friendExpense - Math.abs(friend.balance)
          : friend.balance - expense;
      OnsetFriend(newBalance);
       
    }

    onClickToggel();
    setBill();
    setExpense();
    setFriendExpense();
  }

  return (
    <>
      {splitToggle ? (
        <form className="form-split-bill" onSubmit={onHandelbill}>
          <h2>Split a bill with Clark</h2>
          <label>💵 Bill value</label>
          <input
            type="number"
            value={bill}
            onChange={(e) => {
              setBill(Number(e.target.value));
            }}
          />
          <label> 🧍‍♂️Your expense</label>
          <input
            type="number"
            min="0"
            max="1000000000000000"
            value={expense}
            onChange={(e) => {
              setExpense(Number(e.target.value));
            }}
          />
          {friendList.map((elem) =>
            elem.id == friendId ? (
              <>
                <label>🧑‍🤝‍🧑{elem.name} expense</label>
                <input type="number" disabled value={bill - expense} />
                <label>🤑 Who is paying the bill</label>
                <select
                  value={payBy}
                  onChange={(e) => {
                    setPayBy(e.target.value);
                  }}
                >
                  <option value="user">You</option>
                  <option value="friend">{elem.name}</option>
                </select>
                <button className="button" >Split bill</button>
              </>
            ) : (
              <></>
            )
          )}
        </form>
      ) : (
        ""
      )}
    </>
  );
}

export default FormSplitBill;
