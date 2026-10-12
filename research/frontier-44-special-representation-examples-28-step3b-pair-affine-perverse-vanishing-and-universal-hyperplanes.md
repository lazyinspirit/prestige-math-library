# Step 3b — pair `affine-perverse-vanishing-and-universal-hyperplanes` (batch 43)

Run `frontier-44-special-representation-examples-28`; role alpha-high; label
`step3b-pair-affine-perverse-vanishing-and-universal-hyperplanes-1cf38d5122a2f005`.
Owned A page: `affine-perverse-vanishing-and-universal-hyperplanes` (order 1820,
algebraic-geometry, 7 scaffold lemmas). Owned B page:
`affine-perverse-vanishing-and-universal-hyperplanes-examples` (order 1825,
1 scaffold example). Batch 43 carries no sibling rows at scaffold time; sibling
rows will be preserved if they appear.

## Owned IDs and open obligations (entry checkpoint)

A (all scaffold-only at entry; item files, page, contracts owed):

1. `lem-projective-hyperplane-sections-decrease-the-defect-of-semismallness`
   (dependency_level 0; deps all published).
2. `lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions`
   (level 2; consumes the still-unfinished batch-37 items
   `def-finite-complex-algebraic-whitney-stratification-and-control-data`).
3. `lem-complex-stratified-morse-data-have-tangential-normal-product-and-link-description`
   (level 17; consumes batch-37 items
   `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`,
   `lem-controlled-stratified-submersions-have-continuous-local-trivializations`,
   `lem-compact-semialgebraic-families-admit-compatible-finite-triangulations`
   and the batch-40 `lem-analytic-constructible-sheaves-admit-coherent-six-operations`).
4. `lem-artin-affine-vanishing-for-constructible-perverse-sheaves` (level 18;
   consumes the level-17 item, the batch-40 six-operations item and the batch-40
   `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`).
5. `lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact`
   (level 18; consumes batch-37 controlled-trivializations and batch-40
   perverse/six-operation items).
6. `lem-affine-morphisms-have-one-sided-perverse-exactness` (level 19; consumes
   the Artin item and batch-40 suppliers).
7. `lem-universal-hyperplane-relative-weak-lefschetz-and-maximal-pullback-subobjects`
   (level 20; consumes the affine-exactness and noncharacteristic items and
   batch-40/36 suppliers).

B (scaffold-only; item file, page owed):

8. `ex-universal-hyperplanes-lower-the-defect-for-projective-space-to-a-point`
   (level 1; consumes the level-0 defect lemma).

Dispatch dependency order: 0 (A item 1), 1 (B example), 2 (A item 2), 17 (A item 3),
18 (A items 4, 5 by item ID), 19 (A item 6), 20 (A item 7). (Tie at level 18
ordered by page order then item ID; both are on the A page, so item-ID order:
`lem-artin-affine-vanishing…` before `lem-noncharacteristic-…`.)

Open obligations at entry:

1. Create `library/algebraic-geometry/affine-perverse-vanishing-and-universal-hyperplanes.md`
   and `…-examples.md` from the batch-43 manifest, preserving the plan
   `requires` lists and item placement.
2. Author all 8 item files in the dependency order above, rechecking each item's
   exact suppliers against the current files and the Step 3a findings (i)–(iv).
3. Sync the batch-43 manifest `deps`/provenance with the authored files and
   refresh the batch-43 cross-batch dependency inputs
   (`research/…-batch-43.cross-batch-dependencies.json`), then run
   `node tools/frontier-dependency-ledger.mjs refresh --run …`.
4. Write `research/…-batch-43.proof-contracts.json` (contracts for each proof
   item: exact cited excerpts, per-step inputs, boundary dispositions).
5. Run the explicit-path checks for the authored files: `proof-layout` (single
   batch command after final edits), `precheck`, `rendercheck`,
   `content-policy`, `depcheck`, `manifest-deps`, `item-dependency-levels`,
   `validate-plan`, `coverage-checklist`, `source-fetch-check`,
   `proof-contract --strict`, `boundary-audit`, `citation-fidelity`, `pathcheck`,
   `prosecheck`; record item decisions with `tools/step3-decisions.mjs record-item`.
6. Supplier reconciliation: the batch-37 (`complex-algebraic-stratified-topology`)
   and batch-40 (`analytic-derived-six-operations-and-duality`) pairs are in
   flight. Any owned item whose proof consumes an item file that is still absent
   at handoff must name the exact supplier ID and consuming step in this report
   and keep its decision `escalate` until the supplier and the use are reconciled.
7. Step 3a findings (i)–(iv) to resolve by authoring route: (i) no declared home
   for strong plurisubharmonicity — use the elementary inline verification of the
   concrete functions, never silently import `domains-of-holomorphy-and-pseudoconvexity`;
   (ii) `r(f)`/smallness defined inline in the defect lemma (no standalone home
   exists); (iii) dual projective space and universal incidence kept inline
   (definitional notation, not a load-bearing citation); (iv) item 6's
   prescribed stratified transversality stays an explicit conditional clause.

## Checkpoint log

### 1. `lem-projective-hyperplane-sections-decrease-the-defect-of-semismallness` (level 0)

- Authored `items/lem-projective-hyperplane-sections-decrease-the-defect-of-semismallness.md`
  to the manifest statement verbatim. Claims: universal incidence is a
  $\mathbb P^{d-1}$-bundle over smooth $\mathcal X$ of dimension $n+d-1$;
  constructible partitions $A_i,B_i$; fibre-wise dimension bounds via the
  componentwise generic-fibre corollary; universal bound $r(g)\le r(f)-1$;
  smallness at $r(f)=0$; fixed general hyperplane by projecting components to
  the dual and intersecting with the Bertini open.
- Source locator: de Cataldo–Migliorini Thm 4.7.4 and its proof; `r(f)` and
  smallness defined inline (Step 3a finding (ii) resolved by the inline home).
- Dependencies: all seven declared deps are published and were read
  (`thm-upper-semicontinuity-fibre-dimension-projective`,
  `cor-dimension-of-image-plus-generic-fibre`, `thm-bertini-smooth-hyperplane-section`,
  `lem-projective-hypersurface-dimension-drop`, the two classical definitions,
  `def-axiom-of-choice`). No unfinished supplier. Pre-splice finding (iv): the
  prescribed stratified transversality stays a conditional clause, as scaffolded.
- Checks: `proof-layout` 1 item / 4 steps / 0 defects; `precheck` PASS (direct);
  `rendercheck` OK.

### 2. `ex-universal-hyperplanes-lower-the-defect-for-projective-space-to-a-point` (level 1, B)

- Authored `items/ex-universal-hyperplanes-lower-the-defect-for-projective-space-to-a-point.md`
  to the manifest Example verbatim. Verification: $r(f)=2n-n=n$ for
  $\mathbb P^n\to\mathrm{pt}$; universal incidence source dimension $2n-1$,
  single fibre dimension $n-1$, defect $n-1$; $n=1$ graph-of-isomorphism case.
- Dependencies: the level-0 lemma (now authored) and `def-axiom-of-choice`.
- Checks: `proof-layout` 1 item / 2 steps / 0 defects; `precheck` PASS (direct);
  `rendercheck` OK.

### 3. `lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions` (level 2)

- Authored `items/lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions.md`
  to the manifest Statement verbatim (equal critical values explicitly allowed;
  no distinct-value assertion). Proof: conormal boundaries null (1.1), critical
  incidence $=$ real normal bundle and Morse–Sard nullity of degenerate
  parameters (1.2), nullity of forbidden limiting tangents (2.1), finite
  critical set via the complexified conormal incidence and Zariski density of
  the real diagonal (3.1), conclusion with the inline verification of strong
  plurisubharmonicity of $\|z-a\|^2$ (4.1).
- Dependency repair: added the published `thm-choice-implies-dependent-implies-countable-choice`
  so the AC use through the countable-choice Morse–Sard supplier is itself
  proved; manifest `deps` to be synced. Step 3a finding (i) resolved by the
  inline route; the SCV page is not imported.
- Unfinished supplier: `def-finite-complex-algebraic-whitney-stratification-and-control-data`
  (batch 37, in flight at authoring time) is cited in [F4] and the Statement
  vocabulary; escalation decision planned pending reconciliation.
- Checks: `proof-layout` 1 item / 5 steps / 0 defects; `precheck` PASS (direct);
  `rendercheck` OK.

### 4. `lem-complex-stratified-morse-data-have-tangential-normal-product-and-link-description` (level 17)

- Authored `items/lem-complex-stratified-morse-data-have-tangential-normal-product-and-link-description.md`
  to the manifest Statement verbatim: 8-step main proof (normal form; normal
  characteristic estimates; wall sequence; derived coefficient transport;
  complex link; normal Morse triangle; tangential shift and global attachment;
  nonpure dimensions and the ball-link exhaustion) with the complete boundary
  normal form (Construction A) and the complex-link/coefficient construction
  (Construction B) embedded as proof text after the QED.
- Suppliers: all eleven were read at Statement level after the batch-37 and
  batch-40 siblings were authored; the six-operation, perverse-t-structure,
  controlled-submersion, triangulation, conical-cochain and incidence clauses
  used in steps 3.1-8.1 match the authored Statements. The
  `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`
  citation was re-checked the moment its file appeared.
- Dependency repair: recomputed level 19 (from 17) synced to the item and the
  manifest; no statement or title change.
- Checks: `proof-layout` 1 item / 8 steps / 0 defects; `precheck` PASS (direct);
  `rendercheck` OK; contract rows in the batch-43 proof contracts.
- Decision: `repaired` / `dependency`.

### 5. `lem-artin-affine-vanishing-for-constructible-perverse-sheaves` (level 18)

- Authored `items/lem-artin-affine-vanishing-for-constructible-perverse-sheaves.md`
  to the manifest Statement verbatim. Proof: Levi-form index bound (1.1);
  descending codimension induction with the base case c=0 and the link
  dimension/index arithmetic (2.1); normal-Morse triangle, global critical-value
  sequences and the regular ray (3.1); support-closure sharpening (4.1); the
  perverse spectral sequence and the dual compact-support statement (5.1).
- Dependency repair: recomputed level 20 (from 18) synced; the two batch-40 and
  the batch-30 suppliers were read at Statement level before the item closed.
- Checks: `proof-layout` 5 steps / 0 defects; `precheck` PASS (induction);
  `rendercheck` OK. Decision: `repaired` / `dependency`.

### 6. `lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact` (level 18)

- Authored `items/lem-noncharacteristic-complex-stratified-pullback-is-perverse-exact.md`
  to the manifest Statement verbatim. Proof: upper-aisle support computation
  and the smooth exceptional comparison (1.1); transverse-embedding support
  shift (1.2); the controlled normal product and the oriented relative normal
  generator, including the positive-determinant gluing (1.3); duality for the
  lower aisle (2.1).
- Dependency repair: recomputed level 20 (from 18) synced; the controlled
  trivialization and perverse/six-operation suppliers were read at Statement
  level.
- Checks: `proof-layout` 4 steps / 0 defects; `precheck` PASS (direct);
  `rendercheck` OK. Decision: `repaired` / `dependency`.

### 7. `lem-affine-morphisms-have-one-sided-perverse-exactness` (level 19)

- Authored `items/lem-affine-morphisms-have-one-sided-perverse-exactness.md`
  to the manifest Statement verbatim. Proof: the top-degree local-system
  detector with its principal-open Cech computation (1.1); the descending
  induction setup, where the correction to the research draft matters — the
  maximality of $b$ is taken over violations on the layer $W_i$ and the
  higher-layer bounds give $\mathcal H^t(Q)=0$ for $t>b$, so only the single
  term $(i,b)$ can occur in total degree $i+b$ (1.2); the spectral-sequence
  contradiction and the affine-open characterization (2.1); the affine
  morphism application and dual lower-aisle statement (3.1).
- Dependency repair: recomputed level 21 (from 19) synced.
- Checks: `proof-layout` 4 steps / 0 defects; `precheck` PASS (induction);
  `rendercheck` OK. Decision: `repaired` / `dependency`.

### 8. `lem-universal-hyperplane-relative-weak-lefschetz-and-maximal-pullback-subobjects` (level 20)

- Authored `items/lem-universal-hyperplane-relative-weak-lefschetz-and-maximal-pullback-subobjects.md`
  to the manifest Statement verbatim. Steps 1.1-2.2 are independently verified
  against the cached de Cataldo-Migliorini text (Lemma 4.7.6, Proposition
  4.7.8, read in full) and the cached BBD text (4.2.4-4.2.6.2 in French; the
  projective-bundle formula 5.4.12): the localization triangle, affineness,
  proper base change, transversality, $i^!=i^*[-2]$, the Hom computation, the
  simplicity preservation, the largest-subobject/quotient adjoints
  $\ell={}^pH^dRp_!$, $r={}^pH^{-d}Rp_*$, the direct computation
  $r({}^pH^{d-1}V)\cong{}^\pH^{-1}(Rf_*K)$, and the five-lemma comparison
  ${}^\pH^{-1}(Rp_*\tau_{\ge d-1}V)\cong{}^\pH^{-1}(Rp_*\tau_{\ge d-1}U)$.
- **Open obligation (escalated).** Step 3.1 identifies those two groups with
  $r({}^pH^{d-1}V)$ and $r({}^pH^{d-1}U)$ "because $Rp_*$ has lower perverse
  amplitude $-d$"; this is BBD 5.4.13 / dcM 4.7.9, and I could not
  independently re-derive the index bookkeeping of that identification from
  the OCR-quality cached text (its shifts do not match this item's
  normalization as literally printed). The mathematical statement is dcM
  4.7.9 and is true; the residual uncertainty is confined to this truncation
  identification, is stated in the item's Remarks, and is recorded as
  `escalate` with defect `source`.
- Dependency repair: recomputed level 22 (from 20) synced.
- Checks: `proof-layout` 5 steps / 0 defects; `precheck` PASS (direct);
  `rendercheck` OK; contracts strict-clean once the truncated quote was placed
  in the Remarks rather than the step (bare `5.4` in a step is read as a step
  reference by the contract tokenizer).

## Checks actually run

All commands from the repository root, final state, on the eight authored item
paths and the two authored page paths unless noted.

- `node tools/proof-layout.mjs` on the eight item paths (single batch command,
  after the final edit): 8 items, 37 steps, 0 defects.
- `node tools/tsx-run.mjs tools/precheck.mts` on the eight item paths: 8
  checked, 0 failing (strategies direct/induction as scaffolded).
- `node tools/rendercheck.mjs` on the eight items + two pages: OK, 10 files.
- `node tools/content-policy.mjs research/…-batch-43.pages.json` (item mode):
  8 scoped items, 0 errors, 0 warnings.
- `node tools/depcheck.mjs --items-file` (8 owned IDs): selected item/page and
  prerequisite cycle checks passed.
- `node tools/depsource.mjs research/plan-spec.json --items-file … --run …`:
  0 unresolved, 8/8 consumer coverage (31 published-page links, 30 in-run
  links).
- `node tools/manifest-deps.mjs research/…-batch-43.pages.json`: 8 items, 0
  errors.
- `node tools/item-dependency-levels.mjs check --run …`: the eight owned items
  match the computed levels 0/1/8/19/20/20/21/22; the only findings touching
  this pair were the sibling batch-44 level reroutes noted below.
- `node tools/validate-plan.mjs research/plan-spec.json --run …`: exit 0; the
  pair carries only the plan-controlled `redundant-prereq` advisories inherited
  from Step 3a.
  `node tools/frontier-item-gate.mjs --run … --tool validate-plan`: exit 0
  (run-wide advisories only, none blocking this pair).
- `node tools/coverage-checklist.mjs research/…-batch-43.coverage.json
  --require-destination`: 2 pages, 38 harvested results, 0/0.
  `node tools/source-fetch-check.mjs --coverage …`: 7/7 fetch-verified, 7/7
  resolved.
- `node tools/proof-contract.mjs research/…-batch-43.proof-contracts.json
  --strict`: 8/8 items, 0 errors, 0 warnings (59 citation rows, 37 derivation
  rows, 64 boundary dispositions). `boundary-audit --fail-on-contradicted
  --fail-on-template`: exit 0, no contradicted dispositions, no template
  cluster. `citation-fidelity --fail-on-missing-quote`: every quote found, no
  widening candidates.
- `node tools/extcheck.mjs --items-file` (8 IDs): clean, no active
  recorded-not-proved or external items. `prosecheck` (10 files): 0/0.
  `pathcheck` (whole corpus): only pre-existing foreign-category pathway
  errors, none in `algebraic-geometry`.
- `node tools/frontier-dependency-ledger.mjs refresh --run …`: refreshed after
  the batch-43 cross-batch input update (25 rows, all `verified`).
- `node tools/step3-decisions.mjs record-item` run for all eight IDs
  (7 closed, 1 escalated); `check --phase final` run run-wide (run not closed
  overall, as expected mid-frontier).

## Supplier reconciliation and published concerns

- The two direct in-run prerequisite pairs named in the dispatch
  (`complex-algebraic-stratified-topology`, `analytic-derived-six-operations-and-duality`)
  were authored by their owners while this pair was in flight. All six
  previously missing suppliers
  (`def-finite-complex-algebraic-whitney-stratification-and-control-data`,
  `lem-complex-algebraic-stratifications-have-finite-conical-cochain-models`,
  `lem-controlled-stratified-submersions-have-continuous-local-trivializations`,
  `lem-compact-semialgebraic-families-admit-compatible-finite-triangulations`,
  `lem-analytic-constructible-sheaves-admit-coherent-six-operations`,
  `thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes`)
  were read at Statement level against the exact clauses consumed in
  steps 1.1-8.1; no mismatch was found, so no owned item keeps a
  supplier-based escalation.
- Escalation held: `lem-universal-hyperplane-relative-weak-lefschetz-and-maximal-pullback-subobjects`,
  step 3.1's BBD truncation identification (exact source locator recorded in
  the item's Remarks and above); remedy is either an owner-level confirmation
  of the source comparison in this normalization or a repaired local
  derivation in Steps 5-7.
- Routed sibling observations (not edited here): `item-dependency-levels`
  reports `ex-projective-perverse-decomposition-for-projective-space-to-a-point`
  declared 24 vs computed 26 (batch-44 owner; the rise follows from the
  recomputed levels of this pair's items after the same-frontier supplier
  manifests were synced); `fwdcheck` reports two sibling link-unplanned cases
  (`thm-compactly-supported-derived-pushforward-…` and
  `thm-fixed-part-for-geometric-polarizable-…`) outside this pair.
- Published concerns: none new. No published item was edited; the four
  Step 3a findings were resolved by the authoring routes recorded at entry
  (inline plurisubharmonicity verification; inline defect/smallness home in
  the defect lemma; inline dual-projective-space notation; the stratified
  transversality clause kept conditional).

## Handoff status

- **Completed.** All eight assigned IDs authored in dependency order, both
  pages created from the batch-43 manifest (plan `requires` preserved),
  manifest deps/levels synced, cross-batch inputs refreshed, batch-43 proof
  contracts written, all listed checks run, item decisions recorded (seven
  closed, one escalated), and this report written.
- **Added suppliers.** None: no new item IDs were minted, so no engine
  certification for additions applies.
- **Open obligations.** The single `escalate` decision on
  `lem-universal-hyperplane-relative-weak-lefschetz-and-maximal-pullback-subobjects`
  (BBD 5.4.13 truncation identification) and the routed sibling level/link
  findings above. Whole-run `step3-decisions --phase final` remains open
  run-wide while other frontier pairs are still in flight, which is expected.
