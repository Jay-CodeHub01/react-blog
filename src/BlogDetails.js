import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogsDetails = () => {

    const {id} = useParams();
    return ( 
        <div className="BlogsDetails">
            <h2>BLOGS - {id} </h2>
        </div>
    );
}
 
export default BlogsDetails;