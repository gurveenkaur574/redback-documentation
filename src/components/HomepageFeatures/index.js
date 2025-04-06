import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Who We Are',
    Svg: require('@site/static/img/logo.svg').default,
    description: (
      <>
        Redback is a capstone project company within Deakin University. Students work on real-world projects under the guidance of both professional and academic mentors, focusing on creating impactful solutions.
      </>
    ),
  },
  {
    title: 'For Students',
    Svg: require('@site/static/img/docs.svg').default,
    description: (
      <>
        We are currently migrating documentation to this platform. <br></br><br></br>
        You'll soon find detailed documentation for each project, as well as resources on general company operations. Feel free to contribute or modify any project-related content within the guidelines.
      </>
    ),
  },
  {
    title: 'Our Statement',
    Svg: require('@site/static/img/question.svg').default,
    description: (
      <>
        Redback Operations is committed to enhancing fitness experiences through cutting-edge IoT devices. Our goal is to make physical activity smarter, safer, and more enjoyable. We specialize in connected fitness devices and sensor technologies that prevent injury and improve training effectiveness.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
