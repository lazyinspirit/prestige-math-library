# Step 3b authoring report — `scalar-conservation-laws-and-entropy-solutions`

- Run `frontier-39-analysis-30`; role `alpha-high`; label
  `step3b-pair-scalar-conservation-laws-and-entropy-solutions-2e87de9f90d6c894`.
- Pair: A `scalar-conservation-laws-and-entropy-solutions` (order 458.049,
  category `pde`, batch 20) / B
  `scalar-conservation-laws-and-entropy-solutions-examples` (order 458.050).
- Owning batch: 20 (both pages). Sibling rows in batch 20 belong to this pair
  only.

## Owned IDs (31 A + 13 B)

A page: `def-scalar-conservation-law-and-flux`,
`def-distributional-weak-solution-of-a-scalar-conservation-law`,
`prop-classical-solutions-satisfy-the-weak-conservation-law`,
`prop-characteristics-for-a-one-dimensional-scalar-conservation-law`,
`def-piecewise-smooth-shock-and-one-sided-traces`,
`thm-rankine-hugoniot-jump-condition`,
`prop-distributional-weak-solutions-are-not-unique`,
`def-convex-entropy-entropy-flux-pair`,
`prop-viscous-entropy-dissipation-identity`,
`def-kruzhkov-entropy-solution`,
`thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution`,
`lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds`,
`lem-viscous-scalar-laws-contract-spatial-translates-in-lone`,
`lem-kato-inequality-for-two-entropy-solutions`,
`thm-kruzhkov-local-l1-contraction`,
`cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions`,
`cor-finite-propagation-for-scalar-conservation-laws`,
`lem-vanishing-viscosity-families-are-locally-precompact-in-lone`,
`cor-global-lone-contraction-from-the-local-kruzhkov-estimate`,
`thm-existence-of-bounded-kruzhkov-entropy-solutions`,
`lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality`,
`def-self-similar-riemann-problem`,
`thm-riemann-solver-for-strictly-convex-scalar-flux`,
`thm-oleinik-one-sided-entropy-condition`,
`cor-lax-shock-inequalities-for-convex-scalar-laws`,
`thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension`,
`cor-mass-conservation-for-integrable-entropy-solutions`,
`lem-additive-constant-in-an-entropy-flux-does-not-change-the-entropy-inequality`,
`cor-linfinity-maximum-bound-for-scalar-entropy-solutions`,
`thm-entropy-solution-semigroup-on-lone`,
`thm-entropy-solution-orbits-are-strongly-continuous-in-lone`.

B page: `ex-burgers-shock-riemann-solution`,
`ex-burgers-rarefaction-riemann-solution`,
`ex-gradient-catastrophe-before-shock-formation`,
`ex-rankine-hugoniot-in-space-time-normal-form`,
`ex-kruzhkov-entropy-inequality-for-a-shock`,
`ex-hamilton-jacobi-primitive-of-a-burgers-solution`,
`cex-expansion-shock-is-weak-but-not-entropic`,
`cex-rankine-hugoniot-alone-does-not-give-uniqueness`,
`cex-pointwise-shock-values-do-not-affect-the-weak-solution`,
`cex-convex-flux-riemann-formula-fails-for-a-nonconvex-flux`,
`ex-distinct-states-with-equal-flux-give-a-stationary-weak-discontinuity`,
`ex-affine-flux-reduces-the-entropy-semigroup-to-translation`,
`ex-nonconvex-riemann-data-can-require-a-composite-rarefaction-shock-wave`.

## Open obligations at entry

1. Author all 44 item files from the current batch-20 manifest (the manifest
   was rewritten 2026-10-05 07:11 after the owner repair packets; it is the
   statement authority), with complete proofs, tag formatting and contracts.
2. Author both pages `library/pde/scalar-conservation-laws-and-entropy-solutions.md`
   and `library/pde/scalar-conservation-laws-and-entropy-solutions-examples.md`.
3. Create `research/frontier-39-analysis-30-batch-20.proof-contracts.json` for
   the pair's items and refresh the batch-20 cross-batch dependency rows
   against actual proof uses (suppliers in batches 1, 9 and 19 are in-run,
   possibly unfinished).
4. Record item decisions with `tools/step3-decisions.mjs record-item` for the
   44 original scaffold IDs (accept/repaired where complete and checked;
   escalate where a supplier is unfinished and its actual use is unverified).
5. Recompute dependency levels against current dependencies and run the
   explicit-path checks (precheck, rendercheck, content policy, strict
   contracts, dependency levels, validate-plan, coverage).

## Checkpoint log

### 2026-10-05 — level 0/1 authored

- `def-scalar-conservation-law-and-flux` (level 0): file written from the current
  manifest statement; precheck clean, proof-layout 0 defects.
- `def-convex-entropy-entropy-flux-pair`, `def-distributional-weak-solution-of-a-scalar-conservation-law`:
  definitions, rendercheck clean.
- `prop-characteristics-for-a-one-dimensional-scalar-conservation-law` (level 1):
  complete proof; canonical step numbering 1.1, 1.2, 2.1, 3.1, 4.1, 5.1.
- `thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution`
  (level 1): complete fixed-point/L^1/range/continuation proof; interior
  regularity `C^{1,2}` rests on the classical interior Schauder estimate for the
  heat operator, cited to Picard, *Notes on Hölder Estimates for Parabolic PDE*,
  §§2.3–2.4 (complete text, fetch-verified in this session), with the bootstrap
  reduction proved and the first Hölder gain derived from the kernel bounds.
  **Open qualification:** no in-library supplier for the linear Schauder
  estimate; candidate for an owner-approved prerequisite lemma. Decision will be
  `escalate` for this reason (literature-sourced load-bearing step) unless a
  supplier lands.

### Dependency-plan decision (recorded before later items)

- `thm-oleinik-one-sided-entropy-condition` will use the Hopf–Lax/primitive
  route for (i)⇒(ii) through
  `thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension`, whose
  (i) direction will be proved by the viscous approximation (this page's
  `thm-viscous-...`, `lem-vanishing-viscosity-families-are-locally-precompact-in-lone`,
  `prop-viscous-entropy-dissipation-identity`) plus the batch-19 Hopf–Lax
  comparison/stability items. Consequently Oleinik's `deps` gain the
  correspondence and its `dependency_level` rises above 7 (to be recomputed and
  recorded consistently in the manifest and item metadata).

### 2026-10-05 — levels 2–4 authored

- Level 2: `def-kruzhkov-entropy-solution`,
  `def-piecewise-smooth-shock-and-one-sided-traces`,
  `prop-classical-solutions-satisfy-the-weak-conservation-law`,
  `prop-viscous-entropy-dissipation-identity`,
  `ex-rankine-hugoniot-in-space-time-normal-form`; precheck clean.
- Level 3: `def-self-similar-riemann-problem`,
  `lem-additive-constant-in-an-entropy-flux-does-not-change-the-entropy-inequality`,
  `lem-kato-inequality-for-two-entropy-solutions`,
  `lem-viscous-approximations-obey-uniform-linfinity-and-energy-bounds`,
  `prop-distributional-weak-solutions-are-not-unique`,
  `thm-rankine-hugoniot-jump-condition`,
  `cex-pointwise-shock-values-do-not-affect-the-weak-solution`; precheck clean.
- Level 4: `lem-convex-entropy-condition-for-a-shock-is-the-flux-chord-inequality`,
  `lem-viscous-scalar-laws-contract-spatial-translates-in-lone` (canonical proof
  form adopted from precheck), `thm-kruzhkov-local-l1-contraction` (proof via
  Kato inequality + Lipschitz-coarea cutoffs βσ(|x−x₀|+Lt), monotone time
  decay at Lebesgue points, strong local L¹ initial trace, σ↓0). All precheck +
  rendercheck clean. No unfinished suppliers in this group.

### 2026-10-05 — level 5 authored (7 items)

- `cor-finite-propagation-for-scalar-conservation-laws`,
  `cor-global-lone-contraction-from-the-local-kruzhkov-estimate`,
  `cor-lax-shock-inequalities-for-convex-scalar-laws`,
  `cor-uniqueness-comparison-and-order-preservation-for-entropy-solutions`,
  `lem-vanishing-viscosity-families-are-locally-precompact-in-lone`,
  `ex-distinct-states-with-equal-flux-give-a-stationary-weak-discontinuity`,
  `ex-gradient-catastrophe-before-shock-formation`: all precheck + rendercheck
  clean (two needed the canonical proof form / tag fixes).
- Positive-part corollary uses ∂t(u−v)₊+div(1_{u>v}(f(u)−f(v)))≤0, obtained by
  adding Kato to the weak equation, then the same cutoff machinery as
  `thm-kruzhkov-local-l1-contraction`; uniqueness/order preservation and (iii)
  follow by ball exhaustion.
- `lem-vanishing-viscosity-families...` proof: uniform L∞/L¹/spatial moduli;
  mollified-sign test g=ϱ_h*(χ sgn z) gives the uniform time modulus
  η_R(τ)=C_R(ω₀(τ^{1/3})+τ^{1/3}); Fréchet–Kolmogorov in ℝ^{n+1} + diagonal
  extraction (Dependent Choice); a.e. subsequence; continuous L¹_loc
  representative via completeness. All suppliers are existing in-run files.
- `ex-gradient-catastrophe-before-shock-formation` and
  `ex-distinct-states...` verified directly (explicit characteristic/gradient
  formulas; stationary two-state weak solution and Kruzhkov-pair jump measure).
  The bounded-data existence theorem is a statement-level forward pointer only,
  not used in either proof.

### 2026-10-05 — level 6 authored (3 items)

- `cor-linfinity-maximum-bound-for-scalar-entropy-solutions`: comparison with
  constant entropy solutions; every-time clause via L¹_loc continuous
  representative. Precheck + rendercheck clean.
- `thm-riemann-solver-for-strictly-convex-scalar-flux`: shock case (RH + chord
  criterion) and rarefaction case (ε-regularized fluxes f_ε = f + εr²/2 give
  C¹ fans with vanishing entropy production; uniform passage ε↓0; Kruzhkov
  pairs by η^δ smoothing); uniqueness from `cor-uniqueness-comparison...`.
- `thm-existence-of-bounded-kruzhkov-entropy-solutions`: normalization
  f̃ = f − f(0); C¹ flux approximants f_m (mollify + cutoff, f_m(0)=0); Step 1
  smooth datum via `lem-vanishing-viscosity-families...` with the weak
  equation and viscous-entropy-balance passage; Step 2 general L∞∩L¹ datum by
  mollified data and the global contraction (Cauchy in C([0,T];L¹(K))),
  limit passes all Kruzhkov inequalities; uniqueness by `cor-uniqueness...`.
  All precheck + rendercheck clean. All suppliers exist in-run.

### 2026-10-05 — level 7 authored (4 A-page items) and route corrections

- **Superseded decision (recorded here):** the earlier plan to give
  `thm-oleinik-one-sided-entropy-condition` a dependency on
  `thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension` is
  obsolete: the current batch-20 manifest strategy (rewritten 2026-10-05 07:11
  by the owner repair packets) proves Oleinik's (i)⇒(ii) directly by the
  viscous maximum-principle route, so the item keeps `dependency_level: 7`
  and its manifest deps unchanged; no manifest edit was made.
- `cor-mass-conservation-for-integrable-entropy-solutions`,
  `thm-entropy-solution-semigroup-on-lone`,
  `thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension`,
  `thm-oleinik-one-sided-entropy-condition`: all precheck + rendercheck clean.
- **Open qualifications recorded (consumers of the concurrent B19 pair and
  literature steps):**
  - the correspondence proof cites B19 suppliers
    `thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation`,
    `lem-hopf-lax-infima-localise`,
    `cor-hopf-lax-is-a-contraction-in-the-supremum-norm`,
    `def-hopf-lax-operator`, `def-legendre-transform-of-a-hamiltonian` (all
    files exist as of this checkpoint; consuming steps 1.1–1.6, 2.2). If any
    of these changes statement, the correspondence's steps 1.1–1.6 must be
    re-reconciled; decision will be escalated until then.
  - the correspondence uses the literature equivalence [DOW] Corollary 2.5
    (printed p. 4) for “viscosity solution ⇒ V_x is a Kruzhkov entropy
    solution”; no in-library supplier exists (Facts [F3], step 1.3).
  - Oleinik [F2]/step 1.2 uses the classical boundedness of v^ε_x on
    positive-time strips (interior parabolic regularity); no separate
    in-library supplier.

### 2026-10-05 — level 7 completed (3 B-page items)

- `cex-convex-flux-riemann-formula-fails-for-a-nonconvex-flux`: explicit
  u³ jump at speed 1, weak solution, entropy failure at k=−1/2 with
  [q_k]−s[η_k]=3/4>0 plus the chord residual z³−z. Clean.
- `ex-burgers-rarefaction-riemann-solution` and
  `ex-burgers-shock-riemann-solution`: specialisations of the solver theorem
  with direct branch/interface/trace computations. Clean.

### 2026-10-05 — level 8 and level 9 completed; handoff

- Level 8: `thm-entropy-solution-orbits-are-strongly-continuous-in-lone`,
  `cex-expansion-shock-is-weak-but-not-entropic`,
  `ex-affine-flux-reduces-the-entropy-semigroup-to-translation`,
  `ex-hamilton-jacobi-primitive-of-a-burgers-solution`,
  `ex-kruzhkov-entropy-inequality-for-a-shock`,
  `ex-nonconvex-riemann-data-can-require-a-composite-rarefaction-shock-wave`.
- Level 9: `cex-rankine-hugoniot-alone-does-not-give-uniqueness`.
- Both pages authored:
  `library/pde/scalar-conservation-laws-and-entropy-solutions.md` (31 items)
  and `library/pde/scalar-conservation-laws-and-entropy-solutions-examples.md`
  (13 examples); rendercheck clean.

## Completed IDs (44 of 44)

All 31 A-page and 13 B-page ids of the batch-20 manifest are written and
checked: the level-0–9 list is the dispatch list above; every file exists under
`items/`, is listed on its page, is in scope of
`research/frontier-39-analysis-30-batch-20.proof-contracts.json`, and carries a
matching `dependency_level` in item metadata and manifest (verified below).
No new item IDs were created; no sibling rows were modified in shared files.

## Checks actually run (2026-10-05)

- `node tools/proof-layout.mjs items/<44 ids>` → 44 items, 179 steps, 0 defects
  (single batched command).
- `node tools/tsx-run.mjs tools/precheck.mts <44 ids>` → 38 checked (the 6
  definitions have no proof body), 0 failing.
- `node tools/rendercheck.mjs <44 item paths + 2 page paths>` → all clean
  (KaTeX parse, delimiters, no wikilinks in math, frontmatter YAML).
- `node tools/proof-contract.mjs research/frontier-39-analysis-30-batch-20.proof-contracts.json --strict`
  → 44/44 items, 0 error(s), 0 warning(s).
- `node tools/content-policy.mjs research/frontier-39-analysis-30-batch-20.pages.json`
  → 44 scoped items, 0 error(s), 0 warning(s).
- `node tools/coverage-checklist.mjs research/frontier-39-analysis-30-batch-20.coverage.json`
  → 2 pages, 60 harvested results, 0 error(s), 0 warning(s).
- `node tools/manifest-deps.mjs research/frontier-39-analysis-30-batch-20.pages.json`
  → 44 items, 0 errors.
- `node tools/validate-plan.mjs research/plan-spec.json` → plan acyclic and
  consistent; no pre-splice mismatch affecting batch 20 was found.
- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  → all 44 batch-20 items consistent (item metadata = manifest = computed);
  the command still exits nonzero for items of OTHER pairs in the run, listed
  under published concerns below.
- `node tools/frontier-dependency-ledger.mjs refresh --run frontier-39-analysis-30`
  → refreshed and deduplicated; byte-identical to the previous ledger (the
  batch-20 cross-batch input already matched the authored proof uses: 10
  in-run cross-batch edges, all with verified/removed dispositions; no new
  rows were needed, no sibling rows disturbed).
- `node tools/step3-decisions.mjs record-item` for all 44 ids → 41 `accept`
  (confidence 1) + 3 `escalate`, each with the examined dependency list; no
  `--owner`, no self-review or audit stamps were added.

## Escalations (owner-held; exact evidence)

1. `thm-viscous-scalar-cauchy-problem-with-smooth-data-has-a-global-classical-solution`
   — the interior Schauder estimate for the heat operator (step 4.1) is
   literature-sourced (Picard, *Notes on Hölder Estimates for Parabolic PDE*,
   Chapter 2 Sections 3–4, pp. 18–27) with no in-library supplier. Remedy:
   owner-approved prerequisite lemma for the linear interior Schauder estimate,
   or an owner ruling that the classical literature interface suffices.
2. `thm-oleinik-one-sided-entropy-condition` — step 2.1 (barrier comparison)
   uses classical boundedness of $v^\varepsilon_x$ on positive-time strips for
   the constructed viscous solution; no in-library bounded-gradient/smoothing
   supplier. Remedy: an in-library smoothing lemma for the viscous solution, or
   the same owner ruling. The equivalence chain and the (iii)⇒(i) commutator
   argument are otherwise complete.
3. `thm-hamilton-jacobi-conservation-law-correspondence-in-one-dimension` —
   Facts [F3]/step 2.1 use the [DOW] Corollary 2.5 (printed p. 4)
   viscosity-gradient/entropy equivalence; no in-library supplier exists.
   Consumers within this pair: none directly use the theorem (Oleinik's route
   was superseded), so the escalation is local to this item.

## Supplier reconciliation (concurrent pairs)

- The direct in-run prerequisite pair
  `hamilton-jacobi-equations-and-viscosity-solutions` (batch 19) is now
  authored: all suppliers consumed here exist and pass precheck —
  `thm-hopf-lax-formula-solves-the-hamilton-jacobi-equation`,
  `lem-hopf-lax-infima-localise`,
  `cor-hopf-lax-is-a-contraction-in-the-supremum-norm`, `def-hopf-lax-operator`,
  `def-legendre-transform-of-a-hamiltonian`, `def-hamilton-jacobi-cauchy-problem`,
  `def-discontinuous-viscosity-solution`, `def-viscosity-subsolution-and-supersolution`
  — consumed in the correspondence (steps 1.1–1.3, 2.1, 3.1, 4.1, 5.1, 6.1)
  and in `ex-hamilton-jacobi-primitive-of-a-burgers-solution` (step 4.1). If
  any of these changes its Statement, those consuming steps must be
  re-reconciled; the exact consumer/supplier edges are recorded in
  `research/frontier-39-analysis-30-batch-20.cross-batch-dependencies.json`.
- No batch-20 dependency failed to resolve: every dep ID exists as an item file
  (checked against the manifest).

## Published concerns and out-of-scope observations

- `node tools/item-dependency-levels.mjs check --run frontier-39-analysis-30`
  reports label mismatches in OTHER pairs (exact IDs, all outside this pair):
  `def-radial-and-nontangential-maximal-functions-of-a-tempered-distribution`,
  `def-grand-maximal-test-class-of-order-n`,
  `lem-tangential-maximal-function-norm-bound`,
  `lem-grand-maximal-function-is-dominated-by-the-tangential-maximal-function`,
  `lem-approximate-identities-in-schwartz-space-converge-in-tempered-distributions`,
  `lem-smooth-maximal-functions-of-tempered-distributions-are-borel-measurable`,
  `lem-grand-maximal-function-controls-admissible-radial-and-nontangential-maximal-functions`,
  `def-real-hardy-space-by-a-radial-maximal-function`,
  `lem-truncated-maximal-function-estimates`,
  `lem-calderon-reproducing-formula-for-the-hardy-decomposition`,
  `lem-an-hp-atom-has-uniform-hp-quasinorm`,
  `thm-maximal-function-characterisations-of-real-hardy-spaces`,
  `rem-riesz-transform-characterisation-of-real-hone`,
  `lem-ellp-sums-of-hp-atoms-converge-in-tempered-distributions`,
  `cor-real-hardy-space-equals-lp-for-p-greater-than-one`,
  `lem-hardy-calderon-zygmund-level-decomposition-produces-atoms`,
  `thm-atomic-characterisation-of-real-hp`, `rem-real-hp-is-quasi-banach-below-one`,
  `thm-calderon-zygmund-operators-map-hone-to-lone-under-cancellation`,
  `thm-fourier-transform-decay-of-real-hardy-space-elements`,
  `cor-integrable-hardy-functions-have-vanishing-moments-in-the-atomic-range`,
  `ex-a-normalised-mean-zero-hone-atom`,
  `cex-an-lone-function-with-nonzero-integral-is-not-in-real-hone`,
  `ex-hilbert-transform-of-a-hone-atom-is-integrable`,
  `lem-ltwo-atoms-have-uniform-hone-quasinorm`,
  `lem-mean-zero-ltwo-functions-on-a-cube-embed-continuously-in-hone`,
  `lem-linfinity-bmo-functions-dualise-hone-boundedly`,
  `lem-finite-atomic-sums-are-dense-in-hone`,
  `thm-bmo-defines-a-bounded-functional-on-hone`,
  `lem-hone-functional-has-compatible-local-ltwo-representatives`,
  `lem-the-dual-representative-has-uniform-bmo-oscillation`,
  `lem-bmo-classes-are-determined-by-their-atom-pairings`,
  `thm-real-hone-bmo-duality`,
  and `thm-higher-eigenvalues-by-orthogonality-constrained-minimisation`.
  These belong to the real-Hardy/BMO and eigenvalue pairs; remedy: the owning
  pairs recompute their manifest labels. No batch-20 item is affected, and no
  batch-20 file was edited to compensate.
- Suspicion (not confirmed): `thm-existence-of-bounded-kruzhkov-entropy-solutions`
  is quoted as a statement-level forward pointer by
  `ex-gradient-catastrophe-before-shock-formation`; the pointer is not used in
  that example's proof, so no ordering defect arises, but Step 4 should keep
  the pointer in mind when splicing page order.

## Open obligations at handoff

- The three escalations above are owner-held; no batch-20 decision remains
  `reopen`, and no `--owner` receipt was written.
- Final confirmation: `step3-decisions.mjs check --phase final` lists exactly
  those three batch-20 items as open (owner-held escalations); the other 41 are
  recorded as accepted with the examined dependency lists.
- The proof contracts for batch 20 contain `finite_smoke: []` (no registry
  check matches scalar-conservation material); this is the same run-level
  vacuity noted by the batch-19 pair and is left for the Step 4/5 reconciliation.
- No missed items, pages, contracts, or checks remain in this pair.
