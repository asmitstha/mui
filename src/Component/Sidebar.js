import React, { useState } from 'react';
// import { makeStyles } from '@mui/styles'; // Changed import statement
import { Drawer, List, ListItem, ListItemText, Divider, Collapse } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   toolbar: theme.mixins.toolbar,
//   nested: {
//     paddingLeft: theme.spacing(4),
//   },
// }));

const Sidebar = () => {
  // const classes = useStyles();
  const [open, setOpen] = useState(false);

  const sidebarItems = [
    { label: 'Home', collapsible: false, children: [] },
    { label: 'About', collapsible: false, children: [] },
    { label: 'Services', collapsible: true, children: ['Service 1', 'Service 2', 'Service 3'] },
    { label: 'Contact', collapsible: false, children: [] },
  ];

  const handleClick = () => {
    setOpen(!open);
  };

  const renderListItem = (item) => {
    if (item.collapsible) {
      return (
        <div key={item.label}>
          <ListItem button onClick={handleClick}>
            <ListItemText primary={item.label} />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children.map((child, index) => (
                <ListItem button key={index} >
                  <ListItemText primary={child} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      );
    } else {
      return (
        <ListItem button key={item.label}>
          <ListItemText primary={item.label} />
        </ListItem>
      );
    }
  };

  return (
    <Drawer
      variant="permanent"
      anchor="left"
    >
      <div />
      <Divider />
      <List>
        {sidebarItems.map((item) => renderListItem(item))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
