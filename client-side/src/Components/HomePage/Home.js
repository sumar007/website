import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import { Carousel } from "react-bootstrap";
import Player from "../Videos/pexels-tima-miroshnichenko-5377697 (2160p).mp4";
import { IoHome } from "react-icons/io5";
import { IoPower } from "react-icons/io5";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import image1 from "../Images/image (1).png";
import image2 from "../Images/image (2).png";
import image3 from "../Images/image (3).png";
import image from "../Images/image.png";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

export default function HomePage() {
  const [state, updateState] = useState("EnterpriseSystems");
  useEffect(() => {
    window.addEventListener("scroll", HomeHandleScroll);
    return () => {
      window.removeEventListener("scroll", HomeHandleScroll);
    };
  });

  const HomeHandleScroll = () => {
    var revals = document.querySelectorAll(".HomeContentContainer");
    for (var i = 0; i < revals.length; i++) {
      var windowheight = window.innerHeight;
      var revaltop = revals[i].getBoundingClientRect().top;
      var revalpoint = 150;
      if (revaltop < windowheight - revalpoint) {
        revals[i].classList.add("active");
      } else {
        revals[i].classList.remove("active");
      }
    }
  };


  const settings = {
    dots: false,
    prevArrow: <BsArrowLeft size="30" color="black" />, // Replace CustomPrevArrow and CustomNextArrow with your own arrow components
    nextArrow: <BsArrowRight size="30" color="black" />,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  const images = [image1, image2, image3, image];

  const HomeCards = [
    {
      projectId: 1,
      title: "Open Finance",
      imageUrl:
        "https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/ACP/Untitled%20design%20(20).jpg",
      description:
        "Advance your financial services with intelligent applications and technologies to transform your business models and deliver an unparalleled customer experience in the digital economy.",
    },
    {
      projectId: 2,
      title: "SAP Modernization",
      description:
        "Whether you need to migrate from SAP ECC to S/4 HANA or perform infrastructure modernization, we can help you develop a tailor-made strategy for all your needs.",
      imageUrl:
        "https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/jeshoots-com-sMKUYIasyDM-unsplash.jpg",
    },
    {
      projectId: 3,
      title: "SAP on GCP",
      description:
        "Leverage Google Cloud Technologies to improve processes and maximize efficiency in your business. Adopt secured cloud-native technologies and accelerate innovation in the right direction.",
      imageUrl:
        "	https://27058982.fs1.hubspotusercontent-eu1.net/hubfs/27058982/pexels-deepanker-verma-1482061.jpg",
    },
  ];

  const Details = [
    {
      projectId: 1,
      category: "EnterpriseSystems",
      imageURL:
        "https://abacuscambridge.com/hubfs/SAP-Circle-infographic-100-I-600x450px.jpg",
      title: "Enterprise Systems",
      description:
        "Proven capabilities across numerous platforms from SAP, the global leader in Enterprise Systems.",
    },
    {
      projectId: 2,
      category: "InnovationSolutions",
      imageURL: "https://abacuscambridge.com/hubfs/ACP/03-600x450-300res.jpg",
      title: "Innovation Solutions",
      description:
        "World-class track record with enterprise customers in Innovation Solutions built on API-first, cloud-first & data-first architecture.",
    },
    {
      projectId: 3,
      category: "ManagedServices",
      imageURL: "https://abacuscambridge.com/hubfs/ACP/600x450-300res.jpg",
      title: "Managed Services",
      description:
        "A repertoire of managed services designed to continually support management, extension and operations of enterprise systems and innovation solutions.",
    },
  ];
  const HomeImages = [
    {
      src: "https://27058982.fs1.hubspotusercontent-eu1.net/hub/27058982/hubfs/1-Transform-4.jpg?width=2100&name=1-Transform-4.jpg",
      alt: "Image 1",
      title: "EMBRACE THE AI TRANSFORMATION",
      description: "Unleashing New Business Horizons",
    },
    {
      src: "https://27058982.fs1.hubspotusercontent-eu1.net/hub/27058982/hubfs/Untitled%20design%20(5).png?width=2100&name=Untitled%20design%20(5).png",
      alt: "Image 2",
      title: "OPERATE",
      description: "Master Your Operations With Your Managed Services",
    },
    {
      src: "https://27058982.fs1.hubspotusercontent-eu1.net/hub/27058982/hubfs/Innovate.png?width=2100&name=Innovate.png",
      alt: "Image 3",
      title: "INNOVATE",
      description: "Harness Cutting-Edge Frameworks for Business Innovation",
    },
    {
      src: "https://27058982.fs1.hubspotusercontent-eu1.net/hub/27058982/hubfs/digital%20core.png?width=2100&name=digital%20core.png&quot",
      alt: "Image 4",
      title: "BUILD DIGITAL CORE",
      description: "Empower Your Enterprise with Unrivalled Systems",
    },
  ];

  const filtered = Details.filter((each) => each.category === state);
  console.log(filtered);

  return (
    <div className="HomePageTotalContainer">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12">
            <Carousel>
              {HomeImages.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    style={{ height: "500px", maxWidth: "100%" }}
                    className="d-block w-100"
                    src={image.src}
                    alt={image.alt}
                  />
                  <div className="homepage-carousel-caption-overlay">
                    <h3>{image.title}</h3>
                    <p>{image.description}</p>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="container mt-3 p-0">
        <div className="row">
          <div className="col-12 text-center">
            <h1>What We Do</h1>
          </div>
          <div className="col-12  w-100">
            <div className="container-fluid w-100  p-0">
              <div className="row">
                <div className="col-md-4 col-12 mb-2">
                  <button
                    className={
                      state === "EnterpriseSystems"
                        ? "HomeActive"
                        : "HomeInactive"
                    }
                    onClick={() => updateState("EnterpriseSystems")}
                  >
                    Enterprise System
                  </button>
                </div>
                <div className="col-md-4 col-12 mb-2">
                  <button
                    className={
                      state === "InnovationSolutions"
                        ? "HomeActive"
                        : "HomeInactive"
                    }
                    onClick={() => updateState("InnovationSolutions")}
                  >
                    Innovation Solutions
                  </button>
                </div>
                <div className="col-md-4 col-12 mb-2">
                  <button
                    className={
                      state === "ManagedServices"
                        ? "HomeActive"
                        : "HomeInactive"
                    }
                    onClick={() => updateState("ManagedServices")}
                  >
                    Managed Services
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 w-100">
            <div className="container-fluid w-100 p-0">
              <div className="row">
                <div className="col-12 col-md-6 d-flex flex-column justify-content-center text-center">
                  <h1 className="text-primary">{filtered[0].title}</h1>
                  <p>{filtered[0].description}</p>
                  <div>
                    <button className="btn btn-primary">Learn More</button>
                  </div>
                </div>
                <div className="col-12 col-md-6 text-center">
                  <img
                    src={filtered[0].imageURL}
                    alt="ReactImage"
                    className="mt-3"
                    height="300"
                    width="350"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 w-100 col-md-6"></div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-12 mt-5 w-100">
            <div className="HomePageVideoContainer">
              <video
                id="plmbackground-video"
                className="HomePagevideoElement"
                autoPlay
                loop
                muted
              >
                <source src={Player} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-0 mt-3">
        <div className="row">
          <div className="col-12 text-center mb-2">
            <h1>Strategic Partnerships</h1>
          </div>
          <div className="col-12">
            <p>
              Partnership and collaboration with global technology leaders are
              at the core of Abacus Cambridge Partners' philosophy. By bringing
              together specialists and leaders, our goal is to generate
              significant value from digital transformation projects our
              customers invest in. Our Partners are numerous, and we remain open
              to new ideas and opportunities for collaboration. As a couple of
              examples of highly successful Abacus partnerships, we have been
              partners with SAP and Google and have been continually
              acknowledged by both companies as leaders to achieve great results
              for our clients.
            </p>
          </div>
          <div
            className="col-12"
            style={{
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Slider {...settings} style={{ width: "95%" }}>
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`${index + 1}`}
                    height="150"
                    width="150"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row tex-center">
          <div className="col-12 mb-3 mt-3">
            <h1>Omnifinity at a Glance</h1>
          </div>
          <div className="col-12 col-md-6 text-center mb-2">
            <div className="HomeContentContainer d-flex text-center justify-content-center">
              <IoHome size="60" color="rgba(15, 68, 148, 1.0)" />
              <div>
                <h5>1987 Genesis</h5>
                <p style={{ width: "250px" }}>
                  Born from a rich track record of management consulting,
                  technology services and business outsourcing.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center mb-2">
            <div className="HomeContentContainer d-flex text-center  justify-content-center">
              <IoPower size="60" color="rgba(15, 68, 148, 1.0)" />
              <div>
                <h5>Resource Pool</h5>
                <p style={{ width: "250px" }}>
                  Multiple delivery centres and a talent pool of 3500 through
                  strategic partnerships.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center mb-2">
            <div className="HomeContentContainer d-flex text-center   justify-content-center">
              <AiOutlineGlobal size="60" color="rgba(15, 68, 148, 1.0)" />
              <div>
                <h5>Global Footprint</h5>
                <p style={{ width: "250px" }}>
                  Headquartered in London with offices in New York, Riyadh and
                  Dubai
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 text-center mb-2">
            <div className="HomeContentContainer d-flex text-center  justify-content-center">
              <BsFillPeopleFill size="60" color="rgba(15, 68, 148, 1.0)" />
              <div>
                <h5>Customer Base</h5>
                <p style={{ width: "250px" }}>
                  Actively serving 1000+ clients globally across 40 industries
                  and 18 countries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-3 mt-2">Featured Solutions</h1>
          </div>
          {HomeCards.map((each) => (
            <div className="col-12 col-md-4">
              <div className="HomecardsContainer  shadow HomeContentContainer mb-2 p-2">
                <img
                  src={each.imageUrl}
                  style={{ height: "200px", borderRadius: "8px", width: "90%" }}
                  alt={each.projectId}
                />
                <h3 className="mt-3 mb-2 text-center">{each.title}</h3>
                <p className="mt-3 mb-2 text-center">{each.description}</p>
                <div>
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      fontSize: "25px",
                      fontWeight: "450",
                    }}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}