import React from "react"
import Layout from "../components/layout"
import "../components/progress_bar.css"

const fourthPage = () => (
  <Layout>
  <div>
    <h1> This is the fourth page. Spooky.</h1>
      <p> The paragraph text </p>
  </div>
  <div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>
  </Layout>
)
export default fourthPage;
