Ext.define('CarInfoApp.view.CarInfoListView' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.carInfoListView',
			title: '车辆LED屏信息列表',
			region: "center",
   			border: true,
			frame: true,
			id:'carInfoListGrid',
			store: "CarInfoListStore",
			multiSelect: true,
			viewConfig : {enableTextSelection:true},//grid中的内容能够复制
			stripeRows:true, //表格是否隔行换色，默认为false
			loadMask:true,   //是否在加载数据时显示遮罩效果，默认为false
			selModel: { selType: 'checkboxmodel' }, //在首列實現checkbox，僅此在首列
			columns: [
			{ header: '车辆ID', flex: 0.5, dataIndex: 'id', hidden: true },
			{ header: '企业名称Id', flex: 1, dataIndex: 'blocid', hidden: true },
			{ header: '用户ID', flex: 1, dataIndex: 'userid', hidden: true },
			{ header: '企业名称', flex: 1, dataIndex: 'blocname', sortable: true },
			{ header: '终端设备号', flex:1 , dataIndex: 'terminal', sortable: true },
			{ header: '车牌号', flex: 1, dataIndex: 'carnumber', sortable: true },
			{ header: '车辆状态', flex: 1, dataIndex: 'carstatus', sortable: true , renderer:function(value){
					if(value == 7){
						return "在线";
					}else if(value==1){
						return "长时间离线";
					}else if(value==2){
						return "离线";
					}else if(value==3){
						return "熄火";
					}else if(value==5){
						return "行驶";
					}else if(value==4){
						return "停车";
					}else if(value==6){
						return "报警";
					}else if(value==8){
						return "未定位";
					}
			}},
			{ header: '文本信息', flex: 6, dataIndex: 'textmessage', sortable: true },
			{ header: '文本信息应答时间', flex: 2, dataIndex: 'createtime' }
			],
            tbar:[{
                text:'LED屏信息查询',
                id: '14041001',
                tooltip:'LED屏信息查询',
                iconCls:'common-search-icon',
                action : 'query'
            }],
			bbar : {
				xtype : 'pagingtoolbar',
				store: "CarInfoListStore",   
	            displayInfo: true,   
	            displayMsg: '显示 {0} - {1} 条，共计 {2} 条',   
	            emptyMsg: "没有数据" 
			}
		
});

