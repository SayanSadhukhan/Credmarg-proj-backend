import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Employees from './components/Employees';
import Vendors from './components/Vendors';
// import SendEmail from './components/SendEmail';
import Emails from './components/Emails';
import Dashboard from './components/Dashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Button color="inherit" component={Link} to="/">Transaction Manager</Button>
            </Typography>
            <Button color="inherit" component={Link} to="/employees">Employees</Button>
            <Button color="inherit" component={Link} to="/vendors">Vendors</Button>
            {/* <Button color="inherit" component={Link} to="/send-email">Send Email</Button> */}
            <Button color="inherit" component={Link} to="/Emails"> Emails</Button>
          </Toolbar>
        </AppBar>
        <Container>
          <Routes>
            <Route path="/employees" element={<Employees />} />
            <Route path="/vendors" element={<Vendors />} />
            {/* <Route path="/send-email" element={<SendEmail />} /> */}
            <Route path="/Emails" element={<Emails />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
      <Dashboard />
    </>
  );
}

export default App;
