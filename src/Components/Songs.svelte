<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';

  let el;
  let sng = "a";
  let scoops = "AC/DC Bag";

  export const initialData = [
    {x: 5.56, y: 1, group: "AC/DC Bag", year: "1989-05-01"},
    {x: 6.51, y: 1, group: "AC/DC Bag", year: "1994-07-08"},
    {x: 9.01, y: 1, group: "AC/DC Bag", year: "1995-06-19"},
    {x: 6.56, y: 1, group: "AC/DC Bag", year: "2010-08-07"},
    {x: 7.16, y: 1, group: "AC/DC Bag", year: "2013-07-26"},
    {x: 5.44, y: 1, group: "AC/DC Bag", year: "2015-08-12"},

    {x: null, y: 1, group: "David Bowie", year: "1989-05-01"},
    {x: 23.43, y: 1, group: "David Bowie", year: "1995-06-19"},
    {x: 18.18, y: 1, group: "David Bowie", year: "1997-07-21"},
    {x: 11.26, y: 1, group: "David Bowie", year: "2012-08-19"},
    {x: 13.09, y: 1, group: "David Bowie", year: "2013-07-26"},
    {x: 13.36, y: 1, group: "David Bowie", year: "2017-01-15"},

    {x: 6.54, y: 1, group: "Free", year: "2012-08-19"},
    {x: 6.34, y: 1, group: "Free", year: "2014-07-27"},
    {x: 8.57, y: 1, group: "Free", year: "2015-08-12"},
    {x: 11.12, y: 1, group: "Free", year: "2017-07-28"},
    {x: 7.13, y: 1, group: "Free", year: "2018-08-03"},

    {x: null, y: 1, group: "Possum", year: "1989-05-01"},
    {x: 14.16, y: 1, group: "Possum", year: "1995-06-19"},
    {x: 8.30, y: 1, group: "Possum", year: "2013-07-26"},
    {x: 8.05, y: 1, group: "Possum", year: "2015-08-22"},
    {x: 9.43, y: 1, group: "Possum", year: "2017-01-15"},
    {x: 8.47, y: 1, group: "Possum", year: "2018-10-26"},

    {x: 23.46, y: 1, group: "Tweezer", year: "2013-10-20"},
    {x: 14.37, y: 1, group: "Tweezer", year: "2014-07- d27"},
    {x: 17.36, y: 1, group: "Tweezer", year: "2015-08-22"},
    {x: 12.08, y: 1, group: "Tweezer", year: "2017-01-15"},
    {x: 16.26, y: 1, group: "Tweezer", year: "2018-08-03"},
    {x: 20.13, y: 1, group: "Tweezer", year: "2018-10-26"},
    {x: 26.88, y: 1, group: "Tweezer", year: "2018-12-29"},

    {x: 15.45, y: 1, group: "You Enjoy Myself", year: "1989-05-01"},
    {x: 19.46, y: 1, group: "You Enjoy Myself", year: "1994-07-08"},
    {x: 24.39, y: 1, group: "You Enjoy Myself", year: "1995-06-19"},
    {x: 19.26, y: 1, group: "You Enjoy Myself", year: "2012-08-19"},
    {x: 19.09, y: 1, group: "You Enjoy Myself", year: "2012-08-31"},
    {x: 21.32, y: 1, group: "You Enjoy Myself", year: "2014-07-27"},
    {x: 17.55, y: 1, group: "You Enjoy Myself", year: "2019-07-14"}
]

  let data = initialData;

onMount(() => {
  makeChart()
	});
// we are appending SVG first
  
const makeChart = () => {

 var margin = {top: 20, right: 60, bottom: 30, left: 60},
    width = 700 - margin.left - margin.right,
    height = 200 - margin.top - margin.bottom;

  var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("color", "#DBE4DF")

 let x = d3.scaleLinear()
    .domain(d3.extent(data, d => d.x)).nice()
    .range([margin.left, width - margin.right])

  let y = d3.scaleLinear()
    .domain(d3.extent(data, d => d.y)).nice()
    .range([height - margin.bottom, margin.top])

  let xAxis = g => g
    .attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).ticks(width / 50))
    .call(g => g.select(".domain").remove())
    .call(g => g.append("text")
        .attr("x", width)
        .attr("y", margin.bottom)
        .attr("fill", "#DBE4DF")
        .attr("text-anchor", "end")
        .text(data.x))
    const svg = d3.select(el)
      .append("svg")
      .attr("viewBox", [0, 0, width, height]);

  svg.append("g")
      .call(xAxis)
      .attr("font-family", "Raleway")

  svg.append("g")
      .attr("stroke-width", 1.5)
    .selectAll("circle")
    .data(data)
    .join("circle")
      .attr("cx", d => x(d.x))
      .attr("cy", d => y(d.y))
      .attr("r", 3)
      .attr("fill", "#DBE4DF")
      .attr("color", "#DBE4DF")
      .on('mouseover', function (d, i) {
      d3.select(this).transition()
        .duration('50')
        .attr("r", 5)
        .attr('opacity', '.85')
        .attr("fill", "white")
        .attr("color", "white")

      tooltip.text(d.year); 
      return tooltip.style("visibility", "visible")
      
    })

    // Setting things back to normal after tool tip
    .on('mouseout', function (d, i) {
      d3.select(this).transition()
        .duration('50')
        .attr("r", 3)
        .attr('opacity', '1')
        .attr("fill", "#DBE4DF")
        .attr("color", "#DBE4DF")

      return tooltip.style("visibility", "hidden")
    })
    .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-20)+"px").style("left",(d3.event.pageX+20)+"px");})

  svg.append("g")
      .attr("font-size", 5)
    .selectAll("text")
    .data(data)
    .join("text")
      .attr("dy", "0.35em")
      .attr("x", d => x(d.x) + 7)
      .attr("y", d => y(d.y))
      .text(d => d.name)
      .attr("fill", "#DBE4DF")
      .attr("color", "#DBE4DF")
}

const updateChart = () => {

  data = initialData.filter(function (el) {
    return el.group === scoops
  });

	// get the chart div
	// if it has contents clear them
	var div = document.getElementsByClassName("chart2"); 
	if (div.length > 0) div[0].innerHTML = "";
	// make chart inside
	makeChart()
}
	
	$: scoops, updateChart();

</script>

<style>
    .chart2 {
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

  .selected_song {
    color: white;
    text-align: left !important;
  }

  .float-container {
    height: 500px;
    background-color: black;
    padding-bottom: 50px;
    text-align: left;
}

.float-child-1 {
  width: 80%;
    float: left;
    padding: 20px;
    height: 100%;
    background-color: black;
}  

.float-child-2 {
  width: 20%;
    float: left;
    padding: 20px;
    height: 100%;
    background-color: black;
}  
</style>

<section id="map" class="containd3">
  <h3>Song Lengths</h3>
  <p>Explore Most Commonly Played Songs</p>

  <div class="float-container">

    <div class="float-child-1">
      <div bind:this={el} class="chart2"></div>
      </div>
  
  <div class="float-child-2">
  <label class="selected_song">
    <input type=radio bind:group={scoops} value={"AC/DC Bag"}>
    AC/DC Bag
  </label>
  <br/>
  <label class="selected_song">
    <input type=radio bind:group={scoops} value={"David Bowie"}>
    David Bowie
  </label>
  <br/>
  <label class="selected_song">
    <input type=radio bind:group={scoops} value={"Free"}>
    Free
  </label>
  <br/>
  <label class="selected_song">
    <input type=radio bind:group={scoops} value={"Possum"}>
    Possum
  </label>
  <br/>
  <label class="scoop">
    <input type=radio bind:group={scoops} value={"Tweezer"}>
    Tweezer
  </label>
  <br/>
  <label class="scoop">
    <input type=radio bind:group={scoops} value={"You Enjoy Myself"}>
    You Enjoy Myself
  </label>
</div>

</div>

</section>