from pathlib import Path
import difflib
here=Path(__file__).resolve().parent;repo=here.parents[2]
source=repo/'tools/physics-support/physics-content.mjs';old=source.read_text();new=old.replace('// Physics-only content policy. Pure functions are shared by planning and gates.','// Physics-only content policy shared by planning and gates.')
new=new.replace("import { readFileSync, readdirSync, existsSync } from 'node:fs';","import { readFileSync, readdirSync, existsSync, realpathSync } from 'node:fs';")
new=new.replace("import { join, basename } from 'node:path';","import { join, basename, resolve } from 'node:path';\nimport { recordedPublishedRepair } from './published-repair-policy.mjs';")
anchor="export function readItem(file) {"
helper='''// Loader provenance is filesystem context only, never publication acceptance.
// Every use rechecks the actual current carrier and authoritative repair policy.
const repositorySources = new WeakMap();
function recordedLocalPublication(item, sourceContext) {
  const context = sourceContext && repositorySources.get(sourceContext);
  if (!context || !text(item.verification?.repair) || context.importedIds.has(item.id)) return false;
  try {
    const file = join(context.root, 'items', `${item.id}.md`);
    if (!/^[a-z][a-z0-9-]*$/.test(item.id) || resolve(item.file) !== file || realpathSync(file) !== file) return false;
    const importsFile = join(context.root, 'research/math-imports.json');
    const importsRaw = existsSync(importsFile) ? readFileSync(importsFile, 'utf8') : null;
    if (importsRaw !== context.importsRaw) return false;
    const current = readItem(file);
    // Planned overlays and caller-modified metadata cannot borrow the audited
    // history of different source bytes or a different parsed carrier.
    if (current.raw !== item.raw || JSON.stringify(current) !== JSON.stringify(item)) return false;
    return recordedPublishedRepair(context.root, item.id, current.raw, current.verification?.repair).ok === true;
  } catch { return false; }
}

'''
assert new.count(anchor)==1;new=new.replace(anchor,helper+anchor)
oldarg='selectedPages = null, importedReferenceContext = null })'
assert new.count(oldarg)==1;new=new.replace(oldarg,'selectedPages = null, importedReferenceContext = null, sourceContext = null })')
condition="if (item.status === 'published' && !item.verification?.audited && !object(item.verification?.verified)) error('physical-publication'"
assert new.count(condition)==1;new=new.replace(condition,"if (item.status === 'published' && !item.verification?.audited && !object(item.verification?.verified)\n        && !recordedLocalPublication(item, sourceContext)) error('physical-publication'")
anchor="  const imports = existsSync(join(root, 'research/math-imports.json')) ? JSON.parse(readFileSync(join(root, 'research/math-imports.json'), 'utf8')) : { files: [] };"
replacement="""  root = realpathSync(resolve(root));
  const importsRaw = existsSync(join(root, 'research/math-imports.json')) ? readFileSync(join(root, 'research/math-imports.json'), 'utf8') : null;
  const imports = importsRaw === null ? { files: [] } : JSON.parse(importsRaw);"""
assert new.count(anchor)==1;new=new.replace(anchor,replacement)
anchor='  return { items, pages, importedIds, importedReferenceContext };'
assert new.count(anchor)==1;new=new.replace(anchor,"  const sourceContext = Object.freeze({});\n  repositorySources.set(sourceContext, { root, importsRaw, importedIds: new Set(importedIds) });\n  return { items, pages, importedIds, importedReferenceContext, sourceContext };")
file=here/'candidate/tools/physics-support/physics-content.mjs';file.write_text(new)
for entry in (repo/'tools/physics-support').iterdir():
 dest=file.parent/entry.name
 if not dest.exists():dest.symlink_to(entry)
(here/'physics-content.patch').write_text(''.join(difflib.unified_diff(old.splitlines(True),new.splitlines(True),fromfile='a/tools/physics-support/physics-content.mjs',tofile='b/tools/physics-support/physics-content.mjs')))
