<script>
  import Navbar from "./Components/Navbar.svelte";
  import Banner from "./Components/Banner.svelte";
  import Recipes from "./Components/Recipes.svelte";
  import Shows from "./Components/Shows.svelte";
  import Footer from "./Components/Footer.svelte";
  import DATA from "./Data/data";
  import Barchart from "./Components/Barchart.svelte"
  import Songs from "./Components/Songs.svelte"
</script>

<Navbar navlists={DATA.NAVBAR_DATA} header={DATA.HEADER} />
<Banner bannerData={DATA.BANNER_DATA} />
<Shows showData={DATA.SHOW_DATA} />
<Barchart barData={DATA.SHOW_DATA}/>
<!-- <Songs /> -->
<Recipes recipeData={DATA.RECIPE_DATA} />
<Footer footerData={DATA.FOOTER_DATA} header={DATA.HEADER} />
