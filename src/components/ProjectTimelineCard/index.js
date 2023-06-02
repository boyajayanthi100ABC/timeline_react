// Write your code here

import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails
  return (
    <div className="project-container">
      <img src={imageUrl} className="img" alt="project" />
      <div className="project-title-duration-div">
        <h1 className="heading"> {projectTitle} </h1>
        <div className="duration-container">
          <AiFillCalendar color="#171f46" />
          <p className="duration-p"> {duration}</p>
        </div>
      </div>
      <p className="description-p"> {description} </p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
