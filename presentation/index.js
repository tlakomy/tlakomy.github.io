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
  data500Mb: require("../assets/500mbData.png"),
  jsStartup: require("../assets/jsStartup.jpg"),
  globalPhoneSale: require("../assets/globalPhoneSale.png"),
  averageWebsite: require("../assets/averageWebsite.png"),
  shrek: require("../assets/shrek.jpg"),
  shrekAfter: require("../assets/shrekAfter.jpg"),
  responsibility: require("../assets/responsibility.gif"),
  noThrottling: require("../assets/noThrottling.png"),
  throttlingOn: require("../assets/throttlingOn.png"),
  lighthouse: require("../assets/lighthouse.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#019A95"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck contentWidth={1200} transition={["fade"]} theme={theme} transitionDuration={500}>
        <Slide bgColor="black">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Load it faster
          </Heading>
          <Heading size={1} fit caps>
             improving React apps loading time and performance
          </Heading>
          <Image fit src={images.egnyteLogo.replace("/", "")} height="200px"/>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
              Motivation
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Empathy
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Image fit src={images.responsibility.replace("/", "")} height="400px"/>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Tech Bubble 🔮
          </Heading>
        </Slide>
        <Slide>
          <BlockQuote>
            <Quote italic textColor="black">
              Your users won’t have $3000 MacBooks.
            </Quote>
            <Cite>Paulo Coelho</Cite>
          </BlockQuote>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            7.5 bilion people 🌍
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            3.8 bilion Internet users 👩‍💻
          </Heading>
          <Cite>Source: https://www.slideshare.net/wearesocialsg/global-digital-statshot-q3-2017</Cite>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            49% of people are not online (yet!)
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            60% of web traffic comes from mobile devices
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Let's talk about mobile
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            JavaScript on mobile is costly
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Image fit src={images.data500Mb.replace("/", "")} height="600px"/>
          <Cite>Source: Ben Schwarz - Beyond the Bubble: Real world performance @ medium.com</Cite>
        </Slide>
        <Slide bgColor="black">
          <Image fit src={images.jsStartup.replace("/", "")} height="600px"/>
          <Cite>Source: Addy Osmani - JavaScript Start-up Performance @ medium.com</Cite>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Everyone uses Chrome on Android, right?
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit textFont="primary">
            Global smartphone sales Q1 2017
          </Heading>
          <List>
            <Appear><ListItem>Samsung: 78.6 Million</ListItem></Appear>
            <Appear><ListItem>Apple: 51.9 Million</ListItem></Appear>
            <Appear><ListItem>Huawei: 34.1 Million</ListItem></Appear>
            <Appear><ListItem>Oppo: 30.9 Million 😲</ListItem></Appear>
            <Appear><ListItem>Vivo: 25.8 Million</ListItem></Appear>
            <Appear><ListItem>Others: 158.3 Million</ListItem></Appear>
            <Appear><Cite>Source: Ben Schwarz - Beyond the Bubble: Real world performance @ medium.com</Cite></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} caps fit textFont="primary">
            Mobile browser market share worldwide
          </Heading>
          <List>
            <Appear><ListItem>Chrome: 50.62%</ListItem></Appear>
            <Appear><ListItem>Safari: 18.63%</ListItem></Appear>
            <Appear><ListItem>UC Browser: 13.82% 😲</ListItem></Appear>
            <Appear><ListItem>Samsung Internet: 6.61%</ListItem></Appear>
            <Appear><ListItem>Opera: 5.6%</ListItem></Appear>
            <Appear><ListItem>Android: 3.14%</ListItem></Appear>
            <Appear><Cite>Source: http://gs.statcounter.com/browser-market-share/mobile/worldwide/#monthly-201608-201708</Cite></Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            We don't know the average user
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            So let's optimize for everyone!
          </Heading>
        </Slide>
        <Slide bgImage={images.bookshelf.replace("/", "")} bgDarken={0.5}>
          <Heading size={2} caps fit textColor="white">
            Users, not code
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Sheep less assets (fonts, images, code)
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            🐑 less assets (fonts, images, code)
          </Heading>
        </Slide>
        <Slide bgImage={images.shrek.replace("/", "")} bgDarken={0}>
          <Appear fid="1">
            <Text textSize={100} caps bold textColor="black" bgColor="white">
              Meet Shrek
            </Text>
          </Appear>
          <Appear fid="2">
            <Text textSize={60} caps bold textColor="black" bgColor="white">
              (a.k.a. average JS bundle in 2017)
            </Text>
          </Appear>
        </Slide>
        <Slide bgImage={images.shrekAfter.replace("/", "")} bgDarken={0}></Slide>
        <Slide>
          <Heading size={2} caps fit>
            Code coverage (Chrome 59+)
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Image fit src={images.coverage.replace("/", "")} height="500px"/>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Minimize with Babili
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Layout>
            <Fill>
              <CodePane
                textSize={20}
                lang="javascript"
                source={require("raw-loader!../assets/class.example")}
              />
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <CodePane
                textSize={20}
                lang="javascript"
                source={require("raw-loader!../assets/uglify.example")}
              />    
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <CodePane
                textSize={20}
                lang="javascript"
                source={require("raw-loader!../assets/babili.example")}
              />    
            </Fill>
          </Layout>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Webpack tree shaking
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Image src={images.treeshaking.replace("/", "")} height="80%"/>
        </Slide>
        <Slide bgImage={images.reactbg.replace("/", "")} bgDarken={0.5}>
          <Heading size={2} caps fit textColor="white">
            React-specific optimizations
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Ship React for production
          </Heading>
        </Slide>
        <Slide bgImage={images.devReactProd.replace("/", "")}></Slide>
        <Slide bgColor="black">
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
        <Slide>
          <Appear fid="1">
            <Heading size={1} caps fit textColor="black">
              Remove propTypes from production
            </Heading>
          </Appear>
          <Appear fid="2">
            <Text textSize="1em" caps margin="20px 0px 0px" bold>(can be risky)</Text>
          </Appear>
        </Slide>
        <Slide>
          <CodePane
            lang="javascript"
            textSize={15}
            source={require("raw-loader!../assets/component.example")}
          />
        </Slide>
        <Slide>
          <CodePane
            lang="javascript"
            textSize={20}
            source={require("raw-loader!../assets/minified.example")}
          />
        </Slide>
        <Slide bgColor="black">
          <Image src={images.npmProptypes.replace("/", "")} height="650px"/>
        </Slide>
        <Slide>
          <Appear fid="1">
              <Text textSize="2em" caps margin="20px 0px 0px" bold>Before:</Text>
          </Appear>
          <Appear fid="2">
            <Text textSize="2em" textColor="white" margin="20px 0px 0px" bold>app.fe302cb3ee26d775c717.js  240 kB</Text>
          </Appear>
          <Appear fid="3">
              <Text textSize="2em" caps margin="20px 0px 0px" bold>After:</Text>
          </Appear>
          <Appear fid="4">
            <Text textSize="2em" textColor="white" margin="20px 0px 0px" bold>app.595bddb462990656d636.js  230 kB</Text>
          </Appear>
          <Appear fid="4">
            <Heading size={2} caps fit margin="20px 0px 0px" textColor="black">
              🔥 5% less code 🔥
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <CodePane
            lang="javascript"
            source={require("raw-loader!../assets/noProptypes.example")}
            textSize={20}
          />
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            babel-react-optimize
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Image src={images.babelReactOptimize.replace("/", "")} height="600px"/>
          <Cite>Source: James Kyle - https://github.com/thejameskyle/babel-react-optimize</Cite>
        </Slide>
        <Slide bgImage={images.runtime.replace("/", "")} bgDarken={0.5}>
          <Heading size={2} caps fit textColor="white">
            Runtime
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            React perf tools & let’s get wasted
          </Heading>
          <Heading size={1} fit>
            npm i --save-dev react-addons-perf
          </Heading>
        </Slide>
        <Slide>
          <Image src={images.reactPerfTools.replace("/", "")} height="475px"/>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Why did you update?
          </Heading>
          <Heading size={1} fit>
            npm i --save-dev why-did-you-update
          </Heading>
        </Slide>
        <Slide margin={0}>
          <Image src={images.whyUpdate.replace("/", "")} height="600px"/>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            Render as little as possible
          </Heading>
        </Slide>
        <Slide bgImage={images.panda.replace("/", "")} bgDarken={0}></Slide>
        <Slide>
          <Heading size={2} fit>
            USE shouldComponentUpdate()
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} fit>
            USE pureComponents WITH IMMUTABLE DATA
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit>
            React component profiling (Chrome/IE)
          </Heading>
        </Slide>
        <Slide bgImage={images.profiling.replace("/", "")} bgDarken={0}></Slide>
        <Slide bgImage={images.splitting.replace("/", "")} bgDarken={0.5}>
          <Heading size={2} caps fit textColor="white">
            React Code Spliting
          </Heading>
          <Heading size={2} caps fit textColor="white">
            a.k.a. stop making users wait for unnecessary crap at initial page load
          </Heading>
        </Slide>
        <Slide bgColor="black" textColor="primary">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Dynamic import()
          </Heading>
          <List>
            <Appear><ListItem>Currently in stage 3 of TC39 process</ListItem></Appear>
            <Appear><ListItem>Supported by Webpack 2/3</ListItem></Appear>
            <Appear><ListItem>Allows for dynamic “function-like” imports in code</ListItem></Appear>
            <Appear><ListItem>Returns a promise</ListItem></Appear>
            <Appear><ListItem>No more downloading whole library X because one component needs it</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Dynamic imports & React loadable
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Demo
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Bottom line
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2} caps fit textFont="primary">
            Ship 🐑 less
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Deliver more
          </Heading>
        </Slide>
        <Slide bgColor="black">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Thank you! (Twitter: @tlakomy)
          </Heading>
        </Slide>
      </Deck>
    );
  }
}