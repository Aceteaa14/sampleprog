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
      
      <h1>About</h1>
      Professional website design for businesses and shops makes branding and <br />
      selling online more manageable. Website is optimized with search engines, <br />
      compatible with mobile devices, elegant interface, convenient, and easy to <br />
      change according to your own style.
      <br />
      <br />
      At Nextech Creators, we use professional web design technology,<br />
       fast web design with only four necessary steps.

       
    </div>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h1 className={utilStyles.headingLg}>All That You Need, We Have</h1>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id,  title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
             
            </small>
          </li>
          ))}
        </ul>
      </section>
    </about>
  )
}