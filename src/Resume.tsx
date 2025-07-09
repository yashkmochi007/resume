import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  Divider,
  ListItemText,
  List,
  ListItem,
} from "@mui/material";

import { FaTrophy, FaStar, FaMedal, FaAward } from "react-icons/fa";
import { AiOutlineApi, AiFillBank, AiOutlineCloud } from "react-icons/ai";
import { IoMdGlobe } from "react-icons/io";
import "./Resume.scss";
import AcademicBackground from "./AcademicBackground";
import ProfileHeader from "./ProfileHeader";
import MyExpertise from "./MyExpertise";
import TechnicalSkills from "./TechnicalSkills";

const skillData = [
  { name: "Python", value: 9 },
  { name: "React", value: 8 },
  { name: ".Net / C#", value: 7 },
  { name: "Node JS", value: 6 },
  { name: "Angular", value: 5 },
  { name: "HTML / CSS / JS / TS", value: 6 },
  { name: "SQL / NoSQL", value: 7 },
  {
    name: "Open source tools",
    value: 8,
  },
  { name: "Azure Cloud Services", value: 9 },
];

const getKemsysExperienceSubtitle = () => {
  const currentDate = new Date();
  const startDate = new Date("2020-11-01");
  const monthsWorked = Math.floor(
    (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30)
  );
  const yearsWorked = Math.floor(monthsWorked / 12);
  const remainingMonths = monthsWorked % 12;
  return `Full Time - Nov 2020 to Present - ${yearsWorked} yrs ${remainingMonths} mo`;
};

const getTotalExperience = () => {
  const currentDate = new Date();
  const startDate = new Date("2017-01-01");
  const monthsWorked = Math.floor(
    (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30)
  );
  let yearsWorked = Math.floor(monthsWorked / 12);
  const remainingMonths = monthsWorked % 12;
  if (remainingMonths >= 6) {
    yearsWorked += 0.5;
  }
  return `${yearsWorked}+ years`;
};

const experienceData = [
  {
    title: "Nov 2020",
    cardTitle: "Kemsys Technologies",
    cardSubtitle: getKemsysExperienceSubtitle(),
    items: [
      {
        cardTitle: "Technical Lead",
        cardSubtitle: "Mar 2023 to Present",
      },
      {
        cardTitle: "Senior Software Developer - On Site",
        cardSubtitle: "Oct 2022 to Feb 2023 @Dubai for Smart City Project",
      },
      {
        cardTitle: "Senior Software Developer",
        cardSubtitle: "Nov 2020 to Sep 2022",
      },
    ],
  },
  {
    title: "Jan 2017",
    cardTitle: "Einfochips An Arrow Company",
    cardSubtitle: "Full Time - Jan 2017 to Oct 2020 - 3 yrs 10 mo",
    items: [
      {
        cardTitle: "Sr. Software Developer",
        cardSubtitle: "Jul 2020 to Oct 2020",
      },
      {
        cardTitle: "Software Developer",
        cardSubtitle: "Jul 2017 to Jun 2020",
      },
      {
        cardTitle: "Jr. Software Developer",
        cardSubtitle: "Jan 2017 to Jun 2017",
      },
    ],
  },
];

const achievementsData = [
  {
    title: "Spotlight Award",
    date: "Jan 2025",
    description:
      "For quickly understanding and building on customer's existing product, learning and introducing new technologies to solve their problem - delivering solution on very tight deadlines.",
    icon: <FaTrophy />,
  },
  {
    title: "Execution Excellence",
    date: "May 2024",
    description:
      "For outstanding leadership and dedication in guiding junior team members to accomplish significant tasks",
    icon: <FaTrophy />,
  },
  {
    title: "Spotlight Award",
    date: "Dec 2021",
    description:
      "For unfettered support and diligence – above and beyond call of duties – for critical business proposals/execution",
    icon: <FaStar />,
  },
  {
    title: "Core Value Award",
    date: "Mar 2021",
    description:
      "For relentless efforts in rolling out production grade platform for pilot customers, help winning new business",
    icon: <FaMedal />,
  },
  {
    title: "Core Value Award",
    date: "Jul 2020",
    description: "For self improvement through continuous learning",
    icon: <FaMedal />,
  },
  {
    title: "Core Value Award",
    date: "May 2019",
    description: "For disciplined execution of project",
    icon: <FaMedal />,
  },
  {
    title: "Pat on the Back Award",
    date: "Feb 2018",
    description: "For my hard work",
    icon: <FaAward />,
  },
];

const keyProjectsData = [
  {
    title: "Microsoft Azure based AIOT Platform",
    icon: <AiOutlineApi />,
    description: (
      <>
        <p>
          Led a team in developing a comprehensive AI Enabled Remote Device
          Management Platform with multi-tenancy support, leveraging Azure
          services, .NET, Node.js, and React. This platform is designed for{" "}
          <strong>smart city and manufacturing industry </strong>clients and
          includes the following features:
        </p>
        <ul className="features-list">
          <li>
            <strong>Remote Monitoring and Control:</strong> Provides real-time
            monitoring and control of devices.
          </li>
          <li>
            <strong>Device Management:</strong> Simplifies device lifecycle
            management.
          </li>
          <li>
            <strong>Reporting and Visualization:</strong> Generates detailed
            reports and visualization charts.
          </li>
          <li>
            <strong>Dynamic Dashboard:</strong> Offers a customizable dashboard
            with multiple language support.
          </li>
          <li>
            <strong>Zero Touch Device Provisioning:</strong> Utilizes Azure DPS
            server and custom PKI server for secure, certificate-based
            provisioning.
          </li>
          <li>
            Implemented role-based access control and tenant-wise data isolation
            to ensure secure and compliant multi-tenant operations.
          </li>
          <li>
            Enabled predictive maintenance and anomaly detection by integrating
            ML models deployed via Azure Databricks and Azure ML.
          </li>
        </ul>
        <p>
          <b>Azure Services used:</b>
          <table border={1} width={"100%"} style={{ textAlign: "center" }}>
            <tr>
              <td>IoT Hub</td>
              <td>Azure Functions</td>
              <td>Blob Storage</td>
            </tr>
            <tr>
              <td>Cosmos DB</td>
              <td>Event Hubs</td>
              <td>Key Vault</td>
            </tr>
            <tr>
              <td>App Service</td>
              <td>Monitor</td>
              <td>Logic Apps</td>
            </tr>
            <tr>
              <td>DevOps</td>
              <td>Service Bus</td>
              <td>Event Grid</td>
            </tr>
            <tr>
              <td>API Management</td>
              <td>Application Insights</td>
              <td>Container Registry</td>
            </tr>
            <tr>
              <td>Virtual Network</td>
              <td>Databricks</td>
              <td>Entra</td>
            </tr>
            <tr>
              <td>Firewall</td>
              <td>Security Center</td>
              <td>Sentinel</td>
            </tr>
            <tr>
              <td>Policy</td>
              <td>Resource Manager</td>
              <td>Virtual Machines</td>
            </tr>
            <tr>
              <td>PostgreSQL</td>
              <td>Redis Cache</td>
              <td>Stream Analytics</td>
            </tr>
            <tr>
              <td>Data Lake</td>
              <td>VPN Gateway</td>
              <td>ExpressRoute</td>
            </tr>
            <tr>
              <td>Traffic Manager</td>
              <td>Application Gateway</td>
              <td>And many more...</td>
            </tr>
          </table>
        </p>
        <p>
          This project showcases my ability to lead and deliver robust AIoT
          solutions, demonstrating expertise in cloud technologies, full-stack
          development, and IoT security.
        </p>
      </>
    ),
  },
  {
    title: "Azure + ML Based ETL Pipeline",
    icon: <AiOutlineCloud />,
    description: (
      <>
        <p>
          At Kemsys, I had the opportunity to work on an client project for
          processing and analyzing large datasets using Azure services and
          machine learning. The project involved building an ETL pipeline that
          ingests data from various sources, processes it, and applies machine
          learning models to derive insights. The key components of the project
          included: Azure Durable Functions, Databricks, Container app etcc..
        </p>
        <p>
          <strong>Key Contributions:</strong>
        </p>
        <ul>
          <li>
            <strong>ETL Pipeline Development:</strong> Developed a python based
            ETL pipeline using Azure Durable Functions to automate data
            transformation for machine learning.
          </li>
          <li>
            <strong>Terraform Script Development:</strong> Infra automation
            script with modular approach to deploy the ETL pipeline and related
            resources on Azure cloud.
          </li>
          <li>
            Optimized data processing workflows in Azure Databricks to handle
            millions of records efficiently for downstream ML tasks.
          </li>
          <li>
            Collaborated with cross-functional teams to ensure secure, scalable,
            and maintainable deployment across multiple environments.
          </li>
        </ul>
        <p>
          This project enhanced my skills in IoT platform development, cloud
          services integration, and full-stack development.
        </p>
      </>
    ),
  },
];

const keyProjectsData2 = [
  {
    title: "Azure and Amazon dependent IOT Framework",
    icon: <AiOutlineCloud />,
    description: (
      <>
        <p>
          At eInfochips, I had the opportunity to work on an internal project
          focused on building an IoT platform framework from scratch, developing
          three variants: using <strong>Azure</strong> services,{" "}
          <strong>AWS</strong> services, and <strong>custom on-premise</strong>{" "}
          services. The framework was designed to capture data from various
          IoT-enabled sources, process it, and derive useful outputs for
          dashboard visualization and client reports.
        </p>
        <p>
          <strong>Key Contributions:</strong>
        </p>
        <ul>
          <li>
            <strong>Mobile Application Development:</strong> Developed a mobile
            app to capture device data via Bluetooth and sync it with the IoT
            framework.
          </li>
          <li>
            <strong>Device Data Simulation:</strong> Node.js-based project for
            device data simulation.
          </li>
          <li>
            <strong>Backend Development:</strong> Worked on a .NET-based backend
            to capture and process data, utilizing Microsoft Azure Functions or
            on-premise VM-based .NET applications, as well as Python-based AWS
            Lambda functions.
          </li>
          <li>
            Designed a modular architecture to support plug-and-play integration
            with multiple cloud and edge environments.
          </li>
          <li>
            Implemented secure data transmission using MQTT and REST protocols
            with proper encryption and authentication mechanisms.
          </li>
          <li>
            Conducted benchmarking and performance testing across all three
            variants to ensure scalability and reliability under varying loads.
          </li>
        </ul>
        <p>
          This project enhanced my skills in IoT platform development, cloud
          services integration, and full-stack development.
        </p>
      </>
    ),
  },
  {
    title: "Online Payment Management System",
    icon: <AiFillBank />,
    description: (
      <>
        <p>
          At eInfochips, I had the opportunity to collaborate with a leading
          US-based payment firm. Key contributions include:
        </p>
        <ul>
          <li>
            Developed multiple UI applications using React and TypeScript.
          </li>
          <li>Created interfaces for managing bank account maintenance.</li>
          <li>Implemented features for handling transaction charges.</li>
          <li>Designed and maintained a partner directory.</li>
          <li>
            Integrated RESTful APIs to ensure seamless data flow between
            frontend and backend services.
          </li>
          <li>
            Participated in code reviews and optimization efforts to enhance
            application performance and maintainability.
          </li>
          <li>
            Worked closely with a team to ensure timely and efficient project
            delivery.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Multi tenancy app for Marine business",
    icon: <IoMdGlobe />,
    description: (
      <>
        <p>
          At eInfochips, I had the opportunity to work on a project for a
          prominent marine-based multinational client. My key contributions
          included:
        </p>
        <ul>
          <li>
            Collaborated with a team to deliver customized solutions using
            NodeJS, Angular, React, and React Native.
          </li>
          <li>
            Developed a React Native-based mobile app to meet specific client
            needs.
          </li>
          <li>
            Created detailed business reports for administrators using Angular.
          </li>
          <li>
            Enhanced marine business management capabilities through a
            multi-tenancy app tailored for the client's requirements.
          </li>
          <li>
            Implemented role-based access control for secure and personalized
            user experiences.
          </li>
          <li>
            Optimized API integrations and data handling to improve app
            responsiveness and reliability in low-connectivity environments.
          </li>
        </ul>
      </>
    ),
  },
];

const Resume: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <ProfileHeader />
      <Divider />
      <Grid container spacing={4} mt={1}>
        <Grid item xs={12} md={6}>
          <MyExpertise totalExp={getTotalExperience()} />
        </Grid>
        <Grid item xs={12} md={6}>
          <CardWidget title="Technical Skills">
            <TechnicalSkills skills={skillData} />
          </CardWidget>
        </Grid>
        <Grid item xs={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Experience ({getTotalExperience()})
              </Typography>
              <Box display="flex" flexDirection="row">
                {experienceData.map((experience, index) => (
                  <Box key={index} flex={1} mr={2}>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {experience.title} - {experience.cardTitle}
                    </Typography>
                    {experience.cardSubtitle && (
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        gutterBottom
                      >
                        {experience.cardSubtitle}
                      </Typography>
                    )}
                    <List dense>
                      {experience.items.map((item, itemIndex) => (
                        <ListItem key={itemIndex} disableGutters>
                          <ListItemText
                            primary={item.cardTitle}
                            secondary={item.cardSubtitle}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <CardWidget title="Academic Background">
            <AcademicBackground />
          </CardWidget>
        </Grid>
        <Grid item xs={12}>
          <CardWidget title="Key Projects">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={2}>
                  {keyProjectsData.map((project, index) => (
                    <Grid item xs={12} key={index}>
                      <ProjectCard
                        title={project.title}
                        icon={project.icon}
                        description={project.description}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={2}>
                  {keyProjectsData2.map((project, index) => (
                    <Grid item xs={12} key={index}>
                      <ProjectCard
                        title={project.title}
                        icon={project.icon}
                        description={project.description}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </CardWidget>
        </Grid>

        <Grid item xs={12} mb={4}>
          <CardWidget title="Achievements">
            {achievementsData.map((achievement, index) => (
              <Box key={index} display="flex" alignItems="center" mb={2}>
                <Box mr={2} fontSize="large" color="primary.main">
                  {achievement.icon}
                </Box>
                <Box>
                  <Typography variant="h6">{achievement.title}</Typography>
                  <Typography variant="subtitle2">
                    <b>{achievement.date}</b> - {achievement.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </CardWidget>
        </Grid>

        {/* <Grid item xs={12}>
          <Typography variant="body1">
            I am sincere in all ways and have a good coordination skill to work
            in a team. I hereby declare that the above mentioned information is
            correct up to my knowledge and I bear the responsibility for the
            correction of the above particulars.
          </Typography>
        </Grid> */}
      </Grid>
    </Container>
  );
};

interface CardWidgetProps {
  title: string;
  children: React.ReactNode;
}

export const CardWidget: React.FC<CardWidgetProps> = ({ title, children }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

interface ProjectCardProps {
  title: string;
  icon: React.ReactNode;
  description: React.ReactElement | string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  icon,
  description,
}) => (
  <Card>
    <CardContent>
      <Box display="flex" alignItems="center" mb={2}>
        <Box>
          <Typography
            variant="h6"
            display="flex"
            flexDirection="row"
            alignItems="center"
          >
            <Box mr={2} fontSize="large" color="primary.main">
              {icon}
            </Box>
            <strong>{title}</strong>
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </Box>
    </CardContent>
  </Card>
);

export default Resume;
