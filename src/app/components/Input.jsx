export function Input({ value, onChange, placeholder, type="text"}) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="w-full p-3 text-gray-500 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
}
