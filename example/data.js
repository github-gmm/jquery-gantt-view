var ganttData = [
	{
		id: 1, name: "Feature 1", series: [
			{ name: "Planned", start: new Date(2010,00,01,12,20,00), end: new Date(2010,00,03,18,20,00) },
      { name: "Actual", start: new Date(2010,00,02), end: new Date(2010,00,05), color: "rgb(253, 91, 42)",
        series: [
          { name: "Jack", start: new Date(2010,00,02), end: new Date(2010,00,05), color: "rgb(100, 237, 247)" }
        ]
      },
      { name: "Rose", start: new Date(2010,00,02), end: new Date(2010,00,05), color: "rgb(253, 91, 42)" }
		]
	}, 
	{
		id: 2, name: "Feature 2", series: [
			{ name: "Planned", start: new Date(2010,00,05), end: new Date(2010,00,20) },
			{ name: "Actual", start: new Date(2010,00,06), end: new Date(2010,00,17), color: "rgb(253, 91, 42)" },
      { name: "Projected", start: new Date(2010,00,06), end: new Date(2010,00,17), color: "rgb(253, 91, 42)" }
		]
	}, 
	{
		id: 3, name: "Feature 3", series: [
			{ name: "Planned", start: new Date(2010,00,11), end: new Date(2010,01,03) },
			{ name: "Actual", start: new Date(2010,00,15), end: new Date(2010,01,03), color: "rgb(253, 91, 42)" }
		]
	}, 
	{
		id: 4, name: "Feature 4", series: [
			{ name: "Planned", start: new Date(2010,01,01), end: new Date(2010,01,03) },
			{ name: "Actual", start: new Date(2010,01,01), end: new Date(2010,01,05), color: "rgb(253, 91, 42)" }
		]
	},
	{
		id: 5, name: "Feature 5", series: [
			{ name: "Planned", start: new Date(2010,02,01), end: new Date(2010,03,20) },
			{ name: "Actual", start: new Date(2010,02,01), end: new Date(2010,03,26), color: "rgb(253, 91, 42)" }
		]
	}, 
	{
		id: 6, name: "Feature 6", series: [
			{ name: "Planned", start: new Date(2010,00,05), end: new Date(2010,00,20) },
			{ name: "Actual", start: new Date(2010,00,06), end: new Date(2010,00,17), color: "rgb(253, 91, 42)" },
			{ name: "Projected", start: new Date(2010,00,06), end: new Date(2010,00,20), color: "rgb(253, 91, 42)" }
		]
	}, 
	{
		id: 7, name: "Feature 7", series: [
			{ name: "Planned", start: new Date(2010,00,11), end: new Date(2010,01,03) }
		]
	}, 
	{
		id: 8, name: "Feature 8", series: [
			{ name: "Planned", start: new Date(2010,01,01), end: new Date(2010,01,03) },
			{ name: "Actual", start: new Date(2010,01,01), end: new Date(2010,01,05), color: "rgb(253, 91, 42)" }
		]
	}
];