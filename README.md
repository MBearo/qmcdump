# qmcdump

一个网页版的QQ音乐解码器（qmcflac/qmc0/qmc3 转 flac/mp3），仅为个人学习参考用

## 使用

不能直接双击文件打开index.html使用，不支持file协议

如果本机有node.js

```shell
npm install @mbears/web-server -g
cd qmcdump
web-server
```

然后浏览器访问 http://localhost:3000

如果没有node.js可以使用任意web服务启动index.html

## 参考

[qmcdump](https://github.com/MegrezZhu/qmcdump)