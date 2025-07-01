import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />   <Script
        src="https://cdn.tailwindcss.com"
        strategy="afterInteractive" // or 'lazyOnload'
        onLoad={() => {
          console.log('Script has loaded');
          // Initialize script here
        }}
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
