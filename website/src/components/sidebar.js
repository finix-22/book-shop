import {
    Box,
    List,
    ListItem,
    Button,
    ListItemButton,
    ListItemText,
    SwipeableDrawer,
    IconButton,
    Typography,
    Link,
    ListSubheader,
    ListItemIcon,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { toggleMenu } from "../slice";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto/500.css";

function Sidebar({ anchorEl }) {
    const open = useSelector((state) => state.app.open);
    const dispatch = useDispatch();

    return (
        <SwipeableDrawer
            onOpen={() => {
                dispatch(toggleMenu());
            }}
            onClose={() => {
                dispatch(toggleMenu());
            }}
            open={open}
            anchor="left"
        >
            <Box
                sx={{
                    width: "65vw",
                }}
            >
                <Box
                    sx={{
                        height: "30vh",
                        backgroundColor: "#232F3F",
                    }}
                >
                    <IconButton>
                        <CloseSharpIcon
                            sx={{ fill: "#ffffff" }}
                            onClick={() => {
                                dispatch(toggleMenu());
                            }}
                        />
                    </IconButton>
                    <Button
                        size="small"
                        sx={{
                            color: "#ffffff",
                            position: "relative",
                            left: "28vw",
                        }}
                        endIcon={<Person2OutlinedIcon />}
                    >
                        sign in
                    </Button>
                    <Box>
                        <Link
                            underline="none"
                            sx={{
                                position: "relative",
                                top: "14vh",
                                left: "5vw",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "'roboto', sans-serif",
                                    fontWeight: "900",
                                    color: "#ffffff",
                                    fontSize: "1.2rem",
                                }}
                            >
                                Browse
                            </Typography>
                            <Typography
                                component="span"
                                gutterBottom
                                sx={{
                                    fontFamily: "'roboto', sans-serif",
                                    color: "#ffffff",
                                    fontSize: "1.5rem",
                                }}
                            >
                                Books'nMore
                            </Typography>
                        </Link>
                    </Box>
                </Box>
                <List>
                    <ListSubheader>
                        <ListItemButton>
                            <ListItemText primary="Home Page" />
                            <ListItemIcon>
                                <HomeOutlinedIcon
                                    sx={{ marginLeft: "2rem" }}
                                />
                            </ListItemIcon>
                        </ListItemButton>
                    </ListSubheader>
                    <ListSubheader>
                        <ListItemButton>
                            <ListItemText primary="Top Categories" />
                        </ListItemButton>
                    </ListSubheader>
                    {[
                        "Category 1",
                        "Category 2",
                        "Category 3",
                        "Category 4",
                    ].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemText inset primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </SwipeableDrawer>
    );
}

export default Sidebar;
