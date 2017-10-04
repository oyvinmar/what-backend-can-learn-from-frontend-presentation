import React from 'react';

import {
  Appear,
  BlockQuote,
  CodePane,
  Deck,
  Layout,
  Fill,
  Fit,
  Heading,
  List,
  ListItem,
  Quote,
  Slide,
  S,
  Text,
} from 'spectacle';

export default (images, video) => [
  <Slide>
    <Heading size={1} textColor="secondary">
      Babel {'\u{1F528}'}
    </Heading>
  </Slide>,
  <Slide>
    <Heading size={3} textColor="secondary">
      Transpiler
    </Heading>
    <Text>Lets use next generation JavaScript, today.</Text>
  </Slide>,
  <Slide maxWidth="none">
    <Heading size={3} textColor="secondary">
      Template Strings
    </Heading>
    <Layout>
      <Fill>
        <CodePane
          lang="javascript"
          borderRight="5px solid black"
          source={`
const name = "Bobby Tables";
const time = "today";
\`Hello $\{name\},
  how are you $\{time\}?\`
  `}
          margin="20px 5px 20px auto"
          padding="0 1em"
        />
      </Fill>
      <Fill>
        <CodePane
          lang="javascript"
          source={`
var name = "Bobby Tables";
var time = "today";
"Hello " + name +
", \\n  how are you " + time + "?";
    `}
          margin="20px auto 20px 5px"
          padding="0 1em"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide maxWidth="none">
    <Heading size={3} textColor="secondary">
      Arrow functions
    </Heading>
    <Layout>
      <Fill>
        <CodePane
          lang="javascript"
          source={`
const odds = evens
  .map(v => v + 1);
  `}
          margin="20px 5px 20px auto"
          padding="0 1em"
        />
      </Fill>
      <Fill>
        <CodePane
          marginLeft="5px"
          lang="javascript"
          source={`
var odds = evens.map(
  function (v) {
    return v + 1;
  }
);
    `}
          margin="20px auto"
          margin="20px auto 20px 5px"
          padding="0 1em"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide maxWidth="none">
    <Heading size={3} textColor="secondary">
      Destructuring
    </Heading>
    <Layout>
      <Fill>
        <CodePane
          lang="javascript"
          fontSize="1.3rem !important"
          source={`
const name = {
  nickName: 'Little Bobby Tables',
  firstName: \`Robert ')\`,
  lastName: 'DROP TABLE Students;--',
}

const {firstName, lastName} = name;
  `}
          margin="20px 5px 20px auto"
          padding="0 0.5em"
        />
      </Fill>
      <Fill>
        <CodePane
          fontSize="1.3rem !important"
          lang="javascript"
          source={`
var name = {
  nickName: 'Little Bobby Tables',
  firstName: 'Robert \')',
  lastName: 'DROP TABLE Students;--'
};

var firstName = name.firstName,
    lastName = name.lastName;
    `}
          margin="20px auto 20px 5px"
          padding="0 0.5em"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide bgColor="secondary" textColor="primary">
    <BlockQuote>
      <Quote>
        We usually name it a "compiler" when it produces a lower-level output
        than the input was
      </Quote>
    </BlockQuote>
  </Slide>,
  <Slide>
    <Heading size={3} textColor="secondary">
      Babel is a <S type="strikethrough">Transpiler</S> Compiler
    </Heading>
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
