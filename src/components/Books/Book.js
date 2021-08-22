import React from 'react'
import { css, cx } from 'emotion'

function Book({ defaultClassName, volumeInfo }) {
  return (
    <div className={cx([defaultClassName, styles.wrapper])}>
      <img
        src={volumeInfo?.imageLinks?.thumbnail}
        className={cx(styles.media, imgSize)}
        alt="Book image"
      />
      <div className={cx(styles.body, maxWidth)}>
        <div className={styles.content}>
          <div className={styles.title} title={volumeInfo?.title}>
            {volumeInfo?.title}
          </div>
          <p
            className={cx(styles.description, descriptionStyle)}
            title={volumeInfo?.description}
          >
            {volumeInfo?.description}
          </p>
        </div>
        <div className={styles.meta}>
          {volumeInfo?.authors && (
            <p className={styles.authors}>{volumeInfo.authors.join(', ')}</p>
          )}
          <p className={styles.publishedDate}>{volumeInfo?.publishedDate}</p>
        </div>
      </div>
    </div>
  )
}

const styles = {
  wrapper: 'flex',
  media: 'object-cover',
  body: 'w-full p-2 border border-l-0 border-gray-400 rounded rounded-l-none',
  content: 'mb-4',
  title: 'mb-2 text-gray-900 font-bold text-lg truncate',
  description: 'text-gray-700 text-base',
  meta: 'flex items-center text-sm',
  authors: 'mr-2 text-gray-900',
  publishedDate: 'text-gray-600'
}

const imgSize = css`
  width: 128px;
  height: 128px;
`

const maxWidth = css`
  max-width: calc(100% - 128px);
`

const descriptionStyle = css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

export default Book
