// External authorship intake only. This grants no native review or closure.
import { existsSync, readFileSync, realpathSync } from 'node:fs';
import { join, resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { itemHashGuard } from './item-hash.mjs';
import { validateFrontier } from './step5-rounds.mjs';

const hash = bytes => createHash('sha256').update(bytes).digest('hex');
const read = path => JSON.parse(readFileSync(path, 'utf8'));
const sha = value => /^[a-f0-9]{64}$/.test(value ?? '');
const requireValue = (ok, message) => { if (!ok) throw Error(`owner repair handoff: ${message}`); };
export const ownerHandoffPhase = phase => /^impact-(?:initial|repeat)(?:-pass-[1-9][0-9]*)?$/.test(phase);

export function ownerRepairHandoffs(root, dir, pack, current) {
  const registryPath = join(dir, 'owner-repair-handoffs.json');
  if (!existsSync(registryPath)) return { repairs: [], evidence: {} };
  requireValue(ownerHandoffPhase(pack.phase) && !pack.rejected, 'only impact owner collection is eligible');
  const registry = read(registryPath), evidence = {}, repairs = [];
  requireValue(registry.version === 1 && registry.run === pack.run && registry.authorizing_owner === '/root'
    && Array.isArray(registry.repairs), 'invalid root authorization');
  const frontierPath = join(dir, 'frontier.json'), frontier = read(frontierPath);
  validateFrontier(frontier);
  requireValue(frontier.run === pack.run && pack.repair_scope === 'frontier', 'wrong frozen frontier');
  const assigned = new Set(Object.values(pack.assignments).flat().map(row => typeof row === 'string' ? row : row.id));
  const research = realpathSync(join(root, 'research'));
  function runLocal(path) {
    requireValue(typeof path === 'string' && !isAbsolute(path), 'support path must be relative');
    const file = resolve(root, path), rel = relative(research, file);
    requireValue(!rel.startsWith('..') && !isAbsolute(rel) && rel.startsWith(`${pack.run}-`)
      && existsSync(file), `support path is not run-local: ${path}`);
    const actual = relative(research, realpathSync(file));
    requireValue(!actual.startsWith('..') && !isAbsolute(actual) && actual.startsWith(`${pack.run}-`), `support path escapes run: ${path}`);
    return file;
  }
  function bound(ref) {
    requireValue(ref && sha(ref.sha256), 'missing support hash');
    const file = runLocal(ref.path);
    requireValue(hash(readFileSync(file)) === ref.sha256, `support evidence changed: ${ref.path}`);
    evidence[file] = ref.sha256;
    return file;
  }
  const seen = new Set();
  for (const grant of registry.repairs) {
    requireValue(grant && ownerHandoffPhase(grant.phase) && Number.isInteger(grant.round) && grant.round > 0
      && typeof grant.id === 'string' && typeof grant.owner === 'string' && grant.owner.length > 0
      && sha(grant.before_sha256) && sha(grant.after_sha256), 'malformed repair grant');
    const identity = `${grant.phase}/${grant.round}/${grant.id}`;
    requireValue(!seen.has(identity), `duplicate grant: ${identity}`); seen.add(identity);
    if (grant.phase !== pack.phase || grant.round !== pack.round) continue;
    requireValue(frontier.ids.includes(grant.id) && pack.frontier_ids?.includes(grant.id)
      && !assigned.has(grant.id), `target is outside frontier or assigned: ${grant.id}`);
    requireValue(pack.before[grant.id] === grant.before_sha256 && current[grant.id] === grant.after_sha256
      && grant.before_sha256 !== grant.after_sha256, `stale before/after carrier: ${grant.id}`);
    const receiptPath = bound(grant.receipt), receipt = read(receiptPath);
    requireValue(receipt.version === 1 && receipt.run === pack.run && receipt.subject === grant.id
      && receipt.owner === grant.owner && receipt.status === 'repaired-and-scoped-validation-passed', 'receipt identity or status mismatch');
    requireValue(receipt.independent_review === false && receipt.native_transition === false
      && receipt.recertification === false, 'receipt must disclaim native review, transition and recertification');
    const handoff = receipt.writer_handoff;
    requireValue(handoff?.absent === true && handoff.overlap === false && Number.isInteger(handoff.pid) && handoff.pid > 0,
      'missing writer absence/nonoverlap attestation');
    const tasks = pack.units.map(unit => join(dir, `step5-v2-${pack.phase}-r${pack.round}-u${unit}.task.md`));
    requireValue(Array.isArray(handoff.pass3_assignments) && handoff.pass3_assignments.length === tasks.length,
      'missing exact owner assignment evidence');
    const taskPaths = handoff.pass3_assignments.map(bound);
    requireValue(new Set(taskPaths).size === tasks.length && tasks.every(path => taskPaths.includes(path)), 'wrong owner assignment evidence');
    requireValue(Array.isArray(receipt.files), 'missing source files');
    const source = receipt.files.filter(row => row.path === `items/${grant.id}.md`);
    requireValue(source.length === 1 && receipt.files.filter(row => row.path?.startsWith('items/')).length === 1,
      'receipt must cover exactly the granted item');
    requireValue(source[0].before_content_sha256 === grant.before_sha256
      && source[0].current_content_sha256 === grant.after_sha256, 'receipt content hash mismatch');
    for (const file of receipt.files) {
      const before = bound({ path: file.before_file, sha256: file.before_raw_sha256 });
      const currentFile = file === source[0] ? join(root, 'items', `${grant.id}.md`) : runLocal(file.path);
      requireValue(sha(file.current_raw_sha256) && hash(readFileSync(currentFile)) === file.current_raw_sha256,
        `current raw file changed: ${file.path}`);
      if (file === source[0]) requireValue(itemHashGuard(readFileSync(before, 'utf8')) === grant.before_sha256
        && itemHashGuard(readFileSync(currentFile, 'utf8')) === grant.after_sha256, 'preserved source content mismatch');
    }
    const validation = read(bound(receipt.validation));
    const passed = receipt.validation.passed;
    requireValue(Array.isArray(passed) && passed.length > 0 && new Set(passed).size === passed.length
      && Array.isArray(validation.checks) && validation.checks.length === passed.length
      && validation.checks.every(check => passed.includes(check.name) && check.exit_code === 0
        && typeof check.command === 'string' && check.command.includes(grant.id))
      && passed.every(name => validation.checks.filter(check => check.name === name).length === 1), 'scoped validation did not exit zero');
    if (receipt.inventory) bound(receipt.inventory);
    for (const protectedReport of receipt.protected_reports ?? []) bound(protectedReport);
    repairs.push({ ...grant, authorizing_owner: '/root' });
  }
  if (repairs.length) {
    evidence[registryPath] = hash(readFileSync(registryPath));
    evidence[frontierPath] = hash(readFileSync(frontierPath));
  }
  return { repairs, evidence };
}
