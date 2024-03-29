import React, { useEffect } from "react";
import { useAuth } from "../context/authContext";
import UserCard from "./UserCard";

const Dashboard = () => {
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    if (!auth.user) {
      setAuth({
        user: null,
        token: "",
      });
      // Redirect to the login page
    }
  }, [auth, setAuth]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <UserCard user={auth.user} />
    </div>
  );
};

export default Dashboard;
