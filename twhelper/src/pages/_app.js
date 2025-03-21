// pages/_app.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootswatch/dist/sandstone/bootstrap.min.css";
import JSProvider from "@/context/JSProvider";
import dynamic from "next/dynamic";
import { Col, Row } from "react-bootstrap";

const Menu = dynamic(() => import("@/components/template/Menu"), { ssr: false });

export default function MyApp({ Component, pageProps }) {
  return (
    <JSProvider>
      <Menu />
      <Row className="mt-5 pt-5">
        <Col md={2}>
          {/* <GoogleAdsVertical dataAdClient="ca-pub-5256661935690588" dataAdSlot="2606768455"/> */} 
        </Col>
        <Col md={8}>
          <Component {...pageProps} />
        </Col>
        <Col md={2}>
          {/* <GoogleAdsVertical dataAdClient="ca-pub-5256661935690588" dataAdSlot="8253345796"/> */}
        </Col>
      </Row>
    </JSProvider>
  );
}


