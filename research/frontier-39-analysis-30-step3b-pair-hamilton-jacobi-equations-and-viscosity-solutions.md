# Step 3b — pair audit and authoring: `hamilton-jacobi-equations-and-viscosity-solutions`

- Run `frontier-39-analysis-30`; role alpha-high; label
  `step3b-pair-hamilton-jacobi-equations-and-viscosity-solutions-2550e742d02b5abf`.
- Pair: A `hamilton-jacobi-equations-and-viscosity-solutions` (33 items) / B
  `hamilton-jacobi-equations-and-viscosity-solutions-examples` (10 items), batch
  19, category `pde`. Companion cross-batch pair (read-only):
  `analytic-semigroups-and-linear-evolution-equations` (batch 18).
- Inputs read at entry: `CLAUDE.md`, `SCHEMA.md`, batch-19 pages manifest and
  notes, batch-19 coverage, Step 3a scope report, Step 1 owner resolution and
  readiness records, `plan-spec.json` row 458.047, design PDE-25
  (`research/plan-pde-track.md` L2159–L2244 and L3791–L3805), sources
  [TR] Tran (289 pp.), [BHJ] Bressan (64 pp.), [CIL] Crandall–Ishii–Lions
  (69 pp.) re-fetched 2026-10-05 with the stamped sha256 prefixes.

## Owned IDs (dispatch order, level | id | page)

A page (33):
0 def-hamilton-jacobi-cauchy-problem · 0 def-legendre-transform-of-a-hamiltonian ·
0 def-upper-and-lower-semicontinuous-envelopes · 1 def-hopf-lax-operator ·
1 def-viscosity-subsolution-and-supersolution ·
1 lem-envelopes-are-the-least-semicontinuous-majorants ·
1 lem-finite-valued-convex-hamiltonian-equals-its-biconjugate ·
2 cor-hopf-lax-is-a-contraction-in-the-supremum-norm ·
2 def-discontinuous-viscosity-solution · 2 def-half-relaxed-limits ·
2 lem-hopf-lax-infima-localise ·
2 lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation ·
2 lem-time-penalisation-moves-a-doubling-variables-maximum-away-from-the-terminal-boundary ·
2 lem-viscosity-testing-by-first-order-jets ·
2 rem-value-functions-and-hamilton-jacobi-bellman-equations ·
2 thm-comparison-for-autonomous-convex-superlinear-hamiltonians ·
3 cor-hopf-lax-preserves-a-modulus-of-continuity ·
3 lem-doubling-variables-maximum-localisation ·
3 lem-hopf-lax-minimiser-satisfies-the-characteristic-euler-relation-at-differentiability-points ·
3 prop-classical-solutions-are-viscosity-solutions ·
3 prop-maxima-of-subsolutions-and-minima-of-supersolutions ·
3 thm-half-relaxed-limit-stability-for-viscosity-solutions ·
3 thm-stability-of-viscosity-solutions-under-local-uniform-convergence ·
3 thm-upper-semicontinuous-envelope-of-a-locally-bounded-supremum-of-subsolutions ·
4 lem-perron-envelope-failure-of-the-supersolution-test-allows-a-local-bump ·
4 lem-viscosity-initial-trace-is-enforced-by-upper-and-lower-barriers ·
4 thm-comparison-for-first-order-hamilton-jacobi-equations ·
4 thm-hopf-lax-dynamic-programming-semigroup ·
5 cor-finite-speed-of-dependence-for-lipschitz-hamiltonians ·
5 cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions ·
5 thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation ·
6 thm-perron-method-for-hamilton-jacobi-equations ·
6 thm-vanishing-viscosity-convergence-for-hamilton-jacobi-equations

B page (10):
2 cex-reversing-the-contact-extremum-reverses-the-viscosity-inequality ·
3 cex-hopf-lax-without-convex-superlinear-coercivity ·
3 cex-viscosity-solutions-need-not-be-unique-when-the-boundary-condition-is-not-imposed-in-a-comparison-class ·
4 cex-minima-of-viscosity-subsolutions-need-not-be-subsolutions ·
4 ex-eikonal-equation-as-a-viscosity-equation ·
4 ex-quadratic-hopf-lax-formula-and-moreau-envelope ·
5 ex-distance-to-the-boundary-is-the-viscosity-solution-of-the-unit-eikonal-dirichlet-problem ·
5 ex-negative-absolute-value-solves-the-eikonal-equation-in-viscosity-sense ·
5 ex-vanishing-viscosity-selects-the-hamilton-jacobi-solution ·
6 ex-hopf-lax-solution-with-a-forming-corner

## Open obligations at entry

1. Author all 43 item files, the two library pages, the batch-19 proof
   contracts, and the two in-run dependency inputs if they change.
2. Preserve sibling rows in shared files (batch 19 holds only this pair; batch
   20 is the sibling's).
3. Reconcile the four Step-1 escalations: (i) Hopf–Lax uniqueness claim now
   rides on `thm-comparison-for-autonomous-convex-superlinear-hamiltonians`;
   (ii) finite-speed corollary uses its own two-time doubling reduction;
   (iii) forming-corner example; (iv) vanishing-viscosity example — the last
   two depend on the repaired comparison chain.
4. Step-3a observations O1–O3 to fold into the authoring: O1 eikonal
   distance-to-boundary vacuity; O2 Perron initial-face extension for the
   lower envelope; O3 write out the nonstandard penalisations.
5. Step-3a report: no unmet prerequisites; page-level cross-batch edge to
   batch 18 open (reading order only, no item edge).

## Checkpoints

- (entry) Sources re-downloaded to /tmp/hj-src and sha256 prefixes verified
  against the coverage stamps: tran 4107d365872d5308…, bhj 1668513cecebb571…,
  cil 58aac2fbf8773e56…; page counts 289/64/69.

- (checkpoint 1) Authored and format-checked (precheck PASS, proof-layout 0 defects)
  19 items: def-hamilton-jacobi-cauchy-problem, def-legendre-transform-of-a-hamiltonian,
  def-upper-and-lower-semicontinuous-envelopes, def-hopf-lax-operator,
  def-viscosity-subsolution-and-supersolution, lem-envelopes-are-the-least-semicontinuous-majorants,
  lem-finite-valued-convex-hamiltonian-equals-its-biconjugate,
  cor-hopf-lax-is-a-contraction-in-the-supremum-norm, def-discontinuous-viscosity-solution,
  def-half-relaxed-limits, lem-hopf-lax-infima-localise,
  lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation,
  lem-time-penalisation-moves-a-doubling-variables-maximum-away-from-the-terminal-boundary,
  lem-viscosity-testing-by-first-order-jets, rem-value-functions-and-hamilton-jacobi-bellman-equations,
  thm-comparison-for-autonomous-convex-superlinear-hamiltonians,
  cex-reversing-the-contact-extremum-reverses-the-viscosity-inequality,
  lem-doubling-variables-maximum-localisation, cor-hopf-lax-preserves-a-modulus-of-continuity.
  Repair recorded: def-upper-and-lower-semicontinuous-envelopes — the scaffold's claim that
  r -> M_r(x) is nonincreasing was reversed; monotonicity is nondecreasing in r (fixed in the item).
  Dependency additions (published only, levels unchanged): def-legendre... added to
  cor-hopf-lax-is-a-contraction; cor-convex-functions... and H-B-EVT to the same; thm-ftc-first-part
  and thm-continuous-implies-integrable to lem-viscosity-testing-by-first-order-jets;
  thm-euclidean-semicontinuous-extreme-value-theorem replaces thm-semicontinuous-evt (which is
  stated on subsets of R only) in lem-doubling-variables-maximum-localisation and
  thm-comparison-for-autonomous-convex-superlinear-hamiltonians.
- (checkpoint 2, authoring complete) All 43 owned items authored (33 A + 10 B), the
  two library pages written, `research/frontier-39-analysis-30-batch-19.proof-contracts.json`
  generated (43 contracts), and the batch-19 manifest resynced so every item's
  `deps` array agrees with its file. Repairs made after checkpoint 1:
  ex-eikonal and ex-quadratic dropped the examples-page dependency
  `ex-euclidean-norm-and-squared-norm-are-convex` (load-bearing in ex-eikonal,
  vestigial in ex-quadratic; both were `b-leaf-content` defects);
  ex-eikonal now proves differentiability of the norm off the origin with a local
  expansion citing published `thm-cauchy-schwarz-and-the-euclidean-norm`;
  `def-viscosity-subsolution-and-supersolution` declares its Remarks-only
  later-page link in `forward_refs`; `prop-maxima-of-subsolutions-and-minima-of-supersolutions`
  moved its load-bearing later-page link out of the Statement into Remarks and
  declared `forward_refs`; `thm-comparison-for-first-order-hamilton-jacobi-equations`
  was renumbered to the canonical precheck form (1.1, 1.2, 2.1, 2.2, 3.1).

- (final checkpoint, handoff) Checks actually run on 2026-10-05 (explicit paths,
  batching all 43 changed item paths):
  - `node tools/tsx-run.mjs tools/precheck.mts <43 paths>` — 35 checked
    (8 definition/remark items are `precheck: n/a`), 0 failing.
  - `node tools/proof-layout.mjs <43 paths>` — 43 items, 125 steps, 0 defects
    (run once after the last item edit).
  - `node tools/rendercheck.mjs <43 items + 2 pages>` — 45 files, clean
    (wikilinks-in-math, delimiters, multiline displays, KaTeX parse, YAML parse).
  - `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-19.pages.json`
    — 43 scoped items, 0 errors, 0 warnings. `--manifest-only` reports
    `batch-item-already-exists` for every already-authored item of every batch of
    this run (measured identically on batch 1), because `research/plan-spec.json`
    still carries `items: []` for these pages; the item-mode gate is the one that
    applies after authoring and is green. Reported for Step 4 (splice-plan).
  - `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-19.pages.json`
    — 43 items, 0 normalized, 0 errors.
  - `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-19.proof-contracts.json --strict`
    — 0 errors, 1 warning (`shotgun-bracket` on
    `lem-envelopes-are-the-least-semicontinuous-majorants`: step 1.1 genuinely
    cites all four declared facts and steps 2.1/3.1 cite only earlier steps; the
    citations are accurate and the warning is nonfatal).
  - `node tools/boundary-audit.mjs ... --fail-on-contradicted --fail-on-template --json`
    — exit 0, no contradicted and no template rows; `node tools/finite-smoke.mjs`
    — 0 errors, 0 checks over 0/43 obligation-carrying items; `node tools/citation-fidelity.mjs
    ... --fail-on-missing-quote` — exit 0, 165 citations, 1 widening candidate
    (see open gaps).
  - `node tools/fwdcheck.mjs --items-file <43 ids>` — clean, including the global
    dependency/forward graph checks; `node tools/depcheck.mjs --pending-audit-ok`
    — no error involves any of the 43 items or the two pages (the two
    `b-leaf-content` errors present at checkpoint 2 are cleared).
  - `node tools/rendercheck.mjs` full corpus — exit 1 with 31 errors, none in
    this pair (all in other items, e.g. Hardy/Schwartz/Calderón--Zygmund items
    and one scalar-conservation-laws item); the explicit 45-file run over this
    pair and its two pages is clean. `node tools/prosecheck.mjs` — 0 errors
    repo-wide; the three heuristic warnings touching our files are the
    page-overview phrases "half of the page" / "None of the examples" and the
    remark phrase "the one of this page", all non-count claims, left as
    recorded warnings. `extcheck` and `depsource` — exit 0; no row of
    `depsource` classifies a dependency of this pair as unresolved, homeless
    or draft-page.
  - `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
    — fails only on two sibling items, not ours:
    `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation`
    (batch 18: label 5, computed 6) and
    `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation`
    (label 14, computed 13). All 43 of our labels were re-verified against the
    computed levels in isolation: 0 mismatches, maximum level 6.
  - `node tools/validate-plan.mjs research/plan-spec.json` — exit 0, acyclic and
    consistent.

- (decisions) `node tools/step3-decisions.mjs check --run frontier-39-analysis-30
  --phase scope` — our pair cleared (it is not in the work list). All 43 item
  decisions recorded with confidence 1 and the exact examined `deps` array:
  31 `accept`, 12 `repaired` — `def-upper-and-lower-semicontinuous-envelopes`,
  `lem-viscosity-testing-by-first-order-jets`,
  `thm-comparison-for-autonomous-convex-superlinear-hamiltonians`,
  `thm-half-relaxed-limit-stability-for-viscosity-solutions`,
  `lem-perron-envelope-failure-of-the-supersolution-test-allows-a-local-bump`,
  `cor-finite-speed-of-dependence-for-lipschitz-hamiltonians`,
  `thm-comparison-for-first-order-hamilton-jacobi-equations`,
  `thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation`,
  `ex-eikonal-equation-as-a-viscosity-equation`,
  `ex-quadratic-hopf-lax-formula-and-moreau-envelope`,
  `def-viscosity-subsolution-and-supersolution`,
  `prop-maxima-of-subsolutions-and-minima-of-supersolutions`. A final
  `check --phase final` reports 0 work rows for our 43 items (the run-wide check
  still lists 733 open work rows for the other 29 pairs, which are still in
  flight).

- (scope/ledger) `node tools/frontier-dependency-ledger.mjs refresh --run
  frontier-39-analysis-30` — refreshed; our single cross-batch row stays `open`
  with the Step-3b re-verification appended: page-level reading-order edge
  `hamilton-jacobi-equations-and-viscosity-solutions` ->
  `analytic-semigroups-and-linear-evolution-equations` (batch 18, still in
  flight: 19 of its 36 item files authored on 2026-10-05), no item-level proof
  use in this pair.

- Added suppliers: none. Every one of the 43 IDs was an original scaffold ID of
  the immutable pre-author inventory; no new ID was created, no pair added, and
  no sibling or published file edited. The only shared files touched are the
  batch-19 manifest, its deps arrays resynced for the two repaired items, and
  the batch-19 cross-batch input above (plus the derived run-level
  `frontier-39-analysis-30-cross-batch-dependencies.json`, regenerated by the
  sanctioned `frontier-dependency-ledger refresh`).

- Open gaps / published concerns for Step 4 and the reconciler:
  1. Page-level cross-batch edge to batch 18 remains open (above); the supplier
     pair is unfinished, so no consumer decision depends on it.
  2. Two sibling dependency-level label mismatches block the run-wide
     `item-dependency-levels` gate: batch 18
     `thm-well-posed-abstract-cauchy-problem-if-and-only-if-generation`
     (label 5, computed 6 — the same pair as our reading-order edge) and the
     other pair's
     `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation`
     (label 14, computed 13). Remedy: the owning pair's author recomputes the
     labels from the current manifest deps.
  3. `citation-fidelity` widening candidate on
     `lem-envelopes-are-the-least-semicontinuous-majorants` [F2]: the published
     `def-semicontinuity-on-euclidean-subsets` is stated for `$n\ge1$` while the
     lemma quantifies `$A\subseteq\mathbb R^m$` without `$m\ge1$`. The case
     `$m=0$` is a singleton with `$u^*=u_*=u$`; the citation is read with the
     ambient dimension renamed. If the owner requires literal strictness the
     repair is to add `$m\ge1$` to the two envelope items' Statements — a scope
     amendment, deliberately not made here.
  4. `content-policy --manifest-only` reports `batch-item-already-exists`
     run-wide because `plan-spec.json` page inventories are still empty;
     `splice-plan` at Step 4 is the licensed remedy. The item-mode gate is green.
  5. `gate-liveness` over the batch-19 contracts reports
     `finite-smoke` as VACUOUS (0 checks): the finite-smoke registry has no
     check matching Hamilton--Jacobi/viscosity material, and, run-wide, all 20
     batch contract files that currently exist carry 0 `finite_smoke` entries,
     so the merged run-level gate will flag the same vacuity unless another
     batch matches a registry check. `proof-contract` (43 items),
     `coverage-checklist` (85 harvested results) and `precheck` (20258 items)
     are live in the same run. This is a run-level scope condition for the
     reconciler, not a defect of this pair.
  6. `node tools/scope-decisions.mjs check --run frontier-39-analysis-30` fails
     run-wide (394 declines, all undecided) because no
     `frontier-39-analysis-30-alpha-<group>-scope-decisions.json` file exists
     yet. Batch 19 belongs to group `h` (batches 13, 19, 23); its eight
     undecided A-page declines are the deliberately unauthored design items
     (second-order and fully nonlinear theory, control systems/Pontryagin,
     Bernstein gradient bounds, the sup-convolution theorem of sums, the static
     optimal-control representation of the discounted equation, quantitative
     vanishing-viscosity rates, and the hidden convex structure), with decline
     ids `529b1d35…`, `62988634…`, `7f717314…`, `9a0c7b74…`, `d5df360c…`,
     `d67ed9ef…`, `f193c1a6…`, `f2b2a093…`. These are scope decisions and are
     not recorded here (the group-h file is a cross-pair artifact a sibling may
     be writing concurrently); remedy: at the 3b/Step-8 gate, run
     `scope-decisions prepare --run frontier-39-analysis-30` (creates the group
     files) and have the group-h alpha record `stands` with evidence for the 20
     group rows, or route any row to the owner.


## Current Step 3b re-audit and closure

- Re-audited the B19 proof chain after the proof repairs and recorded current-hash reviewer receipts in dependency order. The A/B scope is unchanged and owner proceed remains closed at `e44cb8b859dee2fca12a26faa4aed5dbc322b24e65fe323f63f9ce22ffb06a0e`. No Statement or Definition changed.
- B19 has **43/43 current item receipts closed** (26 `accept`, 17 `repaired`); there are no open B19 item rows.
- Comparison proof repair: both cases now convert the localization distance $d^2=|x-y|^2+|t-s|^2$ to the L1 space-time distance $|x-y|+|t-s|\le2d$ used by the Hamiltonian hypotheses. Case (a)'s displacement estimate carries the factor 2; case (b)'s modulus term is bounded by $\omega(2\delta_\alpha+8(M_{\alpha/2}-M_\alpha))$. This still vanishes by the uniform localization estimates.
- Finite-speed proof repair: the two-time difference reduction also uses $|x-y|+|t-s|\le2|z-z'|$, so the Hamiltonian error is bounded by $2C(1+|p|)|z-z'|$ and tends to zero under localization. Its cone comparison then applies to $G(p)=-L|p|$.
- Uniqueness proof repair: compare the upper envelope $u^*$ and lower envelope $v_*$, extending them to the initial face by the common continuous datum. Their relaxed initial inequalities make the extensions semicontinuous in the required directions; constant shifts give the one-sided estimate for distinct data. This handles the possibly discontinuous solutions in the statement.
- Perron proof repair: the bump lemma guarantees strict excess at some point in its support, not throughout a neighborhood of the contact point. The strict center gap and continuity keep the bump below the upper barrier; strict excess at the supplied point contradicts maximality. The B19 manifest strategy summaries are synced for the comparison factors, this bump argument, and the bounded uniqueness class in the vanishing-viscosity result.
- Refreshed affected receipts (all confidence 1):
  - `thm-comparison-for-first-order-hamilton-jacobi-equations`: repaired, SHA-256 `4d7b235b0a13123933a8d97d51df63235a1289d47bde8624a203615d30fa5c74`. Direct dependencies: `def-hamilton-jacobi-cauchy-problem`, `def-metric-compactness`, `def-metric-uniform-continuity`, `def-semicontinuity-on-euclidean-subsets`, `def-viscosity-subsolution-and-supersolution`, `lem-doubling-variables-maximum-localisation`, `lem-sup-epsilon`, `lem-time-penalisation-moves-a-doubling-variables-maximum-away-from-the-terminal-boundary`, `lem-viscosity-testing-by-first-order-jets`, `thm-compact-iff-finite-intersection-property`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, `thm-euclidean-semicontinuous-extreme-value-theorem`, `thm-heine-cantor-metric`.
  - `cor-finite-speed-of-dependence-for-lipschitz-hamiltonians`: repaired, SHA-256 `9269b3f46c9a88def7a16aad32f4b5c0cd00cd71c36a09613903ddbba4955f9d`. Direct dependencies: `def-directional-and-partial-derivatives`, `def-semicontinuity-on-euclidean-subsets`, `def-viscosity-subsolution-and-supersolution`, `thm-comparison-for-first-order-hamilton-jacobi-equations`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, `thm-euclidean-semicontinuous-extreme-value-theorem`, `thm-heine-borel-rn`.
  - `cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions`: repaired, SHA-256 `d842bf6a1ef443e16d92ea49fe4eb801446c5b5993b56b0b0632d5a47a921e38`. Direct dependencies: `def-discontinuous-viscosity-solution`, `def-metric-uniform-continuity`, `thm-comparison-for-first-order-hamilton-jacobi-equations`.
  - `thm-perron-method-for-hamilton-jacobi-equations`: repaired, SHA-256 `a6dc75e9ccf6e5ce2d651b8cb1db07d7e3ca5e17a61450ebe4e2652b393a29a6`. Direct dependencies: `cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions`, `def-upper-and-lower-semicontinuous-envelopes`, `def-viscosity-subsolution-and-supersolution`, `lem-perron-envelope-failure-of-the-supersolution-test-allows-a-local-bump`, `lem-viscosity-initial-trace-is-enforced-by-upper-and-lower-barriers`, `thm-comparison-for-first-order-hamilton-jacobi-equations`, `thm-upper-semicontinuous-envelope-of-a-locally-bounded-supremum-of-subsolutions`.
  - `thm-vanishing-viscosity-convergence-for-hamilton-jacobi-equations`: accept, SHA-256 `69123ced1180703429cb3bb06f7afeee60096bf624c64606de7ad21c468fda53`. Direct dependencies: `cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions`, `def-half-relaxed-limits`, `def-metric-compactness`, `def-mollifier-family-generated-by-a-unit-mass-smooth-bump`, `def-viscosity-subsolution-and-supersolution`, `lem-sup-epsilon`, `thm-comparison-for-first-order-hamilton-jacobi-equations`, `thm-half-relaxed-limit-stability-for-viscosity-solutions`, `thm-heine-cantor-metric`.
- Focused checks after the final source/contract edits: `node tools/proof-layout.mjs items/thm-comparison-for-first-order-hamilton-jacobi-equations.md items/thm-perron-method-for-hamilton-jacobi-equations.md items/cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions.md items/cor-finite-speed-of-dependence-for-lipschitz-hamiltonians.md` — 4 items, 14 steps, 0 defects; `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-19.proof-contracts.json --strict` — 0 errors, 1 existing nonfatal `shotgun-bracket` warning on `lem-envelopes-are-the-least-semicontinuous-majorants`. No tests or gates were run.
- Operational note: generated task `frontier-39-analysis-30-step3b-pair-hamilton-jacobi-equations-and-viscosity-solutions-1bdd69f4bdaaf091.task.md` labels the initial-trace lemma at level 4 while the manifest graph computes level 2. Per instruction the task was left untouched; its item order remains dependency-correct and manifest levels remain authoritative. The B19 cross-batch input records the older B18 page reading-order edge as removed; no B19 item uses it.

### Current item hash inventory

| Item | Current decision | Current transitive SHA-256 |
|---|---|---|
| `def-hamilton-jacobi-cauchy-problem` | accept | `6748c05f3f9e48bcd606946bfa313d5dabbf8f88121e63a8d741138f1bb503f5` |
| `def-legendre-transform-of-a-hamiltonian` | accept | `9943e2a6f31f72bc88bc0ecd1818a33821643145f86fce564bdea7fa95d7ca2f` |
| `def-upper-and-lower-semicontinuous-envelopes` | repaired | `aa1de9980699f90f5d13ca7fcb816248ed0f61a462bb2bee3d869b7fd73dafb7` |
| `def-hopf-lax-operator` | accept | `aae26557a07ccc009f82598c691b0840c31841a87f7e2cf5fa98d0e70f7b7c00` |
| `def-viscosity-subsolution-and-supersolution` | repaired | `8d0bd4e9c52c874857bb942c618e91bf5ad73109824d66924d3a4daeddf4dc1f` |
| `lem-envelopes-are-the-least-semicontinuous-majorants` | accept | `2d7324812ea0d93e5171f7d4242f98d86ec46eeb4bc2ad018c03ed85a0419ca4` |
| `lem-finite-valued-convex-hamiltonian-equals-its-biconjugate` | accept | `8abf80de2e9b2e7034fb8e5783af988b9d055540a62227a80c617cb1cde4f851` |
| `cor-hopf-lax-is-a-contraction-in-the-supremum-norm` | accept | `03a3802446a15a2cbfa43aacb6ecbfcbd3408ca747a1276e0c8e7ddbbefa6761` |
| `def-discontinuous-viscosity-solution` | accept | `cd7f1e96f1e581160d5242cb124f3e17eef171225125faba683ea173026df51c` |
| `def-half-relaxed-limits` | accept | `b1384751273dc011d4fc525129619ef2e4a2a98d871d468be15b2d42f3b40c10` |
| `lem-hopf-lax-infima-localise` | accept | `b90647c99a2ff8fc4f5e46480cbf314cf9e12d40c2c212f8b96b921340e3ac9f` |
| `lem-strictification-of-a-viscosity-test-function-by-a-quartic-perturbation` | accept | `ff32a5e916789d93dc07f9ca9034cae126e0e38b2ae7f6e4c0a160f3e9177d6a` |
| `lem-time-penalisation-moves-a-doubling-variables-maximum-away-from-the-terminal-boundary` | accept | `8c94084fd1d79420dd30e5a8d362e8123efbd04c3cb6a24c9c5eddfa482f9c7d` |
| `lem-viscosity-testing-by-first-order-jets` | repaired | `15bb9a481271257254fa47d2779936e6f53da7255f927872ef5408070cfba84b` |
| `rem-value-functions-and-hamilton-jacobi-bellman-equations` | repaired | `d6ffa2d1a71c5088df3d527c36b10545b89f905f6af943731e056d8db7be6b6c` |
| `thm-comparison-for-autonomous-convex-superlinear-hamiltonians` | repaired | `7395c1155878d7934f2592827c2188758906b52e01e9e8520228f52c9f9a3956` |
| `cex-reversing-the-contact-extremum-reverses-the-viscosity-inequality` | accept | `8d0bd4e9c52c874857bb942c618e91bf5ad73109824d66924d3a4daeddf4dc1f` |
| `cor-hopf-lax-preserves-a-modulus-of-continuity` | accept | `51a9aac910f31114f5b667af6d2ec775c40ae3bf379bb9e113d8c07a7735d5ac` |
| `lem-doubling-variables-maximum-localisation` | repaired | `23638661c9725033d829f7f3d1e6941f1202c92758edce809baa4b548fd44802` |
| `lem-hopf-lax-minimiser-satisfies-the-characteristic-euler-relation-at-differentiability-points` | accept | `5da7dce6276ba199b2042561008575cf23c0bcabd43f3d87e129a7efa05f6a2f` |
| `prop-classical-solutions-are-viscosity-solutions` | accept | `47ab5215e6ecc71a2c66f55ef389b3b33b71c43c79e8f6b2f7cf5c2c066a9340` |
| `prop-maxima-of-subsolutions-and-minima-of-supersolutions` | repaired | `1f1261d3c4281701e96e4cd74ee46e2639f9814fedac35a02d9d11ed672610d1` |
| `thm-half-relaxed-limit-stability-for-viscosity-solutions` | repaired | `ad0ba1b4241037949c36dd28566e9988726561dfe3a35661ef2301bc95f0bd3c` |
| `thm-stability-of-viscosity-solutions-under-local-uniform-convergence` | repaired | `e016acc235e55f8d1184aa849590c4af67e08624ae5ccf6882365cf14495662e` |
| `thm-upper-semicontinuous-envelope-of-a-locally-bounded-supremum-of-subsolutions` | accept | `84f3619af7a597bdbac60b4f5eaa68ef8af8d92943691e8bc1a53025d3b8d17f` |
| `cex-hopf-lax-without-convex-superlinear-coercivity` | accept | `4aef735cbcc812a5624ee1b64e94dbbcb08310b5dfabddcfb6621629c7e6fb1d` |
| `cex-viscosity-solutions-need-not-be-unique-when-the-boundary-condition-is-not-imposed-in-a-comparison-class` | accept | `a83bc671b7c97337bd08c87d79673e5d4e194a10cd32971f529a00133b6e32a5` |
| `lem-perron-envelope-failure-of-the-supersolution-test-allows-a-local-bump` | repaired | `ff36e4a5c65611e1814e0de1afca1175cde88afc6a98458b4fb55e0a22d8f4de` |
| `lem-viscosity-initial-trace-is-enforced-by-upper-and-lower-barriers` | accept | `cba2f01b211e931d0b33ffd5e458bb4b312f1bf5a74d3b08ee19f298a331ba8d` |
| `thm-comparison-for-first-order-hamilton-jacobi-equations` | repaired | `4d7b235b0a13123933a8d97d51df63235a1289d47bde8624a203615d30fa5c74` |
| `thm-hopf-lax-dynamic-programming-semigroup` | accept | `e14600d4b9c49c793f55d5a5e40b694d93930d981d5031cd46d18d1d42db4281` |
| `cex-minima-of-viscosity-subsolutions-need-not-be-subsolutions` | accept | `1f1261d3c4281701e96e4cd74ee46e2639f9814fedac35a02d9d11ed672610d1` |
| `ex-eikonal-equation-as-a-viscosity-equation` | repaired | `9653667a7fc0f8e1030fabb07431c027fe24fad170063649cedc37e203dce3ab` |
| `ex-quadratic-hopf-lax-formula-and-moreau-envelope` | repaired | `4b2eb5a5ea0da13736a08af16eed6ec326b6f1e775c71932416b38f886acc570` |
| `cor-finite-speed-of-dependence-for-lipschitz-hamiltonians` | repaired | `9269b3f46c9a88def7a16aad32f4b5c0cd00cd71c36a09613903ddbba4955f9d` |
| `cor-uniqueness-of-bounded-uniformly-continuous-viscosity-solutions` | repaired | `d842bf6a1ef443e16d92ea49fe4eb801446c5b5993b56b0b0632d5a47a921e38` |
| `thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation` | repaired | `c85b78f27c4ce1c36fd8482ca24e220ac391780cf325fcf347aec3e7a014ef0b` |
| `ex-distance-to-the-boundary-is-the-viscosity-solution-of-the-unit-eikonal-dirichlet-problem` | accept | `a60dc841c7024d6eeb0462a5174ebb50c153d1ea78a2ac25997ed2125213e612` |
| `ex-negative-absolute-value-solves-the-eikonal-equation-in-viscosity-sense` | accept | `33a4f917bb1a78e6854e91581b55928d3a9daa16074fd574d722e23479c6d70d` |
| `ex-vanishing-viscosity-selects-the-hamilton-jacobi-solution` | accept | `3c4ca909709f5e34d4ff549cf17d9e242fe8fd07deebaade89456aef1b05d88e` |
| `thm-perron-method-for-hamilton-jacobi-equations` | repaired | `a6dc75e9ccf6e5ce2d651b8cb1db07d7e3ca5e17a61450ebe4e2652b393a29a6` |
| `thm-vanishing-viscosity-convergence-for-hamilton-jacobi-equations` | accept | `69123ced1180703429cb3bb06f7afeee60096bf624c64606de7ad21c468fda53` |
| `ex-hopf-lax-solution-with-a-forming-corner` | accept | `77b041c9ff13daa79bfd0f0cfe69f984a34a7a15929c265356bebc07ca81ca8b` |
