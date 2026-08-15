#!/usr/bin/env node
// Build 8 balanced read-only refuter clusters over the 649 load-bearing
// published citation edges, partitioned by CITED TARGET so each refuter reads a
// published Statement once and checks every restatement of it.
import fs from 'node:fs';

const groups = JSON.parse(fs.readFileSync('research/frontier-13-alpha-a-6c-grouped.json', 'utf8'));
const N = 8;
const bins = Array.from({ length: N }, () => ({ groups: [], edges: 0 }));
for (const g of groups) {                       // largest-first into lightest bin
  bins.sort((a, b) => a.edges - b.edges);
  bins[0].groups.push(g);
  bins[0].edges += g.uses.length;
}

const names = ['xl-a', 'xl-b', 'xl-c', 'xl-d', 'xl-e', 'xl-f', 'xl-g', 'xl-h'];
const manifest = [];
bins.forEach((bin, i) => {
  const name = names[i];
  const lines = [];
  lines.push(`## This dispatch — cross-level citation refutation, cluster \`${name}\``);
  lines.push('');
  lines.push('You are checking **cross-level citations**: facts in this run\'s draft items');
  lines.push('that cite items already **published** in the library. Step 6b found this run\'s');
  lines.push('dominant defect class *within* batches — an `[F#]`/`[L#]` restatement claiming');
  lines.push('more than the cited item\'s Statement says (an enlarged domain, a dropped');
  lines.push('`n\\ge1`, a citation pointing at an item that does not state the claimed fact at');
  lines.push('all). The cross-level surface below has had no equivalent pass.');
  lines.push('');
  lines.push(`Your cluster is **${bin.groups.length} published target items** carrying`);
  lines.push(`**${bin.edges} load-bearing citation edges**.`);
  lines.push('');
  lines.push('### Method — the target is read once, the restatements are checked against it');
  lines.push('');
  lines.push('For each published target below:');
  lines.push('');
  lines.push('1. Open `items/<target>.md` and read its **Statement** (or Definition /');
  lines.push('   Construction) verbatim. This is ground truth. Note its exact domain,');
  lines.push('   hypotheses, quantifiers, direction and conclusion.');
  lines.push('2. For each citing item listed under it, open `items/<citing-item>.md`, find the');
  lines.push('   named `[F#]`/`[A#]`/`[L#]` fact, and compare its prose against the Statement');
  lines.push('   you just read.');
  lines.push('3. Then read the **numbered steps that use that fact** (listed for you) and ask');
  lines.push('   the load-bearing question: *does the FAITHFUL version of this dependency');
  lines.push('   license this step?* A restatement can be inaccurate but harmless, or');
  lines.push('   accurate but applied outside its domain. Report which.');
  lines.push('');
  lines.push('Report a finding only when you can name the exact clause of the cited Statement');
  lines.push('and the exact clause of the restatement that differ, and say whether a step');
  lines.push('depends on the difference. **A restatement that is a faithful shortening is not');
  lines.push('a finding** — the house rule asks for the smallest faithful shortening, not the');
  lines.push('whole Statement. Do not report a missing clause the citing step never uses,');
  lines.push('unless the restatement positively asserts something false.');
  lines.push('');
  lines.push('### Your cluster');
  lines.push('');
  for (const g of bin.groups) {
    lines.push(`#### target: \`${g.cited}\`  (${g.kind}, ${g.uses.length} citation${g.uses.length > 1 ? 's' : ''})`);
    lines.push('');
    for (const u of g.uses) {
      lines.push(`- \`${u.item}\` **${u.label}** — used at step(s) ${u.steps.join(', ') || '(none)'}`);
      lines.push(`  - restatement on disk: ${u.restatement.replace(/\n/g, ' ')}`);
    }
    lines.push('');
  }
  lines.push('### Report format');
  lines.push('');
  lines.push('Write your findings to stdout as your final message. Per finding:');
  lines.push('');
  lines.push('- citing item id, fact label, cited target id');
  lines.push('- **what the restatement claims** vs **what the Statement says** (quote both)');
  lines.push('- which numbered step depends on the difference, or "no step depends on it"');
  lines.push('- your severity: `fatal` (a step is unlicensed / a false claim is asserted) or');
  lines.push('  `nonfatal` (a competent reader closes it in 30 seconds)');
  lines.push('');
  lines.push('Close with: targets opened, edges checked, findings by severity. If you checked');
  lines.push('an edge and it is clean, it is clean — do not pad the report.');
  const file = `research/frontier-13-refuters/6c-${name}.md`;
  fs.writeFileSync(file, lines.join('\n') + '\n');
  manifest.push({ cluster: name, file, targets: bin.groups.length, edges: bin.edges, targetIds: bin.groups.map((g) => g.cited) });
  console.log(`${name}: ${bin.groups.length} targets, ${bin.edges} edges -> ${file}`);
});
fs.writeFileSync('research/frontier-13-refuters/_clusters-6c.json', JSON.stringify(manifest, null, 1));

// coverage proof
const covered = new Set();
for (const m of manifest) for (const t of m.targetIds) covered.add(t);
const all = new Set(groups.map((g) => g.cited));
console.log(`\ncoverage: ${covered.size}/${all.size} targets, ${manifest.reduce((s, m) => s + m.edges, 0)}/${groups.reduce((s, g) => s + g.uses.length, 0)} edges`);
const missing = [...all].filter((t) => !covered.has(t));
console.log(missing.length ? `MISSING: ${missing.join(', ')}` : 'no target missing, none duplicated');
