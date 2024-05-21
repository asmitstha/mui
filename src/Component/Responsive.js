import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail'; // Added import
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { ExpandLess, ExpandMore, Home, Info, Work, ContactMail } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useMediaQuery } from '@mui/material';
import VerticalTabs from './TabPanel';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(6)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
 
});

const DrawerHeader = styled('div')(({ theme,openIcon }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  position:'sticky',
  top:0,
  zIndex:1,
  justifyContent: openIcon ? 'flex-end' : 'flex-end',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'openIcon',
})(({ theme, openIcon }) => ({
  // zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(openIcon && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'openIcon' })(
  ({ theme, openIcon }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
   // Customize scrollbar using sx prop
   '& .MuiDrawer-paper::-webkit-scrollbar': {
    width: '8px', // Width of the scrollbar
  },
  '& .MuiDrawer-paper::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.white.opacity7, // Color of the scrollbar thumb
    borderRadius: '4px', // Border radius of the scrollbar thumb
  },
  '& .MuiDrawer-paper::-webkit-scrollbar-thumb:hover': {
    backgroundColor: theme.palette.common.white, // Color of the scrollbar thumb on hover
  },
  '& .MuiDrawer-paper::-webkit-scrollbar-track': {
    backgroundColor: theme.palette.secondary.dark, // Color of the scrollbar track
  },
    ...(openIcon && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!openIcon && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function Responsive(props) {
  const theme = useTheme();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [openIcon, setOpen] = React.useState(true);
  const [openStates, setOpenStates] = React.useState({});
  //const screenSizeSM = useMediaQuery(theme.breakpoints.down('sm'));
 
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
    setOpen(true);
  };

  const handleDrawerOpenIcon = () => {
    setMobileOpen(false);
    setOpen(true);
  };
  const handleDrawerCloseIcon = () => {
    setOpen(false);
  };
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.white.opacity9,
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.secondary.main,
    },
  }));

  const sidebarItems = [
    { label: 'Projects',  icon: <Home/>, collapsible: false, children: [] },
    { label: 'Dashboard',  icon: <Home/>, collapsible: false, children: [] },
    { label: 'Timesheet', icon: <Info/>, collapsible: false, children: [] },
    { label: 'Forms', icon: <Work/>, collapsible: true, children: ['Service 1', 'Service 2', 'Service 3'] },
    { label: 'Purchase Orders', icon: <ContactMail/>, collapsible: false, children: [] },
    { label: 'Delivery Dockets', icon: <ContactMail/>, collapsible: false, children: [] },
    { label: 'Equipments', icon: <ContactMail/>, collapsible: false, children: [] },
    { label: 'File Manager', icon: <ContactMail/>, collapsible: false, children: [] },
    { label: 'User Management', icon: <ContactMail/>, collapsible: true, children: ['Clients', 'Users', 'Roles and Permissions', 'Employees'] },
    { label: 'Settings', icon: <ContactMail/>, collapsible: true, children: ['Allowance', 'Category', 'Accounting Code', 'Resource Cost Sheet', 'Claim Payment Act', 'Segment','Organization','Cost Centre','Employee Cost Sheet', 'Equipment Type','Other Settings'] },
    { label: 'Resource Assigner', icon: <ContactMail/>, collapsible: false, children: [] },
    { label: 'Suppliers', icon: <ContactMail/>, collapsible: false, children: [] },
  ];

  const handleClick = (index) => {
    setOpenStates((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };
  const renderListItem = (item,index) => {
    if (item.collapsible) {
      const isOpen = openStates[index] || false;
      return (
        <div key={item.label}>
          
        {!openIcon ? (
          <>
          <HtmlTooltip arrow placement="right" title={
            <React.Fragment>
              <List component="div">
                {item.children.map((child, index) => (
                  <ListItem button key={index}>
                    <ListItemText primary={child} />
                  </ListItem>
                ))}
              </List>
            </React.Fragment>
          }>
            <ListItem>
              <ListItemIcon sx={{
                minWidth: 0,
                mr: { xs: 2, md: openIcon ? 2 : 'auto' },
                justifyContent: 'center',
                color: 'rgba(255, 255, 255, 0.9)',
                '& svg': { fontSize: '1.2rem' },
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} sx={{ opacity: { xs: '1', md: openIcon ? '1' : '0' }, color: 'rgba(255, 255, 255, 0.9)' }} />
              {isOpen ? <ExpandLess sx={{ color: 'rgba(255, 255, 255, 0.9)', display: { xs: 'block', md: openIcon ? 'block' : 'none' } }} /> : <ExpandMore sx={{ color: 'rgba(255, 255, 255, 0.9)', display: { xs: 'block', md: openIcon ? 'block' : 'none' } }} />}
            </ListItem>
          </HtmlTooltip>
          </>
        ) : (
          <>
          <ListItem button onClick={() => handleClick(index)}>
          <ListItemIcon sx={{
            minWidth: 0,
            mr: { xs: 2, md: openIcon ? 2 : 'auto' },
            justifyContent: 'center',
            color: 'rgba(255, 255, 255, 0.9)',
            '& svg': { fontSize: '1.2rem' },
          }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.label} sx={{ opacity: { xs: '1', md: openIcon ? '1' : '0' }, color: 'rgba(255, 255, 255, 0.9)' }} />
          {isOpen ? <ExpandLess sx={{ color: 'rgba(255, 255, 255, 0.9)', display: { xs: 'block', md: openIcon ? 'block' : 'none' } }} /> : <ExpandMore sx={{ color: 'rgba(255, 255, 255, 0.9)', display: { xs: 'block', md: openIcon ? 'block' : 'none' } }} />}
        </ListItem>
          <Collapse in={isOpen} timeout="auto" unmountOnExit sx={{background:theme.palette.secondary.dark}}>
          <List component="div">
            {item.children.map((child, index) => (
              <ListItem button key={index}>
                <ListItemText primary={child} sx={{ opacity: { xs: '1', md: openIcon ? '1' : '0' }, color: 'rgba(255, 255, 255, 0.9)' }} />
              </ListItem>
            ))}
          </List>
        </Collapse>
          </>
          
        )}
      
      </div>
      
      );
    } else {
      return (
        <>
        {!openIcon  ? (
          <HtmlTooltip
          arrow
            placement="right"
            title={
            <React.Fragment>
              <ListItem button key={item.label}>
                    
              <ListItemText primary={item.label} />
              </ListItem>
          </React.Fragment>
        }
      >
        <ListItem button key={item.label}>
           <ListItemIcon sx={{
                      minWidth: 0,
                      mr: { xs: 2, md: openIcon ? 2 : 'auto' },
                      justifyContent: 'center',
                      color: 'rgba(255, 255, 255, 0.9)',
                      '& svg': {  fontSize:'1.2rem', },
                    }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} sx={{ opacity:{ xs: '1', md: openIcon ? '1' : '0' }, color: 'rgba(255, 255, 255, 0.9)'}}/>
        </ListItem>
      </HtmlTooltip>
      ) :  <ListItem button key={item.label}>
      <ListItemIcon sx={{
           minWidth: 0,
           mr: { xs: 2, md: openIcon ? 2 : 'auto' },
           justifyContent: 'center',
           color: 'rgba(255, 255, 255, 0.9)',
           '& svg': {  fontSize:'1.2rem', },
         }}>{item.icon}</ListItemIcon>
        <ListItemText primary={item.label} sx={{ opacity:{ xs: '1', md: openIcon ? '1' : '0' }, color: 'rgba(255, 255, 255, 0.9)'}}/>
        </ListItem>}
        </>
      );
    }
  };
  const drawer = (
    <div>
      <DrawerHeader sx={{backgroundColor: 'secondary.main'}} openIcon={openIcon}>
        <IconButton onClick={handleDrawerCloseIcon} sx={{ opacity: { xs: '0', md: openIcon ? '1' : '0' },color:'rgba(255, 255, 255, 0.9)',display: { xs: 'block', md: openIcon ? 'block' : 'none' }}}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpenIcon}
            //sx={{ mr: 2, display: { sm: 'none' } }}
            sx={{
              color:'rgba(255, 255, 255, 0.9)',
              ...(openIcon && { display: { md: 'none' } }),
            }}
          >
            <MenuIcon />
          </IconButton>
      </DrawerHeader>
      <Divider />
      <List> 
      {sidebarItems.map((item, index) => renderListItem(item, index))} 
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar position="fixed" openIcon={openIcon} sx={{ boxShadow: 'none', background: 'white', width: { xs: '100%', md: openIcon ? `calc(100% - ${drawerWidth}px)` : '100%' } }}>
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            //sx={{ mr: 2, display: { sm: 'none' } }}
            sx={{
              marginRight: 5,
              ...(openIcon && { display: { md: 'none' } }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
        <Divider />
      </AppBar>
      <Box
        component="nav"
        aria-label="mailbox folders"
       
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth,backgroundColor:'secondary.main' },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          openIcon={openIcon}
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { backgroundColor:'secondary.main' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <div component="main" style={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <VerticalTabs/>
      </div>
    </Box>
  );
}

Responsive.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default Responsive;
