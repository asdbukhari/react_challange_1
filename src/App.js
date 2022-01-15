import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import ListUsers from "./components/Users/ListUsers";

function App() {
  const [userList, setUserList] = useState([]);

  const onAddUserHandler = (uName, uAge) => {
    setUserList((preUserList) => {
      return [...preUserList, { name: uName, age: uAge }];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      {userList.length > 0 && <ListUsers users={userList} />}
    </div>
  );
}

export default App;
