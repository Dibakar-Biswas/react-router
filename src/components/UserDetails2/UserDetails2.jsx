import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const { name, username } = use(userPromise);
    return (
        <div>
            <p><small>UserName : {username}</small></p>
            <p>Name: {name}</p>
        </div>
    );
};

export default UserDetails2;