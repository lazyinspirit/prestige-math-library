// Historical path identity only. This never modifies a native result or grants
// source currency, execution coverage, readiness, or gate permission.
import { existsSync, lstatSync, readFileSync, realpathSync } from 'node:fs';
import { isAbsolute, join, relative, resolve } from 'node:path';
import { createHash } from 'node:crypto';
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const fail = why => { throw Error(`Run repository relocation: ${why}`); };
const safeRun = run => /^[a-zA-Z0-9_-]+$/.test(run ?? '');
const digest = value => /^[a-f0-9]{64}$/.test(value ?? '');
function localArtifact(run, path) {
  return typeof path === 'string' && !isAbsolute(path) && !path.includes('\\')
    && !path.split('/').some(part => !part || part === '.' || part === '..')
    && (path.startsWith(`research/${run}-`) || path.startsWith(`.physics-autopilot/${run}/`));
}
function regular(path) {
  if (!existsSync(path) || !lstatSync(path).isFile() || realpathSync(path) !== path)
    fail(`missing or nonregular relocated artifact: ${path}`);
  return readFileSync(path);
}
export function runRepositoryRelocationPath(root, run) {
  if (!safeRun(run)) fail('invalid run');
  return join(resolve(root), 'research', `${run}-repository-relocation.json`);
}
export function readRunRepositoryRelocation(root, run) {
  root = resolve(root);
  if (realpathSync(root) !== root) fail('repository must be a regular canonical directory');
  const path = runRepositoryRelocationPath(root, run);
  const receipt = JSON.parse(regular(path));
  if (receipt.version !== 1 || receipt.kind !== 'root-authorized-run-repository-relocation'
      || receipt.run !== run || receipt.reviewer !== '/root'
      || typeof receipt.reason !== 'string' || receipt.reason.trim().length < 40
      || receipt.new_root !== root || typeof receipt.old_root !== 'string'
      || !isAbsolute(receipt.old_root) || resolve(receipt.old_root) !== receipt.old_root
      || receipt.old_root === root || receipt.old_root.includes('\\')
      || !receipt.artifacts || typeof receipt.artifacts !== 'object' || Array.isArray(receipt.artifacts)
      || !Object.keys(receipt.artifacts).length) fail('invalid Root receipt identity');
  for (const [file, sha256] of Object.entries(receipt.artifacts))
    if (!localArtifact(run, file) || file === relative(root, path) || !digest(sha256)) fail(`invalid artifact binding: ${file}`);
  return { path, sha256: hash(readFileSync(path)), receipt };
}
/** Resolve only an exact receipt-bound historical file, with unchanged bytes.
 * Relative/current paths retain ordinary callers' path-validation semantics.
 * expectedPath prevents a valid unrelated historical artifact being substituted. */
export function resolveHistoricalRunPath(root, run, path, { expectedPath = null, expectedSha256 = null, sourceArtifact = null } = {}) {
  if (!safeRun(run) || typeof path !== 'string' || !path || path.includes('\\') || path.split('/').includes('..')) fail('invalid path identity');
  root = resolve(root);
  let current = resolve(root, path);
  if (isAbsolute(path) && current !== root && !current.startsWith(root + '/')) {
    const { receipt } = readRunRepositoryRelocation(root, run);
    const suffix = relative(receipt.old_root, current);
    if (!localArtifact(run, suffix) || resolve(receipt.old_root, suffix) !== current
        || !Object.hasOwn(receipt.artifacts, suffix)) fail(`historical path is not explicitly bound: ${path}`);
    if (!localArtifact(run, sourceArtifact) || !Object.hasOwn(receipt.artifacts, sourceArtifact)
        || hash(regular(resolve(root, sourceArtifact))) !== receipt.artifacts[sourceArtifact]) fail('unbound or changed historical referring artifact');
    current = resolve(root, suffix);
    if (hash(regular(current)) !== receipt.artifacts[suffix]) fail(`changed historical artifact: ${suffix}`);
    if (expectedSha256 !== null && expectedSha256 !== receipt.artifacts[suffix]) fail('historical digest differs from expected digest');
  }
  if (expectedPath !== null && current !== resolve(root, expectedPath)) fail('historical artifact differs from expected path');
  if (expectedSha256 !== null && (!digest(expectedSha256) || hash(regular(current)) !== expectedSha256)) fail('artifact digest differs from expected digest');
  return current;
}
export function verifyRunRepositoryRelocation(root, run) {
  const result = readRunRepositoryRelocation(root, run);
  for (const [file, sha256] of Object.entries(result.receipt.artifacts))
    if (hash(regular(resolve(root, file))) !== sha256) fail(`changed historical artifact: ${file}`);
  return { path: result.path, sha256: result.sha256, artifacts: Object.keys(result.receipt.artifacts).length };
}
