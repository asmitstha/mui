import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import knowledgeBase from '../img/Research paper-bro.svg'; // Adjust the path as necessary

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
    <Box
        component="img"
        sx={{
          height: 110,
          width: 110,
        }}
        alt="Benevolent"
        src={knowledgeBase}
      />
      <Typography gutterBottom mb={2} mt={1} style={{ color: 'white' }}>
        Got Question?
      </Typography>
      <Button size="small"  variant="contained">Visit Knowledge Base</Button>
    </CardContent>
    
  </React.Fragment>
);

export default function OutlinedCard() {
  const theme = useTheme();
  return (
    <Box sx={{
      m: 2,
      '& .MuiPaper-root': {
        //bgcolor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white background
        background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.00) 100%)',
        backdropFilter: 'blur(100px)', // Blur effect
        border: 'none', // Light border
        //borderRadius: '10px', // Rounded corners
        //boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
      },
    }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
