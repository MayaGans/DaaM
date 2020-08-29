<script>
  export let bannerData = {};
  const { HEADING, DECRIPTION, TUTORIAL_URL, WATCH_TUTORIAL } = bannerData;
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="banner">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <p><a href="https://www.youtube.com/channel/UCDEPOd0RCvw8iSTqFpSBZLA" target="_blank">Watch Now</a></p>
        <h1>{HEADING}</h1>
        <p>{DECRIPTION}</p>
      </div>
      <div class="col-md-6">
          <img src="images/featured.png" alt="" class="img-fluid" />
        </div>
    </div>
  </div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>

  a {
    text-decoration: none;
    color: #DBE4DF;
  }

  a:hover {
    text-decoration: none;
    color: white;
  }

  section {
    padding-top: 5%;
    background-color: black;
    color: #DBE4DF;
    padding-bottom: 5%;
  }

  h1 {
    font-size: 40px;
    font-weight: 600;
    margin-top: 100px;
    text-transform: uppercase;
  }
</style>