import React from 'react'
import { SelectSVG } from '../../assets/svg/svgs'

function Select({ id, children, ...rest }) {
  return (
    <label htmlFor={id} className={styles.wrapper}>
      <select id={id} name={id} className={styles.select} {...rest}>
        {children}
      </select>
      <div className={styles.icon}>
        <SelectSVG className={styles.svg} />
      </div>
    </label>
  )
}

const styles = {
  wrapper: 'inline-block relative w-64',
  select:
    'block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline',
  icon: 'pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700',
  svg: 'fill-current h-4 w-4'
}

export default Select
