import '@testing-library/jest-dom/extend-expect'
import { jest } from '@jest/globals'
import './__mocks__/matchMedia'
import './__mocks__/hooksMocks'
import './__mocks__/connectkit'

// TODO: this is a workaround as TextEncoder and TextDecoder are not available in jsdom yet
// https://github.com/remix-run/react-router/issues/12363#issuecomment-2496226528
if (!globalThis.TextEncoder || !globalThis.TextDecoder) {
  const { TextDecoder, TextEncoder } = require('node:util')
  globalThis.TextEncoder = TextEncoder
  globalThis.TextDecoder = TextDecoder
}

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
    route: '/',
    pathname: '/'
  }))
}))

// jest.mock('next/head', () => {
//   return {
//     __esModule: true,
//     default: ({ children }: { children: Array<React.ReactElement> }) => {
//       return <>{children}</>
//     }
//   }
// })
