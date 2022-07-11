import { getNextStaticProps } from '@faustjs/next';
import React from 'react';
import { client } from 'client';
import {
  Header,
  Footer,
  Main,
  Button,
  Heading,
  SEO,
} from 'components';
import styles from 'styles/pages/_Home.module.scss';
import { pageTitle } from 'utils';
export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  


  return (
    <>
      <SEO
        title={pageTitle(generalSettings)}
      />

      <Header />

      <Main className={styles.box}>
        
        <div className="box">
          
            <section className="hero text-center">
              <Heading className={styles.heading} level="h1">
                SIGN IN
              </Heading>
              <div className={styles.actions}>
                <Button styleType="secondary" href="/signin">
                  SIGN IN
                </Button>
              </div>
            </section>
        </div>
      </Main>

      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Page,
    client,
  });
}
