import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Events from '@site/src/components/Events';

export default function EventsPage() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Events page <head />">
      <main>
        <Events />
      </main>
    </Layout>
  );
}
