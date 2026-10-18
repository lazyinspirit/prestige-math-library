// Final transaction only. Git plumbing never touches foreign working files,
// runs filters, or checks out a tree. All content gates precede this operation.
import { composeFragment, fragmentRecords, recordSignature, decodeLedger } from './step6-ledger-fragment.mjs';
import { composePlanProjection, planForeignResidual, planProjectionPageIds, decodePlan } from './step6-plan-projection.mjs';
import { copyFileSync, existsSync, lstatSync, mkdirSync, mkdtempSync, openSync,
  closeSync, readFileSync, renameSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve, relative } from 'node:path';
import { tmpdir } from 'node:os';
import { ownedStep6Paths } from './step6-owned-inputs.mjs';
import { preflightCloseoutScope, git, textGit, gitPath, regularPath,
  treeEntries, indexEntries, ignoredOwnedPaths, fileState, refuseGitSideEffects, verifiedInertHook } from './run-commit-scope.mjs';
import { runScope, sha256 } from './step6-lib.mjs';

const equal = (a, b, what) => {
  if (JSON.stringify(a) !== JSON.stringify(b)) throw Error(`step6 commit: ${what} changed; owner reconciliation required`);
};
const digest = rows => sha256(JSON.stringify(rows));
const nul = rows => Buffer.from(rows.join('\0') + '\0');
const finalPath = run => `research/${run}-dispatch/tool-step6-finalize-v3.result.json`;

export function preflightStep6(root, run, { physics = false, finalReceipt = finalPath(run) } = {}) {
  root = resolve(root);
  if (!/^[a-zA-Z0-9][a-zA-Z0-9_-]*$/.test(run) || finalReceipt !== finalPath(run))
    throw Error('step6 commit: invalid run or final receipt');
  const gitRoot = textGit(root, ['rev-parse', '--show-toplevel']);
  const prefix = relative(gitRoot, root).replaceAll('\\', '/');
  if (prefix !== (physics ? 'physics' : '')) throw Error('step6 commit: unexpected domain root');
  if (textGit(gitRoot, ['symbolic-ref', '--short', 'HEAD']) !== 'main')
    throw Error('step6 commit: requires main; no checkout attempted');
  const policyPath = join(root, `research/${run}-closeout-scope.json`);
  // A removed tracked policy cannot silently switch back to default ownership.
  const policyGit = (prefix ? prefix + '/' : '') + `research/${run}-closeout-scope.json`;
  const hadPolicy = textGit(gitRoot, ['ls-files', '--', policyGit])
    || textGit(gitRoot, ['ls-tree', '--name-only', 'HEAD', '--', policyGit]);
  if (hadPolicy && !existsSync(policyPath)) throw Error('step6 commit: tracked ownership policy is missing');
  const policy = existsSync(policyPath)
    ? preflightCloseoutScope(root, run, finalReceipt, { physics }) : null;
  const localPaths = [...new Set([...ownedStep6Paths(root, run, { physics }), finalReceipt])].sort();
  const paths = localPaths.map(path => (prefix ? prefix + '/' : '') + path);
  // Retain original Git side-effect refusals. Plumbing uses no filters or
  // commit hooks even when a previously reviewed inert hook is allowed.
  refuseGitSideEffects(gitRoot, paths, policy?.reviewedHook ?? verifiedInertHook(gitRoot));
  const preflightIndex = indexEntries(gitRoot); // checks conflicts, flags, unsupported submodules
  // Fail incompatible owned bases during real preparation, before final gates.
  // This read-only preflight is not an atomic snapshot; commit recomposes at CAS.
  const preflightHead = policy?.fragments?.length ? treeEntries(gitRoot) : [];
  for (const fragment of policy?.fragments ?? []) {
    const path = (prefix ? prefix + '/' : '') + fragment.path;
    const headRow = preflightHead.find(row => row.path === path), indexRow = preflightIndex.find(row => row.path === path);
    if (!headRow || !indexRow || headRow.mode !== '100644' || indexRow.mode !== '100644' || indexRow.flags !== '0')
      throw Error('step6 commit: fragment requires existing ordinary HEAD/index carrier');
    for (const row of [headRow, indexRow])
      composeFragment(decodeLedger(git(gitRoot, ['cat-file', 'blob', row.oid])), fragment.spec, run, new Set(fragment.ownedIds));
  }
  for (const projection of policy?.planProjections ?? []) {
    const path = (prefix ? prefix + '/' : '') + projection.path;
    const headRow = treeEntries(gitRoot).find(row => row.path === path);
    const indexRow = preflightIndex.find(row => row.path === path);
    if (!headRow || !indexRow || headRow.mode !== '100644' || indexRow.mode !== '100644' || indexRow.flags !== '0')
      throw Error('step6 commit: plan projection requires ordinary existing HEAD/index carrier');
    composePlanProjection(decodePlan(git(gitRoot, ['cat-file', 'blob', headRow.oid])), projection.spec, 'head');
    composePlanProjection(decodePlan(git(gitRoot, ['cat-file', 'blob', indexRow.oid])), projection.spec, 'index');
  }
  const scope = runScope(run, root);
  for (const row of [...scope.items, ...scope.pages]) {
    if (!localPaths.includes(row.file)) throw Error(`step6 commit: selected carrier is not owned: ${row.file}`);
    regularPath(root, row.file);
  }
  for (const path of localPaths) regularPath(root, path, true);
  const ignored = ignoredOwnedPaths(gitRoot, paths, preflightIndex);
  if (ignored.length) throw Error('step6 commit: an owned artifact is ignored');
  return { root, gitRoot, prefix, localPaths, paths, finalReceipt, policy, fragments: policy?.fragments ?? [],
    planProjections: policy?.planProjections ?? [], owns: path => paths.includes(path) };
}

export function commitStep6(root, run, { physics = false, finalReceipt = finalPath(run), receipt = {}, assertValidated } = {}) {
  if (typeof assertValidated !== 'function') throw Error('step6 commit: requires the genuine final-validation binding');
  const scope = preflightStep6(root, run, { physics, finalReceipt });
  for (const suffix of ['proof-layout.json', 'publication-readiness.json', 'step6-evidence.json', 'step6-report-integrity.json', 'step6-report.response.json', 'step6-report.md', 'pathway-closure.json', 'judge-closure.json'])
    regularPath(scope.root, `research/${run}-${suffix}`);
  const { gitRoot, paths, localPaths } = scope;
  const actualIndex = gitPath(gitRoot, 'index'), lockPath = actualIndex + '.lock';
  const beforeHead = textGit(gitRoot, ['rev-parse', 'HEAD']);
  const tmp = mkdtempSync(join(tmpdir(), 'step6-commit-'));
  const temporaryIndex = join(tmp, 'index'), integrateIndex = join(tmp, 'integrate');
  const env = { GIT_INDEX_FILE: temporaryIndex };
  const owns = new Set(paths), outside = rows => rows.filter(row => !owns.has(row.path));
  const receiptFile = join(scope.root, finalReceipt);
  const previous = existsSync(receiptFile) ? readFileSync(receiptFile) : null;
  let locked = false, landed = false, fd, pendingReceipt = null, successfulReceipt = null;
  try {
    // Respect Git's standard lock throughout: concurrent staged work is never
    // overwritten, and concurrent ref changes fail the compare-and-swap.
    fd = openSync(lockPath, 'wx', 0o600); locked = true; closeSync(fd); fd = undefined;
    const originalIndex = readFileSync(actualIndex);
    const beforeIndex = indexEntries(gitRoot), beforeTree = treeEntries(gitRoot, beforeHead);
    const outsideIndex = outside(beforeIndex), outsideTree = outside(beforeTree);
    const fragmentStates = new Map();
    for (const fragment of scope.fragments) {
      const path = (scope.prefix ? scope.prefix + '/' : '') + fragment.path;
      const headRow = beforeTree.find(row => row.path === path), indexRow = beforeIndex.find(row => row.path === path);
      if (!headRow || !indexRow || headRow.mode !== '100644' || indexRow.mode !== '100644' || indexRow.flags !== '0')
        throw Error('step6 commit: fragment requires existing ordinary HEAD/index carrier');
      const headText = decodeLedger(git(gitRoot, ['cat-file', 'blob', headRow.oid]));
      const indexText = decodeLedger(git(gitRoot, ['cat-file', 'blob', indexRow.oid]));
      const ids = new Set(fragment.ownedIds);
      const head = composeFragment(headText, fragment.spec, run, ids);
      const index = composeFragment(indexText, fragment.spec, run, ids);
      const residual = text => fragmentRecords(text, run, ids).filter(row => !row.owned).map(row => recordSignature(row.text));
      equal(residual(head.text), residual(headText), 'fragment HEAD foreign residual');
      equal(residual(index.text), residual(indexText), 'fragment index foreign residual');
      fragmentStates.set(path, { fragment, head, index, headRow, indexRow,
        headForeign: digest(residual(headText)), indexForeign: digest(residual(indexText)) });
    }
    const planStates = new Map();
    for (const projection of scope.planProjections) {
      const path = (scope.prefix ? scope.prefix + '/' : '') + projection.path;
      const headRow = beforeTree.find(row => row.path === path), indexRow = beforeIndex.find(row => row.path === path);
      if (!headRow || !indexRow || headRow.mode !== '100644' || indexRow.mode !== '100644' || indexRow.flags !== '0')
        throw Error('step6 commit: plan projection requires ordinary existing HEAD/index carrier');
      const headText = decodePlan(git(gitRoot, ['cat-file', 'blob', headRow.oid]));
      const indexText = decodePlan(git(gitRoot, ['cat-file', 'blob', indexRow.oid]));
      const head = composePlanProjection(headText, projection.spec, 'head');
      const index = composePlanProjection(indexText, projection.spec, 'index');
      const residual = text => planForeignResidual(text, planProjectionPageIds(projection.spec), projection.spec.insertions ?? []);
      equal(residual(head.text), residual(headText), 'plan HEAD foreign raw residual');
      equal(residual(index.text), residual(indexText), 'plan index foreign raw residual');
      planStates.set(path, { projection, head, index, headRow, indexRow,
        headForeign: sha256(residual(headText)), indexForeign: sha256(residual(indexText)) });
    }
    const validated = paths.filter(path => path !== (scope.prefix ? scope.prefix + '/' : '') + finalReceipt)
      .map(path => fileState(gitRoot, path));
    mkdirSync(dirname(receiptFile), { recursive: true });
    successfulReceipt = Buffer.from(JSON.stringify({ ...receipt, role: 'tool', label: 'step6-finalize-v3',
      run, covers: ['all'], ok: true, written_by: 'step6-finalize', prepared_at: new Date().toISOString(),
      closeout_scope: { version: 2, owned_paths: localPaths, before_head: beforeHead,
        outside_index_sha256: digest(outsideIndex), outside_head_sha256: digest(outsideTree),
        outside_working: 'Preserved by construction: only owned files written; no checkout, filters, hooks or foreign content scan.',
        policy_sha256: scope.policy?.policySha256 ?? null,
        context_sha256: scope.policy?.contextSha256 ?? null,
        shared_fragments: [...fragmentStates].map(([path, row]) => ({ path, authority: row.fragment.authority,
          authority_sha256: row.fragment.sha256, before_head_blob: row.headRow.oid, before_index_blob: row.indexRow.oid,
          head_foreign_sha256: row.headForeign, index_foreign_sha256: row.indexForeign,
          head_result_sha256: sha256(row.head.text), index_result_sha256: sha256(row.index.text) })),
        ...(scope.planProjections.length ? { plan_projections: [...planStates].map(([path, row]) => ({ path, authority: row.projection.authority,
          authority_sha256: row.projection.sha256, page_ids: row.projection.spec.page_ids,
          ...(row.projection.spec.version === 2 ? { added_page_ids: row.projection.spec.added_page_ids } : {}),
          ...(row.projection.spec.supporting_pages ? { supporting_page_ids: row.projection.spec.supporting_pages.map(page => page.id) } : {}),
          before_head_blob: row.headRow.oid, before_index_blob: row.indexRow.oid,
          head_foreign_raw_sha256: row.headForeign, index_foreign_raw_sha256: row.indexForeign,
          head_result_sha256: sha256(row.head.text), index_result_sha256: sha256(row.index.text) })) } : {}) } }, null, 2) + '\n');
    // Keep native coverage FALSE until every commit/index assertion succeeds.
    // The tree receives the prospective successful blob; a crash before final
    // materialization leaves an explicit pending result, never adoptable success.
    pendingReceipt = Buffer.from(JSON.stringify({ role: 'tool', label: 'step6-finalize-v3',
      run, covers: ['all'], ok: false, transaction_pending: true, before_head: beforeHead }, null, 2) + '\n');
    writeFileSync(receiptFile, pendingReceipt);
    const expectedReceipt = pendingReceipt;
    const present = paths.filter(path => !fragmentStates.has(path) && !planStates.has(path) && regularPath(gitRoot, path, true));
    const oids = textGit(gitRoot, ['hash-object', '-w', '--no-filters', '--stdin-paths'],
      { input: Buffer.from(present.join('\n') + '\n') }).split('\n');
    if (oids.length !== present.length) throw Error('step6 commit: incomplete owned object inventory');
    const oldTree = new Map(beforeTree.map(row => [row.path, row]));
    const checkModes = textGit(gitRoot, ['config', '--get', 'core.filemode'], { optional: true }) !== 'false';
    const blobs = new Map(present.map((path, i) => [path, { path, oid: oids[i],
      mode: !checkModes && oldTree.get(path) ? oldTree.get(path).mode
        : lstatSync(join(gitRoot, path)).mode & 0o111 ? '100755' : '100644' }]));
    const indexBlobs = new Map(blobs);
    for (const [path, row] of fragmentStates) {
      const object = text => textGit(gitRoot, ['hash-object', '-w', '--no-filters', '--stdin'], { input: Buffer.from(text) });
      blobs.set(path, { path, mode: '100644', oid: object(row.head.text) });
      indexBlobs.set(path, { path, mode: '100644', oid: object(row.index.text) });
    }
    for (const [path, row] of planStates) {
      const object = text => textGit(gitRoot, ['hash-object', '-w', '--no-filters', '--stdin'], { input: Buffer.from(text) });
      blobs.set(path, { path, mode: '100644', oid: object(row.head.text) });
      indexBlobs.set(path, { path, mode: '100644', oid: object(row.index.text) });
    }
    const assertPlanTree = (tree, kind, label) => {
      const entries = new Map(treeEntries(gitRoot, tree).map(row => [row.path, row]));
      for (const [path, row] of planStates) {
        const actual = entries.get(path), expected = (kind === 'head' ? blobs : indexBlobs).get(path);
        if (!actual || actual.oid !== expected.oid || actual.mode !== expected.mode)
          throw Error(`step6 commit: ${label} plan projection blob mismatch: ${path}`);
        const text = decodePlan(git(gitRoot, ['cat-file', 'blob', actual.oid]));
        composePlanProjection(text, row.projection.spec, kind);
        equal(sha256(planForeignResidual(text, planProjectionPageIds(row.projection.spec), row.projection.spec.insertions ?? [])),
          kind === 'head' ? row.headForeign : row.indexForeign, label + ' plan foreign raw residual');
      }
    };
    const assertFragmentTree = (tree, kind, label) => {
      const entries = new Map(treeEntries(gitRoot, tree).map(row => [row.path, row]));
      for (const [path, row] of fragmentStates) {
        const actual = entries.get(path), expected = (kind === 'head' ? blobs : indexBlobs).get(path);
        if (!actual || actual.oid !== expected.oid || actual.mode !== expected.mode)
          throw Error(`step6 commit: ${label} fragment blob mismatch`);
        const text = decodeLedger(git(gitRoot, ['cat-file', 'blob', actual.oid]));
        const residual = fragmentRecords(text, run, new Set(row.fragment.ownedIds))
          .filter(record => !record.owned).map(record => recordSignature(record.text));
        equal(digest(residual), kind === 'head' ? row.headForeign : row.indexForeign, label + ' fragment residual');
      }
    };
    const receiptGitPath = (scope.prefix ? scope.prefix + '/' : '') + finalReceipt;
    const receiptBlob = textGit(gitRoot, ['hash-object', '-w', '--no-filters', '--stdin'], { input: successfulReceipt });
    blobs.get(receiptGitPath).oid = receiptBlob;
    const zero = '0'.repeat(beforeHead.length);
    const updatesFor = source => paths.flatMap(path => {
      const row = source.get(path);
      return [`0 ${zero}\t${path}`, ...(row ? [`${row.mode} ${row.oid}\t${path}`] : [])];
    });
    const updates = updatesFor(blobs), indexUpdates = updatesFor(indexBlobs);
    git(gitRoot, ['read-tree', beforeHead], { env });
    git(gitRoot, ['update-index', '-z', '--index-info'], { env, input: nul(updates) });
    const tree = textGit(gitRoot, ['write-tree'], { env });
    equal(outside(treeEntries(gitRoot, tree)), outsideTree, 'outside proposed HEAD');
    assertFragmentTree(tree, 'head', 'proposed HEAD');
    assertPlanTree(tree, 'head', 'proposed HEAD');
    const commit = textGit(gitRoot, ['commit-tree', tree, '-p', beforeHead], {
      input: Buffer.from(`chore(${run}): close out validated frontier\n\n${paths.length} exact owned paths; no push or publication.\n`) });
    // Construct the real-index result from its exact original, preserving all
    // foreign staged blobs and flags. update-index never reads working bytes.
    copyFileSync(actualIndex, integrateIndex);
    git(gitRoot, ['update-index', '-z', '--index-info'],
      { env: { GIT_INDEX_FILE: integrateIndex }, input: nul(indexUpdates) });
    assertFragmentTree(textGit(gitRoot, ['write-tree'], { env: { GIT_INDEX_FILE: integrateIndex } }), 'index', 'proposed integrated index');
    assertPlanTree(textGit(gitRoot, ['write-tree'], { env: { GIT_INDEX_FILE: integrateIndex } }), 'index', 'proposed integrated index');
    equal(paths.filter(path => path !== (scope.prefix ? scope.prefix + '/' : '') + finalReceipt)
      .map(path => fileState(gitRoot, path)), validated, 'validated owned working bytes');
    if (!readFileSync(receiptFile).equals(expectedReceipt)) throw Error('step6 commit: receipt changed');
    const currentScope = preflightStep6(root, run, { physics, finalReceipt });
    for (const suffix of ['pathway-closure.json', 'judge-closure.json'])
      regularPath(currentScope.root, `research/${run}-${suffix}`);
    equal(currentScope.paths, paths, 'owned inventory');
    equal(currentScope.policy?.contextSha256 ?? null, scope.policy?.contextSha256 ?? null, 'scope authority');
    equal(currentScope.fragments, scope.fragments, 'fragment authority');
    equal(currentScope.planProjections, scope.planProjections, 'plan projection authority');
    if (!readFileSync(actualIndex).equals(originalIndex)) throw Error('step6 commit: real index changed despite lock');
    if (textGit(gitRoot, ['symbolic-ref', '--short', 'HEAD']) !== 'main') throw Error('step6 commit: branch changed');
    // Recheck only the validated frontier/context at the atomic ref boundary,
    // never another content battery or a foreign working-tree inventory.
    assertValidated();
    git(gitRoot, ['update-ref', '-m', `step6 ${run}`, 'refs/heads/main', commit, beforeHead]);
    landed = true;
    writeFileSync(lockPath, readFileSync(integrateIndex));
    renameSync(lockPath, actualIndex); locked = false;
    const afterIndex = indexEntries(gitRoot), afterTree = treeEntries(gitRoot, commit);
    equal(outside(afterIndex), outsideIndex, 'outside index including flags');
    equal(outside(afterTree), outsideTree, 'outside committed tree');
    const committed = new Map(afterTree.map(row => [row.path, row]));
    const indexed = new Map(afterIndex.map(row => [row.path, row]));
    for (const path of paths) {
      for (const [actual, expected] of [[committed.get(path), blobs.get(path)], [indexed.get(path), indexBlobs.get(path)]]) {
        if (expected ? !actual || actual.oid !== expected.oid || actual.mode !== expected.mode : actual)
          throw Error(`step6 commit: owned committed/index blob mismatch: ${path}`);
      }
    }
    for (const [path, row] of fragmentStates) {
      const ids = new Set(row.fragment.ownedIds);
      const residual = text => fragmentRecords(text, run, ids).filter(record => !record.owned).map(record => recordSignature(record.text));
      const committedText = decodeLedger(git(gitRoot, ['cat-file', 'blob', committed.get(path).oid]));
      const indexedText = decodeLedger(git(gitRoot, ['cat-file', 'blob', indexed.get(path).oid]));
      equal(digest(residual(committedText)), row.headForeign, 'committed fragment foreign residual');
      equal(digest(residual(indexedText)), row.indexForeign, 'indexed fragment foreign residual');
    }
    assertPlanTree(commit, 'head', 'committed HEAD');
    assertPlanTree(textGit(gitRoot, ['write-tree']), 'index', 'committed integrated index');
    equal(paths.filter(path => path !== (scope.prefix ? scope.prefix + '/' : '') + finalReceipt)
      .map(path => fileState(gitRoot, path)), validated, 'committed owned working bytes');
    if (!readFileSync(receiptFile).equals(expectedReceipt)) throw Error('step6 commit: committed receipt changed');
    if (textGit(gitRoot, ['rev-parse', 'HEAD']) !== commit
      || textGit(gitRoot, ['symbolic-ref', '--short', 'HEAD']) !== 'main')
      throw Error('step6 commit: HEAD moved during transaction');
    // This is the first adoptable success on disk, after transaction checks.
    writeFileSync(receiptFile, successfulReceipt);
    if (!readFileSync(receiptFile).equals(successfulReceipt)) throw Error('step6 commit: final result changed');
    return { commit, owned_paths: localPaths, outside_index_sha256: digest(outsideIndex),
      outside_head_sha256: digest(outsideTree) };
  } catch (error) {
    // Never leave a successful native result after a failed transaction. A
    // landed commit is retained for explicit recovery, never reset or checked out.
    const current = existsSync(receiptFile) ? readFileSync(receiptFile) : null;
    const ours = current && (pendingReceipt?.equals(current) || successfulReceipt?.equals(current));
    if (ours && landed) writeFileSync(receiptFile, JSON.stringify({ role: 'tool', label: 'step6-finalize-v3',
      run, covers: ['all'], ok: false, error: error.message, commit_landed: true }, null, 2) + '\n');
    else if (ours && previous) writeFileSync(receiptFile, previous);
    else if (ours) rmSync(receiptFile);
    throw Error(error.message + (landed ? '; commit landed; native closeout held for reconciliation' : ''));
  } finally {
    if (fd !== undefined) closeSync(fd);
    if (locked) rmSync(lockPath, { force: true });
    rmSync(tmp, { recursive: true, force: true });
  }
}
