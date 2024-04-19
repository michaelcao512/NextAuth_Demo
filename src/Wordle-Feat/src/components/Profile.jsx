import { useState, useEffect } from 'react';
import styled from 'styled-components'; // Import styled-components


const ProfileContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0px auto;
`;

const ProfileAvatar = styled.img`
    width: 150px;
    align-content: center;
    text-align: center;
    display: flex;
    margin: auto;
`;

const ProfileList = styled.ul`
    list-style: none;
    padding: 0;
    text-align: left;
`;

const ProfileListItem = styled.li`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-family: "General Sans Variable",sans-serif;
`;

const ProfileField = styled.span`
    font-weight: 600;
`;

const Heading2 = styled.h2`
  color: #641a54;
  font-family: "General Sans Variable", sans-serif;
  text-align: center;

`;


function Profile({ userName }) {
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});


  return (
    <ProfileContainer>
      <Heading2>About me</Heading2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
        </div>
      )}
    </ProfileContainer>
  );
}

export default Profile;
