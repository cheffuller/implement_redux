import React from 'react';
import cars from '../cars.json';
// Import {useParams} from "react-router-dom" here //
import { useParams } from 'react-router';

// import MUI components here //
// Container, Paper, Chip //
import { Container, Paper, Chip } from '@mui/material';

const Car = (props) => {
  const { id } = useParams();

  const car = cars.find((e) => e.id === Number(id));

  return (
    <Container maxWidth="sm" sx={{ marginTop: 5 }}>
      <Paper elevation={1} sx={{ padding: 5 }}>
        <h1>{car.Name}</h1>
        <Chip label={`id: ${car.id}`} />
        <Chip label={`Name: ${car.Name}`} />
        <Chip label={`Miles_per_Gallon: ${car.Miles_per_Gallon}`} />
        <Chip label={`Cylinders: ${car.Cylinders}`} />
        <Chip label={`Displacement: ${car.Displacement}`} />
        <Chip label={`Horsepower: ${car.Horsepower}`} />
        <Chip label={`Weight_in_lbs: ${car.Weight_in_lbs}`} />
        <Chip label={`Acceleration: ${car.Acceleration}`} />
        <Chip label={`Year: ${car.Year}`} />
        <Chip label={`Origin: ${car.Origin}`} />
      </Paper>
    </Container>
  );
};

export default Car;
