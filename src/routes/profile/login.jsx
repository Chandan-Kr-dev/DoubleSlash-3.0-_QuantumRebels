import { useState } from "react";

const LoginForm = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [userRole, setuserRole] = useState("")
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post(`${import.meta.env.VITE_DEV_URL}auth/login`,{email,userRole,password})
    .then(res=>{
      console.log(res.data)
      if(res.data==="Success"){
        alert("Login")
        window.localStorage.setItem('Username',res.data.username)
        
      }
    })
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100  rounded-xl dark:bg-slate-900">
      <div className="bg-white  dark:bg-slate-950 p-6 rounded-lg shadow-lg w-96">
        <p className="text-3xl dark:text-blue-500  font-bold text-center mb-4">Welcome back</p>
        <form className="flex flex-col space-y-4">
          <input 
            type="email" 
            value={email}
            onChange={e=>setemail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter Your Email" 
          />
          <input 
            type="password" 
            value={password}
            onChange={e=>setpassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter Your Password" 
          />
           <div className="space-y-2">
                  <label
                    htmlFor="userRole-select"
                    className="block mb-2 text-xl font-medium text-gray-300 dark:text-white"
                  >
                    User Role:
                  </label>
                  <select
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(e) => setuserRole(e.target.value)}
                    value={userRole}
                    name="userRole"
                    id="userRole-select"
                  >
                    <option value="">--Please Select User Role--</option>
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                    
                  </select>
                </div>
          <p className="text-md text-blue-500 cursor-pointer text-right">Forgot Password?</p>
          <button onSubmit={handleSubmit} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Log in</button>
        </form>
        <a href="/profile/register">
        <p className="text-center mt-4 text-md dark:text-blue-500">
          Don't have an account? <span className="text-blue-500 cursor-pointer">Sign up</span>
        </p> </a>
        <div className="flex flex-col space-y-3 mt-6">
         
          <button className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
              <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
              <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
              <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
            </svg>
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
