import { useEffect } from "react";

function Filter({ ccerti, setFiltered, activeCategory, setActiveCategory })
{

    useEffect(() => {
        if(activeCategory === "") {
            setFiltered(ccerti);            
            return;
        }
        const filtered = ccerti.filter((cert) => cert.category === activeCategory );
        setFiltered(filtered);
    }, [activeCategory]);

    return (
        <div className="filter-container">
            <button className={activeCategory === "" ? "active" : ""} onClick={() => setActiveCategory("")} >All</button>
            <button className={activeCategory === "Specialization" ? "active" : ""} onClick={() => setActiveCategory("Specialization")} >Specialization</button>
            <button className={activeCategory === "Web" ? "active" : ""} onClick={() => setActiveCategory("Web")} >Web Dev</button>
            <button className={activeCategory === "Python" ? "active" : ""} onClick={() => setActiveCategory("Python")} >Python</button>
            <button className={activeCategory === "ML" ? "active" : ""} onClick={() => setActiveCategory("ML")} >ML</button>
            <button className={activeCategory === "Cloud" ? "active" : ""} onClick={() => setActiveCategory("Cloud")} >Cloud/IT</button>
            <button className={activeCategory === "Others" ? "active" : ""} onClick={() => setActiveCategory("Others")} >Others</button>
        </div>
    );
}

export default Filter;