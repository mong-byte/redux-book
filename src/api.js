import { stringifyUrl, parse } from 'query-string'
import { dataFetchURL } from './utils/config'

export async function getBooks(search, startIndex) {
  const { q, ...rest } = parse(search)
  const input = stringifyUrl({
    url: dataFetchURL,
    query: {
      q: `${q}`,
      startIndex,
      projection: 'full',
      ...rest
    }
  })

  return fetch(input)
}
