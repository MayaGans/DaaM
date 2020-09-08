<script>
  import { onMount } from "svelte";
  import * as d3 from "d3";
  import { allsongs } from "../Data/songs.js";

  let el;
  let sng = "a";
  let scoops = "AC/DC Bag";

  let data = allsongs;

  onMount(() => {
    makeChart();
  });
  // we are appending SVG first

  const makeChart = () => {
    var tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("z-index", "10")
      .style("visibility", "hidden")
      .style("color", "black")
      .style("background-color", "#DBE4DF")
      .style("font-size", "10px")
      .style("font-family", "Raleway");

    let yAccessor = (d) => d.duration;
    let dateParser = d3.timeParse("%Y-%m-%d");
    let xAccessor = (d) => dateParser(d.date);

    let dimensions = {
      width: 900,
      height: 200,
      margin: {
        top: 15,
        right: 15,
        bottom: 40,
        left: 50,
      },
    };

    dimensions.boundedWidth =
      dimensions.width - dimensions.margin.left - dimensions.margin.right;

    dimensions.boundedHeight =
      dimensions.height - dimensions.margin.top - dimensions.margin.bottom;

    const wrapper = d3
      .select(el)
      .append("svg")
      .attr(
        "viewBox",
        `0 0 ${
          dimensions.width + dimensions.margin.left + dimensions.margin.right
        } ${
          dimensions.height + dimensions.margin.top + dimensions.margin.bottom
        }`
      )
      .append("g")
      .attr(
        "transform",
        "translate(" +
          dimensions.margin.left +
          "," +
          dimensions.margin.top +
          ")"
      );

    let bounds = wrapper
      .append("g")
      .style(
        "transform",
        `translate(${dimensions.margin.left}px, ${dimensions.margin.top}px)`
      );

    let yScale = d3
      .scaleLinear()
      .domain(d3.extent(data, yAccessor))
      .range([dimensions.boundedHeight, 0])
      .nice();

    let xScale = d3
      .scaleTime()
      .domain(d3.extent(data, xAccessor))
      .range([0, dimensions.boundedWidth]);

    let lineGenerator = d3
      .line()
      .x((d) => xScale(xAccessor(d)))
      .y((d) => yScale(yAccessor(d)));

    let line = bounds
      .append("path")
      .attr("d", lineGenerator(data))
      .attr("fill", "none")
      .attr("stroke", "#DBE4DF")
      .attr("stroke-width", 1);

    bounds
      .append("g")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(
        data.filter(function (d) {
          return d.daam === true;
        })
      )
      .join("circle")
      .attr("cx", (d) => xScale(xAccessor(d)))
      .attr("cy", (d) => yScale(yAccessor(d)))
      .attr("r", 7)
      .attr("fill", "#DBE4DF")
      .attr("color", "#DBE4DF")
      .on("mouseover", function (d, i) {
        d3.select(this)
          .transition()
          .duration("50")
          .attr("r", 20)
          .attr("opacity", ".85")
          .attr("fill", "#DBE4DF")
          .attr("color", "#DBE4DF");
        tooltip.text(d.date).attr("font-family", "Raleway");
        return tooltip.style("visibility", "visible");
      })

      // Setting things back to normal after tool tip
      .on("mouseout", function (d, i) {
        d3.select(this)
          .transition()
          .duration("50")
          .attr("r", 7)
          .attr("opacity", "1")
          .attr("fill", "#DBE4DF")
          .attr("color", "#DBE4DF");
        return tooltip.style("visibility", "hidden");
      })
      .on("mousemove", function () {
        return tooltip
          .style("top", d3.event.pageY - 20 + "px")
          .style("left", d3.event.pageX + 20 + "px");
      });

    let yAxisGenerator = d3.axisLeft().scale(yScale);
    let xAxisGenerator = d3.axisBottom().scale(xScale);

    let xAxis = bounds
      .append("g")
      .call(xAxisGenerator)
      .style("transform", `translateY(${dimensions.boundedHeight}px)`)
      .attr("font-family", "Raleway");

    let yAxis = bounds
      .append("g")
      .call(yAxisGenerator)
      .attr("font-family", "Raleway");

    const yAxisLabel = yAxis
      .append("text")
      .attr("x", -dimensions.boundedHeight / 2)
      .attr("y", -dimensions.margin.left + 10)
      .attr("fill", "#DBE4DF")
      .style("font-size", "1.4em")
      .text("Time (minutes)")
      .style("transform", "rotate(-90deg)")
      .style("text-anchor", "middle");
  };

  const updateChart = () => {
    data = allsongs.filter(function (el) {
      return el.song === scoops;
    });

    // get the chart div
    // if it has contents clear them
    var div = document.getElementsByClassName("chart2");
    if (div.length > 0) div[0].innerHTML = "";
    // make chart inside
    makeChart();
  };

  $: scoops, updateChart();
</script>

<style>
  .chart2 {
    padding-bottom: 50px;
    padding-top: 50px;
    background-color: black;
  }

  .containd3 {
    color: #dbe4df;
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
    text-align: left;
  }

  .float-child-1 {
    width: 80%;
    float: left;
    padding: 20px;
    padding-left: 5px;
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
      <div bind:this={el} class="chart2" />
    </div>

    <div class="float-child-2">
      <label class="selected_song">
        <input type="radio" bind:group={scoops} value={'AC/DC Bag'} />
        AC/DC Bag
      </label>
      <br />
      <label class="selected_song">
        <input type="radio" bind:group={scoops} value={'David Bowie'} />
        David Bowie
      </label>
      <br />
      <label class="selected_song">
        <input type="radio" bind:group={scoops} value={'Free'} />
        Free
      </label>
      <br />
      <label class="selected_song">
        <input type="radio" bind:group={scoops} value={'Possum'} />
        Possum
      </label>
      <br />
      <label class="scoop">
        <input type="radio" bind:group={scoops} value={'Tweezer'} />
        Tweezer
      </label>
      <br />
      <label class="scoop">
        <input type="radio" bind:group={scoops} value={'You Enjoy Myself'} />
        You Enjoy Myself
      </label>
    </div>

  </div>

</section>
