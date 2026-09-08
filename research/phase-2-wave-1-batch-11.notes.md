# Phase 2 wave 1 — batch 11 current scaffold record

Date: 2026-09-08. Current disposition: the source-reading and direct
mathematical blockers for measurable manifold densities are resolved. The
proposal remains 11 A items and 7 B items. It is not publication approval.

## Mathematical disposition

The pointwise Borel density cocycle, overlap integrals, countable chart/partition
gluing, countable additivity, choice independence, compact-finiteness, Radon
regularity, smooth-density comparison, positivity on open sets and the
zero-dimensional case were checked. Boundary-chart faces are removed only
after using smooth boundary invariance and their Euclidean nullity; an infinite
coefficient on a null face still has integral zero.

`lem-measurable-density-chart-integrals-agree-on-overlaps` now depends on the
earlier Borel substitution lemma
`lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`
from `euclidean-surface-measure-divergence-and-green-identities`. The A-page has
that cross-category requirement explicitly. Its integrand is Borel, so no
Lebesgue-completion strengthening is needed. The later completed-measurable
integration clause continues through Borel representatives modulo completed
null sets and does not silently invoke a completed-measurable COV theorem.

The local Darboux bridge is also sound: finite cell faces are null, disjoint
lower/upper Borel step functions have the Darboux sums as Lebesgue integrals,
and the Darboux criterion squeezes the bounded Borel integrand. No
one-dimensional comparison theorem is misapplied to an n-box.

## Source receipt

- Lee, *Introduction to Smooth Manifolds*, Chapter 16 “Densities,” printed
  pp.428–433, was read continuously from the fetched 4,811,268-byte full PDF:
  Propositions 16.35–16.45 and the intervening construction, including the
  pullback formula and partition-of-unity integral.
- Folland, *Real Analysis*, Theorems 2.14–2.15 pp.50–51, Theorem 2.47
  pp.74–76, Theorem 7.8 p.217 and §11.4 pp.361–363 were read for monotone
  integration, substitution, regularity and density conventions. The coverage
  fetch stamp records the 994,471-byte full-text source.
- Current run-wide source closure is 59/59 fetched and 59/59 live.

## Protected Phase 3 debt and limit

The exact published measurable-C1 theorem defect remains unchanged and
reserved for Phase 3. Its consumers are recorded in the debt ledger even though
this proposed page now has a complete local Borel route. This audit covers the
direct density construction and named suppliers, not all 1,392 nodes from the
historical conservative closure expansion.

## Step-3 fix pass

### `alpha-c-verdict:measurable-densities-and-radon-volume-on-manifolds:missing[0]`

**Disposition:** resolved. The required page-level same-frontier record is now
`research/phase-2-wave-1-batch-11.cross-batch-dependencies.json`, with a
`verified` edge from
`measurable-densities-and-radon-volume-on-manifolds` to
`euclidean-surface-measure-divergence-and-green-identities`.

**Evidence:** the consumer page's current `requires` array declares that exact
batch-10 supplier. Its chart-overlap proof needs the supplier's nonnegative
Borel $C^1$ substitution lemma, not merely the old compact-support formula.
The supplier uses only $AC_\omega$, assumes open Euclidean domains and a
$C^1$ diffeomorphism, and returns equality in $[0,\infty]$; all three match
the boundary-chart-interior use. Its Radon-uniqueness proof is a local
replacement and does not use the protected published measurable-$C^1$
change-of-variables theorem.

**Changed record:** the new consumer-owned cross-batch input above. No manifest
change was needed: this page requirement and the supporting item dependency
were already explicit. No source disposition changed; the existing Lee and
Folland full-text receipts remain the active two textbook treatments.

### `alpha-c-verdict:measurable-densities-and-radon-volume-on-manifolds:missing[1]`

**Disposition:** resolved. The same input now records the required `verified`
item edge from
`lem-measurable-density-chart-integrals-agree-on-overlaps` to
`lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`.

**Evidence:** the consumer already declares the supplier in `deps`. After it
removes coordinate boundary faces, its transition is a $C^1$ diffeomorphism
between open subsets of $\mathbb R^n$ and its Borel-set indicator times the
target density coefficient is a nonnegative Borel function. The supplier's
statement has exactly those hypotheses and the required source-to-target
integral direction. The consumer's separately declared null-face dependencies
cover extended coefficients on the removed faces, while its $n=0$ clause is
the same singleton weight; neither case asks the supplier for a stronger
completed-measurable result.

**Changed record:** the new item row in the consumer-owned cross-batch input.
The page manifest and coverage were rechecked without a mathematical or source
change.

### Design and closure control

The controlling assigned design is DG-17M in
`research/plan-differential-geometry-track.md`, lines 4453–4550: it fixes the
11-A/7-B inventory, Borel-first construction, boundary convention, and warns
that the compact-support formula must not be silently promoted. The B section
at lines 4518–4537 fixes the seven examples. The current plan is controlling
for this run and differs from the prose design's seven-item `requires` list:
it adds the batch-10 page
`euclidean-surface-measure-divergence-and-green-identities`. This is a
necessary repair of the design's stated MT-11 measurable-$C^1$ supplier, whose
published proof is protected Phase-3 debt; the current batch-10 Radon-uniqueness
lemma supplies the same Borel interface locally. The plan/manifest already
carry that added prerequisite, so no unauthorized plan or prose edit was made.

### `closure-audit:batch-11:inherited-a-to-b-supplier-chain`

**Disposition:** fatal; not repairable within this batch's manifest/coverage/
notes authority. A current traversal of the A page's transitive `requires`
closure found 189 pages and 455 edges, with no missing page and no forward
edge, but with these 20 A-to-B supplier edges:

1. `radon-measures-and-the-riesz-markov-kakutani-theorem -> absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus-examples`;
2. `absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus -> differentiation-of-monotone-functions-and-the-vitali-covering-theorem-examples`;
3. `differentiation-of-monotone-functions-and-the-vitali-covering-theorem -> the-maximal-function-and-lebesgue-differentiation-examples`;
4. `the-maximal-function-and-lebesgue-differentiation -> the-duality-of-lp-and-lq-examples`;
5. `the-duality-of-lp-and-lq -> density-separability-and-convolution-in-lp-examples`;
6. `density-separability-and-convolution-in-lp -> the-lp-spaces-holder-minkowski-and-riesz-fischer-examples`;
7. `the-lp-spaces-holder-minkowski-and-riesz-fischer -> the-radon-nikodym-theorem-and-lebesgue-decomposition-examples`;
8. `the-radon-nikodym-theorem-and-lebesgue-decomposition -> signed-and-complex-measures-hahn-and-jordan-examples`;
9. `signed-and-complex-measures-hahn-and-jordan -> product-measures-and-the-fubini-tonelli-theorems-examples`;
10. `product-measures-and-the-fubini-tonelli-theorems -> modes-of-convergence-egorov-and-lusin-examples`;
11. `modes-of-convergence-egorov-and-lusin -> the-lebesgue-and-riemann-integrals-compared-examples`;
12. `the-lebesgue-and-riemann-integrals-compared -> the-lebesgue-integral-and-the-convergence-theorems-examples`;
13. `the-lebesgue-integral-and-the-convergence-theorems -> measurable-functions-and-simple-approximation-examples`;
14. `measurable-functions-and-simple-approximation -> lebesgue-stieltjes-measures-and-distribution-functions-examples`;
15. `lebesgue-stieltjes-measures-and-distribution-functions -> non-measurable-sets-and-the-cost-of-choice-examples`;
16. `non-measurable-sets-and-the-cost-of-choice -> lebesgue-measure-on-euclidean-space-examples`;
17. `lebesgue-measure-on-euclidean-space -> outer-measure-and-the-caratheodory-extension-theorem-examples`;
18. `outer-measure-and-the-caratheodory-extension-theorem -> measures-and-their-basic-properties-examples`;
19. `measures-and-their-basic-properties -> sigma-algebras-and-borel-sets-examples`;
20. `sigma-algebras-and-borel-sets -> stone-weierstrass-general-examples`.

**Evidence and repair:** each B target is an examples companion, whereas the
dependency contract requires a proof-supplying A page. The same route from the
batch-11 root reaches all 20, so they are transitive dependencies even though
none is a local manifest edge. The authorized shared plan writer must replace
every target above with its existing A companion (respectively, the same ID
without `-examples`), retain the useful mathematical prerequisites, and rerun
the complete page and item closure review. No new A/B pair is required; no
claim is dropped or weakened. Until that plan repair, the consumer is blocked.

**Changed record:** `batch-11.coverage.json` now records this exact fatal
closure blocker. The page manifest remains unchanged because it correctly
declares the direct batch-10 replacement supplier and cannot cure inherited
plan edges. The frontier input remains valid but does not waive this defect.

The graph-level closure trace is acyclic and has no forward edge from this
pair. The semantic assurance recorded here is deliberately limited to the
consumer's direct proof spine and the exact batch-10 replacement interface;
the inherited A-to-B chain and the existing historical full-closure limitation
remain blockers to any claim of whole-closure certification.

### Checks run

- `node tools/coverage-checklist.mjs research/phase-2-wave-1-batch-11.coverage.json` — before the closure-blocker metadata update: 1 page, 35 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-*.pages.json` — 434 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-wave-1-batch-*.pages.json` — 434 scoped items, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-11.coverage.json --stamp` — 2/2 active sources fetch-verified, 0 newly stamped; 2/2 resolved, 0 documented drops.
- `node tools/source-backing.mjs --coverage research/phase-2-wave-1-batch-11.coverage.json --liveness research/phase-2-wave-1-url-liveness.json --require-verified` — all 18 authored results backed by an openable source or documented alternative argument.
- `node tools/extcheck.mjs` — exit 0; 15,416 items, 161 recorded-not-proved results, and 63 existing warnings.
- `node tools/depcheck.mjs --quiet` — exit 0: no cycles, all references resolve, and no draft item is on a published page; it reported 474 pre-existing whole-library warnings.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1 --require-reviewed` — refreshed and deduplicated; every batch input and every declared same-frontier edge is reviewed.
- `node tools/validate-plan.mjs research/plan-spec.json` — failed with four existing undeclared-prerequisite errors on `relative-homology-excision-and-mayer-vietoris` (two) and `homology-axioms-degree-and-classical-applications` (two). Neither page is in this batch-11 page closure; they are outside this batch's repair authority.

## Scaffold-fix round

### `phase-2-wave-1-scaffold-closure:measurable-densities-and-radon-volume-on-manifolds:missing[0]`

**Disposition:** resolved by current shared-plan state. The finding was correct
for the reviewed snapshot, but its requested central repair is now present.
Every one of the 20 measure-theory `requires` edges listed in
`closure-audit:batch-11:inherited-a-to-b-supplier-chain` above now targets the
same proof-bearing A companion (the former target with `-examples` removed),
and none retains its examples-only B target.

**Exact dependency evidence:** all 20 current targets have `kind: A`, are the
declared `companion` of the displaced B page, and have strictly smaller plan
order than their consumer. Each displaced B page itself requires that A page.
Thus the cutover preserves the mathematical prerequisite while placing its
proof-bearing page, rather than a leaf illustration page, in the closure. A
fresh traversal from
`measurable-densities-and-radon-volume-on-manifolds` finds 168 pages and 432
`requires` edges, with zero missing pages, cycles, forward edges, or B-page
suppliers.

Starting from all 11 A-page manifest items and resolving `deps` through every
run manifest and the published item files gives 1,133 items and 6,799 directed
dependency edges. That current declared item closure has zero missing items,
cycles, suppliers outside the 168-page closure, B-page homes, or
recorded-not-proved suppliers. The plan-only A-for-B cutover changes no item
statement, hypothesis, convention, direction, axiom strength, or dependency.
The exact load-bearing batch-11-to-batch-10 Borel substitution interface was
already checked above: it assumes only `AC_omega`, applies to nonnegative Borel
functions under a C1 diffeomorphism between open Euclidean sets, and returns
the required equality in `[0,infinity]`; the boundary-face and dimension-zero
cases have their separate declared local suppliers.

**Changes:** changed this batch coverage from the inherited-page-closure
blocker to a resolved status, emptied its blocker list, and recorded the fresh
page/item traversal in `certification_limits`. The batch manifest and
consumer-owned frontier dependency input need no edit: their direct page and
item dependencies were already exact. No definition, lemma, theorem, source
disposition, or prerequisite A/B pair was added, removed, or weakened.

**Remaining blocker:** none for this finding. The unchanged published
measurable-C1 proof defect remains protected Phase-3 debt; this scaffold uses
the earlier local Radon-uniqueness replacement and does not claim the published
proof was repaired.

### Checks run in this round

- Read-only current-plan traversal plus the 20-edge cutover assertion — 168
  pages, 432 `requires` edges, 0 missing pages, 0 cycles, 0 forward edges, and
  0 B-page suppliers; every replacement is the earlier A companion of the
  displaced B page.
- Read-only `deps` traversal from the 11 A-page manifest items through all run
  manifests and published items — 1,133 items, 6,799 edges, 0 missing items,
  0 cycles, 0 suppliers outside the page closure, 0 B-page homes, and 0
  recorded-not-proved suppliers.
- `node tools/coverage-checklist.mjs research/phase-2-wave-1-batch-11.coverage.json --require-destination`
  — 1 page, 35 harvested results, 0 errors, 0 warnings.
- `node tools/manifest-deps.mjs research/phase-2-wave-1-batch-*.pages.json`
  — 434 items, 0 normalized, 0 errors.
- `node tools/content-policy.mjs --manifest-only research/phase-2-wave-1-batch-*.pages.json`
  — 434 scoped items, 0 errors, 0 warnings.
- `node tools/validate-plan.mjs research/plan-spec.json` — exit 0; the plan
  reports acyclic page order and no item-level cycles, forward references,
  B-page dependencies, or unresolved IDs among the 892 pages with item lists.
- `node tools/extcheck.mjs` — exit 0; 15,416 items, 161 recorded-not-proved
  results, and 63 already-marked consequences; every recorded statement and
  consequence satisfies the external-reference contract.
- `node tools/source-fetch-check.mjs --coverage research/phase-2-wave-1-batch-11.coverage.json --stamp`
  — 2/2 active sources fetch-verified, 0 newly stamped; 2/2 resolved, 0
  documented drops.
- `node tools/source-backing.mjs --coverage research/phase-2-wave-1-batch-11.coverage.json --liveness research/phase-2-wave-1-url-liveness.json --require-verified`
  — all 18 authored results remain backed by an openable source or documented
  alternative argument.


## Final adjudication — scaffold-final-c-3918fb984ba96271

Accepted on the current scaffold. The batch-10 Borel substitution supplier
was rechecked after its local Darboux repair. Its open-domain, C1-diffeomorphism,
nonnegative-Borel, extended-integral and AC_omega hypotheses exactly match the
chart-interior use. Null faces and dimension zero are handled separately.
Both consumer-owned frontier rows remain verified with current evidence.
The published compact-support integral-comparison debt is recorded in batch-10
notes for canonical reconciliation; it is no longer consumed by this pair.
Current structural closure has 168 pages, with no missing or illegal supplier.
The final report supersedes earlier snapshot-specific blockers and check counts:
`research/phase-2-wave-1-alpha-c-recheck.md`.

## Step-5 authoring

Current authoring begins from the accepted 18-item manifest, not the earlier historical blocker snapshots. DG-17M is now at lines 4479–4579 (assigned line numbers drifted). The current plan controls: retain the added Darboux lemma and batch-10 Borel substitution dependency. No scope is dropped. Source passages reread online: Lee pp.428–433, Propositions 16.35–16.45 and intervening definitions/proofs; Folland pp.50–52, Theorems 2.14–2.15 and Exercise 14, pp.74–76 Theorem 2.47 and full proof, p.217 Theorem 7.8 and full proof, pp.361–363 §11.4. Local suppliers are read by their current statement/definition sections. The batch-10 substitution item is initially absent on disk; its manifest interface is read but is not proof evidence. No stamp is requested or applied.

### def-borel-measurable-nonnegative-density-on-a-manifold

Pointwise extended cone, including zero dimension and boundary. Definition fixed. Dependencies: def-density-bundle-and-smooth-density, def-borel-sigma-algebra, def-extended-real-valued-measurable-function, def-countable-choice, def-topological-manifold-with-boundary, def-smooth-manifold, def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary. Source locators: Folland, Real Analysis, second edition, §11.4 pp.361–363; Theorems 2.14–2.15 pp.50–51. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.

### lem-measurable-density-chart-integrals-agree-on-overlaps

Two supplied charts and Borel E; substitution only on their interiors. Local argument written, with 4 individually mapped steps. Dependencies: def-borel-measurable-nonnegative-density-on-a-manifold, lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness, thm-borel-sets-are-lebesgue-measurable, thm-borel-sigma-algebra-of-a-subspace-is-the-trace, thm-smooth-invariance-of-manifold-boundary, prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null, cor-integral-over-a-null-set-vanishes. Source locators: Gerald B. Folland, Real Analysis, 2nd ed.; John M. Lee, Introduction to Smooth Manifolds, 2nd ed.. Open supplier: lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness is absent; exact citation pending. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.

### def-countable-chart-gluing-of-a-nonnegative-density-measure

Countable chart-partition set function, with annular local-finiteness construction. Definition fixed. Dependencies: def-borel-measurable-nonnegative-density-on-a-manifold, cor-smooth-partitions-subordinate-to-a-countable-coordinate-cover, thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary, def-nonnegative-lebesgue-integral. Source locators: Lee density gluing construction pp.431–432. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.

### thm-chart-gluing-defines-a-countably-additive-borel-density-measure

Fixed gluing data and arbitrary disjoint Borel sequence. Local argument written, with 3 individually mapped steps. Dependencies: def-countable-chart-gluing-of-a-nonnegative-density-measure, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, cor-beppo-levi-theorem. Source locators: Folland, Real Analysis, second edition, §11.4 pp.361–363; Theorems 2.14–2.15 pp.50–51. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.

### thm-density-measure-is-independent-of-the-chart-gluing

Common nonnegative refinement and pointwise extended-real arithmetic. Local argument written, with 4 individually mapped steps. Dependencies: thm-chart-gluing-defines-a-countably-additive-borel-density-measure, lem-measurable-density-chart-integrals-agree-on-overlaps, cor-beppo-levi-theorem, def-borel-measurable-nonnegative-density-on-a-manifold. Source locators: Folland, Real Analysis, second edition, §11.4 pp.361–363; Theorems 2.14–2.15 pp.50–51. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.
 Canonical numbering: 1.1, 2.1, 2.2, 3.1; contract references and boundary evidence updated.

### thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure

Positive finite smooth coefficients; local boundedness before regularity. Local argument written, with 4 individually mapped steps. Dependencies: thm-density-measure-is-independent-of-the-chart-gluing, cor-second-countable-lch-locally-finite-borel-measures-are-regular, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, def-radon-measure-on-an-lch-space, thm-completion-of-a-measure-space, prop-topological-manifolds-are-locally-compact-and-locally-path-connected, def-completion-of-a-measure-space. Source locators: Folland Theorem 7.8 and complete proof p.217; §11.4 pp.361–363. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.

### lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals

Bounded Borel Riemann integrand on a nondegenerate n-box. Local argument written, with 5 individually mapped steps. Dependencies: thm-multidimensional-darboux-equals-riemann, def-multidimensional-darboux-sums, thm-lebesgue-measure-of-a-box-of-every-kind, prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null, prop-order-and-scalar-rules-for-the-nonnegative-integral, thm-linearity-of-the-lebesgue-integral-on-l-one, def-integral-of-a-nonnegative-simple-function, prop-the-nonnegative-integral-agrees-with-the-simple-integral. Source locators: Folland §2.2 simple integral, Proposition 2.13 pp.49–50; finite-dimensional Darboux adaptation of the local published one-dimensional comparison proof. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.

### thm-density-measure-integration-agrees-with-smooth-density-integration

Borel-first integration, signed absolute convergence, smooth compact support and completion. Local argument written, with 7 individually mapped steps. Dependencies: thm-density-measure-is-independent-of-the-chart-gluing, thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure, lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals, thm-increasing-simple-approximation-of-a-nonnegative-measurable-function, thm-monotone-convergence-for-the-integral, thm-density-integration-is-defined-without-an-orientation, lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions, def-integrable-real-and-complex-functions-and-their-integrals, thm-the-lebesgue-integral-respects-almost-everywhere-equality, def-integral-of-a-compactly-supported-smooth-density, def-completion-of-a-measure-space, thm-completion-of-a-measure-space, cor-integral-over-a-null-set-vanishes, def-countable-choice, cor-additivity-of-the-nonnegative-lebesgue-integral, prop-order-and-scalar-rules-for-the-nonnegative-integral. Source locators: Folland, Real Analysis, second edition, §11.4 pp.361–363; Theorems 2.14–2.15 pp.50–51. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.
 Canonical order: 1.1 indicators/simple, 2.1 nonnegative formula, 3.1 signed/complex, 3.2 completion representatives, 4.1 smooth comparison, 5.1 zero dimension, 6.1 representative independence. Finite-sum additivity/homogeneity are explicitly sourced. Smooth absolute integrability is established by the nonnegative formula before invoking the signed formula.

### cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls

Nonempty open set; topology-compatible positive-radius ball. Local argument written, with 3 individually mapped steps. Dependencies: thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure, thm-lebesgue-measure-of-a-box-of-every-kind, def-metric-ball, thm-density-measure-is-independent-of-the-chart-gluing. Source locators: Folland, Real Analysis, second edition, §11.4 pp.361–363; Theorems 2.14–2.15 pp.50–51. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.

### fs-local-finiteness-means-finite-total-density-measure

Witness R with unit density; explicit arbitrarily large finite-interval masses. Local argument written, with 2 individually mapped steps. Dependencies: thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure, thm-density-measure-is-independent-of-the-chart-gluing, thm-lebesgue-measure-of-a-box-of-every-kind. Source locators: Folland, Real Analysis, second edition, §11.4 pp.361–363; Theorems 2.14–2.15 pp.50–51. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.

### fs-orientation-is-required-for-a-density-measure

Explicit nonorientable Möbius witness. Final repair replaces the unsupported Refutation citation by a complete local quotient construction and orientation-sign contradiction, using def-oriented-smooth-manifold-and-oriented-chart. The Statement now explicitly identifies this counterexample so its A-page result can supply the B example. Local argument written, with 2 individually mapped steps. Dependencies: thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure, prop-every-smooth-manifold-admits-a-positive-smooth-density, fs-a-smooth-density-is-the-same-thing-as-a-top-form-on-a-nonorientable-manifold, def-oriented-smooth-manifold-and-oriented-chart. Source locators: Lee Proposition 16.37 and following explanation p.430. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.

### ex-chart-gluing-recovers-euclidean-lebesgue-measure

Euclidean identity-chart instance and box calculation. Local argument written, with 2 individually mapped steps. Dependencies: thm-density-measure-is-independent-of-the-chart-gluing, cor-lebesgue-sigma-algebra-is-the-completion-of-borel-lebesgue-measure, thm-lebesgue-measure-of-a-box-of-every-kind. Source locators: Folland, Real Analysis, second edition, §11.4 pp.361–363; Theorems 2.14–2.15 pp.50–51. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.

### ex-positive-weighted-volume-on-an-open-interval

Weighted interval; logarithmic finite pieces and explicit divergent exhaustion. Local argument written, with 3 individually mapped steps. Dependencies: thm-density-measure-integration-agrees-with-smooth-density-integration, thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure, thm-logarithm-derivative-and-integral, thm-monotone-convergence-for-the-integral, lem-bounded-borel-riemann-integrands-on-boxes-have-equal-lebesgue-integrals, thm-density-measure-is-independent-of-the-chart-gluing, cor-integral-over-a-null-set-vanishes, prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null, thm-natural-logarithm-laws. Source locators: Folland, Real Analysis, second edition, §11.4 pp.361–363; Theorems 2.14–2.15 pp.50–51. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.

### ex-density-measure-in-two-overlapping-circle-charts

Circle overlap translations and a disjoint semicircle calculation. Local argument written, with 3 individually mapped steps. Dependencies: thm-density-measure-is-independent-of-the-chart-gluing, thm-density-measure-integration-agrees-with-smooth-density-integration, thm-lebesgue-measure-of-a-box-of-every-kind. Source locators: Folland, Real Analysis, second edition, §11.4 pp.361–363; Theorems 2.14–2.15 pp.50–51. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.

### ex-density-measure-on-a-nonorientable-manifold

Flat open Möbius strip; normalized density and seam-area computation. Local argument written, with 3 individually mapped steps. Dependencies: thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure, thm-density-measure-is-independent-of-the-chart-gluing, fs-a-smooth-density-is-the-same-thing-as-a-top-form-on-a-nonorientable-manifold, thm-lebesgue-measure-of-a-box-of-every-kind, fs-orientation-is-required-for-a-density-measure. Source locators: Lee Proposition 16.45 and proof pp.432–433, specialized to the explicit flat strip. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.
 Final source: the explicit witness Statement of fs-orientation-is-required-for-a-density-measure; no contract cites a Refutation section.

### ex-zero-dimensional-density-measure-is-weighted-counting

Zero-dimensional weighted counting with two explicit total-mass series. Local argument written, with 4 individually mapped steps. Dependencies: def-borel-measurable-nonnegative-density-on-a-manifold, thm-density-measure-is-independent-of-the-chart-gluing, thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure. Source locators: Folland, Real Analysis, second edition, §11.4 pp.361–363; Theorems 2.14–2.15 pp.50–51. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.

### cex-a-smooth-density-can-have-infinite-total-mass

Independent B-page witness: compact-finite Euclidean density with total mass infinity. Local argument written, with 2 individually mapped steps. Dependencies: thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure, thm-density-measure-is-independent-of-the-chart-gluing, thm-lebesgue-measure-of-a-box-of-every-kind. Source locators: Folland, Real Analysis, second edition, §11.4 pp.361–363; Theorems 2.14–2.15 pp.50–51. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.

### ex-borel-ball-volume-before-any-comparison-theorem

Two explicit metric-ball volumes, showing the role of relative compactness. Local argument written, with 2 individually mapped steps. Dependencies: cor-positive-density-measures-assign-positive-volume-to-nonempty-open-sets-and-metric-balls, ex-positive-weighted-volume-on-an-open-interval. Source locators: Folland, Real Analysis, second edition, §11.4 pp.361–363; Theorems 2.14–2.15 pp.50–51. No additional local mathematical gap identified. Checks: final explicit-scope results below. Next: resolve the batch-10 supplier and rerun its exact citation check; no local scope reduction is proposed.

### Final Step-5 disposition

**Authored inventory:** all 18 assigned item IDs listed individually above have their full local definition, proof, verification or refutation written. All 11 A items and all 7 B items remain in the manifest. The two completed draft page compositions are:

- `measurable-densities-and-radon-volume-on-manifolds` at `library/differential-geometry/measurable-densities-and-radon-volume-on-manifolds.md`;
- `measurable-densities-and-radon-volume-on-manifolds-examples` at `library/differential-geometry/measurable-densities-and-radon-volume-on-manifolds-examples.md`.

**Completion limit:** this is completed local authoring, not a claim of closed mathematical prerequisites for the batch. The overlap lemma's step 2.1 remains conditional on the absent batch-10 item, and results using overlap independence inherit that obligation. Definitions and the Darboux calculation do not supply the missing substitution proof. The contract deliberately leaves its absent source excerpt marked PENDING; no invented quotation or supplier stamp is present.

**Checks actually run, final results:**

- `node tools/tsx-run.mjs tools/precheck.mts` with all 18 explicit `items/ID.md` manifest paths: final exit 0, 16 proof-bearing items checked, 0 failures; the two definitions have no proof block. Initially two canonical phase repairs were required. Adopted the normative checker's output and remapped all contract steps, uses and boundary evidence before rerunning.
- `node tools/validate-plan.mjs`: exit 2, usage error because this executable requires a plan argument. Corrected invocation `node tools/validate-plan.mjs research/plan-spec.json`: final exit 0; acyclic order, no item-level cycles, forward references, B-page dependencies or unresolved IDs among 930 pages with item lists. It still reports 683 page-only plans and redundant-prerequisite advisories. A plan-resolved ID does not establish the corresponding file or proof exists.
- `node tools/content-policy.mjs research/phase-2-wave-1-batch-11.pages.json`: final exit 0, 18 scoped items, 0 errors, 0 warnings.
- `node tools/proof-contract.mjs research/phase-2-wave-1-batch-11.proof-contracts.json --strict`: final exit 1, 18/18 entries checked, 1 error, 0 warnings. Exact error: `citation-source-missing` in `lem-measurable-density-chart-integrals-agree-on-overlaps`, fact F2, supplier `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`. The two initial unsupported Refutation-section errors are locally repaired, not waived.
- Additional `node tools/rendercheck.mjs` with all 18 explicit item paths and both page paths: exit 0, all 20 files parse under the renderer's YAML and real KaTeX with no math-delimiter errors.
- `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-wave-1`: exit 0 after consumer dependency/input edits. Both existing cross-batch rows are now open with the exact absent-file obligation and the preserved Step-3 review history. Added explicit local suppliers are in earlier existing page closures or on this A page; they introduce no new cross-batch edge.

**Provenance decisions:** retain `statement: ai-altered` for the assigned literature-based density interfaces and explicit specializations; proofs are local adaptations (`proof: ai-altered`), with definitions `not-applicable`. The extended Borel cone, Darboux bridge, completion representative argument, logarithmic interval and elementary counting calculations are explicitly derived locally rather than attributed verbatim to Lee or Folland. The flat metric normalization is proved by the determinant identity, without consuming a future general Riemannian-density result. No `ai-generated` statement is made a dependency target and no generation field is introduced. No judge, owner audit or delegated verification stamp is written. All files remain draft. Source locators and the current local source excerpts/uses are in the contracts and the individual records above; source treatments were not dropped or replaced.

**Unresolved obligation for Alpha c / batch 10:** author the already promised `items/lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness.md`. It must prove the manifest's precise AC_omega, open Euclidean domains, C1 diffeomorphism, nonnegative Borel integrand and extended-integral equality, including its local continuous compact-support comparison before Radon uniqueness. Then reread the complete actual supplier statement and proof, replace the PENDING excerpt in batch 11's overlap citation F2 with its exact Statement excerpt, recheck the hypotheses against overlap steps 1.1–3.1, rerun strict contracts and update the two consumer-owned ledger rows. No new prerequisite, scope narrowing, item removal or plan restructuring is proposed. The published measurable-C1 proof remains untouched and is not used as the replacement.

The earlier Step-3 coverage/review files are preserved as independent scaffold records. Their historical closure language does not override this current missing-file observation.

## Author-check repair checkpoint — c4a6eda2aaf7 (2026-09-08)

Reviewed every finding in `research/phase-2-wave-1-author-check-11.json`.
The sole failing finding is reproducible: `citation-source-missing` for F2 of
`lem-measurable-density-chart-integrals-agree-on-overlaps`. Direct filesystem
inspection confirms that
`items/lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness.md`
is absent. This is a genuine missing prerequisite, not a detector defect.
The consumer contract honestly retains its PENDING excerpt; neither the
accepted scaffold nor a literature quotation supplies an authored local item.

Exact use remains overlap proof step 2.1: for n >= 1 the open chart interiors
W and Z from step 1.1 carry the C1 diffeomorphism T = y composed with x inverse;
h is the Borel coordinate-image indicator times the nonnegative Borel target
density, with zero times infinity defined as zero. Required under AC_omega:
integral_Z h equals integral_W (h composed with T) times abs(det DT), allowing
infinite integrals. Step 3.1 separately removes null boundary faces; step 4.1
handles empty sets and dimension-zero singleton weights, including zero and
infinite weights. No iff claim or new convention is introduced by this repair.
Source locators already assigned to this interface are Folland, Theorem 2.47
and proof, printed pp.74–76, and Lee, Chapter 16, printed pp.428–432. No new
source excerpt was recovered or substituted for the missing supplier evidence.

Focused reruns: explicit manifest scope precheck passed (16 proof-bearing
items); rendercheck passed (18 items and 2 pages); content-policy passed
(18 items, zero errors/warnings); strict proof-contract failed with exactly
one error, the missing F2 source above (18/18 contracts checked, zero warnings).
These are structural checks, not mathematical certification.

Disposition: blocked on Alpha c / batch 10 authoring its already assigned
supplier, including the promised local continuous compact-support Darboux
comparison before Radon uniqueness. No scope change is proposed. Next action:
read that complete authored statement and proof when available, check its
hypotheses against steps 1.1–3.1, insert the actual Statement excerpt in F2,
and rerun strict contracts. Only then reconsider the two consumer-owned
cross-batch rows. Both rows already remain open with this exact obligation;
no dependency or input changed, so no ledger refresh is needed for this
notes-only checkpoint. All 18 items, both pages, IDs, manifest scope, contract,
independent reviews, and workflow state are preserved. Repair completion and
a passing Step-6 hash receipt are not asserted.

## Author-check repair checkpoint — a3ff07f1aa83 (2026-09-08)

The sole failure in the current author-check report was
`citation-quote-mismatch` for F2 of
`lem-measurable-density-chart-integrals-agree-on-overlaps`. The detector is
correct: the contract retained its historical PENDING placeholder after the
batch-10 supplier appeared. Replaced only that citation's quote with the exact
complete Statement of
`lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`.
Its use remains step 2.1; all four derivations and boundary mappings remain
accurate. This checkpoint supersedes the earlier absent-supplier disposition.

Read the current supplier's entire Statement and Proof, steps 1.1–1.6, and
its supporting compact-support Riemann substitution corollary, second-countable
LCH regularity corollary and RMK uniqueness theorem. The supplier first derives
the continuous compact-support Lebesgue/Riemann comparison using Darboux bounds
and null cell faces. The zero extensions have compact support inside their
open domains; the pulled-back support is compact because T is a homeomorphism.
Thus the compact-support Riemann corollary applies in step 1.2. Its two Borel
measures are finite on compact sets, hence regular on the open Euclidean LCH
space; their C_c integrals agree and RMK uniqueness identifies them. Simple
approximation yields the extended nonnegative Borel formula, without subtracting
infinite integrals. Exact local locators: supplier Statement and steps 1.1–1.6;
`cor-change-of-variables-for-compactly-supported-functions`, Statement;
`cor-second-countable-lch-locally-finite-borel-measures-are-regular`, Statement;
`thm-rmk-uniqueness-among-radon-measures`, Statement and steps 1.1–2.1.
No new external quotation or source treatment was introduced.

Exact consumer interface: step 1.1 supplies m=n>=1, open W and Z, and the
smooth transition T=y composed with x inverse. Step 2.1 supplies the Borel
indicator times r_y, with values in [0,infinity] and 0 times infinity=0.
The pointwise density law identifies its transformed integrand with the
source-coordinate indicator times r_x. AC_omega is already assumed. Step 3.1
adds back null coordinate boundary faces even for infinite coefficients;
step 4.1 handles the empty set and dimension-zero singleton with determinant
and singleton mass one, including zero and infinite weights. Dimension one
uses the same substitution and null-face steps. There is no iff assertion,
nonempty selection, or completed-measurable strengthening in this lemma.

Updated the two existing consumer-owned cross-batch rows to verified with this
current mathematical evidence, and ran the prescribed frontier-ledger refresh
successfully. No dependency IDs changed. The 18-item inventory, two page paths,
manifest scope, mathematical bodies, and independent reviews are preserved.
No scope change or new prerequisite is needed; no remaining gap was identified
for this finding. No judge or audit stamps were added.

Focused checks after the repair (all exit 0): strict proof-contract — 18/18
items, zero errors/warnings; content-policy — 18 scoped items, zero
errors/warnings; precheck with explicit manifest item paths — 16 proof-bearing
items, zero failures; rendercheck with those 18 item paths and both page paths
— all 20 files parse. These checks establish structural conformance, not an
independent mathematical judgment. Next action belongs to the build driver:
rerun its author gate and produce the mechanical Step-6 baseline hash receipt.
The author has not written workflow state or the driver-owned hash artifact.
