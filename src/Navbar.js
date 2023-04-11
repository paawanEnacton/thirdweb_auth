import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1> ThirdWeb Auth </h1>
      <div className="links">
        <ThirdwebProvider activeChain="mumbai">
          <ConnectWallet theme="light" />
        </ThirdwebProvider>
      </div>
    </nav>
  );
};

export default Navbar;
