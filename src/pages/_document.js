import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
              <script src="https://cdn.tailwindcss.com"></script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
