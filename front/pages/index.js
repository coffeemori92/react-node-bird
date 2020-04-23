import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);

    useEffect(() => {
        dispatch({
            type: LOAD_MAIN_POSTS_REQUEST
        })
    }, []);

    return (
        <>
            {me && <PostForm />}
            {mainPosts.map((c) => {
                return (
                    <PostCard key={c} post={c} />
                );
            }) }
        </>
    );
};

export default Home;