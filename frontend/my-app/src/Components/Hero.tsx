import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

function Hero() {

    const products = [
        {
          title: "Alice Johnson",
          subtitle: "Software Engineer at TechCorp",
          quote: "This platform made me interview-ready in just weeks! The head-to-head battles kept me engaged and motivated.",
          link: "#",
        },
        {
          title: "Mark Thompson",
          subtitle: "Frontend Developer at Webify",
          quote: "I learned to think under pressure while solving complex problems. It's the perfect prep for tech interviews.",
          link: "#",
        },
        {
          title: "Sarah Lee",
          subtitle: "Full Stack Engineer at DevHub",
          quote: "I aced my FAANG interviews thanks to this platform. The competitive format improved my problem-solving speed.",
          link: "#",
        },
        {
          title: "James Parker",
          subtitle: "Backend Developer at CodeWorks",
          quote: "The coding duels simulated real interview pressure, which helped me perform better during actual interviews.",
          link: "#",
        },
        {
          title: "Emily Davis",
          subtitle: "Data Scientist at DataNexus",
          quote: "I loved the algorithm challenges! The real-time competition boosted my confidence for coding interviews.",
          link: "#",
        },
        {
          title: "Michael Brown",
          subtitle: "Machine Learning Engineer at NeuralNet",
          quote: "Practicing here helped me tackle even the toughest coding problems. It's a must-have tool for interview prep!",
          link: "#",
        },
        {
          title: "Jessica White",
          subtitle: "DevOps Engineer at CloudSync",
          quote: "The head-to-head coding battles kept me sharp and focused. I highly recommend this for anyone preparing for tech interviews.",
          link: "#",
        },
        {
          title: "Daniel Martinez",
          subtitle: "AI Engineer at DeepCode",
          quote: "I gained confidence and speed with this platform. It’s like LeetCode but more fun and competitive!",
          link: "#",
        },
        {
          title: "Sophia Anderson",
          subtitle: "Mobile Developer at AppNation",
          quote: "This platform helped me understand algorithms in depth while enjoying the process. Highly addictive!",
          link: "#",
        },
        {
          title: "Ryan Wilson",
          subtitle: "Software Architect at BuildSmart",
          quote: "The practice problems and competitive coding battles made interview prep fun and effective.",
          link: "#",
        },
      ];
      
      

  return (
    <HeroParallax products={products} />
  )
}

export default Hero