import {
  Typography,
  Link,
  Card,
  CardContent,
  Grid,
  SvgIcon,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import RoomIcon from "@mui/icons-material/Room"; // Import RoomIcon

const ProfileHeader = () => (
  <Card variant="outlined" sx={{ marginTop: "40px" }}>
    <CardContent>
      <Grid container spacing={2} alignItems="center">
        {/* Left side */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h1" gutterBottom>
            Yash Mochi
          </Typography>
        </Grid>

        {/* Right side */}
        <Grid item xs={12} md={6} container justifyContent="flex-end">
          {/* Email and Phone */}
          <Grid item xs={12} container spacing={1} alignItems="center">
            <Grid item>
              <SvgIcon
                component={EmailIcon}
                sx={{ fontSize: 20, color: "#007bff" }}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <Link href="mailto:yashkmochi007@gmail.com" color="inherit">
                  yashkmochi007@gmail.com
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={1} alignItems="center">
            <Grid item>
              <SvgIcon
                component={PhoneIcon}
                sx={{ fontSize: 20, color: "#007bff" }}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1">+918401332179</Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={1} alignItems="center">
            <Grid item>
              <SvgIcon
                component={RoomIcon}
                sx={{ fontSize: 20, color: "#007bff" }}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1">Ahmedabad, Gujarat</Typography>
            </Grid>
          </Grid>
          {/* LinkedIn and Stack Overflow */}
          <Grid item xs={12} container spacing={1} alignItems="center">
            <Grid item>
              <SvgIcon
                component={LinkedInIcon}
                sx={{ fontSize: 20, color: "#007bff" }}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <Link
                  href="https://linkedin.com/in/yash9274"
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                >
                  yash9274
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} container spacing={1} alignItems="center">
            <Grid item>
              <SvgIcon sx={{ fontSize: 20, color: "#007bff" }}>
                <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
              </SvgIcon>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                <Link
                  href="https://stackoverflow.com/users/6612255/yash-mochi"
                  target="_blank"
                  rel="noopener"
                  color="inherit"
                >
                  yash-mochi
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default ProfileHeader;
