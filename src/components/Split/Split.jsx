import Button from "../Button/Button";

const Split = ({ selectedFriend }) => {
  const handleSubmit = (e) => {
    e.prevantDefault();
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
          <input className="w-32 rounded-md text-xs p-1" type="text" />
        </div>
        <div className="flex justify-between mt-4">
          <label className="text-xs font-bold text-white">
            👨‍💻 Your expensive:
          </label>
          <input className="w-32 rounded-md text-xs p-1" type="text" />
        </div>
        <div className="flex justify-between mt-4">
          <label className="text-xs font-bold text-white">
            🎃 {selectedFriend.name} expensive:
          </label>
          <input disabled className="w-32 rounded-md text-xs p-1" type="text" />
        </div>
        <div className="flex justify-between mt-4">
          <label className="text-xs font-bold text-white">
            🤑 Who is paiying the bill?
          </label>
          <select className="w-24 rounded-md text-xs px-1 pb-0.5" type="text">
            <option>you</option>
            <option>{selectedFriend.name}</option>
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
