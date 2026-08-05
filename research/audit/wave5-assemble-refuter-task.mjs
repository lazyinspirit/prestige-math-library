#!/usr/bin/env node
// wave5-assemble-refuter-task.mjs — build the assembled context file for one
// DeepSeek audit-refuter dispatch.
//
// The refuter lane is tool-less by transport: it cannot open a file, so a brief
// telling it to "read the item on disk" produces a confident reading of nothing
// (dispatch.mjs refuses a refuter without --task for exactly this reason). This
// script is the other half of that contract: it writes the item under review in
// full, plus the Statement/Definition text of every dependency it declares, so
// the refuter can quote a dependency when it alleges the dependency is too weak.
//
//   node research/audit/wave5-assemble-refuter-task.mjs <item-id> <out.md>

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const [id, out] = process.argv.slice(2);
if (!id || !out) {
  console.error('usage: wave5-assemble-refuter-task.mjs <item-id> <out.md>');
  process.exit(2);
}

const itemPath = (x) => join(REPO, 'items', `${x}.md`);

/** Split an item file into its frontmatter text and its body. */
function split(source) {
  const m = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(source);
  return m ? { front: m[1], body: m[2] } : { front: '', body: source };
}

/** Read a scalar frontmatter field without a YAML dependency. */
function field(front, name) {
  const m = new RegExp(`^${name}:\\s*(.*)$`, 'm').exec(front);
  if (!m) return null;
  return m[1].trim().replace(/^["']|["']$/g, '');
}

/** `deps: [a, b, c]` — the flow-sequence form every item in this corpus uses. */
function listField(front, name) {
  const m = new RegExp(`^${name}:\\s*\\[([^\\]]*)\\]`, 'm').exec(front);
  if (!m) return [];
  return m[1].split(',').map((s) => s.trim().replace(/^["']|["']$/g, '')).filter(Boolean);
}

/**
 * The claim-bearing section of a dependency. A refuter alleging "this dependency
 * does not license the step" has to quote it, so give it the whole proposition —
 * every heading a target might state its claim under, never a summary.
 */
function claimSections(body) {
  const wanted = ['Statement', 'Statement refuted', 'Definition', 'Construction', 'Example', 'Remark'];
  const out = [];
  const re = /^##\s+(.+?)\s*$/gm;
  const heads = [...body.matchAll(re)];
  for (let i = 0; i < heads.length; i += 1) {
    const name = heads[i][1].trim();
    if (!wanted.includes(name)) continue;
    const start = heads[i].index + heads[i][0].length;
    const end = i + 1 < heads.length ? heads[i + 1].index : body.length;
    out.push(`### ${name}\n\n${body.slice(start, end).trim()}`);
  }
  return out.join('\n\n');
}

if (!existsSync(itemPath(id))) {
  console.error(`no such item: items/${id}.md`);
  process.exit(1);
}
const source = readFileSync(itemPath(id), 'utf8');
const { front } = split(source);
const deps = listField(front, 'deps');
const justified = listField(front, 'justified_by');
const targets = [...new Set([...deps, ...justified])];

const parts = [];
parts.push(`# Adversarial proof reading — \`${id}\``);
parts.push('');
parts.push('## The item under review, in full');
parts.push('');
parts.push(`\`items/${id}.md\``);
parts.push('');
parts.push('```markdown');
parts.push(source.trim());
parts.push('```');
parts.push('');

if (targets.length) {
  parts.push('## The dependencies it declares, quoted verbatim from disk');
  parts.push('');
  parts.push('Each block below is the claim-bearing text of one declared dependency.');
  parts.push('These are the only statements the item is entitled to use. If a step');
  parts.push('needs more than the text below gives, that is the defect — quote the');
  parts.push('dependency text and show exactly what it fails to supply.');
  parts.push('');
  for (const dep of targets) {
    if (!existsSync(itemPath(dep))) {
      parts.push(`### \`${dep}\` — NOT ON DISK`);
      parts.push('');
      parts.push('This declared dependency does not resolve to an item file. Report it.');
      parts.push('');
      continue;
    }
    const depSource = readFileSync(itemPath(dep), 'utf8');
    const d = split(depSource);
    const title = field(d.front, 'title') ?? dep;
    const kind = field(d.front, 'kind') ?? '?';
    const provStatement = /^provenance:\n(?:\s+.*\n)*?\s+statement:\s*(\S+)/m.exec(d.front)?.[1] ?? 'untagged';
    const claims = claimSections(d.body);
    parts.push(`### \`${dep}\` — ${kind} — ${title}`);
    parts.push('');
    parts.push(`(statement provenance: ${provStatement})`);
    parts.push('');
    parts.push(claims || '_(no Statement/Definition section found in this item)_');
    parts.push('');
  }
} else {
  parts.push('## Dependencies');
  parts.push('');
  parts.push('This item declares no dependencies. Every claim in it must therefore be');
  parts.push('self-contained or elementary; check that it actually is.');
  parts.push('');
}

parts.push('## What to return');
parts.push('');
parts.push(`Read \`${id}\` adversarially against the dependency text above and return`);
parts.push('your findings in the block format the brief specifies, ending with the');
parts.push('`N fatal, M nonfatal` line.');
parts.push('');

writeFileSync(out, parts.join('\n'));
console.log(`${id}: ${targets.length} dependency block(s), ${parts.join('\n').length} bytes -> ${out}`);
