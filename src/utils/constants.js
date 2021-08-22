export const ROUTE_PATH = {
  main: '/',
  result: '/result',
  filters: '/filters'
}

export const SELECT_ARR = [
  {
    value: '',
    label: '없음'
  },
  {
    value: 'partial',
    label: '미리보기 가능'
  },
  {
    value: 'full',
    label: '전체 공개'
  },
  {
    value: 'ebooks',
    label: '전체 eBooks'
  },
  {
    value: 'free-ebooks',
    label: '무료 eBooks'
  },
  {
    value: 'paid-ebooks',
    label: '유료 eBooks'
  }
]

export const FIELDSET_DATA = [
  {
    title: '도서종류',
    name: 'printType',
    raido: [
      {
        id: 'printTypeAll',
        value: 'all',
        label: '전체'
      },
      {
        id: 'printTypeBooks',
        value: 'books',
        label: '일반도서'
      },
      {
        id: 'printTypeMagazines',
        value: 'magazines',
        label: '잡지'
      }
    ]
  },
  {
    title: '정렬 순서',
    name: 'orderBy',
    raido: [
      {
        id: 'orderByRelevance',
        value: 'relevance',
        label: '관련성'
      },
      {
        id: 'orderByNewest',
        value: 'newest',
        label: '최신순'
      }
    ]
  }
]
