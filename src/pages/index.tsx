import Head from "next/head";
import Navigation from "../components2/Navigation";

export default function Index() {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <title>Test</title>
      </Head>
      <Navigation />
      <div className="wrapper">
        <h1>Test</h1>
      </div>
    </div>
  );
}