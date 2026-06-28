// index.html + vendor/xlsx.full.min.js 를 단일 HTML로 묶습니다.
// 실행: node build_standalone.js  →  dist_전략물자_점검도구.html 생성
const fs=require("fs");
const html=fs.readFileSync(__dirname+"/index.html","utf8");
const lib=fs.readFileSync(__dirname+"/vendor/xlsx.full.min.js","utf8");
// 주의: replace 콜백을 써서 라이브러리 내 '$' 가 특수 패턴으로 해석되는 것을 방지
const out=html.replace(/<script src="vendor\/xlsx\.full\.min\.js"><\/script>/,
  ()=>"<script>\n/* SheetJS xlsx 0.18.5 (vendored inline) */\n"+lib+"\n</"+"script>");
if(out.includes('script src="vendor')) throw new Error("vendor script tag 미치환");
fs.writeFileSync(__dirname+"/dist_전략물자_점검도구.html",out);
console.log("생성 완료: dist_전략물자_점검도구.html ("+(out.length/1024).toFixed(0)+" KB)");
