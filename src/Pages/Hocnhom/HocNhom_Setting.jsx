import { useState,useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { Tooltip, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import Groups2Icon from '@mui/icons-material/Groups2';
import{ ShowFormAddGroupContext} from "../Hocnhompage";
function HocNhomItem() {
  function HandleSettingClick() { }
  const [open, setOpen] = useState(false)
  const {setOpenJoinGroup,setOpenAddGroup} = useContext(ShowFormAddGroupContext)
  const handleClickOpen = () => {
    setOpen((pre) => {
      if(pre===true){
        setOpenAddGroup(false)
        setOpenJoinGroup(false)
      }
      return !pre
    })
  }
  const handleClickOpenAddGroup = () => {
    setOpenAddGroup((pre) => !pre)
    setOpenJoinGroup(false)
  }
  const handleClickOpenJoinGroup = () => {
    setOpenJoinGroup((pre) => !pre)
    setOpenAddGroup(false)
  }
  return (
    <div>
      <FontAwesomeIcon icon={faGear} />
      <button
        title="Setting"
        className="framebutton"
        onClick={() => HandleSettingClick()}
      >
        <Tooltip
          title={
            <List
              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color: 'black' }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Hãy thêm hoặc tạo nhóm của bạn
                </ListSubheader>
              }
            >
              <ListItemButton onClick={handleClickOpenAddGroup}>
                <ListItemIcon>
                  <GroupAddIcon />
                </ListItemIcon>
                <ListItemText primary="thêm nhóm" />
              </ListItemButton>
              <ListItemButton onClick={handleClickOpenJoinGroup}>
                <ListItemIcon>
                  <Groups2Icon />
                </ListItemIcon>
                <ListItemText primary="tham gia nhóm" />
              </ListItemButton>
              <ListItemButton >
              </ListItemButton>
            </List>}
          open={open} onClick={handleClickOpen}  >
          <span><FontAwesomeIcon icon={faUserPlus} /> Tham gia Hoặc tạo nhóm</span>
        </Tooltip>
      </button>
    </div>
  );
}

export default HocNhomItem;


