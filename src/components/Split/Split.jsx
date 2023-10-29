import { useState } from "react";
import Button from "../Button/Button";

const Split = ({ selectedFriend, onSplitBill }) => {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  // const paidByFriend = bill - paidByUser;
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  };

  return (
    <div className="bg-teal-950 p-4 rounded-lg">
      <h2 className="text-white font-bold text-center mt-2 mb-7">
        Split a bill with {selectedFriend.name}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <label className="text-xs font-bold text-white">
            💰 Bill value :
          </label>
          <input
            value={bill}
            onChange={(e) => setBill(Number(e.target.value))}
            className="w-32 rounded-md text-xs p-1 text-center"
            type="text"
          />
        </div>
        <div className="flex justify-between mt-4">
          <label className="text-xs font-bold text-white">
            👨‍💻 Your expensive:
          </label>
          <input
            value={paidByUser}
            onChange={(e) =>
              setPaidByUser(
                Number(e.target.value) > bill
                  ? paidByUser
                  : Number(e.target.value)
              )
            }
            className="w-32 rounded-md text-xs p-1 text-center"
            type="text"
          />
        </div>
        <div className="flex justify-between mt-4">
          <label className="text-xs font-bold text-white">
            🎃 {selectedFriend.name} expensive:
          </label>
          <input
            value={paidByFriend}
            disabled
            className="w-32 rounded-md text-xs p-1 text-white text-center"
            type="text"
          />
        </div>
        <div className="flex justify-between mt-4">
          <label className="text-xs font-bold text-white">
            🤑 Who is paiying the bill?
          </label>
          <select
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
            className="w-24 rounded-md text-xs px-1 pb-0.5 text-center"
            type="text"
          >
            <option value="user" className="text-center">
              you
            </option>
            <option value="friend" className="text-center">
              {selectedFriend.name}
            </option>
          </select>
        </div>
        <div className="flex justify-end mt-10 text-white">
          <Button>split bill</Button>
        </div>
      </form>
    </div>
  );
};

export default Split;
