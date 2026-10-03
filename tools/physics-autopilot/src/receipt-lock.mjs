import { mkdirSync, rmdirSync } from 'node:fs';

// Short read/merge/write transactions only; never hold this during model calls.
export function withReceiptLock(path, action) {
  const lock = `${path}.lock`;
  const until = Date.now() + 10000;
  for (;;) {
    try { mkdirSync(lock); break; }
    catch (error) {
      if (error.code !== 'EEXIST' || Date.now() >= until) throw error;
      Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 25);
    }
  }
  try { return action(); } finally { rmdirSync(lock); }
}
