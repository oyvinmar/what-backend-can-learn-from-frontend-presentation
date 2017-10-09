import React from 'react';

import {
  CodePane,
  Layout,
  Fill,
  Heading,
  List,
  ListItem,
  Slide,
  S,
  Text,
} from 'spectacle';
import notes from './babelNotes';

export default (images, video) => [
  <Slide transition={['zoom']}>
    {notes['slide1']}
    <Heading size={1} textColor="secondary">
      Babel {'\u{1F528}'}
    </Heading>
  </Slide>,
  <Slide>
    {notes['slide2']}
    <Heading size={3} textColor="secondary">
      Transpiler
    </Heading>
    <Text>Lets use next generation JavaScript, today.</Text>
  </Slide>,
  //   <Slide maxWidth="none">
  //     <Heading size={3} textColor="secondary">
  //       Template Strings
  //     </Heading>
  //     <Layout>
  //       <Fill>
  //         <CodePane
  //           lang="javascript"
  //           borderRight="5px solid black"
  //           source={`
  // const name = "Bobby Tables";
  // const time = "today";
  // \`Hello $\{name},
  //   how are you $\{time}?\`
  //   `}
  //           margin="20px 5px 20px auto"
  //           padding="0 1em"
  //         />
  //       </Fill>
  //       <Fill>
  //         <CodePane
  //           lang="javascript"
  //           source={`
  // var name = "Bobby Tables";
  // var time = "today";
  // "Hello " + name +
  // ", \\n  how are you " + time + "?";
  //     `}
  //           margin="20px auto 20px 5px"
  //           padding="0 1em"
  //         />
  //       </Fill>
  //     </Layout>
  //   </Slide>,
  <Slide maxWidth="none">
    {notes['slide3']}
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
          margin="20px auto 20px 5px"
          padding="0 1em"
        />
      </Fill>
    </Layout>
  </Slide>,
  <Slide maxWidth="none" className="fontSize-13">
    {notes['slide4']}
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
  nickName: "Little Bobby Tables",
  firstName: "Robert ')",
  lastName: "DROP TABLE Students;--",
}

const {firstName, lastName} = name;
  `}
          margin="20px 5px 20px auto"
          padding="0 0.5em"
        />
      </Fill>
      <Fill>
        <CodePane
          lang="javascript"
          source={`
var name = {
  nickName: "Little Bobby Tables",
  firstName: "Robert \\')",
  lastName: "DROP TABLE Students;--"
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
  <Slide>
    {notes['slide5']}
    <Heading size={3} textColor="secondary">
      Classes
    </Heading>
    <CodePane
      lang="javascript"
      source={`
class Rectangle extends Polygon {
  constructor(height, width) {
    super(height, width);
    this.name = 'Rectangle';
  }

  sayMyName() {
    console.log('Sup! My name is ', this.name + '.');
    super.sayHistory();
  }
}
    `}
      margin="20px auto"
      padding="0 1em"
    />
  </Slide>,
  <Slide maxHeight="none">
    {notes['slide6']}
    <CodePane
      lang="javascript"
      source={`
var Rectangle = function (_Polygon) {
  _inherits(Rectangle, _Polygon);

  function Rectangle(height, width) {
    _classCallCheck(this, Rectangle);
    var _this3 = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this, height, width));
    _this3.name = 'Rectangle';
    return _this3;
  }

  _createClass(Rectangle, [{
    key: 'sayMyName',
    value: function sayMyName() {
      console.log('Sup! My name is ', this.name + '.');
      _get(Rectangle.prototype.__proto__ || Object.getPrototypeOf(Rectangle.prototype), 'sayHistory', this).call(this);
    }
  }]);

  return Rectangle;
}(Polygon);
    `}
      margin="20px auto"
      padding="0 1em"
    />
  </Slide>,
  <Slide bgColor="secondary">
    {notes['slide7']}
    <Text textSize="2.9rem" lineHeight={1.4} textColor="primary">
      We usually name it a "compiler" when it produces a lower-level output than
      the input was.
    </Text>
  </Slide>,
  <Slide>
    {notes['slide8']}}
    <Heading size={3} textColor="secondary">
      Babel is a <S type="strikethrough">Transpiler</S> Compiler
    </Heading>
  </Slide>,
  <Slide>
    {notes['slide9']}
    <Heading size={3} textColor="secondary">
      Benefits
    </Heading>
    <List>
      <ListItem>Can use new features early</ListItem>
      <ListItem>Prevents stagnation</ListItem>
      <ListItem>Userland can influence language direction</ListItem>
      <ListItem>Trivial to extend (i.e. JSX, Types, etc)</ListItem>
    </List>
  </Slide>,
  <Slide>
    {notes['slide10']}
    <Heading size={1} fit lineHeight="2" textColor="secondary">
      Backend alternatives
    </Heading>
    <Heading textAlign="center" textColor="secondary">
      ?
    </Heading>
  </Slide>,
];
