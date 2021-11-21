import React from 'react';
import SocialMediaButtons from 'react-social-media-buttons';

function Home() {
    return (
        
    <div>
    <h1 class="mainHeading">Arshleen Nagpal</h1>
    <aside>
        <blockquote>
            <img src="images/arshleen.jpeg"
            width="100px" height="100px" />
        </blockquote>
    </aside>
    <section>
        <div  class="container">I'm a web developer (in progress) based out of Brampton, Canada. I'm currently studying at University of Toronto, School of Continuing Studies at their Coding bootcamp. I hope to become a proficient full-stack developer so that I can join ana organization and start working alongside talented professionals.
            </div>
    </section>

    <section> 
        <div class="container">I used to previously work as an HR professional. I have worked in various industries across the world. I initially decided to learn basic HTML and CSS to understand coding. But I started to enjoy it! I decided to take on a few more courses and enjoyed those too! That's when I went all in and chose to do a full-stack course.
            </div>
    </section>

    <section>
    <div class="mainHeading">Skills</div>
    <div class="container">Please see my skills below:</div>

<table>

  <tbody>
    <tr>
      <td>HTML</td>
      <td>CSS</td>
      <td>Git</td>
    </tr>
    <tr>
      <td>JavaScript</td>
      <td>Server-Side API's</td>
      <td>Web API's</td>
    </tr>
    <tr>
      <td>NodeJS</td>
      <td>OOPs</td>
      <td>ExpressJS</td>
    </tr>
    <tr>
      <td>SQL</td>
      <td>ORM</td>
      <td>MVC</td>
    </tr>
    <tr>
      <td>NoSQL</td>
      <td>PWA's</td>
      <td>React</td>
    </tr>
  </tbody>
</table>
    </section>


    <section>
    <div class="mainHeading">Projects</div>
    <div class="container">Please see below some of the projects that I have been involved in. 
    <b>Please click the images for the deployed application</b></div>
    </section>

   

    <section id="boxes">
        <div class="boxContainer">
          <div class="box">
          <a href = "https://wickette.github.io/V_A_S_T/">
            <img src="images/project.png" width="200" height="200" /></a>
            <h3>Project 1</h3>
            <p>My first group project where we give users information regarding specific exercises based on their options and a meal generator based on user specified inputs.
            <br />
            <a href="https://github.com/Wickette/V_A_S_T">Github Repo</a></p>

          </div>
          <div class="box">
          <a href = "https://arshleenknagpal.github.io/password-generator/">
            <img src="images/password-generator.png" width="200" height="200" /></a>
            <h3>Password Generator</h3>
            <p>An application where a random password is generated based on user specified criteria.
            <br />
            <a href="https://github.com/ArshleenKNagpal/password-generator">Github Repo</a></p>

          </div>
          <div class="box">
          <a href = "https://spooky-sights.herokuapp.com/homepage">
            <img src="images/spooky-sites.png" width="200" height="200" /></a>
            <h3>Project 2</h3>
            <p>This is a web application where you can search the spooky sites in your local area
            <br />
            <a href="https://github.com/vcapella/Cobweb-coders">Github Repo</a></p>

          </div>
        </div>
      </section>

      <section id="boxes">
        <div class="boxContainer">
          <div class="box">
          <a href = "https://arshleenknagpal.github.io/code-refactor/">
            <img src="images/01-horiseon-code-refactor.png" width="200" height="200" /></a>
            <h3>Code Refactor</h3>
            <p>My first project. This was a code refactor to make the code more semantic and accessible
            <br />
            <a href="https://github.com/ArshleenKNagpal/code-refactor">Github Repo</a>
            </p>
          </div>

          <div class="box">
          <a href = "https://arshleenknagpal.github.io/code-quiz/">
            <img src="images/code-quiz.png" width="200" height="200" /></a>
            <h3>Code Quiz</h3>
            <p>A project where the user answers a set number of qusetions and if the answer is wrong, the timer is reduced. The game ends when the user haas completed the quiz or the timer reached 0.
            <br />
            <a href="https://github.com/ArshleenKNagpal/code-quiz">Github Repo</a>
            </p>
          </div>

          <div class="box">
          <a href = "https://akn-tech-blog.herokuapp.com/">
            <img src="images/tech-blog.png" width="200" height="200" /></a>
            <h3>Tech Blog</h3>
            <p>A general blog
            <br />
            <a href="https://github.com/ArshleenKNagpal/tech-blog">Github Repo</a>
            </p>
          </div>
        </div>
       
      </section>
      

<section id="contactMe">
      <div className="container">
      <section>
    <div class="mainHeading">Contact Me</div>
    <div class="container">Please feel free to contact me on: arshleenknagpal@gmail.com</div>
    <div class="container">You can also fill out the form and I can contact you</div>

    <aside id="sidebar">
          <div className="dark">
            <h3>Contact Me</h3>
            <form className="contactForm">
              <div>
                <label>First Name</label>
                <br />
                <input type="text" placeholder="first name" />
              </div>
              <div>
                <label>Last Number</label>
                <br />
                <input type="text" placeholder="last name" />
              </div>
              <div>
                <label>Email</label>
                <br />
                <input type="email" placeholder="Emial Address" />
              </div>
              <div>
                <label>Phone Number</label>
                <br />
                <input type="number" placeholder="Phone Number" />
              </div>
              <div>
                <label>Message</label>
                <br />
                <textarea placeholder="Message"></textarea>
              </div>
              <button className="button" type="submit">
                Send
              </button>
            </form>
          </div>
        </aside>


    <section>
          <h2>Social Media</h2>
          <blockquote class="blockquote text-center">

          <SocialMediaButtons
  links={
    [
      "https://www.facebook.com/arshleenkapur",
      "https://twitter.com/ArshleenKapur",
      "https://www.linkedin.com/in/arshleen-nagpal/",
      "https://github.com/ArshleenKNagpal"
    ]
  }
  buttonStyle={{
    width: '80px',
    height: '80px',
    border: '2px solid #000000',
    margin: '5px',
    backgroundColor: '#919191',
  }}
  iconStyle={{
    color: '#ffffff',
  }}
  
/>
<section>
    <div class="box">
    <h3>Resume</h3>
          <a href = "images/resume.png">
            <img src="images/resume.png" width="200" height="200" /></a>
            <p>Please download my resume here</p>
          </div>
</section>

          
          </blockquote>
        </section>


    </section>

        
      </div>
    </section>




    </div>
    );  
}

export default Home;
