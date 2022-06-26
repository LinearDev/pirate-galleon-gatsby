import * as React from "react"

import DisplayBox from "../components/DisplayBox"
import Layout from "../components/Layout"

import HeadingBox from "../components/pageFill/HeadingBox"
import PlatesBox from "../components/pageFill/PlatesBox"
import WhatIs from "../components/pageFill/WhatIs"
import Footer from "../components/pageFill/Footer"

// markup
const IndexPage = () => {
  return (
    <Layout>
      <DisplayBox>
        <HeadingBox />
      </DisplayBox>
      <DisplayBox>
        <PlatesBox />
      </DisplayBox>
      <DisplayBox>
        <WhatIs />
      </DisplayBox>
      <Footer />
    </Layout>
  )
}

export default IndexPage;