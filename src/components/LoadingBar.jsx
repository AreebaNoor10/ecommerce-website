import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingBar = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <motion.div
                className="h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                onAnimationComplete={() => setIsLoading(false)}
            />
        </div>
    );
};

export default LoadingBar; 