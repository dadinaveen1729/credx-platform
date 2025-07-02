export default function Dashboard({ user }) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-2">Hello, {user?.email}</h2>
      <p>🚀 Your credit summary and bills will appear here.</p>
    </div>
  );
}