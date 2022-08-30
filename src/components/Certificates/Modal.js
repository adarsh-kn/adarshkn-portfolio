import React from "react";
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return(
        <motion.div className="backdrop" style={{ display: "flex", alignItems: "center", justifyContent: "center" }} onClick={handleClick}>
            <motion.img src={selectedImg} alt="enlarged certificate" initial={{ y: "-100vh" }} animate={{ y: 0 }} transition={{ duration: 0.5 }} />
        </motion.div>
    );
};

export default Modal;