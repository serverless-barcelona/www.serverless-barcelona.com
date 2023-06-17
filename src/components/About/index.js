import React from 'react';
import clsx from 'clsx';
import {useColorMode} from '@docusaurus/theme-common';
import styles from './index.module.css';

const Users = [
  {
    title: 'Simone Zennaro',
    Pic: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    social: {
      github: 'https://github.com/simone-zennaro',
      linkedin: 'https://www.linkedin.com/in/simonezennaro/',
    }
  },
  {
    title: 'Enric Soler',
    Pic: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    social: {
      github: 'https://github.com/MaDDoGo',
      linkedin: 'https://www.linkedin.com/in/enricsolerrastrollo/',
    }    
  },
  {
    title: 'Adrian Rico',
    Pic: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    social: {
      github: 'https://github.com/ricosega',
      linkedin: 'https://www.linkedin.com/in/adrianseguirico/',
    }    
  },
  {
    title: 'Eduard Bargues',
    Pic: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    social: {
      github: 'https://github.com/EduardBargues',
      linkedin: 'https://www.linkedin.com/in/eduardbargues/',
    }    
  },  
];

function User({Pic, title, social, description}) {
  const {colorMode, setColorMode} = useColorMode();
  const githubLogo = require(`@site/static/img/github-${colorMode === 'dark' ? 'light' : 'dark'}.svg`).default;
  const linkedinLogo = require(`@site/static/img/linkedin.png`).default;  
  return (
    <div className={clsx('col margin-bottom--xl col--6')}>
      <div className="text--center">
        <Pic className={styles.pic} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className={styles.social}>
          <a href={social.github}>
            <img
              src={githubLogo}
              alt="GitHub"
            />
          </a>
          <a href={social.linkedin}>
            <img
              src={linkedinLogo}
              alt="LinkedIn"
            />
          </a>
        </div>        
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {Users.map((props, idx) => (
            <User key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
