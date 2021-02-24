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
      
      <h1>Talk with our Designers</h1>
      (832) 486 - 7639
      <br />8390 Bellaire Blvd, Houston TX 77036
      <br />Mon–Sat: 08:00–18:00
   

       
    </div>
      
    </about>
  )
}