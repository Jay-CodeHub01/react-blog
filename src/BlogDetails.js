import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogsDetails = () => {

    const {id} = useParams();
    const {data: blog , error, isPending} = useFetch('http://localhost:8000/Blogs/' + id);
    const history = useHistory();
    
    const handleDelete = () => {
        fetch('http://localhost:8000/Blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="BlogsDetails">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete blog</button>
                </article>
            )}
        </div>
    );
}

export default BlogsDetails;