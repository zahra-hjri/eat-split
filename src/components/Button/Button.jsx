const Button = ({ children, onOpenFormAdd }) => {
  return (
    <div>
      <button
        onClick={onOpenFormAdd}
        className="bg-green-600 rounded-lg px-2 py-1 text-xs"
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
