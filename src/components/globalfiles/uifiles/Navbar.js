"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';


const drawerWidth = 240;
const navItems = ['Our Product', 'LogIn', 'Dark Mode'];

function NavigationBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

   React.useEffect(() => {
      // Add 'no-scroll' class to body when drawer opens
      if (mobileOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
  
      // Cleanup on unmount or when open changes
      return () => {
        document.body.classList.remove("no-scroll");
      };
    }, [mobileOpen]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
          <ListItem disablePadding  sx={{ display:"flex", alignItems:"center", justifyContent:"center" }}>
          <Link  href="#contact" underline="none" color="text.secondary">
            <Button sx={{backgroundColor:"#5CD6FF", border:"1px solid #00BFFF", color:"black", borderRadius:"100px", margin:"0px 10px",  textTransform: 'none', }} size='small'> 
            Contact Us
              </Button>
              </Link>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{ display:"flex", alignItems:"center", justifyContent:"center" }} >
            <img
                src="/assets/linkedin.png"
                alt="linkedin"
                style={{ maxWidth: "85%", height: "20px", size: "small" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton sx={{display:"flex", alignItems:"center", justifyContent:"center" }} >
            <img
                src="/assets/lang.png"
                alt="lang"
                style={{ maxWidth: "85%", height: "20px", size: "small" }}
              />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor:"#F9FBFF",backgroundImage:"none", boxShadow: "2px 2px 2px 2px #223C5033", minHeight:"55px", paddingLeft:{xs:"2px",sm:"2px",md:"120px", lg:"120px"}, paddingRight:{xs:"2px",sm:"2px",md:"120px", lg:"120px"}, }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color:"black", marginLeft:"90%", position:"fixed", right:"3px", }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'block', sm: 'block', }, color:"card.icon" }}
          >
          <img
                src="/assets/logo.png"
                alt="logo"
                style={{ maxWidth: "90%", height: "25px", size: "small" }}
              />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block'} }}>
              {/* <ThemeToggleButton/> */}
              <Link  href="#contact" underline="none" color="text.secondary">
              <Button sx={{backgroundColor:"#5CD6FF", border:"1px solid #00BFFF", color:"black", borderRadius:"100px", margin:"0px 10px",  textTransform: 'none', }}>
              Contact Us
              </Button>
              </Link>
              {/* <IconButton > <LinkedInIcon sx={{color:"black", width:"24px", height:"24px",}}/></IconButton> */}
              <IconButton ><img
                src="/assets/linkedin.png"
                alt="linkedin"
                style={{ maxWidth: "85%", height: "20px", size: "small" }}
              /></IconButton>
              <IconButton ><img
                src="/assets/lang.png"
                alt="lang"
                style={{ maxWidth: "85%", height: "20px", size: "small" }}
              /></IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          anchor='right'
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , backgroundImage:"none"},
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      {/* <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box> */}
    </Box>
  );
}

export default NavigationBar;
