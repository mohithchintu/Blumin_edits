import { Input, Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
const Register = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    ins_name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setError({
      ...error,
      [name]: "",
    });
  };

  const handlePassword = (e) => {
    setCpassword(e.target.value);
    if (password === cpassword && password != "") {
      setForm({
        ...form,
        password: password,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", form);
      setForm({
        first_name: "",
        last_name: "",
        ins_name: "",
        email: "",
        phone: "",
        password: "",
      });
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.first_name.trim()) {
      errors.name = "Name is required";
    } else if (data.first_name.trim().length < 2) {
      errors.name = "Name should be at least 2 characters";
    }
    if (!data.last_name.trim()) {
      errors.name = "Name is required";
    } else if (data.last_name.trim().length < 2) {
      errors.name = "Name should be at least 2 characters";
    }
    if (!data.password.trim()) {
      errors.name = "Name is required";
    } else if (data.password.trim().length < 8) {
      errors.name = "Name should be at least 8 characters";
    }
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email address";
    }
    if (!data.phone.trim()) {
      errors.phone = "Phone number is required";
    }
    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] px-5">
      <div className="xl:max-w-3xl bg-white rounded-xl w-full pb-6 sm:pb-10">
        <Tabs
          selectedIndex={activeTabIndex}
          onSelect={(index) => setActiveTabIndex(index)}
        >
          <TabList className="grid grid-cols-3 mb-5">
            <Tab
              className={`cursor-pointer text-xs md:text-lg font-medium text-center py-3 ${
                activeTabIndex === 0
                  ? "bg-blue-gray-50 text-[#39a9f1] border-b-2 border-[#39a9f1]"
                  : "bg-white text-black  hover:bg-slate-100"
              }`}
            >
              Student
            </Tab>
            <Tab
              className={`cursor-pointer text-xs md:text-lg font-medium text-center py-3 ${
                activeTabIndex === 1
                  ? "bg-blue-gray-50 text-[#39a9f1] border-b-2 border-[#39a9f1]"
                  : "bg-white text-black hover:bg-slate-100"
              }`}
            >
              Professor
            </Tab>
            <Tab
              className={`cursor-pointer text-xs md:text-lg font-medium text-center py-3 ${
                activeTabIndex === 2
                  ? "bg-blue-gray-50 text-[#39a9f1] border-b-2 border-[#39a9f1]"
                  : "bg-white text-black hover:bg-slate-100"
              }`}
            >
              Employee
            </Tab>
          </TabList>
          <TabPanel>
            <h1 className="text-center text-xl sm:text-3xl font-semibold mt-10 mb-10 text-[#39a9f1]">
              Student Registration Form
            </h1>
            <div className="w-full mt-8">
              <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    color="blue"
                    label="First Name*"
                    name="first_name"
                    className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparenttext-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                    onChange={handleChange}
                  />
                  <Input
                    color="blue"
                    label="Last Name*"
                    name="last_name"
                    className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                    onChange={handleChange}
                  />
                </div>
                <Input
                  color="blue"
                  label="Collage Name*"
                  name="ins_name"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  onChange={handleChange}
                />
                <Input
                  color="blue"
                  label="Your Email*"
                  name="email"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  onChange={handleChange}
                />
                <Input
                  color="blue"
                  label="Your Phone*"
                  name="phone"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  onChange={handleChange}
                />
                <Input
                  color="blue"
                  label="Your Password*"
                  name="password"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  color="blue"
                  label="Confirm Password*"
                  name="cpassword"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  onChange={handlePassword}
                />
                <Button className="mt-5 tracking-wide font-semibold bg-[#39a9f1] text-gray-100 w-full py-4 rounded-lg hover:bg-[#1e88e5] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={handleSubmit}
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Register</span>
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h1 className="text-center text-xl sm:text-3xl font-semibold mt-10 mb-10 text-[#39a9f1]">
              Professor Registration Form
            </h1>
            <div className="w-full mt-8">
              <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    color="blue"
                    label="First Name*"
                    name="first_name"
                    className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparenttext-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                    onChange={handleChange}
                  />
                  <Input
                    color="blue"
                    label="Last Name*"
                    name="last_name"
                    className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                    onChange={handleChange}
                  />
                </div>
                <Input
                  color="blue"
                  label="University Name*"
                  name="ins_name"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  onChange={handleChange}
                />
                <Input
                  color="blue"
                  label="Your Email*"
                  name="email"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  onChange={handleChange}
                />
                <Input
                  color="blue"
                  label="Your Phone*"
                  name="phone"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  onChange={handleChange}
                />
                <Input
                  color="blue"
                  label="Your Password*"
                  name="password"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  color="blue"
                  label="Confirm Password*"
                  name="cpassword"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  onChange={handlePassword}
                />
                <Button className="mt-5 tracking-wide font-semibold bg-[#39a9f1] text-gray-100 w-full py-4 rounded-lg hover:bg-[#1e88e5] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={handleSubmit}
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Register</span>
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h1 className="text-center text-xl sm:text-3xl font-semibold mt-10 mb-10 text-[#39a9f1]">
              Employee Registration Form
            </h1>
            <div className="w-full mt-8">
              <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    color="blue"
                    label="First Name*"
                    name="first_name"
                    className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparenttext-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                    onChange={handleChange}
                  />
                  <Input
                    color="blue"
                    label="Last Name*"
                    name="last_name"
                    className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                    onChange={handleChange}
                  />
                </div>
                <Input
                  color="blue"
                  label="Company Name*"
                  name="ins_name"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  onChange={handleChange}
                />
                <Input
                  color="blue"
                  label="Your Email*"
                  name="email"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  onChange={handleChange}
                />
                <Input
                  color="blue"
                  label="Your Phone*"
                  name="phone"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  onChange={handleChange}
                />
                <Input
                  color="blue"
                  label="Your Password*"
                  name="password"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  color="blue"
                  label="Confirm Password*"
                  name="cpassword"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  onChange={handlePassword}
                />
                <Button className="mt-5 tracking-wide font-semibold bg-[#39a9f1] text-gray-100 w-full py-4 rounded-lg hover:bg-[#1e88e5] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={handleSubmit}
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Register</span>
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h1 className="text-center text-xl sm:text-3xl font-semibold mt-10 mb-10 text-[#39a9f1]">
              Student Registration Form
            </h1>
            <div className="w-full mt-8">
              <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    color="blue"
                    label="First Name"
                    className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparenttext-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  />
                  <Input
                    color="blue"
                    label="Last Name"
                    className="w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent text-sm focus:outline-none  focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                  />
                </div>
                <Input
                  color="blue"
                  label="Collage Name"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                />
                <Input
                  color="blue"
                  label="Your Email"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                />
                <Input
                  color="blue"
                  label="Your Phone"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                />
                <Input
                  color="blue"
                  label="Your Password"
                  className="w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black"
                />
                <Button className="mt-5 tracking-wide font-semibold bg-[#39a9f1] text-gray-100 w-full py-4 rounded-lg hover:bg-[#1e88e5] transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Register</span>
                </Button>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
export default Register;
