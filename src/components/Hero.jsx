import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  useTheme,
} from '@mui/material';
import { KeyboardArrowDown as ArrowDownIcon } from '@mui/icons-material';

// Import media assets
import Immagine1 from '../assets/Immagine1.jpg';
import Immagine2 from '../assets/Immagine2.jpg';
import Immagine3 from '../assets/Immagine3.jpg';
import Video1 from '../assets/Video1.mp4';
import Video2 from '../assets/Video2.mp4';
import Video3 from '../assets/Video3.mp4';
import logo from '../assets/omar-costruzioni-high-resolution-logo-transparent.png';

const Hero = () => {
  const theme = useTheme();
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Media assets array with type information
  const mediaAssets = [
    { src: Immagine1, type: 'image' },
    { src: Immagine2, type: 'image' },
    { src: Immagine3, type: 'image' },
    { src: Video1, type: 'video' },
    { src: Video2, type: 'video' },
    { src: Video3, type: 'video' },
  ];

  // Shuffle function to randomize media order
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [shuffledMedia, setShuffledMedia] = useState(() => shuffleArray(mediaAssets));

  // Change media every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMediaIndex((prev) => {
        const nextIndex = (prev + 1) % shuffledMedia.length;
        // Reshuffle when we complete a cycle
        if (nextIndex === 0) {
          setShuffledMedia(shuffleArray(mediaAssets));
        }
        return nextIndex;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [shuffledMedia.length]);

  const currentMedia = shuffledMedia[currentMediaIndex];

  const handleScrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Media */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        {currentMedia.type === 'image' ? (
          <img
            src={currentMedia.src}
            alt="Omar Costruzioni Background"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ) : (
          <video
            src={currentMedia.src}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'opacity 1s ease-in-out',
            }}
          />
        )}
      </Box>

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `linear-gradient(135deg, 
            ${theme.palette.primary.light}30 0%, 
            ${theme.palette.secondary.light}40 100%)`,
          zIndex: 1,
        }}
      />

      {/* Dark Overlay for text readability */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          color: 'white',
          py: 8,
        }}
      >
        <Box
          sx={{
            mb: 3,
            animation: 'fadeInUp 1s ease-out',
          }}
        >
          <img
            src={logo}
            alt="Omar Costruzioni Logo"
            style={{
              height: '120px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.7))',
            }}
          />
        </Box>

        <Typography
          variant="h1"
          component="h1"
          sx={{
            mb: 2,
            fontWeight: 700,
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            animation: 'fadeInUp 1s ease-out 0.2s both',
          }}
        >
        </Typography>

        <Typography
          variant="h4"
          component="p"
          sx={{
            mb: 3,
            fontWeight: 500,
            color: theme.palette.secondary.light,
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            animation: 'fadeInUp 1s ease-out 0.4s both',
          }}
        >
          Il migliore nel settore
        </Typography>

        <Typography
          variant="h6"
          component="p"
          sx={{
            mb: 4,
            maxWidth: '600px',
            mx: 'auto',
            lineHeight: 1.6,
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            animation: 'fadeInUp 1s ease-out 0.6s both',
          }}
        >
          Eccellenza nella costruzione, ristrutturazione e opere infrastrutturali 
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={handleScrollToContact}
          sx={{
            py: 2,
            px: 4,
            fontSize: '1.1rem',
            fontWeight: 600,
            borderRadius: 50,
            backgroundColor: theme.palette.primary.main,
            boxShadow: '0 8px 32px rgba(139, 115, 85, 0.4)',
            animation: 'fadeInUp 1s ease-out 0.8s both',
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
              boxShadow: '0 12px 40px rgba(139, 115, 85, 0.5)',
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          Richiedi Preventivo
        </Button>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          animation: 'bounce 2s infinite',
        }}
      >
        <IconButton
          onClick={handleScrollToAbout}
          sx={{
            color: 'white',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            },
          }}
        >
          <ArrowDownIcon fontSize="large" />
        </IconButton>
      </Box>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
      `}</style>
    </Box>
  );
};

export default Hero;
