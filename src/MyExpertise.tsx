import { Typography } from "@mui/material";
import { CardWidget } from "./Resume";

const MyExpertise: React.FC = () => {
  return (
    <CardWidget title="My Expertise">
      <Typography variant="body1">
        As a Technical Lead with over 7.5 years of experience in the Smart City
        & Industrial IoT domains, I have a proven track record of leading teams
        to develop and deploy comprehensive IoT solutions. My expertise spans
        across the entire IoT technology stack including Wired & Wireless
        Sensors/Devices, IoT Gateways, IoT Protocols, IoT Platforms, Digital
        Twins, Microservices, REST APIs, and Frontend Applications.
      </Typography>
      <Typography variant="body1">
        I have successfully led projects that involve:
        <ul>
          <li>End-to-end IoT solutions development</li>
          <li>Cloud infrastructure design and implementation</li>
          <li>Microservices architecture</li>
          <li>Agile methodologies and DevOps practices</li>
          <li>Mentoring and guiding junior developers</li>
        </ul>
      </Typography>
      <Typography variant="body1">
        My strong technical background combined with leadership capabilities
        allows me to bridge the gap between business objectives and technical
        execution, ensuring successful project delivery and client satisfaction.
      </Typography>
    </CardWidget>
  );
};

export default MyExpertise;
