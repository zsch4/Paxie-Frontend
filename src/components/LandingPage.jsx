import React, { useState } from "react";
import {
  ArrowRight,
  User,
  Sparkles,
  ChevronDown,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import Globe from "../assets/Globe.png";
import NpaxImage from "../assets/npax-white.png";
import nPaxImage from "../assets/npax-logo.png";
import BusinessImage from "../assets/LP1.png";
import BusinessImage2 from "../assets/LP3.png";
import BusinessImage3 from "../assets/LP4.png";
import BusinessImage4 from "../assets/LP5.png";
import BusinessImage5 from "../assets/LP6.png";
import Sunshine from "../assets/Sunshine.png";
import Classic from "../assets/Classic.png";
import Outre from "../assets/Outre.png";
import Engineering from "../assets/Engineering.png";
import Manufacturing from "../assets/Manufacturing.png";
import Warehouse from "../assets/Warehouse.png";
import VP from "../assets/vp.png";
import Quote from "../assets/quote.png";
import Musical from "../assets/musical.png";
import BENG from "../assets/beng.png";
import HRC from "../assets/hrc.png";
import Manila from "../assets/manila.png";
import Cebu from "../assets/cebu.png";
import Chatbot from "./Chatbot.jsx";

export default function LandingPage() {
  const [selectedLocation, setSelectedLocation] = useState("manila");
  const currentYear = new Date().getFullYear();

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
                className="lg:h-14 h-8 w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8 text-gray-500">
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

              <div className="absolute right-0  mt-2 rounded-md bg-slate-800/50 backdrop-blur-md
                shadow-xl overflow-hidden max-h-0 opacity-0 invisible 
                -translate-y-2  w-[88vw] text-center
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
              <button
                onClick={() =>
                  window.open("https://www.n-pax.com/hrc.php", "_blank")
                }
                className="flex items-center text-blue-600 font-semibold hover:text-blue-700 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300"
              >
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
          <button
            onClick={() =>
              window.open("https://www.n-pax.com/mcframega.php", "_blank")
            }
            className="flex items-center text-blue-600 font-semibold hover:text-blue-700 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300"
          >
            EXPLORE SOLUTION
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
            <button
              onClick={() =>
                window.open("https://www.paxyroll.com/#home", "_blank")
              }
              className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
            >
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
          <button
            onClick={() =>
              window.open("https://www.n-pax.com/advance_analytics", "_blank")
            }
            className="flex items-center text-blue-600 font-semibold hover:text-blue-700 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300"
          >
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
          <button
            onClick={() =>
              window.open("https://www.n-pax.com/digital_transformation", "_blank")
            }
            className="flex items-center text-blue-600 font-semibold hover:text-blue-700 border-b-2 border-transparent hover:border-blue-600 transition-all duration-300"
          >
            SEE SERVICE DETAILS
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* New Section with Images and Testimonial */}
      <div className="relative z-10 container mx-auto px-8 py-16 bg-white">
        <div className="bg-gray-100 py-24 px-8 lg:px-16 mt-24">
          <h2 className="text-center text-2xl font-semibold text-gray-700 mb-12 max-w-4xl mx-auto">
            INCLUSIVE TO:
          </h2>

          {/* Categories with Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <img
                src={Warehouse}
                alt="Manufacturing or Production"
                className="mx-auto mb-4 w-16 h-16 object-contain"
              />
              <p className="text-gray-600">Manufacturing or Production</p>
            </div>
            <div className="text-center">
              <img
                src={Manufacturing}
                alt="Local or International"
                className="mx-auto mb-4 w-16 h-16 object-contain"
              />
              <p className="text-gray-600">Local or International</p>
            </div>
            <div className="text-center">
              <img
                src={Engineering}
                alt="Product or Services Providers"
                className="mx-auto mb-4 w-16 h-16 object-contain"
              />
              <p className="text-gray-600">Product or Services Providers</p>
            </div>
            <div className="text-center">
              <img
                src={Outre}
                alt="SMB, SME or Large Enterprise"
                className="mx-auto mb-4 w-16 h-16 object-contain"
              />
              <p className="text-gray-600">SMB, SME or Large Enterprise</p>
            </div>
            <div className="text-center">
              <img
                src={Classic}
                alt="Government or Public Sector"
                className="mx-auto mb-4 w-16 h-16 object-contain"
              />
              <p className="text-gray-600">Government or Public Sector</p>
            </div>
            <div className="text-center">
              <img
                src={Sunshine}
                alt="Logistics or Distribution"
                className="mx-auto mb-4 w-16 h-16 object-contain"
              />
              <p className="text-gray-600">Logistics or Distribution</p>
            </div>
          </div>

          {/* Testimonial Section */}
          <div className="relative bg-white rounded-lg shadow-lg pt-8 pr-8 pl-8 pb-0 flex flex-col items-center text-center max-w-4xl mx-auto">
            <img
              src={Quote}
              alt="quote"
              className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-20"
            />
            <blockquote className="text-gray-700 italic mb-4 pt-20">
              "N-PAX has been a great partner for us for over a decade. Their
              continued passion in delivering excellent quality personnel and
              services has been outstanding. Every individual that I have dealt
              with at N-PAX has proven to be highly skilled, creative, effective
              communicators, dedicated and professionalism that's unmatched in
              the market. Their low levels of attrition is a direct result of a
              great company culture that embraces communication and emphasis on
              employee work-life balance."
            </blockquote>
            <p className="font-semibold text-gray-900">
              Philip Alexander Conde
            </p>
            <p className="text-gray-600">VP Technology, APAC</p>
            <div className="flex justify-center mt-4">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-300 -mb-16">
                <img
                  src={VP}
                  alt="Philip Alexander Conde"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs and Insights Section */}
      <section className="my-5 container p-5 text-center animated fadeInUp">
        {/* Rest of the section content */}
        <figure className="text-center text-uppercase">
          <blockquote className="blockquote">
            <p>
              <span className="text-3xl font-semibold text-gray-700">
                BLOGS AND INSIGHTS
              </span>
              <br />
              <span className="text-2xl">
                <strong>CURRENT</strong> Updates
              </span>
            </p>
          </blockquote>
        </figure>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        <div>
          <div className="bg-gray-900 text-white mb-3 h-100 rounded-none shadow-lg">
            <img
              src={Musical}
              className="w-full h-64 object-cover animated fadeInUp"
              alt="NPAX musical"
            />
            <div className="p-6">
              <p className="text-lg font-semibold">NPAX musical</p>
              <p className="text-gray-300">Tue October 04, 2022</p>
            </div>
            <div className="p-4 bg-gray-800 text-center">
              <small className="text-gray-400">
                <a
                  href="update/news.php?p_id=28"
                  className="text-white hover:text-gray-300"
                >
                  View More
                </a>
              </small>
            </div>
            <div className="skewd"></div>
          </div>
        </div>
        <div>
          <div className="bg-gray-900 text-white mb-3 h-100 rounded-none shadow-lg">
            <img
              src={BENG}
              className="w-full h-64 object-cover animated fadeInUp"
              alt="B-EN-G Partnership"
            />
            <div className="p-6">
              <p className="text-lg font-semibold">B-EN-G Partnership</p>
              <p className="text-gray-300">Tue September 29, 2020</p>
            </div>
            <div className="p-4 bg-gray-800 text-center">
              <small className="text-gray-400">
                <a
                  href="update/news.php?p_id=17"
                  className="text-white hover:text-gray-300"
                >
                  View More
                </a>
              </small>
            </div>
            <div className="skewd"></div>
          </div>
        </div>
        <div>
          <div className="bg-gray-900 text-white mb-3 h-100 rounded-none shadow-lg">
            <img
              src={HRC}
              className="w-full h-64 object-cover animated fadeInUp"
              alt="Philippine HR Congress 2019"
            />
            <div className="p-6">
              <p className="text-lg font-semibold">
                Philippine HR Congress 2019
              </p>
              <p className="text-gray-300">Tue September 29, 2020</p>
            </div>
            <div className="p-4 bg-gray-800 text-center">
              <small className="text-gray-400">
                <a
                  href="update/news.php?p_id=15"
                  className="text-white hover:text-gray-300"
                >
                  View More
                </a>
              </small>
            </div>
            <div className="skewd"></div>
          </div>
        </div>
      </div>

      {/* See More Button */}
      <div className="flex justify-center mt-4">
        <button className="mt-5 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition">
          SEE MORE
        </button>
      </div>

      {/* Contact / Consultation Section */}
      <section className="mt-24 mb-10 container p-5 text-center animated fadeInUp">
        <div className="grid md:grid-cols-2 gap-0 max-w-4xl mx-auto">
          {/* Left Column: Location Tabs and Map */}
          <div className="border p-5 rounded-lg shadow-md">
            <div className="flex border-b mb-4">
              <button
                className={`px-4 py-2 ${
                  selectedLocation === "manila"
                    ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                    : "text-gray-500 hover:text-blue-600"
                }`}
                onClick={() => setSelectedLocation("manila")}
              >
                MANILA
              </button>
              <button
                className={`px-4 py-2 ml-2 ${
                  selectedLocation === "cebu"
                    ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                    : "text-gray-500 hover:text-blue-600"
                }`}
                onClick={() => setSelectedLocation("cebu")}
              >
                CEBU
              </button>
            </div>

            {selectedLocation === "manila" ? (
              <img
                src={Manila}
                alt="Manila Office Map"
                className="w-full h-64 object-cover rounded-lg mb-3"
              />
            ) : (
              <img
                src={Cebu}
                alt="Cebu Office Map"
                className="w-full h-64 object-cover rounded-lg mb-3"
              />
            )}
            {selectedLocation === "manila" ? (
              <p className="text-sm text-gray-600">
                Unit 1702, One Global Place 5th Avenue, cor 25th BGC Taguig
                City, Philippines
              </p>
            ) : (
              <p className="text-sm text-gray-600">Cebu Office Address</p>
            )}

            <h3 className="text-xl font-bold mt-4 mb-2">
              BOOK A FREE CONSULTATION WITH OUR EXPERTS
            </h3>
            <p className="text-gray-700 text-sm">
              Whether you're a corporate or public sector company needing IT
              assistance or a highly scalable digital solution tailored to your
              business model, please message us below and we'll get in touch
              shortly!
            </p>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">
              TELL US WHAT YOU'RE LOOKING FOR!
            </h3>
            <form className="flex flex-col space-y-3">
              <input
                type="text"
                placeholder="Enter your Name"
                className="border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="text"
                placeholder="Company"
                className="border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="email"
                placeholder="Enter a valid email address"
                className="border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="tel"
                placeholder="Contact Number"
                className="border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
                required
              />
              <textarea
                placeholder="Message"
                className="border p-2 rounded-md focus:ring-2 focus:ring-yellow-400"
                rows="4"
                required
              ></textarea>

              <button
                type="submit"
                className="bg-yellow-400 text-gray-800 font-semibold py-2 rounded-full hover:bg-yellow-500 transition"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-200 py-10 mt-10">
        <div className="container mx-auto grid md:grid-cols-3 gap-10 px-5">
          {/* SERVICES */}
          <div className="ml-16">
            {" "}
            {/* moved to the right */}
            <h4 className="font-bold text-white mb-3">SERVICES</h4>
            <ul className="space-y-2 text-sm ml-12">
              <li className="hover:text-white transition-colors cursor-pointer">
                Business Intelligence
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Business Analytics
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Data Dashboarding
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Software Development
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                IT Maintenance and Management
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                IOT
              </li>
            </ul>
          </div>

          {/* SOLUTIONS */}
          <div className="ml-16">
            {" "}
            {/* moved to the right */}
            <h4 className="font-bold text-white mb-3">SOLUTIONS</h4>
            <ul className="space-y-2 text-sm ml-12">
              <li className="hover:text-white transition-colors cursor-pointer">
                Computerized Accounting System with Compact ERP Solution
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                HRIS and Payroll Calculation System
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Manufacturing ERP System
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Free Timekeeping Tool
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div className="ml-16">
            {" "}
            {/* moved to the right */}
            <h4 className="font-bold text-white mb-3">COMPANY</h4>
            <ul className="space-y-2 text-sm ml-12">
              <li className="hover:text-white transition-colors cursor-pointer">
                About Us
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Career
              </li>
              <li className="hover:text-white transition-colors cursor-pointer">
                Blogs and Industry Insights
              </li>
            </ul>
            <div className="mt-5 space-y-2 text-sm ml-12">
              <h4 className="font-bold text-white mb-1">PRIVACY NOTICE</h4>
              <p className="text-sm">
                © {currentYear} NOPAX GROUP.
                <br />
                All Rights Reserved
              </p>
            </div>
            {/* Social Media + Logo */}
            <div className="flex items-center gap-4 mt-4 ml-12">
              <a
                href="#"
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-gray-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
            {/* NOPAX Logo */}
            <div className="mt-4 ml-12">
              <img src={NpaxImage} alt="NOPAX Logo" className="h-8" />
            </div>
          </div>
        </div>
        {/* Bottom Language Row */}
        <div className="border-t border-gray-700 mt-10 pt-4 pl-5 text-sm text-gray-400 text-left">
          🌐 English (Philippines)
        </div>
      </footer>

      {/* Floating Chatbot */}
      <div className="fixed bottom-8 right-8 z-50">
        <Chatbot isDark={false} />
      </div>
    </>
  );
}
