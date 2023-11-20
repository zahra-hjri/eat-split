import Button from "../Button/Button";

const Friend = ({ friend, onSelection, selectedFriend }) => {
  const isOpen = selectedFriend?.id === friend.id;
  return (
    <div
      className={`flex justify-between my-2 p-2 rounded-lg ${
        isOpen ? "bg-teal-900" : ""
      }`}
    >
      <div className="imgAndName flex">
        <div>
          <img
            className="h-10 w-10 rounded-full"
            src={friend.image}
            alt={friend.name}
          />
        </div>
        <div className="flex flex-col text-xs ml-2 mt-1">
          <span className="font-bold">{friend.name}</span>
          {friend.balance === 0 && (
            <span className="text-white">you and {friend.name} even</span>
          )}
          {friend.balance > 0 && (
            <span className="text-green-500">
              {friend.name} owes you {friend.balance}$
            </span>
          )}
          {friend.balance < 0 && (
            <span className="text-red-400">
              you owe {friend.name} {Math.abs(friend.balance)}$
            </span>
          )}
        </div>
      </div>
      <div className=" mt-1">
        <Button onClick={() => onSelection(friend)}>
          {isOpen ? "close" : "select"}
        </Button>
      </div>
    </div>
  );
};

export default Friend;
