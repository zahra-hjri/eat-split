import "./App.css";
import "./index.css";
import { useState } from "react";
import FriendList from "./components/FriendList/FriendList";
import Button from "./components/Button/Button";
import AddFriendForm from "./components/AddFriendForm/AddFriendForm";
import FriendData from "./FriendData";
import Split from "./components/Split/Split";

function App() {
  const [openFormAddFriend, setOpenFormAddFriend] = useState(false);
  const [friends, setFriends] = useState(FriendData);
  const handleOpenAddFriend = () => {
    setOpenFormAddFriend(!openFormAddFriend);
  };
  return (
    <div className="app min-h-screen">
      <h1 className="font-bold text-white text-xl md:text-2xl lg:text-3xl flex justify-center pt-10">
        🍕 Splitting The Food Bill... 🍔
      </h1>
      <div className="py-8 md:flex md:justify-center">
        <div className="sideBar flex flex-col w-72 lg:w-80 mx-auto md:mx-5">
          <FriendList friends={friends} />
          {openFormAddFriend && (
            <AddFriendForm friends={friends} setFriends={setFriends} />
          )}
          <div className="text-white flex justify-end my-3">
            <Button onOpenFormAdd={handleOpenAddFriend}>
              {openFormAddFriend ? "Close" : "Add Friend"}
            </Button>
          </div>
        </div>
        <div className="w-72 lg:w-96 mx-auto md:mx-5 py-4">
          <Split />
        </div>
      </div>
    </div>
  );
}

export default App;
