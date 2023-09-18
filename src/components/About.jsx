import "./About.css";
import Hr from "./Hr";

function About(){
    return (
        <div class="about" id="about">
            <Hr />
            <div class="image">
                <img class="profile" src="images/foto1.jpg" alt ="profile"/>
            </div>
            <div class="name">
                <h1 class= "title-name">Raluca Patras</h1>
            </div>
            <div class= "text">
            <p class="descriere"> 
                My <span class="super">superpower</span> is that I work hard until I get where I want to be. I'm an organized person, attentive to details, confident in my abilities and I like to be challenged to grow and develop my IT skills. I'm a <span class="super">creative</span> person and I like to encourage a positive work environment.
                </p>
                <p class="descriere"> 
                I'm a <span class="super">web developer</span> who pursued web development as a personal interest and I have build a strong skill set that way. Thinking outside the box may sound cliché, but I have the ability to throw out preconceptions and use unconventional thinking in planning, programming and problem solving.
                </p>
                
            </div>
            <Hr />
        </div>
        
    ) 
}

export default About;