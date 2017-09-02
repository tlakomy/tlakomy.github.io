// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet, S,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  markdown: require("../assets/markdown.png"),
  egnyteLogo: require("../assets/egnyte-logo.png"),
  tlakomy: require("../assets/tlakomy.jpg"),
  cpu13percent: require("../assets/cpu13percent.png"),
  mobileSearches: require("../assets/mobileSearches.png"),
  networkDevTools: require("../assets/networkDevTools.png"),
  bookshelf: require("../assets/bookshelf.png"),
  coverage: require("../assets/coverage.png"),
  treeshaking: require("../assets/treeshaking.png"),
  reactbg: require("../assets/reactbg.png"),
  fiber: require("../assets/fiber.png"),
  osmaniTweet: require("../assets/osmaniTweet.png"),
  devReactProd: require("../assets/devReactProd.jpg"),
  noReact: require("../assets/noReact.png"),
  prodReact: require("../assets/prodReact.png"),
  reactOutdated: require("../assets/reactOutdated.png"),
  reactClass: require("../assets/reactClass.png"),
  reactClassHighlight: require("../assets/reactClassHighlight.png"),
  npmProptypes: require("../assets/npmProptypes.png"),
  babelReactOptimize: require("../assets/babelReactOptimize.png"),
  runtime: require("../assets/runtime.jpg"),
  reactPerfTools: require("../assets/reactPerfTools.png"),    
  whyUpdate: require("../assets/whyUpdate.png"),      
  panda: require("../assets/panda.png"),     
  reactInline: require("../assets/reactInline.png"),      
  profiling: require("../assets/profiling.png"),      
  splitting: require("../assets/splitting.png"),     
  inception: require("../assets/inception.png"),     
};

preloader(images);

const theme = createTheme({
  primary: "#019A95"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Load it faster
          </Heading>
          <Heading size={1} fit caps>
             improving React apps loading time and performance
          </Heading>
          <Text textSize="1em" caps margin="20px 0px 0px" bold>Tomasz Łakomy, Software Engineer @ Egnyte</Text>
        </Slide>
        <Slide maxWidth={1400} bgColor="black" transition={["fade"]}>
          <Image src={images.egnyteLogo.replace("/", "")}/>
        </Slide>
        <Slide bgColor="black" transition={["zoom"]}>
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Disclaimer
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Motivation
          </Heading>
        </Slide>
        <Slide maxWidth={1400} bgColor="black" transition={["fade"]}>
          <Image src={images.cpu13percent.replace("/", "")} height="300px"/>
        </Slide>
        <Slide maxWidth={1400}>
          <BlockQuote>
            <Quote italic textColor="black">
              VS Code uses 13% CPU when focused and idle, draining battery. This is likely due to the blinking cursor rendering. I think CPU usage when focused-and-idle could ideally be near-0%.
            </Quote>
          </BlockQuote>
        </Slide>
        <Slide maxWidth={1400}>
          <BlockQuote>
            <Quote italic textColor="black">
              Your users won’t have $3000 MacBooks.
            </Quote>
            <Cite>Paulo Coelho</Cite>
          </BlockQuote>
        </Slide>
        <Slide maxWidth={1400} bgColor="black" transition={["zoom"]}>
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Mobile <S type="strikethrough">first</S> only
          </Heading>
        </Slide>
        <Slide maxHeight={900} maxWidth={1400} bgColor="black" transition={["slide"]}>
          <Image src={images.mobileSearches.replace("/", "")} height="900px"/>
        </Slide>
        <Slide bgColor="black" transition={["zoom"]}>
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Most people don't have 4G
          </Heading>
        </Slide>
        <Slide maxHeight={900} maxWidth={1400} bgColor="black" transition={["slide"]}>
          <Image src={images.networkDevTools.replace("/", "")} height="900px"/>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            Parsing JavaScript on mobile is costly
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            There’s no single way to optimize, every app is different
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            The best code is no code
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["slide"]} bgImage={images.bookshelf.replace("/", "")} bgDarken={0.5}>
          <Heading size={2} caps fit textColor="white">
            Users, not code
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            Ship less assets (fonts, images, code)
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            Code coverage (Chrome 59+)
          </Heading>
        </Slide>
        <Slide maxHeight={900} maxWidth={2000} bgColor="black" transition={["slide"]}>
          <Image src={images.coverage.replace("/", "")} height="700px"/>
        </Slide>
        <Slide maxWidth={1400} transition={["slide"]} bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Minimize
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["slide"]} bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Babili
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/class.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide maxWidth={1400} transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/uglify.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide maxWidth={1400} transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/babili.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            Ship less libraries
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom", "fade"]} bgColor="primary">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/lodash.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            Webpack tree shaking
          </Heading>
        </Slide>
        <Slide maxHeight={900} maxWidth={2000} bgColor="black" transition={["slide"]}>
          <Image src={images.treeshaking.replace("/", "")} height="600px"/>
        </Slide>
        <Slide maxWidth={1400} transition={["slide"]} bgImage={images.reactbg.replace("/", "")} bgDarken={0.5}>
          <Heading size={2} caps fit textColor="white">
            React-specific optimizations
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            React is fast by default + Fiber!
          </Heading>
        </Slide>
        <Slide maxHeight={900} maxWidth={1400} bgColor="black" transition={["slide"]}>
          <Image src={images.fiber.replace("/", "")} height="900px"/>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            Ship React for production
          </Heading>
        </Slide>
        <Slide maxHeight={900} maxWidth={1400} bgColor="black" transition={["slide"]}>
          <Image src={images.osmaniTweet.replace("/", "")} height="500px"/>
        </Slide>
        <Slide maxHeight={900} maxWidth={2000} transition={["slide"]}>
          <Image src={images.devReactProd.replace("/", "")} height="900px"/>
        </Slide>
        <Slide maxHeight={900} maxWidth={2000} transition={["slide"]}>
          <Layout style={{"flex-direction": "column"}}>
            <Fill>
              <Image src={images.noReact.replace("/", "")} height="200px"/>
            </Fill>
            <Fill>
              <Image src={images.reactOutdated.replace("/", "")} height="200px"/>
            </Fill>
            <Fill>
              <Image src={images.prodReact.replace("/", "")} height="200px"/>
            </Fill>
          </Layout>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="black">
              Remove propTypes from production
            </Heading>
          </Appear>
          <Appear fid="2">
            <Text textSize="1em" caps margin="20px 0px 0px" bold>(can be risky)</Text>
          </Appear>
        </Slide>
        <Slide maxHeight={900} maxWidth={2000}>
          <Appear fid="1">
            <Image src={images.reactClass.replace("/", "")} height="900px"/>
          </Appear>
          <Appear fid="1">
            <Image src={images.reactClassHighlight.replace("/", "")} height="900px"/>
          </Appear>
        </Slide>
        <Slide>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/minified.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide maxHeight={900} maxWidth={1400} bgColor="black" transition={["slide"]}>
          <Image src={images.npmProptypes.replace("/", "")} height="500px"/>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Appear fid="1">
              <Text textSize="1em" caps margin="20px 0px 0px" bold>Before:</Text>
          </Appear>
          <Appear fid="2">
            <Text textSize="1em" textColor="white" margin="20px 0px 0px" bold>app.fe302cb3ee26d775c717.js  240 kB    0, 2  [emitted]</Text>
          </Appear>
          <Appear fid="3">
              <Text textSize="1em" caps margin="20px 0px 0px" bold>After:</Text>
          </Appear>
          <Appear fid="4">
            <Text textSize="1em" textColor="white" margin="20px 0px 0px" bold>app.595bddb462990656d636.js  230 kB    0, 2  [emitted]</Text>
          </Appear>
          <Appear fid="4">
            <Heading size={2} caps fit textColor="black">
              5% less code
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/noProptypes.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            babel-react-optimize
          </Heading>
        </Slide>
        <Slide maxHeight={900} maxWidth={2000} bgColor="black" transition={["slide"]}>
          <Image src={images.babelReactOptimize.replace("/", "")} height="600px"/>
        </Slide>
        <Slide maxWidth={1400} transition={["slide"]} bgImage={images.runtime.replace("/", "")} bgDarken={0.5}>
          <Heading size={2} caps fit textColor="white">
            Runtime
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            React perf tools - let’s get wasted
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            npm i --save-dev react-addons-perf
          </Heading>
        </Slide>
        <Slide maxHeight={900} maxWidth={2000} transition={["slide"]}>
          <Image src={images.reactPerfTools.replace("/", "")} height="900px"/>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            npm i --save-dev why-did-you-update
          </Heading>
        </Slide>
        <Slide maxHeight={900} maxWidth={2000} transition={["slide"]}>
          <Image src={images.whyUpdate.replace("/", "")} height="900px"/>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            Render as little as possible
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["slide"]} bgImage={images.panda.replace("/", "")} bgDarken={0}></Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            Use shouldComponentUpdate
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            Use pure components
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            Inline React Elements in production
          </Heading>
        </Slide>
        <Slide maxHeight={900} maxWidth={2000} transition={["slide"]}>
          <Image src={images.reactInline.replace("/", "")} height="900px"/>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            React component profiling (Chrome/IE)
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["slide"]} bgImage={images.profiling.replace("/", "")} bgDarken={0}></Slide>
        <Slide maxWidth={1400} transition={["slide"]} bgImage={images.splitting.replace("/", "")} bgDarken={0}>
          <Heading size={2} caps fit textColor="white">
            Code Spliting
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            Single minified app.js
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            Separate app.js and vendor.js
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["zoom"]}>
          <Heading size={2} caps fit>
            Different bundles for different routes
          </Heading>
        </Slide>
        <Slide maxWidth={1400} transition={["slide"]} bgImage={images.inception.replace("/", "")} bgDarken={0}>
          <Heading size={2} fit textColor="white">
            We need to go deeper
          </Heading>
        </Slide>
        <Slide bgColor="black" transition={["zoom"]}>
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Dynamic import()
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="black" textColor="primary">
          <List>
            <Appear><ListItem>Currently in stage 3 of TC39 process</ListItem></Appear>
            <Appear><ListItem>Supported by Webpack 2/3</ListItem></Appear>
            <Appear><ListItem>Allows for dynamic “function-like” imports in code</ListItem></Appear>
            <Appear><ListItem>Returns a promise</ListItem></Appear>
            <Appear><ListItem>No more downloading whole library X because one component needs it</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="black" transition={["zoom"]}>
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Dynamic imports & React loadable
          </Heading>
        </Slide>
        <Slide bgColor="black" transition={["zoom"]}>
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Questions?
          </Heading>
        </Slide>
        <Slide bgColor="black" transition={["zoom"]}>
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Thank you! (Follow me @tlakomy)
          </Heading>
        </Slide>
      </Deck>
    );
  }
}