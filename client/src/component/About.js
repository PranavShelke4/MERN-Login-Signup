/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "./Navbar";

function About() {
  return (
    <>
    <Navbar />
      <div className="container mt-4">
        <div className="jumbotron">
          <h1 className="display-4">Pranav Shelke</h1>

          <h3>Web Developer</h3>
          <p>Work links</p>
          <p className="lead">
            <a href="#">Github</a>
            <br />
            <a href="#">Instagram</a>
            <br />
            <a href="#">FaceBook</a>
          </p>
          <hr className="my-4" />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>

          <p>User ID : 123456789</p>
          <p>Name : Pranav Shelke</p>
          <p>email : pranavshelke4@gmail.com</p>
          <p>phone : 1234567889</p>
          <p>Profession : Web developer</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">
              Learn more
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
