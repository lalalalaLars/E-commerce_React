import { useSelector } from "react-redux";

const ProfilePage = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <div>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>First Name: {user.name?.firstname}</p>
        <p>Last Name: {user.name?.lastname}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
