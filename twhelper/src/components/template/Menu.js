import Link from 'next/link';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

export default function Menu() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand as={Link} href="/">Topwar Helper</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <NavDropdown title="정보" id="info-dropdown">
              <NavDropdown.Item as={Link} href="/information/base">기지 정보</NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} href="/information/decor">장식 정보</NavDropdown.Item> */}
              {/* <NavDropdown.Item as={Link} href="/information/hero">영웅 정보</NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} href="/information/job">전문 직업 강화</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/information/formation-perk">군진 특성</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} href="/information/kartz-spec">카르츠 몬스터 정보</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/information/kartz-rank">카르츠 순위 현황</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="계산기" id="calc-dropdown">
              <NavDropdown.Item as={Link} href="/calculator/vital">체력 회복 속도 계산기</NavDropdown.Item>
              {/* <NavDropdown.Item as={Link} href="/calculator/gathering">채집 속도 계산기</NavDropdown.Item> */}
              <NavDropdown.Item as={Link} href="/calculator/skill">전속 조각 계산기</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/calculator/value-pack">특별패키지 계산기</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="시뮬레이터" id="sim-dropdown">
              <NavDropdown.Item as={Link} href="/simulator/titan-research">타이탄제작</NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/simulator/titan-refine">타이탄재련</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} href="/simulator/random">랜덤추첨기</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} href="/emoji">이모티콘</Nav.Link>
            <Nav.Link as={Link} href="/developer">개발자</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
