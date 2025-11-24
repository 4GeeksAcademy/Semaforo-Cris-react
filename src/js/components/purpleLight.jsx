import React, { useState } from "react";

const PurpleLight = () => {

    const [luzActivada, setLuzActivada] = useState(null)


    return (
        <button className={luzActivada === 'purple' ? 'luz morada activada' : 'luz morada'}
            onClick={() => setLuzActivada('purple')}>

        </button>
    )
}

export default PurpleLight;