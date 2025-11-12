import React from "react";
import { ArrowRight, User, Sparkles, ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Globe from "../assets/Globe.png";
import nPaxImage from "../assets/npax-logo.png";
import BusinessImage from "../assets/LP1.png";
import BusinessImage2 from "../assets/LP3.png";
import BusinessImage3 from "../assets/LP4.png";
import BusinessImage4 from "../assets/LP5.png";
import BusinessImage5 from "../assets/LP6.png";
import Chatbot from "./Chatbot.jsx";

export default function LandingPage() {
  return ( 
    <>
      {/* Hero Section with Globe Background */}
      <div
        className="p-0 relative overflow-x-hidden"
        style={{
          backgroundImage: `url(${Globe})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "115vh",
        }}
      >
        {/* Navigation */}
        <nav className="relative z-20 flex items-center justify-between px-8 py-3 text-sm">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={nPaxImage}
                alt="N-PAX Logo"
                className="h-14 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="lg:flex hidden items-center gap-8 text-gray-500">
            <Link
              to="/AboutUs"
              className="text-gray-600 hover:text-blue-300 transition"
            >
              ABOUT US
            </Link>

            {/* SOFTWARE PRODUCTS & SERVICES Dropdown */}
            <div className="relative group">
              <button className="hover:text-blue-300 transition flex items-center gap-1">
                SOFTWARE PRODUCTS AND SERVICES
                <ChevronDown className="w-4 h-4" />
              </button>

              <div
                className="absolute left-0 top-full mt-2 bg-white border border-gray-200 border-t-2 border-t-blue-500 
                shadow-xl overflow-hidden
                max-h-0 opacity-0 invisible -translate-y-2 
                group-hover:max-h-96 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-500 ease-out"
              >
                <div className="p-5">
                  <h3 className="font-semibold mb-4 text-gray-800">
                    Software Products and Services
                  </h3>
                  <div className="space-y-2 text-sm text-gray-500">
                    <a
                      href="advance_analytics.php"
                      className="block hover:text-blue-400 border-b mx-3 transition-all duration-200 
                      opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      Advanced Analytics Solutions
                    </a>
                    <a
                      href="motionboard.php"
                      className="block hover:text-blue-400 border-b mx-3 transition-all duration-200
                      opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      BI and Dashboarding
                    </a>
                    <a
                      href="digital_transformation.php"
                      className="block hover:text-blue-400 border-b mx-3 transition-all duration-200
                      opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      Digital Transformation Services
                    </a>
                    <a
                      href="hrc.php"
                      className="block hover:text-blue-400 border-b mx-3 transition-all duration-200
                      opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      HRIS / Payroll System
                    </a>
                    <a
                      href="nxpert.php"
                      className="block hover:text-blue-400 border-b mx-3 transition-all duration-200
                      opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      ERP System
                    </a>
                    <a
                      href="mcframega.php"
                      className="block hover:text-blue-400 border-b mx-3 transition-all duration-200
                      opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      Accounting System
                    </a>
                    <a
                      href="mcframe_iot.php"
                      className="block hover:text-blue-400 border-b mx-3 transition-all duration-200
                      opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      IoT System
                    </a>
                    <a
                      href="manage_services.php"
                      className="block hover:text-blue-400 border-b mx-3 transition-all duration-200
                      opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      Managed IT Services
                    </a>
                    <a
                      href="https://www.paxyroll.com"
                      className="block hover:text-blue-400 mx-3 transition-all duration-200
                      opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                      Paxyroll Cloud Timekeeping
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* INSIGHTS AND BLOGS (Mega Dropdown) */}
            <div className="relative group">
              <button className="hover:text-blue-300 transition flex items-center gap-1 ">
                INSIGHTS AND BLOGS
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Full-Width Mega Dropdown */}
              <div
                className="absolute top-full left-1/4 w-[150vh] bg-white mt-5
                -translate-x-1/2 z-50 shadow-xl overflow-hidden max-h-0 opacity-0 invisible 
                -translate-y-2 group-hover:max-h-96 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-500 ease-out border border-gray-200 border-t-2 border-t-blue-500 "
              >
                <div className="container mx-auto px-12 py-8">
                  <div className="grid grid-cols-3 gap-16 max-w-6xl mx-auto">
                    {/* Column 1: News and Insights */}
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-gray-800 text-base mb-2">
                        News and Insights
                      </h3>
                      <a
                        href="update/category_news?category=23"
                        className="py-1.5 border-b text-gray-600 hover:text-blue-500 hover:translate-x-1 transition-all duration-200 text-sm"
                      >
                        News & Events
                      </a>
                    </div>

                    {/* Column 2: Recent Blogs */}
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-gray-700 text-base mb-2">
                        Recent Blogs
                      </h3>
                      <a
                        href="update/category?category=17"
                        className="border-b py-1.5 text-gray-600 hover:text-blue-500  hover:translate-x-1 transition-all duration-200 text-sm"
                      >
                        Advanced Analytics
                      </a>
                      <a
                        href="update/category?category=21"
                        className="border-b py-1.5 text-gray-600 hover:text-blue-500  hover:translate-x-1 transition-all duration-200 text-sm"
                      >
                        Digital Transformation
                      </a>
                      <a
                        href="update/category?category=18"
                        className="border-b py-1.5 text-gray-600 hover:text-blue-500  hover:translate-x-1 transition-all duration-200 text-sm"
                      >
                        Human Resource Information
                      </a>
                    </div>

                    {/* Column 3: Additional Blogs */}
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-white text-base mb-2 opacity-0">
                        &nbsp;
                      </h3>
                      <a
                        href="update/category?category=19"
                        className="border-b py-1.5 text-gray-600 hover:text-blue-500  hover:translate-x-1 transition-all duration-200 text-sm"
                      >
                        Enterprise Resource Planning
                      </a>
                      <a
                        href="update/category?category=20"
                        className="border-b py-1.5 text-gray-600 hover:text-blue-500  hover:translate-x-1 transition-all duration-200 text-sm"
                      >
                        Accounting
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              to="/Career"
              className="text-gray hover:text-blue-300 transition"
            >
              CAREERS
            </Link>
            <a
              href="#contact"
              className="hover:text-blue-300 transition-colors uppercase text-sm tracking-wide"
            >
              Contact Us
            </a>
            <button className="text-white border border-white px-4 py-2 hover:bg-white hover:text-slate-800 transition-all uppercase text-sm tracking-wide">
              Language
            </button>
          </div>

          {/* Responsive Nav Link */}
          <div className="lg:hidden flex items-center">
            <div className="relative group">
              <button className="hover:text-blue-300 transition flex items-center gap-1">
                <Menu className="w-6 h-6 text-white" />
              </button>

              <div className="absolute right-0 mt-2 rounded-md bg-slate-800/50 backdrop-blur-md
                shadow-xl overflow-hidden max-h-0 opacity-0 invisible 
                -translate-y-2 w-[95vh] text-center
                group-hover:max-h-[100vh] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                transition-all duration-500 ease-out">

                <div className="p-5 flex flex-col gap-4">
                  <Link to="/AboutUs" className="text-gray-100 hover:text-blue-400 transition">
                    ABOUT US
                  </Link>
                  <a href="#contact" className="text-gray-100 hover:text-blue-400 transition">
                    SOFTWARE PRODUCTS AND SERVICES
                  </a>
                  <a href="#contact" className="text-gray-100 hover:text-blue-400 transition">
                    INSIGHTS AND BLOGS
                  </a>
                  <Link to="/Career" className="text-gray-100 hover:text-blue-400 transition">
                    CAREERS
                  </Link>
                  <a href="#contact" className="text-gray-100 hover:text-blue-400 transition">
                    CONTACT US
                  </a>
                  <button
                    className="text-white border border-white px-4 py-2 hover:bg-white hover:text-slate-800 transition-all uppercase text-sm tracking-wide"
                  >
                    Language
                  </button>
                  
                </div>

              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-8 py-16 mt-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-4xl font-bold text-gray-700 leading-tight">
              Be future-proof with our <br />
              <span className="text-gray-700">Amazing Solutions™</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              As trusted by our partners worldwide, our end-to-end business IT
              solutions will help you reach your organization's next milestones.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Section on Separate White Background */}
      <div className="relative z-10 container mx-auto px-8 py-16 bg-white">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-500 text-sm font-semibold tracking-wider uppercase mb-2">
            OUR SOLUTIONS
          </h2>
          <p className="text-2xl text-gray-700">
            AMAZING THINGS MADE POSSIBLE BY{" "}
            <span className="font-bold text-gray-900">GREAT PEOPLE™</span>
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Companion to HR Management */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Companion to HR Management
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Streamline HR process using an end-to-end packaged solution.
                Fast and accurate payroll, customizable to business compliance,
                integratable with 100% support.
              </p>
              <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                EXPLORE SOLUTION
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>

            {/* Talent Management */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-900" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Talent Management
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Secure business future for a new generation of management.
                </p>
              </div>
            </div>

            {/* Advanced Business Intelligence */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-gray-900" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Advance Business Intelligence
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Pinpoint and identify performance trends before they impact
                  your business.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={BusinessImage}
              alt="Business Logo"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 px-8 lg:px-16S">
        {/* Left Image */}
        <div className="relative lg:w-1/2 flex justify-center">
          <img
            src={BusinessImage2} // Updated image
            alt="Business Logo"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Compact Global Accounting Solution
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Effectively manage meticulous financial information with a
            comprehensive computerized accounting solution. Ensure statutory
            compliance, avoid penalty and charges. Inclusive with standard ERP
            solution.
          </p>
          <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Explore Solution
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Employee Time Tracking Section */}
      <div className="relative bg-white py-20 flex flex-col lg:flex-row items-center justify-center gap-1 px-8 lg:px-24 overflow-hidden">
        {/* Left Image */}
        <div className="relative lg:w-1/2 flex justify-center z-10">
          <img
            src={BusinessImage3}
            alt="Business App Mockup"
            className="w-[350px] md:w-[420px] lg:w-[480px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="relative lg:w-1/2 flex flex-col items-center justify-center text-center z-10">
          {/* Decorative Yellow Circle */}
          <div className="absolute right-[-10%] top-[-30%] w-48 h-48 bg-yellow-400 rounded-full z-0 opacity-80 lg:block hidden" />

          <h2 className="relative text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4 z-10">
            Employee Time Tracking <br />
            <span className="text-black">FREE FOR 10 USERS</span>
          </h2>

          <p className="text-gray-700 text-lg font-semibold mb-2 relative z-10">
            Create and Monitor Your Teams.
          </p>

          <p className="text-gray-600 mb-6 max-w-md relative z-10">
            Unli Users, max of 50 job titles, 20 shifts, 50 holidays, 10
            workgroups, track from 100 locations. P75. Timekeeping device also
            available.
          </p>

          {/* Button perfectly centered */}
          <div className="flex justify-center w-full relative z-10">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 px-8 lg:px-24 py-10 bg-white">
        {/* Left Content */}
        <div className="max-w-xl text-left space-y-6">
          <h3 className="text-3xl font-bold text-gray-900">
            Transforming Data into Amazing Insights
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Aim to make predictions that will give your a field of vision for
            the future of your business beyond human capabilities.
          </p>
          <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            SEE SERVICE DETAILS
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative lg:w-1/2">
          <img
            src={BusinessImage4}
            alt="Business Data Visualization"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 px-8 lg:px-16">
        {/* Left Image */}
        <div className="relative lg:w-1/2 flex justify-center -mt-19">
          <img
            src={BusinessImage5} // Updated image
            alt="Business Logo"
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 space-y-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Digital Transformation
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Elevating the business model and process through an innovative
            integrated approach driven by strategic industry experts.
          </p>
          <button className="flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            See Service Details
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Floating Chatbot */}
      <div className="fixed bottom-8 right-8 z-50">
        <Chatbot isDark={false} />
      </div>
    </>
  );
}
