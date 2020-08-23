<script>
  export let showData = {};
  const { HEADING, TITLE, IMAGE_URL, SHOWS_LIST } = showData;
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->

<section id="shows" class="section">
  <div class="container text-center">
    <h1>{HEADING}</h1>
    <p>Click on the show to see the setlist over at phish.net</p>
    <div class="row section-body">
      {#each SHOWS_LIST as list}
        <a href={list.link} target="_blank">
        <div class="color-card">
          <h4>{list.date}</h4>
          <p class="top">{list.venue}</p>
          <p class="bottom">{list.location}</p>
        </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>
  a {
    text-decoration: none;
    color: black;
  }

  .color-card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    margin: 1rem;
    padding-top: 15px;
    width: 200px;
    height: 160px;
    padding: 15px;
    background-color: #fcfcfc;
  }

  .color-card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

  .top {
    margin-bottom: 0rem;
    color: grey;
  }

  .bottom {
    color: grey;
  }

  a:hover {
    color: black;
    text-decoration: none;
  }
</style>