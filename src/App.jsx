import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import TopBar from "./components/TopBar/index.jsx";
import UserList from "./components/UserList/index.jsx";
import UserDetail from "./components/UserDetail/index.jsx";
import UserPhotos from "./components/UserPhotos/index.jsx";

function MainShell() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <TopBar />
      <Box sx={{ display: "flex", flex: 1, minHeight: 0 }}>
        <Box
          component="aside"
          sx={{
            width: { xs: 240, sm: 280 },
            flexShrink: 0,
            borderRight: 1,
            borderColor: "divider",
            bgcolor: "grey.50",
            overflow: "auto",
          }}
        >
          <UserList />
        </Box>
        <Box component="main" sx={{ flex: 1, overflow: "auto", p: { xs: 2, md: 3 } }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}

function UsersIndex() {
  return (
    <Box sx={{ color: "text.secondary" }}>
      Chọn một người dùng ở danh sách bên trái để xem chi tiết.
    </Box>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<MainShell />}>
        <Route path="/" element={<Navigate to="/users" replace />} />
        <Route path="/users/:userId" element={<UserDetail />} />
        <Route path="/users" element={<UsersIndex />} />
        <Route path="/photos/:userId" element={<UserPhotos />} />
      </Route>
      <Route path="*" element={<Navigate to="/users" replace />} />
    </Routes>
  );
}
