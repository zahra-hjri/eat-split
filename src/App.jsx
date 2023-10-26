import "./App.css";
import "./index.css";
import { useState } from "react";
import FriendList from "./components/FriendList/FriendList";
import Button from "./components/Button/Button";
import AddFriendForm from "./components/AddFriendForm/AddFriendForm";
import FriendData from "./FriendData";

function App() {
  const [openFormAddFriend, setOpenFormAddFriend] = useState(false);
  const [friends, setFriends] = useState(FriendData);
  const handleOpenAddFriend = () => {
    setOpenFormAddFriend(!openFormAddFriend);
  };
  return (
    <div className="h-screen py-8">
      <div className="sideBar flex flex-col w-72 mx-auto">
        <FriendList friends={friends} />
        {openFormAddFriend && (
          <AddFriendForm
            friends={friends}
            setFriends={setFriends}
            setOpenFormAddFriend={setOpenFormAddFriend}
          />
        )}
        <div className="text-white flex justify-end my-3">
          <Button onOpenFormAdd={handleOpenAddFriend}>
            {openFormAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
