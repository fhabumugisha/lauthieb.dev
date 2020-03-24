import React, { useState, useEffect } from 'react';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, Item, Content, Stats } from './styles';

export const BlogPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=lauthieb')
      .then(response => response.json())
      .then(posts => {
        setPosts(
          posts.map(({ title, slug, url, social_image, published_at }) => {
            const formattedDate = new Date(published_at).toLocaleString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            });

            return {
              title,
              slug,
              url,
              social_image,
              published_at: formattedDate,
            };
          })
        );
      });
  }, []);

  return (
    <Wrapper as={Container} id="projects">
      <h2>Blog Posts</h2>
      <Grid>
        {posts.map(({ title, slug, url, social_image, published_at }) => (
          <Item key={slug} as="a" href={url} target="_blank" rel="noopener noreferrer">
            <Card>
              <Content>
                <img src={social_image} alt={title} />
                <h4>{title}</h4>
                <p>{published_at}</p>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
