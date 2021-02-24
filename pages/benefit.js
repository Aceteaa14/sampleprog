import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <about>
      <div>
      
      <h1>Responsive Web Design</h1>
      <h3>SUPPORT MULTI-DEVICE USERS</h3>
      By ensuring content consistency but showing up with a different layout on 
      each device increases your user experience
      <br/>
      <h3>IMPROVED SEARCH ENGINE RANKINGS</h3>
      With the benefits provided to users from responsive web design, Google has 
      ranked this feature as one of the criteria for evaluating its website
      <br/>
      <h3>ENSURING CONSISTENCY</h3>
      Creating multiple interfaces that apply to all devices accessing the internet 
      will make it difficult to ensure consistency of content and user experience.
      <br/>
      <h3>ABILITY TO DEVELOP, EXPAND IN THE FUTURE</h3>
      When your new device comes out in different sizes, if you design a responsive web 
      design, you are confident in its responsiveness. At the same time, supporting the user 
      experience of accessing the website on the new device.
       
    </div>
      
    </about>
  )
}