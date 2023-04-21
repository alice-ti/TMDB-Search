import React, {HTMLAttributes} from "react";


interface CardProps extends HTMLAttributes<HTMLElement> {

}

const Card: React.FC<CardProps> = (props) => {
    const {className = ''} = props
    return (
        <>
            <div className={'lg:w-[400px] lg:h-[500px] bg-fuchsia-900/90 ' + className}></div>
        </>
    )
}

export default Card
