    import 'bootstrap/dist/css/bootstrap.min.css';
    import './components/mainScreen.css';
    import CollapsibleExample from './components/Navigation'
    import DarkVariantExample from './components/carousel'

    function MainScreen(){
        return(
            <div className='main-div'>
                <div>
                <CollapsibleExample/>
                </div>

                <div className='carouselDesign'>
                    <DarkVariantExample/>
                </div>
            </div>
        );
    }



    export default MainScreen;



   