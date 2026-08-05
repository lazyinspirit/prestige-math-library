#!/usr/bin/env node
// wave5-edge-bundle-tasks.mjs — pack the per-target citation tables into
// refuter-sized dispatch tasks.
//
// The per-target bundles from wave5-edge-table.mjs are the right READING unit
// but the wrong DISPATCH unit: 228 separate calls for tables that are often
// four lines long. Pack them by kind instead, because the two kinds fail
// differently. A fact citing a THEOREM can quietly strengthen it — drop a
// hypothesis, flip a direction, promote an implication to a biconditional —
// and that is this library's dominant confirmed defect class. A fact citing a
// DEFINITION mostly just names it. So proposition-bearing targets are packed
// small (more readers per edge) and definitions coarsely.
//
//   node research/audit/wave5-edge-bundle-tasks.mjs

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const bundleDir = join(REPO, 'research/audit/wave5-edge-bundles');
const outDir = join(REPO, 'research/audit/wave5-edge-tasks');
mkdirSync(outDir, { recursive: true });

const index = JSON.parse(readFileSync(join(bundleDir, '_index.json'), 'utf8'));
const kindOf = (id) => {
  const p = join(REPO, 'items', `${id}.md`);
  if (!existsSync(p)) return '?';
  return (/^kind:\s*(.*)$/m.exec(readFileSync(p, 'utf8'))?.[1] ?? '?').trim();
};

const PROPOSITIONAL = ['theorem', 'lemma', 'corollary', 'proposition', 'counterexample', 'example', 'false-statement'];
const props = [];
const defs = [];
for (const e of index) {
  if (e.missing || !e.file) continue;
  (PROPOSITIONAL.includes(kindOf(e.target)) ? props : defs).push(e);
}

const HEAD = `# Citation-precision audit — do these citing items state their target correctly?

You are reading a **published legacy corpus** of this library. Below are one or
more TARGET items, each quoted as it actually stands on disk, followed by every
place in this audit wave that cites it.

**The one question for every citing line:** does the citing text state the
target's own proposition — same domain, same quantifiers, same hypotheses, same
direction, same strength — or does it state something the target does not
actually give? A fact that quietly drops a hypothesis, flips an implication,
promotes an implication to a biconditional, or widens a domain is a **FATAL**
defect of the incorrect-dependency-citation class. It is this library's single
most common confirmed defect, and it is only visible by reading the two texts
against each other, which is what this file lets you do.

Do NOT report: a concise but faithful shortening (that is the required house
style); a paraphrase that preserves content; wording you would have chosen
differently; missing URLs; prose style. A citing line reading as a shortened
but faithful version of the target is CORRECT and must not be flagged.

Where a citing line says a dependency is declared but never cited in the body,
say whether that looks like a stale declaration or a use that lost its citation
— that one is NONFATAL either way.

For every finding use the block format from the brief, and finish with the
\`N fatal, M nonfatal\` line. If every citation is faithful, say so plainly and
name the targets you checked.

---

`;

function pack(entries, perTask, tag) {
  const tasks = [];
  for (let i = 0; i < entries.length; i += perTask) {
    const chunk = entries.slice(i, i + perTask);
    const body = chunk.map((e) => readFileSync(join(REPO, e.file), 'utf8')).join('\n\n---\n\n');
    const label = `${tag}-${String(tasks.length + 1).padStart(2, '0')}`;
    const file = join(outDir, `${label}.md`);
    writeFileSync(file, HEAD + body);
    tasks.push({ label, file: file.replace(`${REPO}/`, ''), targets: chunk.map((e) => e.target), edges: chunk.reduce((s, e) => s + e.citations, 0), bytes: body.length });
  }
  return tasks;
}

// Small packs, deliberately. A 187 KB task is one call the refuter reads
// thinly; five 37 KB tasks are five readings that each stay inside the part of
// the context where attention is actually reliable.
const tasks = [...pack(props, 4, 'edge-prop'), ...pack(defs, 4, 'edge-def')];
writeFileSync(join(outDir, '_tasks.json'), JSON.stringify(tasks, null, 1));
console.log(`${props.length} propositional target(s) + ${defs.length} definition target(s) -> ${tasks.length} task(s)`);
console.log(`largest task: ${Math.max(...tasks.map((t) => t.bytes))} bytes; total edges covered: ${tasks.reduce((s, t) => s + t.edges, 0)}`);
