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
  console.log(data)
  console.log(data.length)

// we are appending SVG first
  
  onMount(() => {
  
    var margin = {top: 20, right: 25, bottom: 30, left: 40},
    width = 700 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
var y = d3.scaleLinear()
          .range([height, 0]);
          
// append the svg object to the body of the page
// append a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select(el).append("svg")
     .attr("viewBox", `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`)
  .append("g")
    .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

  // Scale the range of the data in the domains
  x.domain(data.map(function(d) { return d.date }));
  y.domain([0, d3.max(data, function(d) { return d.count; })]);

  // append the rectangles for the bar chart
  svg.selectAll(".bar")
    .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.date); })
      .attr("width", x.bandwidth())
      .attr("y", function(d) { return y(d.count); })
      .attr("height", function(d) { return height - y(d.count); })
      .attr("fill", "#DBE4DF")

  // add the x Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))

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