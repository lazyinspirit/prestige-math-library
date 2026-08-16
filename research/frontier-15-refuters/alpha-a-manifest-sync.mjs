// Alpha `a`, step 6b — sync batch manifests to the authored items.
// Item frontmatter is the truth: `deps` is what the proof actually cites, and the
// two titles changed because I narrowed their Statements. Reader 1 left four dep
// rows unsynced; reader 2 wrote the Lagrange/bijection-count row against the
// order-thirty theorem when the item that gained those inputs was the order-105 one.
import fs from 'node:fs';

const yamlTitle = (raw) => {
  raw = raw.trim();
  if (/^".*"$/s.test(raw)) { try { return JSON.parse(raw); } catch { return raw.slice(1, -1); } }
  if (/^'.*'$/s.test(raw)) return raw.slice(1, -1).replace(/''/g, "'");
  return raw;
};

let changed = 0;
for (const b of [1, 2, 3]) {
  const P = `research/frontier-15-batch-${b}.pages.json`;
  const j = JSON.parse(fs.readFileSync(P, 'utf8'));
  for (const pg of (j.pages || j)) for (const it of (pg.items || [])) {
    if (typeof it === 'string') continue;
    const t = fs.readFileSync(`items/${it.id}.md`, 'utf8');
    const title = yamlTitle((t.match(/^title:\s*(.*)$/m) || ['', ''])[1]);
    const dm = t.match(/^deps:\s*\[([\s\S]*?)\]/m);
    const deps = dm ? dm[1].split(',').map((s) => s.trim()).filter(Boolean) : [];
    if (it.title !== undefined && it.title !== title) {
      console.log(`b${b} title  ${it.id}`);
      it.title = title; changed++;
    }
    if (it.deps !== undefined && (it.deps.slice().sort().join('|') !== deps.slice().sort().join('|'))) {
      console.log(`b${b} deps   ${it.id}: ${JSON.stringify(it.deps)} -> ${JSON.stringify(deps)}`);
      it.deps = deps; changed++;
    }
  }
  fs.writeFileSync(P, JSON.stringify(j, null, 2) + '\n');
}
console.log(`${changed} manifest field(s) synced`);
