import sum from '../resources/sum.js';
import { expect } from 'chai';

describe('Sum Function', () => {
    
  it('should return 3 when adding 1 and 2', () => {
    expect(sum(1, 2)).to.equal(3);
  });
});
