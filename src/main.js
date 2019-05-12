import templateImage from './assets/template.png';

// 请求截图
if (!requestScreenCapture()) {
  toastLog('请求截图失败');
  exit();
}

toastLog('Hello, Auto.js');

sleep(2000);

// 截图并找图
const findResult = findImage(captureScreen(), images.read(templateImage), {
  threshold: 0.8,
});

if (findResult) {
  toast(`找到图啦: ${findResult}`);
} else {
  toast('没有找到该图！');
}
