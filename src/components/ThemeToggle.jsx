import React, { useEffect } from 'react';

export const ThemeToggle = () => {
    useEffect(() => {
        document.documentElement.classList.add("dark");
    }, []);

    return null; 
};