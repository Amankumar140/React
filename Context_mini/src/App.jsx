import Login from "./Components/Login.jsx";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";
import Profile from "./Components/Profile.jsx";

function App() {
  return (
    <UserContextProvider>
      <h1>hello</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
