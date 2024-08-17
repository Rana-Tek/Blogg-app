import BlogCard from "./BlogCard"
import { useEffect } from "react"
import axios from "axios"

const BlogContainer = () => {
   useEffect(() => {
    axios.get("http://127.0.0.1:8000/blogs/recent")
    .then(res => console.log(res.data))
    .catch(err => console.log(err.message))
   })
    return(
        <div className="container mx-auto mt-8 mb-8 px-4 flex flex-wrap justify-evenly">
        
              
        <BlogCard/>  
        <BlogCard/>  
        <BlogCard/>  
        
        </div>
    )
}

export default BlogContainer