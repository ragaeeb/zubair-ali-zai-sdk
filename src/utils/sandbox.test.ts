import { afterAll, describe, expect, it } from 'vitest';

import { reset, runSafely } from './sandbox'; // Replace with the correct module path

describe('runSafely', () => {
    afterAll(reset);

    it('should initialize sandbox and run code safely', () => {
        const jsCode = 'var x = 5;';
        const sandbox = runSafely('a', jsCode);

        // Check if x is correctly set in the sandbox
        expect(sandbox.x).toBe(5);
    });

    it('should reuse the same sandbox across multiple executions', () => {
        const firstCode = 'var y = 10;';
        runSafely('b', firstCode);

        const secondCode = 'y = y + 5;';
        const sandbox = runSafely('b', secondCode);

        expect(sandbox.y).toBe(15);
    });

    it('should not reset previous variables when executing new code', () => {
        const jsCode = 'var z = 20;';
        runSafely('c', jsCode);

        const sandbox = runSafely('c', 'z = z * 2;');
        expect(sandbox.z).toBe(40);
    });

    it('should reset previous variables when redeclaring variables', () => {
        const jsCode = 'var z = 20;';
        runSafely('d', jsCode);

        const sandbox = runSafely('d', 'var z = 10');
        expect(sandbox.z).toBe(10);
    });
});
