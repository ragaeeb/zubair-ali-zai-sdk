import { Buffer } from 'buffer';
import { IncomingMessage } from 'http';
import https from 'https';

export const httpsGet = (url: string): Promise<Buffer> => {
    return new Promise((resolve, reject) => {
        https
            .get(url, (res: IncomingMessage) => {
                const dataChunks: Buffer[] = [];

                if (res.statusCode && res.statusCode >= 400) {
                    res.resume(); // Drain the response to avoid leaving the stream open
                    return reject(new Error(`Request failed with status code ${res.statusCode}`));
                }

                res.on('data', (chunk: Buffer) => {
                    dataChunks.push(chunk);
                });

                res.on('end', () => {
                    const fullData = Buffer.concat(dataChunks);
                    resolve(fullData);
                });
            })
            .on('error', (error) => {
                reject(new Error(`Error making request: ${error.message}`));
            });
    });
};
