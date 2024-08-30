import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (

        <div className='bg-green-300 2xl:container flex flex-wrap  justify-around p-5'>
            <div className='flex mt-10'>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faXTwitter} size="2x" style={{ margin: '10px', color: '#000000' }} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ margin: '10px', color: '#000000' }} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} size="2x" style={{ margin: '10px', color: '#000000' }} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} size="2x" style={{ margin: '10px', color: '#000000' }} />
            </a>
            </div>
            <div className='text-black font-normal mt-5 md:mt-0 md:px-5'>
                <p className='font-bold'>Use cases</p>
                <p>Ui Design</p>
                <p>Ux Design</p>
                <p>wireframing</p>
                <p>Diagram</p>
                <p>Brainstroming</p>
                <p>Online whiteboard</p>
                <p>Team collaboration</p>
            </div>
            <div className='text-black font-normal mt-5 md:mt-0 md:px-5'>
            <p className='font-bold'>Use cases</p>
                <p>Ui Design</p>
                <p>Ux Design</p>
                <p>wireframing</p>
                <p>Diagram</p>
                <p>Brainstroming</p>
                <p>Online whiteboard</p>
                <p>Team collaboration</p> 
            </div>
            <div className='text-black font-normal mt-5 md:mt-0 md:px-5'>
            <p className='font-bold'>Use cases</p>
                <p>Ui Design</p>
                <p>Ux Design</p>
                <p>wireframing</p>
                <p>Diagram</p>
                <p>Brainstroming</p>
                <p>Online whiteboard</p>
                <p>Team collaboration</p>
            </div>
        </div>
   
  )
}
