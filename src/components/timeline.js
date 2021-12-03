import * as React from "react"
import { Link } from "gatsby"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = (props) => {

    return (
        <div>
            <VerticalTimeline
                lineColor={"black"}
            >
                {props.Timeline.myTimeline.map((SingleTimeline, index) => {
                    return (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date={SingleTimeline.date}
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        >
                            <h3 className="vertical-timeline-element-title">{SingleTimeline.title}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{SingleTimeline.subTitle}</h4>
                            <p> {SingleTimeline.content} </p>
                        </VerticalTimelineElement>
                    )
                })
                }
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                />
            </VerticalTimeline>
            <Link to="/">Go back to the homepage</Link>
        </div>
    )
}

export default Timeline
