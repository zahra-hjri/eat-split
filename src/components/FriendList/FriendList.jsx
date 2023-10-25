import Friend from "../Friend/Friend";
import FriendData from "../../FriendData";

const FriendList = () => {
  const friends = FriendData;

  return (
    <div className="flex justify-center">
      <div className="p-4 text-white">
        {friends.map((friend) => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default FriendList;
