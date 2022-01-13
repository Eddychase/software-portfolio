import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'May 2018 - Sep 2018'} 
                        title={'Architectural Intern'}
                        subTitle={'Spaceline Design ltd'}
                        text={'Conducted research for the project team and Produced renders for the ongoing projects'} 
                        
                    />
                    <ResumeItem 
                        year={'May 2019 - Sep 2019'} 
                        title={'Architectural Intern'}
                        subTitle={'Spaceline Design ltd'}
                        text={'Delivered final structural plans for the ongoing projects and Produced graphic presentations of designs'} 
                    />
                    <ResumeItem 
                        year={'Sep 2021 - Oct 2021'} 
                        title={'User Interface Designer'}
                        subTitle={'Tripitaca'}
                        text={'Assisted with the design of tripitaca travels website which was designed using the Vue Js framework. '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2014 - 2015'} 
                        title={'Diploma in Business IT'}
                        subTitle={'Strathmore University'} 
                    />
                    <ResumeItem 
                        year={'2015 - 2021'} 
                        title={'Bachelor of Architecture'}
                        subTitle={'Jomo Kenyatta University'}
                    />
                    <ResumeItem 
                        year={'2020 - 2021'} 
                        title={'Web Development Certificate'}
                        subTitle={'Moringa School'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
