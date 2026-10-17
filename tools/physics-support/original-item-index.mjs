// Original item bodies and descriptive metadata are outside a scoped run's
// identity index. Required originals are still read in full by their consumers.
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';
import { parseFrontmatter } from './content-policy-lib.mjs';
import { splitFrontmatter } from './facts-block.mjs';

const fields = new Set(['id', 'aliases', 'kind', 'domain']);

export function readOriginalItemIdentity(file) {
  const { fm } = splitFrontmatter(readFileSync(file, 'utf8'));
  let metadata;
  try { metadata = parseFrontmatter(fm); }
  catch (error) {
    // A malformed unrelated scalar (for example an unfinished source locator)
    // must not require repairing another author's prose. Only the ordinary
    // top-level block-mapping spelling can be projected safely. Complex keys,
    // merges, duplicate identity fields and unreadable identity values fail
    // closed: they could conceal or steal a required ID/alias.
    const blocks = [], seen = new Set();
    let current = null;
    for (const line of fm.split(/\r?\n/)) {
      if (!line.trim() || /^\s*#/.test(line)) { if (current) current.lines.push(line); continue; }
      if (/^[ \t]/.test(line) || /^-\s/.test(line)) {
        if (!current) throw error;
        current.lines.push(line); continue;
      }
      const match = /^([A-Za-z_][\w-]*):(?:\s|$)/.exec(line);
      if (!match) throw error;
      current = { key: match[1], lines: [line] };
      if (fields.has(current.key)) {
        if (seen.has(current.key)) throw error;
        seen.add(current.key); blocks.push(current);
      }
    }
    metadata = parseFrontmatter(blocks.map(block => block.lines.join('\n')).join('\n'));
    if (metadata.id !== basename(file, '.md')) throw error;
  }
  if (typeof metadata.id !== 'string' || !metadata.id.trim()
    || (metadata.aliases !== undefined && (!Array.isArray(metadata.aliases)
      || metadata.aliases.some(alias => typeof alias !== 'string' || !alias.trim())))
    || ['kind', 'domain'].some(field => metadata[field] !== undefined && typeof metadata[field] !== 'string'))
    throw Error(`invalid mathematics source identity/classification: ${file}`);
  return { ...Object.fromEntries([...fields].filter(field => metadata[field] !== undefined).map(field => [field, metadata[field]])), file };
}
