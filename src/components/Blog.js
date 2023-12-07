// individual blogs will be set and rendered here 

function Blog({ blog }) {



    const { title, date, text } = blog


    return (

        <li>


            <div classname="card-content">

                <p>{title}</p>
                <p>{date}</p>
                <p>{text}</p>

            </div>



        </li>




    )
}

export default Blog;