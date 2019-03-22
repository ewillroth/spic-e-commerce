import {emailValidator} from './functions';

describe('emailValidator', ()=>{
	it('should return true for emails containing @ and .', ()=>{
		expect(emailValidator('ewillroth@gmail.com')).toBe(true)
	})
	it('should return false for emails without @ and .', ()=>{
		expect(emailValidator('ewillroth')).toBe(false)
	})
})