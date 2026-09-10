# Batch 4 construction evidence — phase-2-next-20

Owned pair: discrete-time-martingales / discrete-time-martingales-examples. Construction only; readiness is not independent approval. Step 3 must review the mathematics.

## Scope and plan

Read CLAUDE.md, SCHEMA.md, WORKFLOW.md, beta scaffold instructions, complete PT-12 design at research/plan-probability-track.md:1520–1577, current plan-spec, planning/alpha drift evidence, active-run status and recent git history. The plan and design agree on placement, 21 A + 9 B inventory, and all six prerequisites. No design/plan conflict found for this pair. No page split, new pair, selected-pair change, or new cross-batch supplier is required. Requires remain exactly as dispatched. Planned PT-13 convergence material is a destination only, never a proof supplier.

## Proof audit

Examined actual statements and proofs of the published interfaces listed below, including the conditional-expectation/Radon–Nikodym construction and its signed-measure route, integration/limit rules, independence grouping and product integration, measurable arithmetic, and concrete measure construction. Publication and requires closure were checked separately and were not used as evidence of mathematical adequacy. Readiness records name direct inputs and the examined transitive interfaces; this list does not assert that all unrelated claims on those pages were reviewed.

All time indices are N_0, sub means conditional future >= present, and filtration completeness is not assumed. Conditional expectations remain a.e. classes. AC is explicitly declared at CE-dependent items: it supplies the published RN existence proof's selections and any countable choice of versions. Basic filtration/adaptedness/natural filtration/predictability/integrable-transform domain definitions do not add an AC assumption. Lebesgue constructions identify inherited countable choice. No Recorded result is consumed, and no new Foundations edge is introduced.

Load-bearing checks: published thm-taking-out-what-is-known includes the UNBOUNDED integrable-product clause and proves integrability of the pulled-out result; L2 orthogonality, signed independent products, and general predictable gains therefore have adequate support. Cauchy–Schwarz verifies cross-product integrability first. Holder supplies the optional conjugate-exponent sufficient condition. Conditional Jensen retains the finite convex and transformed-L1 hypotheses. Doob sums condition increment k on F_{k-1}, A_0=0, M_0=X_0; uniqueness is a countable measurable null union. Bracket squared increments are integrable before conditioning; the random-initial-value centered assertion is proved using M-M_0, not an unsupported product claim. Optional and predictable brackets are distinguished by a concrete three-point witness.

The Polya example constructs every draw on explicitly recursively split half-open Lebesgue intervals, avoiding any unproved infinite-product existence. Dyadic intervals follow the library's (a,b] convention. Likelihood ratios use a finite common terminal horizon with Q << P; extension past that horizon is constant. The unbounded-transform witness has point masses 2^{-j-1}, bounded sign martingale, predictable gain 2^j, and absolute integral infinity by finite truncations and MCT; no signed conditional expectation of that gain is invoked. All three generated counterexamples are leaf items.

No defective actual published prerequisite was identified in these examined arguments, so no published-defect repair entry is requested. This does not certify unrelated published consumer debt. Exact examined IDs:

- `cor-cauchy-schwarz-for-random-variables`
- `cor-cauchy-schwarz-inequality-for-l-two`
- `cor-holder-inequality-for-random-variables`
- `cor-integral-over-a-null-set-vanishes`
- `cor-reverse-fatou-lemma-under-an-integrable-majorant`
- `def-axiom-of-choice`
- `def-conditional-expectation-as-an-ae-class`
- `def-expectation-of-a-nonnegative-or-integrable-random-variable`
- `def-half-open-box`
- `def-independent-random-elements`
- `def-probability-measure`
- `def-random-element-and-real-random-variable`
- `def-sigma-algebra`
- `lem-absolute-real-powers-are-convex`
- `lem-conditional-expectation-is-unique-almost-surely`
- `lem-conditioning-a-known-variable-and-an-independent-variable`
- `lem-convex-functions-have-countable-supporting-line-representations`
- `lem-measurable-functions-preserve-independence`
- `lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass`
- `prop-dirac-measure-is-a-probability-measure`
- `prop-jordan-parts-and-total-variation-formulas-for-signed-measures`
- `prop-order-and-scalar-rules-for-the-nonnegative-integral`
- `prop-restriction-is-a-measure`
- `thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero`
- `thm-arithmetic-and-lattice-operations-preserve-measurability`
- `thm-basic-algebra-and-order-properties-of-conditional-expectation`
- `thm-composition-with-borel-functions-preserves-measurability`
- `thm-conditional-expectation-exists-by-radon-nikodym`
- `thm-conditional-jensen-inequality`
- `thm-dominated-convergence`
- `thm-factorization-of-expectations-for-independent-variables`
- `thm-finite-and-countable-subadditivity-of-measures`
- `thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces`
- `thm-generated-sigma-algebra-calculus`
- `thm-generated-sigma-algebra-exists-and-is-minimal`
- `thm-grouping-independent-sigma-algebras`
- `thm-hahn-decomposition-for-signed-measures`
- `thm-holder-inequality-for-integrals`
- `thm-increasing-simple-approximation-of-a-nonnegative-measurable-function`
- `thm-independent-random-elements-have-product-joint-law`
- `thm-integral-triangle-inequality`
- `thm-jordan-decomposition-for-signed-measures`
- `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures`
- `thm-lebesgue-measure-is-a-complete-measure`
- `thm-lebesgue-measure-of-a-box-of-every-kind`
- `thm-linearity-of-the-lebesgue-integral-on-l-one`
- `thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums`
- `thm-monotone-convergence-for-the-integral`
- `thm-nonnegative-integral-zero-iff-zero-almost-everywhere`
- `thm-nonnegative-weighted-sums-of-measures`
- `thm-pi-system-criterion-for-independent-sigma-algebras`
- `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality`
- `thm-sigma-algebra-generated-by-a-countable-partition`
- `thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique`
- `thm-taking-out-what-is-known`
- `thm-the-lebesgue-integral-respects-almost-everywhere-equality`
- `thm-tonelli-theorem-for-sigma-finite-product-spaces`
- `thm-tower-property-of-conditional-expectation`

## Sources and recovery

Two independent authoritative full treatments were browser-inspected at the exact locators recorded in coverage: Durrett's complete fifth-edition Probability: Theory and Examples PDF (490 pages) and van der Vaart's complete Stochastic Integration lecture notes (188 pages). Relevant full arguments, not search snippets, supplied the comparison. Source index slips are normalized in the manifest: gain increment n+1 conditions on F_n; Doob summand k conditions on F_{k-1}. Orthogonality is Durrett 4.4.7, with conditional second moments in 4.4.8.

Raw local verification is NOT claimed: both initial curl requests failed DNS resolution, and source-fetch-check --stamp exhausted its five further attempts for each, all with EAI_AGAIN. Coverage preserves all six genuine attempts per URL and browser reading history. Searches recovered alternate author-host locations, but the exhausted allowance was not restarted. Both local-fetch backings use the user-authorized confident alternative-proof disposition, source_resolution.status=dropped, with decided_by=step-1-scaffolder and confidence=certain. Each included/inline result has its full local argument and explicit dependencies in alternatives. No outage is described as permanent unavailability. There are zero raw fetch stamps and two documented drops. Original URLs, locators and dispositions are retained; no mathematical coverage is waived. Uniform-integrability/convergence/maximal-inequality continuations are deferred to martingale-inequalities-and-convergence; beta urn limits, sampled Poisson construction and finance interpretation have explicit out-of-scope reasons.

## Construction outcomes and checks

Items are added once in prerequisite order, with the item-specific readiness outcome recorded before adding the next item. No prior ready record is overwritten. Each readiness reason contains its complete proof strategy; dependencies include the examined IDs above. Cross-batch consumer input is an empty array because all external suppliers are published and none belongs to another batch of this run. Required check results follow below.

### Check snapshot 2026-09-10T14:21:08.042518+00:00

- Coverage checklist: exit 0; 1 A page, 43 harvested results, 0 errors/warnings.
- Source check: exit 0; 0/2 fetch-verified, 2/2 resolved through documented drops. This is not full-text stamping.
- Whole-run manifest-deps: exit 0; 465 items, 0 normalized, 0 errors at the check snapshot.
- Whole-run manifest-only content-policy: exit 1; 465 items, 22 errors, 0 warnings, all outside the owned pair. Exact diagnostics below for owner reconciliation.
- Owned manifest-only policy: exit 0; 30 items, 0 errors/warnings.
- Canonical validate-plan: exit 0; acyclic/consistent. Also validated a temporary full-plan overlay containing the final 30 owned items: exit 0, 980 pages with inventories, no item cycles/forward references/B dependencies/unresolved IDs. Shared plan was not edited. Existing redundant-prerequisite warnings remain.
- External-reference check: exit 0; 55 existing unproved-on-published warnings, no errors and no Foundations-to-deferred-set-theory violation. Exact warning snapshot below, outside assigned scope; these are tool diagnostics, not newly established published mathematical defects.
- Own readiness hash check: all 30 records current and closed. Each record was written immediately after constructing its item.
- Additional declared deps traversal: 775 nodes including 30 local items; no missing ID, cycle, Recorded-status or deferred-set-theory home finding. Initial traversal that treated justified_by as ordinary deps generated expected definition/well-definedness back-edge cycles; SCHEMA.md:46 requires those back links, so they are not mathematical circularity findings. Actual well-definedness arguments are checked as described above.
- Empty owned cross-batch input written; canonical refresh succeeded through the tool. No cross-batch changes requested.

The whole-run snapshot can change as concurrent owners construct their batches. Owner/operator reconciliation and the full engine gate remain outstanding; Step 3 supplies independent mathematical review. No engine transitions or verdicts were written.

### Whole-run policy diagnostics

```text
ERROR batch-dependency-missing [lem-finite-weyl-strong-exchange-and-deletion]: lem-finite-weyl-strong-exchange-and-deletion depends on def-weyl-group-of-a-root-system, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-finite-weyl-strong-exchange-and-deletion]: lem-finite-weyl-strong-exchange-and-deletion depends on def-positive-system-and-base-of-simple-roots, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-finite-weyl-strong-exchange-and-deletion]: lem-finite-weyl-strong-exchange-and-deletion depends on def-length-and-longest-element-of-a-finite-weyl-group, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-weyl-orbit-sum-in-a-group-algebra]: def-weyl-orbit-sum-in-a-group-algebra depends on def-weyl-group-of-a-root-system, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-weyl-orbit-sum-in-a-group-algebra]: def-weyl-orbit-sum-in-a-group-algebra depends on def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants]: lem-weyl-orbit-sums-form-a-basis-of-finite-weyl-invariants depends on thm-the-weyl-group-acts-simply-transitively-on-weyl-chambers, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums]: lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums depends on thm-highest-weight-classification-of-finite-dimensional-irreducible-representations, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums]: lem-highest-weight-characters-are-unitriangular-in-weyl-orbit-sums depends on thm-finite-dimensional-representations-of-sl-two, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-weyl-discriminant-and-reflecting-hyperplane-arrangement]: def-weyl-discriminant-and-reflecting-hyperplane-arrangement depends on def-weyl-group-of-a-root-system, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-weyl-discriminant-and-reflecting-hyperplane-arrangement]: def-weyl-discriminant-and-reflecting-hyperplane-arrangement depends on def-positive-system-and-base-of-simple-roots, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-kostant-harmonic-subspace-of-the-symmetric-algebra]: def-kostant-harmonic-subspace-of-the-symmetric-algebra depends on def-killing-form, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-local-chevalley-restriction-for-kostant-freeness]: lem-local-chevalley-restriction-for-kostant-freeness depends on thm-cartan-subalgebras-of-a-complex-semisimple-lie-algebra-are-conjugate, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-carleson-operator-and-measurable-linearisation]: def-carleson-operator-and-measurable-linearisation depends on def-fourier-transform-on-l-one-of-rn, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-carleson-operator-and-measurable-linearisation]: def-carleson-operator-and-measurable-linearisation depends on def-schwartz-space-and-its-seminorms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-carleson-tiles-wave-packets-and-tile-order]: def-carleson-tiles-wave-packets-and-tile-order depends on def-schwartz-space-and-its-seminorms, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [def-carleson-tiles-wave-packets-and-tile-order]: def-carleson-tiles-wave-packets-and-tile-order depends on thm-fourier-inversion-on-schwartz-space, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-wave-packet-model-dominates-the-linearised-carleson-operator]: lem-wave-packet-model-dominates-the-linearised-carleson-operator depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-carleson-size-selection]: lem-carleson-size-selection depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-carleson-single-tree-estimate]: lem-carleson-single-tree-estimate depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-carleson-signed-tree-weak-one-one-estimate]: lem-carleson-signed-tree-weak-one-one-estimate depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [thm-carleson-maximal-operator-is-strong-ltwo]: thm-carleson-maximal-operator-is-strong-ltwo depends on thm-plancherel, which is neither declared by this batch nor an item on disk
ERROR batch-dependency-missing [lem-carleson-real-line-to-torus-transfer]: lem-carleson-real-line-to-torus-transfer depends on thm-fourier-inversion-on-schwartz-space, which is neither declared by this batch nor an item on disk
content-policy: 465 scoped item(s), 22 error(s), 0 warning(s)
```

### External-reference warning snapshot

```text

55 warning(s):
  [unproved-on-published] items/ex-choosing-x-for-the-classical-erdos-hajnal-bound.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/ex-choosing-x-for-the-loglog-erdos-hajnal-bound.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-every-finitely-presented-group-has-solvable-word-problem.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-every-nonamenable-group-contains-a-rank-two-free-subgroup.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-every-subexponential-growth-group-has-polynomial-growth.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-gromovs-polynomial-growth-theorem-is-proved-on-this-page.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-h-two-classifies-extensions-with-arbitrary-nonabelian-kernel.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-schur-zassenhaus-conjugacy-needs-no-solvability-or-deeper-input.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-the-borel-hierarchy-closes-after-two-steps.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-the-diagram-lemmas-in-an-abelian-category-follow-from-the-module-case-by-the-embedding-theorem.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-the-library-proves-the-classification-of-finite-simple-groups.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-the-novikov-boone-theorem-proves-the-uniform-problem-only.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/fs-unsolvable-word-problem-means-no-word-can-be-decided.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-cauchy-kovalevskaya-proof-boundary.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-choice-strength-of-hahn-banach.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-general-complete-metric-baire-proof-would-overstate-the-choice-cost.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-hahn-banach-open-choice-questions.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-alpha-narrowness-is-preserved-under-substitution.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-basic-bull-free-graphs-are-two-narrow.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-bing-metrization.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-classical-erdos-hajnal-bound.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-loglog-erdos-hajnal-bound.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-nagata-smirnov-metrization.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-neighbourhood-or-antineighbourhood-of-a-vertex-in-a-basic-bull-free-graph-is-perfect.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-steiner-triple-systems-exist-exactly-when-v-congruent-one-or-three-mod-six.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-word-problem-for-finitely-generated-abelian-groups.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/cor-the-loglog-bound-eventually-dominates-the-classical-bound.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-growth-degree-of-the-discrete-heisenberg-group.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-p-three-free-graphs-have-much-larger-homogeneous-sets.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-word-problem-in-a-finite-cyclic-presentation.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-the-onan-scott-theorem-requires-the-classification-of-finite-simple-groups.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/rem-choice-costs-of-vitali-bernstein-and-free-ultrafilters.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/rem-duality-as-a-dual-space-statement.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-bull-free-graphs-are-two-narrow.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-smirnov-local-metrization.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-bull-free-graphs-have-the-erdos-hajnal-property-with-exponent-one-quarter.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-the-bull-graph-has-the-erdos-hajnal-property.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-the-six-vertex-prime-h-graphs-have-the-erdos-hajnal-property.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-the-five-cycle-is-not-one-narrow.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/fs-two-narrow-implies-one-narrow.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/ex-a-six-vertex-witness-graph-makes-the-bird-criterion-explicit.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/lem-the-e-graph-and-the-bird-graph-are-wonderful.md is PUBLISHED and rests (inherited) on material not proved in this library
  [unproved-on-published] items/cor-lp-fourier-series-converges-almost-everywhere-for-p-greater-than-one.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-compactness-conventions-and-choice-ledger.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-continuum-hypothesis.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-hausdorff-dimension-orients-the-weierstrass-graph.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-integral-conventions-and-scope.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-lone-fourier-series-can-diverge-almost-everywhere.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-proof-cost-of-the-carleson-hunt-theorem.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-separation-axiom-conventions.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-the-choice-cost-of-urysohns-lemma-and-of-tietzes-theorem.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/rem-the-lone-endpoint-is-excluded-from-carleson-hunt.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-baire-category-locally-compact-hausdorff.md is PUBLISHED and rests (direct) on material not proved in this library
  [unproved-on-published] items/thm-urysohn-lemma.md is PUBLISHED and rests (direct) on material not proved in this library

OK — every recorded-not-proved statement is a cited remark with no proof, and every consequence is marked.
```
