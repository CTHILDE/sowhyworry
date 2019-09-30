import React from "react"
import Layout from "../components/layout"
import "../components/grid_folder/grid.css"
import Image from "../components/image.js"
import "../components/progress_bar.css"


const thirdPage = () => (
/*<Layout>
  /*<div>
    <h1> This is the third page. Spooky.</h1>
      <p> The paragraph text </p>
  </div>
  </Layout>*/
<Layout>
<div class="wrapper">
  <div class="one">
    <p> Hey this is my paragraph text in a grid</p>
  </div>
  <div class="two">
    <Image />
  </div>
  <Image />
  <div class="three">Three</div>
  <div class="four">Four</div>
  <div class="five">Five</div>
  <div class="six">Six</div>
</div>
<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>
</Layout>
)
export default thirdPage;
