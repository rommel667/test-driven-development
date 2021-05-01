const fizzBuzz = require('./index')

describe('fizzBuzz()', () => {
    it('returns "FizzBuzz" for multiples of 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
        expect(fizzBuzz(30)).toBe('FizzBuzz')
    })
    it('returns "Fizz" for multiples of 3', () => {
        expect(fizzBuzz(18)).toBe('Fizz')
        expect(fizzBuzz(21)).toBe('Fizz')
    })
    it('returns "Buzz" for multiples of 5', () => {
        expect(fizzBuzz(25)).toBe('Buzz')
        expect(fizzBuzz(35)).toBe('Buzz')
    })
    it('returns the number for multiples of neither 3 nor 5', () => {
        expect(fizzBuzz(16)).toBe(16)
        expect(fizzBuzz(17)).toBe(17)
    })
})