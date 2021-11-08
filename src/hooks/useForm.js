import { useState } from 'react'

export const useForm = (initialState = {}) => {

    const [valueForm, setvalueForm] = useState(initialState)

    const reset = () => {
        setvalueForm(initialState);
    }

    const hanldleInputChange = ({ target }) => {
        setvalueForm({
            ...valueForm,
            [target.name]: target.value
        });
    }

    return [ valueForm, hanldleInputChange, reset];

}
