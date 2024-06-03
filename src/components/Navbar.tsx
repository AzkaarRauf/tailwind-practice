export default function Navbar() {
  return (
    <nav className="p-4 py-6 border flex justify-between">
      {/* Left */}
      <div className="order-first">Tailwind</div>

      {/* Right */}

      <div className="flex flex-initial gap-6 justify-between w-4">
        <div className="flex gap-6">

        <div>Pricing</div>
        <div>Components</div>
        <div>Templates</div>
        <div>Contacts</div>
        </div>
        <div className="flex gap-6">

        <div>Sign In</div>
        <div>Get all Access</div>
        </div>
      </div>
    </nav>
  );
}
