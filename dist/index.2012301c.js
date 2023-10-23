const t="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",e="nameZh1";//'YOUR_GITHUB_ACCESS_TOKEN';token
// 创建全局变量(当前所在路径)
var n="/";const o=document.getElementById("curryPath"),i=document.getElementById("imageInput"),a=document.getElementById("treeShow"),l=document.getElementById("imgShow");/**
 * 渲染图片
 * author:zh1
 * date:2023年10月23日
 */function r(n){//清理
for(;l.firstChild;)l.removeChild(l.firstChild);//更新
// 使用使用文档片段可以优化批量dom操作
let o=document.createDocumentFragment(),i=`https://api.github.com/repos/${e}/img/contents/${n}`,a={Authorization:`token ${t}`};fetch(i,{headers:a}).then(t=>t.json()).then(t=>{t.forEach(t=>{if("file"==t.type){let e=document.createElement("div");e.className="imgContainer-content-mid-imgShow-item";let n=document.createElement("img");n.width="100%",n.height="100%",n.src=t.download_url,n.setAttribute("download_url",t.download_url),n.setAttribute("name",t.name),n.className="imgContainer-content-mid-imgShow-itemImg",n.alt="点击下载图片",n.addEventListener("click",function(t){// 这里可以定义点击事件的处理逻辑
console.log(t,"图片被点击了");// window.open(index.target.getAttribute('download_url'), '_blank');
let e=document.createElement("a");e.href=t.target.getAttribute("download_url"),e.target="_blank",e.download=t.target.getAttribute("name"),e.click()});let i=document.createElement("span");i.className="imgContainer-content-mid-imgShow-itemTitle",i.textContent=t.name,e.appendChild(n),e.appendChild(i),o.appendChild(e)}}),l.appendChild(o)})}/**
 * 绑定事件 
 * author:zh1
 * date:2023年10月23日
 * */document.getElementById("uploadButton").addEventListener("click",()=>{!/**
 * 增
 * 在guthub仓库中上传文件
 * 地址不存在时候，会自动创建文件夹
 * author:zh1
 * date:2023年10月23日
 */function(o){// 检查用户是否选择了文件
if(0===i.files.length){console.log("请先选择要上传的图像文件");// 如果没有选择文件，显示提示并终止操作
return}if("/"==o){console.log("请先选择文件夹");return}let a=i.files[0],l=new FormData;// 获取用户选择的第一个图像文件
l.append("file",a);let c=new FileReader;// 创建 FileReader 对象，用于读取文件内容
c.readAsDataURL(a),c.onload=function(){let i=c.result.split(",")[1];// 获取Base64编码后的文件内容
// 使用 fetch 方法向 GitHub 的 API 端点发送 PUT 请求，将图像文件内容上传到指定的 GitHub 仓库
fetch(`https://api.github.com/repos/${e}/img/contents/${o}/${a.name}`,{method:"PUT",headers:{Authorization:`token ${t}`},body:JSON.stringify({message:"Upload image",content:i,branch:"master"})}).then(t=>t.json())// 解析响应的 JSON 数据
.then(t=>{let e=t.content.download_url;// 提取图像的下载链接
// 显示图片链接给用户
alert("上传成功，图片链接："+e),// 更新
r(n)}).catch(t=>{console.error(t)})}}(n)}),// add('img/icon');
// del('img/1.jpg');
// search();
// getShaForFile('img/1.jpg');
// searchTree('');
// console.log(index, 'from test')
// 非树结构
function(i){// const path = ''; // 设置为空以获取整个仓库内容，或指定路径以获取特定目录
// 构建 API 请求的 URL
let l=`https://api.github.com/repos/${e}/img/contents/img`,c={Authorization:`token ${t}`},d=document.createDocumentFragment();// 发起 GET 请求获取仓库内容
fetch(l,{headers:c}).then(t=>t.json()).then(t=>{t.forEach(t=>{if("dir"==t.type){let e=document.createElement("div");e.textContent=t.name,e.setAttribute("path",t.path),e.className="imgContainer-content-left-foldeNode",// 点击文件夹时间
e.addEventListener("click",function(t){let e=t.target.getAttribute("path");n=e,o.textContent=e,r(e)}),d.appendChild(e)}}),a.appendChild(d)}).catch(t=>console.error("发生错误：",t))}(0);//# sourceMappingURL=index.2012301c.js.map

//# sourceMappingURL=index.2012301c.js.map
