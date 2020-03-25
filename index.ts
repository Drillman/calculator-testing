import {Calculator} from './calculator.class';
import "jasmine";

it('addition', () => {
  expect(Calculator.add(1,2)).toEqual(3);
  expect(Calculator.add(4,5)).toEqual(9);
})
it('subtract', () => {
  expect(Calculator.sub(2,1)).toEqual(1);
  expect(Calculator.sub(4,5)).toEqual(-1);
})
it('multiplication', () => {
  expect(Calculator.mul(1,2)).toEqual(2);
  expect(Calculator.mul(4,5)).toEqual(20);
})
it('division', () => {
  expect(Calculator.div(1,2)).toEqual(.5);
  expect(Calculator.div(4,5)).toEqual(.8);
})
it('average', () => {
  expect(Calculator.avg([1,2])).toEqual(1.5);
  expect(Calculator.avg([4,5,6,7,8])).toEqual(6);
})
