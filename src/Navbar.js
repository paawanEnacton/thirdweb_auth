import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar = () => {
  const handleLogout = () => {};

  return (
    <nav className="navbar">
      <h1> ThirdWeb Auth </h1>
      <div className="links">
        <ThirdwebProvider activeChain="mumbai">
          <ConnectWallet theme="light" auth={{ loginOptional: false }} />
        </ThirdwebProvider>
        <button className="create-button" onClick={() => handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
