import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id, title} = post;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div style={{border: '2px solid brown'}}>
            <h3>{title}</h3>
            <Link to={`/post/${id}`}>
                <button>Show Details</button>
            </Link>
            <button onClick={handleNavigate}>Details of {id}</button>
        </div>
    );
};

export default Post;