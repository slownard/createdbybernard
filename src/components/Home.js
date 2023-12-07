import Blogcontainer from "./Blogcontainer";
import React, { useEffect, useState } from "react";

// HOME PAGE

function Home() {

    const [blogs, setblogs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3001/blogs')
            .then(res => res.json())
            // .then((data) => setBlogs([data, ...blogs]))
            .then((data) => console.log(data));
        // console.log(blogs);
    }, [])


    return (

        <div>
            <Blogcontainer />

        </div>

    )

}

export default Home; 