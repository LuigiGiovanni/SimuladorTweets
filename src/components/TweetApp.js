import React, { useEffect, useReducer } from 'react';

import { tweetReducer } from './tweetReducer';
import { useShowHide } from '../hooks/useShowHide';

import { NavBar } from './NavBar';
import { FormTweet } from './FormTweet';
import { ListTweet } from './ListTweet';

export const TweetApp = () => {
    
    const init = () => {
        return JSON.parse(localStorage.getItem('tweet')) || [];
    }

    const [tweets, dispatch] = useReducer(tweetReducer, [], init)
    const { state: showForm, changeState } = useShowHide();

    useEffect(() => {
        localStorage.setItem('tweet', JSON.stringify(tweets))
    }, [tweets])

    const addNewTweet = (newTweet) => {
        dispatch({
            type: 'add',
            payload: newTweet
        });
    }

    const handleDelete = (idTweet) => {
        dispatch({
            type: 'delete',
            payload: idTweet
        });
    }

    return (
        <>
            <NavBar showForm={ showForm } changeState={ changeState } />

            <FormTweet showForm={ showForm } changeState={ changeState } addNewTweet={ addNewTweet } />

            <ListTweet tweets={ tweets } handleDelete={ handleDelete } />
        </>
    )
}
