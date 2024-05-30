import React from 'react';
import './App.css'
import { XFollowCard } from './XFollowCard.jsx';

export function App() {

    const format = (userName) => `@${userName}`

    return(
        <section className='App'>
            <XFollowCard formatUserName={format} isFollowing name="Miguel Angel" userName="midudev" />
            <XFollowCard formatUserName={format} isFollowing={false} name="Pablo Hernandez" userName="pheralb" />
            <XFollowCard formatUserName={format} isFollowing name="Vanderhart" userName="vxnder" />
        </section>
    );
};