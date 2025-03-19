// Datafeed implementation
import Datafeed from './datafeed.js';

window.tvWidget = new TradingView.widget({
	symbol: 'Bitfinex:BTC/USD',             // 默认交易对
	interval: '1D',                         // 默认周期为日线
	fullscreen: true,                       // 全屏显示
	container: 'tv_chart_container',        // 图表容器
	datafeed: Datafeed,
	library_path: '../charting_library_cloned_data/charting_library/',
	locale: 'zh',                           // 设置为中文
	disabled_features: ['header_symbol_search'], // 禁用顶部搜索框
	enabled_features: ['study_templates'],   // 启用研究模板
});
