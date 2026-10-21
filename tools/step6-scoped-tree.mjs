// One native scoped selector shared by readiness and report integrity.
// Inventories resolve identities/homes; only selected carriers, actual supplier
// closure, relevant evidence and workflow implementation inputs are hashed.
import { existsSync, lstatSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join, normalize, relative, resolve } from 'node:path';
import { protectedEntryHash, runScope, sha256, splitFrontmatter } from './step6-lib.mjs';
import { frontmatterList } from './frontmatter-list.mjs';
import { originalImportPath } from './physics-support/physics-imports.mjs';
import { loadOriginalSlotReclassification } from './step5-original-slot-reclassification.mjs';

export function scopedReadinessTree(run, root, { scope = runScope(run, root), includeRows = false, physics = false, ownedPaths = [], projectionOnly = false, sourceOverrides = {} } = {}) {
  const readSource = file => Object.hasOwn(sourceOverrides, file) ? sourceOverrides[file] : readFileSync(join(root, file), 'utf8');
  const receiptRel = `research/${run}-publication-readiness.json`;
  if (!scope) throw new Error('cannot seal readiness without a nonempty run scope');
  const mutableAfterReadiness = new Set([
    receiptRel,
    `research/${run}-judge-context-hashes.json`,
    `research/${run}-step6-evidence.json`,
    // Created by the final readiness gates, checked separately before commit.
    `research/${run}-proof-layout.json`,
    `research/${run}-step6-report-integrity.json`,
    `research/${run}-step6-report.response.json`,
    `research/${run}-step6-report.md`,
  ]);
  const dispatchPrefix = `research/${run}-dispatch/`;
  const files = new Set();
  const projections = new Map();
  const walk = (dir, accept = () => true, descend = () => true) => {
    if (!existsSync(dir)) return;
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const absolute = join(dir, entry.name);
      const rel = relative(root, absolute).replaceAll('\\', '/');
      if (mutableAfterReadiness.has(rel) || rel.startsWith(dispatchPrefix)) continue;
      if (entry.isDirectory() && descend(rel)) walk(absolute, accept, descend);
      else if ((entry.isFile() || entry.isSymbolicLink()) && accept(rel)) files.add(rel);
    }
  };
  const add = file => {
    if (mutableAfterReadiness.has(file) || file.startsWith(dispatchPrefix)) return;
    const path = join(root, file);
    // lstat includes dangling links; links are sealed, never traversed.
    try { if (!lstatSync(path).isDirectory()) files.add(file); }
    catch (error) { if (!['ENOENT', 'ENOTDIR'].includes(error.code)) throw error; }
  };
  const replacement = physics ? null : loadOriginalSlotReclassification(root, run, { current: true });
  const slotArchives = new Set();
  if (replacement) {
    const receipt = relative(root, replacement.path).replaceAll('\\', '/');
    add(receipt);
    // Absence is part of the transition, not an omitted protected input.
    projections.set(`items/${replacement.original_id}.md#original-slot-deletion`, 'licensed-original-slot-deletion\0'
      + JSON.stringify({ current_id: replacement.current_id, receipt }));
    // These receipt-authenticated preimages are opaque historical bytes. Their
    // extension need not describe their content (a page mirror can be .json).
    for (const file of [replacement.entry.original_source_file, replacement.entry.before_source_file,
      replacement.entry.current_source_file, ...[...replacement.metadata.values()].flatMap(row => [row.before_file, row.current_file])])
      slotArchives.add(relative(root, resolve(root, file)).replaceAll('\\', '/'));
  }
  const scalar = (fm, key) => fm.match(new RegExp(`^${key}:\\s*([^\\n]+?)\\s*$`, 'm'))?.[1]?.replace(/^['"]|['"]$/g, '');
  const itemIndex = new Map();
  const aliases = new Map();
  const identityClaims = [];
  for (const name of readdirSync(join(root, 'items')).sort()) {
    if (!name.endsWith('.md')) continue;
    const file = `items/${name}`;
    const text = readFileSync(join(root, file), 'utf8');
    let fm;
    try { fm = splitFrontmatter(text).frontmatter; } catch { continue; }
    const id = scalar(fm, 'id');
    if (!id) continue;
    itemIndex.set(id, { file, text, fm });
    const declaredAliases = frontmatterList(fm, 'aliases');
    identityClaims.push({ file, id, aliases: declaredAliases });
    for (const alias of declaredAliases) aliases.set(alias, id);
  }
  const manifests = readdirSync(join(root, 'research')).filter(name =>
    name.startsWith(`${run}-batch-`) && /^\d+\.pages\.json$/.test(name.slice(`${run}-batch-`.length))).sort();
  if (!manifests.length) throw new Error(`cannot seal readiness: ${run} has no manifests`);
  const manifestPages = manifests.flatMap(name => {
    const rows = JSON.parse(readFileSync(join(root, 'research', name), 'utf8'));
    if (!Array.isArray(rows)) throw new Error(`invalid readiness manifest ${name}`);
    add(`research/${name}`);
    return rows;
  });
  const manifestItems = manifestPages.flatMap(page => (page.items ?? []).map(item => typeof item === 'string' ? item : item.id));
  if (!manifestItems.length || manifestItems.some(id => !/^[a-z]+-[a-z0-9]+(?:-[a-z0-9]+)*$/.test(id ?? '')))
    throw new Error(`cannot seal readiness: ${run} has no valid populated manifest scope`);
  // Seal both promised and currently manifested subjects; disagreement is a
  // native scope gate failure, never grounds for silently dropping either set.
  const items = new Set([...scope.items.map(row => row.id), ...manifestItems]);
  const formalInputs = new Set();
  const collectFormalInputs = (value, field = '') => {
    if (typeof value === 'string' && /^(?:source|source_item|supplier_item|dependency_item|input|inputs|deps|justified_by)$/.test(field)) {
      const id = value.replace(/^items\//, '').replace(/\.md$/, '');
      const canonical = itemIndex.has(id) ? id : aliases.get(id);
      if (canonical) formalInputs.add(canonical);
    } else if (Array.isArray(value)) for (const row of value) collectFormalInputs(row, field);
    else if (value && typeof value === 'object') for (const [key, row] of Object.entries(value)) collectFormalInputs(row, key);
  };
  collectFormalInputs(manifestPages);
  for (const name of [`${run}-proof-contracts.json`, ...manifests.map(name => name.replace(/\.pages\.json$/, '.proof-contracts.json'))]) {
    const path = join(root, 'research', name);
    if (!existsSync(path)) continue;
    const contracts = JSON.parse(readFileSync(path, 'utf8')).contracts;
    for (const [id, contract] of Object.entries(contracts ?? {})) if (items.has(id)) collectFormalInputs(contract);
  }
  for (const id of formalInputs) items.add(id);
  const linkTargets = new Set();
  const queue = [...items];
  for (let i = 0; i < queue.length; i++) {
    const row = itemIndex.get(queue[i]);
    if (!row) throw new Error(`readiness prerequisite ${queue[i]} has no item`);
    add(row.file);
    for (const match of row.text.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) linkTargets.add(match[1].trim());
    const references = [...frontmatterList(row.fm, 'deps'), ...frontmatterList(row.fm, 'justified_by')];
    // Formal statement/definition/fact/proof uses remain substantive context
    // even when an author omitted the supplier from YAML. Native declaration
    // checks still reject that omission; this seal cannot waive source changes.
    for (const section of row.text.split(/^##\s+/m).slice(1)) {
      const heading = section.slice(0, section.indexOf('\n')).trim();
      if (/^(?:Statement|Definition|Facts|Given|Proof)(?:\b|$)/i.test(heading))
        for (const match of section.matchAll(/\[\[([^\]|]+)(?:\|[^\]]*)?\]\]/g)) references.push(match[1].trim());
    }
    for (const reference of references) {
      const id = itemIndex.has(reference) ? reference : aliases.get(reference);
      // Page links are handled below; unresolved item uses remain native gate errors.
      if (id && !items.has(id)) { items.add(id); queue.push(id); }
    }
  }
  const planFile = 'research/plan-spec.json';
  const plan = JSON.parse(readSource(planFile));
  const pages = new Set([...scope.pages.map(row => row.id), ...manifestPages.map(row => row.id)]);
  const pageIndex = new Map();
  const homes = [];
  const linkHomes = [];
  const resolvedLinks = new Set([...linkTargets].map(id => itemIndex.has(id) ? id : aliases.get(id)).filter(Boolean));
  walk(join(root, 'library'), file => {
    if (!file.endsWith('.md') || file.split('/').at(-1).startsWith('_')) return false;
    let fm;
    try { fm = splitFrontmatter(readFileSync(join(root, file), 'utf8')).frontmatter; } catch { return false; }
    const id = scalar(fm, 'page');
    if (!id) return false;
    const membership = [...frontmatterList(fm, 'items'), ...frontmatterList(fm, 'examples')].filter(id => items.has(id));
    const linkMembership = [...frontmatterList(fm, 'items'), ...frontmatterList(fm, 'examples')].filter(id => resolvedLinks.has(id));
    pageIndex.set(id, { file, fm });
    if (membership.length) { pages.add(id); homes.push({ file, id, items: membership }); }
    if (linkMembership.length) linkHomes.push({ file, id, items: linkMembership });
    return false;
  });
  for (const row of plan.pages) if ((row.items ?? []).some(item => items.has(typeof item === 'string' ? item : item.id))) pages.add(row.id);
  const pageQueue = [...pages];
  for (let i = 0; i < pageQueue.length; i++) {
    const id = pageQueue[i];
    const physical = pageIndex.get(id);
    if (physical) add(physical.file);
    const planned = plan.pages.filter(row => row.id === id);
    const requires = [...planned.flatMap(row => row.requires ?? []), ...manifestPages.filter(row => row.id === id).flatMap(row => row.requires ?? []),
      ...(physical ? frontmatterList(physical.fm, 'requires') : [])];
    for (const requirement of requires) if (!pages.has(requirement)) { pages.add(requirement); pageQueue.push(requirement); }
  }
  for (const row of scope.pages) add(row.file);
  for (const file of scope.pathwayFiles) add(file);
  // Keep every relevant plan row (including duplicate declarations), with exact
  // row fields. Other frontiers' prose notes and metadata are not run inputs.
  projections.set(planFile, JSON.stringify({ pages: plan.pages.filter(row => pages.has(row.id)) }));
  projections.set('library#relevant-item-homes', JSON.stringify(homes.sort((a, b) => a.file.localeCompare(b.file))));
  projections.set('items#relevant-aliases', JSON.stringify([...aliases].filter(([alias, id]) => items.has(id) || items.has(alias)).sort()));
  projections.set('items#relevant-identity-claims', JSON.stringify(identityClaims.filter(row =>
    items.has(row.id) || linkTargets.has(row.id) || row.aliases.some(alias => items.has(alias) || linkTargets.has(alias)))));
  // A bare prose link needs identity and home resolution, not certification of
  // the linked item's proof. Logical deps/justified_by above retain full bytes.
  projections.set('items#prose-link-resolution', JSON.stringify([...linkTargets].sort().map(target => {
    const id = itemIndex.has(target) ? target : aliases.get(target);
    const row = itemIndex.get(id);
    return { target, id: id ?? null, file: row?.file ?? null, page_file: pageIndex.get(target)?.file ?? null, kind: row ? scalar(row.fm, 'kind') : null,
      aliases: [...aliases].filter(([alias]) => alias === target).map(([alias, id]) => ({ alias, id })) };
  })));
  projections.set('library#prose-link-homes', JSON.stringify(linkHomes.sort((a, b) => a.file.localeCompare(b.file))));

  // Native workflow inputs, rather than every owner diagnostic bearing RUN.
  const native = /^(?:batch-\d+\.(?:pages|contracts|proof-contracts|coverage|cross-batch-dependencies)\.json|(?:scope-ledger|selection|covers|cross-batch-dependencies|cross-group-edges|drift-evidence|audit-manifest|audit-coverage|spine-audit|proof-contracts|impact(?:-3b)?|touches|judge(?:-adjudications|-attempts|-stamps|-closure)?|pathway(?:-closure)?|splice-\d+|splice-refusals|step3-auditor-(?:baseline|certifications)|step3-(?:closure|blockers|auditor-baseline|auditor-certifications)|3b-verdicts|step5-(?:scope|alerts|alert-decisions|auditor-baseline)|closeout-scope)\.(?:json|jsonl)|(?:reader(?:-findings)?-\d+|refute-\d+|alpha-batch-\d+-3a(?:-decisions)?)\.(?:json|md)|owner-authoring-direction\.md)$/;
  for (const name of readdirSync(join(root, 'research'))) {
    if (name.startsWith(`${run}-`) && native.test(name.slice(run.length + 1))) add(`research/${name}`);
  }
  for (const suffix of ['obligations.jsonl', 'step5-terminal-resolutions.jsonl', 'step5-owner-prerequisite-repairs.jsonl', 'step5-auditor-certifications.json'])
    add(`research/${run}-${suffix}`);
  for (const id of manifestItems) for (const stage of ['3a', '3b']) for (const role of ['owner', 'review'])
    add(`research/${run}-step${stage}-${role}-${id}.json`);
  walk(join(root, 'research', `${run}-step5-v2`));
  if (physics) {
    // Preserve the physics workflow's existing complete tooling selection.
    for (const dir of ['tools', 'briefs']) walk(join(root, dir));
  } else {
    const physicsTool = file => ['tools/physics-autopilot', 'tools/physics-support']
      .some(dir => file === dir || file.startsWith(`${dir}/`));
    walk(join(root, 'tools'), file => !physicsTool(file), dir => !physicsTool(dir));
    walk(join(root, 'briefs'));
    // A cross-domain regression test is not a production mathematics entrypoint.
    // Keep its own bytes above, without importing the independent physics engine
    // into mathematics readiness merely because the test exercises both engines.
    const productionSource = file => /\.[cm]?[jt]s$/.test(file)
      && !file.split('/').some(part => ['node_modules', 'test', 'tests', '__tests__', 'fixtures'].includes(part))
      && !/\.(?:test|spec)\.[cm]?[jt]s$/.test(file);
    const pending = [...files].filter(file => file.startsWith('tools/') && productionSource(file));
    const visited = new Set();
    for (let i = 0; i < pending.length; i++) {
      const file = pending[i];
      if (visited.has(file)) continue;
      visited.add(file);
      // Conservatively retain every literal relative source/JSON reference,
      // including static imports, export-from and literal dynamic imports.
      // Comments may over-select; modules are never evaluated for discovery.
      // Computed domain prefixes in the shared drivers choose ./ for math;
      // their unexecuted physics branch is not a mathematics entrypoint.
      const references = readSource(file).matchAll(/(['"`])(\.{1,2}\/[^'"`\r\n\\]*\.(?:[cm]?[jt]s|json))\1/g);
      for (const match of references) {
        if (match[2].includes('${')) continue;
        const dependency = normalize(join(dirname(file), match[2])).replaceAll('\\', '/');
        if (!physicsTool(dependency)) continue;
        const absolute = join(root, dependency);
        if (!existsSync(absolute) || !lstatSync(absolute).isFile())
          throw Error(`unresolved mathematics shared-tool dependency: ${file} -> ${dependency}`);
        add(dependency);
        if (/\.[cm]?[jt]s$/.test(dependency)) pending.push(dependency);
      }
    }
  }
  for (const file of ownedPaths) add(file);
  const policyFile = `research/${run}-closeout-scope.json`;
  if (existsSync(join(root, policyFile))) {
    const policy = JSON.parse(readFileSync(join(root, policyFile), 'utf8'));
    if (policy.version !== 1 || policy.run !== run || policy.authorized_by !== 'owner'
      || !Array.isArray(policy.additional_paths)) throw Error('invalid exact closeout scope policy');
    add(policyFile);
    for (const row of policy.shared_fragments ?? []) {
      if (row.path !== 'research/published-consumer-supplier-ledger.md'
        || typeof row.authority !== 'string' || !row.authority.startsWith(`research/${run}-`)
        || row.authority.split('/').includes('..')) throw Error('invalid shared-fragment ownership path');
      add(row.authority);
      const fragment = JSON.parse(readSource(row.authority));
      for (const evidence of fragment.evidence ?? []) {
        if (typeof evidence.path !== 'string' || !evidence.path.startsWith(`research/${run}-`)
          || evidence.path.split('/').includes('..')) throw Error('invalid shared-fragment evidence path');
        add(evidence.path);
      }
    }
    if (policy.plan_projection !== undefined) {
      const row = policy.plan_projection;
      if (!row || row.path !== 'research/plan-spec.json'
        || typeof row.authority !== 'string' || !row.authority.startsWith(`research/${run}-`)
        || row.authority.split('/').includes('..')) throw Error('invalid plan-projection ownership path');
      add(row.authority);
      const spec = JSON.parse(readSource(row.authority));
      for (const evidence of spec.evidence ?? []) {
        if (typeof evidence.path !== 'string' || !evidence.path.startsWith(`research/${run}-`)
          || evidence.path.split('/').includes('..')) throw Error('invalid plan-projection evidence path');
        add(evidence.path);
      }
    }
    for (const row of policy.additional_paths) {
      if (typeof row.path !== 'string' || row.path.startsWith('/') || row.path.split('/').includes('..')
        || typeof row.ownership_evidence !== 'string' || !row.ownership_evidence.startsWith(`research/${run}-`)
        || row.ownership_evidence.split('/').includes('..')) throw Error('invalid supporting ownership path');
      add(row.path); add(row.ownership_evidence);
    }
  }
  for (const file of ['CLAUDE.md', 'AGENTS.md', 'README.md', 'SCHEMA.md', 'WORKFLOW.md', 'autopilot.config.json', '.gitignore',
    'package.json', 'package-lock.json', 'pnpm-lock.yaml', 'tsconfig.json', 'research/b-leaf-legacy-allowlist.json']) add(file);

  const relevantIds = new Set([...items, ...pages]);
  const relevant = value => {
    const text = String(value ?? '');
    return text.includes(run) || [...text.matchAll(/[a-z][a-z0-9]*(?:-[a-z0-9]+)+/g)].some(match => relevantIds.has(match[0]));
  };
  const defectFile = 'research/defect-ledger.jsonl';
  const defectLines = readSource(defectFile).split('\n').filter(line => line.trim());
  // Parse every row: malformed shared input remains a global/runtime error.
  const retained = defectLines.filter(line => { const row = JSON.parse(line); return row.run === run || relevant(JSON.stringify(row.subject)); });
  projections.set(defectFile, retained.join('\n'));
  const publishedFile = 'research/published-consumer-supplier-ledger.md';
  const markdownProjection = text => text.split(/\n\s*\n/).flatMap(block =>
    block.trimStart().startsWith('|') ? block.split('\n').filter(relevant) : relevant(block) ? [block] : []).join('\n\n');
  if (Object.hasOwn(sourceOverrides, publishedFile) || existsSync(join(root, publishedFile))) projections.set(publishedFile, markdownProjection(readSource(publishedFile)));
  else if (!physics) throw Error(`missing ${publishedFile}`);

  // Follow exact existing local evidence/source references from native carriers
  // and relevant ledger records; newly added unattached diagnostics do not seal.
  const seen = new Set();
  // Match the exact opaque archive contract used by nativeProtectedPathClosure.
  // frozenSupportingEvidence stores raw JSON, JSONL or Markdown under SHA.json;
  // its historical contents are sealed bytes, never further source selectors.
  const supportingArchive = file => {
    if (slotArchives.has(file)) { add(file); return true; }
    const match = /^research\/[a-zA-Z0-9][a-zA-Z0-9_-]*-step5-v2\/supporting-metadata\/([a-f0-9]{64})\.json$/.exec(file);
    if (!match) return false;
    let current = root;
    for (const part of file.split('/')) {
      current = join(current, part);
      if (lstatSync(current).isSymbolicLink()) throw Error(`readiness: symlink in native supporting metadata archive: ${file}`);
    }
    const path = join(root, file);
    if (!lstatSync(path).isFile()) throw Error(`readiness: native supporting metadata archive is not a regular file: ${file}`);
    if (sha256(readFileSync(path)) !== match[1])
      throw Error(`readiness: native supporting metadata archive changed: ${file}`);
    add(file);
    return true;
  };
  const follow = text => {
    for (const match of text.matchAll(/(?:research|briefs)\/[a-zA-Z0-9_./-]+\.(?:jsonl|json|md|pdf|txt|mjs|mts)/g)) {
      const file = match[0];
      if (file.includes('/../') || projections.has(file) || mutableAfterReadiness.has(file) || file.startsWith(dispatchPrefix)) continue;
      if (supportingArchive(file)) continue;
      const path = join(root, file);
      if (file.startsWith('research/') && !file.startsWith(`research/${run}-`) && existsSync(path) && lstatSync(path).isFile()
        && /\.(?:jsonl|json|md)$/.test(file)) {
        const source = readFileSync(path, 'utf8');
        let projection;
        if (file.endsWith('.jsonl')) {
          projection = source.split('\n').filter(line => line.trim()).filter(line => { JSON.parse(line); return relevant(line); }).join('\n');
        } else if (file.endsWith('.json')) {
          // External review bundles often contain many unrelated item records.
          // Preserve common scalar metadata and only relevant structured rows.
          const project = value => {
            if (Array.isArray(value)) return value.filter(row => relevant(JSON.stringify(row))).map(project);
            if (value && typeof value === 'object') {
              // A relevant record is atomic: every field, hash and premise is
              // retained. Only enclosing bundles get a record projection.
              if (['id', 'item', 'subject', 'item_id', 'consumer', 'supplier'].some(key => relevant(value[key]))) return value;
              return Object.fromEntries(Object.entries(value).filter(([key, row]) =>
                ['schema', 'version', 'run', 'mode'].includes(key) || relevant(key) || relevant(JSON.stringify(row)))
                .map(([key, row]) => [key, row && typeof row === 'object' ? project(row) : row]));
            }
            return value;
          };
          const parsed = JSON.parse(source);
          if (!relevant(source)) continue;
          projection = JSON.stringify(project(parsed));
        } else projection = markdownProjection(source);
        if (projection) projections.set(file, projection);
      } else add(file);
    }
  };
  // Shared ledgers retain relevant historical records, but their old linked
  // review archives are not current prerequisite certification inputs. Native
  // run carriers below seal the actual external evidence they consume.
  const followedProjections = new Set(projections.keys());
  for (;;) {
    const pending = [...files].filter(file => !seen.has(file));
    const projected = [...projections].filter(([file]) => !followedProjections.has(file));
    if (!pending.length && !projected.length) break;
    for (const [file, value] of projected) { followedProjections.add(file); follow(value); }
    for (const file of pending) {
      seen.add(file);
      if (supportingArchive(file)) continue;
      if (file.startsWith('research/') && /\.(?:jsonl|json|md|txt)$/.test(file) && lstatSync(join(root, file)).isFile()) follow(readFileSync(join(root, file), 'utf8'));
    }
  }
  if (physics) {
    const importFile = 'research/math-imports.json';
    const imports = JSON.parse(readFileSync(join(root, importFile), 'utf8'));
    if (imports.version !== 1 || !Array.isArray(imports.files) || typeof imports.source_root !== 'string')
      throw Error('invalid physics import receipt');
    const relevantImports = imports.files.filter(row => files.has(row.path));
    projections.set(importFile, JSON.stringify({ version: imports.version, source_root: imports.source_root, files: relevantImports }));
    for (const row of relevantImports) {
      const original = originalImportPath(imports, row);
      // Keys outside the local root derive only from the authenticated import
      // mapping; local pins and exact originals are both independently sealed.
      const key = relative(root, original).replaceAll('\\', '/');
      if (!existsSync(original)) throw Error(`missing relevant imported original: ${row.path}`);
      files.add(key);
      if (row.path.startsWith('library/') && !row.path.endsWith('/_category.md')) {
        const category = relative(root, join(dirname(original), '_category.md')).replaceAll('\\', '/');
        if (existsSync(join(root, category))) files.add(category);
      }
    }
    add('physics-autopilot.config.json');
  }
  if (projectionOnly) return { projection_values: Object.fromEntries(projections) };
  for (const file of projections.keys()) files.delete(file);
  const physical = [...files].sort();
  const projectionHash = (file, value) => {
    const path = join(root, file);
    const carrier = file.includes('#') ? 'derived-index' : lstatSync(path).isSymbolicLink()
      ? `symlink\0${protectedEntryHash(path)}` : 'file';
    return sha256(`projection-v1\0${carrier}\0${value}`);
  };
  const rows = [...physical.map(file => `${file}\0${protectedEntryHash(join(root, file))}`),
    ...[...projections].map(([file, value]) => `${file}\0${projectionHash(file, value)}`)].sort();
  return { ...(includeRows ? { protected_tree_rows: rows } : {}), protected_tree_scope: 'frontier-prerequisite-context-v1', protected_tree_files: rows.length,
    protected_tree_paths: physical, protected_tree_projections: [...projections.keys()].sort(),
    protected_tree_sha256: sha256(rows.join('\n')) };
}

