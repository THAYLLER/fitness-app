import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Record<string, Record<number, string>>;
    fonts: {
      regular: string;
      bold: string;
    };
  }
} 