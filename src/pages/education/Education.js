import React from 'react'
import { MdSchool } from "react-icons/md";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './education.css'

const Education = () => {
    return (
        <>
            <div className=" education" id="education">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    Education Details
                </h2>
                <hr />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="2021 - 2025"
                        iconStyle={{ background: "#138781", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">BTECH</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Malla Reddy University, IN
                        </h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="2019 - 2022"
                        iconStyle={{ background: "#138781", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Intermediate</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Sri Chaitanya, IN
                        </h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="2017 - 2019"
                        iconStyle={{ background: "#138781", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">High School</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Narayana, IN
                        </h4>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Education
