import React from "react";

import styles from "./transactions.module.css";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
      <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.user}>
              <Image
                src="/no-avatar.png"
                alt="avatar"
                width={40}
                height={40}
                className={styles.userImage}
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>
              <span className={styles.date}>2 Jun 2021</span>
            </td>
            <td>
              <span className={styles.amount}>$122.00</span>
            </td>
          </tr>
          <tr>
            <td className={styles.user}>
              <Image
                src="/no-avatar.png"
                alt="avatar"
                width={40}
                height={40}
                className={styles.userImage}
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>
              <span className={styles.date}>2 Jun 2021</span>
            </td>
            <td>
              <span className={styles.amount}>$122.00</span>
            </td>
          </tr>
          <tr>
            <td className={styles.user}>
              <Image
                src="/no-avatar.png"
                alt="avatar"
                width={40}
                height={40}
                className={styles.userImage}
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>
              <span className={styles.date}>2 Jun 2021</span>
            </td>
            <td>
              <span className={styles.amount}>$122.00</span>
            </td>
          </tr>
          <tr>
            <td className={styles.user}>
              <Image
                src="/no-avatar.png"
                alt="avatar"
                width={40}
                height={40}
                className={styles.userImage}
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>
              <span className={styles.date}>2 Jun 2021</span>
            </td>
            <td>
              <span className={styles.amount}>$122.00</span>
            </td>
          </tr>
          <tr>
            <td className={styles.user}>
              <Image
                src="/no-avatar.png"
                alt="avatar"
                width={40}
                height={40}
                className={styles.userImage}
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>
              <span className={styles.date}>2 Jun 2021</span>
            </td>
            <td>
              <span className={styles.amount}>$122.00</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
