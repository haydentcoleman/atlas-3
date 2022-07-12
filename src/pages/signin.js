import { getNextStaticProps } from '@faustjs/next';
import React from 'react';
import { client } from 'client';
import {
  Main,
  Button,
  Heading,
  SEO,
  FeaturedImage
} from 'components';
import styles from 'styles/pages/_signin.module.scss';
import { pageTitle } from 'utils';
const mainBanner = {
    sourceUrl: '/static/banner.jpeg',
    mediaDetails: { width: 300, height: 150 },
    altText: 'Portfolio Banner',
  };
const MyFeaturedImage = () => (
  <FeaturedImage image={mainBanner} width={300} height={1500} />
);
export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  


  return (
    <>
      <SEO
        title={pageTitle(generalSettings)}
        imageUrl={mainBanner?.sourceUrl}
      />

      
        <Main className={styles.box}>

          <div className="box">
              <FeaturedImage
                className={styles['featured-image']}
                image={MyFeaturedImage}
                priority
              />
              <section className="hero text-center">
                <Heading className={styles.heading} level="h1">
                  SIGN IN
                </Heading>
                <div className="form__input-group">
                  <input type="text" className="form__input" autoFocus placeholder="Username or email"></input>
                </div>
                <div className="form__input-group">
                  <input type="password" className="form__input" autoFocus placeholder="Password"></input>

                </div>
                <div className={styles.actions}>
                  <Button styleType="secondary" href="/signin">
                    SIGN IN
                  </Button>
                </div>
              </section>
          </div>
        </Main>
      
    </>
  );
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
