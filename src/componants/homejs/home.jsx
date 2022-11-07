import Header from "./header";
import "./home.css";
import prideimg from "../../componants/imags/1.png";
import ingredientsimg from "../../componants/imags/2.png";
import sliderimg1 from "../../componants/imags/p1.jpg";
import sliderimg2 from "../../componants/imags/p2.jpg";
import { Carousel } from "react-bootstrap";
import Data from "../../data";
import { useState } from "react";

const Home = () => {
  const [popup,setpopup]=useState(false);
  const handelclieck = ()=>{
    setpopup(!popup)
  }
  const closepopup = ()=>{
    setpopup(!popup)
  }
  const blogItems = Data.map((item) => {
    return (
      <div key={item.id} className="col-lg-4 col-md-4">
        <div className="box">
          <img src={item.img} alt="bolg1" />
          <h5>{item.title}</h5>
          <span>{item.time}</span>
          <h6>{item.price}</h6>
        </div>
        <button onClick={handelclieck} href="#">order now</button>
      </div>
    );
  });
  return (
    <>
      {popup?
      <section className="popupwindow">
            <div className="dark"></div>
        <div className="popup">
          <span onClick={closepopup}>x</span>
          <h2>Make Your Order Now!</h2>
          <form action="">
            <input type="text" placeholder="Your Name" required/>
            <input type="email" placeholder="Your Email"/>
            <input type="text" placeholder="Adders"/>
            <input type="number" placeholder="Zip Code"/>
            <input type="number" placeholder="Mobile No"/>
            <select name="sel" id="sel">
              <option value="sel"> Rainbow Vegetable Sandwich - $10.50 </option>
              <option value="sel"> Rainbow Vegetable Sandwich - $20.00 </option>
              <option value="sel"> Rainbow Vegetable Sandwich - $30.30 </option>
            </select>
            <button type="submit" className="send">Send Message</button>
          </form>
        </div>
      </section>:""}
      <Header />
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1287+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-md-3">
              <h2>5786+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-md-3">
              <h2>1440+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className="col-md-3">
              <h2>7110+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>
      {/*end numbers*/}
      <section className="pride ">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={prideimg} title="prideimg" />
            </div>
            <div className="col-md-6">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button>
                <a href="#">learn more</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/*end pride*/}
      <section className="ingredients">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                We make everything by hand with the best possible ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
              <ul>
                <li>Etiam sed dolor ac diam volutpat.</li>
                <li>Erat volutpat aliquet imperdiet.</li>
                <li>purus a odio finibus bibendum.</li>
              </ul>
              <button>
                <a href="#">learn more</a>
              </button>
            </div>
            <div className="col-md-6">
              <img src={ingredientsimg} title="ingredients" />
            </div>
          </div>
        </div>
      </section>
      {/*end ingredients*/}
      <section className="parallax">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h2>
                When a man's stomach is full it makes no <br /> difference
                whether he is rich or poor.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio <br /> finibus bibendum in sit amet leo. Mauris
                feugiat erat tellus.
              </p>
              <a href="#">watch our story</a>
            </div>
          </div>
        </div>
      </section>
      {/*end parallax*/}
      <section className="blog">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h2>Explore Our Foods</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus. Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove.
              </p>
            </div>
            <div className="row">{blogItems}</div>
          </div>
        </div>
      </section>
      {/*end blog*/}
      <section className="slider">
        <div className="container">
          <div className="row slider-text">
            <div className="col-lg-12 col-md-12">
              <h2>Testimonials</h2>
            </div>
          </div>
          <div className="row slider-pagination">
            <div className="col-lg-12 col-md-12">
              <Carousel>
                <Carousel.Item>
                  <img src={sliderimg2} />
                  <Carousel.Caption>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                    <span>Lorem ipsum, dolor sit amet </span>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={sliderimg1} />

                  <Carousel.Caption>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <span>Lorem ipsum, dolor sit amet </span>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={sliderimg2} />

                  <Carousel.Caption className="caption">
                    <div className="text-cap">
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                      <span>Lorem ipsum, dolor sit amet </span>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      {/*end slider*/}
      <section className="Frequently">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading">
              <h2>Frequently Asked Questions</h2>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-left">
              <div className="text-l-1">
                <h2>~ Is Foodera Bread really baked fresh each day?</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
              <div className="text-l-2">
                <h2>~ Is Foodera Bread really baked fresh each day?</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6  col-sm-12  text2-right">
              <div className="text-r-1">
                <h2>~ Is Foodera Bread really baked fresh each day?</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
              <div className="text-r-2">
                <h2>~ Is Foodera Bread really baked fresh each day?</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*end Frequently*/}
      <section className="Baked">
        <div className="overlay"></div>
        <div className="text">
          <h2>Baked fresh daily by bakers with passion.</h2>
          <button>learn more</button>
        </div>
      </section>
      {/*end baked*/}
      <section className="subscribe">
        <div className="text">
          <h2>
            Hurry up! Subscribe our newsletter <br /> and get 25% Off
          </h2>
          <p>Limited time offer for this month. No credit card required.</p>
        </div>
        <div className="form">
          <form action="">
            <input type="email" placeholder="Email Address Here" />
            <button>subscribe</button>
          </form>
        </div>
      </section>
      {/*end subscribe*/}
      <section className="footer">
        <div className="container">
          <div className="row">
            <div className="links col-lg-12">
              <a href="#">register</a>
              <a href="#">forum</a>
              <a href="#">affiliate</a>
              <a href="#">Faq</a>
            </div>
            <div className="icons col-lg-12">
              <span className="face">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </span>
              <span className="twitter">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </span>
              <span className="youtube">
                <i className="fa fa-youtube" aria-hidden="true"></i>
              </span>
              <span className="insta">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </span>
              <span className="linkedin">
                <i className="fa fa-linkedin" aria-hidden="true"></i>
              </span>
            </div>
            <div className=" text copyRight col-lg-12"><p>&copy;2021. Foodera. All rights reserved. <br />Desgined By Abdel Hamid Moussa</p></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
