import { useState } from "react"

export const useShowHide = () => {
    
    const [state, setState] = useState(false)

    const changeState = () => {
        setState( !state );
    }

    return { state, changeState }

}
