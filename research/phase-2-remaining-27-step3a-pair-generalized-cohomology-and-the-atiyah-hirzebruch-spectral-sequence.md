# Phase 2 remaining 27 — Step 3a scope review: generalized cohomology and the Atiyah–Hirzebruch spectral sequence

Run: `phase-2-remaining-27`
Dispatch: `step3a-pair-generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-1e9bb734f0607350`
Batches: 9 (this pair only; the co-batch AT-20 pair shares
`phase-2-remaining-27-batch-9.pages.json` and is preserved untouched)

Scope review only: this report decides scope and records no item approval and
no owner decision.

## Pair reviewed

| page | kind | planned items | decision |
| --- | --- | ---: | --- |
| `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence` | A | 21 | **sufficient** |
| `generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples` | B | 9 | companion, covered by the A decision |

A inventory in page order: `def-reduced-generalized-cohomology-theory`,
`prop-reduced-and-unreduced-generalized-cohomology-theories-correspond`,
`def-coefficient-groups-of-a-generalized-cohomology-theory`,
`def-reduced-generalized-homology-theory`,
`def-coefficient-groups-of-a-generalized-homology-theory`,
`prop-degree-d-sphere-maps-act-by-multiplication-by-d-in-any-generalized-theory`,
`def-skeletal-filtration-for-generalized-cohomology`,
`lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients`,
`lem-the-ahss-first-differential-is-the-cellular-coboundary`,
`thm-cohomological-atiyah-hirzebruch-spectral-sequence`,
`lem-homological-ahss-exact-couple-from-the-skeletal-filtration`,
`thm-homological-atiyah-hirzebruch-spectral-sequence`,
`lem-edge-maps-of-a-bounded-skeletal-ahss`,
`thm-naturality-and-edge-maps-of-the-ahss`,
`lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss`,
`thm-multiplicative-ahss-for-a-multiplicative-generalized-theory`,
`prop-ahss-collapse-determines-only-the-associated-graded-object`,
`cor-complex-k-theory-ahss`,
`lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three`,
`lem-ku-representability-and-skeletal-postnikov-d-three-comparison`,
`thm-first-possible-complex-k-ahss-differential-is-integral-sq-three`.

B inventory in page order: `ex-complex-k-ahss-for-spheres`,
`ex-complex-k-ahss-for-complex-projective-space`,
`ex-complex-k-ahss-for-a-closed-oriented-surface`,
`lem-complexified-tautological-line-resolves-real-projective-k-theory-extensions`,
`ex-complex-k-ahss-for-real-projective-space`,
`lem-reduction-of-the-integral-bockstein-is-the-first-steenrod-square`,
`lem-a-bockstein-class-on-rp-two-times-rp-four-has-nonzero-integral-sq-three`,
`ex-nonzero-d-three-in-the-k-ahss-for-rp-two-times-rp-four`,
`rem-finite-cw-ahss-convergence-does-not-automatically-extend-to-infinite-cw-complexes`.

## Evidence reviewed

- Current artifacts: `research/phase-2-remaining-27-batch-9.pages.json` (both
  pages of this pair plus the co-batch AT-20 pair), the batch-9 coverage record
  (10 source rows for this pair: 6 A, 4 B), the plan-spec entries (orders
  `366.033`/`366.034`, exact `requires` arrays), the batch-9 scaffold notes,
  `research/phase-2-remaining-27-step3a-review-*` sibling reports,
  `research/phase-2-remaining-27-scope-ledger.json`,
  `research/phase-2-remaining-27-cross-batch-dependencies.json` (263 edges,
  none involving this pair), the batch-9 cross-batch input (AT-19 edges only),
  the drift-evidence entry for this A page, and the Step-1 receipts (30/30
  `ready`; run-wide `step1-decisions check` closed at 1006/1006).
- Binding prose: `research/plan-algebraic-topology-track.md` §AT-17 (lines
  2110–2160: A/B inventories, "deliberately finite-CW", both forms
  constructed and the cohomological one applied to complex K, source
  locators), the AT-16 split note (line 2068: "AT-17 cannot apply the AHSS to
  K before K*, its coefficients and Bott periodicity exist"), the dependency
  table row `AT-17 | AT-4, AT-9, AT-16, spectral-sequences,
  double-complexes-exact-couples-and-convergence` (line 350), the change list
  items 8–9 (lines 2739–2747), the coverage harvest rows 2518–2520, and
  `research/phase-2-remaining-27-owner-authoring-direction.md` §Algebraic
  topology AT-17 paragraph. The manifest complies with the owner direction:
  reduced homology and its coefficient groups precede the shared
  degree-of-a-sphere-map calculation; the homological AHSS is constructed from
  the skeletal exact couple with `d_r:(p,q)->(p-r,q+r-1)`; multiplicativity
  assumes a specified unital, associative, graded-commutative coherent
  external product compatible with suspension and cofiber boundaries, with a
  ring prespectrum only an example; the infinite-CW entry is a limitation
  remark, not a witnessless counterexample.
- Source coverage and an independent fetch check: the 7 distinct URLs cited by
  this pair were re-downloaded today and reproduce the recorded stamps
  byte-exactly — Loizides, *AHSS* (345372 bytes, `8d6c53436251c98d`, 9 pp.);
  Ji, *AHSS* (273163, `f910ec509d4575bb`, 13 pp.); Davis–Kirk
  (1794704, `0441b5c1059cac27`, 382 pp.); May, *Concise Course*
  (1715976, `6724f02748ed1f2f`, 251 pp.); Adams, *SHGH* (1878104,
  `783c33248d5c179a`, 432 pp.); Atiyah, *K-Theory* (7736369,
  `00028099eed3acc2`, 220 pp.); Hatcher, *Algebraic Topology* (8121741,
  `bebb3032bf9021b9`, 560 pp.). `source-fetch-check` reports 17/17 batch rows
  fetch-verified; `url-sweep` liveness was recorded by Step 1.
- Source reading (load-bearing passages, complete arguments): Loizides §2
  (reduced axioms: homotopy, wedge, exactness; unreduced-to-reduced kernel
  correspondence; `h_n := h_n(S^0)`; Lemma 2.3 degree action via
  pinch/fold), §3 (exact couple with bidegrees, Definition 3.1, Theorem 3.2
  `E^2_{p,q} = H^p(X; h^q)` with `d_1` the cellular coboundary, the
  differential bidegree computation `(n+1,-n)`, and Theorem 3.4/Remark 3.5
  giving `E^∞` as the associated graded of
  `F^m h^n(X) = ker(h^n(X) -> h^n(X^m))` for finite CW). Ji §3
  (Proposition 3.8 `K(CP^n) = Z[γ]/(γ^{n+1})`; Proposition 3.9
  `K(RP^n) = Z ⊕ Z/2^{⌊n/2⌋}` with `K^1 = 0` for even `n` and `Z` for odd
  `n`; Proposition 3.11 and the `RP^2×RP^4` `E_3` figure showing one
  nonzero `d_3`; Proposition 3.12 `d_3 = Sq̃^3 = β Sq^2 ρ_2`, its
  classification argument and the explicit referral for the proof). Davis–Kirk
  §8.8 (Definition 8.27 reduced homology theory; Definition 8.28 coefficients
  `h_n(S^0)`) and §9.2 (Theorem 9.6, bidegree `(-r, r-1)`, and its note that
  the general Leray–Serre–AHSS proof is deferred to reference [43]). Atiyah
  pp. 105–106 (the free `Z/2` sequence, `u = ρ-1`, `u^2 = -2u`, order
  `2^{n-1}` and infinite cyclic `K^1` for the odd-dimensional projective
  space). Adams Proposition 16.6 and its proof (first `bu` k-invariant
  `δ_2 Sq^2`, nonzero because `δ_2 Sq^2 ≠ 0` in `H^6(H,3)` while `H^6(SU)=0`,
  with the Bott cofiber sequence fixing the normalization). Hatcher §3.E
  pp. 303–305 (integral Bockstein, `β = ρ β̃`, and the derivation property).
  May Ch. 24 §§1–2 (`K(X) = [X_+, BU×Z]`, reduced form, Bott element and the
  `Ω`-prespectrum identification with `ΩBU ≃ U`).
- Role and consumers: the co-batch AT-20 pair consumes exactly 6 of the A
  items across 4 declared consumer items —
  `lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations`
  (`prop-reduced-and-unreduced-...`, `def-skeletal-filtration-...`),
  `lem-chern-character-induces-the-rational-isomorphism-on-ahss-e-two`
  (`cor-complex-k-theory-ahss`, `thm-naturality-and-edge-maps-of-the-ahss`),
  `thm-rational-chern-character-isomorphism-for-finite-cw-complexes`
  (`prop-ahss-collapse-determines-only-the-associated-graded-object`), and
  the AT-20 B page `ex-complex-line-bundles-over-the-two-sphere-by-clutching-degree`
  (`prop-degree-d-sphere-maps-...`). The pair's own dependencies are 24
  same-pair items and 33 published items (`items/`); there is no cross-batch
  in-run supplier edge, and all five declared `requires` pages
  (`cw-complexes-and-cellular-homology`,
  `bocksteins-steenrod-squares-and-cohomology-operations`,
  `complex-topological-k-theory-and-bott-periodicity`, `spectral-sequences`,
  `double-complexes-exact-couples-and-convergence`) are published on disk
  (the last two in `library/homological-algebra/`). No published page or item
  references the AHSS page or its planned items
  (`library/`/`items/` search empty), and the page sits between the published
  orders `366.031` (AT-16) and `366.035` (AT-18) as designed.
- Checks re-run for this review: `manifest-deps` on the batch-9 manifest
  (66 items, 0 normalized, 0 errors); `coverage-checklist
  --require-destination` (4 pages, 127 harvested results, 0 errors, 0
  warnings); canonical coverage arrays equal manifest order on both pages;
  `step3-decisions check --phase scope` shows this pair outstanding and the
  co-batch AT-20 pair separately outstanding; no prior `step3a-review`
  receipt exists for this A page.

## Why the scope is sufficient

The A inventory reproduces the design's declared AT-17 result set and the four
authorized Batch-9 local suppliers, and it covers every part of the declared
subject: the reduced generalized cohomology axioms without the dimension
axiom, the reduced/unreduced correspondence with relative groups, coefficient
groups, the separately defined reduced homology theory and its coefficients,
the degree-`d` action, the skeletal filtration, the `E^1` identification with
cellular cochains and `d_1` as the cellular coboundary, the cohomological AHSS
with `d_r:(p,q)->(p+r,q-r+1)` and finite-CW convergence to the skeletal
filtration quotients, the homological AHSS constructed from the skeletal
exact couple with `d_r:(p,q)->(p-r,q+r-1)`, bounded-skeletal edge maps,
naturality for CW maps and theory morphisms, the multiplicative structure
from a specified coherent external product, the collapse/extension warning,
and the complex K-theory application. The two added K-theory suppliers are
load-bearing rather than optional breadth: the published AT-21 page explicitly
does not prove Brown representability
(`rem-positive-stable-stems-brown-representability-and-model-categorical-replacement-are-not-proved-here`),
and Ji Proposition 3.12 refers its `d_3` proof elsewhere, so the pair must
supply both the first `ku` k-invariant (Adams 16.6) and the skeletal/Postnikov
comparison locally. The B inventory then exhibits the classical applications
the design names — spheres, `CP^n`, oriented surfaces, `RP^n` with the
`α^2 = -2α` extension analysis and the exact power-of-two orders, and the
nonzero `d_3` on `RP^2×RP^4` — together with the owner-directed infinite-CW
limitation remark. The manifest tables I could check against the sources
(Bott-periodic sphere groups, the `CP^n` ring, the `RP^n` orders and `K^1`
parities, the `RP^2×RP^4` `d_3`, and `d_3 = Sq̃^3`) match the cited arguments;
the item-level proofs, including the claim that `α` has exact order `2^m` and
generates `K̃^0(RP^r)`, remain Step 3b/Step 5 obligations and are not decided
here.

Coverage disposition is structurally complete: 17 `included`, 2 `inline`, one
`out-of-scope` with a written reason (Davis–Kirk's general local-coefficient
Serre–AHSS, out of this page's point-fiber design), and one `deferred` whose
destination item
(`lem-chern-character-induces-the-rational-isomorphism-on-ahss-e-two`) is
present on the co-batch AT-20 A page. Nothing the design promised is dropped
and nothing is silently absorbed. Two source-locator attributions in the
coverage record are wrong and are reported below; they concern citation
accuracy, not the inventory, so they do not change this decision.

## Observations and residual uncertainty (do not change the decision)

- **Source-attribution finding with exact evidence (for the author/owner, not a
  scope change).** The A-page coverage row `Naturality and products |
  discussion after Theorem 1.4 | lem-pairings-of-skeletal-exact-couples-induce-multiplicative-ahss`
  and the matching `sources` reference on both multiplicative items
  (`lem-pairings-...`, `thm-multiplicative-...`) attribute the product
  structure to Ji's note "Discussion following Theorem 1.4 and §3.1". I read
  the complete Ji note: the only material after Theorem 1.4 is the homology
  reversal remark and the attribution remark, §3.1 is the simplified K-AHSS,
  and there is no product development anywhere — the sole product pointer is
  bibliography entry [6] (Gray, *Products in the Atiyah–Hirzebruch Spectral
  Sequence*). Loizides §§1–3 contains no product development either. The
  supporting passage actually present in the batch's fetch-verified source
  set is Miller, MIT 18.906, Lecture 29 (printed pp. 100–101), "Product
  structure": bigraded algebras on each page, `d_r` a derivation, `E_{r+1} =
  H(E_r)` as algebras, `E_2` as a bigraded algebra, filtration
  multiplicativity and `E_∞ ≅ gr` as algebras, with the explicit note that the
  CW-filtration construction must choose a skeletal approximation of the
  diagonal. That Miller passage is declared on `lem-pairings-...` but has no
  row of its own on the A page's coverage (Miller currently appears in batch 9
  only under the AT-20 rows, locator "Lectures 34–36"). Recommended action:
  correct the Ji locator and add the Miller Lecture 29 row to the A-page
  coverage on the next authorized touch of `research/phase-2-remaining-27-batch-9.coverage.json`.
  The item statements and local proof plans are not affected.
- **B-page Ji locator nits.** The coverage rows place the surface, `CP^n` and
  `RP^n` computations at "§3.1", the sphere computation at "Example 3.3", and
  the `RP^2×RP^4` row at "§3.2" without its final index. In the source the
  examples are §3.2.1 (Proposition 3.3, surfaces), §3.2.2 (Propositions
  3.4/3.8, `CP^n`), §3.2.3 (Proposition 3.9, `RP^n`) and §3.2.4 (Propositions
  3.11/3.12, `RP^2×RP^4`); there is no "Example 3.3", and the sphere groups
  come from Theorem 3.1, Corollary 3.6 and the `K^i(pt)` parity computation in
  §3.1. The A-page
  read-evidence sentence "Its K-theory examples, product discussion and
  nonzero-`d_3` calculation were checked" should likewise drop "product
  discussion". Citation accuracy only; the mathematical claims are supported.
- The multiplicative A items state page products, derivation differentials,
  filtration multiplicativity and the `E_∞` associated-graded ring, but do not
  state a separate clause identifying the product on `E_2` with the cup
  product on `H^*(X; h^*(*))`; Miller Lecture 29 states that refinement in the
  ordinary-cohomology case, so it is available if the owner wants it. No
  declared consumer uses that form (the `CP^n` example deliberately uses the
  projective-bundle theorem for its ring). Candidate enrichment, not a scope
  gap.
- No item applies the homological AHSS. The design explicitly constructs both
  forms and applies only the cohomological one to complex K, and no consumer
  declares a homological application. Optional enrichment only.
- Three proof-bearing local lemmas sit on the B page (the `RP^n` extension
  lemma, the Bockstein-reduction lemma, and the `RP^2×RP^4` class lemma).
  They are the local suppliers of the B examples, were introduced by the
  authorized Batch-9 repair as "local proof suppliers, not new page pairs",
  and do not change the pair's scope.
- Davis–Kirk Theorem 9.6 is the general Leray–Serre–AHSS and defers its proof
  to reference [43]; this page's homological construction is owner-directed
  local work from the published exact-couple machinery, and the source's role
  is the axioms, coefficient definition and bidegree statement, all of which
  it states outright. The local `d_3` argument is the pair's heaviest
  obligation; its source base (Ji 3.12, Adams 16.6, May Ch. 24) is verified
  and the Batch-9 repair notes record the reconstructed bridge.
- Published-item interaction, recorded for completeness: the published
  `def-postnikov-k-invariant` (a declared dependency of the two `ku` lemmas)
  is named at `research/published-consumer-supplier-ledger.md` line ~9818
  inside the recorded `AT-23 -> AT-13` Phase-3 supplier mapping for the
  published obstruction-theory page. That is existing Phase-3 debt with a
  recorded repair plan; this pair only consumes the published definition, so
  it changes no scope here.
- Read but not planned as items: Loizides' derived-couple formulas and
  `Lemma 3.6` (absorbed by the exact-couple items), Ji's Künneth theorem
  `3.10` for K-theory (the coverage row states the local Bockstein–Steenrod
  calculation replaces the K-theory-order shortcut in the `RP^2×RP^4`
  example), and the standard `E_2`-product corollaries of the multiplicative
  theorem. Each is either absorbed, deliberately replaced by a local
  argument, or a non-blocking enrichment note above.
- This review checked scope, source coverage, prerequisites, consumers and
  mechanical closure; it did not audit item proofs or re-derive the recorded
  arguments (that is the Step 3b author's work and Step 5's independent
  review). Unresolved uncertainty affecting the decision: none.

## Recorded decision

`node tools/step3-decisions.mjs record-scope --run phase-2-remaining-27
--page generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence
--decision sufficient --reason "<scope evidence and this report path>"`.
The B page
`generalized-cohomology-and-the-atiyah-hirzebruch-spectral-sequence-examples`
is this A page's companion and is covered by the single A-page scope decision.
