import "styled-components";

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    white: string,
	red: string,
	blue: string,
	lightGray: string,
	gray: string,
	DarkGray: string,
	black: string,
	green: string,
  }
}