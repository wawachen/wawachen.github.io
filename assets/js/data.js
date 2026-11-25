/*
  Edit this file to update research, publications, experience, education, news and service.
  Image paths are relative to the repository root, e.g. assets/images/duowm-teaser.jpg
*/
window.ACADEMIC_DATA = {
  featured: [
    {
      title: "Meta-Load Fly: Adaptive Payload Transportation",
      description: "A meta-reinforcement learning method for UAV payload transportation under task variations. The system combines adaptive load trajectory tracking with a collision predictor that biases RRT path planning toward collision-free routes.",
      authors: "<strong>Jingyu Chen</strong>, Ruidong Ma, Meng Xu, Fethi Candan, Lyudmila Mihaylova, John Oyekan",
      venue: "Neurocomputing, 2025",
      image: "",
      links: [
        { label: "Paper", url: "https://www.sciencedirect.com/science/article/pii/S0925231225007040" },
        { label: "Code", url: "https://github.com/wawachen/Meta-load-fly" },
        { label: "Project", url: "https://sites.google.com/view/meta-payload-fly/" }
      ]
    },
    {
      title: "Multi-Agent Aerial Navigation to Grasping Points",
      description: "A deep multi-agent reinforcement learning framework for navigating UAVs to grasping points on a load. The code compares demonstration learning and behaviour cloning with MADDPG, MAPPO, and swarm optimisation in CoppeliaSim.",
      authors: "<strong>Jingyu Chen</strong>, Ruidong Ma, John Oyekan",
      venue: "Robotics and Autonomous Systems, 2023",
      image: "",
      links: [
        { label: "Paper", url: "https://www.sciencedirect.com/science/article/pii/S0921889023001288" },
        { label: "Code", url: "https://github.com/wawachen/MARL_transport" }
      ]
    }
  ],
  experience: [
    { date: "Sep 2024 – Present", role: "Researcher", organization: "Institute of Software, Chinese Academy of Sciences", detail: "Beijing, China.", logo: "assets/images/iscas.png", logoAlt: "Institute of Software, Chinese Academy of Sciences" },
    { date: "Mar 2024 – Aug 2024", role: "Internship", organization: "Kuaishou Technology", detail: "Beijing, China.", logo: "assets/images/kuaishou.png", logoAlt: "Kuaishou" }
  ],
  publications: [
    {
      year: "2026",
      title: "AirGym: A Full-Stack Platform for Aerial Robot Reinforcement Learning and Sim-to-Real Transfer",
      authors: "Kangyao Huang*, Hao Wang*, <strong>Jingyu Chen</strong>, Jintao Chen, Yu Luo, Di Guo, Xiangkui Zhang, Xiangyang Ji, Huaping Liu",
      venue: "IEEE Robotics and Automation Practice, 2026",
      image: "assets/images/pubs/air.png",
      award: "",
      links: [
        { label: "Paper", url: "https://doi.org/10.1109/RAP.2026.3742712" },
        { label: "Code", url: "https://github.com/emNavi/AirGym" },
        { label: "Project", url: "https://emnavi.tech/AirGym/" }
      ]
    },
    {
      year: "2026",
      title: "Reinforcement Learning-Constrained Segmented User Modeling with Large Language Models for Recommendation",
      authors: "Yu Xia, Qing Tan, He Chen, <strong>Jingyu Chen</strong>, Qian Dong",
      venue: "ACM Web Conference, 2026",
      image: "assets/images/pubs/llm.PNG",
      award: "",
      links: [
        { label: "Paper", url: "https://doi.org/10.1145/3774904.3792130" }
      ]
    },
    {
      year: "2026",
      title: "Adaptive Robust Estimator for Multi-Agent Reinforcement Learning",
      authors: "Zhongyi Li*, Wan Tian*, <strong>Jingyu Chen</strong>, Kangyao Huang, Huiming Zhang, Hui Yang, Tao Ren, Jinyang Jiang, Yijie Peng†, Yikun Ban†, Fuzhen Zhuang†",
      venue: "arXiv:2603.21574, 2026",
      image: "assets/images/pubs/are.png",
      award: "",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2603.21574" },
        { label: "Code", url: "https://github.com/bhai114/ARE" }
      ]
    },
    {
      year: "2026",
      title: "DrivingGym: Building Cross-Simulation Reinforcement Learning Agent for Autonomous Driving",
      authors: "Zili Nie, Junze Li, <strong>Jingyu Chen</strong>, Qian Dong†, Yunzhi Xue",
      venue: "Acta Scientiarum Naturalium Universitatis Pekinensis, 2026",
      image: "assets/images/pubs/driving.png",
      award: "",
      links: [
        { label: "Paper", url: "https://doi.org/10.13209/j.0479-8023.2025.094" }
      ]
    },
    {
      year: "2025",
      title: "A General Infrastructure and Workflow for Quadrotor Deep Reinforcement Learning and Reality Deployment",
      authors: "Kangyao Huang, Hao Wang, <strong>Jingyu Chen</strong>, Jintao Chen, Yu Luo, Di Guo, Xiangkui Zhang, Xiangyang Ji, Huaping Liu",
      venue: "arXiv:2504.15129, 2025",
      image: "assets/images/pubs/air.png",
      award: "",
      links: [
        { label: "Paper", url: "https://arxiv.org/abs/2504.15129" },
        { label: "Code", url: "https://github.com/emNavi/AirGym" },
        { label: "Project", url: "https://emnavi.tech/AirGym/" }
      ]
    },
    {
      year: "2025",
      title: "A Meta-Reinforcement Learning Method for Adaptive Payload Transportation with Variations",
      authors: "<strong>Jingyu Chen</strong>, Ruidong Ma, Meng Xu, Fethi Candan, Lyudmila Mihaylova, John Oyekan",
      venue: "Neurocomputing, 2025",
      image: "assets/images/pubs/meta.png",
      award: "",
      links: [
        { label: "Paper", url: "https://doi.org/10.1016/j.neucom.2025.130032" },
        { label: "Code", url: "https://github.com/wawachen/Meta-load-fly" },
        { label: "Project", url: "https://sites.google.com/view/meta-payload-fly/" }
      ]
    },
    {
      year: "2025",
      title: "CAAD: A High-Level Customizable-Agent Gym for Dependable Autonomous Driving",
      authors: "Junze Li, Zili Nie, <strong>Jingyu Chen</strong>, Qian Dong, Yunzhi Xue",
      venue: "International Symposium on System Security, Safety, and Reliability, 2025",
      image: "assets/images/pubs/cmad.png",
      award: "",
      links: [
        { label: "Paper", url: "https://doi.org/10.1109/ISSSR65654.2025.00018" },
        { label: "Code", url: "https://github.com/TrustAISys/cmad-gym" }
      ]
    },
    {
      year: "2025",
      title: "A Pretrained Centralised Model-Based Reinforcement Learning Method for Heterogeneous Collaborative Grasping",
      authors: "Yifan Liu, Yuting Wang, Kangyao Huang, Qian Dong, <strong>Jingyu Chen</strong>†",
      venue: "Chinese Conference on Swarm Intelligence and Cooperative Control, 2025",
      image: "assets/images/pubs/pretrained.PNG",
      award: "",
      links: [
        { label: "Paper", url: "https://doi.org/10.1007/978-981-95-8329-4_27" },
        { label: "Code", url: "https://github.com/wawachen/pcMBRL" }
      ]
    },
    {
      year: "2024",
      title: "Reinforcement Learning and Swarm Intelligence for Cooperative Aerial Navigation and Payload Transportation",
      authors: "<strong>Jingyu Chen</strong>",
      venue: "Ph.D. Thesis, University of Sheffield, 2024",
      image: "assets/images/pubs/thesis.png",
      award: "",
      links: [
        { label: "Thesis", url: "https://etheses.whiterose.ac.uk/id/eprint/34421/" }
      ]
    },
    {
      year: "2023",
      title: "A Deep Multi-Agent Reinforcement Learning Framework for Autonomous Aerial Navigation to Grasping Points on Loads",
      authors: "<strong>Jingyu Chen</strong>†, Ruidong Ma, John Oyekan",
      venue: "Robotics and Autonomous Systems, 2023",
      image: "assets/images/pubs/marl.png",
      award: "",
      links: [
        { label: "Paper", url: "https://doi.org/10.1016/j.robot.2023.104489" },
        { label: "Code", url: "https://github.com/wawachen/MARL_transport" }
      ]
    },
    {
      year: "2023",
      title: "A Learning from Demonstration Framework for Adaptive Task and Motion Planning in Varying Package-to-Order Scenarios",
      authors: "Ruidong Ma, <strong>Jingyu Chen</strong>, John Oyekan",
      venue: "Robotics and Computer-Integrated Manufacturing, 2023",
      image: "assets/images/pubs/rcim.png",
      award: "",
      links: [
        { label: "Paper", url: "https://doi.org/10.1016/j.rcim.2023.102539" }
      ]
    },
    {
      year: "2023",
      title: "Behavioural Swarm Optimisation for Stable Slung-Load Aerial Transportation",
      authors: "<strong>Jingyu Chen</strong>, John Oyekan",
      venue: "IEEE Congress on Evolutionary Computation, 2023",
      image: "assets/images/pubs/cec2.png",
      award: "",
      links: [
        { label: "Paper", url: "https://doi.org/10.1109/CEC53210.2023.10254023" },
        { label: "Code", url: "https://github.com/wawachen/Swarm_optimisation_transport" }
      ]
    },
    {
      year: "2023",
      title: "Graph-based Semantic Planning for Adaptive Human-Robot-Collaboration in Assemble-to-Order Scenarios",
      authors: "Ruidong Ma, <strong>Jingyu Chen</strong>, John Oyekan",
      venue: "IEEE International Conference on Robot and Human Interactive Communication, 2023",
      image: "",
      award: "",
      links: [
        { label: "Paper", url: "https://doi.org/10.1109/RO-MAN57019.2023.10309425" }
      ]
    },
    {
      year: "2021",
      title: "Decentralised Aerial Swarm for Adaptive and Energy Efficient Transport of Unknown Loads",
      authors: "Kangyao Huang, <strong>Jingyu Chen</strong>, John Oyekan",
      venue: "Swarm and Evolutionary Computation, 2021",
      image: "assets/images/pubs/swarm.png",
      award: "",
      links: [
        { label: "Paper", url: "https://doi.org/10.1016/j.swevo.2021.100957" },
        { label: "Code", url: "https://github.com/KJaebye/Drone-Swarm-Cooperative-Transport" }
      ]
    },
    {
      year: "2021",
      title: "Bio-inspired Multi-agent Model and Optimization Strategy for Collaborative Aerial Transport",
      authors: "Kangyao Huang, <strong>Jingyu Chen</strong>, John Oyekan, Xinyu Zhang",
      venue: "Chinese Intelligent Automation Conference, 2021",
      image: "assets/images/pubs/bio.png",
      award: "",
      links: [
        { label: "Paper", url: "https://doi.org/10.1007/978-981-16-6372-7_64" }
      ]
    },
    {
      year: "2020",
      title: "A Review of Manufacturing Systems for Introducing Collaborative Robots",
      authors: "Ruidong Ma, <strong>Jingyu Chen</strong>, John Oyekan",
      venue: "UK-RAS Conference, 2020",
      image: "",
      award: "",
      links: [
        { label: "Paper", url: "https://doi.org/10.31256/zb5dy3b" }
      ]
    }
  ],
  work: [
    { title: "Meta-load-fly", description: "Meta-reinforcement learning for adaptive UAV payload transportation, with load tracking and a collision predictor for path planning.", image: "", links: [{ label: "Code", url: "https://github.com/wawachen/Meta-load-fly" }, { label: "Project", url: "https://sites.google.com/view/meta-payload-fly/" }] },
    { title: "MARL_transport", description: "Official code for multi-agent reinforcement learning that navigates aerial robots from flight to grasping points on a load.", image: "", links: [{ label: "Code", url: "https://github.com/wawachen/MARL_transport" }] },
    { title: "pcMBRL", description: "Model-based reinforcement learning examples for multi-drone and multi-TurtleBot transport, including offline training and MPC evaluation.", image: "", links: [{ label: "Code", url: "https://github.com/wawachen/pcMBRL" }] },
    { title: "chat-Gazebo", description: "UAV visual navigation in Gazebo using Qwen2-VL-7B-Instruct for scene understanding and ROS flight control.", image: "", links: [{ label: "Code", url: "https://github.com/wawachen/chat-Gazebo" }] }
  ],
  news: [
    { date: "Nov 25, 2026", html: "📄 Submitted <em>DuoWM: Integrating Dual 6-DoF Visual Flows into Action-Conditioned Drone World Model</em> to arXiv." },
    { date: "Oct 15, 2026", html: "🎉 <em>AirGym: A Full-Stack Platform for Aerial Robot Reinforcement Learning and Sim-to-Real Transfer</em>, in collaboration with Tsinghua University, was accepted to <em>IEEE Robotics and Automation Practice</em>." },
    { date: "Sep 2026", html: "🎉 <em>Adaptive Robust Estimator for Policy Optimization in Reinforcement Learning</em>, in collaboration with the School of Artificial Intelligence at Beihang University and Peking University, was accepted as a poster at the Conference on Neural Information Processing Systems (NeurIPS 2026)." },
    { date: "Aug 2026", html: "👋 Zixuan Li from the University of International Business and Economics joined the world model project." },
    { date: "Apr 25, 2026", html: "👋 Xingjing Jiang from Beihang University joined the world model project." },
    { date: "Jan 2026", html: "🚀 The edge scene orchestration project was approved and kicked off (Jan 2026 – Dec 2027)." },
    { date: "Dec 2025", html: "🚀 The scene generation project was approved and kicked off (Dec 2025 – May 2027)." },
    { date: "Dec 2025", html: "🎤 Attended the First Conference on Embodied Intelligence Systems and Applications, and joined the Embodied Intelligence Technical Committee of the Chinese Institute of Command and Control." },
    { date: "Nov 2025", html: "🎤 Attended the Chinese Conference on Swarm Intelligence and Cooperative Control and gave a talk." },
    { date: "Sep 2025", html: "🏆 <em>A Pretrained Centralised Model-Based Reinforcement Learning Method for Heterogeneous Collaborative Grasping</em> was accepted to the Chinese Conference on Swarm Intelligence and Cooperative Control and nominated for the Best Paper Award." },
    { date: "May 2025", html: "🎉 <em>A Meta-Reinforcement Learning Method for Adaptive Payload Transportation with Variations</em> was accepted to <em>Neurocomputing</em>." },
    { date: "Sep 2024", html: "🏛️ Joined the Institute of Software, Chinese Academy of Sciences." },
    { date: "Mar 2024", html: "💼 Joined the Commercialization Algorithm Department at Kuaishou." }
  ],
  education: [
    {
      title: "Ph.D. in Robotics",
      logo: "assets/images/sheffield.svg",
      logoAlt: "University of Sheffield coat of arms",
      lines: [
        "University of Sheffield, United Kingdom",
        "2019 – 2023 · First-Class Honours",
        "Supervisors: Dr. John Oyekan and Prof. Lyudmila Mihaylova"
      ]
    },
    {
      title: "M.Sc. in Robotics",
      logo: "assets/images/sheffield.svg",
      logoAlt: "University of Sheffield coat of arms",
      lines: [
        "University of Sheffield, United Kingdom",
        "2018 – 2019 · First-Class Honours",
        "Supervisor: Professor Roderich Gross"
      ]
    },
    {
      title: "M.Eng. in Electrical and Electronic Engineering",
      logo: "assets/images/leicester.svg",
      logoAlt: "University of Leicester coat of arms",
      lines: [
        "University of Leicester, United Kingdom",
        "2016 – 2018 · First-Class Honours",
        "Supervisor: Professor Alistair McEwan"
      ]
    }
  ],
  projects: [
    {
      date: "Jun 2019",
      title: "Self-Calibrating a Laser Range Sensor with a Generative Adversarial Network",
      meta: "Master's project",
      detail: "Explored the laser range sensor on the e-puck2 robot. A generative adversarial network (GAN) was used to infer the sensor configuration and imitate readings from the real sensor.",
      image: "assets/images/pubs/knowledge-transfer.jpg",
      imageAlt: "Illustration of knowledge transfer for the laser range sensor project"
    },
    {
      date: "Dec 2017 – Jun 2018",
      title: "μCavLab",
      meta: "Master's project · Catapult, United Kingdom",
      detail: "Contributed to the development and design of a miniature drive-by-wire vehicle, and carried out hardware and software testing on ROS. The project gave a practical understanding of vehicle mechanisms, ROS, and project management.",
      image: "assets/images/pubs/ucav.JPG",
      imageAlt: "Miniature drive-by-wire vehicle built for the μCavLab project"
    }
  ],
  service: [],
  lastUpdated: "November 2026"
};
