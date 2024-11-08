import Star from "../assets/star.png";


function Card (props) {
    const {coverImg, openSpots, artist, location, title, price} = props;
    let badgeTxt;

    if (openSpots === 0) {
        badgeTxt = "SOLD OUT";
    } else if ( location === "Online") {
        badgeTxt = "ONLINE";
    } 

    return (
        <div className="card flex-column">
          <img src={"/air-bnb-experience/images/" + coverImg} alt={"Photo of " + artist} className="card-img"/>  
          <div className="card-info flex-column">
            <span className="flex-row">
              <img src={Star} alt="star" className="star-img"/> 
              <span>{props.stats.rating}</span> 
              <span className="gray">({props.stats.reviewCount}) . </span> 
              <span className="gray"> {location}</span>            
            </span>
            <h2 className="card-title">{title}</h2>
            <span>
             <span className="bold">From ${price} </span>  
              / person
            </span>
        { badgeTxt && <span className="category">{badgeTxt}</span> }
          </div>
        </div>
    );
};


export default Card;
