import { useState } from "react";
import Button from "../Button/Button";
import FriendData from "../../FriendData";

const AddFriendForm = ({ friends, setFriends }) => {
  const freindsInitialNumber = FriendData.length + 1;
  const [name, setName] = useState("");
  const [image, setImage] = useState("././image");
  const [id, setId] = useState(freindsInitialNumber);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image) return;
    setId(id + 1);
    const newFriend = {
      name,
      image: `./${id}.jpg`,
      balance: 0,
      id,
    };

    setName("");
    setFriends([...friends, newFriend]);
    // setOpenFormAddFriend(!openFormAddFriend);
  };

  return (
    <div className="bg-teal-950 p-4  rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="flex justify-between">
          <label className="text-xs font-bold text-white">
            👭Friend Name :
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-32 rounded-md text-xs p-1"
            type="text"
          />
        </div>
        <div className="flex justify-between mt-2">
          <label className="text-xs font-bold text-white">🌆Image Url :</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-32 rounded-md text-xs p-1"
            type="text"
          />
        </div>
        <div className="flex justify-end mt-4 text-white ">
          <Button>Add</Button>
        </div>
      </form>
    </div>
  );
};

export default AddFriendForm;
