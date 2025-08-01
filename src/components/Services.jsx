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
import {
  Business as BusinessIcon,
  Construction as ConstructionIcon,
  Build as BuildIcon,
} from '@mui/icons-material';

const Services = () => {
  const theme = useTheme();

  const services = [
    {
      icon: <BusinessIcon fontSize="large" />,
      title: 'Costruzione',
      description: 'Realizzazione di edifici residenziali, commerciali e industriali con materiali di prima qualità e tecniche all\'avanguardia.',
    },
    {
      icon: <ConstructionIcon fontSize="large" />,
      title: 'Abbattimento Infrastrutturale',
      description: 'Demolizioni controllate e sicure di strutture esistenti, nel rispetto delle normative ambientali e di sicurezza.',
    },
    {
      icon: <BuildIcon fontSize="large" />,
      title: 'Opere di Ristrutturazione a Regola d\'Arte',
      description: 'Ristrutturazioni complete e parziali, restauro conservativo e riqualificazione energetica degli edifici.',
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'white',
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
            I Nostri Servizi
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
            Offriamo una gamma completa di servizi per soddisfare ogni esigenza costruttiva
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          {services.map((service, index) => (
            <Grid item xs={4} key={index}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  textAlign: 'center',
                  p: { xs: 1.5, sm: 2.5, md: 4 },
                  borderRadius: 3,
                  border: `1px solid ${theme.palette.primary.light}20`,
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 20px 40px rgba(139, 115, 85, 0.15)',
                    '& .service-icon': {
                      transform: 'scale(1.1)',
                      color: theme.palette.secondary.main,
                    },
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <CardContent sx={{ p: 0, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box
                    className="service-icon"
                    sx={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: { xs: 50, sm: 65, md: 80 },
                      height: { xs: 50, sm: 65, md: 80 },
                      borderRadius: '50%',
                      backgroundColor: `${theme.palette.primary.main}15`,
                      color: theme.palette.primary.main,
                      mb: { xs: 1.5, sm: 2, md: 3 },
                      transition: 'all 0.3s ease',
                      '& svg': {
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                      },
                    }}
                  >
                    {service.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      mb: { xs: 1, sm: 1.5, md: 2 },
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      lineHeight: 1.3,
                      textAlign: 'center',
                      fontSize: { xs: '1rem', sm: '1.2rem', md: '1.5rem' },
                    }}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7,
                      fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                      textAlign: 'center',
                      maxWidth: '280px',
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
