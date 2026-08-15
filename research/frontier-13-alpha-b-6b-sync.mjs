// frontier-13 Alpha group b, step 6b: re-sync the batch-3 and batch-7 proof
// contracts to the repaired item text. Claims, inputs and citation `uses` are
// read back off disk; new citation quotes are extracted verbatim from the cited
// item so the substring test cannot drift.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const REPO = new URL('..', import.meta.url).pathname;
const item = (id) => readFileSync(join(REPO, 'items', `${id}.md`), 'utf8');

function section(source, heading) {
  const body = source.split(/^---$/m).slice(2).join('---');
  const re = new RegExp(`^## ${heading}\\s*$([\\s\\S]*?)(?=^## |$(?![\\s\\S]))`, 'm');
  return (body.match(re)?.[1] ?? '').trim();
}

// The proof body of an item, whatever its heading is called.
function proof(source) {
  for (const h of ['Proof', 'Refutation', 'Counterexample', 'Verification']) {
    const s = section(source, h);
    if (s) return s;
  }
  return '';
}

// Numbered steps -> { step, claim, inputs }, matching the contract's own shape:
// claim is the step text without the trailing bracket, inputs are its contents.
function steps(source) {
  const text = proof(source);
  const out = [];
  const re = /^(\d+\.\d+)\s+([\s\S]*?)(?=^\d+\.\d+\s|$(?![\s\S]))/gm;
  for (const m of text.matchAll(re)) {
    let claim = m[2].replace(/\s*∎\s*$/, '').trim();
    const tail = claim.match(/\[([^\][]*)\]\s*$/);
    let inputs = [];
    if (tail) {
      inputs = tail[1].split(',').map((s) => s.trim()).filter(Boolean);
      claim = claim.slice(0, tail.index).trim();
    }
    out.push({ step: m[1], claim, inputs });
  }
  return out;
}

// Extract a quote verbatim from a cited item, failing loudly if absent.
function quoteFrom(id, headings, needleStart, needleEnd) {
  const src = item(id);
  let body = '';
  for (const h of headings) { body = section(src, h); if (body) break; }
  const i = body.indexOf(needleStart);
  if (i < 0) throw new Error(`quote start not found in ${id}: ${needleStart.slice(0, 60)}`);
  const j = needleEnd ? body.indexOf(needleEnd, i) : -1;
  const q = needleEnd
    ? body.slice(i, j < 0 ? undefined : j + needleEnd.length)
    : body.slice(i);
  if (j < 0 && needleEnd) throw new Error(`quote end not found in ${id}`);
  if (!body.includes(q)) throw new Error(`quote does not occur in ${id}`);
  return q.trim();
}

const STATEMENT = ['Statement', 'Statement refuted', 'Definition', 'Example'];

// --- new / retargeted citations ------------------------------------------
const NEW_CITATIONS = {
  'thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree': [{
    fact: 'L8',
    source: 'thm-spectrum-is-the-root-set-of-the-characteristic-polynomial',
    source_section: 'Statement',
    quote: quoteFrom('thm-spectrum-is-the-root-set-of-the-characteristic-polynomial', STATEMENT,
      'For an endomorphism $T$', '\\chi_T(\\lambda)=0\\}.$$'),
  }],
  'cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus': [{
    fact: 'L6',
    source: 'cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases',
    source_section: 'Statement',
    quote: quoteFrom('cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases', STATEMENT,
      'Every finite-dimensional', 'this is the empty basis.'),
  }],
  'ex-fibonacci-companion-matrix': [{
    fact: 'L4',
    source: 'def-companion-matrix-of-a-linear-recurrence',
    source_section: 'Definition',
    quote: quoteFrom('def-companion-matrix-of-a-linear-recurrence', STATEMENT,
      'The **row-shift companion matrix**', 'with all other entries zero.'),
  }],
};

// [L2] of the adjoint theorem was retargeted from the orthonormal-basis
// existence corollary, which does not state the coordinate identity, to the
// Parseval clause that does.
const RETARGET = {
  'thm-matrix-of-the-adjoint-is-the-conjugate-transpose': {
    L2: {
      drop: 'cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases',
      add: {
        fact: 'L2',
        source: 'thm-bessel-inequality-and-finite-parseval-identity',
        source_section: 'Statement',
        quote: quoteFrom('thm-bessel-inequality-and-finite-parseval-identity', STATEMENT,
          'If the list is an orthonormal basis', '\\overline{\\langle w,e_i\\rangle},$$'),
      },
    },
  },
};

// The `,qquad` typo repaired in the Parseval Statement is quoted verbatim by
// three other contracts; refresh them from disk rather than hand-patching.
const REQUOTE_SOURCE = 'thm-bessel-inequality-and-finite-parseval-identity';
const REQUOTE_FULL = section(item(REQUOTE_SOURCE), 'Statement');

const TOUCHED = {
  3: [
    'thm-diagonalisable-iff-characteristic-polynomial-splits-and-multiplicities-agree',
    'thm-matrix-of-the-adjoint-is-the-conjugate-transpose',
    'thm-gram-determinant-detects-linear-independence',
    'cor-orthogonal-and-unitary-operators-form-groups-and-have-unit-determinant-modulus',
    'ex-weighted-inner-product-on-finite-coordinate-space',
  ],
  7: [
    'thm-closed-form-for-a-linear-recurrence-over-a-splitting-field',
    'thm-words-avoiding-finitely-many-factors-have-rational-generating-functions',
    'ex-fibonacci-companion-matrix',
    'cex-factorial-generating-series-is-not-rational',
    'fs-transfer-matrix-inversion-needs-a-spectral-radius-hypothesis',
  ],
};

for (const [batch, ids] of Object.entries(TOUCHED)) {
  const path = join(REPO, 'research', `frontier-13-batch-${batch}.proof-contracts.json`);
  const doc = JSON.parse(readFileSync(path, 'utf8'));

  // Refresh every quote of the re-typeset Parseval Statement.
  for (const contract of Object.values(doc.contracts)) {
    for (const c of contract.citations ?? []) {
      if (c.source === REQUOTE_SOURCE && c.quote.includes(',qquad')) c.quote = REQUOTE_FULL;
    }
  }

  for (const id of ids) {
    const contract = doc.contracts[id];
    if (!contract) throw new Error(`no contract for ${id}`);

    // Retarget an inaccurate citation before recomputing `uses`.
    const retarget = RETARGET[id];
    if (retarget) {
      for (const [fact, { drop, add }] of Object.entries(retarget)) {
        const idx = contract.citations.findIndex((c) => c.fact === fact && c.source === drop);
        if (idx < 0) throw new Error(`${id}: no ${fact} citation of ${drop} to retarget`);
        contract.citations.splice(idx, 1, { ...add, uses: [] });
      }
    }
    for (const add of NEW_CITATIONS[id] ?? []) {
      if (contract.citations.some((c) => c.fact === add.fact && c.source === add.source)) continue;
      contract.citations.push({ ...add, uses: [] });
    }

    // Claims and inputs come back off the repaired item text.
    const onDisk = steps(item(id));
    const byStep = new Map(onDisk.map((s) => [s.step, s]));
    const entries = [...(contract.derivations ?? []), ...(contract.routine_steps ?? [])];
    for (const entry of entries) {
      const s = byStep.get(entry.step);
      if (!s) throw new Error(`${id}: contract step ${entry.step} is not on disk`);
      entry.claim = s.claim;
      entry.inputs = s.inputs;
    }
    for (const s of onDisk) {
      if (!entries.some((e) => e.step === s.step)) throw new Error(`${id}: step ${s.step} has no contract entry`);
    }

    // `uses` is every numbered step whose inputs cite that fact.
    for (const c of contract.citations) {
      c.uses = onDisk.filter((s) => s.inputs.includes(c.fact)).map((s) => s.step);
      if (c.uses.length === 0) throw new Error(`${id}: citation ${c.fact} (${c.source}) is now unused`);
    }
  }

  writeFileSync(path, `${JSON.stringify(doc, null, 2)}\n`);
  console.log(`batch ${batch}: re-synced ${ids.length} contract(s)`);
}
