import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { createLogger } from 'redux-logger'

const middleware = []

if (process.env.NEXT_PUBLIC_NODE === 'development') {
  middleware.push(createLogger())
}

middleware.push(thunk)
middleware.push(promise)

export default middleware
