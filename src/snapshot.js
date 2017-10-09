import React from 'react';

import { CodePane, Heading, Slide } from 'spectacle';
import notes from './snapshotNotes';

export default (images, video) => [
  <Slide>
    {notes['slide1']}
    <Heading size={1} fit textColor="secondary">
      Snapshot Testing {'\u{1F4F8}'}
    </Heading>
  </Slide>,
  <Slide>
    {notes['slide2']}
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
    {notes['slide3']}
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
    {notes['slide4']}
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
    {notes['slide5']}
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
    {notes['slide6']}
    <video style={{ maxWidth: '100%' }} src={video.writeSnapshot} autoPlay />
  </Slide>,
  <Slide bgColor="secondary" className="slide-content--video">
    {notes['slide7']}
    <video style={{ maxWidth: '100%' }} src={video.updateSnapshot} autoPlay />
  </Slide>,
  <Slide>
    {notes['slide8']}
    <Heading size={1} fit lineHeight="2" textColor="secondary">
      Backend alternatives
    </Heading>
    <Heading textAlign="center" textColor="secondary">
      ?
    </Heading>
  </Slide>,
];
