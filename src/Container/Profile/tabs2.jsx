import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-widtbutton: {
      backgroundColor: "green",
      borderRadius: "50px",
      width: "90%",
      height: "80%",
      textAlign: "center",
      marginLeft: "15px",
  },h-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 360,
  },
  button: {
    backgroundColor: "green",
    borderRadius: "50px",
    width: "90%",
    height: "80%",
    textAlign: "center",
    marginLeft: "15px",
},
}));

function Tabs2() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Donasi" {...a11yProps(0)} />
          <Tab label="Kampanye" {...a11yProps(1)} />
          <Tab label="GabungAksi" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Button variant="contained" color="secondary" className={classes.button}>
          Buat Kampanye Alam
          </Button>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
export default Tabs2;