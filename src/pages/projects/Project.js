import React from 'react'
import './project.css'

const Project = () => {
    return (
        <>
            <div className="continer project" id="projects">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    TOP RECENT PROJECTS
                </h2>
                <hr />
                <hr />
                <p className="pb-3 text-center">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
                    odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
                    delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
                    nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
                    voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
                </p>
                {/* card design */}
                <div className="row" id="ads">
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Front End</span>
                                <img
                                    src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                                    alt="project1"
                                />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">HTML</span>
                                <span className="card-detail-badge">CSS</span>
                                <span className="card-detail-badge">Javascript</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h6 className="text-uppercase">
                                        Agency/Shop Website
                                    </h6>
                                </div>
                                <a
                                    className="ad-btn"
                                    href="https://github.com/Harshithb2r/Agency-shop-web-development-project.git"
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Mobile App</span>
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                                    alt="project2"
                                />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">React Native</span>

                                <span className="card-detail-badge">IOS / ANDROID</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">React-Native App</h5>
                                </div>
                                <a
                                    className="ad-btn"
                                    href="https://github.com/Harshithb2r?tab=repositories"
                                >
                                    View
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-image">
                                <span className="card-notify-badge">Full Stack</span>
                                <img
                                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                                    alt="project1"
                                />
                            </div>
                            <div className="card-image-overly m-auto mt-3">
                                <span className="card-detail-badge">Node</span>
                                <span className="card-detail-badge">Express</span>
                                <span className="card-detail-badge">React JS</span>
                                <span className="card-detail-badge">mongodb</span>
                            </div>
                            <div className="card-body text-center">
                                <div className="ad-title m-auto">
                                    <h5 className="text-uppercase">MERN Portfolio Website</h5>
                                </div>
                                <a className="ad-btn" href="https://github.com/Harshithb2r?tab=repositories">
                                    View
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
