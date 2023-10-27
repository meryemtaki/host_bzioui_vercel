import { Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = ({ postId, title, date, image, description }) => {
  return (
    <div className="blog-post">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>Date: {date}</p>
      <p>{description}</p>
      <a href="#_" class="btn-nth relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 group">
<span class="absolute bg-slate-800 bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out  group-hover:h-full"></span>
<span class="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
<svg class="btn-hvr w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
<svg class="btn-hvr w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<button>
  <Link class="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white" to={`/blogdetail/${postId}`} >Button Text</Link>
</button>
</a>
    </div>
  );
};

export default BlogPost;