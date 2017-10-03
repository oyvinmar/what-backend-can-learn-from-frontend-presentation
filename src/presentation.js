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
  Text,
} from 'spectacle';

// Import theme
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
};

preloader(video);
preloader(images);

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
        <Slide>
          {getNotes('slide3')}
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
        <Slide>
          <Heading size={2} lineHeight="1.5" textColor="secondary">
            Run a script
          </Heading>
          <CodePane
            lang="bash"
            source={`
$ npm run build
            `}
            margin="20px auto"
            padding="0 1em"
          />
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">
            Hot-reloading {'\u{1F525}'}
          </Heading>
        </Slide>
        <Slide bgColor="secondary" className="slide-content--video">
          <video style={{ maxWidth: '100%' }} src={video.hotReload} autoPlay />
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">
            Backend alternatives
          </Heading>
          <List>
            <ListItem>Python, Ruby, Groovy, etc.</ListItem>
            <ListItem>Jrebel, Intellij, etc.</ListItem>
          </List>
          <Appear>
            <Text textAlign="left">Missing the browser integration part.</Text>
          </Appear>
        </Slide>
        <Slide bgColor="secondary" className="slide-content--video">
          <video style={{ maxWidth: '100%' }} src={video.jestWatch} autoPlay />
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">
            Snapshot Testing {'\u{1F4F8}'}
          </Heading>
        </Slide>
        <Slide>
          <CodePane
            lang="javascript"
            source={`
expect(object).toEqual(?)
            `}
            margin="20px auto"
            padding="0 1em"
          />
        </Slide>
        <Slide transition="fade">
          <CodePane
            lang="javascript"
            source={`
// expect(object).toEqual(?);
console.log(object);
// ["Urge", "Sprite", "Fanta" ]
            `}
            margin="20px auto"
            padding="0 1em"
          />
        </Slide>
        <Slide transition="fade">
          <CodePane
            lang="javascript"
            source={`
expect(object).toEqual([
  "Urge",
  "Sprite",
  "Fanta"
]);
            `}
            margin="20px auto"
            padding="0 1em"
          />
        </Slide>
        <Slide transition="fade">
          <CodePane
            lang="javascript"
            source={`
expect(object).toMatchSnapshot();
            `}
            margin="20px auto"
            padding="0 1em"
          />
        </Slide>
        <Slide bgColor="secondary" className="slide-content--video">
          <video
            style={{ maxWidth: '100%' }}
            src={video.writeSnapshot}
            autoPlay
          />
        </Slide>
        <Slide bgColor="secondary" className="slide-content--video">
          <video
            style={{ maxWidth: '100%' }}
            src={video.updateSnapshot}
            autoPlay
          />
        </Slide>
        <Slide>
          <Heading size={1} fit lineHeight="2" textColor="secondary">
            Backend alternatives
          </Heading>
          <Heading textAlign="center" textColor="secondary">
            ?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={1} textColor="secondary">
            Prettier {'\u{2728}'}
          </Heading>
        </Slide>
        <Slide bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>An opinionated Code Formatter</Quote>
          </BlockQuote>
        </Slide>
        <Slide
          className="slide__bg-image"
          bgSize="contain"
          bgRepeat="no-repeat"
          bgColor="#2d2d2d"
          bgImage={images.prettierLint}
        />
        <Slide
          className="slide__bg-image"
          bgSize="contain"
          bgRepeat="no-repeat"
          bgColor="#2d2d2d"
          bgImage={images.prettierFormat}
        />
        <Slide bgColor="secondary" className="slide-content--video">
          <video
            style={{ maxWidth: '100%' }}
            src={video.prettierEditorExample}
            autoPlay
          />
        </Slide>
        <Slide bgColor="secondary" className="slide-content--video">
          <video
            style={{ maxWidth: '100%' }}
            src={video.prettierEditorJsxExample}
            autoPlay
          />
        </Slide>
        <Slide>
          <Heading size={3} textColor="secondary">
            Why
          </Heading>
          <List>
            <ListItem>No manual (time consuming) formatting</ListItem>
            <ListItem>Stops all debates over style</ListItem>
            <ListItem>Tremendous benefit for newcomers to a codebase</ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading size={1} fit textColor="secondary">
            Backend alternatives
          </Heading>
          <List>
            <ListItem>gofmt (for Go)</ListItem>
            <ListItem>refmt (for Reason)</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
