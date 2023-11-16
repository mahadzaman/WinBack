Highcharts.chart("container", {
    chart: {
        type: "areaspline",
        spacing: [0, 18, 15, 0],
        // width: 100%,
    },
    title: false,
    legend: {
        enabled: false,
    },
    exporting: { enabled: false },
    xAxis: {
        type: "datetime",
        labels: {
            align: "center",
            // useHTML: true,
            style: {
                color: "#737C89",
                fontWeight: "600",
                fontSize: "14px",
            },
        },
        tickLength: 0,
        lineColor: "#E9EEF4",
        lineWidth: 3,
        dateTimeLabelFormats: {
            day: {
                main: "%b %e",
            },
        },
    },
    yAxis: {
        title: false,
        reserveSpace: false,
        gridLineWidth: 0,
        labels: {
            enabled: false,
        },
    },
    tooltip: {
        headerFormat: "",
        backgroundColor: "#F6F8FC",
        borderWidth: 0,
        shadow: "none",
        borderRadius: 12,
        formatter: function () {
            if (this.series.name === "This Week") {
                return (
                    "<b>$" +
                    this.y +
                    " Extra Revenue on " +
                    Highcharts.dateFormat("%e %b %Y", new Date(this.x)) +
                    "</b><br>" +
                    this.series.name
                );
            } else {
                return (
                    "<b>$" +
                    this.y +
                    " Revenue on " +
                    Highcharts.dateFormat("%e %b %Y", new Date(this.x)) +
                    "</b><br>" +
                    this.series.name
                );
            }
        },
    },
    credits: {
        enabled: false,
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0,
        },
        series: {
            marker: {
                enabled: false,
            },
            states: {
                hover: {
                    enabled: false,
                },
            },
            pointStart: Date.UTC(2021, 1, 1),
            pointInterval: 24 * 3600 * 1000, // one day
        },
    },
    series: [
        {
            name: "This Week",
            data: [100, 110, 90, 100, 170, 150, 175],
            color: "#225E66",
        },
        {
            name: "Last Week",
            data: [90, 70, 100, 95, 130, 120, 140],
            color: "#99E3C4",
        },
    ],
});
