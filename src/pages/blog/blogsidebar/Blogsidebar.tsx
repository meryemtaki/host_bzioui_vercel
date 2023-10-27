import './Blogsidebar.css';
const Blogsidebar = ({ title, date, image }) => {
  return (
    <div className="blogsidebar">
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{date}</p>
    </div>
  );
};

export default Blogsidebar;
