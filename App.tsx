import { StatusBar } from 'expo-status-bar';
import { useAppFonts } from '@hooks/useAppFonts';
import { ThemeProvider } from 'styled-components';
import theme from '@/theme/theme';
import Login from '@/screens/Login';

export default function App() {
  const fontsLoaded = useAppFonts();
  if (!fontsLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <Login />
      <StatusBar style="dark" />
    </ThemeProvider>
  );
}
