import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import JSProvider from "./providers/JSProvider";
import Menu from "@/components/Menu";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8"></meta>
        <title>Topwar Helper</title>
        <link rel="icon" href="/favicon.ico" sizes="any"></link>
      </head>
      <body>
        <JSProvider>
          <Menu/>
          <div className="row mt-5 pt-5">
            <div className="col-md-2">
              {/* <GoogleAdsVertical dataAdClient="ca-pub-5256661935690588" dataAdSlot="2606768455"/> */}
            </div>
            <div className="col-md-8">
              {children}
            </div>
            <div className="col-md-2">
              {/* <GoogleAdsVertical dataAdClient="ca-pub-5256661935690588" dataAdSlot="8253345796"/> */}
            </div>
          </div>
        </JSProvider>
      </body>
    </html>
  );
}
