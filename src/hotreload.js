import React from 'react';

import { Heading, ListItem, Appear, List, Slide, Text } from 'spectacle';
import notes from './hotreloadNotes';

export default (images, video) => [
  <Slide>
    {notes['slide1']}
    <Heading size={1} fit textColor="secondary">
      Hot-reloading {'\u{1F525}'}
    </Heading>
  </Slide>,
  <Slide bgColor="secondary" className="slide-content--video">
    {notes['slide2']}
    <video style={{ maxWidth: '100%' }} src={video.hotReload} autoPlay />
  </Slide>,
  <Slide>
    {notes['slide3']}
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
  </Slide>,
  // <Slide bgColor="secondary" className="slide-content--video">
  //   <video style={{ maxWidth: '100%' }} src={video.jestWatch} autoPlay />
  // </Slide>,
];
