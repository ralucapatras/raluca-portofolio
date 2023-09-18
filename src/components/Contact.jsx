import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Contact(){
    return (
    <div className="contact" id="contact">
        <h1 class="title"> Contact Me</h1>
        <div class="container-md">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4 py-5">
            <div class="col d-flex align-items-start">
                <FontAwesomeIcon icon={faEnvelope} class="icon bi text-body-secondary  flex-shrink-0 me-3" width="1.75em" height="1.75em" />
                <div>
                <h3 class="sub-title">Email</h3>
                <p class="descr">ralucapatras98@gmail.com</p>
                </div>
            </div>
            <div class="col d-flex align-items-start">
                <svg class="icon bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><FontAwesomeIcon icon={faGithub} /></svg>
                <div>
                <h3 class="sub-title"><a href="https://github.com/ralucapatras" alt="Github Profile">Github</a></h3>
                <p class="descr">https://github.com/ralucapatras</p>
                </div>
            </div>
            <div class="col d-flex align-items-start">
            <svg class="icon bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"><FontAwesomeIcon icon={faLinkedin} /></svg>
                <div class ="contact-me">
                <h3 class="sub-title"><a href="https://www.linkedin.com/in/raluca-patras-49824528b" alt="Linkedin Profile">Linkedin</a></h3>
                <p class="descr">https://www.linkedin.com/in/raluca-patras-49824528b</p>
                </div>
            </div>
           
            {/* linkedin.com/in/raluca-patras-49824528b */}
            
        
        </div>
        </div>
  
    </div>
    )
}
export default Contact;