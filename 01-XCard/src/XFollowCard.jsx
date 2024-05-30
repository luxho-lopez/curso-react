export function XFollowCard( { formatUserName, name, userName, isFollowing } ) {
    return(
        <article className='follow-card'>
            <header className='follow-card-header'>
                <img className='follow-card-avatar' src={`https://unavatar.io/${userName}`} alt="Avatar" />
                <div className='follow-card-info'>
                    <strong className='follow-card-info-name'> {name} </strong>
                    <span className='follow-card-info-username'> {formatUserName(userName)} </span>
                </div>
            </header>
            <aside>
                <button className='follow-card-button'>Seguir</button>
            </aside>
        </article>
    )
}