const Channel = (props) => {
  return (
    <div className="capsule">
      <h2>{props.ressource.category}</h2>
      <div className="caroussel">
        {props.ressource.images.map((url, index) => {
          return (
            <div key={index}>
              <img src={url} alt="TV-show-img" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Channel;
