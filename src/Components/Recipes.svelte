<script>
  export let recipeData = {};
  const { HEADING, ALL_RECIPES, RECIPE_LIST } = recipeData;
</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="dinners" class="section">
  <div class="container text-center">
    <h1>{HEADING}</h1>
    <div class="row section-body">
      {#each RECIPE_LIST as list}
        <div class="col-md-3 service">
          <img src={list.URL} alt={list.LABEL} class="service-img" />
          <a href={list.LINK}><p>{list.LABEL}</p></a>
        </div>
      {/each}
    </div>
  </div>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>
  .service-img {
    width: 50px;
    height: 50px;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  
  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: none;
    color: black;
    letter-spacing: 3px; 
  }

  p {
    font-size: 12px;
  }

  .service h4 {
    padding: 5px;
    margin-top: 25px;
    text-transform: uppercase;
  }

  .title {
    text-transform: uppercase;
  }

  .title::before {
    content: "";
    background: linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
    height: 5px;
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    transform: translateY(60px);
  }

  .title::after {
    content: "";
    background: linear-gradient(90deg, #0072ff 0%, #00d4ff 100%);
    height: 10px;
    width: 50px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    display: block;
    transform: translateY(14px);
  }

  section .btn-primary {
    box-shadow: none;
    padding: 8px 25px;
    border: none;
    background-color: #DBE4DF;
  }
</style>