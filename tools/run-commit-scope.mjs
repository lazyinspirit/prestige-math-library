// Optional owner-authorized closeout. Imported only when a run has a policy.
// The engine's mathematical/readiness/report gates remain unchanged.
import { spawnSync } from 'node:child_process';
import { accessSync, constants, copyFileSync, existsSync, lstatSync, mkdirSync,
  mkdtempSync, readFileSync, readdirSync, readlinkSync, rmSync, statSync,
  unlinkSync, writeFileSync } from 'node:fs';
import { dirname, isAbsolute, join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { runScope, sha256, splitFrontmatter } from './step9-lib.mjs';
import { verifyProofLayout } from './proof-layout-receipt.mjs';
import { recordedPublishedRepair } from './published-repair-policy.mjs';

const decoder = new TextDecoder('utf-8', { fatal: true });
const decode = bytes => decoder.decode(bytes);
const nul = bytes => {
  if (!bytes.length) return [];
  if (bytes.at(-1) !== 0) throw Error('closeout: unterminated Git path record');
  return decode(bytes.subarray(0, -1)).split('\0');
};
const pathsInput = paths => Buffer.from(paths.join('\0') + '\0');
const digest = rows => ({ entries: rows.length, sha256: sha256(JSON.stringify(rows)) });
// Independently reviewed installed hook: the fixed source exits before
// graphify whenever this repository directory is absent. This is deliberately
// not a general hook allowlist or a hook/configuration override.
const inertHook = Object.freeze({
  name: 'post-commit',
  path: '/home/lazyinspirit/.config/git/hooks/post-commit',
  sha256: 'a9cc684a69d83b0e6b88a43ec490ffb6cea46482c2b7df7ec9c9133914e5cb53',
  required_absent_path: 'graphify-out',
});

function git(root, args, { input, env = {}, optional = false } = {}) {
  const result = spawnSync('git', ['--literal-pathspecs', ...args], {
    cwd: root, env: { ...process.env, LC_ALL: 'C', ...env }, input,
    maxBuffer: 256 * 1024 * 1024,
  });
  if (optional && result.status === 1) return null;
  if (result.error || result.status !== 0) throw Error('closeout: git ' + args[0]
    + ' failed: ' + (result.error?.message || result.stderr?.toString().trim()));
  return result.stdout;
}
const textGit = (root, args, options) => {
  const result = git(root, args, options);
  return result === null ? null : decode(result).trim();
};
const gitPath = (root, name) => resolve(root, textGit(root, ['rev-parse', '--git-path', name]));

function safePath(path) {
  if (typeof path !== 'string' || !path || isAbsolute(path) || path.startsWith('-')
    || /[\x00-\x1f\x7f\\:*?\[\]]/.test(path)
    || path.split('/').some(part => !part || part === '.' || part === '..'
      || part === '.git' || part === 'node_modules' || part.startsWith('.autopilot'))) {
    throw Error('closeout: unsafe exact repository path ' + JSON.stringify(path));
  }
  return path;
}
function regularPath(root, path, missingAllowed = false) {
  safePath(path);
  let cursor = root;
  for (const part of path.split('/')) {
    cursor = join(cursor, part);
    if (!lstatExists(cursor)) {
      if (missingAllowed) return false;
      throw Error('closeout: missing required carrier ' + path);
    }
    if (lstatSync(cursor).isSymbolicLink()) throw Error('closeout: symlink in owned path ' + path);
  }
  if (!lstatSync(cursor).isFile()) throw Error('closeout: owned carrier is not a regular file ' + path);
  return true;
}
const operationalLog = (run, path) => path.startsWith('research/' + run + '-dispatch/')
  && /\.log(?:\.gz)?$/.test(path);
const runResearch = (run, path) => path.startsWith('research/' + run + '-')
  && !operationalLog(run, path);
const runtimeExcluded = (run, path) => path.split('/').some(part =>
  part === '.git' || part === 'node_modules' || part.startsWith('.autopilot'))
  || operationalLog(run, path);

function treeEntries(root, revision = 'HEAD') {
  return nul(git(root, ['ls-tree', '-r', '-z', '--full-tree', revision])).map(row => {
    const tab = row.indexOf('\t'), [mode, type, oid] = row.slice(0, tab).split(' ');
    if (tab < 0 || !/^[0-7]{6}$/.test(mode) || !/^(blob|commit)$/.test(type)
      || !/^[a-f0-9]{40,64}$/.test(oid)) throw Error('closeout: malformed Git tree record');
    return { path: row.slice(tab + 1), mode, oid };
  });
}
function indexEntries(root) {
  const path = gitPath(root, 'index');
  const before = existsSync(path) ? sha256(readFileSync(path)) : null;
  const rows = nul(git(root, ['ls-files', '--stage', '-z'])).map(row => {
    const tab = row.indexOf('\t'), [mode, oid, stage] = row.slice(0, tab).split(' ');
    if (tab < 0 || !/^[0-7]{6}$/.test(mode) || !/^[a-f0-9]{40,64}$/.test(oid)
      || !/^[0-3]$/.test(stage)) throw Error('closeout: malformed Git index record');
    return { path: row.slice(tab + 1), mode, oid, stage: Number(stage) };
  });
  // Include intent-to-add, assume-unchanged and skip-worktree flags, rather
  // than claiming preservation from object IDs alone. Stat-cache timestamps
  // are not staged content and are deliberately not compared.
  const debug = git(root, ['ls-files', '--debug', '-z']);
  let offset = 0, index = 0;
  while (offset < debug.length) {
    const end = debug.indexOf(0, offset);
    if (end < 0) throw Error('closeout: malformed index debug path');
    const name = decode(debug.subarray(offset, end));
    let last = end;
    for (let line = 0; line < 5; line++) {
      last = debug.indexOf(10, last + 1);
      if (last < 0) throw Error('closeout: unsupported index debug format');
    }
    const flags = /flags: ([a-f0-9]+)\n$/i.exec(decode(debug.subarray(end + 1, last + 1)))?.[1];
    if (!flags || rows[index]?.path !== name) throw Error('closeout: inconsistent index flags');
    rows[index++].flags = flags.toLowerCase();
    offset = last + 1;
  }
  const after = existsSync(path) ? sha256(readFileSync(path)) : null;
  if (index !== rows.length || before !== after) throw Error('closeout: index changed while reading preservation state');
  if (rows.some(row => row.stage !== 0)) throw Error('closeout: unresolved index conflicts; preserve them and resolve before closeout');
  if (rows.some(row => row.mode === '160000')) throw Error('closeout: submodule index preservation is not supported');
  return rows;
}
function fileState(root, path) {
  const full = join(root, path);
  if (!existsSync(full) && !lstatExists(full)) return { path, kind: 'missing' };
  const stat = lstatSync(full), mode = stat.mode & 0o777;
  if (stat.isSymbolicLink()) return { path, kind: 'symlink', mode, sha256: sha256(readlinkSync(full, { encoding: 'buffer' })) };
  if (!stat.isFile()) throw Error('closeout: unsupported working-tree entry ' + path);
  return { path, kind: 'file', mode, sha256: sha256(readFileSync(full)) };
}
const lstatExists = path => { try { lstatSync(path); return true; } catch (error) { if (error.code === 'ENOENT') return false; throw error; } };

function workingEntries(root, run, owns) {
  const rows = [];
  const walk = (dir, prefix = '') => {
    for (const entry of readdirSync(dir, { withFileTypes: true, encoding: 'buffer' })) {
      const name = Buffer.isBuffer(entry.name) ? decode(entry.name) : entry.name;
      const path = prefix ? prefix + '/' + name : name;
      if (runtimeExcluded(run, path) || owns(path)) continue;
      if (entry.isDirectory()) walk(join(dir, name), path);
      else rows.push(fileState(root, path));
    }
  };
  walk(root);
  return rows.sort((a, b) => a.path < b.path ? -1 : a.path > b.path ? 1 : 0);
}
function preservation(root, run, scope) {
  const index = indexEntries(root).filter(row => !scope.owns(row.path));
  const tree = treeEntries(root).filter(row => !scope.owns(row.path));
  return {
    outside_index: digest(index),
    outside_head: digest(tree),
    outside_working: digest(workingEntries(root, run, scope.owns)),
  };
}
function assertSame(actual, expected, label) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) throw Error('closeout: ' + label + ' preservation mismatch');
}

function verifyReviewedHook(root, reviewedHook, hookDir) {
  if (!reviewedHook) return;
  const full = join(hookDir, inertHook.name);
  if (full !== inertHook.path || !lstatExists(full) || !lstatSync(full).isFile()
    || sha256(readFileSync(full)) !== inertHook.sha256) {
    throw Error('closeout: reviewed inert hook path/source changed');
  }
  accessSync(full, constants.X_OK);
  if (lstatExists(join(root, inertHook.required_absent_path))) {
    throw Error('closeout: reviewed hook requires graphify-out absent');
  }
}

function refuseGitSideEffects(root, paths, reviewedHook = null) {
  for (const key of ['GIT_INDEX_FILE', 'GIT_DIR', 'GIT_WORK_TREE', 'GIT_COMMON_DIR',
    'GIT_OBJECT_DIRECTORY', 'GIT_ALTERNATE_OBJECT_DIRECTORIES', 'GIT_CONFIG',
    'GIT_CONFIG_GLOBAL', 'GIT_CONFIG_SYSTEM', 'GIT_CONFIG_NOSYSTEM',
    'GIT_CONFIG_PARAMETERS', 'GIT_CONFIG_COUNT']) {
    if (process.env[key]) throw Error('closeout: externally redirected Git environment ' + key);
  }
  for (const name of ['MERGE_HEAD', 'CHERRY_PICK_HEAD', 'REVERT_HEAD', 'rebase-merge', 'rebase-apply', 'sequencer']) {
    if (existsSync(gitPath(root, name))) throw Error('closeout: active Git operation ' + name);
  }
  const configured = textGit(root, ['config', '--path', '--get', 'core.hooksPath'], { optional: true });
  const hookDir = configured ? resolve(root, configured) : gitPath(root, 'hooks');
  verifyReviewedHook(root, reviewedHook, hookDir);
  for (const hook of ['pre-commit', 'prepare-commit-msg', 'commit-msg', 'post-commit',
    'post-index-change', 'reference-transaction', 'pre-auto-gc']) {
    const full = join(hookDir, hook);
    if (!existsSync(full) || !statSync(full).isFile()) continue;
    try { accessSync(full, constants.X_OK); }
    catch (error) { if (error.code === 'EACCES') continue; throw error; }
    if (reviewedHook && hook === inertHook.name && full === inertHook.path) continue;
    throw Error('closeout: active Git hook ' + hook + ' at ' + full + '; scoped preservation cannot run this hook safely');
  }
  const monitor = textGit(root, ['config', '--get', 'core.fsmonitor'], { optional: true });
  if (monitor && !/^(?:true|false)$/i.test(monitor)) throw Error('closeout: configured external core.fsmonitor helper');
  if (textGit(root, ['rev-parse', '--shared-index-path'])) throw Error('closeout: split-index preservation is not supported');
  // A commit can refresh its temporary index outside the supplied pathspec.
  // Reject active filters on the entire Git inventory, not just owned paths.
  const attrs = paths.length
    ? nul(git(root, ['check-attr', '-z', '--stdin', 'filter'], { input: pathsInput(paths) })) : [];
  if (attrs.length % 3) throw Error('closeout: incomplete attribute records');
  for (let i = 0; i < attrs.length; i += 3) {
    const [path, attribute, driver] = attrs.slice(i, i + 3);
    if (attribute !== 'filter') throw Error('closeout: malformed attribute record');
    if (['unspecified', 'unset'].includes(driver)) continue;
    for (const suffix of ['clean', 'process']) {
      if (textGit(root, ['config', '--get', 'filter.' + driver + '.' + suffix], { optional: true })) {
        throw Error('closeout: active Git ' + suffix + ' filter ' + driver + ' applies to ' + path);
      }
    }
  }
}

function readScopePolicy(root, run) {
  const policyPath = 'research/' + run + '-closeout-scope.json';
  regularPath(root, policyPath);
  const policyText = readFileSync(join(root, policyPath), 'utf8'), policy = JSON.parse(policyText);
  const keys = new Set(['version', 'run', 'authorized_by', 'authorization', 'additional_paths', 'reviewed_hook']);
  if (Object.keys(policy).some(key => !keys.has(key)) || policy.version !== 1 || policy.run !== run
    || policy.authorized_by !== 'owner' || typeof policy.authorization !== 'string'
    || policy.authorization.trim().length < 20 || !Array.isArray(policy.additional_paths)) {
    throw Error('closeout: invalid owner-authorized run-local scope policy');
  }
  const reviewedHook = policy.reviewed_hook ?? null;
  if (Object.hasOwn(policy, 'reviewed_hook') && (!reviewedHook
    || Object.keys(reviewedHook).length !== Object.keys(inertHook).length
    || Object.entries(inertHook).some(([key, value]) => reviewedHook[key] !== value))) {
    throw Error('closeout: only the exact reviewed inert post-commit hook policy is supported');
  }
  return { policyPath, policyText, policy, reviewedHook };
}

function loadScope(root, run, finalReceipt, historyPaths = [], allowMissingReceipt = false) {
  const { policyPath, policyText, policy, reviewedHook } = readScopePolicy(root, run);
  const selected = runScope(run, root);
  const required = new Set([policyPath, selected.ledger, 'research/plan-spec.json',
    'research/published-consumer-supplier-ledger.md',
    ...selected.pages.map(row => row.file), ...selected.items.map(row => row.file),
    ...selected.categories.map(category => 'library/' + category + '/_pathway.md'),
    ...['proof-layout.json', 'publication-readiness.json', 'step9-report-integrity.json',
      'step9-report.response.json', 'step9-report.md', 'step9-evidence.json',
      'pathway-closure.json', 'judge-closure.json'].map(name => 'research/' + run + '-' + name),
    finalReceipt]);
  const claimsPath = 'research/' + run + '-step5-published-claims.jsonl';
  const claimsText = existsSync(join(root, claimsPath)) ? readFileSync(join(root, claimsPath), 'utf8') : '';
  const claims = claimsText.split('\n').filter(line => line.trim()).map(line => JSON.parse(line));
  const seenClaims = new Set();
  for (const claim of claims) {
    if (claim.version !== 1 || claim.run !== run || !/^[a-z][a-z0-9-]*$/.test(claim.id ?? '')
      || seenClaims.has(claim.id)) throw Error('closeout: invalid or duplicate published ownership claim');
    seenClaims.add(claim.id);
    const path = 'items/' + claim.id + '.md';
    regularPath(root, path);
    const current = readFileSync(join(root, path), 'utf8'), fm = splitFrontmatter(current).frontmatter;
    const receipt = /^ {2}repair:\s*(\S+)\s*$/m.exec(fm)?.[1];
    const recorded = recordedPublishedRepair(root, claim.id, current, receipt);
    if (!recorded.ok) throw Error('closeout: unclosed published ownership ' + claim.id + ': ' + recorded.reason);
    required.add(path);
  }
  const additional = new Set();
  for (const row of policy.additional_paths) {
    if (!row || Object.keys(row).some(key => !['path', 'sha256', 'reason', 'ownership_evidence'].includes(key))
      || typeof row.reason !== 'string' || row.reason.trim().length < 20
      || !(row.sha256 === null || /^[a-f0-9]{64}$/.test(row.sha256 ?? ''))) throw Error('closeout: malformed additional ownership row');
    safePath(row.path);
    if (required.has(row.path) || runResearch(run, row.path) || additional.has(row.path) || operationalLog(run, row.path)) {
      throw Error('closeout: redundant or operational additional path ' + row.path);
    }
    if (!runResearch(run, safePath(row.ownership_evidence))) throw Error('closeout: supporting ownership evidence is outside this run');
    regularPath(root, row.ownership_evidence);
    const evidence = JSON.parse(readFileSync(join(root, row.ownership_evidence), 'utf8'));
    if (evidence.run !== run || !Array.isArray(evidence.owned_paths)
      || !evidence.owned_paths.some(owned => owned.path === row.path && owned.sha256 === row.sha256)) {
      throw Error('closeout: no exact supporting ownership evidence for ' + row.path);
    }
    const state = fileState(root, row.path);
    if (row.sha256 === null ? state.kind !== 'missing' : state.kind !== 'file' || state.sha256 !== row.sha256) {
      throw Error('closeout: supporting path bytes differ from owner authorization: ' + row.path);
    }
    if (row.sha256 !== null) regularPath(root, row.path);
    additional.add(row.path);
  }
  for (const path of required) regularPath(root, path, allowMissingReceipt && path === finalReceipt);
  const index = indexEntries(root), tree = treeEntries(root);
  const others = nul(git(root, ['ls-files', '--others', '--exclude-standard', '-z']));
  const inventory = [...new Set([...index.map(row => row.path), ...tree.map(row => row.path), ...others])].sort();
  const automatic = new Set(inventory.filter(path => runResearch(run, path)));
  for (const row of policy.additional_paths) {
    if (row.sha256 === null && !inventory.includes(row.path) && !historyPaths.includes(row.path)) {
      throw Error('closeout: deleted supporting path has no Git preimage: ' + row.path);
    }
  }
  for (const path of historyPaths) {
    if (!required.has(path) && !additional.has(path) && !runResearch(run, path)) {
      throw Error('closeout: recorded path no longer belongs to this run: ' + path);
    }
    automatic.add(path);
  }
  const paths = [...new Set([...automatic, ...required, ...additional])].sort();
  const owned = new Set(paths), owns = path => owned.has(path);
  for (const path of paths) {
    if (!owns(path)) throw Error('closeout: recorded path no longer belongs to this run: ' + path);
    regularPath(root, path, !required.has(path) || allowMissingReceipt && path === finalReceipt);
  }
  const ignored = nul(git(root, ['check-ignore', '-z', '--stdin'], { input: pathsInput(paths), optional: true }) || Buffer.alloc(0));
  if (ignored.length) throw Error('closeout: required/authorized artifact is ignored by Git: ' + ignored[0]);
  return { policyPath, policySha256: sha256(policyText), paths, owns, inventory, reviewedHook,
    contextSha256: sha256(JSON.stringify({ selected, required: [...required].sort(),
      claims: sha256(claimsText), additional: policy.additional_paths })) };
}

function refuseCrossScopeRenames(root, scope) {
  // Only read the working diff after active filters have been refused.
  // Inspect staged and working renames independently as well as their net
  // effect; a staged cross-boundary rename must not be hidden by later edits.
  for (const prefix of [[], ['--cached'], ['HEAD']]) {
    const rows = nul(git(root, ['diff', '--name-status', '-z', '--find-renames',
      '--no-ext-diff', '--no-textconv', ...prefix]));
    const deleted = [], added = [];
    for (let i = 0; i < rows.length;) {
      const status = rows[i++], from = rows[i++];
      if (!status || !from) throw Error('closeout: malformed diff path records');
      if (/^[RC]/.test(status)) {
        const to = rows[i++];
        if (!to) throw Error('closeout: missing rename destination');
        if (scope.owns(from) !== scope.owns(to)) throw Error('closeout: cross-scope rename/copy ' + from + ' -> ' + to);
      } else if (status === 'D') deleted.push(from);
      else if (status === 'A') added.push(from);
    }
    // Git's similarity heuristic can classify a moved-and-edited file as D+A;
    // working diffs also omit untracked destinations. Fail closed on an
    // ambiguous cross-boundary deletion/addition pair, rather than treating
    // the absence of an R record as proof that no rename occurred.
    if (prefix[0] === 'HEAD') added.push(...nul(git(root, ['ls-files', '--others', '--exclude-standard', '-z'])));
    for (const from of deleted) {
      const to = added.find(path => scope.owns(from) !== scope.owns(path));
      if (to) throw Error('closeout: ambiguous cross-scope deletion/addition ' + from + ' -> ' + to + '; reconcile ownership before closeout');
    }
  }
}

function workflowChecks(root, run, proofLayoutAlreadyChecked) {
  if (!proofLayoutAlreadyChecked) verifyProofLayout(run, root);
  for (const args of [
    ['tools/obligations.mjs', 'check', '--run', run, '--terminal'],
    ['tools/step9-report.mjs', 'check', '--run', run, '--root', root],
    ['tools/step9-report.mjs', 'check-evidence', '--run', run, '--root', root],
    ['tools/step9-report.mjs', 'check-response', '--run', run, '--root', root],
    ['tools/publication-ready.mjs', '--run', run, '--verify', '--require-report', '--root', root],
  ]) {
    const result = spawnSync(process.execPath, args, { cwd: root, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 });
    if (result.error || result.status !== 0) throw Error('closeout: existing workflow gate refused: '
      + (result.error?.message || (result.stderr || result.stdout).trim()));
  }
}
function committedAndCurrent(root, scope) {
  const head = new Map(treeEntries(root).map(row => [row.path, row]));
  const index = new Map(indexEntries(root).map(row => [row.path, row]));
  const present = scope.paths.filter(path => regularPath(root, path, true));
  const hashes = present.length ? textGit(root, ['hash-object', '--stdin-paths'],
    { input: Buffer.from(present.join('\n') + '\n') }).split('\n') : [];
  if (hashes.length !== present.length) throw Error('closeout: incomplete working-file object hashes');
  const working = new Map(present.map((path, i) => [path, hashes[i]]));
  const checkModes = textGit(root, ['config', '--get', 'core.filemode'], { optional: true }) !== 'false';
  for (const path of scope.paths) {
    const a = head.get(path), b = index.get(path), oid = working.get(path);
    if (!a && !b && !oid) continue; // authorized deletion already committed
    if (!a || !b || !oid || a.oid !== b.oid || a.mode !== b.mode || a.oid !== oid) {
      throw Error('closeout: owned artifact is not committed/current: ' + path);
    }
    if (checkModes
      && a.mode !== ((lstatSync(join(root, path)).mode & 0o111) ? '100755' : '100644')) {
      throw Error('closeout: owned working-file mode differs from HEAD: ' + path);
    }
  }
}

export function scopedCloseout({ root, run, checkOnly, finalReceipt, proofLayoutAlreadyChecked = false }) {
  const onMain = () => {
    if (textGit(root, ['symbolic-ref', '--short', 'HEAD']) !== 'main') throw Error('closeout: scoped mode requires main');
  };
  const receipt = 'research/' + run + '-dispatch/tool-close-step9-v2.result.json';
  if (finalReceipt && finalReceipt !== receipt) throw Error('closeout: scoped mode requires the normal final dispatch receipt ' + receipt);
  const oldReceiptBytes = existsSync(join(root, receipt)) ? readFileSync(join(root, receipt)) : null;
  const previous = oldReceiptBytes ? JSON.parse(decode(oldReceiptBytes)) : null;
  if (previous && !previous.closeout_scope) throw Error('closeout: final receipt predates scoped preservation evidence; owner reconciliation required');
  if (previous && (previous.closeout_scope.version !== 1
    || !Array.isArray(previous.closeout_scope.owned_paths)
    || previous.closeout_scope.policy !== 'research/' + run + '-closeout-scope.json')) {
    throw Error('closeout: malformed scoped final receipt');
  }
  // Refuse concrete side-effect configurations before asking Git to refresh
  // any working-tree state. No hook/filter/config setting is changed.
  refuseGitSideEffects(root, [], readScopePolicy(root, run).reviewedHook);
  onMain();
  const scope = loadScope(root, run, receipt, previous?.closeout_scope?.owned_paths || [], Boolean(finalReceipt));
  const inspectionPaths = [...new Set([...scope.inventory, ...scope.paths])];
  refuseGitSideEffects(root, inspectionPaths, scope.reviewedHook);
  refuseCrossScopeRenames(root, scope);
  workflowChecks(root, run, proofLayoutAlreadyChecked);
  const before = preservation(root, run, scope);
  if (previous) {
    if (previous.closeout_scope.policy_sha256 !== scope.policySha256
      || previous.closeout_scope.context_sha256 !== scope.contextSha256) throw Error('closeout: recorded policy/scope context changed');
    assertSame(before, previous.closeout_scope.preservation_before, 'recorded outside');
  }
  if (checkOnly) {
    if (!previous || previous.ok !== true || previous.run !== run
      || previous.written_by !== 'run-commit' || previous.label !== 'close-step9-v2') throw Error('closeout: missing scoped final receipt');
    committedAndCurrent(root, scope);
    onMain();
    refuseGitSideEffects(root, inspectionPaths, scope.reviewedHook);
    console.log('run-commit: ' + scope.paths.length + ' owned artifact(s) committed/current on main; outside index/HEAD/working preservation verified');
    return;
  }
  if (!finalReceipt && !previous) throw Error('closeout: initial scoped closeout requires --final-receipt');
  const beforeHead = textGit(root, ['rev-parse', 'HEAD']);
  const ownedBefore = scope.paths.map(path => fileState(root, path));
  const tmp = mkdtempSync(join(tmpdir(), run + '-closeout-'));
  const temporaryIndex = join(tmp, 'index'), actualIndex = gitPath(root, 'index');
  const env = { GIT_INDEX_FILE: temporaryIndex };
  const checkedMutation = action => {
    refuseGitSideEffects(root, inspectionPaths, scope.reviewedHook);
    try { return action(); }
    finally { refuseGitSideEffects(root, inspectionPaths, scope.reviewedHook); }
  };
  let writtenReceipt = null, committed = false;
  try {
    checkedMutation(() => {
      if (existsSync(actualIndex)) copyFileSync(actualIndex, temporaryIndex);
      else git(root, ['read-tree', 'HEAD'], { env });
    });
    mkdirSync(dirname(join(root, receipt)), { recursive: true });
    writtenReceipt = Buffer.from(JSON.stringify({
      role: 'tool', label: 'close-step9-v2', run, covers: ['all'], ok: true,
      written_by: 'run-commit', ended_at: new Date().toISOString(),
      closeout_scope: {
        version: 1, policy: scope.policyPath, policy_sha256: scope.policySha256,
        context_sha256: scope.contextSha256, owned_paths: scope.paths, before_head: beforeHead,
        preservation_before: before,
        ...(scope.reviewedHook ? { reviewed_hook: scope.reviewedHook } : {}),
        evidence: 'Baseline recorded before commit; successful tool return and --check verify equality afterward.',
        exclusions: ['Git metadata', 'node_modules', '.autopilot runtime', 'this run ignored dispatch .log/.log.gz files'],
      },
    }, null, 2) + '\n');
    writeFileSync(join(root, receipt), writtenReceipt);
    // Retain committed deletion tombstones in receipt/check scope, but do not
    // hand Git an unmatched pathspec on a later authorized closeout attempt.
    const stagedPaths = scope.paths.filter(path => path === receipt || scope.inventory.includes(path));
    const input = pathsInput(stagedPaths);
    checkedMutation(() => git(root, ['add', '--all', '--pathspec-from-file=-', '--pathspec-file-nul'], { env, input }));
    assertSame(scope.paths.filter(path => path !== receipt).map(path => fileState(root, path)),
      ownedBefore.filter(row => row.path !== receipt), 'validated owned working bytes');
    if (!readFileSync(join(root, receipt)).equals(writtenReceipt)) throw Error('closeout: final receipt changed before commit');
    assertSame(preservation(root, run, scope), before, 'pre-commit outside');
    if (textGit(root, ['rev-parse', 'HEAD']) !== beforeHead) throw Error('closeout: HEAD changed before commit');
    onMain();
    const preCommitScope = loadScope(root, run, receipt, scope.paths);
    assertSame(preCommitScope.paths, scope.paths, 'owned artifact inventory');
    if (preCommitScope.policySha256 !== scope.policySha256 || preCommitScope.contextSha256 !== scope.contextSha256) {
      throw Error('closeout: scope changed before commit');
    }
    checkedMutation(() => {
      git(root, ['commit', '--only', '--pathspec-from-file=-', '--pathspec-file-nul',
      '-m', 'chore(' + run + '): engine close-out — commit owned run artifacts\n\n'
        + scope.paths.length + ' exact paths; unrelated staged/working files preserved; no push or publication.'], { env, input });
      committed = true;
    });
    assertSame(scope.paths.filter(path => path !== receipt).map(path => fileState(root, path)),
      ownedBefore.filter(row => row.path !== receipt), 'committed owned working bytes');
    if (!readFileSync(join(root, receipt)).equals(writtenReceipt)) throw Error('closeout: final receipt changed during commit');
    assertSame(preservation(root, run, scope), before, 'post-commit outside');
    // Integrate only the new owned entries into the real index. Never reset
    // or checkout the repository; unrelated staged blobs and flags survive.
    const head = new Map(treeEntries(root).map(row => [row.path, row]));
    const zero = '0'.repeat(textGit(root, ['rev-parse', 'HEAD']).length);
    const rows = scope.paths.flatMap(path => {
      const row = head.get(path);
      return ['0 ' + zero + '\t' + path, ...(row ? [row.mode + ' ' + row.oid + '\t' + path] : [])];
    });
    checkedMutation(() => git(root, ['update-index', '-z', '--index-info'], { input: pathsInput(rows) }));
    assertSame(preservation(root, run, scope), before, 'final outside');
    const finalScope = loadScope(root, run, receipt, scope.paths);
    if (finalScope.policySha256 !== scope.policySha256 || finalScope.contextSha256 !== scope.contextSha256) {
      throw Error('closeout: scope changed during commit');
    }
    committedAndCurrent(root, finalScope);
    onMain();
    refuseGitSideEffects(root, inspectionPaths, scope.reviewedHook);
    console.log('run-commit: committed ' + scope.paths.length + ' owned artifact(s) on main ('
      + textGit(root, ['rev-parse', '--short', 'HEAD']) + '); outside preservation verified');
  } catch (error) {
    const headChanged = textGit(root, ['rev-parse', 'HEAD']) !== beforeHead;
    if (!committed && !headChanged && writtenReceipt
      && existsSync(join(root, receipt)) && readFileSync(join(root, receipt)).equals(writtenReceipt)) {
      if (oldReceiptBytes) writeFileSync(join(root, receipt), oldReceiptBytes);
      else unlinkSync(join(root, receipt));
    }
    throw Error(error.message + (committed ? '; commit landed but closeout remains held; no reset/checkout attempted'
      : headChanged ? '; HEAD changed during failed closeout; owner reconciliation required; no reset/checkout attempted' : ''));
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}
