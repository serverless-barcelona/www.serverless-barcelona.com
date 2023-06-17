import React from 'react';
import clsx from 'clsx';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './index.module.css';

const Pages = [
  {
    title: 'About',
    command: '$ whoami',
    link: '/about',
    description: (
      <>
        Do you want to know who we are?
      </>
    ),
  },
  {
    title: 'Blog',
    command: '$ cd /blog',
    link: '/blog',
    description: (
      <>
        Late or replay?
        Here you can see our previous meetups.
      </>
    ),
  },  
  {
    title: 'Events',
    command: '$ whereis',
    link: 'https://www.meetup.com/es-ES/serverless-barcelona/events/',
    description: (
      <>
        Here you will find all our events in a calendar so you never lose the opportunity
        to attend the meetups.
      </>
    ),
  },
];

function Page({title, command, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.fakeMenu}>
        <div className={clsx(styles.fakeButtons,styles.fakeClose)}></div>
        <div className={clsx(styles.fakeButtons,styles.fakeMinimize)}></div>
        <div className={clsx(styles.fakeButtons,styles.fakeZoom)}></div>
      </div>
      <a href={link}><div className={styles.fakeScreen}>
        <div className={styles.typewriter}>
          <p>{command}</p>
        </div>
      </div></a>
      <div className="text--center padding-horiz--md padding-top--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Homepage() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {Pages.map((props, idx) => (
            <Page key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
