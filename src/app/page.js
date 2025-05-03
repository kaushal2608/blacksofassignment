"use client";
import Contact from "@/components/homepages/contact";
import Hero from "@/components/homepages/hero";
import ShowCase from "@/components/homepages/showcase";
import { useLoginMutation } from "@/features/auth/authApi";
import { useSelector } from "react-redux";

const HomePage = () => {
  const user = useSelector((state) => state.user);
  const [login, { isLoading }] = useLoginMutation(); // way of calling api using rtk query 

  const handleLogin = async (e) => { //  function for calling api and other 
    e.preventDefault();
    try {
      const res = await login(formData).unwrap();
      dispatch(setUser(res.user)); // save user in Redux
      router.push('/'); // redirect to home
    } catch (err) {
      alert(err.data?.message || 'Login failed');
    }
  };
  

  return (
    <div style={{ marginTop: "53px" }}>
      <Hero />
      <ShowCase />
      <Contact />
    </div>
  );
};

export default HomePage;
