import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FilterSVG } from '../../assets/svg/svgs'
import { ROUTE_PATH } from '../../utils/constants'

function LinkToFilter() {
  const location = useLocation()
  const { filters } = ROUTE_PATH

  return (
    <Link
      to={{
        pathname: filters,
        search: location.search
      }}
      className={styles.wrapper}
    >
      <FilterSVG className={'fill-current'} />
    </Link>
  )
}

const styles = {
  wrapper: 'text-blue-500 hover:text-blue-700'
}

export default LinkToFilter
