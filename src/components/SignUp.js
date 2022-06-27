import { Button, TextField } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import { useState } from "react";
import { createUserWithEmailAndPassword ,  onAuthStateChanged} from "firebase/auth";
import { auth } from "../firebase/firebase-config";

// import { async } from "q";
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      return;
    }
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error, "error");
    }
  };


  const margin = { marginbottom: "5px" };

  return (
    <div>
      <Box
        p={3}
        style={{ display: flexbox, flexDirection: "column", gap: "20px" }}
      >
        <TextField
          className={margin}
          variant="outlined"
          type="email"
          label="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        ></TextField>
        <TextField
          style={{ marginBottom: "20px", marginTop: "20px" }}
          variant="outlined"
          type="password"
          label="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
        ></TextField>
        <TextField
          className={margin}
          variant="outlined"
          type="password"
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
          Sign up
        </Button>
      </Box>
    </div>
  );
}

export default SignUp;
