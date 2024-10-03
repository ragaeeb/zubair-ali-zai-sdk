import { promises as fs } from 'fs';
import { beforeEach, describe, expect, it, Mock, vi } from 'vitest';

import { getIbnMajah } from './index';
import { httpsGet } from './utils/network';

vi.mock('./utils/network');

describe('index', () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('getIbnMajah', () => {
        it('should handle request', async () => {
            const jsCode = await fs.readFile('testing/ibnemaja_1200.js', 'utf-8');
            (httpsGet as Mock).mockResolvedValue(jsCode);
            const actual = await getIbnMajah(1200);

            expect(actual).toEqual({ arabic: expect.any(String), hukm: 'بخاری ومسلم' });
        });
    });
});
