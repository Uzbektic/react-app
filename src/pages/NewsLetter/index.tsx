import { Container, Grid } from '@mui/material';
import React from 'react';
import { CustomColors } from '../../theme';
import NewsLetter1Image from '../../assets/images/news-letters/1.png';
import NewsLetter2Image from '../../assets/images/news-letters/2.png';
import NewsLetter3Image from '../../assets/images/news-letters/3.png';
import NewsLetter4Image from '../../assets/images/news-letters/4.png';
import Navbar from '../../components/Navbar';

const NewsLetter = () => {
  return (
    <>
      <Navbar bgPrimary={true} />
      <div style={styles.container}>
        <Container maxWidth="xl">
          <h1
            className="animate__animated animate__bounce"
            style={{ textAlign: 'center' }}
          >
            Our News Letters
          </h1>
        </Container>
      </div>
      <Container maxWidth="xl" sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <div
              style={styles.newsLetterContainer}
              className="animate__animated animate__fadeIn"
            >
              <a href={require('../../pdfs/jan-2023.pdf')} download>
                <img
                  src={NewsLetter2Image}
                  alt="News Letter For January, 2023"
                  style={styles.newsLetterImage}
                />
              </a>

              <p>January, 2023</p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <div
              style={styles.newsLetterContainer}
              className="animate__animated animate__fadeIn"
            >
              <a href={require('../../pdfs/apr-2023.pdf')} download>
                <img
                  src={NewsLetter1Image}
                  alt="News Letter For April, 2023"
                  style={styles.newsLetterImage}
                />
              </a>
              <p>April, 2023</p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <div
              style={styles.newsLetterContainer}
              className="animate__animated animate__fadeIn"
            >
              <a href={require('../../pdfs/aug-2023.pdf')} download>
                <img
                  src={NewsLetter4Image}
                  alt="News Letter For August, 2023"
                  style={styles.newsLetterImage}
                />
              </a>
              <p>August, 2023</p>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <div
              style={styles.newsLetterContainer}
              className="animate__animated animate__fadeIn"
            >
              <a href={require('../../pdfs/sept-2023.pdf')} download>
                <img
                  src={NewsLetter3Image}
                  alt="News Letter For September, 2023"
                  style={styles.newsLetterImage}
                />
              </a>
              <p>September, 2023</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default NewsLetter;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    margin: 0,
    padding: '100px',
    backgroundColor: CustomColors.foregroundColor,
  },
  newsLetterImage: {
    width: '100%',
    height: 350,
  },
  newsLetterContainer: {
    padding: 20,
  },
};
