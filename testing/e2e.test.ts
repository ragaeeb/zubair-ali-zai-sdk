import { describe, expect, it } from 'vitest';

import { getAbuDawud, getIbnMajah, getMishkaat, getNasai, getTirmidhi } from '../src/index';

describe('e2e', () => {
    describe('getAbuDawud', () => {
        it(
            'should get hadith',
            async () => {
                const hadith = await getAbuDawud(123);

                expect(hadith).toEqual({
                    arabic: expect.any(String),
                    description: 'وانظر سنن أبی داود (122،135)',
                    hukm: 'حسن',
                });
            },
            { timeout: 5000 },
        );
    });

    describe('getIbnMajah', () => {
        it(
            'should get hadith',
            async () => {
                const hadith = await getIbnMajah(123);

                expect(hadith).toEqual({
                    arabic: expect.any(String),
                    hukm: 'بخاری ومسلم',
                });
            },
            { timeout: 5000 },
        );
    });

    describe('getMishkaat', () => {
        it(
            'should get hadith',
            async () => {
                const hadith = await getMishkaat(123);

                expect(hadith).toEqual({
                    arabic: expect.any(String),
                    description:
                        '[123] إسنادہ ضعیف، رواہ أحمد (6/ 443 ح 28047)<br>٭ الزہري عن أبی الدرداء رضي اللہ عنہ: منقطع',
                });
            },
            { timeout: 5000 },
        );
    });

    describe('getNasai', () => {
        it(
            'should get hadith',
            async () => {
                const hadith = await getNasai(123);

                expect(hadith).toEqual({
                    arabic: expect.any(String),
                    hukm: 'متفق علیہ',
                });
            },
            { timeout: 5000 },
        );
    });

    describe('getTirmidhi', () => {
        it(
            'should get hadith',
            async () => {
                const hadith = await getTirmidhi(123);

                expect(hadith).toEqual({
                    arabic: expect.any(String),
                    description: expect.any(String),
                    hukm: ' إسنادہ ضعیف',
                });
            },
            { timeout: 5000 },
        );

        it(
            'should deal with 404',
            async () => {
                await expect(getTirmidhi(99999999)).rejects.toThrow('Request failed with status code 404');
            },
            { timeout: 5000 },
        );
    });
});
