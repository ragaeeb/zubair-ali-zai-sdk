import process from 'process';

import { Hadith } from './types';
import { httpsGet } from './utils/network';
import { runSafely } from './utils/sandbox';

let API_URL_PATTERN: string = process.env.ZUBAIR_ALI_ZAI_API || '';

const processSandboxed = async (id: number, book: string): Promise<Hadith> => {
    const url = API_URL_PATTERN.replace(':id', id.toString()).replace(':book', book);
    const responseData = (await httpsGet(url)).toString();

    const sandbox = runSafely(book, responseData);
    const [{ arabic, description = '', hukam: hukm = '' }] = Object.values(sandbox);

    return { arabic, ...(description && { description }), ...(hukm && { hukm }) };
};

export const getAbuDawud = async (id: number): Promise<Hadith> => processSandboxed(id, 'abudawood');
export const getIbnMajah = async (id: number): Promise<Hadith> => processSandboxed(id, 'ibnemaja');
export const getMishkaat = async (id: number): Promise<Hadith> => processSandboxed(id, 'mishkaat');
export const getNasai = async (id: number): Promise<Hadith> => processSandboxed(id, 'nasai');
export const getTirmidhi = async (id: number): Promise<Hadith> => processSandboxed(id, 'tirmizi');

export const init = (urlPattern: string) => {
    API_URL_PATTERN = urlPattern;
};
