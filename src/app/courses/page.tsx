import Nav from "../../../component/page";

function Courses() {
    return (
        <div className="courses-page">
            <Nav />
            <div className="courses-container">
                <h1 className="courses-title">Foundational Courses</h1>
                <div className="courses-grid">
                    <div className="course-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Mathematics for AI</h3>
                                <ul className="course-list">
                                    <li>Linear Algebra</li>
                                    <li>Probability and Statistics</li>
                                    <li>Optimization Techniques</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="course-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Programming for AI</h3>
                                <ul className="course-list">
                                    <li>R (for statistical computing)</li>
                                    <li>Julia (new language gaining popularity)</li>
                                    <li>MATLAB (for numerical computing)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="course-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Data Structures and Algorithms</h3>
                                <ul className="course-list">
                                    <li>Data preprocessing and visualization</li>
                                    <li>Data structures (arrays, linked lists, trees, graphs)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="courses-title">Machine Learning Courses</h2>
                <div className="courses-grid">
                    <div className="course-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Supervised Learning</h3>
                                <ul className="course-list">
                                    <li>Classification</li>
                                    <li>Model evaluation metrics</li>
                                    <li>Overfitting and underfitting</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="course-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Unsupervised Learning</h3>
                                <ul className="course-list">
                                    <li>Clustering</li>
                                    <li>Dimensionality reduction</li>
                                    <li>Anomaly detection</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="course-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Deep Learning</h3>
                                <ul className="course-list">
                                    <li>Convolutional neural networks (CNNs)</li>
                                    <li>Recurrent neural networks (RNNs)</li>
                                    <li>Long short-term memory (LSTM) networks</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="courses-title">AI Specializations</h2>
                <div className="courses-grid">
                    <div className="course-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Natural Language Processing (NLP)</h3>
                                <ul className="course-list">
                                    <li>Text preprocessing</li>
                                    <li>Sentiment analysis</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="course-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Computer Vision</h3>
                                <ul className="course-list">
                                    <li>Image processing</li>
                                    <li>Object detection</li>
                                    <li>Image segmentation</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="course-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Robotics and Control Systems</h3>
                                <ul className="course-list">
                                    <li>Robot kinematics and dynamics</li>
                                    <li>Control systems</li>
                                    <li>Motion planning</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="courses-title">Advanced AI Topics</h2>
                <div className="courses-grid">
                    <div className="course-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Generative Models</h3>
                                <ul className="course-list">
                                    <li>Generative adversarial networks (GANs)</li>
                                    <li>Variational autoencoders (VAEs)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="course-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Explainable AI (XAI)</h3>
                                <ul className="course-list">
                                    <li>Feature importance</li>
                                    <li>Model explainability techniques</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="course-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">AI Ethics and Fairness</h3>
                                <ul className="course-list">
                                    <li>Bias in AI systems</li>
                                    <li>Fairness metrics</li>
                                    <li>Ethics in AI development</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="courses-title">Other AI-related Courses</h2>
                <div className="courses-grid">
                    <div className="course-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Data Science</h3>
                                <ul className="course-list">
                                    <li>Data wrangling</li>
                                    <li>Data visualization</li>
                                    <li>Data mining</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="course-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Big Data and Distributed Computing</h3>
                                <ul className="course-list">
                                    <li>Hadoop and Spark</li>
                                    <li>Distributed computing architectures</li>
                                    <li>Big data processing</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="course-item">
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">Cloud Computing</h3>
                                <ul className="course-list">
                                    <li>Cloud infrastructure</li>
                                    <li>Cloud-based AI services</li>
                                    <li>Cloud security and compliance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;