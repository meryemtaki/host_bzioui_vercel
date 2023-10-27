import React from 'react';
import { useParams } from 'react-router-dom';
import './Blogdetail.css';
import imgblog from '../../../assets/project2.png';
import imgblog2 from '../../../assets/project3.png';
import imgblog3 from '../../../assets/project4.png';
import Comment from '../Comment/Comment';
import Leavcomment from '../Leavecomment/Leavcomment';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  description: JSX.Element;
}

const createBlogPost = (id: string, title: string, date: string, image: string, description: JSX.Element): BlogPost => ({
  id,
  title,
  date,
  image,
  description,
});

const blogPosts: BlogPost[] = [
  createBlogPost(
    'post1',
    'lorem ipsum dolor sit amet, consectetur adipiscing elit',
    'October 1, 2023',
    imgblog,
    (
      <div >
        <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p> 
        <br></br>
        <p>
        lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
        </p> 
        <br></br>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <img src={imgblog2} alt="Image 1" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        <img src={imgblog3} alt="Image 1" />
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <br></br>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    ),
  ),
  createBlogPost(
    'post2',
    'Lorem ipsum dolor sit amet, consectetur',
    'October 1, 2023',
    imgblog2,
    (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque doloribus accusantium quam voluptatum nobis ratione tempore reprehenderit aperiam ex consectetur. Eveniet nulla cum deserunt ea a, veniam tempora esse enim.</p>
        <img src={imgblog2} alt="Image 1" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        <img src={imgblog3} alt="Image 1" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, odit voluptas, dolorem veniam, itaque aperiam veritatis vero ratione nulla dicta sit quibusdam esse tenetur id tempora architecto consectetur facilis velit.</p>
      </div>
    ),
  ),
  createBlogPost(
    'post3',
    'Lorem ipsum dolor sit amet, consectetur',
    'October 1, 2023',
    imgblog3,
    (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ipsam doloribus consequatur nulla provident debitis, odit saepe, dolore sit temporibus fugit est enim asperiores dolorum rerum consectetur dolorem incidunt placeat!</p>
        <img src={imgblog2} alt="Image 1" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
        <img src={imgblog3} alt="Image 1" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae numquam quas perferendis ipsa suscipit voluptas, quae cupiditate porro quisquam nemo amet error vel consectetur facilis quos reiciendis praesentium nesciunt? Iusto.</p>
      </div>
    ),
  ),
];

const Blogdetail: React.FC = () => {
  const { postId } = useParams();

  const selectedBlogPost = blogPosts.find(post => post.id === postId);

  if (!selectedBlogPost) {
    return <div>Post not found</div>;
  }

  const { title, image, description } = selectedBlogPost;

  return (
    <>
      <div className="blogdetail">
        <div className="blogdetail-image">
          <img className='imgdetail' src={image} alt={title} style={{ width: '100%' }} />
        </div>
        <div className="container">
            <div className="blogdetail-header">
              <h1>{title}</h1>
            </div>
            <div>
              <p className="date">{selectedBlogPost.date}</p>
            </div>
            <div className="blogdetail-content ">
              {description}
            </div>
        </div>
        
      </div>
      <Comment/>
      <Leavcomment/>
    </>
  );
};

export default Blogdetail;
