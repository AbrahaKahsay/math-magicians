import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';

function Home() {
  return (
    <div className="home-container">
      <h1 className="heading">Math Magicians</h1>
      <h3>Welcome to our page!</h3>
      <section className="lorem">
        <LoremIpsum p={2} />
      </section>
    </div>
  );
}
export default Home;
