import { getLevel } from '../app';
import fetchData from '../http';

jest.mock('../http');

describe('getLevel', () => {
    test('should return level message if response is ok', () => {
        fetchData.mockReturnValue({
            status: 'ok',
            level: 5
        });
        const result = getLevel(1);
        expect(result).toBe('Ваш текущий уровень: 5');
    });

    test('should return unavailable message if response status is not ok', () => {
        fetchData.mockReturnValue({
            status: 'error'
        });
        const result = getLevel(1);
        expect(result).toBe('Информация об уровне временно недоступна');
    });

    test('should return error message if fetchData throws an error', () => {
        fetchData.mockImplementation(() => {
            throw new Error('Server unavailable');
        });
        const result = getLevel(1);
        expect(result).toBe('Ошибка: Server unavailable');
    });
});
