import './index.scss'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_xn0c8kc', 'template_5q8ci8b', form.current, '7wf9LqvdAazTyQEM2')
            .then(
                () => {
                    alert('Message sent successfully!')
                    window.location.reload(false)
                },
                () => {
                    alert('Message failed to send!')
                },
            );
    };
    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially ambitious or
                        large projects. However, if you have other requests or questions,
                        don't hesitate to contact me using the below form.
                    </p>
                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder= "Name" required />
                                </li>
                                <li className='half'>
                                    <input 
                                    type="email" 
                                    name="email" 
                                    placeholder= "Email" 
                                    required 
                                    />
                                </li>
                                <li>
                                    <input 
                                    type="text" 
                                    name="subject" 
                                    placeholder= "Subject" 
                                    required 
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )

}

export default Contact