import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectBooks, fetchBooks, Status } from '../../store/books'
import { useLocation } from 'react-router-dom'
import Loading from '../Loading'

function Pagination() {
  const dispatch = useDispatch()
  const location = useLocation()
  const { status, startIndex, totalItems } = useSelector(selectBooks)
  const noItems = totalItems === startIndex
  const isLoading = status === Status.Loading

  const loadBookData = () => {
    if (isLoading) {
      return
    }
    dispatch(fetchBooks(location.search, startIndex))
  }

  const noticeNoItems = () => {
    alert('목록이 없습니다.')
  }

  return (
    <>
      <button
        className={styles.button}
        disabled={startIndex === 0 || isLoading}
        onClick={noItems ? noticeNoItems : loadBookData}
      >
        {isLoading ? <Loading /> : '더보기'}
      </button>
    </>
  )
}

const styles = {
  button:
    'bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded'
}

export default Pagination
