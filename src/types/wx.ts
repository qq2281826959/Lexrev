interface ConfigParams {
  debug?: boolean, // 开启调试模式,调用的所有 api 的返回值会在客户端 alert 出来，若要查看传入的参数，可以在 pc 端打开，参数信息会通过 log 打出，仅在 pc 端时才会打印。
  appId: string, // 必填，公众号的唯一标识
  timestamp: string, // 必填，生成签名的时间戳
  nonceStr: string, // 必填，生成签名的随机串
  signature: string,// 必填，签名
  jsApiList: Array<string> // 必填，需要使用的 JS 接口列表
}

interface ShareConfigParams {
  title: string, // 分享标题
  desc?: string, // 分享描述
  link: string, // 分享链接，该链接域名或路径必须与当前页面对应的公众号 JS 安全域名一致
  imgUrl: string, // 分享图标
  type?: string, // 分享类型,music、video或link，不填默认为link
  dataUrl?: string, // 如果 type 是music或video，则要提供数据链接，默认string
  success?: () => void // 用户确认分享后执行的回调函数
  cancel?: () => void // 用户取消分享后执行的回调函数
}

export interface Wx {
  addCard: () => void,
  config: (params: ConfigParams) => void,
  updateAppMessageShareData: (params: ShareConfigParams) => void
}