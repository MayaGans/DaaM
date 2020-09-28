P<script>
import { listen } from "svelte/internal";

export let showData = {};
const { HEADING, TITLE, IMAGE_URL, SHOWS_LIST } = showData;

export let year = "";
export let newArray = showData.SHOWS_LIST;

const handleInput = (e) => {
  year = e.target.value;
  let test = showData.SHOWS_LIST
  newArray = test.filter(function (el) {
    return el.date.includes(year) 
  });
}

</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->

<section id="shows" class="section">
  <div class="container text-center">
    <h1>{HEADING}</h1>
    <h5>Click on the show to see the setlist over at phish.net</h5>

    <div class="yearinput">
      <label for="year">Year:</label>
      <input id="year" type="text" on:input={handleInput} />
    <div>

    {#if newArray.length == 0}
    <h4 class="noshows">No shows for selected year</h4>
    {:else}
    <div class="row section-body">
      {#each newArray as list}
      <a href={list.link} target="_blank">
        <div class="color-card">
          <p class="episode">{list.ep}</p>
          <h4>{list.date}</h4>
          <p class="top">{list.venue}</p>
          <p class="bottom">{list.location}</p>
        </div>
      </a>
      {/each}
    </div>
    {/if}

  </div>
</section>

<!------------------------------------------->
<!----------------STYLE---------------------->
<!------------------------------------------->
<style>
  a {
    text-decoration: none;
    color: black;
  }

  .episode {
    font-size: 10px;
    padding-bottom: 15px;
    color: grey;
  }

  .yearinput {
    padding-top: 100px;
  }

  .noshows {
    padding-top: 50px;
  }

  .row {
    align-items: center;
    justify-content: center;
  }

  .color-card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 1rem;
    padding-top: 15px;
    width: 200px;
    height: 200px;
    padding: 15px;
    background-color: #fcfcfc;
  }

  .color-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

  .top {
    margin-bottom: 0rem;
    color: grey;
    font-size: 12px;
  }

  .bottom {
    color: grey;
  }

  a:hover {
    color: black;
    text-decoration: none;
  }

</style>