import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ScrollableTabsButtonForce from './LabTabs';
import LabTabs from './LabTabs';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height:`calc(100vh - 120px)` }} 
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', 
        display:{ sx:'none', md:'none', lg:'block' },
        '& button': {
          alignItems:'flex-start',
          textTransform:'capitalize',
        },
      }}
      >
        <Tab label="Cost Centre Settings" {...a11yProps(0)} />
        <Tab label="Cost Tracking Settings" {...a11yProps(1)} />
        <Tab label="Timesheet Settings" {...a11yProps(2)} />
        <Tab label="Purchase Order Settings" {...a11yProps(3)} />
        <Tab label="Docket Settings" {...a11yProps(4)} />
        <Tab label="Tax Settings" {...a11yProps(5)} />
        <Tab label="Account Integration" {...a11yProps(6)} />
        <Tab label="Name Mapping" {...a11yProps(7)} />
        <Tab label="Claim Settings" {...a11yProps(8)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3} style={{flexGrow : 1 }}>
       <LabTabs/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}