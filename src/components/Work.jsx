import "./Work.css";
import Hr from "./Hr";

function Work(){
    return (
        <div class="work" id="work">
            <h1 class="title"> My Work</h1>
            <div class="projects">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-3">
                    <div class="col">
                    <div class="card shadow-sm">
                        <img class="card-img-top" src="images/Speedy.png" width="100%" alt="speedy_img"></img>
                        <div class="card-body">
                        <p class="card-text">I build this landing page for a company using React.js. It has a built-in rating and authentication system using email and password or google authentication. I used Firebase for databases and deployment.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="https://speedy-cst.firebaseapp.com/">
                                    <button type="button" class="btn btn-sm btn-outline-secondary" href="https://speedy-cst.firebaseapp.com/">View Site</button>
                                </a>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card shadow-sm">
                    <img class="card-img-top" src="images/whispers.png" width="100%"  alt="speedy_img"></img>
                        <div class="card-body">
                        <p class="card-text">Writing whispers is an application built with React.js. You can create several notes that will be displayed on the screen. Also, the notes can be deleted.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="https://3h5fkn.csb.app/">
                                    <button type="button" class="btn btn-sm btn-outline-secondary" href="https://speedy-cst.firebaseapp.com/">View Site</button>
                                </a>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card shadow-sm">
                    <img class="card-img-top" src="images/amazon.png" width="100%"  alt="speedy_img"></img>
                        <div class="card-body">
                        <p class="card-text">This is an Amazon clone. I used React.js for building the components and Firebase for databases and deployment. You can add products in your basket and proceed to chekout. The site also has an authentication system. </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="https://clone-1c434.web.app/">
                                    <button type="button" class="btn btn-sm btn-outline-secondary" href="https://speedy-cst.firebaseapp.com/">View Site</button>
                                </a>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="col">
                    <div class="card shadow-sm">
                    <img class="card-img-top" src="images/band.png" width="100%" alt="speedy_img"></img>
                        <div class="card-body">
                        <p class="card-text">When you click on the button, a random band name will be generated. This application was built using Node.js, Express and EJS. I used Cyclic for deployment.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="https://important-crow-hoodie.cyclic.cloud/">
                                    <button type="button" class="btn btn-sm btn-outline-secondary" href="https://speedy-cst.firebaseapp.com/">View Site</button>
                                </a>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card shadow-sm">
                    <img class="card-img-top" src="images/todo.png" width="100%"  alt="speedy_img"></img>
                        <div class="card-body">
                        <p class="card-text">This is a To Do List created with React.js. You can add different items on the list and then you can delete by clicking on them using the mouse. </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="https://tk65gv.csb.app/">
                                    <button type="button" class="btn btn-sm btn-outline-secondary" href="https://speedy-cst.firebaseapp.com/">View Site</button>
                                </a>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col">
                    <div class="card shadow-sm">
                    <img class="card-img-top" src="images/emojipedia.png" width="100%"  alt="speedy_img"></img>
                        <div class="card-body">
                        <p class="card-text">Emojipedia is a static page created with React.js. Is a dictionary for different emojis.</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <a href="https://rkshf2.csb.app/">
                                    <button type="button" class="btn btn-sm btn-outline-secondary" href="https://speedy-cst.firebaseapp.com/">View Site</button>
                                </a>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Hr />
        </div>
    )
}

export default Work