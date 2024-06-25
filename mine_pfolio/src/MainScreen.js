    import 'bootstrap/dist/css/bootstrap.min.css';
    import './components/mainScreen.css';
    import { Button } from 'react-bootstrap';
    import CollapsibleExample from './components/Navigation'
    import DarkVariantExample from './components/carousel'
    import BasicExample from './components/Cards';
    import { FaReact, FaNodeJs, FaAws, FaJava, FaPython, FaBootstrap } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiCsharp, SiFlutter, SiFirebase, SiVisualstudiocode, SiJavascript, SiCplusplus, SiC } from 'react-icons/si';


    function MainScreen(){
        const iconSize = 40;
        return(
            <div className='main-div'>
                <div>
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
                    <Button variant="secondary" href='/assets/umair_resume.pdf'>Download Resume</Button>
                </div>
                <div className='cardStyle'>
                    <BasicExample cardTitle = 'Web Development' Description = 'I have done several project using MERN stack in web development and can create interactive web apps using MERN' ButtonLink= 'https://github.com/UmairJM' imageAddress= "/assets/images/webCard.jpeg"/>
                    <BasicExample cardTitle = 'Mobile App Development' Description = 'I have created fully functional Ecommerce app for buying fruits and vegetablr online in React Native and have good experiece of react native' ButtonLink= 'https://github.com/UmairJM' imageAddress= "/assets/images/mobileCard.jpg"/>
                    <BasicExample cardTitle = 'Game Developent' Description = 'I have created several gaming project using unity and C# for the source code of these gaming projects visit my github' ButtonLink= 'https://github.com/UmairJM' imageAddress= "/assets/images/unityCard.png"/>
              
                </div>
                <div className='iconsStyle'>
      <FaReact size={iconSize} />
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

            </div>
        );
    }



    export default MainScreen;



   