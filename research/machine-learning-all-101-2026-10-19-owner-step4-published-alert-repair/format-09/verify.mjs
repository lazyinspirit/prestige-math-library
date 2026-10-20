import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const YAML = require('/home/lazyinspirit/Projects/prestige-intelligence/web/node_modules/yaml');
const base = path.dirname(new URL(import.meta.url).pathname);
const root = process.cwd();
const inventory = JSON.parse(fs.readFileSync(path.join(base, 'inventory.json')));
const hash = raw => crypto.createHash('sha256').update(raw).digest('hex');
const section = /^## (Definition|Statement)\n([\s\S]*?)(?=^## |$(?![\s\S]))/m;
const wiki = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
const checks = [];
for (const row of inventory.items) {
 const original = fs.readFileSync(path.join(root, row.before_file), 'utf8');
 const candidate = fs.readFileSync(path.join(root, row.candidate_file), 'utf8');
 const live = fs.readFileSync(path.join(root, row.source));
 if (hash(live) !== row.before_raw_sha256 || hash(original) !== row.before_raw_sha256 || hash(candidate) !== row.after_raw_sha256) throw Error('inventory mismatch ' + row.id);
 const a = original.match(section), b = candidate.match(section);
 if (!a || !b || a[1] !== b[1]) throw Error('heading mismatch ' + row.id);
 const rendered = a[2].replace(wiki, (_, target, alias) => {
  const metadata = fs.readFileSync(path.join(root, 'items', target.trim() + '.md'), 'utf8').split('---')[1];
  return alias?.trim() || YAML.parse(metadata).title;
 });
 if (rendered.trimEnd() !== b[2].trimEnd()) throw Error('rendered prose differs ' + row.id);
 if (/\[\[|\]\(https?:/.test(b[2])) throw Error('hyperlink remains ' + row.id);
 const expectedRefs = [...new Set([...a[2].matchAll(wiki)].map(match => match[0]))];
 const rest = candidate.slice(b.index + b[0].length);
 const refSection = rest.match(new RegExp('^## ' + b[1] + ' references\\n\\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))', 'm'));
 if (!refSection || refSection.index !== 0 || refSection[1].trimEnd() !== expectedRefs.join('\n\n')) throw Error('reference placement differs ' + row.id);
 const originalOther = original.slice(0,a.index) + original.slice(a.index+a[0].length);
 const candidateOther = candidate.slice(0,b.index) + rest.slice(refSection[0].length);
 if (originalOther !== candidateOther) throw Error('unrelated text differs ' + row.id);
 checks.push({ id:row.id, raw_hashes:'pass', live_source_unchanged:'pass', rendered_statement_or_definition_equality:'pass', metadata_proofs_and_other_sections_exact:'pass', immediate_reference_paragraphs:'pass', mathematical_consumer_impact:'none' });
}
fs.writeFileSync(path.join(base, 'comparison.json'), JSON.stringify({checked_at:new Date().toISOString(), independent_parser:'renderer YAML package; independent Node verification from frozen preimages', items:checks},null,2)+'\n');
console.log(`Independent comparison: ${checks.length} candidates passed rendered-prose equality, metadata/proof exact preservation, reference placement and frozen raw hashes.`);
