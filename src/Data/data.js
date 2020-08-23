const HEADER = "DaaM";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#shows", label: "Shows" },
  { id: 3, url: "#metrics", label: "Metrics" },
  { id: 4, url: "#dinners", label: "Dinners" }
];
const BANNER_DATA = {
  HEADING: "Dinner and a Movie",
  DECRIPTION:
    "Bringing the joys of Phish tour to your couch",
  TUTORIAL_URL:
    "https://www.youtube.com/user/phish/playlists",
  WATCH_TUTORIAL: "Watch Streams"
};

const RECIPE_DATA = {
  HEADING: "Recipes",
  ALL_RECIPES: "Weekly Recipes",
  RECIPE_LIST: [
    {
      LABEL: "Sue & Trey’s “Between Me and My Mouth” Vegetarian Chili",
      DESCRIPTION: "Venue",
      LINK: "https://phish.com/news/announcing-dinner-and-a-movie-tuesday-evenings/",
      URL: "images/service1.png"
    },
    {
      LABEL: "Hen Of The Wood Mushroom Toast",
      DESCRIPTION: "Venue",
      LINK: "https://phish.com/news/dinner-and-a-movie-ep-2-announced/",
      URL: "images/service1.png"
    },
    {
      LABEL: "Page’s Tuna Fish Sandwich",
      DESCRIPTION: "Venue",
      LINK: "https://phish.com/news/dinner-and-a-movie-ep-3/",
      URL: "images/service1.png"
    },
    {
      LABEL: "(Magna) Meatballs And Tomato Sauce",
      DESCRIPTION: "Venue",
      LINK: "https://phish.com/news/dinner-and-a-movie-ep-5-7-9-19-uncasville-ct/",
      URL: "images/service1.png"
    },
    {
      LABEL: "Grandmoony’s Eggplant Parmigiana",
      DESCRIPTION: "Venue",
      LINK: "https://phish.com/news/dinner-and-a-movie-ep-6-10-28-16-las-vegas-nv/",
      URL: "images/service1.png"
    },
    {
      LABEL: "Cauliflower Vegan Tacos",
      DESCRIPTION: "Venue",
      LINK: "https://phish.com/news/dinner-and-a-movie-ep-7-1-15-17-riviera-maya-mexico/",
      URL: "images/service1.png"
    }
  ]
};

const SHOW_DATA = {
  HEADING: "SHOWS",
  TITLE: "Weekly Shows",
  IMAGE_URL: "images/network.png",
  SHOWS_LIST: [
  {
    date: "2012-08-31", 
    venue: "Dick’s Sporting Goods Park", 
    location: "Commerce City, Colorado", 
    link: "https://phish.net/setlists/phish-august-31-2012-dicks-sporting-goods-park-commerce-city-co-usa.html"
  },
  {
    date: "2014-07-27", 
    venue: "Merriweather Post Pavilion", 
    location: "Columbia, MD", 
    link: "https://phish.net/setlists/phish-july-27-2014-merriweather-post-pavilion-columbia-md-usa.html"
  },
  {
    date: "2017-07-25", 
    venue: "Madison Square Garden", 
    location: "New York City, NY", 
    link: "https://phish.net/setlists/phish-july-25-2017-madison-square-garden-new-york-ny-usa.html"
  },
  {
    date: "2015-08-22", 
    venue: "Magnaball", 
    location: "Watkins Glen, NY", 
    link: "https://phish.net/setlists/phish-august-22-2015-watkins-glen-international-watkins-glen-ny-usa.html"
  },
  {
    date: "2019-07-09", 
    venue: "Mohegan Sun Arena", 
    location: "Uncasville, CT", 
    link: "https://phish.net/setlists/phish-july-09-2019-mohegan-sun-arena-uncasville-ct-usa.html"
  },
  {
    date: "2016-10-28", 
    venue: "MGM Grand Garden Arena", 
    location: "Las Vegas, NV", 
    link: "https://phish.net/setlists/phish-october-28-2016-mgm-grand-garden-arena-las-vegas-nv-usa.html"
  },
  {
    date: "2017-01-15", 
    venue: "Riviera Maya", 
    location: "Quintana Roo, Mexico", 
    link: "https://phish.net/setlists/phish-january-15-2017-barcel-maya-beach-riviera-maya-quintana-roo-mexico.html"
  },
  {
    date: "2018-08-03", 
    venue: "Verizon Amphitheatre", 
    location: "Alpharetta, GA",
    link: "https://phish.net/setlists/phish-august-03-2018-verizon-wireless-amphitheatre-at-encore-park-alpharetta-ga-usa.html"
  },
  {
    date: "1997-07-21", 
    venue: "GTE Virginia Beach Amphitheater", 
    location: "Virginia Beach, VA",
    link: "https://phish.net/setlists/phish-july-21-1997-virginia-beach-amphitheater-virginia-beach-va-usa.html"
  },
  {
    date: "2018-12-29", 
    venue: "Madison Square Garden", 
    location: "New York City, NY", 
    link: "https://phish.net/setlists/phish-december-29-2018-madison-square-garden-new-york-ny-usa.html"
  },
  {
    date: "2013-07-26", 
    venue: "The Gorge Amphitheatre", 
    location: "George, WA", 
    link: "https://phish.net/setlists/phish-july-26-2013-gorge-amphitheatre-george-wa-usa.html"
  },
  {
    date: "1995-06-19", 
    venue: "Deer Creek Music Center", 
    location: "Noblesville, IN", 
    link: "https://phish.net/setlists/phish-june-19-1995-deer-creek-music-center-noblesville-in-usa.html"
  },
  {
    date: "2015-08-12", 
    venue: "The Mann Center", 
    location: "Philadelphia, PA", 
    link: "https://phish.net/setlists/phish-august-12-2015-the-mann-center-for-the-performing-arts-philadelphia-pa-usa.html"
  },
  {
    date: "2010-08-07", 
    venue: "The Greek Theatre", 
    location: "Berkeley, CA", 
    link: "https://phish.net/setlists/phish-august-07-2010-william-randolph-hearst-greek-theatre-berkeley-ca-usa.html"
  },
  {
    date: "1989-05-01", 
    venue: "Universal Joint", 
    location: "Northampton, MA", 
    link: "https://phish.net/setlists/phish-may-01-1989-pearl-street-ballroom-northampton-ma-usa.html"
  },
  {
    date: "2019-07-14", 
    venue: "Alpine Valley Music Theatre", 
    location: "East Troy, WI", 
    link: "https://phish.net/setlists/phish-july-14-2019-alpine-valley-music-theatre-east-troy-wi-usa.html"
  },
  {
    date: "2013-10-20", 
    venue: "Hampton Coliseum", 
    location: "Hampton, VA", 
    link: "https://phish.net/setlists/phish-october-20-2013-hampton-coliseum-hampton-va-usa.html"
  },
  {
    date: "2017-07-28", 
    venue: "Madison Square Garden", 
    location: "New York City, NY", 
    link: "https://phish.net/setlists/phish-july-28-2017-madison-square-garden-new-york-ny-usa.html"
  },
  {
    date: "1994-07-08", 
    venue: "Great Woods", 
    location: "Mansfield, MA", 
    link: "https://phish.net/setlists/phish-july-08-1994-great-woods-center-for-the-performing-arts-mansfield-ma-usa.html"
  },
  {
    date: "2018-10-26", 
    venue: "Allstate Arena", 
    location: "Rosemont, IL", 
    link: "https://phish.net/setlists/phish-october-26-2018-allstate-arena-rosemont-il-usa.html"
  },
  {
    date: "2012-08-19", 
    venue: "Bill Graham Civic Auditorium", 
    location: "San Francisco, CA", 
    link: "https://phish.net/setlists/phish-august-19-2012-bill-graham-civic-auditorium-san-francisco-ca-usa.html"
  },
  {
    date: "2012-08-19", 
    venue: "UIC Pavilion", 
    location: "Chicago. IL", 
    link: "https://phish.net/setlists/phish-august-19-2012-bill-graham-civic-auditorium-san-francisco-ca-usa.html"
  },
  ]
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  RECIPE_DATA,
  SHOW_DATA
};
export default MOCK_DATA;
