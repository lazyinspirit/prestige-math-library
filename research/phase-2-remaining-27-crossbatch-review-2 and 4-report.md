# Cross-batch dependency review — consumer batches 2 and 4

Run `phase-2-remaining-27`, Step 3b dispatch `step3b-crossbatch-24`.
Scope: every declared cross-batch edge whose `consumer_batch` is 2 or 4, taken
from `research/phase-2-remaining-27-cross-batch-dependencies.json` after
`node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`.

## Files rewritten (only these)

- `research/phase-2-remaining-27-batch-2.cross-batch-dependencies.json` — 33 rows,
  exactly the declared edges with consumer batch 2.
- `research/phase-2-remaining-27-batch-4.cross-batch-dependencies.json` — 7 rows,
  exactly the declared edges with consumer batch 4.

No item, manifest, coverage, proof-contract, notes or other report file was
edited.

## Counts

- Declared edges reviewed: **40** (batch 2: 33, batch 4: 7).
- **Verified: 39. Defects: 1.**
- Batch-2 rewrite: 15 previously present rows were re-checked against the current
  items and rewritten with current evidence; 18 rows were added for declared
  edges that had no row; 28 stale rows were dropped. The dropped rows were rows
  for pairs that are not declared cross-batch edges of this run: 27 referenced a
  supplier outside the run's frontier (published items or pages, e.g.
  `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`,
  `thm-closed-unit-ball-compact-iff-finite-dimensional`,
  `thm-completion-measurable-functions-have-base-measurable-representatives`,
  `product-measures-and-the-fubini-tonelli-theorems`) or a supplier of the same
  batch (`def-compact-linear-operator`, `lem-finite-rank-operators-are-compact`,
  `thm-norm-limit-of-compact-operators-is-compact`,
  `thm-hilbert-schmidt-operators-are-compact`, pages
  `compact-operators-and-riesz-schauder-theory` and
  `square-integrable-kernels-and-hilbert-schmidt-compactness`); 1 row was the only
  carrier of an edge whose declarations are now empty
  (`thm-l-two-kernels-give-hilbert-schmidt-operators` <=
  `thm-separable-hilbert-space-has-a-countable-orthonormal-basis`), so it was
  dropped and the edge is no longer declared.
- Batch-4 file: 5 existing rows kept (re-checked), 2 rows added for the previously
  unreviewed declared edges to `def-compact-linear-operator`.

Status vocabulary: the dispatch asks for status `defect`.
`tools/frontier-dependency-ledger.mjs` rejects any status outside
`open | verified | removed`, and `briefs/tasks/frontier-dependency-ledger.md`
defines `open` as the row carrying "Exact required claim, use/location, mismatch
and repair owner". The one defect is therefore recorded with status `open` and
its evidence begins `DEFECT (citation/interface mismatch)`; it is given in full
below.

## Defect 1 (recorded status: open)

Edge: `cor-atkinson-in-calkin-algebra-language` ⇐ `def-compact-linear-operator`
(consumer batch 4, supplier batch 2).

- Supplier statement (`items/def-compact-linear-operator.md`, Definition):
  "A linear map $T:X\to Y$ is a **compact operator** when the image of every
  bounded subset of $X$ has compact closure in $Y$ ... The set of compact
  operators $X\to Y$ is written $\mathcal K(X,Y)$." It states nothing about
  choice principles.
- Consumer use (`items/cor-atkinson-in-calkin-algebra-language.md`, step 1.1,
  fact [L3], the only textual citation of this supplier in the item):
  "The Calkin algebra is built under Countable Choice, which is available here
  because the standing hypothesis is the stronger Axiom of Choice
  ([[def-countable-choice]], [[def-compact-linear-operator]])."
- Mismatch: the claim step 1.1 needs from [L3] is that AC supplies
  $\mathrm{AC}_\omega$ so that `def-calkin-algebra`'s hypothesis is met;
  `def-compact-linear-operator` supplies no choice statement. The step also
  under-declares the implication: the declared `def-countable-choice` states
  "In ZF, $\mathrm{AC}\Rightarrow\mathrm{DC}\Rightarrow\mathrm{AC}_\omega$" only
  as a remark and explicitly says "neither is proved here", while the library's
  proved item `thm-choice-implies-dependent-implies-countable-choice`
  (published) is not declared.
- Impact: the mathematical conclusion is unaffected. Clause 3's compactness
  ("$ST-I_X$ and $TS-I_X$ both compact") is traced through `def-calkin-algebra`
  and `thm-atkinson`, whose uses are verified in the rows
  `def-calkin-algebra` ⇐ `def-compact-linear-operator` and
  `cor-atkinson-in-calkin-algebra-language` ⇐ `thm-atkinson`. This is a
  citation/dependency defect in a draft item, not a gap in the stated
  equivalence.
- Proposed repair (owner: batch-4 author): cite
  `thm-choice-implies-dependent-implies-countable-choice` at [L3] for
  $\mathrm{AC}\Rightarrow\mathrm{AC}_\omega$, and either drop the
  `def-compact-linear-operator` citation there or add a genuine link to it at
  the word "compact" in clause 3. The item was left untouched for the
  orchestrator to escalate.

## Other notes

- Page edges were reviewed at page level: for
  `compact-operators-and-riesz-schauder-theory` ⇐
  `orthonormal-bases-parseval-and-fourier-series` the consumer page's own items
  have no batch-1 item dependency (the pair's batch-1 uses sit on its companion
  examples page), for
  `square-integrable-kernels-and-hilbert-schmidt-compactness` ⇐
  `orthonormal-bases-parseval-and-fourier-series` every batch-1 item used by the
  page's five items lies on the supplier page or on its own prerequisite
  `hilbert-space-geometry-and-riesz-representation` (288.071 < 288.073), and for
  `banach-algebras-spectrum-and-holomorphic-functional-calculus` ⇐
  `compact-self-adjoint-hilbert-schmidt-and-trace-class-operators` no item of the
  consumer page declares a batch-3 dependency (its item-level imports are the
  batch-2 compactness items), so the requirement is the plan ordering
  288.077 < 288.079, satisfied with no missing interface.
- This review is an interface check of the declared use of each edge against the
  current supplier statement; it is not a whole-item certification of the draft
  items, and the mathematical use of the cited results was read in each case.

## Checks actually run

- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-remaining-27`
  (twice): succeeds, no invalid rows.
- After the rewrite: 0 unreviewed declared edges for consumer batches 2 and 4,
  and 0 orphaned review rows from the two rewritten files.
- The global `--require-reviewed` gate still exits 1, but only because 90
  declared edges whose consumer batch is 13 have no review row (a different
  consumer batch, outside this dispatch; the other 14 batches are complete).
