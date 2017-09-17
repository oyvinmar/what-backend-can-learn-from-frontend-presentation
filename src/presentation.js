// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  Appear,
  List,
  Quote,
  Slide
  // Text
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import notes from "./notes";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const theme = createTheme(
  {
    primary: "#009682",
    secondary: "#424242",
    tertiary: "#FDFDFD",
    quartenary: "white"
  },
  {
    primary: "-apple-system, BlinkMacSystemFont, Helvetica",
    secondary: "-apple-system, BlinkMacSystemFont, Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          {notes["slide1"]()}
          <Heading size={1} lineHeight={1.5} textColor="secondary">
            What backend can learn from frontend
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>There is no such thing as a new idea.</Quote>
            <Cite>Mark Twain</Cite>
          </BlockQuote>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={3} textColor="secondary">
            Tools
          </Heading>
          <List>
            <ListItem>Babel</ListItem>
            <ListItem>Webpack</ListItem>
            <ListItem>PostCSS</ListItem>
            <ListItem>SASS</ListItem>
            <ListItem>ESLint</ListItem>
            <ListItem>Prettier</ListItem>
            <ListItem>Uglify</ListItem>
            <ListItem>Google Closure</ListItem>
            <ListItem>Hot reloading</ListItem>
            <ListItem>Jest</ListItem>
            <ListItem>Mocha</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={1} lineHeight={1.5} textColor="secondary">
            No build system
          </Heading>
          <Appear>
            <Heading size={1} textColor="tertiary">
              (only scripts i.e. functions)
            </Heading>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
