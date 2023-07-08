import { useState } from "react";

const RegisterForm = ({ users, setUsers }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    setUsers([...users, { name, age, email, password }]);
    setName("");
    setAge("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={(e) => registerUser(e)}>
      <span>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Enter your name"
          type="text"
          minLength={2}
          maxLength={20}
        />
        <input
          onChange={(e) => setAge(e.target.value)}
          value={age}
          placeholder="Age"
          type="number"
        />
      </span>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Enter your email"
        type="email"
        minLength={6}
        maxLength={30}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Enter a password"
        type="password"
        autoComplete="true"
        minLength={4}
        maxLength={24}
      />
      <input type="submit" value="Register" />
    </form>
  );
};

export default RegisterForm;
