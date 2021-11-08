import React from 'react';

import moment from 'moment';
import 'moment/locale/es';

moment.locale('es');
moment.relativeTimeThreshold('y', 365);

export const ListTweet = ({ tweets, handleDelete }) => {
    return (
        <div className='list-tweet mb-5'>
            <h1 className='text-center mt-3'>Lista de Tweets</h1>

            { 
                (tweets.length !== 0) 
                ?
                    tweets.map( tweet => (
                        
                        <div key={ tweet.id } className='tweet-container mt-5'>
                            <span className='tweet-container__name'>{ tweet.name }</span>  
                            <span className='tweet-container__tweet'>{ tweet.tweet }</span>  
                            <span className='tweet-container__date'>{ moment.duration(-moment().diff(tweet.date)).humanize(true) }</span>  
                            <svg onClick={ () => handleDelete(tweet.id) } xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x-circle x-circle-tweet"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                        </div>
                            
                    ))
                :
                    <h4 className="text-center text-secondary mt-4">No hay tweets</h4>
            }

        </div>
    )
}
