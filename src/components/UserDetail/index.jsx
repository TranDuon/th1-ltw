import { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import fetchModel from "../../../lib/fetchModelData.js";

export default function UserDetail() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchModel(`/user/${userId}`)
      .then((data) => {
        if (!cancelled) setUser(data);
      })
      .catch((e) => {
        if (!cancelled) {
          setUser(null);
          setError(e.message || "Không tải được thông tin người dùng.");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [userId]);

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error || !user) {
    return <Alert severity="warning">{error || "Không tìm thấy người dùng."}</Alert>;
  }

  return (
    <Card variant="outlined" sx={{ maxWidth: 560 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {user.first_name} {user.last_name}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          {user.location}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Nghề nghiệp:</strong> {user.occupation}
        </Typography>
        <Typography variant="body1" paragraph>
          {user.description}
        </Typography>
        <Button
          component={RouterLink}
          to={`/photos/${user._id}`}
          variant="contained"
          size="small"
        >
          Xem ảnh của người dùng này
        </Button>
      </CardContent>
    </Card>
  );
}
