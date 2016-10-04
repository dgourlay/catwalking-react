import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import s from './styles.css';

class HomePage extends React.Component {

  componentDidMount() {
    document.title = 'InterLoop Homepage';
  }

  render() {
    return (
      <div>
        <Header />
        <p className={s.content}>Hello World!</p>
        <Footer />
      </div>
    );
  }

}

export default HomePage;
