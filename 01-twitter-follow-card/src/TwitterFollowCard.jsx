import { useState } from "react"

export function TwitterFollowCard( { userName = "unknown", name}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? "Siguiendo" : "Seguir"
    const buttonClassName = isFollowing 
        ? "tw-followCard-button is-following"
        : "tw-followCard-button"
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img 
                    className="tw-followCard-headerImg"
                    src={`https://unavatar.io/${userName}`} 
                    alt="midu" />
                <div className="tw-followCard-headerDiv">
                    <strong>{name}</strong>
                    <span className="tw-followCard-headerSpan">@{userName}</span>
                </div>
                </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="tw-followCard-text">{text}</span>
                    <span className="tw-followCard-stopFollow">Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}