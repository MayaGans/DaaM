<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
  
  export let barData = {};
  const { SHOWS_LIST } = barData;


  /* 
  let data = barData.SHOWS_LIST.map(value => value.date)
                               .map(value => value.substring(0, 4))
                               .reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null));
  */


  let el;

  let data = [
    {date: "1989", count: 1, year: ["1989-01-01"]},
    {date: "1990", count: 0 , year: []},
    {date: "1991", count: 0 , year: []},
    {date: "1992", count: 0 , year: []},
    {date: "1993", count: 0 , year: []},
    {date: "1994", count: 1 , year: ["1994-07-08"]},
    {date: "1995", count: 1 , year: ["1995-06-19"]},
    {date: "1996", count: 0 , year: []},
    {date: "1997", count: 1 , year: ["1997-07-21"]},
    {date: "1998", count: 0 , year: []},
    {date: "1999", count: 1 , year: ["1999-07-23"]},
    {date: "2000", count: 0 , year: []},
    {date: "2003", count: 0 , year: []},
    {date: "2004", count: 0 , year: []},
    {date: "2009", count: 0 , year: []},
    {date: "2010", count: 1 , year: ["2010-08-07"]},
    {date: "2011", count: 1 , year: ["2011-08-15"]},
    {date: "2012", count: 3 , year: ["2012-08-31", "2012-08-19", "2012-09-01"]},
    {date: "2013", count: 2 , year: ["2013-07-26", "2013-10-20"]},
    {date: "2014", count: 1 , year: ["2014-07-27"]},
    {date: "2015", count: 3 , year: ["2015-08-22", "2015-08-12", "2015-09-06"]},
    {date: "2016", count: 1 , year: ["2016-10-28"]},
    {date: "2017", count: 4 , year: ["2017-07-25", "2017-01-15", "2017-07-28", "2017-09-01"]},
    {date: "2018", count: 3 , year: ["2018-08-03", "2018-12-29", "2018-10-26"]},
    {date: "2019", count: 2 , year: ["2019-07-09", "2019-07-14"]}
]

// we are appending SVG first
  
  onMount(() => {

    var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("color", "black")
    .style("background-color", "#DBE4DF")
    .style("font-size", "12px")

    let color = "white"
    
    var margin = {top: 20, right: 25, bottom: 30, left: 25},
    width = 600 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

    let x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

    let y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.count)]).nice()
    .range([height, 0])

    let xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom + 35})`)
    .call(d3.axisBottom(x).tickFormat(i => data[i].date).tickSizeOuter(0))
  
    var svg = d3.select(el).append("svg")
     .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

  const g = svg.append("g")
  
  g
    .selectAll("rect")
    .data(data)
    .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.count))
      .attr("height", function(d) { return height - y(d.count); })
      .attr("width", x.bandwidth())
      .style('fill',function(d) {
        if(d.count > 0) {
        return "#DBE4DF";
    } else {
        return "black";
    }
})
.on('mouseover', function (d, i) { 
  tooltip.html(d.year.join("<br/>"))
  return tooltip.style("visibility", "visible")
})
.on('mouseout', function (d, i) { return tooltip.style("visibility", "hidden") })
.on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-20)+"px").style("left",(d3.event.pageX+20)+"px");})

     
 //create a new empty selection for the labels
 //then use normal d3 data join pattern
  // you can fiddle to get the position and text correctly formatted
  g
    .selectAll("labels")
    .data(data)
    .join("text")
      .text(d => Math.round(d.count))
      .attr("text-anchor", "center")
      .attr("x", (d, i) => x(i) + 7)
      .attr("y", d => y(d.count) + 12)
      .attr("font-family", "sans-serif")
      .attr("font-size", "9px")
      .attr("fill", "black")
      .attr("font-family", "Raleway")
      .attr("font-weight", "500")

  svg.append("g")
      .call(xAxis)
      .attr("font-size", "7px")
      .attr("fill", "#DBE4DF")
      .attr("color", "#DBE4DF")
      .attr("font-family", "Raleway")
});

</script>

<style>

  .chart {
    padding-bottom: 50px;
    padding-top: 50px;
    background-color: black;
  }

  .containd3 {
    color: #DBE4DF;
    text-align: center;
    background-color: black;
    padding-top: 50px;
  }
</style>

<section id="metrics" class="containd3">
  <h3>Annual Distribution</h3>
<div bind:this={el} class="chart"></div>
</section>