import "./Card.css";

const Card = ({ title, folderPath, path, link, height }) => {
  return (
    <div className="card-wrapper">
      <h3>{title}</h3>
      <img
        src={`${process.env.PUBLIC_URL}/${folderPath}/${path}`}
        className="d-block w-100" style={{height: height}}
      />
    </div>
  );
};

export default Card;
