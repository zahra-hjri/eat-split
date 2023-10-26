import Friend from "../Friend/Friend";
// import FriendData from "../../FriendData";

const FriendList = ({ friends }) => {
  // const friends = FriendData;

  return (
    <div className="">
      <div className=" text-white">
        {friends.map((friend) => {
          return <Friend key={friend.id} friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default FriendList;
