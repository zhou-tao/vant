# 更新日志

## 更新内容

### unreleased

`2022-01-17`

**Feature**

- ConfigProvider: 新增 `theme` 属性，用于开启深色模式
- ConfigProvider: 新增 `ConfigProviderTheme` 类型

**Style**

在之前的版本中，Vant 组件有两种色彩风格，一部分采用红色作为主色调，另一部分采用蓝色。为了保持色彩规范的统一，我们在 Vant 4 中对组件的主色调进行了统一，所有组件均采用蓝色作为主色调。

以下组件的默认色值风格由红色调整为蓝色：

- Calendar
- Cascader
- ContactList
- Dialog
- DropdownMenu
- IndexBar
- Sidebar
- Steps
- Tabs

其他：

- ActionBar: 调整 `--van-action-bar-icon-text-color` 变量的默认值为 `--van-text-color`
- AddressEdit: 提交按钮调整为 `primary` 类型
- Button: 默认圆角大小从 `2px` 调整为 `4px`
- Button: 默认按钮的边框颜色调整为 `--van-gray-4`
- Button: 调整 `font-smoothing`，默认使用粗体文字
- Card: 调整 `--van-card-background` 变量的默认值为 `--van-background`
- Card: 调整 `--van-card-price-color` 变量的默认值为 `--van-text-color`
- Card: 调整 `--van-card-desc-color` 变量的默认值为 `--van-text-color-2`
- ContactEdit: 提交按钮调整为 `primary` 类型
- ContactList: 提交按钮调整为 `primary` 类型
- ContactList: 重命名 `--van-contact-list-item-radio-icon-color` 为 `--van-contact-list-radio-color`
- Field: 调整 `--van-field-label-color` 变量的默认值为 `--van-text-color`
- Switch: 移除 `--van-switch-border` 变量
- Switch: 调整 `--van-switch-size` 变量的默认值为 `26px`
- Switch: 调整 `--van-switch-background` 变量的默认值为 `rgba(120, 120, 128, 0.16)`
- Tabbar: 调整 `--van-tabbar-item-text-color` 变量的默认值为 `--van-text-color`
- GridItem: 调整 `--van-grid-item-text-color` 变量的默认值为 `--van-text-color`