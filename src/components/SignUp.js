import { Button, TextField } from "@mui/material";
import { Box, flexbox } from "@mui/system";
import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("")

  return (
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
              style={{ backgroundColor: "#EEBC1D", marginLeft:"90px", marginTop: "20px" }}
            >
              Sign up
            </Button>
    </Box>
  );
}

export default SignUp;
