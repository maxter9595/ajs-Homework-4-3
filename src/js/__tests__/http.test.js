import { httpGet, httpPost } from '../http';
import fetchData from '../http';

describe('http functions', () => {
  it('should throw an error when httpGet is called', () => {
    expect(() => httpGet('http://example.com')).toThrow('http://example.com');
  });

  it('should throw an error when httpPost is called', () => {
    expect(() => httpPost('http://example.com')).toThrow('http://example.com');
  });

  it('should throw an error with the provided URL', () => {
    expect(() => fetchData('https://example.com')).toThrow('https://example.com');
  });
});
