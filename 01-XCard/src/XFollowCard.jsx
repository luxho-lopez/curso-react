import { useState } from "react";

export function XFollowCard( { initialIsFollowing, children, userName } ) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const textButton = isFollowing ? "Siguiendo" : "Seguir";
    const buttonClassName = isFollowing ? "follow-card-button is-following" : "follow-card-button";

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return(
        <article className='follow-card'>
            <header className='follow-card-header'>
                <img className='follow-card-avatar' src={`https://unavatar.io/${userName}`} alt="Avatar" />
                <div className='follow-card-info'>
                    <strong className='follow-card-info-name'> {children} </strong>
                    <span className='follow-card-info-username'> @{userName} </span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={ handleClick }> 
                    <span className="follow-card-button-text">{ textButton }</span>
                    <span className="follow-card-button-textStop">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}