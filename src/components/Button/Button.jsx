const Button = ({ children, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-green-600 rounded-lg px-2 py-1 text-xs"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
