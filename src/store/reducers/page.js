import { NAVIGATE } from 'store/actions'

export function page (state, { type, payload }) {
  switch (type) {
    case NAVIGATE:
      const { pathname, search, hash } = payload.path
      return {
        ...state,
        history: {
          pathname,
          search,
          hash,
        }
      }
    default:
      return { ...state }
  }
}
