// ProfilePage.js

import { useSelector } from "react-redux";

const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    // If user data is not available yet, display a loading message or return null
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>First Name: {user.name?.firstname}</p> {/* Use optional chaining */}
        <p>Last Name: {user.name?.lastname}</p> {/* Use optional chaining */}
        {/* Add more user information fields here */}
      </div>
    </div>
  );
};

export default ProfilePage;
