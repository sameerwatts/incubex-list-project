import React from 'react';
import "./style.css";

const SectionWrapper = (props) => {
    return (
        <section className={`sectionWrapper ${props.className ? props.className : "" }`}>
            <div className="sectionWrapperInner">
                {props.children}
            </div> 
        </section>
    );
};

export default SectionWrapper;