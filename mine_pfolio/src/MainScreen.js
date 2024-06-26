    import 'bootstrap/dist/css/bootstrap.min.css';
    import './components/mainScreen.css';
    import { Button } from 'react-bootstrap';
    import CollapsibleExample from './components/Navigation'
    import DarkVariantExample from './components/carousel'

    import BasicExample from './components/Cards';
    import { FaReact, FaNodeJs, FaAws, FaJava, FaPython, FaBootstrap } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiCsharp, SiFlutter, SiFirebase, SiVisualstudiocode, SiJavascript, SiCplusplus, SiC } from 'react-icons/si';
import { useState } from 'react';
import  ButtonGroupp from './components/ButtonGroup';
import MediaCard from './components/MuiCard';
import port from './components/portVideo.mp4';
import veg from './components/vegVideo.mp4';
import BasicTextFields from './components/TextInput';
import fox from './components/fox.mp4';
import bus from './components/bus.mp4';
import AlternateReverseTimeline from './components/Timeline';


    function MainScreen(){
        
        const [iconSize,setIconSize] = useState(40);
        const[projects,setProjects] = useState(true);
        const [futureGoals,setFutureGoals] = useState();
        return(
            <div className='main-div' id='main'>
                <div className='navigationStyle'>
                <CollapsibleExample/>
                </div>

                <div className='carouselDesign'>
                    <DarkVariantExample/>
                </div>
                <div className='introStyle'>
                    <h3 style={{color: 'white'}}>
                        Welcome To My Portfolio
                    </h3>
                    <h1 style={{color: 'white'}}>
                        Hi! I am Umair Mehmood Software Developer
                    </h1>
                    <p style={{color: 'white'}}>
                    a passionate computer scientist with expertise in creating mobile applications and web development. My journey in technology began with a deep fascination for building innovative solutions that enhance user experiences. Alongside my professional journey, I'm actively exploring the realm of Unity for game development, driven by a curiosity to merge creativity with technical prowess. 
                    I thrive in dynamic environments where I can apply my skills in software engineering to craft impactful digital experiences. Let's connect and explore how we can collaborate on exciting projects!
                    </p>
                    <Button variant="dark" href='/assets/umair_resume.pdf'>Download Resume</Button>
                </div>
                <div className='cardStyle' id='Skills'>
                    <BasicExample cardTitle = 'Web Development' Description = 'I have done several project using MERN stack in web development and can create interactive web apps using MERN' ButtonLink= 'https://github.com/UmairJM' imageAddress= "/assets/images/webCard.jpeg"/>
                    <BasicExample cardTitle = 'Mobile App Development' Description = 'I have created fully functional Ecommerce app for buying fruits and vegetablr online in React Native and have good experiece of react native' ButtonLink= 'https://github.com/UmairJM' imageAddress= "/assets/images/mobileCard.jpg"/>
                    <BasicExample cardTitle = 'Game Developent' Description = 'I have created several gaming project using unity and C# for the source code of these gaming projects visit my github' ButtonLink= 'https://github.com/UmairJM' imageAddress= "/assets/images/unityCard.png"/>
              
                </div>
                <div className='iconsStyle'  onMouseEnter={()=>setIconSize(70)} onMouseLeave={()=>setIconSize(40)}>
                    <FaReact size={iconSize}  />
                    <FaNodeJs  size={iconSize}/>
                    <FaNodeJs size={iconSize}/>
                    <SiExpress  size={iconSize}/>
                    <SiMongodb  size={iconSize}/>
                    <FaAws  size={iconSize}/>
                    <FaJava size={iconSize}/>
                    <FaPython size={iconSize}/>
                    <FaBootstrap size={iconSize}/>
                    <SiCsharp size={iconSize}/>
                    <SiFlutter size={iconSize}/>
                    <SiFirebase size={iconSize}/>
                    <SiVisualstudiocode size={iconSize}/>
                    <SiJavascript size={iconSize}/>
                    <SiCplusplus size={iconSize}/>
                    <SiC size={iconSize}/>
      
    </div>
    <hr/>
    <div className='projectsStyle' id='Ptojects'>
        <h1 style={{color:'white'}}>Projects</h1>
        <p style={{color:'white'}}>I have built this portfolio to showcase my skills and achievements in web development, mobile app development, and game development. Below, you will find a selection of projects that highlight my expertise in these areas. Each project demonstrates my ability to create innovative and functional solutions using a variety of technologies and tools.</p>
        <ButtonGroupp Projects={projects} setProjects={setProjects} FutureGoals={futureGoals} setFutureGoals={setFutureGoals} />
       
        {projects ? (
        <div className='projectsDesign'>
            <MediaCard className='child' projectTitle={'VegMe'} Description={'An online ecommerce app created using react native & Firebase using this app we can order online fresh fruits and vegetable of good quality'} sourceLink={'https://github.com/UMAIRJM/VEGMe'} imageAddress={'/assets/images/Vegme.png'} />
             <MediaCard className='child' projectTitle={'Portfolio website'} Description={'Fully Functional portfolio website using MERN stack where user can add order for portfolio owner and study their projects,blogs etc.'} sourceLink={'https://github.com/UMAIRJM/UmairPortfolio'}  imageAddress={'/assets/images/portfolio.png'}/>
            <MediaCard className='child' projectTitle={'Smart Scale'} Description={'An mobile app using react native and firebase this app helps user to maintain his/her fitness and track their diet records etc.'} sourceLink={'https://github.com/zubairali001/smartscale-reactnative/tree/umair-latest'} imageAddress={'/assets/images/smartScale.png'}/>
            <MediaCard className='child' projectTitle={'School Bus Game'} Description={'School Bus Game using Unity and C# where player picks and drop school students and earn points and enjoy driving bus.'} sourceLink={'https://github.com/UMAIRJM/SchoolBusGame-'} imageAddress={'/assets/images/bus.png'}/> 
            <MediaCard className='child' projectTitle={'Fox the Warrior'} Description={'Game where player can control fox character and colletc different items to gain power and proceeds in level accordingly'}  sourceLink={'https://github.com/UMAIRJM/GameDevFoxGame'} imageAddress={'/assets/images/fox.png'}/>
            <MediaCard className='child' projectTitle={'FPS Shooter'} Description={'FPS shooter Game where player soots the enemier and complete its level this game is also developed using unity & C#'} sourceLink={'https://github.com/UMAIRJM/FPSshooter'} imageAddress={'/assets/images/Fps.png'}/>
        </div> ): (
            <div className='future'>
                <img alt='lapop' src='/assets/images/laptop.png' className='laptopSty'/>
                <div >
                    <h1 className='textColor'>Future Aspiration</h1>
                    <p className='textColor'>As I look to the future, I am eager to expand my expertise and tackle new challenges in the world of technology. My primary goal is to delve deeper into Unity game development, creating immersive and engaging gaming experiences. In addition, I am committed to excelling in my current field of web and mobile application development, continuously improving my skills and delivering high-quality projects. To broaden my skill set, I am also learning Flutter, aiming to create cross-platform mobile applications with a focus on performance and user experience. These aspirations drive me to continuously learn and innovate, ensuring I stay at the forefront of the ever-evolving tech industry.</p>
                </div>
            </div>
        )}
    </div>
    <div className='videoDiv'>
    <div className='childVideo'>
        <h4 className='textColor'>Portfolio Project</h4>
        <video width="400" controls autoPlay >
            <source src={port} type='video/mp4'/> 
            your browser does not support video tag 
        </video>
    </div>
    <div className='childVideo'>
        <h4 className='textColor'>VegMe Project</h4>
        <video width="400" height="200" controls autoPlay >
            <source src={veg} type='video/mp4'/> 
            your browser does not support video tag 
        </video>
    </div>
    <div className='childVideo'>
        <h4 className='textColor'>Fox Warrior Game</h4>
        <video width="400" controls autoPlay >
            <source src={fox} type='video/mp4'/> 
            your browser does not support video tag 
        </video>
    </div>
    <div className='childVideo'>
        <h4 className='textColor'>School bus Game</h4>
        <video width="400" controls autoPlay >
            <source src={bus} type='video/mp4'/> 
            your browser does not support video tag 
        </video>
    </div>
    </div>
    <div className='aboutMeMain' id='Aboutme'>
        <h1 className='textColor'>About Me</h1>
        <hr style={{color:'black'}}/>
        <div className='aboutMeInner'>
            <div className='aboutMeChildren1'>
                {/* <h3 className='textColor'>Education</h3> */}
                <AlternateReverseTimeline/>
            </div>
            <div className='aboutMeChildren2'> 
                <h4 className='textColor'>Who am I?</h4>
                <p className='textColor'>I am a dedicated and skilled professional with a background in computer science, specializing in mobile app development and web technologies. I am passionate about creating engaging user experiences and currently expanding my expertise in Unity for game development.</p>
                <h4 className='textColor'> Interest & Hobbies</h4>
                <p className='textColor'>Video Games,Movies,Travelling</p>
                <h4 className='textColor'>Languages</h4>
                <p className='textColor'>Urdu is my mother language. I am fluent in English</p>
                <hr/> 
                <p className='textColor'>I am a versatile professional with a strong foundation in computer science, focusing on mobile app development and web technologies. With a passion for innovation, I am adept at creating impactful applications and am currently exploring Unity for immersive game development. My journey is driven by a commitment to pushing boundaries and delivering compelling digital experiences.</p>
            </div>
        </div>
    </div>
    <div className='inTouch' id='intouch'>
        <h1 className='textColor'>Get In touch</h1>
        <div className='intouchInner'>
            <div className='imageDiv'>
                <img alt='intouch' src='/assets/images/Intouch.png' className='intouchImage'/>
            </div>
        <div className='intouchDiv'>
            <div className='inputFieldsAlign'>
                <BasicTextFields  className='inputChild' labeel={'First name'}/>
                <BasicTextFields labeel={'Last Name'} className='inputChild'/>
                
            </div>
            <div className='inputFieldsAlign'>
            <BasicTextFields labeel={'Email'} className='inputChild'/>
            <BasicTextFields labeel={'Phone'} className='inputChild'/>
            </div>
            <BasicTextFields labeel={'Message'} className='messgaeInput'/>
            <Button variant="dark" type='submit' style={{width:'50%',marginLeft:'50%', transform: 'translateX(-50%)'}}>Send</Button>
        </div>
        </div>
    </div>
    <hr style={{ border: '1px solid #000', margin: '20px 0' }} />
    <div className='closingDiv'>
        <h4 style={{width:'50%',marginLeft:'50%', transform: 'translateX(-50%)' , fontStyle:'italic'}}>Umair's Portfolio</h4>
        <p>Copyright 2024. All Rights Reserved  </p>
        <Button variant="dark" href='/assets/umair_resume.pdf' style={{width:'50%',marginLeft:'50%', transform: 'translateX(-50%)'}} id='Resume'>Download Resume</Button>
    </div>

 </div>
);
}



    export default MainScreen;



   