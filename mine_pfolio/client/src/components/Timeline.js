import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './mainScreen.css';
export default function AlternateReverseTimeline() {
  return (
    <Timeline position="alternate-reverse">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <h4 className='textColor'>Bachelor of Science in Computer Science</h4>
            <p className='textColor'>Comsats University Islamabad CUI</p>
            <p className='textColor'>2021-2024</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <h4 className='textColor'>Higher Secondary Education F.Sc</h4>
            <p className='textColor'>Fauji Foundation College, RWP</p>
            <p className='textColor'>2018-2020</p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <h4 className='textColor'>Secondary Education</h4>
            <p className='textColor'>Dar-E-Arqam School Islamabad</p>
            <p className='textColor'>2016-2018</p>
        </TimelineContent>
      </TimelineItem>
      
    </Timeline>
  );
}
