import { useEffect, useState } from "react";
import { useMatch } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import fetchModel from "../../../lib/fetchModelData.js";

const STUDENT_NAME = "TD Dương";

function useContextTitle() {
  const matchUsersIndex = useMatch({ path: "/users", end: true });
  const matchUser = useMatch("/users/:userId");
  const matchPhotos = useMatch("/photos/:userId");
  const userId = matchUser?.params.userId ?? matchPhotos?.params.userId;
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (matchUsersIndex) {
      setTitle("Danh sách người dùng");
      return;
    }
    if (!userId) {
      setTitle("");
      return;
    }
    let cancelled = false;
    fetchModel(`/user/${userId}`)
      .then((user) => {
        if (cancelled || !user) return;
        const name = `${user.first_name} ${user.last_name}`.trim();
        if (matchPhotos) {
          setTitle(`Photos of ${name}`);
        } else {
          setTitle(name);
        }
      })
      .catch(() => {
        if (!cancelled) setTitle("");
      });
    return () => {
      cancelled = true;
    };
  }, [userId, matchPhotos, matchUsersIndex]);

  return title;
}

export default function TopBar() {
  const contextTitle = useContextTitle();

  return (
    <AppBar position="static" color="primary" enableColorOnDark>
      <Toolbar sx={{ justifyContent: "space-between", gap: 2 }}>
        <Typography variant="h6" component="div" noWrap sx={{ fontWeight: 600 }}>
          {STUDENT_NAME}
        </Typography>
        <Box sx={{ textAlign: "right", minWidth: 0 }}>
          <Typography variant="subtitle1" component="div" noWrap>
            {contextTitle}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
