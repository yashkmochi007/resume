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
  { name: ".Net / C#", value: 8 },
  { name: "React", value: 8.5 },
  { name: "Python", value: 7 },
  { name: "Node JS", value: 6.5 },
  { name: "Angular", value: 5 },
  { name: "HTML / CSS / JS / TS", value: 7 },
  { name: "PostgreSQL / MySQL", value: 7 },
  { name: "MongoDB / Cosmos DB", value: 5 },
  { name: "Git / Postman / Swagger / Docker / Redis / Sonar", value: 8 },
];

const experienceData = [
  {
    title: "Nov 2020",
    cardTitle: "Kemsys Technologies",
    cardSubtitle: "Full Time - Nov 2020 to Present - 3 yrs 8 mo+",
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
    title: "Microsoft Azure based IOT Platform",
    icon: <AiOutlineApi />,
    description: (
      <>
        <p>
          Led a team in developing a comprehensive Remote Device Management
          Platform with multi-tenancy support, leveraging Azure services, .NET,
          Node.js, and React. This platform is designed for{" "}
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
        </ul>
        <p>
          This project showcases my ability to lead and deliver robust IoT
          solutions, demonstrating expertise in cloud technologies, full-stack
          development, and IoT security.
        </p>
      </>
    ),
  },

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
          <MyExpertise />
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
                Experience (7.5+ Years)
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
              {keyProjectsData.map((project, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <ProjectCard
                    title={project.title}
                    icon={project.icon}
                    description={project.description}
                  />
                </Grid>
              ))}
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
                    {achievement.date} - {achievement.description}
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
