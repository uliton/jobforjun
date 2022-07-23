/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import linkedliImage from '../../images/linkedin.webp';
import douImage from '../../images/dou.webp';

import styles from './Company.module.scss';

export const Company = ({ name, logo, link, linkedin, dou }) => {
  const [status, setStatus] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.name}>
          {name}
        </span>
        <div>
          <img src={logo} alt="logo" className={styles.logoImage} />
        </div>
      </div>
      <hr />
      <a href={link} className={styles.link} rel="noreferrer" target="_blank">
        home page
      </a>
      <div className={styles.footer}>
        <div className={styles.networks}>
          <a href={linkedin} rel="noreferrer" target="_blank">
            <img
              src={linkedliImage}
              alt="LinkedIn"
              className={styles.linkedin}
            />
          </a>
          <a href={dou} rel="noreferrer" target="_blank">
            <img
              src={douImage}
              alt="DOU"
              className={styles.dou}
            />
          </a>
        </div>
        {status
          ? (
            <button
              type="button"
              className={styles.statusDone}
              onClick={() => {
                setStatus(false);
              }}
            >
              done
            </button>
          )
          : (
            <button
              type="button"
              className={styles.statusNeedConnect}
              onClick={() => {
                setStatus(true);
              }}
            >
              need connect
            </button>
          )
        }
      </div>
    </div>
  );
};
