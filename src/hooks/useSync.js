import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSearch } from '../store/search'

function useSync(func = setSearch) {
  const dispatch = useDispatch()
  const { search } = useLocation()

  useEffect(() => {
    if (!search) {
      return
    }
    dispatch(func(search))
  }, [dispatch, func, search])
}

export default useSync
