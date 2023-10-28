import Friend from "../Friend/Friend";
// import FriendData from "../../FriendData";

const FriendList = ({ friends, selectedFriend, onSelection }) => {
  // const friends = FriendData;

  return (
    <div className="">
      <div className=" text-white">
        {friends.map((friend) => {
          return (
            <Friend
              key={friend.id}
              friend={friend}
              selectedFriend={selectedFriend}
              onSelection={onSelection}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FriendList;
