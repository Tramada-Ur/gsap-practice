import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import { NavLinks } from '../../constants/index';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, SplitText);

const NavBar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top'
            }
        })

        navTween.fromTo('nav', { backgroundColor: 'transparent' },
            {
                backgroundColor: '#FFFFFF50',
                backgroundFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut'
            }

        );
    })

    return (
        <nav >
            <div className='navbar'>
                <a href='#home' className='flex flex-row gap-6' >
                    <img src='/public/logo.svg' alt='logo' className='logo' />
                    <p>
                        The Learning Site
                    </p>
                </a>

                <ul className='flex flex-row gap-6'>
                    {NavLinks.map((link) => (
                        <li key={link.id}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </nav>
    );
};
export default NavBar;