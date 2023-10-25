import Button from "../Button/Button";

const Friend = ({ friend }) => {
  return (
    <div className="flex justify-between my-2 p-2 rounded-lg hover:bg-slate-700 w-72">
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
            <span className="text-white">you and freind even</span>
          )}
          {friend.balance > 0 && (
            <span className="text-green-400">you and freind even</span>
          )}
          {friend.balance < 0 && (
            <span className="text-red-500">you and freind even</span>
          )}
        </div>
      </div>
      <div className="btnn mt-1">
        <Button>select</Button>
      </div>
    </div>
  );
};

export default Friend;
