import { useState } from "react";

function App() {
  const [firstArg, setFirstArg] = useState(1);
  const [secondArg, setSecondArg] = useState(1);

  const result = window.native.sum(firstArg, secondArg);

  return (
    <>
      <label className="font-bold">
        First arg:
        <input
          value={firstArg}
          onChange={(e) => setFirstArg(Number(e.target.value))}
        />
      </label>
      <label>
        Second arg:
        <input
          value={secondArg}
          onChange={(e) => setSecondArg(Number(e.target.value))}
        />
      </label>
      <label>Result: {result}</label>
      <div className="w-full">
        Scrollbars are an essential component of any website that contains
        lengthy content. They provide users with a way to navigate through the
        content with ease. While browsers come with default scrollbar styles,
        they may not always match the design of your website. This is where CSS
        scrollbar selectors come in. There are multiple CSS pseudo-elements that
        allows us to customize elements scrollbar on WebKit and Blink based
        browsers. Here's a quick reminder of the available pseudo-elements:
        ::-webkit-scrollbar — the entire scrollbar. ::-webkit-scrollbar-thumb —
        the draggable scrolling handle. ::-webkit-scrollbar-track — the track
        (progress bar) of the scrollbar ::-webkit-scrollbar-corner — the bottom
        corner of the scrollbar, where both horizontal and vertical scrollbars
        meet. This is often the bottom-right corner of the browser window. You
        can add these pseudo-elements to any element that has content which is
        longer than the space reserved for the element. Note: Elements overflow
        property must be set to scroll. Othervice no scrollbar is displayed.
        It's worth noting that the selectors mentioned above only work in Blink
        and WebKit based browsers like Google Chrome and Safari. For other
        browsers, you can use the scrollbar selectors provided by the W3C, such
        as scrollbar-width, scrollbar-color, scrollbar-track-color,
        scrollbar-thumb-color, and scrollbar-face-color. Supported browsers
        include: Chrome Brave Edge Safari Vivaldi Opera In conclusion, CSS
        scrollbar selectors provide web developers with a way to customize the
        appearance of scrollbars and make them match the design of their
        websites. By using these selectors, you can create a more cohesive and
        aesthetically pleasing user experience for your visitors.
      </div>
    </>
  );
}

export default App;
