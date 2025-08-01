import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogContent,
  IconButton,
  useTheme,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import Immagine1 from '../assets/Immagine1.jpg';
import Immagine2 from '../assets/Immagine2.jpg';

const Gallery = () => {
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      id: 1,
      image: Immagine1,
      title: 'Edificio Residenziale Bifamiliare',
      location: 'Realizzazione edificio due piani - In corso',
    },
    {
      id: 2,
      image: Immagine2,
      title: 'Ristrutturazione Coperture',
      location: 'Rifacimento tetti e terrazzo - Completato',
    },
  ];

  const handleImageClick = (project) => {
    setSelectedImage(project);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <Box
      id="gallery"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              mb: 2,
              color: theme.palette.primary.main,
              fontWeight: 600,
            }}
          >
            I Nostri Progetti
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              backgroundColor: theme.palette.secondary.main,
              mx: 'auto',
              mb: 3,
              borderRadius: 2,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: '600px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Una selezione dei nostri lavori più recenti
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {projects.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <Card
                elevation={3}
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  maxWidth: 350,
                  mx: 'auto',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    '& .gallery-image': {
                      transform: 'scale(1.1)',
                    },
                    '& .gallery-overlay': {
                      opacity: 1,
                    },
                  },
                  transition: 'all 0.3s ease',
                }}
                onClick={() => handleImageClick(project)}
              >
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                  <CardMedia
                    className="gallery-image"
                    component="img"
                    height="250"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      transition: 'transform 0.3s ease',
                    }}
                  />
                  <Box
                    className="gallery-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(139, 115, 85, 0.8)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    <Box sx={{ textAlign: 'center', color: 'white' }}>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2">
                        {project.location}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <CardContent sx={{ p: 2 }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      mb: 0.5,
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.text.secondary }}
                  >
                    {project.location}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Image Modal */}
      <Dialog
        open={!!selectedImage}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: 3,
            overflow: 'hidden',
          },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              color: 'white',
              backgroundColor: 'rgba(0,0,0,0.5)',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <DialogContent sx={{ p: 0 }}>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                }}
              />
              <Box sx={{ p: 3, textAlign: 'center' }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                  {selectedImage.title}
                </Typography>
                <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                  {selectedImage.location}
                </Typography>
              </Box>
            </DialogContent>
          )}
        </Box>
      </Dialog>
    </Box>
  );
};

export default Gallery;
