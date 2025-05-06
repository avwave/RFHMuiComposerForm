import { Box, Typography, Card, TextField, Button } from '@mui/material';

export default function BioComponent() {
  return (
    <Card sx={{ p: 3, boxShadow: 5, flexGrow: 1 }}>
      <Typography variant="h6" mb={2}>
        Biography
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <TextField
          label="Biography"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Card>
  );
}
