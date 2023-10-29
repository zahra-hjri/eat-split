import Friend from "../Friend/Friend";

const FriendList = ({ friends, selectedFriend, onSelection }) => {
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
