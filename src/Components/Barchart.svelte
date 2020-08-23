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
    {date: "1989", count: 1},
    {date: "1990", count: 0},
    {date: "1991", count: 0},
    {date: "1992", count: 0},
    {date: "1993", count: 0},
    {date: "1994", count: 1},
    {date: "1995", count: 1},
    {date: "1996", count: 0},
    {date: "1997", count: 1},
    {date: "1998", count: 0},
    {date: "1999", count: 0},
    {date: "2000", count: 0},
    {date: "2003", count: 0},
    {date: "2004", count: 0},
    {date: "2009", count: 0},
    {date: "2010", count: 1},
    {date: "2012", count: 3},
    {date: "2013", count: 2},
    {date: "2014", count: 1},
    {date: "2015", count: 2},
    {date: "2016", count: 1},
    {date: "2017", count: 3},
    {date: "2018", count: 3},
    {date: "2019", count: 2}
]

// we are appending SVG first
  
  onMount(() => {

    let color = "white"
    
    var margin = {top: 20, right: 25, bottom: 30, left: 40},
    width = 700 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

    let x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1)

    let y = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.count)]).nice()
    .range([height - margin.bottom, margin.top])



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
});
     
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
      .attr("font-size", "11px")
      .attr("fill", "black");

  svg.append("g")
      .call(xAxis)
      .attr("font-size", "7px")
      .attr("fill", "#DBE4DF")
      .attr("color", "#DBE4DF")


});
</script>

<style>

  .chart {
    padding-bottom: 150px;
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
  <h1>Annual Distribution</h1>
<div bind:this={el} class="chart"></div>
</section>