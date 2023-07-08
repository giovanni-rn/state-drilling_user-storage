const UserList = ({ users }) => {
  const cesarEncrypt = (password, gap) => {
    let encryptedPassword = "";
    for (let charPosition = 0; charPosition < password.length; charPosition++) {
      const characterCode = password.charCodeAt(charPosition);
      const encryptedCharacter = String.fromCharCode(characterCode + gap);
      encryptedPassword += encryptedCharacter;
    }
    return encryptedPassword;
  };

  return (
    <ol>
      {users.map((user) => {
        return (
          <li key={user.name}>
            {user.name} {user.age} : {user.email},{" "}
            {cesarEncrypt(user.password, 5)})
          </li>
        );
      })}
    </ol>
  );
};

export default UserList;
