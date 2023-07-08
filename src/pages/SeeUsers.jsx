import Navbar from "../components/Navbar";
import UserList from "../components/UserList";

const SeeUsers = ({ users }) => {
  return (
    <div>
      <Navbar />
      <main>
        <header>
          <h1 className="text-3xl font-bold underline">See all users</h1>
        </header>
        <UserList users={users} />
      </main>
    </div>
  );
};

export default SeeUsers;
