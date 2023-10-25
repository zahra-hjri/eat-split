const Button = ({ children }) => {
  return (
    <div>
      <button className="bg-slate-900 rounded-lg px-2 py-1 text-xs">
        {children}
      </button>
    </div>
  );
};

export default Button;
