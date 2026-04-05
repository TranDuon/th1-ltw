import { useEffect, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";
import Link from "@mui/material/Link";
import fetchModel from "../../../lib/fetchModelData.js";

function formatDateTime(iso) {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    return d.toLocaleString("vi-VN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  } catch {
    return String(iso);
  }
}

export default function UserPhotos() {
  const { userId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchModel(`/photosOfUser/${userId}`)
      .then((data) => {
        if (!cancelled) setPhotos(Array.isArray(data) ? data : []);
      })
      .catch((e) => {
        if (!cancelled) {
          setPhotos([]);
          setError(e.message || "Không tải được ảnh.");
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

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  if (photos.length === 0) {
    return (
      <Typography color="text.secondary">Người dùng này chưa có ảnh nào.</Typography>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {photos.map((photo) => (
        <Paper key={photo._id} variant="outlined" sx={{ overflow: "hidden" }}>
          <Box
            component="img"
            src={photo.file_name}
            alt=""
            sx={{ width: "100%", maxHeight: 480, objectFit: "cover", display: "block" }}
          />
          <Box sx={{ p: 2 }}>
            <Typography variant="subtitle2" color="text.secondary" gutterBottom>
              Đăng: {formatDateTime(photo.date_time)}
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle2" gutterBottom>
              Bình luận ({photo.comments?.length ?? 0})
            </Typography>
            {(photo.comments ?? []).length === 0 ? (
              <Typography variant="body2" color="text.secondary">
                Chưa có bình luận.
              </Typography>
            ) : (
              <Box component="ul" sx={{ m: 0, pl: 2 }}>
                {(photo.comments ?? []).map((c) => (
                  <Box component="li" key={c._id} sx={{ mb: 1.5 }}>
                    <Typography variant="body2">
                      <Link
                        component={RouterLink}
                        to={`/users/${c.user._id}`}
                        underline="hover"
                      >
                        {c.user.first_name} {c.user.last_name}
                      </Link>
                      <Typography component="span" variant="caption" color="text.secondary" sx={{ ml: 1 }}>
                        {formatDateTime(c.date_time)}
                      </Typography>
                    </Typography>
                    <Typography variant="body2">{c.comment}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Paper>
      ))}
    </Box>
  );
}
