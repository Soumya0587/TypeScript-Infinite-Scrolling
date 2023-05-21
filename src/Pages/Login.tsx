import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from '@chakra-ui/react'
import "../Styles/Login.css"
const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const naviagte = useNavigate();
  const toast = useToast()
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform authentication logic here
    if (username === "foo" && password === "bar") {
      // Authentication successful, navigate to home route
      localStorage.setItem("Authenticated","Yes")
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      naviagte("/home");
    } else if(username === "" || password === ""){
        toast({
            title: 'Empty Credential',
            description: "Please fill your credential",
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
    }
    else {
      // Authentication failed, display an error message
      console.log("Invalid credentials");
      toast({
        title: 'Wrong Credential',
        description: "You have entered wrong credential",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  };

  return (
    <div className="auth_container">
      
      <form className="form" onSubmit={handleSubmit}>
      <h2>Sign up</h2>
        
          <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
        
          <input
          placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
        />
        <button  className="animated-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
