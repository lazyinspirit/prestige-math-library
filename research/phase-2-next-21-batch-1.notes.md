# Phase 2 next 21 — Step 1 batch 1 notes

## Owned scope and construction result

This batch owns only `the-ergodic-theorems-of-von-neumann-and-birkhoff` and its examples companion at orders 288.045/288.046. No published content, shared plan, verdict, or engine-state file was edited.

The A manifest contains 26 items: the time-average and invariant-subspace definitions, all theorem/lemma interfaces required by the design, and the seven prescribed false statements. The B manifest contains the eight prescribed examples and counterexamples. All 34 IDs were unused when selected. Every item has an explicit `deps` array, every local supplier occurs before its consumer, and no B-page item is a prerequisite. The exact mandated IDs `thm-birkhoff-ergodic-theorem`, `lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces`, `def-canonical-base-b-expansion-and-normality`, and `lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints` are preserved.

The final contracts retain the complete scope: sigma-finite nonergodic Birkhoff; the finite-measure invariant-sigma-algebra characterization; finite-measure `L^p` convergence only for `1<=p<infinity`; the finite-measure ergodic conclusion both almost everywhere and in `L1`; von Neumann in complex `L2`; unique ergodicity; the direct non-Fourier irrational-rotation route; Weyl by continuous sandwiching; simultaneous normality in every integer base; and the fair-coin frequency law. The maximal theorem uses the strict set `sup_n S_n f>0`, unnormalised sums, real `L1`, and the finite-maximum Garsia argument. The normal-number construction fixes the terminating/non-eventually-`(b-1)` convention before any cylinder consumer.

Generated provenance is used only for the computed rational-rotation and square-root-two examples and for the explicit periodic non-normal number. Those generated statements have no consumers.

## Design/current-plan comparison

The complete design at `research/plan-measure-theory-track.md` lines 4567–4653 was compared with both active plan entries. Page IDs, category, orders, companions, the seven ordered A-page `requires` entries, and the B-page companion edge agree. The current plan has empty item arrays, so it supplies no competing item inventory.

One literal conflict was found: the design heading capitalizes the historical name as “von Neumann,” while `research/plan-spec.json` and the dispatch title use “Von Neumann.” The current plan controls, so the manifest preserves the capitalized title. This typographic conflict does not alter item IDs or mathematics.

The alpha drift report gives this page `VERDICT: no-drift`. Its statement that the Hilbert route is already transitive was checked rather than accepted from page membership: the declared MT-22 prerequisite reaches `weak-mixing-and-the-chacon-transformation`, whose published `lem-closed-l-two-subspaces-have-orthogonal-projections` and `lem-hilbert-cesaro-averages-converge-to-the-fixed-subspace` were read. The latter covers non-surjective isometries, proves the fixed-space decomposition and telescoping estimate, and explicitly assumes AC. No direct functional-analysis page edge is needed.

During final reconciliation, construction mismatches were corrected in the owned manifest: Garsia's limit passage now uses monotone convergence on positive and negative parts; the finite-measure identification consistently uses the strict invariant sigma-algebra `I`; the exact finite-measure ergodic corollary now has the factor `1/mu(X)` and both a.e. and `L1` convergence; and that corollary now follows the required `L^p` lemma and declares it. The unique-ergodicity characterization, Weyl theorem, and Borel theorem now carry their design-mandated landmark flags. The final proof-level pass also made positive open-arc measure explicit in the direct irrational-rotation proof, supplied a complete harmonic lower-bound proof for the nonintegrable `1/x` counterexample, and replaced an informal uncountability assertion by an explicit power-set/binary-expansion bijection. These were corrections to already owner-held escalated items; their escalation records were not overwritten.

## Source reading and dispositions

Three complete authoritative treatments were inspected, not search snippets or landing pages:

- Omri Sarig, *Lecture Notes on Ergodic Theory* (2023), Chapter 2 §§2.1–2.2, printed pp. 35–41 (PDF pp. 43–49). The mean theorem, fixed-space proof, maximal lemma, pointwise theorem, and nonergodic invariant-sigma-algebra identification were read. The historical fetch stamp records 1,382,277 bytes, 153 pages, SHA-256 prefix `94b4fb65b7eb7730`.
- Charles Walkden, *Ergodic Theory* lecture notes, §§8.5–8.6, 9.5–9.6, 10.1–10.5, and 11.2, pp. 78–101. The unique-ergodicity equivalence, irrational rotation, mean theorem, Birkhoff/maximal proof, Kac application, and normal-number argument were read. The fetch stamp records 891,956 bytes, 143 pages, SHA-256 prefix `875df70577cd3bce`.
- Alessio Del Vigna, *The Birkhoff Ergodic Theorem*, the complete six-page note. Definitions 1–2, Theorem 3, Corollary 4, Theorem 5, and Corollary 6 were read, including the sigma-finite oscillation-set argument. The fetch stamp records 227,714 bytes, 6 pages, SHA-256 prefix `7017340988cd08a7`; the complete-short-publication receipt is hash-bound.

The coverage file gives all 24 harvested results a disposition: 17 included, 3 inline, 2 already published, and 2 out of scope. Sarig's conditional-expectation terminology is excluded because the design requires the invariant-set/Radon–Nikodym characterization without that vocabulary. Walkden's Fourier proof of irrational-rotation unique ergodicity is excluded because the design mandates the direct Birkhoff/equicontinuity route. No result was silently dropped or deferred, no retrieval failed, and no `source_resolution` record was needed.

## Mathematical and dependency audit

The load-bearing statements and proofs were checked for hypotheses, direction, conventions, well-definedness, and axiom strength.

- The sigma-finite Birkhoff proof uses Del Vigna's finite-measure rational oscillation sets. For a rational interval `(alpha,beta)`, one applies the maximal inequality to `f-alpha 1_C` on a finite strict invariant representative `C`, then to `-f+beta 1_C`; the resulting inequalities force the oscillation set null. This avoids silently assuming finite total measure or invertibility.
- The shift identity gives invariant a.e. limits. Fatou applied to `|A_n f|` gives an `L1` limit and rules out infinite values. Real and imaginary parts give the complex case without a new choice.
- On finite measure spaces, `p=1` uses an explicit truncation/Markov uniform-integrability estimate plus convergence in measure and Vitali. For `1<p<infinity`, bounded truncations converge by dominated convergence and the two remaining errors are controlled by `L^p` contractivity and Fatou. No `p=infinity` conclusion is claimed, and mere boundedness of `L^p` norms is not treated as uniform integrability of the `p`th powers.
- Limit identification uses the strict invariant sigma-algebra and the signed/complex indefinite integral, then Radon–Nikodym componentwise. It does not consume the later `L^p` lemma or conditional-expectation vocabulary.
- The von Neumann theorem uses the concrete published complex-`L2` projection/Cesaro lemma. That proof explicitly handles a non-surjective isometry by projecting onto its closed range; no inverse of the Koopman map is assumed.
- Irrational rotations use generic Birkhoff on a conull dense set, ergodicity, dominated convergence and integral invariance to identify the bounded observable's constant limit; equicontinuity and a finite net then give uniform convergence. Weyl follows by continuous upper/lower sandwiches for half-open arcs, not the Fourier Weyl criterion.
- Borel normality uses every map `D_b`, every finite word, the half-open cylinder correspondence, and one countable intersection over bases and words. The doubling map alone is not used to claim all-base normality. Its bounded indicator limits, and the fair-coin coordinate limit, use the same generic-Birkhoff/dominated-convergence identification instead of the full-AC Radon–Nikodym corollary.
- Density of the rotation-typical set now cites the positive Lebesgue measure of each nonempty open arc. The nonintegrable observable examples prove `integral_0^1 1/x=+infinity` from disjoint intervals `[1/(k+1),1/k)`, the nonnegative simple-integral formula, and harmonic-series divergence before invoking monotone convergence of truncations; ergodicity plus dominated convergence and integral invariance identify each bounded truncation's Birkhoff limit without importing the full-AC finite-measure Radon–Nikodym corollary.
- The uncountable null binary exception family is in bijection with the power set of the positive integers by assigning arbitrary odd digits and forcing every even digit to zero. The forced zeros rule out the eventually-one ambiguity, and Cantor's theorem plus the surjective-enumeration criterion establishes uncountability.

No local dependency is circular or forward. No Recorded result is a supplier, no incompatible-axiom branch is joined, and no Foundations item or prerequisite path reaches `deferred-set-theory-beyond-choice`.

## Axiom-of-choice boundary

The pointwise Birkhoff theorem, its maximal/oscillation argument, and the finite-measure `L^p` approximation argument are choice-free relative to their repaired analytic interfaces. Full AC is declared on the finite-measure Radon–Nikodym identification, its ergodic corollary, von Neumann's projection theorem, Kac's example, and the `L2` projection example. Its exact use is the published Radon–Nikodym or orthogonal-projection supplier.

Countable Choice is declared on the compact-probability subsequence/representation route, the irrational-rotation/Weyl consequences that inherit it, the Lebesgue-null countable-endpoint argument, the all-base countable intersection, and the fair-coin/Lebesgue applications. For the last three bounded-observable routes, generic Birkhoff plus ergodicity, dominated convergence and integral invariance identify the limit, so they do not import the full-Choice Radon–Nikodym specialization. The local finite-net, deterministic digit, and finite-maximum constructions add no stronger selection. Choice-free definitions and examples remain choice-free.

## Published prerequisite defects and readiness consequences

The following table records the published interfaces that triggered the
initial Batch-1 Step-1 hold. The owner later reconciled the exact item-level
proof paths and marked all 34 current Batch-1 Step-1 records `ready` at
2026-09-12T21:01Z. Separate published Phase-3 presentation or proof debt
remains in the canonical ledger where recorded; this historical table must
not be used as a live readiness count. Exact originating evidence is in
`research/published-consumer-supplier-ledger.md` and the linked Frontier-22
audits.

| Published item(s) | Exact affected use in this batch | Publication state and repair strategy |
|---|---|---|
| `def-integral-of-a-nonnegative-simple-function`, `lem-well-definedness-of-the-simple-integral`, `prop-basic-properties-of-the-nonnegative-simple-integral`, `def-nonnegative-lebesgue-integral`, `prop-the-nonnegative-integral-agrees-with-the-simple-integral`, `prop-order-and-scalar-rules-for-the-nonnegative-integral` | the explicit harmonic lower bound for the nonintegrable `1/x` observable and, transitively, every limiting integral argument | Published A-P. Arbitrary simple displays need zero-coefficient complement cells before common refinement; the zero-scalar cases must avoid the globally undefined product `0*(+infinity)`. The `1/x` proof itself uses only monotonicity and positive finite coefficients, but those published suppliers remain defective until the common finite repair is installed. |
| `def-calligraphic-l-p-on-a-measure-space`, `def-l-p-space-as-a-quotient-by-null-functions`, `thm-minkowski-inequality-for-integrals`, `thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space` | time-average classes, finite-`p` contractivity, truncation errors, and the concrete `L2` carrier | Published A-P. Adjoin zero-complement cells in arbitrary simple representations, repair nonnegative homogeneity/order, then revalidate the finite-`p` carrier, Minkowski, and quotient norm. No new pair or planned Phase-2 supplier exists. |
| `thm-integrals-are-invariant-under-measure-preserving-maps`, `thm-linearity-of-the-lebesgue-integral-on-l-one`, `thm-integral-triangle-inequality` | maximal inequality, invariant-set identities, oscillation bounds, and empirical-measure invariance | Published A-P. Apply the same simple/nonnegative-integral repair, then retain the existing finite `L1` algebra and invariance arguments. |
| `thm-monotone-convergence-for-the-integral`, `thm-fatou-lemma`, `thm-dominated-convergence` | Garsia limit passage, `L1` bound on the Birkhoff limit, bounded-truncation convergence, and continuous-measure uniqueness | Published A-P. Repair simple-integral well-definedness, positive homogeneity, nonnegative additivity/order, and proof-marker placement, then revalidate MCT/Fatou/DCT. |
| `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality` | existence and uniqueness of the invariant-sigma-algebra density | Published A-P, reopened after a prior AC repair. Repair the affected Lebesgue-decomposition existence and finite `L1` uniqueness suppliers; preserve the explicit AC contract. |
| `thm-finite-measure-l-r-includes-into-l-p-for-p-less-r` | bounded truncations and finite-measure `L^p` control | Published A-P. Revalidate after Holder and the finite-`p` carrier are repaired. |
| `def-complex-lp-and-euclidean-test-function-conventions` | the complex `L2` convention used by von Neumann | Published A-P at ledger line 30528: its finite-`p` raw norm must explicitly take value `+infinity` when the integral is infinite, or define membership by integral finiteness first. Existing suppliers suffice; no new pair is needed. |

Four additional published downstream interfaces used here are not independent repairs but inherit the same exact defect chain:

- `prop-indefinite-integral-of-an-integrable-function-is-countably-additive`: proof steps 1.1–2.1 use the affected integrable-function definition and `L1` linearity. Publication state: published. Repair upstream, then revalidate the signed/complex measure calculation.
- `thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces`: its proof uses affected uniform-integrability/absolute-continuity interfaces and Fatou. Publication state: published. Repair those suppliers, then retain the finite-measure Vitali argument.
- `thm-chebyshev-markov-inequality-for-the-integral`: its single proof inequality uses the affected nonnegative order and homogeneity theorem. Publication state: published. The positive threshold avoids the separate zero-times-infinity case, but the common foundation repair is still load-bearing.
- `lem-borel-probability-sequences-on-compact-metric-spaces-have-integral-convergent-subsequences`: proof steps 1.1 and 3.1 use affected nonnegative integral order and `L1` linearity, and its representation supplier uses the same integral. Publication state: published in the current plan. Revalidate it after the common repair; no new pair is needed.

These are actual proof prerequisites, not unrelated consumer debt. Their visible mathematical arguments are standard and appear sound after the finite local repair, but planned or recommended repairs were not treated as published proof. Consequently every owned item whose dependency chain reaches one of these interfaces is escalated even where its local strategy is complete.

The base-$b$ cylinder lemma was initially over-escalated, even though its
proof uses only digit recursion, a countable union of finite sets and the
countable-set Lebesgue-null theorem. Its current manifest lists those direct
dependencies and Countable Choice. The owner recorded `ready` for this exact
claim at 2026-09-12T21:01Z, along with the other 28 initially escalated
items. All 34 current Batch-1 Step-1 records are `ready`, with no missing
record. This is scaffold readiness only; Step 3 still must author and judge
the proofs against current dependencies.

## Cross-batch dependency input

`research/phase-2-next-21-batch-1.cross-batch-dependencies.json` is `[]`. All external item suppliers used by this scaffold are already published; the defective ones above are existing canonical repair debt, not authorization for a new pair. The B page consumes only its A companion. `node tools/frontier-dependency-ledger.mjs refresh --run phase-2-next-21` completed successfully and regenerated the deduplicated run ledger.

## Verification snapshot

Other batches materialized concurrently, so whole-run counts are a final snapshot rather than an ownership claim.

| Check | Exit | Actual result |
|---|---:|---|
| `coverage-checklist.mjs --require-destination ...batch-1.coverage.json` | 0 | 1 A page, 24 harvested rows, 0 errors, 0 warnings. |
| `source-fetch-check.mjs --coverage ...batch-1.coverage.json` | 0 | 3/3 full-text sources fetch-verified and resolved; 0 drops. |
| owned `manifest-deps.mjs` | 0 | 34 items, 0 missing arrays, 0 errors. |
| whole-run `manifest-deps.mjs research/phase-2-next-21-batch-*.pages.json` | 0 | 745 items, 0 missing arrays, 0 errors. |
| owned `content-policy.mjs --manifest-only` | 0 | 34 items, 0 errors, 0 warnings. |
| whole-run `content-policy.mjs --manifest-only` | 0 | 745 items, 0 errors, 0 warnings. |
| `validate-plan.mjs research/plan-spec.json` | 0 | Plan order and declared prerequisites validate; 1,056/1,619 planned pages currently have item lists, so the owned empty plan inventory remains page-level until Step 4. |
| `manifest-integrity.mjs --run phase-2-next-21` | 0 | 42 pages owed, 42 present, 0 missing, 0 added. |
| `depcheck.mjs --quiet` | 0 | No cycles or unresolved references in published content; legacy warnings remain visible. |
| `extcheck.mjs --quiet` | 0 | No hard Recorded-material error; existing published consequences produce warnings, and this batch adds no such path. |
| `step1-decisions.mjs check --run phase-2-next-21` | 1 | Expected owner hold: the captured exact invocation reported 745 run items and 651 ready while other batches' records were changing concurrently. Direct owned reconciliation is stable at 5 ready, 29 escalated, 0 other open records. |
