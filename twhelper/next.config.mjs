/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,//🚨 Strict Mode 비활성화
    output: "export", //정적 사이트로 변환
    basePath: "", //커스텀 도메인일 경우 비워두고 아니면 github repository 명 작성
    trailingSlash: true,//정적 파일 링크 문제 방지
};

export default nextConfig;
