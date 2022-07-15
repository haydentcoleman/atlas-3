import { getNextStaticProps } from '@faustjs/next';
import React from 'react';
import { client } from 'client';
import {
  Main,
  Button,
  Heading,
  SEO,
 
} from 'components';
import styles from 'styles/pages/_signin.module.scss';
import { pageTitle } from 'utils';
const mainBanner = {
    sourceUrl: '/sign-in-screen.jpeg',
    mediaDetails: { width: 1000, height: 800 },
    altText: 'Portfolio Banner',
  };

export default function Page() {
  const { useQuery } = client;
  const generalSettings = useQuery().generalSettings;
  


  return (
    <>
      <SEO
        title={pageTitle(generalSettings)}
        imageUrl={mainBanner?.sourceUrl}
      />
      
      
     
       <Main className={styles.body} >
         <div className="body" background-image: {mainBanner}>
          
            <Main className={styles.box}>
              <div className="box">

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
                      <Button styleType="secondary" href="/home">
                        SIGN IN
                      </Button>
                    </div>
                  </section>
              </div>
            </Main>
                  
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
