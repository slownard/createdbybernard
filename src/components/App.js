import Header from "./Header";
import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Jesus from "./Jesus";
import React, { useEffect, useState } from "react";


function App() {


    const [blogs, setblogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/blogs')
            .then(res => res.json())
            .then((data) => console.log(data));
        // console.log(blogs);
    }, [])


    return (
        <div className="App">



            <Header />
            <Navbar />

            {/*  */}

            <About />
            <Home />
            <Projects />
            <Jesus />




        </div>
    );
}

export default App;