import {expect, test} from 'bun:test'

const {default: importSubject} = await import('#src/main.ts')

test('should run', () => {
  const result = importSubject()
  expect(result).toBe('import-subject') // TODO Test actual functionality
})
