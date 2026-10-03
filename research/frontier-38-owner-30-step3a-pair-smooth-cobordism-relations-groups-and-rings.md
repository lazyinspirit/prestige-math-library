# Step 3a scope review — smooth-cobordism-relations-groups-and-rings

- Run: `frontier-38-owner-30` · batch 13 · role alpha · dispatch label
  `step3a-pair-smooth-cobordism-relations-groups-and-rings-fe508e8a8e2c634e`.
- Pair: A `smooth-cobordism-relations-groups-and-rings` (order 545) and
  B `smooth-cobordism-relations-groups-and-rings-examples` (order 546),
  differential topology.
- Decision (A page): **sufficient**. No merger or enrichment required.
  Scope review only; no proof-correctness judgement, no scaffold edit,
  no owner record.

## Inputs read

- Manifest: `research/frontier-38-owner-30-batch-13.pages.json`
  (2 pages, 19 A + 5 B items); coverage
  `research/frontier-38-owner-30-batch-13.coverage.json` (4 sources,
  48 dispositions); notes `research/frontier-38-owner-30-batch-13.notes.md`;
  cross-batch input `research/frontier-38-owner-30-batch-13.cross-batch-dependencies.json` = `[]`.
- Prose design: `research/plan-differential-topology-track.md`, section DT-15
  (printed lines 887–963) together with the DT-11 section (line 719 ff.) and
  the DT-16–DT-19 sections for the seams and downstream consumers.
- Plan: `research/plan-spec.json` orders 545/546 (empty `items`, the requires
  list and companion exactly as scaffolded); run scope ledger
  `research/frontier-38-owner-30-scope-ledger.json` rows 46/47.
- Owner decisions: `research/frontier-38-owner-30-owner-authoring-direction.md`
  (binding; carries no pair-specific instruction for 545/546 beyond the run
  scope table), the 24 Step-1 readiness records
  `research/frontier-38-owner-30-step1-*.json` for this pair (24/24 `ready`),
  and the drift evidence entry for the page (same 220-page requires closure
  used below; it records no finding). No Step-3a owner record exists yet.
- Published suppliers were read where the scaffold depends on them (list of the
  load-bearing ones in §3).

## 1. Scope against the prose design

- Inventory: the design lists 15 A items and 5 B items. The manifest carries
  all 20 in the design order and kind, plus four design-required local
  prerequisites that have no published counterpart, each inserted before its
  first consumer: `def-stiefel-whitney-number-of-a-closed-manifold` and
  `def-pontryagin-number-of-a-closed-oriented-manifold` (design items 13–14
  are ill-posed without them), and
  `lem-fundamental-class-of-a-boundary-pushes-forward-to-zero` and
  `lem-boundary-stable-tangent-splits-off-a-trivial-line` (the two geometric
  inputs the design assigns to the proofs of items 13–14; the first is also
  consumed by the Ω₀ computation). Nothing designed was dropped or weakened.
- Only statement deviation: design item 11's product-boundary formula is
  written with corners; the scaffold states the corner-free case that matches
  the published `prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary`
  and records the exclusion. Verified adequate for every design use:
  product well-definedness glues `(W₁×M₂)∪_{M₁'×M₂}(M₁'×W₂)`, associativity,
  unit and graded commutativity use closed products, and the sign
  `(-1)^{mn}` is a transposition of closed manifolds. No commissioned claim
  needs the corner case.
- "Requires" conflict recorded by the scaffold (design names DT-11 for
  intersection-based invariants; the plan's requires omits it): confirmed
  benign. All 19 A and 5 B statements were read; none uses an intersection
  number. The declined determinant-line Ω₂ = Z/2 route has a real destination
  (`oriented-and-mod-two-intersection-numbers`, batch 12 in-run, mutually
  independent with this pair) and is not a DT-15 design item.
- Intended role: geometric cobordism foundation consumed by plan orders 549
  (Pontryagin–Thom), 551 (Hopf degree), 553 (characteristic numbers),
  555 (signature), 557, 577, 579. The scaffold supplies exactly the design's
  commissioned content: the cobordism relation in both theories,
  Ωₙ^O/Ωₙ^SO with group laws, the graded ring with point unit and
  graded commutativity, the Ω₀ computation, boundary-vanishing of
  Stiefel–Whitney and Pontryagin numbers, and the geometric-vs-generalized-
  homology seam remark. Thom detection, spectra, framed cobordism, rational
  structure and the signature are designed for later pages.

## 2. Source coverage

- Four sources (Freed Lectures 1–2; Milnor–Stasheff §4/§16/§17; Wall ch. 8;
  Ranicki ch. 6), 48 harvested dispositions: 26 `included`, 1 `inline`,
  3 `already-published`, 7 `deferred`, 11 `out-of-scope`; every manifest item
  carries ≥2 references with precise locators (checked from the manifest).
  The notes record full-text fetch stamps for all four (checks not re-run
  here; disposition counts re-verified from the coverage file).
- Declinations name real destinations: Thom construction/transversality and
  submanifold representation → `thom-spaces-normal-data-and-collapse-maps`
  (batch 14, in run); stable-homotopy identifications → the spectra page;
  framed cobordism → `pontryagin-thom-and-framed-cobordism` (selected);
  Thom detection, rational oriented structure and low-dimensional tables →
  `characteristic-numbers-and-cobordism-obstructions` / signature pages;
  stable-group and exact-sequence machinery → out of subject. No disposition
  points at an unbuilt or unselected page as a hard prerequisite.

## 3. Prerequisite check (unmet prerequisites)

- Resolution: 211 dependency edges over 74 distinct targets — 139 edges to
  57 distinct published targets, all verified `status: published` on disk,
  and 72 edges to 17 distinct same-pair in-run targets. Zero missing, zero
  unpublished. All four page `requires` pages are published
  (`manifolds-with-boundary-collars-and-orientations`,
  `orientations-poincare-lefschetz-and-alexander-duality`,
  `stiefel-whitney-and-euler-classes-by-universal-constructions`,
  `chern-and-pontryagin-classes-by-splitting-and-complexification`). Batch 13
  declares no in-run cross-batch edge, and batches 12 and 14 declare none
  into this pair (verified from their `cross-batch-dependencies` inputs and
  from the resolved dep targets).
- Load-bearing published statements were read against their uses:
  `prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary`
  (corner-free hypothesis and sign match scaffold lemma 11),
  `def-product-orientation`, `def-induced-boundary-orientation`
  (outward-normal-first),
  `thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary`
  (assumes AC_ω, exactly as scaffold lemma 15 states),
  `thm-mod-two-real-projective-bundle-theorem` and
  `prop-first-stiefel-whitney-class-classifies-orientability` (RP² use),
  `def-relative-fundamental-class-and-boundary-orientation` (∂[W,M] = [M]),
  `prop-zero-th-singular-homology-is-free-on-path-components`,
  `def-kronecker-evaluation-pairing` with its independence lemma,
  `prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds`.
  No consumed published item was found defective.
- **Confirmed declaration gap (not an absent prerequisite).**
  `lem-second-countable-smooth-manifolds-have-cw-homotopy-type` — published;
  home page `chern-weil-theory-and-characteristic-forms`
  (`library/differential-geometry/chern-weil-theory-and-characteristic-forms.md`)
  — is consumed by `def-stiefel-whitney-number-of-a-closed-manifold`,
  `def-pontryagin-number-of-a-closed-oriented-manifold` and
  `cex-real-projective-two-space-is-not-unoriented-null-cobordant`. Its
  statement supplies exactly the hypothesis the class suppliers require
  (finite-dimensional Hausdorff second-countable smooth manifolds are
  paracompact Hausdorff CGWH of CW homotopy type, and their smooth bundles
  are numerable; cf. `def-stiefel-whitney-classes-from-the-projective-bundle-relation`
  and `def-pontryagin-classes-by-complexification`, both of which demand an
  admissible base). An exhaustive check of the page's 220-page transitive
  `requires` closure found this to be the only dep item outside it (the drift
  evidence computes the same closure and does not contain the page either).
  Because the claim exists and is published, this is a reading-order /
  declaration gap rather than a scope insufficiency, and no new item is
  needed. Recommended owner action at the Step-4 splice: add the `requires`
  edge to `chern-weil-theory-and-characteristic-forms`, or record an owner
  decision that the admissibility lemma belongs to the characteristic-class
  interface. Adding the edge is cycle-free (its closure does not contain this
  page and already includes `chern-and-pontryagin-classes-by-splitting-and-complexification`).
  Step 3a made no scaffold or plan edit.
- No other potentially unmet prerequisite was found: every dep target the
  three number/counterexample items use is published, and every remaining need
  is covered by in-run same-pair items.

## 4. Uncertainty and notes for Step 3b / later review (non-blocking)

1. `cex-real-projective-two-space-is-not-unoriented-null-cobordant` concludes
   `w₁(TRP²) ≠ 0` from non-orientability of RP²; the 3b author should cite
   `thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension`
   (published, in closure) or the bundle-orientability definition explicitly.
   The needed items exist; this is citation bookkeeping, not a gap.
2. The corner-free product-boundary lemma and the transposition-sign
   computation were cross-checked against the outward-normal-first convention;
   consistent (see §1).
3. Scaffold-recorded uncertainties for 3b/5a: the pair-of-pants
   boundary-circle orientation bookkeeping, the admissibility step inside the
   two number definitions, and the oriented sign conventions. No known defect.
4. Plan overlap to reconcile later: DT-19's design re-lists
   `def-stiefel-whitney-number-of-a-closed-manifold`,
   `def-pontryagin-number-of-a-closed-oriented-manifold` and a
   stable-tangent boundary lemma; since DT-15 mints them, the DT-19 planner
   should reuse the published items rather than duplicate. Not an omission of
   this pair.

## 5. Decision

- `smooth-cobordism-relations-groups-and-rings`: **sufficient**. The planned
  definitions, results and B-page examples adequately cover DT-15's intended
  subject as designed, sources are fully harvested with real destinations for
  every decline, and no unmet prerequisite is absent from the published
  library and the scaffold. One confirmed page-declaration gap is flagged
  above for owner action at the splice; it does not change the scope verdict.
- B page reviewed alongside; its five items match the design and its deps
  resolve. Decision recorded on the A page per dispatch.
