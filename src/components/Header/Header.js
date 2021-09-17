import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { FormGroup } from "@material-ui/core";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import {Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import orange from "@material-ui/core/colors/orange";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  palette: {
    primary: orange,
    secondary: orange,
  },
  root: {
    flexGrow: 1,
    background: orange,
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: { width: "inherit" },
  Link: {
    textDecoration: "none",
  },
  button: {
    margin: theme.spacing(1),
    marginRight: theme.spacing(2),
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginBottom: theme.spacing(2),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },

  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const reload = () => {
    window.location.reload(false);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        style={{ background: "#2E3B55" }}
        position="absolute"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link
              to="/"
              onClick={reload}
              className={classes.link}
              style={{ textDecoration: "none", color: "white" }}
            >
              Sweet itech
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        <Divider />

        <List>
          <Link
            onClick={handleDrawerClose}
            style={{ textDecoration: "none", color: "black" }}
            to="/"
            className={classes.link}
          >
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
          </Link>
          <Link
            onClick={handleDrawerClose}
            style={{ textDecoration: "none", color: "black" }}
            to="/add-new-product"
          >
            <ListItem button key="Add new Product">
              <ListItemIcon>
                <AddShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Add new Product" />
            </ListItem>
          </Link>

          <Link
            onClick={handleDrawerClose}
            style={{ textDecoration: "none", color: "black" }}
            to="/all-products"
          >
            <ListItem button key="All Products">
              <ListItemIcon>
                <LocalMallIcon />
              </ListItemIcon>
              <ListItemText primary="All Products" />
            </ListItem>
          </Link>

          <Link
            onClick={handleDrawerClose}
            style={{ textDecoration: "none", color: "black" }}
            to="/about"
            className={classes.link}
          >
            <ListItem button>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItem>
          </Link>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      ></main>
    </div>
  );
}
