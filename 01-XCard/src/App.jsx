import React from 'react';
import './App.css'
import { XFollowCard } from './XFollowCard.jsx';

const usuarios = [
    {
        id: 1,
        name: "Miguel Angel",
        userName: "midudev",
        isFollowing: false,
    },
    {
        id: 2,
        name: "Pablo Hernandez",
        userName: "pheralb",
        isFollowing: false,
    },
    {
        id: 3,
        name: "Vanderhart",
        userName: "vxnder",
        isFollowing: true,
    }
]

export function App() {

    return(
        <section className='App'>
            {
                usuarios.map( usuario => {
                    const { id, name, userName, isFollowing } = usuario;

                    return(
                        <XFollowCard 
                            key={id}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </XFollowCard>
                    );
                })
            }
        </section>
    );
};