// Gate for articles/ ("Rabbit holes" narrative articles; convention in
// articles/README.md). Run from the content repo root:
//   node tools/tsx-run.mjs tools/articlecheck.mts [articles/foo.md ...]
// Bare invocation checks every article. Checks are mechanical only:
//   - required frontmatter fields present, slug = filename
//   - status is draft|published; a published article has a real date
//   - every [[wikilink]] resolves to an existing items/<id>.md
//   - a PUBLISHED article cites only PUBLISHED items (drafts may cite drafts)
//   - series fields travel together (series ⇒ seriesTitle + numeric part)
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, basename } from 'path';

const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync('articles')
      .filter((f) => f.endsWith('.md') && f !== 'README.md')
      .map((f) => join('articles', f));

function fmField(md: string, key: string): string | null {
  const m = md.match(new RegExp(`^${key}:\\s*(.*)$`, 'm'));
  if (!m) return null;
  return m[1].trim().replace(/^"(.*)"$/, '$1');
}

let failed = 0;
for (const file of files) {
  const md = readFileSync(file, 'utf8');
  const errs: string[] = [];

  const slug = fmField(md, 'slug');
  const status = fmField(md, 'status');
  const date = fmField(md, 'date');
  for (const key of ['slug', 'title', 'status', 'description', 'purpose']) {
    if (!fmField(md, key)) errs.push(`missing frontmatter field ${key}`);
  }
  if (slug && slug !== basename(file, '.md')) errs.push(`slug "${slug}" != filename`);
  if (status && status !== 'draft' && status !== 'published') errs.push(`bad status "${status}"`);
  if (status === 'published' && (!date || date === 'null')) errs.push('published without a date');

  const series = fmField(md, 'series');
  if (series) {
    if (!fmField(md, 'seriesTitle')) errs.push('series without seriesTitle');
    const part = fmField(md, 'part');
    if (!part || !/^\d+$/.test(part)) errs.push('series without a numeric part');
  }

  for (const m of md.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
    const id = m[1].trim();
    const itemFile = join('items', id + '.md');
    if (!existsSync(itemFile)) {
      errs.push(`wikilink [[${id}]] resolves to no item`);
      continue;
    }
    if (status === 'published') {
      const itemStatus = fmField(readFileSync(itemFile, 'utf8'), 'status');
      if (itemStatus !== 'published') errs.push(`published article cites ${itemStatus} item ${id}`);
    }
  }

  if (errs.length) {
    failed++;
    console.log(`FAIL ${file}`);
    for (const e of errs) console.log(`  ${e}`);
  } else {
    console.log(`ok   ${file}`);
  }
}
console.log(failed ? `${failed} of ${files.length} article(s) failed` : `${files.length} article(s) clean`);
process.exit(failed ? 1 : 0);
