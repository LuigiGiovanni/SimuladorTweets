import React from 'react'
import moment from 'moment';
import 'moment/locale/es';

import { useForm } from '../hooks/useForm';

export const FormTweet = ({ addNewTweet = {}, showForm, changeState }) => {

    const [ { name, tweet }, hanldleInputChange, reset ] = useForm({
        name: '',
        tweet: ''
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(tweet.length < 1 && name.length < 1){

            alert('Por favor ingresa un tweet válido') 
            return;
        }

        const newTweet = {
            id: new Date().getTime(),
            name: name,
            tweet: tweet,
            date: moment().format()
        }

        addNewTweet(newTweet);

        reset();

        changeState();

    }

    return (
        showForm 
        &&
        (
            <div className="card_form container">
                <div className="card-body ">
                    <form className='form-group' onSubmit={ handleFormSubmit }>
                        <div className="form-floating mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Escribe tu nombre" 
                                id="floatingInputName"
                                name='name'
                                value={ name }
                                onChange={ hanldleInputChange }
                            />
                            <label htmlFor="floatingInputName">Ingrese su nombre222</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea 
                                className="form-control card-form__text-area" 
                                placeholder="Escribe tu tweet" 
                                id="floatingTextarea"
                                name='tweet'
                                value={ tweet }
                                onChange={ hanldleInputChange }
                            >
                            </textarea>
                            <label htmlFor="floatingTextarea">Escriba su tweet</label>
                        </div>
                        
                        <div className='d-grid  gap-*'>
                            <button 
                                type="submit" 
                                className="btn btn-primary"
                            >
                            Enviar tweet
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    )
}
