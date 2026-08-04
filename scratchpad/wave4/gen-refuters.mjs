import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
const CONVENTIONS = readFileSync('briefs/judge-conventions.txt','utf8').trim();
mkdirSync('scratchpad/wave4/lanes', { recursive: true });

const LANES = {
 'f1-cardinal-core': ['def-cardinal-arithmetic','lem-cardinal-operations-are-well-defined','lem-cardinality-of-a-well-orderable-set','lem-cardinal-arithmetic-basic-laws','thm-cardinal-arithmetic-agrees-with-finite-counting'],
 'f2-cantor-hessenberg': ['thm-cardinal-power-set-and-cantor','thm-hessenberg','cor-cardinal-absorption','lem-successor-cardinal-exists','thm-every-infinite-cardinal-is-an-aleph'],
 'f3-hierarchies-ac': ['def-aleph-and-beth-hierarchies','cor-the-aleph-and-beth-hierarchies-are-well-defined','thm-cardinal-comparability-iff-ac','thm-tarski-square','rem-cardinal-arithmetic-choice-ledger'],
 'f4-cofinality': ['def-cofinality','lem-cofinality-is-well-defined','thm-cofinality-basics','thm-regularity-of-the-alephs','def-infinite-cardinal-sum-and-product','thm-konig','cor-cofinality-of-a-cardinal-power'],
 'f5-false-statements': ['fs-cardinal-addition-is-cancellative','fs-every-aleph-is-regular','fs-cardinal-exponentiation-is-strictly-monotone-in-the-base','fs-the-continuum-has-cardinality-aleph-omega'],
 'f6-examples': ['ex-cardinal-absorption-computed','ex-the-cardinality-of-the-continuum','ex-aleph-one-is-at-most-the-continuum','ex-the-cofinality-of-aleph-omega','ex-a-singular-cardinal-of-uncountable-cofinality','ex-an-aleph-fixed-point','ex-the-beth-hierarchy-computed','ex-counting-functions-and-subsets-of-the-continuum'],
 'r1-limits-basics': ['def-sequence','lem-limit-of-tail','lem-limit-unique','lem-convergent-implies-bounded','lem-convergent-implies-cauchy','lem-null-times-bounded','rem-sequence-conventions'],
 'r2-algebra-of-limits': ['thm-algebra-of-limits','lem-limit-preserves-order','thm-squeeze','lem-limit-abs','def-divergence-to-infinity','lem-reciprocal-of-null-diverges'],
 'r3-subsequences-fs': ['lem-index-map-grows','lem-subsequence-inherits-limit','fs-bounded-implies-convergent','fs-limit-preserves-strict-inequality','fs-subsequence-convergence-implies-convergence'],
 't1-compactness-core': ['def-compact-space','lem-compactness-of-a-subspace-is-ambient','def-compactness-variants','thm-compactness-variants-hierarchy','rem-compactness-conventions-and-choice-ledger'],
 't2-compactness-theorems': ['thm-compact-iff-fip','thm-closed-subspace-of-a-compact-space-is-compact','thm-compact-subset-of-a-hausdorff-space-is-closed','thm-compactness-under-continuous-maps','thm-compactness-agrees-with-metric-compactness'],
 't3-products-tychonoff': ['lem-tube-lemma-for-a-compact-factor','thm-finite-products-of-compact-spaces','thm-alexander-subbase-lemma','thm-tychonoff','cor-heine-borel-in-the-product-topology'],
 't4-local-baire-onepoint': ['def-locally-compact-space','thm-locally-compact-hausdorff-basics','def-baire-space','thm-baire-category-locally-compact-hausdorff','lem-dependent-choice-along-a-sequence-of-relations','def-one-point-compactification','thm-one-point-compactification-properties'],
 't5-ordinal-spaces': ['lem-the-order-topology-on-an-ordinal','thm-ordinal-spaces-and-compactness','thm-the-long-line-is-countably-compact-and-not-compact','thm-quasicomponents-equal-components-in-a-compact-hausdorff-space'],
 't6-false-statements': ['fs-a-compact-subset-is-closed-in-every-space','fs-compact-implies-sequentially-compact','fs-sequentially-compact-implies-compact','fs-countably-compact-implies-compact','fs-local-compactness-is-hereditary'],
 't7-examples': ['ex-compactness-in-the-standard-topologies','ex-the-interval-the-cantor-set-and-the-hilbert-cube-are-compact','ex-the-alexander-subbase-lemma-applied-to-a-closed-interval','ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals','ex-the-sorgenfrey-line-is-lindelof-and-its-square-is-not','ex-one-point-compactifications-of-the-line-and-of-the-naturals','cex-limit-point-compact-without-countable-compactness','cex-a-continuous-image-of-a-locally-compact-space'],
};

const PREAMBLE = (lane, ids) => `# Wave 4 audit proof-refuter — lane \`${lane}\`

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are a **read-only adversarial proof-refuter** (GPT 5.6 Sol, xhigh) dispatched
by the wave-4 audit Alpha of the prestige-math-library published-page retro-audit
(\`AUDIT-WORKFLOW.md\` step A6). Your sandbox is read-only by design: **you never
edit a file and never propose to apply anything yourself.** You return evidence.
Alpha alone adjudicates every finding from disk.

## Your standard — the judges' standard

Read every proof step and every cited dependency as someone trying to REFUTE the
item. These are already-published pages of a legacy corpus; the point of this
audit is to find what is actually wrong in them, not to confirm they read well.

${CONVENTIONS}

## Triage — the standing rule, binding

- **Non-negotiable, always report:** mathematical accuracy, logical validity,
  correct citation.
- **Explicitly acceptable, spend no effort and do NOT report:** minor citational
  quirks; logical gaps a competent reader closes **within 30 seconds**; other
  non-fatal quirks; imperfection at the level of the letter; prose style; page
  summary length; missing provenance URLs.

## Your assigned items (${ids.length})

${ids.map((id) => `- \`items/${id}.md\``).join('\n')}

## What to do, per item

1. Read the whole item file from disk, including frontmatter (\`title\`, \`deps\`,
   \`proved_here\`), the Statement/Definition, the Facts and Assumptions block, every
   numbered Proof/Verification/Refutation step, and every Remark.
2. **For every \`[F#]\`/\`[A#]\`/\`[L#]\` fact, open the cited target item on disk**
   (\`items/<id>.md\`) and check the fact against the target's actual Definition or
   Statement: same domain, same hypotheses, same quantifiers, same direction, no
   hidden stronger claim, no invented converse. **Inspect the target before
   alleging a dependency is too weak** — quote it.
3. Check each numbered step is licensed by exactly what it cites (facts, earlier
   steps, the given hypotheses, elementary algebra).
4. Check the **title and the Statement against what the proof actually gives**. A
   title or Statement claiming more than the proof licenses is a fatal defect even
   when the proof itself is valid.
5. Check the **choice ledger**: where AC, countable choice (AC_omega) or dependent
   choice is actually spent, the item must say so. An unqualified statement whose
   proof spends choice is a fatal defect. Conversely, an item claiming a proof is
   choice-free while a step selects from infinitely many nonempty sets is fatal.
6. **Read Remarks with a numbered step's suspicion.** In the last five waves of
   this audit most confirmed fatal defects were in Fact blocks and Remark prose,
   not in numbered steps.
7. For an example/counterexample/false-statement item, verify the **witness**
   really has every claimed property, and that refuting the false statement does
   not silently require more than the item establishes.

## Output — the only thing you return

Plain markdown in your final message. No file writes.

For each finding, in this exact shape:

\`\`\`
### FINDING n — <item id> — <one-line defect>
LOCATION: <section and, if possible, line number>
QUOTE: "<verbatim text from the item>"
DEFECT: <precisely what is false, unlicensed, missing or misattributed>
EVIDENCE: <for a citation defect, the verbatim clause from the cited target on
disk that shows the mismatch; for a false claim, an explicit counterexample>
SEVERITY: fatal | nonfatal
MINIMAL REPAIR: <the smallest correct replacement text, or "none — statement is
false as such and must be narrowed to ...">
\`\`\`

Then end with:

\`\`\`
## Coverage
Items read in full: <ids>
Items not read, and why: <ids or "none">
Facts checked against their target on disk: <count>
Findings: <fatal count> fatal, <nonfatal count> nonfatal
\`\`\`

**If you find nothing fatal, say so plainly.** A clean lane is a real result. Do
not manufacture a finding to look useful, and do not report a 30-second gap as
fatal. But do not soften a real defect either: if a published Statement is false,
say it is false and give the counterexample.
`;

for (const [lane, ids] of Object.entries(LANES)) {
  writeFileSync(`scratchpad/wave4/lanes/refuter-${lane}.md`, PREAMBLE(lane, ids));
}
console.log('wrote', Object.keys(LANES).length, 'lane briefs');
console.log('total items', Object.values(LANES).flat().length, 'unique', new Set(Object.values(LANES).flat()).size);
