import React from "react"

const Error = ({mensaje}) => {
    return (
        <div class="alert alert-dismissible alert-primary text-center">
            <strong>{mensaje}</strong>
        </div>
    )
}

export default Error;