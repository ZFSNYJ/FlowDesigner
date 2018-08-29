var obj = {
	"nodeDataArray": [
		{
			"text": "开始",
			"key": "E00001",
			"nodeType": "start",
			"locTop": 494,
			"locLeft": 316,
			"nodeHeight": "70px",
			"nodeWidth": "70px",
			"bgColor": "#2175c4"
		},
		{
			"text": "填写申请单",
			"key": "T00001",
			"nodeType": "comm",
			"locTop": 499,
			"locLeft": 540,
			"nodeHeight": "60px",
			"nodeWidth": "110px",
			"bgColor": "#ccab26"
		},
		{
			"text": "财务部审批",
			"key": "T00002",
			"nodeType": "comm",
			"locTop": 339,
			"locLeft": 540,
			"nodeHeight": "60px",
			"nodeWidth": "110px",
			"bgColor": "#ccab26"
		},
		{
			"text": "总经理审批",
			"key": "T00003",
			"nodeType": "comm",
			"locTop": 179,
			"locLeft": 540,
			"nodeHeight": "60px",
			"nodeWidth": "110px",
			"bgColor": "#ccab26"
		},
		{
			"text": "确认资金",
			"key": "T00005",
			"nodeType": "comm",
			"locTop": 504,
			"locLeft": 779,
			"nodeHeight": "60px",
			"nodeWidth": "110px",
			"bgColor": "#ccab26"
		},
		{
			"text": "结束",
			"key": "E00002",
			"nodeType": "end",
			"locTop": 502,
			"locLeft": 1093,
			"nodeHeight": "70px",
			"nodeWidth": "70px",
			"bgColor": "#ff6161"
		},
		{
			"text": "结束",
			"key": "E00003",
			"nodeType": "end",
			"locTop": 174,
			"locLeft": 1101,
			"nodeHeight": "70px",
			"nodeWidth": "70px",
			"bgColor": "#ff6161"
		},
		{
			"text": "发放资金",
			"key": "T00004",
			"nodeType": "comm",
			"locTop": 342,
			"locLeft": 779,
			"nodeHeight": "60px",
			"nodeWidth": "110px",
			"bgColor": "#ccab26"
		}
	],
	"linkDataArray": [
		{
			"from": "E00001",
			"to": "T00001",
			"routerId": "R00001",
			"label": ""
		},
		{
			"from": "T00001",
			"to": "T00002",
			"routerId": "R00002",
			"label": ""
		},
		{
			"from": "T00002",
			"to": "T00003",
			"routerId": "R00003",
			"label": ""
		},
		{
			"from": "T00005",
			"to": "E00002",
			"routerId": "R00007",
			"label": "同意"
		},
		{
			"from": "T00003",
			"to": "T00004",
			"routerId": "R00005",
			"label": ""
		},
		{
			"from": "T00004",
			"to": "T00005",
			"routerId": "R00006",
			"label": ""
		},
		{
			"from": "T00003",
			"to": "E00003",
			"routerId": "R00008",
			"label": "不同意"
		}
	]
}