import React from 'react'
import '../components/grid_folder/grid.css'
import Layout from '../components/layout.js'
import Image from '../components/image.js'

const Grid = () => (

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
</Layout>
)
export default Grid;
