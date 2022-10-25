export default function Input({ id, name, set, type, value }) {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={(e) => set(e.target.value)}
      />
    </>
  );
}
