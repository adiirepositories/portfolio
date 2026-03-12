import * as React from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
// import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineOppositeContent, { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent'

export default function MyTimeline() {
  return (
    // <Timeline position='alternate'>
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2
        }
      }}
    >
      {/* <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>09:30 am</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem> */}
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>June 2023 - Present</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>PT. Primus Indonesia as Full time Programmer</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>May 2022</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Joined PT. Primus Indonesia as TOS support at Patimban International Car Terminal
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color='text.secondary'>2021</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Graduate from Gunadarma University, S1 - Teknik Informatika</TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
