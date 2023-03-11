import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useSelector, useDispatch } from "react-redux";

function Sidebar({ anchorEl }) {
    const open = useSelector((state) => state.app.open);
    console.log(open)
    const dispatch = useDispatch();

    return (
        <div>
            <Menu
                id="sidebar"
                anchorEl={anchorEl}
                open={open}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export default Sidebar;
