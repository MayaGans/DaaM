<script>
  export let navlists = [];
  export let header;
</script>
<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="nav-bar">
  <nav class="navbar navbar-expand-md navbar-dark">
    <a class="navbar-brand company_brand" href="/">
      {header}
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        {#each navlists as list}
          <li class="nav-item">
            <a class="nav-link light-color" href={list.url}>{list.label}</a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
</section>
<!------------------------------------------->
<!----------------STYLE----------------------->
<!------------------------------------------->
<style>
  #nav-bar {
    position: sticky;
    top: 0;
    z-index: 10;
    color: white;
    background-image: linear-gradient(to right, #3ca272, #009e8c, #0098a3, #0090b2, #0085b8, #007bb0, #0071a7, #00679e, #005d8b, #065378, #0d4966, #133f55);
  }

  .navbar {
    padding: 20px !important;
  }

  .navbar-nav li {
    padding: 0 0 0 20px;
  }

  .navbar-nav li a {
    font-weight: 600;
    text-transform: lowercase;
    float: right;
    text-align: left;
  }
</style>