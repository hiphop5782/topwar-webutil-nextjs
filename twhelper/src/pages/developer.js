"use client";

import TypingArea from "@/components/typing/TypingManager";
import { IoIosSend } from "react-icons/io";

export default function Developer(){

    return (<>
        <div className="row mt-4">
            <div className="col">
                <span className="fs-1">
                    <span className="me-4">우리는</span>
                    <TypingArea data={["Topwar 열정 플레이어들", "3223 Server"]}
                            applyColor="true" listColor ={ ["#0984e3", "#6c5ce7"] }/>
                    <span className="ms-2">입니다</span>
                </span>
            </div>
        </div>
        <hr/>
        <div className="row mt-2">
            <div className="col">
                <a className="btn btn-outline-primary btn-lg w-100 d-flex align-items-center justify-content-center p-4" href="https://open.kakao.com/o/sWjtxvXg">
                    <IoIosSend className="me-2 fs-1"/>
                    <span className="fs-1">이전 문의</span>
                </a>
            </div>
        </div>
        <div className="row mt-4 mb-5 pb-5">
            <div className="col">
                <img src={`/images/screen/s3223.png`} width={"100%"}/>
            </div>
        </div>
        {/* 
        <div className="row mt-4">
            <div className="col-sm-6">
                <div className="card mb-3">
                    <h3 className="card-header">KID³²²³</h3>
                    <div className="card-body">
                        <h5 className="card-title">탑워를 좋아하는 흔한 유저 중 하나</h5>
                        <h6 className="card-subtitle text-muted">주특기 - 시뮬레이션 만들기</h6>
                        <a href="https://open.kakao.com/o/sWjtxvXg" className="btn btn-link">이전 문의</a>
                    </div>
                    <div className="card-body">
                        <p className="card-text">사람 좋고 열정 가득한 2690 서버로 오세요!</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><a href="https://hiphop5782.gitbook.io/lpi-dubu" className="card-link">2690 서버 홍보글 보러가기</a></li>
                    </ul>
                </div>
            </div>
        </div>
        */}
    </>);
}