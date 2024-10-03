import vm from 'vm';

export type Sandbox = Record<string, any>;

const keyToSandbox: Record<string, Sandbox> = {};

export const reset = () => {
    Object.keys(keyToSandbox).forEach((key) => {
        delete keyToSandbox[key];
    });
};

export const runSafely = (key: string, jsCode: string): Sandbox => {
    if (!keyToSandbox[key]) {
        const sandbox = {};
        keyToSandbox[key] = sandbox;
        vm.createContext(sandbox);
    }

    const sandbox = keyToSandbox[key];
    vm.runInContext(jsCode, sandbox);

    return sandbox;
};
