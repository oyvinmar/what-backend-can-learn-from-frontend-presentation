import React from 'react';

import { CodePane, Heading, List, ListItem, Slide } from 'spectacle';

export default (images, video) => [
  <Slide transition={['zoom']}>
    <Heading size={1} fit textColor="secondary">
      Snapshot Testing {'\u{1F4F8}'}
    </Heading>
  </Slide>,
  <Slide transition="fade">
    <CodePane
      lang="javascript"
      source={`
expect(object).toEqual(?)
    `}
      margin="20px auto"
      padding="0 1em"
    />
  </Slide>,
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
  </Slide>,
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
  </Slide>,
  <Slide transition="fade">
    <CodePane
      lang="javascript"
      source={`
expect(object).toMatchSnapshot();
    `}
      margin="20px auto"
      padding="0 1em"
    />
  </Slide>,
  <Slide bgColor="secondary" className="slide-content--video">
    <video style={{ maxWidth: '100%' }} src={video.writeSnapshot} autoPlay />
  </Slide>,
  <Slide bgColor="secondary" className="slide-content--video">
    <video style={{ maxWidth: '100%' }} src={video.updateSnapshot} autoPlay />
  </Slide>,
  <Slide>
    <Heading size={3} textColor="secondary">
      Benefits
    </Heading>
    <List>
      <ListItem>Supersimple regression testing</ListItem>
      <ListItem>Easy to compare large object (i.e. React Components)</ListItem>
      <ListItem>Makes tedious testing fun</ListItem>
    </List>
  </Slide>,
  <Slide>
    <Heading size={1} fit lineHeight="2" textColor="secondary">
      Backend alternatives
    </Heading>
    <Heading textAlign="center" textColor="secondary">
      ?
    </Heading>
  </Slide>,
];
