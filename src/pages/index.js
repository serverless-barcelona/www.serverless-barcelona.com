import React , { useEffect } from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Homepage from '@site/src/components/Homepage';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.typewriter}>
        <h1>&gt; {siteConfig.title}</h1>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  // useEffect(() => {
  //   document.querySelector('.navbar').style.display = 'none';
  // }, []);  
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Home page <head />">
      <HomepageHeader />  
      <main>
        <Homepage />
      </main>
    </Layout>
  );
}
