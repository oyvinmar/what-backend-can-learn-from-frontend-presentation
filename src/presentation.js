// Import React
import React from 'react';
import Prism from 'prismjs';

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
  Slide,
  CodePane,
} from 'spectacle';

// Import theme
import createPrettierSlides from './prettier';
import createSnapshotSlides from './snapshot';
import createHotReloadSlides from './hotreload';
import createBabelSlides from './babel';
import createTheme from 'spectacle/lib/themes/default';
import preloader from 'spectacle/lib/utils/preloader';
import notes from './notes';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');
// require("prismjs/themes/prism.css");
require('prismjs/themes/prism-tomorrow.css');

window.Prism = Prism;

const theme = createTheme(
  {
    primary: '#A1D1CA',
    secondary: '#2D2926',
    tertiary: '#FDFDFD',
    quartenary: 'white',
  },
  {
    primary: '-apple-system, BlinkMacSystemFont, Helvetica',
    secondary: '-apple-system, BlinkMacSystemFont, Helvetica',
  },
);
theme.screen.components.codePane.pre.fontSize = '1.4rem';

const getNotes = slideName =>
  notes[slideName] ? notes[slideName]() : undefined;

const video = {
  hotReload: require('./video/hot-reload-example.mp4'),
  writeSnapshot: require('./video/write_snapshot.mp4'),
  jestWatch: require('./video/jest_watch.mp4'),
  updateSnapshot: require('./video/update_snapshot.mp4'),
  prettierEditorExample: require('./video/prettier_editor_example.mp4'),
  prettierEditorJsxExample: require('./video/prettier_editor_jsx_example.mp4'),
};

const images = {
  prettierLint: require('./images/prettier_lint.png'),
  prettierFormat: require('./images/prettier_format.png'),
  toolscloud: require('./images/toolscloud.svg'),
};

preloader(video);
preloader(images);
const prettierSlides = createPrettierSlides(images, video);
const snapshotSlides = createSnapshotSlides(images, video);
const hotReloadSlides = createHotReloadSlides(images, video);
const babelSlides = createBabelSlides(images, video);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        progress="None"
        theme={theme}
        controls={false}>
        <Slide transition={['zoom']} bgColor="primary">
          {getNotes('slide1')}
          <Heading size={1} lineHeight={1.5} textColor="secondary">
            What backend can learn from frontend
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          {getNotes('slide2')}
          <BlockQuote>
            <Quote>There is no such thing as a new idea.</Quote>
            <Cite>Mark Twain</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          {getNotes('slide3')}
          <Heading size={3} textColor="secondary">
            (Developer) Tools
          </Heading>
        </Slide>
        <Slide
          className="slide__bg-image"
          bgSize="contain"
          bgRepeat="no-repeat"
          bgColor="#2d2d2d"
          bgImage={images.toolscloud}>
          {getNotes('slide4')}
        </Slide>
        <Slide>
          {getNotes('slide5')}
          <Heading size={1} lineHeight={1.5} textColor="secondary">
            No build system
          </Heading>
          <Appear>
            <Heading fit size={1} textColor="secondary">
              (only scripts i.e. functions)
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          {getNotes('slide6')}
          <Heading size={2} lineHeight="1.5" textColor="secondary">
            Run a script
          </Heading>
          <CodePane
            lang="bash"
            source={`
$ babel src -d out/server
            `}
            margin="20px auto"
            padding="0 1em"
          />
          <CodePane
            lang="bash"
            source={`
$ stylelint style/**/*.css
            `}
            margin="20px auto"
            padding="0 1em"
          />
        </Slide>
        <Slide>
          {getNotes('slide7')}
          <Heading size={2} extColor="secondary">
            package.json scripts
          </Heading>
          <CodePane
            lang="js"
            source={`
"scripts": {
  "build-server": "babel server -d out/server",
  "build-client": "webpack --config ./webpack.config.prod.js",
  "build": "yarn build-server && yarn build-client ",
  "clean": "rimraf ./htdocs/*",
  "test": "jest",
  "lint": "yarn run lint-prettier && eslint --ext .js  src",
  "lint-prettier": "node prettier.js lint",
  "start": "babel-node --watch server",
  "start-prod": "NODE_ENV=production node out/server",
  "prebuild": "npm run clean",
  "pretest": "npm run lint",
  "prettier": "node prettier.js write"
},
            `}
            margin="20px auto"
            padding="0 1em"
          />
        </Slide>
        {babelSlides.map((slide, i) => React.cloneElement(slide, { key: i }))}
        {hotReloadSlides.map((slide, i) =>
          React.cloneElement(slide, { key: i }),
        )}
        {snapshotSlides.map((slide, i) =>
          React.cloneElement(slide, { key: i }),
        )}
        {prettierSlides.map((slide, i) =>
          React.cloneElement(slide, { key: i }),
        )}
        <Slide>
          <Heading size={3} textColor="secondary">
            Other tools
          </Heading>
          <List>
            <ListItem>ESLint</ListItem>
            <ListItem>Codemod</ListItem>
            <ListItem>Monorepo (Lerna, Yarn Workspaces)</ListItem>
            <ListItem>Prepack</ListItem>
          </List>
        </Slide>
        <Slide transition={['spin', 'slide']}>
          <Heading size={1} fit lineHeight={1.5} textColor="secondary">
            Thanks for listening!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
