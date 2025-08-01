import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import teamImage from '../assets/IMG-20250801-WA0003.jpg';

const About = () => {
  const theme = useTheme();

  const stats = [
    { number: '30+', label: 'Anni di Esperienza' },
    { number: '200+', label: 'Progetti Completati' },
    { number: '100%', label: 'Clienti Soddisfatti' },
  ];

  return (
    <Box
      id="about"
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
            Chi Siamo
          </Typography>
          <Box
            sx={{
              width: 80,
              height: 4,
              backgroundColor: theme.palette.secondary.main,
              mx: 'auto',
              mb: 4,
              borderRadius: 2,
            }}
          />
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <Box sx={{ textAlign: 'center', maxWidth: '800px' }}>
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: theme.palette.text.primary,
                mb: 3,
              }}
            >
              Omar Costruzioni è un'azienda leader nel settore delle costruzioni, con sede a Sesto Fiorentino. 
              Da anni operiamo con passione e dedizione nel mercato, offrendo servizi di alta qualità 
              e soluzioni innovative per ogni esigenza costruttiva.
            </Typography>
            
            <Typography
              variant="body1"
              paragraph
              sx={{
                fontSize: '1.1rem',
                lineHeight: 1.8,
                color: theme.palette.text.primary,
                mb: 4,
              }}
            >
              La nostra esperienza nel settore ci permette di garantire tempi di realizzazione rapidi 
              mantenendo sempre standard elevati di qualità e sicurezza.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
              {stats.map((stat, index) => (
                <Box key={index} sx={{ minWidth: '150px' }}>
                  <Card
                    elevation={2}
                    sx={{
                      textAlign: 'center',
                      py: 2,
                      backgroundColor: 'white',
                      border: `1px solid ${theme.palette.primary.light}40`,
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(139, 115, 85, 0.15)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardContent sx={{ py: 1 }}>
                      <Typography
                        variant="h4"
                        component="div"
                        sx={{
                          fontWeight: 700,
                          color: theme.palette.primary.main,
                          mb: 1,
                        }}
                      >
                        {stat.number}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontWeight: 500,
                          fontSize: '0.9rem',
                        }}
                      >
                        {stat.label}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              position: 'relative',
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              maxWidth: { xs: '100%', sm: '500px', md: '600px' },
              width: '100%',
              '&:hover': {
                transform: 'scale(1.02)',
              },
              transition: 'transform 0.3s ease',
            }}
          >
            <img
              src={teamImage}
              alt="Omar Costruzioni Team"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '400px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(45deg, ${theme.palette.primary.main}20, transparent)`,
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
