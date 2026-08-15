// frontier-13 Alpha group b, step 6b: refresh the boundary worksheet rows whose
// evidence quoted a step I repaired, or whose named step no longer owns that
// case. Quoted evidence is re-read from disk so it cannot go stale silently.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const REPO = new URL('..', import.meta.url).pathname;
const PREFIX = 'The authored step ';

function stepText(id, step) {
  const src = readFileSync(join(REPO, 'items', `${id}.md`), 'utf8');
  const body = src.split(/^---$/m).slice(2).join('---');
  const re = new RegExp(`^## (?:Proof|Refutation|Counterexample|Verification)\\s*$([\\s\\S]*?)(?=^## |$(?![\\s\\S]))`, 'm');
  const text = (body.match(re)?.[1] ?? '').trim();
  const m = text.match(new RegExp(`^${step.replace('.', '\\.')}\\s+([\\s\\S]*?)(?=^\\d+\\.\\d+\\s|$(?![\\s\\S]))`, 'm'));
  if (!m) throw new Error(`${id}: step ${step} not found`);
  return m[1].replace(/\s*∎\s*$/, '').replace(/\s*\[[^\][]*\]\s*$/, '').trim();
}

// case -> replacement. A string re-quotes the named step; an object sets prose.
const PATCH = {
  3: {
    'thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree': {
      'iff-forward': { evidence: 'Step 1.1 establishes the forward direction for $\\dim V\\ge1$, and step 3.1 establishes it for $\\dim V=0$.' },
      'iff-reverse': { evidence: 'Steps 1.2 and 2.1 establish the reverse direction for $\\dim V\\ge1$, and step 3.1 establishes it for $\\dim V=0$.' },
    },
    'thm-gram-determinant-detects-linear-independence': {
      'iff-forward': { evidence: 'Steps 1.2 and 2.1 give a positive determinant from independence for $r\\ge1$, and step 3.1 gives it for $r=0$.' },
      'iff-reverse': { evidence: 'Step 1.1 gives a zero determinant from dependence, and step 3.1 records that $r=0$ leaves no dependent case.' },
    },
    'cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus': {
      empty: { evidence: 'Step 1.2 is restricted to $\\dim V\\ge1$ and step 2.1 handles $V=0$ explicitly.' },
      zero: { evidence: 'Step 2.1 gives the dimension-zero operator determinant $1$ from [L4].' },
    },
  },
  7: {
    'thm-closed-form-for-a-linear-recurrence-over-a-splitting-field': { degenerate: '1.2' },
    'ex-fibonacci-companion-matrix': { zero: '1.1', degenerate: '1.1' },
    'cex-factorial-generating-series-is-not-rational': { empty: '1.1' },
  },
};

for (const [batch, items] of Object.entries(PATCH)) {
  const path = join(REPO, 'research', `frontier-13-batch-${batch}.proof-contracts.json`);
  const doc = JSON.parse(readFileSync(path, 'utf8'));
  for (const [id, cases] of Object.entries(items)) {
    const boundaries = doc.contracts[id]?.boundaries;
    if (!boundaries) throw new Error(`no boundaries for ${id}`);
    for (const [name, patch] of Object.entries(cases)) {
      const row = boundaries.find((b) => b.case === name);
      if (!row) throw new Error(`${id}: no boundary row ${name}`);
      if (typeof patch === 'string') {
        if (!row.evidence?.startsWith(`${PREFIX}${patch} `)) throw new Error(`${id}/${name}: evidence does not quote step ${patch}`);
        row.evidence = `${PREFIX}${patch} verifies this boundary: ${stepText(id, patch)}`;
      } else {
        Object.assign(row, patch);
      }
      row.status = 'checked';
    }
    console.log(`batch ${batch}: ${id} — ${Object.keys(cases).join(', ')}`);
  }
  writeFileSync(path, `${JSON.stringify(doc, null, 2)}\n`);
}
