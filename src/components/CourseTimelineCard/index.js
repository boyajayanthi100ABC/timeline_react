// Write your code here

import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="course-container">
        <h1 className="heading"> {courseTitle} </h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration-p"> {duration} </p>
        </div>
        <p className="description"> {description} </p>
        <ul className="course-tags-list">
          {tagsList.map(eachTag => (
            <li key={eachTag.id} className="list-con">
              <p className="list-item">{eachTag.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
export default CourseTimelineCard
