export default function Navbar({ user }) {
  return (
    <nav className="bg-black text-white p-4 flex justify-between">
      <span className="font-semibold text-lg">CREDX USA</span>
      <span>{user ? user.email : 'Guest'}</span>
    </nav>
  );
}