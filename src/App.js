import NFTData from "./NFTData";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <NFTData walletAddress={window.ethereum?.selectedAddress} />
      </div>
    </div>
  );
};
export default App;
