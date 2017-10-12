import React from 'react';

import { BlockQuote, Heading, ListItem, List, Quote, Slide } from 'spectacle';

import notes from './prettierNotes';

export default (images, video) => [
  <Slide transition="zoom">
    {notes['slide1']}
    <Heading size={1} textColor="secondary">
      Prettier {'\u{2728}'}
    </Heading>
  </Slide>,
  <Slide bgColor="secondary" textColor="primary">
    {notes['slide2']}
    <BlockQuote>
      <Quote>An opinionated Code Formatter</Quote>
    </BlockQuote>
  </Slide>,
  <Slide
    className="slide__bg-image"
    bgSize="contain"
    bgRepeat="no-repeat"
    bgColor="#2d2d2d"
    bgImage={images.prettierLint}>
    {notes['slide3']}
  </Slide>,
  <Slide
    className="slide__bg-image"
    bgSize="contain"
    bgRepeat="no-repeat"
    bgColor="#2d2d2d"
    bgImage={images.prettierFormat}>
    {notes['slide4']}
  </Slide>,
  <Slide bgColor="secondary" className="slide-content--video">
    {notes['slide5']}
    <video
      style={{ maxWidth: '100%' }}
      src={video.prettierEditorExample}
      autoPlay
    />
  </Slide>,
  <Slide bgColor="secondary" className="slide-content--video">
    {notes['slide6']}
    <video
      style={{ maxWidth: '100%' }}
      src={video.prettierEditorJsxExample}
      autoPlay
    />
  </Slide>,
  <Slide>
    {notes['slide7']}
    <Heading size={3} textColor="secondary">
      Benefits
    </Heading>
    <List>
      <ListItem>No manual (time consuming) formatting</ListItem>
      <ListItem>Stops all debates over style</ListItem>
      <ListItem>Big benefit for newcomers to a codebase</ListItem>
    </List>
  </Slide>,
  <Slide>
    {notes['slide8']}
    <Heading size={1} fit textColor="secondary">
      Backend alternatives
    </Heading>
    <List>
      <ListItem>gofmt (for Go)</ListItem>
      <ListItem>refmt (for Reason)</ListItem>
    </List>
  </Slide>,
];
