import { useEffect, useState } from "react";


export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    
    useEffect(() => {
        generateStars();
    }, [])

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 10000
        );

        const newStars = [];

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2, // Random duration for explosion
                animationDelay: Math.random() * 5, // Random delay for staggered explosions
                color: `hsl(${Math.random() * 360}, 100%, 75%)`, // Random bright color
            });
        }

        setStars(newStars);
    };


return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div
                key={star.id}
                className="star"
                style={{
                    width: star.size + "px",
                    height: star.size + "px",
                    left: star.x + "%",
                    top: star.y + "%",
                    animationDuration: `${star.animationDuration}s`, // Randomize duration
                    animationDelay: `${star.animationDelay}s`, // Randomize delay
                    backgroundColor: star.color, // Apply random color
                    boxShadow: `0 0 15px ${star.color}, 0 0 30px ${star.color}, 0 0 60px rgba(255, 255, 255, 0.3)`, // Glow effect
                }}
            />
        ))}
    </div>
);
};