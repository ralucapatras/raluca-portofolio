import "./Skills.css";
import Hr from "./Hr";

function Skills(){
    return (
    <div class="Skills" id="skills">
        <h1 class="title"> My Skills</h1>

        <div class="all">
            <div class="skill">
                <div class="skill_title">
                    <p>Front-end Coding</p>
                </div>
                <div class="skill_descr">
                    <p>I am an expert with the three basic programming languages (<span class="tag">HTML</span>, <span class="tag">CSS</span> and <span class="tag">JavaScript</span>) used in building the front-end of websites.</p>
                </div>
            </div>
            <div class="skill">
                <div class="skill_title">
                    <p>Back-end Web Programming Languages</p>
                </div>
                <div class="skill_descr">
                    <p>I work really good with <span class="tag">Node.js</span>, <span class="tag">Express</span>, <span class="tag">Firebase</span> and <span class="tag">Mongo DB</span>.</p>
                </div>
            </div>
        </div>
         <div class="all">  
            <div class="skill">
                <div class="skill_title">
                    <p>Resposive Designs</p>
                </div>
                <div class="skill_descr">
                    <p>Responsivness is a key part of my development process.</p>
                </div>
            </div>
            <div class="skill">
                <div class="skill_title">
                    <p>Git</p>
                </div>
                <div class="skill_descr">
                    <p>I am using version control system to track and revise code changes.</p>
                </div>
            </div>
        </div> 
        <div class="all">  
            <div class="skill">
                <div class="skill_title">
                    <p>Program Frameworks</p>
                </div>
                <div class="skill_descr">
                    <p>The best framework is <span class="tag">React.js</span>, at which I am excellent.</p>
                </div>
            </div>
            <div class="skill">
                <div class="skill_title">
                    <p>APIs</p>
                </div>
                <div class="skill_descr">
                    <p>I'm capable of designing and developing <span class="tag">RESTful APIs</span> using Node.js, Express and Ejs.</p>
                </div>
            </div>
        </div> 
        <div class="all">  
            <div class="skill">
                <div class="skill_title">
                    <p>Search Engine Optimization</p>
                </div>
                <div class="skill_descr">
                    <p>I like coding efficiently so the pages will load quickly and be more visible to search engines.</p>
                </div>
            </div>
            <div class="skill">
                <div class="skill_title">
                    <p>Testing and Debugging</p>
                </div>
                <div class="skill_descr">
                    <p>I have patience and persistence; skills that help me to identify a problem, to develop a possible solution and to take the appropiate couse of action.</p>
                </div>
            </div>
        </div> 
        
      <Hr />  

    </div>
    )
}

export default Skills;