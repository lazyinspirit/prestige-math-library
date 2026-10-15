// Preserve the report baseline byte format without following archived links.
// Keep this transport fix separate from scientific receipt implementation inputs.
import { lstatSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { protectedEntryHash, sha256 } from './step6-lib.mjs';

export function protectedEntryHashes(paths) {
  const entries = paths.map(path => ({ path, stat: lstatSync(path) }));
  const links = entries.filter(entry => entry.stat.isSymbolicLink());
  let targets = [];
  if (links.length) {
    // libuv's readlink first calls pathconf, which can follow an archived
    // /home link into macOS automount. Python calls readlink directly. Batch
    // all links once, preserve raw target bytes, and never open their targets.
    const program = 'import os,sys,json,base64\njson.dump([base64.b64encode(os.readlink(os.fsencode(p))).decode("ascii") for p in json.load(sys.stdin)],sys.stdout)';
    const result = spawnSync('python3', ['-c', program], {
      input: JSON.stringify(links.map(entry => entry.path)), encoding: 'utf8',
      maxBuffer: 128 * 1024 * 1024, timeout: 120_000,
    });
    if (result.error || result.status !== 0) throw Error(`protected symlink metadata read failed: ${result.error?.message ?? result.stderr}`);
    targets = JSON.parse(result.stdout);
    if (!Array.isArray(targets) || targets.length !== links.length
      || targets.some(target => typeof target !== 'string' || !/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(target)))
      throw Error('protected symlink metadata returned incomplete bytes');
  }
  let link = 0;
  return entries.map(({ path, stat }) => {
    if (stat.isSymbolicLink()) return sha256(Buffer.concat([
      Buffer.from('symlink\0'), Buffer.from(targets[link++], 'base64'),
    ]));
    if (stat.isFile()) return protectedEntryHash(path);
    throw new Error(`unsupported protected tree entry: ${path}`);
  });
}
