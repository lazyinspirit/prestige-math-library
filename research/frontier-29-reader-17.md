# frontier-29 reader-17 report

Date: 2026-09-01.
Run: `frontier-29`
Batch: `17`
Role: independent Step-6 reader

## Opened scope

- Control artifacts: `CLAUDE.md`, `README.md`, `research/frontier-29-reader.task.md`, `research/frontier-29-beta-17.task.md`, `research/frontier-29-splice-17.json`, `research/frontier-29-batch-17.pages.json`, `research/frontier-29-batch-17.coverage.json`, `research/frontier-29-batch-17.proof-contracts.json`, `research/frontier-29-batch-17.notes.md`, `research/frontier-29-step6-hash-17-pre.json`, `research/plan-differential-topology-track.md` (DT-1 block), and `research/plan-spec.json`.
- Assigned pages: `library/differential-topology/morse-critical-points-hessians-and-indices.md` and `library/differential-topology/morse-critical-points-hessians-and-indices-examples.md`.
- Assigned A-page items: `def-critical-point-and-critical-value-of-a-smooth-function`, `def-hessian-of-a-function-at-a-critical-point`, `lem-coordinate-change-congruence-for-the-critical-hessian`, `def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian`, `thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle`, `lem-critical-hessian-agrees-with-the-levi-civita-hessian`, `def-nondegenerate-critical-point-nullity-index-and-coindex`, `lem-sylvester-inertia-makes-morse-index-intrinsic`, `def-morse-function-and-excellent-morse-function`, `lem-nondegenerate-critical-points-are-isolated`, `cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points`, `lem-one-variable-completion-of-the-square-with-a-smooth-parameter`, `lem-morse-splitting-induction-preserves-the-residual-hessian`, `thm-morse-lemma`, `cor-local-extrema-and-saddles-from-the-morse-index`, `cor-index-and-coindex-swap-under-negation`, `cor-local-level-set-cone-at-a-morse-critical-point`, and `rem-zero-dimensional-morse-convention`.
- Assigned B-page items: `ex-height-on-the-sphere-is-a-perfect-morse-function`, `ex-standard-quadratic-form-of-each-morse-index`, `ex-height-on-a-torus-with-four-critical-points`, `cex-a-degenerate-isolated-critical-point`, `cex-a-degenerate-nonisolated-critical-set`, and `ex-the-empty-and-zero-dimensional-morse-cases`.
- Published dependency items opened for verification: `def-regular-and-critical-points-and-values`, `def-differential-of-a-smooth-real-valued-function`, `def-smooth-bundle-metric`, `def-definiteness-inertia-and-signature-data-over-the-reals`, `thm-sylvesters-law-of-inertia`, `thm-coordinate-formula-for-the-differential-of-a-function`, `def-compact-space`, `thm-euclidean-inverse-function-theorem`, `thm-euclidean-implicit-function-theorem`, `def-immersion-submersion-and-constant-rank-map`, and `thm-coordinate-derivations-form-a-basis-of-the-tangent-space`.
- Source evidence consulted: the current batch coverage rows and the current proof-contract quotes for Nicolaescu, Audin-Damian, and Cohen. This runner is network-restricted, so no fresh PDF openings were possible here.

## Design/spec check

- The live batch manifest and `research/plan-spec.json` agree on the owned pair and its order.
- The DT-1 design block still names a larger prerequisite set than the live spec, while the current manifest keeps only `moment-maps-and-symplectic-reduction-examples`. Per dispatch, I recorded the drift and reviewed the batch against the live spec without editing plan state.

## Confirmed defects and edits

1. Repaired `items/lem-morse-splitting-induction-preserves-the-residual-hessian.md`.
   The old statement/proof mixed old coordinates `(u,y)` with the new split coordinate `u'`, and step `1.1` incorrectly concluded `F(0,y)=F(0,0)+H(y)` after setting `u'=0`. I rewrote the item in an explicit new coordinate system `(s,y)` with a named representative `\widetilde F`, then restated the critical-point and restricted-Hessian argument in those coordinates.
2. Repaired `items/thm-morse-lemma.md`.
   The old induction start used `lem-sylvester-inertia-makes-morse-index-intrinsic` as if it supplied diagonalization of the Hessian matrix. It only supplies chart-independence of the inertia counts. I added the missing dependency `thm-sylvesters-law-of-inertia`, rewrote step `1.2` so the diagonal normal form comes from Sylvester and the count `\lambda` comes from the intrinsic-index lemma, and tightened step `3.1` so the residual index shift is justified from the split coordinate plus the restricted-Hessian lemma.
3. Updated `research/frontier-29-batch-17.proof-contracts.json`.
   I regenerated the contract entries for `lem-morse-splitting-induction-preserves-the-residual-hessian` and `thm-morse-lemma` so the current quotes, facts, and derivations match the repaired bytes.

## Per-page verdicts

- `morse-critical-points-hessians-and-indices`: pass after the two item repairs above. The current A-page prose, dependencies, and proof-bearing items now match the opened current-disk evidence.
- `morse-critical-points-hessians-and-indices-examples`: pass. I rechecked all six example/counterexample items against the repaired A-page results; no B-page body edit was needed.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-morse-splitting-induction-preserves-the-residual-hessian.md items/thm-morse-lemma.md`
  Result: both changed items reflowed once; the final reflow pass was unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-morse-splitting-induction-preserves-the-residual-hessian.md items/thm-morse-lemma.md`
  Result: `2 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-29-batch-17.proof-contracts.json lem-morse-splitting-induction-preserves-the-residual-hessian thm-morse-lemma`
  Result: `regenerated 2, skipped 0`.
- `node tools/tsx-run.mjs tools/precheck.mts` over the 18 proof-bearing batch-17 items
  Result: `18 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-29-batch-17.proof-contracts.json --strict`
  Result: `0 error(s), 0 warning(s), 18/18 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-29-batch-17.proof-contracts.json --items-dir items --fail-on-missing-quote`
  Result: no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-29-batch-17.proof-contracts.json --items-dir items --fail-on-contradicted`
  Result: the tool still reports two empty-axis candidates on `thm-morse-lemma` and `cor-local-level-set-cone-at-a-morse-critical-point`, triggered by empty-sum syntax. I reread both items and left the rows unchanged because those contract rows are about empty manifolds or empty families, not empty summation indices.
- `node tools/content-policy.mjs research/frontier-29-batch-17.pages.json`
  Result: `24 scoped item(s), 0 error(s), 0 warning(s)`.
- `git diff --check -- items/lem-morse-splitting-induction-preserves-the-residual-hessian.md items/thm-morse-lemma.md research/frontier-29-batch-17.proof-contracts.json`
  Result: clean.

## Uneditable defects

- None remain in the opened scope.

## Blockers

- None.
