import PropTypes from "prop-types";

function ProfileCard(props){
    return(
        <div className="profile">
            <img src={props.image}/>
            <h2>{props.name}</h2>
            <h4>{props.role}</h4>
            <h4>{props.description}</h4>
        </div>
    );
}

ProfileCard.PropTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string
}


export default ProfileCard;