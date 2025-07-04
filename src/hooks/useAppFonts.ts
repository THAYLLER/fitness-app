import { useFonts, Exo_400Regular, Exo_700Bold } from '@expo-google-fonts/exo';

export function useAppFonts() {
  const [loaded] = useFonts({
    ExoRegular: Exo_400Regular,
    ExoBold: Exo_700Bold,
  });

  return loaded;
} 