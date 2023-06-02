// Write your code here

import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimelineCard = eachItem => {
    if (eachItem.category === 'PROJECT') {
      return <ProjectTimelineCard key={eachItem.id} projectDetails={eachItem} />
    }
    return <CourseTimelineCard key={eachItem.id} courseDetails={eachItem} />
  }

  return (
    <div className="chrono-container">
      <h1 className="heading"> MY JOURNEY OF </h1>
      <h1 className="heading"> CCBP 4.0 </h1>
      <Chrono
        theme={{secondary: 'white'}}
        items={timelineItemsList}
        mode="VERTICAL"
      >
        {timelineItemsList.map(eachItem => renderTimelineCard(eachItem))}
      </Chrono>
    </div>
  )
}

export default TimelineView
