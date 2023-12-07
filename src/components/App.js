import Header from "./Header";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Jesus from "./Jesus";
import React, { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";


function App() {


    const [page, setPage] = useState("/")
    // const [blogs, setblogs] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:3001/blogs')
    //         .then(res => res.json())
    //         // .then((data) => setBlogs([data, ...blogs]))
    //         .then((data) => console.log(data));
    //     // console.log(blogs);
    // }, [])

    return (
        <div className="App">

            <Header />
            <Navbar onChangePage={setPage} />

            <Routes>

                <Route path="/about" element={<About />} />
                <Route path="/home" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/jesus" element={<Jesus />} />

            </Routes>


            {/* <Route path="/skatespots" element={
                <SkatespotContainer skatespots={skatespots} />} /> */}


        </div>
    );
}

export default App;