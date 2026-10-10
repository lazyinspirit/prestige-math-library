# Step 3b report — pair `sr-lorentz-transformations` / `sr-lorentz-transformations-examples`

- Run: `physics-em-sr-40-2026-10-08`, role `alpha-high`, pair label
  `step3b-pair-sr-lorentz-transformations`; earlier continuation labels
  `...-4ce6e3032b335170` (interrupted) and `...-ac2ebb0de2df3ee7`
  (interrupted after 20 items); current label `...-49a5495216770cbd`
  (completed). (A further dispatched task label, `...-e769bf55aeda5b0c`,
  left no report entry or authored carrier on disk.)
- A page `sr-lorentz-transformations` (order 211, batch 2, category
  `special-relativity`, library `physics`, 17 items); B page
  `sr-lorentz-transformations-examples` (order 212, 9 leaf items). Direct
  in-run supplier pair: `sr-spacetime-primitives` (batch 1, orders 209/210),
  authored on disk and rechecked this turn.
- Status: **authoring complete for all 26 items and both page carriers; all
  Step-3 checks in the brief pass for the pair; all 26 item decisions recorded
  `accept` with confidence 1; cross-batch input fully `verified` (81 rows);
  strict proof contracts cover 26/26 items with 0 errors.** No escalation
  remains for this pair.

## Owned IDs (dispatch dependency order; all original scaffold IDs)

A-page items (17):

| # | id | level | decision |
|---|---|---|---|
| 1 | `def-lorentz-map-and-lorentz-group` | 5 | accept |
| 2 | `rem-sr-verbal-postulate-reconstruction-obligations` | 5 | accept |
| 3 | `def-lorentz-boost` | 6 | accept |
| 4 | `def-spatial-rotation-of-an-inertial-frame` | 6 | accept |
| 5 | `lem-lorentz-map-preserves-metric-and-causal-structure` | 6 | accept |
| 6 | `lem-boost-is-proper-orthochronous-with-inverse` | 7 | accept |
| 7 | `lem-inertial-chart-transitions-are-affine-lorentz` | 7 | accept |
| 8 | `lem-lorentz-lie-algebra-structure` | 7 | accept |
| 9 | `def-ck-tensor-field-on-minkowski-space` | 8 | accept |
| 10 | `lem-boost-rotation-factorization` | 8 | accept |
| 11 | `lem-collinear-boost-composition-and-velocity-addition` | 8 | accept |
| 12 | `thm-sr-affine-isometry-classification` | 8 | accept |
| 13 | `lem-rapidity-parametrization-of-collinear-boosts` | 9 | accept |
| 14 | `pthm-sr-interval-and-cone-invariance` | 9 | accept |
| 15 | `thm-sr-tensor-and-current-transformation` | 9 | accept |
| 16 | `lem-lorentz-exponential-map-and-rapidity` | 10 | accept |
| 17 | `thm-sr-proper-orthochronous-lorentz-algebra` | 10 | accept |

B-page leaf items (9):

| # | id | level | decision |
|---|---|---|---|
| 1 | `cex-sr-discrete-lorentz-maps-are-not-proper-orthochronous` | 7 | accept |
| 2 | `ex-sr-one-plus-one-boost-matrix` | 8 | accept |
| 3 | `ex-sr-primed-frame-origin-motion` | 8 | accept |
| 4 | `cex-sr-a-rotation-is-a-proper-orthochronous-lorentz-map-that-is-not-a-boost` | 9 | accept |
| 5 | `cex-sr-noncollinear-boosts-do-not-commute` | 9 | accept |
| 6 | `ex-sr-boost-rotation-factorization-worked` | 9 | accept |
| 7 | `ex-sr-collinear-boost-composition-and-rapidity` | 10 | accept |
| 8 | `ex-sr-four-current-boost` | 10 | accept |
| 9 | `ex-sr-tensor-component-transformation` | 10 | accept |

All 26 IDs are present in the immutable pre-author scaffold inventory, so all
carry ordinary current item decisions (recorded this turn); no Step-3b
addition was made. Levels were re-verified with
`item-dependency-levels.mjs check --run physics-em-sr-40-2026-10-08`; the
single remaining run-wide level error is on another pair
(`lem-em-outgoing-source-helmholtz-and-diffraction`), not this pair.

## Status log

- [entry 1, label `...-4ce6e3032b335170`] Report created; item 1 authored
  before interruption.
- [entry 2, label `...-ac2ebb0de2df3ee7`] Resumed against disk; items 1-20 in
  dispatch order authored (`def-lorentz-map-and-lorentz-group` through
  `cex-sr-noncollinear-boosts-do-not-commute`), with the checkpoint details
  recorded in the previous revision of this report. The direct in-run
  supplier pair `sr-spacetime-primitives` was authoring concurrently; its
  suppliers were rechecked against the scaffold interfaces consumed here.
- [entry 3, label `...-49a5495216770cbd`, this continuation] On entry, 20 of
  26 items and no page carrier existed on disk. This continuation:
  (a) wrote the six missing items in dispatch order —
  `ex-sr-boost-rotation-factorization-worked`,
  `lem-lorentz-exponential-map-and-rapidity`,
  `thm-sr-proper-orthochronous-lorentz-algebra`,
  `ex-sr-collinear-boost-composition-and-rapidity`,
  `ex-sr-four-current-boost`, `ex-sr-tensor-component-transformation`;
  (b) wrote both library pages; (c) re-audited the 20 earlier items against
  their current suppliers, repaired four latent defects there
  (see "Local repairs" below); (d) synced the batch-2 manifest `deps` and
  `dependency_roles` for all 26 items to the authored carriers;
  (e) extended the batch-2 proof contracts to all 26 items and reconciled the
  cross-batch input; (f) ran the full check battery; (g) recorded 26 `accept`
  decisions. All computations in the six new items were independently
  recomputed with exact rational arithmetic before authoring.

## Local repairs in this continuation

1. `thm-sr-affine-isometry-classification` (pre-authored): step 8.1 referred to
   a nonexistent "step 2.2" and its citation tags omitted the model fact [L3].
   The final step now names only existing earlier steps and cites [L3] at
   step 7.1 where the affine model structure is used; contract regenerated.
2. `thm-sr-tensor-and-current-transformation` (pre-authored): the fact [L8]
   linked `def-lorentz-boost` twice (duplicate citation key) and fact [L10]
   (`def-sr-affine-minkowski-model`) was never consumed at a step. The
   duplicate link was removed and [L10] is now cited at step 1.1, where the
   affine chart transition of the model is set up; contract regenerated.
3. `ex-sr-collinear-boost-composition-and-rapidity` (new): fact [L2]
   (`lem-rapidity-parametrization-of-collinear-boosts`) initially had no
   step-level use; step 1.1 now records the agreement of its matrix form with
   the computed boost matrix, so the declared dependency and its citation are
   load-bearing.
4. `lem-collinear-boost-composition-and-velocity-addition` (pre-authored):
   steps 5.2 and 6.1 carried only step tags, triggering the proof-contract
   `shotgun-bracket` warning; the facts actually used there ([L5] matrix
   conventions in the symmetry step, [L4] for the strict parameter bound in
   the assembly) are now cited at those steps. Warning cleared.

Additions to the authored dependencies (all recorded in item frontmatter,
manifest and contracts): `def-lorentz-form-and-inertia`,
`def-inertial-frame-and-inertial-chart`,
`def-spatial-euclidean-structure-of-an-inertial-frame`,
`def-time-orientation-and-future-causal-sets`,
`lem-timelike-cone-has-two-convex-components`,
`def-oriented-minkowski-volume-form`,
`def-causal-classification-of-lorentz-vectors`,
`thm-determinant-multiplicative`,
`def-coordinate-column-and-matrix-of-a-linear-map`,
`def-matrix-product-and-identity-matrix`, `def-derivative`,
`thm-algebra-of-derivatives`, `cor-zero-derivative-implies-constant`,
`cor-archimedean-reciprocal`, `thm-natural-logarithm-laws`,
`def-determinant-of-a-linear-operator`, `def-determinant-of-a-square-matrix`,
`def-ck-tensor-field-on-minkowski-space`,
`lem-lorentz-map-preserves-metric-and-causal-structure`.
Every one of these suppliers is published mathematics or an authored batch-1
item; none creates a mathematical item with a physical prerequisite.

## Item checkpoints (current carriers)

The first 20 items below were authored before this continuation; they were
re-audited this turn against their current suppliers (batch-1 carriers included)
and their check results are reported from the current files.

1. `def-lorentz-map-and-lorentz-group` — linear/affine Lorentz maps, matrix
   criterion (deferred to the `justified_by` lemma), `O`/`SO^+`, convention
   (e). Decision `accept`.
2. `rem-sr-verbal-postulate-reconstruction-obligations` — physics remark with
   `physical_scope`; five open reconstruction obligations; no equivalence
   asserted. Decision `accept`.
3. `def-lorentz-boost` — coordinate formula and block matrix; `beta=0` declared
   separately with the limit of the coefficient; no Lorentz property claimed.
   Decision `accept`.
4. `def-spatial-rotation-of-an-inertial-frame` — rotations of a frame with
   `delta`-preservation and determinant `+1`; the matrix criterion is justified
   by the published orthogonal-operator suppliers added to item and manifest.
   Decision `accept`.
5. `lem-lorentz-map-preserves-metric-and-causal-structure` — 16 steps: matrix
   criterion, invertibility, determinant `±1`, causal/orientation preservation,
   group structure, cone alternatives. Decision `accept`.
6. `lem-boost-is-proper-orthochronous-with-inverse` — properness, orthochrony,
   inverse, `B(beta)e_0` and cone preservation; `beta=0` limit complete.
   Decision `accept`.
7. `lem-inertial-chart-transitions-are-affine-lorentz` — chart transitions are
   exactly the proper orthochronous affine Lorentz maps, both directions.
   Decision `accept`.
8. `lem-lorentz-lie-algebra-structure` — conditions (a)-(c) equivalence,
   generators `M_ab`, commutator identity, derivative of curves in `O(V,eta)`.
   Decision `accept`.
9. `def-ck-tensor-field-on-minkowski-space` — `C^k` tensor fields on open
   subsets, components, regularity equivalence. Decision `accept`.
10. `lem-boost-rotation-factorization` — unique factorization
    `L=B(-beta)Rhat`, existence, uniqueness, converse, boost-iff-identity.
    Decision `accept`.
11. `lem-collinear-boost-composition-and-velocity-addition` — composition
    parameter, strict `|beta|<1`, commutation. Decision `accept` (repair 4).
12. `thm-sr-affine-isometry-classification` — `C^2` isometries are exactly
    affine Lorentz maps; Clairaut/convexity argument complete. Decision
    `accept` (repair 1).
13. `lem-rapidity-parametrization-of-collinear-boosts` — `tanh` bijection,
    hyperbolic matrix, `gamma=cosh r`, additivity. Decision `accept`.
14. `pthm-sr-interval-and-cone-invariance` — conditional physics theorem from
    the adopted postulates: interval, causal classification, future/past
    relation, light-line class, volume form. Postulate citations recorded in
    the strict contract with `Postulate`-section quotes. Decision `accept`.
15. `thm-sr-tensor-and-current-transformation` — vector/covector/`(r,s)`/
    derivative/divergence/current component laws with the interpretation
    boundary. Decision `accept` (repair 2).
16. `lem-lorentz-exponential-map-and-rapidity` — **new this turn**. Generators
    exponentiate into `SO^+` via the algebraic determinant argument
    (`det exp(sK)=det exp(sK/2)^2=1`) and the open-cone small-parameter argument
    (`|t|<delta`, then Archimedean reduction `s=nt`); `N_e^2=P` gives
    `exp(rN_e)=B(tanh(r)e)`; the surjectivity disclaimer is retained. Decision
    `accept`.
17. `thm-sr-proper-orthochronous-lorentz-algebra` — **new this turn**.
    Assembled group algebra: boosts, collinear rapidity, subgroups and
    membership, unique factorization, invariants; the `-id_V` witness
    (`det=1`, `Lambda(C^+)=C^-`) is proved locally, so no A-page item depends
    on the B-page counterexample. Decision `accept`.
18. `ex-sr-one-plus-one-boost-matrix` — exact `1+1` arithmetic at `beta=3/5`.
    Decision `accept`.
19. `ex-sr-primed-frame-origin-motion` — origin motion and inverse parameter;
    identified with an inertial chart transition. Decision `accept`.
20. `ex-sr-boost-rotation-factorization-worked` — **new this turn**. All
    entries recomputed exactly: `L=B_1B_2`, `L^T eta_0 L=eta_0`, `det L=1`,
    `u=Le_0=(25/16,-15/16,-3/4,0)`, `beta=(-3/5,-12/25,0)`,
    `B(beta)L=diag(1,R)`, `R` the `40/41` rotation, `R != I`. Decision
    `accept`.
21. `cex-sr-noncollinear-boosts-do-not-commute` — exact rational products
    differing in displayed entries. Decision `accept`.
22. `cex-sr-discrete-lorentz-maps-are-not-proper-orthochronous` — parity and
    time reversal; `Pi T=-I_4` witnesses that `det=1` does not force
    orthochrony. Decision `accept`.
23. `ex-sr-tensor-component-transformation` — **new this turn**. Covector
    `k'` by `Lambda^{-1}`, vector `w'` by `Lambda`, nullness preserved,
    contraction invariant at `beta=3/5`. Decision `accept`.
24. `ex-sr-four-current-boost` — **new this turn**. Constant future unit
    current; `BU=e_0`; coordinate density `5rho_0/4` versus rest density
    `rho_0`; general boost law reproduces the result. Decision `accept`.
25. `ex-sr-collinear-boost-composition-and-rapidity` — **new this turn**.
    `B(3/5e)^2=B(15/17e)` with `gamma=17/8`, `gamma beta=15/8`; rapidities
    `log 2 + log 2 = log 4`. Decision `accept`.
26. `cex-sr-a-rotation-is-a-proper-orthochronous-lorentz-map-that-is-not-a-boost`
    — quarter-turn rotation is proper orthochronous, and
    `B(beta)e_0=e_0` forces `beta=0`, so it is not a boost. Decision `accept`.

Library carriers: `library/special-relativity/sr-lorentz-transformations.md`
(17-item A page) and
`library/special-relativity/sr-lorentz-transformations-examples.md`
(9-item B page) were created this continuation; rendercheck OK on both, and
pathcheck reports no finding for either.

## Supplier reconciliation (current carriers)

The pair's only in-run suppliers are the batch-1 pair
`sr-spacetime-primitives` / `sr-spacetime-primitives-examples`. All 19
batch-1 items are authored on disk; every cross-batch edge declared by the 26
items (80 item edges + 1 page edge) was checked against the authored carriers:
dependency metadata, the consumer's facts and the strict proof contracts
(verbatim quotes recorded from the suppliers' own statement sections and
mapped to the consuming steps). The cross-batch input
`research/physics-em-sr-40-2026-10-08-batch-2.cross-batch-dependencies.json`
now has 81 rows, all `verified` (16 new rows added for edges that were declared
by authored items but absent from the scaffold-time input, all of them edges
into batch 1). `frontier-dependency-ledger.mjs refresh --run
physics-em-sr-40-2026-10-08` ran clean after the edit. No unfinished supplier
remains for this pair, so no item decision is escalated.

## Checks actually run (current run, exact commands)

- `node tools/physics-support/tsx-run.mjs tools/physics-support/precheck.mts`
  on all 26 item paths — **21 proof-bearing items checked, 0 failing** (the
  other 5 are definition/remark items with no phase body, reported
  not-applicable).
- `node tools/physics-support/rendercheck.mjs` on all 26 items and both pages
  — **OK** (28 files; YAML, delimiters and KaTeX parse).
- `node tools/physics-support/proof-layout.mjs` on the 9 changed item paths
  (one batched command, after the final edits) — **9 items, 69 steps,
  0 defects**.
- `node tools/physics-support/tsx-run.mjs tools/physics-support/author-check.mts
  physics-em-sr-40-2026-10-08 2` — **ok: true**
  (`research/physics-em-sr-40-2026-10-08-author-check-2.json`), with
  precheck PASS, rendercheck OK, `content-policy` **26 scoped items, 0 errors,
  0 warnings**, and `proof-contract --strict` **0 errors, 0 warnings, 26/26
  items**.
- `node tools/physics-support/proof-contract.mjs
  research/physics-em-sr-40-2026-10-08-batch-2.proof-contracts.json --strict`
  — **0 errors, 0 warnings, 26/26 items** (contract scope extended this turn
  from 3 to all 26 items; boundary worksheets for all eight standard cases on
  every item; citations and derivations regenerated from the authored text).
- `node tools/physics-support/item-dependency-levels.mjs check --run
  physics-em-sr-40-2026-10-08` — this pair clean; the only run-wide error is
  on another pair (`lem-em-outgoing-source-helmholtz-and-diffraction`).
- `node tools/physics-support/depcheck.mjs --json` — **0 findings naming any
  of this pair's 26 items or 2 pages** (run-wide 2785 pre-existing errors are
  `published-unaudited`/unresolved-link debt of other content).
- `node tools/physics-support/coverage-checklist.mjs
  research/physics-em-sr-40-2026-10-08-batch-2.coverage.json` — **1 page,
  44 harvested results, 0 errors, 0 warnings**.
- `node tools/physics-support/manifest-integrity.mjs --run
  physics-em-sr-40-2026-10-08` — **80/80 pages present, no scope drift**.
- `node tools/physics-support/frontier-item-gate.mjs --run
  physics-em-sr-40-2026-10-08 --tool validate-plan` — run-wide **FAIL** with
  42 `undeclared-prereq` findings; **exactly one names this pair**
  (page `sr-lorentz-transformations`, supplier page
  `symmetric-groups-and-the-sign-homomorphism`); see the Step-4 item below.
- `node tools/physics-support/extcheck.mjs` — **0 recorded-not-proved items,
  0 consequences**, exit 0. `fwdcheck.mjs --quiet` reports no finding for this
  pair.
- `node tools/physics-support/pathcheck.mjs` — no error or warning row for
  pages 211/212 (the 3 run-wide errors are other categories' pathways).
- `node tools/physics-support/step3-decisions.mjs check --run
  physics-em-sr-40-2026-10-08 --phase final` — **0 open rows for this pair;
  all 26 decisions `accept`, confidence 1, hash-current**
  (`research/physics-em-sr-40-2026-10-08-step3b-review-<id>.json`).
- `node tools/physics-support/frontier-dependency-ledger.mjs refresh --run
  physics-em-sr-40-2026-10-08` — **refreshed and deduplicated**.

## Pre-splice plan mismatch for Step 4 (report only, not repaired here)

`validate-plan` reports for page `sr-lorentz-transformations`:
"page sr-lorentz-transformations has an item depending on
symmetric-groups-and-the-sign-homomorphism, which is NOT in the closure of its
declared requires". The dependency arises through the permutation/sign
material of `def-determinant-of-a-square-matrix` and
`def-inversions-inversion-number-and-sign` (shortest paths from
`def-lorentz-map-and-lorentz-group`, `def-lorentz-boost`,
`lem-boost-rotation-factorization` and others reach `def-symmetric-group`);
it is genuine mathematical content, not a spurious edge. The supplier page is
an existing plan `P` entry (kind `P`, category `coxeter-groups`, published),
so the Step-4 remedy is to add `symmetric-groups-and-the-sign-homomorphism`
to the page's `requires` (and to the batch manifest `requires`), which clears
the finding for this pair. The same run-level pattern accounts for the other
41 findings (mostly on EM pages; 5 on `sr-spacetime-primitives`, 1 on its
examples page, 1 on `sr-forces-and-continuum`). No plan or `requires` file was
edited by this Step-3b author.

## Published concerns

No defective published item was confirmed in this pass. The published
suppliers consumed by the pair (including
`lem-exponential-series-of-a-bounded-operator`,
`cor-finite-dimensional-normed-spaces-are-banach`,
`cor-linear-maps-with-finite-dimensional-domain-are-bounded`,
`cor-zero-derivative-implies-constant`, `cor-archimedean-reciprocal`,
`thm-natural-logarithm-laws`, `thm-determinant-multiplicative`,
`thm-bounded-linear-operator-equivalences`) were resolved with 0 depcheck
findings against this pair, and their exact hypotheses are quoted in the
items' Facts blocks and strict contracts. Suspicions of deeper proof-level
defects remain the subject of the independent review steps (5-8); nothing in
this authoring pass raises a confirmed published-defect claim.

## Open obligations at handoff

1. **Step 4 plan amendment** for the single `undeclared-prereq` finding on
   page 211 (add `symmetric-groups-and-the-sign-homomorphism` to `requires`,
   then regenerate the manifest `requires`). Not editable by this role.
2. **Independent Steps 5-8 review** of the 26 authored items, both pages, the
   strict contracts and the cross-batch rows — owed by construction; no
   Step-3b escalation is left for the owner.
3. The run-wide `validate-plan` FAIL (42 findings, 41 outside this pair) and
   the run-wide `depcheck` debt (2785 pre-existing findings) remain Step-4/
   review concerns, not hidden debt of this pair.

## Handoff summary

- Completed: all 26 owned items authored and checked; both library pages
  created and checked; manifest, coverage, contracts, cross-batch input and
  dependency ledger updated without disturbing sibling rows.
- Added suppliers: none (no new IDs beyond the immutable scaffold inventory);
  dependency edges were added to existing authored items and recorded in both
  the item frontmatter and the manifest.
- Published concerns: none confirmed.
- Open obligations: the Step-4 `requires` amendment and independent review
  steps above.
