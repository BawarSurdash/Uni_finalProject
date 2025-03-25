import Cover from "./cover";
import Navbar from "./navbar";
const About = () => {
    
    return ( 
        <div className="pt-16">
            <Navbar/>
            <Cover title="About" sub1="Home" sub2="About" />
            <h1>About</h1>
        </div>
     );
}
 
export default About;