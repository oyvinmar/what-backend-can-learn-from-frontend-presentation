import React from 'react';

import {
  BlockQuote,
  Deck,
  Heading,
  ListItem,
  Appear,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

export default (images, video) => [
  <Slide>
    <Heading size={1} textColor="secondary">
      Prettier {'\u{2728}'}
    </Heading>
  </Slide>,
  <Slide bgColor="secondary" textColor="primary">
    <BlockQuote>
      <Quote>An opinionated Code Formatter</Quote>
    </BlockQuote>
  </Slide>,
  <Slide
    className="slide__bg-image"
    bgSize="contain"
    bgRepeat="no-repeat"
    bgColor="#2d2d2d"
    bgImage={images.prettierLint}
  />,
  <Slide
    className="slide__bg-image"
    bgSize="contain"
    bgRepeat="no-repeat"
    bgColor="#2d2d2d"
    bgImage={images.prettierFormat}
  />,
  <Slide bgColor="secondary" className="slide-content--video">
    <video
      style={{ maxWidth: '100%' }}
      src={video.prettierEditorExample}
      autoPlay
    />
  </Slide>,
  <Slide bgColor="secondary" className="slide-content--video">
    <video
      style={{ maxWidth: '100%' }}
      src={video.prettierEditorJsxExample}
      autoPlay
    />
  </Slide>,
  <Slide>
    <Heading size={3} textColor="secondary">
      Benefits
    </Heading>
    <List>
      <ListItem>No manual (time consuming) formatting</ListItem>
      <ListItem>Stops all debates over style</ListItem>
      <ListItem>Tremendous benefit for newcomers to a codebase</ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading size={1} fit textColor="secondary">
      Backend alternatives
    </Heading>
    <List>
      <ListItem>gofmt (for Go)</ListItem>
      <ListItem>refmt (for Reason)</ListItem>
    </List>
  </Slide>,
];
