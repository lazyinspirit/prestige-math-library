from pathlib import Path
import json,difflib
p=Path('research/numerical-optimization-dynamics-2026-10-16-ROOT-step6-ignore-performance-cycle1')
ops=[]
def propose(file,path,replacements):
 before=(p/'before'/file).read_text();after=before
 for a,b in replacements:
  if after.count(a)!=1:raise ValueError('ambiguous proposal preimage')
  after=after.replace(a,b)
 (p/'proposed'/file).write_text(after)
 (p/(file+'.diff')).write_text(''.join(difflib.unified_diff(before.splitlines(True),after.splitlines(True),fromfile=path,tofile=path)))
 ops.append({'path':path,'exact_preimage':str(p/'before'/file),'proposed':str(p/'proposed'/file),'replacements':[{'before':a,'after':b}for a,b in replacements]})
helper='''// Preserve check-ignore's tracked-path exclusion without its per-stdin-path
// full index scan. Unusual pathspec/case/sparse/index states retain native Git.
export function ignoredOwnedPaths(root, paths, index) {
  const original = () => nul(git(root, ['check-ignore', '-z', '--stdin'], {
    input: pathsInput(paths), optional: true, literalPathspecs: false,
  }) || Buffer.alloc(0));
  const literal = path => {
    try { safePath(path); return true; } catch { return false; }
  };
  if (!Array.isArray(index) || !index.indexSnapshot || !paths.length
    || paths.some(path => !literal(path))
    || ['GIT_LITERAL_PATHSPECS', 'GIT_GLOB_PATHSPECS', 'GIT_NOGLOB_PATHSPECS', 'GIT_ICASE_PATHSPECS']
      .some(key => process.env[key] !== undefined)
    || index.some(row => row.stage !== 0 || row.flags !== '0'
      || !['100644', '100755', '120000'].includes(row.mode))) return original();
  const config = () => ['core.ignorecase', 'core.sparsecheckout', 'core.sparsecheckoutcone', 'index.sparse']
    .map(key => textGit(root, ['config', '--type=bool', '--get', key], { optional: true }));
  const beforeConfig = config();
  if (beforeConfig.some(value => value !== null && value !== 'false')) return original();
  const snapshot = index.indexSnapshot;
  const currentIndex = () => {
    const path = gitPath(root, 'index');
    return { path, sha256: existsSync(path) ? sha256(readFileSync(path)) : null };
  };
  const requireCurrent = () => {
    if (JSON.stringify(currentIndex()) !== JSON.stringify(snapshot)
      || JSON.stringify(config()) !== JSON.stringify(beforeConfig))
      throw Error('closeout: index or ignore matching configuration changed during ignore check');
  };
  requireCurrent();
  const names = index.map(row => row.path).sort();
  const lowerBound = value => {
    let lo = 0, hi = names.length;
    while (lo < hi) { const mid = (lo + hi) >>> 1; if (names[mid] < value) lo = mid + 1; else hi = mid; }
    return lo;
  };
  const tracked = path => names[lowerBound(path)] === path
    || names[lowerBound(path + '/')]?.startsWith(path + '/') === true;
  // Git also excludes a literal parent path when an indexed descendant matches.
  // Every other exact original path still receives Git's real ignore evaluation.
  const remaining = paths.filter(path => !tracked(path));
  const ignored = remaining.length ? nul(git(root, ['check-ignore', '--no-index', '-z', '--stdin'], {
    input: pathsInput(remaining), optional: true, literalPathspecs: false,
  }) || Buffer.alloc(0)) : [];
  requireCurrent();
  return ignored;
}

'''
propose('run-commit-scope.mjs','tools/run-commit-scope.mjs',[
("  if (rows.some(row => row.mode === '160000')) throw Error('closeout: submodule index preservation is not supported');\n  return rows;", "  if (rows.some(row => row.mode === '160000')) throw Error('closeout: submodule index preservation is not supported');\n  Object.defineProperty(rows, 'indexSnapshot', { value: { path, sha256: after } });\n  return rows;"),
('export function fileState(root, path) {',helper+'export function fileState(root, path) {'),
("  // check-ignore reads exact filenames and rejects literal pathspec magic.\n  const ignored = nul(git(root, ['check-ignore', '-z', '--stdin'], {\n    input: pathsInput(paths), optional: true, literalPathspecs: false,\n  }) || Buffer.alloc(0));", "  const ignored = ignoredOwnedPaths(root, paths, index);")])
propose('step6-commit.mjs','tools/step6-commit.mjs',[
("  treeEntries, indexEntries, fileState, refuseGitSideEffects, verifiedInertHook } from './run-commit-scope.mjs';", "  treeEntries, indexEntries, ignoredOwnedPaths, fileState, refuseGitSideEffects, verifiedInertHook } from './run-commit-scope.mjs';"),
("  const ignored = git(gitRoot, ['check-ignore', '-z', '--stdin'],\n    { input: nul(paths), optional: true, literalPathspecs: false });\n  if (ignored?.length) throw Error('step6 commit: an owned artifact is ignored');", "  const ignored = ignoredOwnedPaths(gitRoot, paths, preflightIndex);\n  if (ignored.length) throw Error('step6 commit: an owned artifact is ignored');")])
before='''Readiness and closeout treat both `ENOENT` and `ENOTDIR` as an absent path:'''
after='''Closeout ignore checks reuse the genuine parsed index for a bounded fast path:
case-sensitive, nonsparse configuration, default ordinary index flags, safe
literal subjects and no pathspec environment overrides. Exact indexed filenames
and literal parent paths with indexed descendants retain native tracked-path
exclusion; every remaining selected path receives actual Git ignore evaluation
with `--no-index`. The parsed index's original raw snapshot and matching
configuration must remain current around the check. Ambiguous states retain the
original native command, including sparse/index-backed ignore handling. No path,
ignore rule, scope/ref guard or present-carrier requirement is waived.

Readiness and closeout treat both `ENOENT` and `ENOTDIR` as an absent path:'''
propose('WORKFLOW.md','WORKFLOW.md',[(before,after)])
(p/'proposal.json').write_text(json.dumps({'version':1,'run':'numerical-optimization-dynamics-2026-10-16','status':'research-only first-cycle code proposal; unexecuted; no hashes/tests/benchmarks','install':'root only after actual paused/drained hold and exact guards; preserve original live-query diagnostic','operations':ops},indent=2)+'\n')
