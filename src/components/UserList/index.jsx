import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import fetchModel from "../../../lib/fetchModelData.js";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchModel("/user/list")
      .then((data) => {
        if (!cancelled) setUsers(Array.isArray(data) ? data : []);
      })
      .catch((e) => {
        if (!cancelled) setError(e.message || "Không tải được danh sách.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
        <CircularProgress size={28} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 1 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="overline" sx={{ px: 1, color: "text.secondary" }}>
        Người dùng
      </Typography>
      <List dense disablePadding>
        {users.map((u) => (
          <ListItemButton
            key={u._id}
            component={NavLink}
            to={`/users/${u._id}`}
            sx={{
              borderRadius: 1,
              "&.active": { bgcolor: "action.selected" },
            }}
          >
            <ListItemText
              primary={`${u.first_name} ${u.last_name}`}
              secondary={u.location}
            />
          </ListItemButton>
        ))}
      </List>
    </Box>
  );
}
