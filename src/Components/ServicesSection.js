import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Design'} 
                        paragraph={'Website design and development is the most important and first step in online branding and customer acquizition. It creates value and trust.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={intelligence} 
                            title={'Design Thinking'} 
                            paragraph={'Wordpress theme development from scratch.web development is developing a website with online payment gateway system.custom theme development and plugins development.'}
                        />
                    </div>
                    <ServiceCard 
                        image={gamedev} 
                        title={'UI/UX Design'} 
                        paragraph={'detail-oriented services focused on exceeding client expectations by creating beautiful, user-friendly designs of enterprise systems, web portals, and mobile applications.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
