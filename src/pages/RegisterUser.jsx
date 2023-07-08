import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";

const RegisterUser = ({ users, setUsers }) => {
  return (
    <div>
      <Navbar />
      <main>
        <header>
          <h1>Register yourself</h1>
        </header>
        <RegisterForm users={users} setUsers={setUsers} />
      </main>
    </div>
  );
};

export default RegisterUser;
