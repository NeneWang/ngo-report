import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Resources',
    Svg: require('@site/static/img/resources.svg').default,
    description: (
      <>
        We explain how to get access to resources in easy-to-understand human terms.
      </>
    ),
  },
  {
    title: 'Collaborate',
    Svg: require('@site/static/img/circled.svg').default,
    description: (
      <>
        Collaborate and communicate with other Non-Profit Organizations
      </>
    ),
  },
  {
    title: 'Trends',
    Svg: require('@site/static/img/trends.svg').default,
    description: (
      <>
        Bi-Monthly report of the latest trends to help your organization grow!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
