#!/usr/bin/env node
// Shared, deterministic scope and hashing helpers for Step 10.
//
// The visual lane, its repair guard and the publication receipt must agree on
// which pages were built.  Re-deriving that scope three different ways would
// turn a missing screenshot into three mutually-consistent green checks.  The
// run's scope ledger is the promise made at step 0; page and item files are then
// resolved from disk, exactly as the renderer sees them.

import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { basename, join, relative } from 'node:path';
import { REPO } from './paths.mjs';

export const sha256 = (value) => createHash('sha256').update(value).digest('hex');

export function splitFrontmatter(text) {
  const m = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(text);
  if (!m) throw new Error('missing or malformed frontmatter');
  return { frontmatter: m[1], body: m[2] };
}

function listValue(frontmatter, key) {
  const line = frontmatter.match(new RegExp(`^${key}:\\s*\\[([^\\]]*)\\]\\s*$`, 'm'));
  if (!line) return [];
  return line[1].split(',').map((s) => s.trim().replace(/^['"]|['"]$/g, '')).filter(Boolean);
}

function scalarValue(frontmatter, key) {
  const line = frontmatter.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'));
  return line ? line[1].trim().replace(/^['"]|['"]$/g, '') : null;
}

function walkMarkdown(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkMarkdown(path));
    else if (entry.isFile() && entry.name.endsWith('.md')) out.push(path);
  }
  return out;
}

function pageIndex(repo) {
  const out = new Map();
  for (const file of walkMarkdown(join(repo, 'library'))) {
    if (basename(file).startsWith('_')) continue;
    let fm;
    try { fm = splitFrontmatter(readFileSync(file, 'utf8')).frontmatter; }
    catch { continue; }
    const page = scalarValue(fm, 'page');
    if (page) out.set(page, file);
  }
  return out;
}

export function runScope(run, repo = REPO) {
  const ledgerPath = join(repo, 'research', `${run}-scope-ledger.json`);
  if (!existsSync(ledgerPath)) throw new Error(`no research/${run}-scope-ledger.json`);
  const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'));
  const owed = Array.isArray(ledger.pages) ? ledger.pages : [];
  if (!owed.length) throw new Error(`${run}: scope ledger owes no pages`);

  const index = pageIndex(repo);
  const pages = owed.map((row) => {
    const id = String(row.id ?? '');
    const absolute = index.get(id);
    if (!absolute) throw new Error(`${run}: page ${id} from the scope ledger has no library file`);
    const rel = relative(repo, absolute);
    const { frontmatter } = splitFrontmatter(readFileSync(absolute, 'utf8'));
    const category = rel.split('/')[1];
    return {
      id,
      kind: String(row.kind ?? (id.endsWith('-examples') ? 'B' : 'A')),
      batch: String(row.batch ?? ''),
      category,
      file: rel,
      route: `${category}/${id}`,
      items: [...listValue(frontmatter, 'items'), ...listValue(frontmatter, 'examples')],
    };
  });

  const itemIds = [...new Set(pages.flatMap((p) => p.items))].sort();
  const items = itemIds.map((id) => {
    const file = `items/${id}.md`;
    if (!existsSync(join(repo, file))) throw new Error(`${run}: scoped item ${id} has no ${file}`);
    return { id, file };
  });
  const categories = [...new Set(pages.map((p) => p.category))].sort();
  const pathwayFiles = categories.map((category) => `library/${category}/_pathway.md`)
    .filter((file) => existsSync(join(repo, file)));

  return { run, ledger: relative(repo, ledgerPath), pages, items, categories, pathwayFiles };
}

export function hashFiles(files, repo = REPO) {
  const rows = [...new Set(files)].sort().map((file) => {
    const absolute = join(repo, file);
    if (!existsSync(absolute)) throw new Error(`hash input missing: ${file}`);
    return `${file}\0${sha256(readFileSync(absolute))}`;
  });
  return sha256(rows.join('\n'));
}

export function runContentHash(run, repo = REPO) {
  const scope = runScope(run, repo);
  return hashFiles([
    ...scope.pages.map((p) => p.file),
    ...scope.items.map((i) => i.file),
    ...scope.pathwayFiles,
  ], repo);
}

export function jsonFileHash(file, repo = REPO) {
  const absolute = file.startsWith('/') ? file : join(repo, file);
  if (!existsSync(absolute)) throw new Error(`JSON artifact missing: ${file}`);
  return sha256(readFileSync(absolute));
}

export function replaceDraftStatus(text) {
  const { frontmatter, body } = splitFrontmatter(text);
  if (!/^status:\s*draft\s*$/m.test(frontmatter)) return text;
  return `---\n${frontmatter.replace(/^status:\s*draft\s*$/m, 'status: published')}\n---\n${body}`;
}
