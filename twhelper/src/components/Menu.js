import Link from "next/link";

export default function Menu() {
    return (
        <nav className="navbar navbar-expand-lg bg-primary fixed-top" data-bs-theme="dark">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Topwar Helper</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav me-auto"> 
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">정보</a>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" href="/information/base">기지 정보</Link>
                                {/* <Link className="dropdown-item" href="/information/decor">장식 정보</Link> */}
                                {/* <Link className="dropdown-item" href="/information/hero">영웅 정보</Link> */}
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" href="/information/job">전문 직업 강화</Link>
                                <Link className="dropdown-item" href="/information/formation-perk">군진 특성</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" href="/information/kartz-spec">카르츠 몬스터 정보</Link>
                                <Link className="dropdown-item" href="/information/kartz-rank">카르츠 순위 현황</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">계산기</a>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" href="/calculator/vital">체력 회복 속도 계산기</Link>
                                {/* <Link className="dropdown-item" href="/calculator/gathering">채집 속도 계산기</Link> */}
                                <Link className="dropdown-item" href="/calculator/skill">전속 조각 계산기</Link>
                                <Link className="dropdown-item" href="/calculator/value-pack">특별패키지 계산기</Link>
                                {/* <div className="dropdown-divider"></div>/ */}
                                {/* <a className="dropdown-item">Separated link</a> */}
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">시뮬레이터</a>
                            <div className="dropdown-menu">
                                <Link className="dropdown-item" href="/simulator/titan-research">타이탄제작</Link>
                                <Link className="dropdown-item" href="/simulator/titan-refine">타이탄재련</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" href="/simulator/random">랜덤추첨기</Link>
                                {/* <Link className="nav-link" href="/simulator/hero">데미지계산기</Link> */}
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/emoji">이모티콘</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/developer">개발자</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}