
import { getNextStaticProps } from '@faustjs/next';
import { React, useState} from 'react';
import { client } from 'client';
import {
  Main,
  Heading,
  SEO,
  Button
} from 'components';
import styles from 'styles/pages/_signin.module.scss';
import { pageTitle } from 'utils';
const mainBanner = {
    sourceUrl: '/sign-in-screen.jpeg',
    mediaDetails: { width: 1000, height: 800 },
    altText: 'Portfolio Banner',
  };
  export default function Login() {
    const { useLogin } = client.auth;
    const [usernameEmail, setUserNameEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // eslint-disable-next-line no-unused-vars
    const { login, isLoading, data, error } = useLogin();
  
    const errorMessage = data?.error || error?.message;
    const { useQuery } = client;
    const generalSettings = useQuery().generalSettings;
  return (
    <>
      <SEO
        title={pageTitle(generalSettings)}
        imageUrl={mainBanner?.sourceUrl}
      />
      
      
     
       <Main className={styles.body} background={mainBanner}>
         <div className="body" background-image={mainBanner}>
          <body>
            <Main className={styles.box}>
              <div className="box">

                  <section className="hero text-center">
                    <Heading className={styles.heading} level="h1">
                      SIGN IN
                    </Heading>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();

                        login(usernameEmail, password);
                      }}
                    >
                      <div>
                        <div>
                          <label htmlFor="usernameEmail">Username or Email</label>
                        </div>
                        <div>
                          <input
                            type="text"
                            value={usernameEmail}
                            onChange={(e) => setUserNameEmail(e.target.value)}
                            id="usernameEmail"
                          />
                        </div>

                        <div>
                          <label htmlFor="password">Password</label>
                        </div>
                        <div>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                          />
                        </div>

                        <div>
                          <Button type="submit">Login</Button>
                        </div>
                      </div>

                      {errorMessage ? <p>Error: {errorMessage}</p> : null}
                    </form>
                  </section>
                <Button styleType="primary" href="/home">
                  Skip this step
                </Button>
              </div>
            </Main>
            
          </body>     
          </div>
        </Main>
      
    </>
  );
}

export async function getStaticProps(context) {
  return getNextStaticProps(context, {
    Login,
    client,
  });
}

