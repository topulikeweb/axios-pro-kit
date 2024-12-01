# axios-pro-kit

## 简介
`axios-pro-kit` 是基于 TypeScript 封装的轻量级、可扩展的 Axios 请求工具，简化 API 请求和错误处理流程。

---

## 如何使用
1. **安装 TypeScript**  
   确保项目中已安装 TypeScript 环境。

2. **引入核心文件**  
   将 `src` 文件夹中的所有文件集成到项目中，忽略 `demo` 文件夹。

3. **参考示例代码**  
   如果对用法不熟悉，可以查看 `demo` 文件夹中的示例代码。

---

## 使用示例
```typescript
const [error, response] = await API.getShopList(2);
if (error) {
  console.error("请求错误:", error);
} else {
  console.log("请求成功:", response);
}
