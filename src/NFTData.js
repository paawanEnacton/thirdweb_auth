import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useFetch from "./hooks/useFetch";

const NFTData = ({ walletAddress }) => {
  const [address, setAddress] = useState(null);

  const { data, error, isPending } = useFetch(
    `https://deep-index.moralis.io/api/v2/${address}/nft?chain=mumbai&format=decimal&normalizeMetadata=false&media_items=false`
  );

  useEffect(() => {
    setAddress(walletAddress);
  }, [address]);

  return (
    <div className="create">
      {address ? (
        <TableContainer
          component={Paper}
          style={{ width: "fit-content", overflowX: "hidden" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow style={{ backgroundColor: "#131417" }}>
                <TableCell style={{ color: "#c7c7cc" }}>NAME</TableCell>
                <TableCell style={{ color: "#c7c7cc" }}>TYPE</TableCell>
                <TableCell style={{ color: "#c7c7cc" }}>SYMBOL</TableCell>
                <TableCell style={{ color: "#c7c7cc" }}>
                  CONTRACT ADDRESS
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  style={{ backgroundColor: "#131417" }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    style={{ color: "#4a92fe" }}
                  >
                    {item.name}
                  </TableCell>
                  <TableCell style={{ color: "#4a92fe" }}>
                    {item.contract_type}
                  </TableCell>
                  <TableCell style={{ color: "#4a92fe" }}>
                    {item.symbol}
                  </TableCell>
                  <TableCell style={{ color: "#4a92fe" }}>
                    {item.token_address}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <div> Please connect your wallet</div>
      )}
    </div>
  );
};

export default NFTData;
