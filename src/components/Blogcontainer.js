// container for blogs
// send this up to home page 
// pass blogs through this 
// check to render 
import Blog from "./Blog";


function Blogcontainer({ blogs }) {

    const mapBlogs = blogs.map((blog) => {
        return <Blog key={blog.id} skatespot={blog} />
    })

    return (
        <>
            <ul className="cards">
                {mapBlogs}
            </ul>

        </>

    )
}

export default Blogcontainer;
