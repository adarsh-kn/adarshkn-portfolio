import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        "interactivity": {
          "events": {
            "onHover": {
              "enable": true,
              "mode": "bubble"
            },
            "onClick": {
              "enable": true,
              "mode": "push"
            }
          },
          "modes": {
            "bubble": {
              "opacity": 0.8,
              "size": 6,
              "color": {
                "value": "#08ffd8"
              }
            }
          }
        },              
        "particles": {
          "color": {
            "value": "#08ffd8"
          },
          "links": {
            "color": {
              "value": "#08ffd8"
            },
            "enable": true,
            "opacity": 0.5
          },
          "move": {
            "enable": true
          },
          "opacity": {
            "value": 0.5
          },
          "size": {
            "value": 2
          },
          number: { density: { enable: true, value_area: 800 }, value: 60 },
        }
      }}
    />
  );
}

export default Particle;
