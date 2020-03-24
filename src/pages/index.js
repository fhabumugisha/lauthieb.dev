import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, BlogPosts } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <BlogPosts />
    <Projects />
    <Skills />
    <Contact />
  </Layout>
);
