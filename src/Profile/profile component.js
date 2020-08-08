import React from 'react'
import PropTypes from 'prop-types';
profileComponent.propTypes ={
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
}
profileComponent.defaultProps = {
    fullName:"unknown",
    bio:"-",
    profession:"-"
    }
export default function profileComponent({children,fullName,profession,bio,handleName}) {
    return (
        <div style={{border:"2px solid blue" ,width:"35%" ,marginLeft: "auto", marginRight: "auto" , backgroundColor:"lightblue", padding:"20px"}} onClick={ () =>handleName(fullName)}>
            <h1>{fullName}</h1>
            <h2>{profession}</h2>
            <p>{bio}</p>
            <>{children}</>
        </div>
    )
}
