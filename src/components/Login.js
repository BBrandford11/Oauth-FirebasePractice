import { Button, TextField } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { async } from "q";
import { auth } from "../firebase/firebase-config";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("")

  const handleSubmit = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error, "error");
    }
  };

  const mapp = document.querySelectorAll("p > div");

  console.log(mapp, "mapp login");

  return (
    <div>
      <Box
        p={3}
        style={{ display: flexbox, flexDirection: "column", gap: "20px" }}
      >
        <TextField
          variant="outlined"
          type="email"
          label="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        ></TextField>
        <TextField
          style={{ marginTop: "20px" }}
          variant="outlined"
          type="password"
          label="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        ></TextField>
        <Button
          variant="contained"
          size="large"
          style={{
            backgroundColor: "#EEBC1D",
            marginLeft: "90px",
            marginTop: "20px",
          }}
          onClick={handleSubmit}
        >
          Log In
        </Button>
      </Box>
    </div>
  );
}

export default Login;
