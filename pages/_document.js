import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // Check if in production
    const isProduction = process.env.NODE_ENV === 'production';
    const initialProps = await Document.getInitialProps(ctx);
    // Pass isProduction flag back through props
    return { ...initialProps, isProduction };
  }

  // Function will be called below to inject
  // script contents onto page
  setGoogleTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-143508656-1');
      `
    };
  }
  render() {
    const { isProduction } = this.props;
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700"
            rel="stylesheet"
          />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="/static/favicon.ico"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/css/common.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/static/assets/fonts/fonts.css"
          />

          <script
            type="text/javascript"
            src="/static/assets/js/googleTagLoader.js"
          />
        </Head>
        <body>
          {/* previous GTM instance was GTM-M3ZF26T */}
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5V48S4V"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <Main />
          <NextScript />
          {isProduction && (
            <React.Fragment>
              <script
                async
                src="https://www.googletagmanager.com/gtag/js?id=UA-143508656-1"
              />
              {/* We call the function above to inject the contents of the script tag */}
              <script dangerouslySetInnerHTML={this.setGoogleTags()} />
            </React.Fragment>
          )}
        </body>
      </html>
    );
  }
}
