# Step 3a scope review — `intersection-products-on-smooth-projective-surfaces`

- Run: `frontier-38-owner-30`, batch 26, role alpha (step 3a scope review).
- A page: `intersection-products-on-smooth-projective-surfaces` (order 895).
- B page: `intersection-products-on-smooth-projective-surfaces-examples` (order 896).
- Scope decision: **sufficient** (receipt
  `research/frontier-38-owner-30-step3a-review-intersection-products-on-smooth-projective-surfaces.json`).
- This report decides scope only. It is not an item approval, proof review, or owner record.

## Inputs read (exact paths)

- Design: `research/plan-algebraic-geometry-expansion-track.md` AG-SURF-1 row (L250,
  four A ids + three B ids + V25 route + source gate), the AV-18–AV-26 page map
  (L107–L115), and the AG-SURF-2 follow-up row (L251) that owns surface
  Riemann-Roch/Hodge index.
- Binding direction: `research/frontier-38-owner-30-owner-authoring-direction.md`
  (pair 895/896; local-prerequisite rule; source rule; file discipline).
- Contract: `research/plan-spec.json` rows 895/896 (A `requires` = AV-18–AV-22 +
  AV-26; B requires A895; both item lists still empty pending Step 4).
- Manifest: `research/frontier-38-owner-30-batch-26.pages.json` (A 9 items, B 3 items;
  12 distinct ids, page cap 100 respected).
- Coverage: `research/frontier-38-owner-30-batch-26.coverage.json` (A: 5 sources /
  53 result rows; B: 2 sources / 9 rows).
- Construction record: `research/frontier-38-owner-30-batch-26.notes.md` (including
  the 2026-10-03 “Batch-2 supplier interface reconciliation”).
- Dependency records: `...-batch-26.cross-batch-dependencies.json`,
  `research/frontier-38-owner-30-cross-batch-dependencies.json` (batch-26 edges all
  `verified`), and the batch-2 supplier manifest
  `research/frontier-38-owner-30-batch-2.pages.json`.
- Readiness: the 12 `research/frontier-38-owner-30-step1-<id>.json` records,
  all `decision: ready` with current dependency lists.
- Published suppliers actually read at statement level (all `status: published`):
  `def-euler-characteristic-coherent-sheaf`, `lem-coherent-devissage-one-generic-generator`,
  `lem-euler-characteristic-additive-short-exact`, `thm-euler-characteristic-degree-shift-curve`,
  `def-degree-divisor-proper-curve`, `lem-closed-immersion-cohomology-pushforward`,
  `thm-noetherian-topological-space-dimension-vanishing`, `def-proper-morphism`,
  `def-smooth-morphism-to-field-classical`, `thm-cartier-divisors-mod-principal-to-picard`,
  `lem-eventual-global-generation-coherent-twists`, `lem-global-section-effective-divisor`,
  `cor-minimal-prime-over-a-nonzerodivisor-has-height-one`, `lem-very-ample-implies-ample`,
  `thm-cohomology-projective-space-twisting-sheaves`, `ex-cohomology-o-d-projective-line-all-d`,
  `cex-weil-divisor-not-cartier-singular-cone`, `lem-effective-cartier-divisor-exact-sequence`,
  `cor-twist-exact-sequence-effective-divisor`.
- Sources re-verified 2026-10-03: Vakil, *The Rising Sea* (2025-10-21), author-hosted
  PDF re-fetched (9,643,655 bytes, SHA-256 `d07177aa0317c13490c1…`), §§20.1.1–20.1.5,
  20.2.A–20.2.E and 22.4.13/22.4.O read in extracted text; Stacks tags 0AYR
  (Definition 33.44.1), 0BEP (Definition 33.45.3), 0BEU (Lemma 33.45.8), 0BEY
  (Lemma 33.45.12), 02OS (Lemma 31.33.4), 0H1G (Lemma 37.17.3) fetched live and read.

## Design vs delivered scaffold

- All seven commissioned ids are present verbatim and unweakened: A
  `def-divisor-intersection-number-on-smooth-projective-surface`,
  `thm-surface-intersection-product-bilinear-and-symmetric`,
  `thm-intersection-with-curve-as-degree-of-restriction`,
  `lem-blowup-intersection-matrix-at-smooth-point`; B
  `ex-intersection-pairing-on-p2`, `ex-intersection-pairing-on-blowup-of-p2`,
  `cex-intersection-pairing-needs-cartier-or-cycle-hypotheses`.
- Five local additions on the A page (`local_addition: true`), each a named interface of
  the commissioned route, not new scope: the `χ`-degree on a proper curve; closed-point
  `χ`/twist invariance; the closed-immersion projection formula; the integral-curve twist
  theorem (Stacks 33.44.5); degree additivity on a proper curve (Stacks 33.44.7 / Vakil
  18.4.M). These close the design's recorded gap “Exercise 20.1.E leaves a proof route to
  complete” and the Stacks 33.45 reducibility step without citing them away.
- Scope refinement recorded, not a weakening: the four A items are stated for integral
  *regular* projective surfaces, so the blowup item covers closed points with inseparable
  residue extension; every smooth projective surface over `k` is included via
  `def-smooth-morphism-to-field-classical`. No commissioned claim is dropped or
  re-hypothesised.
- Design exclusions observed: no repetition of the AV-8 plane-Bézout development
  (Vakil 20.1.C(b) declined; the projective-space computation lives on B896); positivity,
  numerical equivalence, asymptotic Riemann-Roch, the length description and P¹×P¹ are
  declined with reasons matching the design and the plan's division of labour.
- Minor design/route note, no action: the design row's “Thm. 20.1.2” corresponds to
  Vakil's Definition 20.1.2 / Proposition 20.1.3; the delivered route follows
  Proposition 20.1.3 with proof §20.1.5, as the coverage rows record.

## Subject coverage (definitions, results, examples)

- Pairing: alternating-sum definition on `Pic(X)` for integral regular projective
  surfaces, well-definedness on isomorphism classes, symmetry, `L·O_X = 0`, linear-
  equivalence invariance, and the Cartier-divisor form `C·D := O(C)·O(D)`.
- Structure: `Z`-bilinearity and symmetry on `Pic(X)` (equivalently additive in each
  divisor variable) and the effective-divisor shift route with its degree-additivity base
  case; restriction theorem `C·D = deg_C(O_X(D)|_C) = deg_D(O_X(C)|_D)` for effective
  Cartier divisors, with the smooth proper geometrically integral comparison to the
  closed-point divisor degree and the empty-curve case.
- Blowup: `X'` integral regular projective, `E ≅ P¹_{κ(p)}`, `O_E(E) ≅ O(−1)`,
  `E² = −[κ(p):k]`; orthogonality `E·π*D = 0`, `π*D·π*D' = D·D'` (via
  `χ(X', π*N) = χ(X, N)`); strict transforms `π*C = C' + mE`, `C'·E = m[κ(p):k]`,
  `C'² = C² − m²[κ(p):k]`, and the off-center case.
- B page: `O(d)·O(e) = de` on P² with the line/conic specialisations and the independent
  restriction-degree cross-check; the blown-up-plane matrix `[[1,0],[0,−1]]` and
  `m = ℓ − E`, `m·E = 1`, `m² = 0`; the two-part counterexample delimiting the Cartier
  and complementary-dimension hypotheses (quadric-cone ruling not Cartier;
  planes in P³ with a 1-dimensional scheme-theoretic intersection).
- All B claims are consumed from A items; no B item duplicates an A proof.

## Prerequisites and dependency scope

- Item level: 87 distinct external dependency ids, every one `status: published`
  (0 absent, 0 draft); every in-run dependency resolves inside this pair or to the
  earlier batch-2 blowup pair (orders 366.091/.092) — no forward, circular or
  unresolved reference. A scan of all `def-/lem-/thm-/cor-/ex-/cex-/rem-` tokens in the
  12 statements and strategies resolves 100% against the union of published items and
  current run manifests.
- Page level: A895 `requires` = AV-18/19/20/21/22 (all five published library pages,
  verified on disk) + AV-26 `blowups-exceptional-divisors-and-strict-transforms`
  (scaffolded in-run, batch 2); B896 requires A895. The cross-batch ledger carries 24
  verified batch-26 rows (23 item edges to batch 2 + the A895→AV-26 page edge); the
  batch-2 supplier statements were read and support exactly the uses made
  (`E`, `O_E(E)=O(−1)`, `π*D`, strict transform, pushforward/Euler vanishing).
- Consumers: no other page in this run consumes A895/B896 items or the page; the
  intended downstream pairs (AG-SURF-2 order 897, AG-BIR-1, AG-CHOW-1) are outside the
  selected 30 pairs. This is consistent with the design's role for the pair.
- **Unmet prerequisites: none confirmed.** Two dependency-citation observations are
  recorded for the authors, not as scope omissions:
  1. `def-degree-invertible-sheaf-proper-dimension-one` and
     `lem-euler-characteristic-finite-support-twist-invariance` use “proper `k`-scheme”
     and assert coherence of `O_C`, of invertible/locally free sheaves and of `i_*κ(p)`,
     plus finiteness of `[κ(p):k]`. The needed facts exist in the published library
     (`def-proper-morphism` already includes finite type;
     `cor-finite-type-algebra-over-noetherian-ring-is-noetherian`;
     `def-locally-noetherian-and-noetherian-scheme`;
     `lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite`), but these two
     items' `deps` do not cite `def-proper-morphism` or the finite-type→Noetherian step.
     Recommended author action at 3b: add those citations when writing the proofs. No
     scaffold addition is required because nothing is absent from library or scaffold.
  2. Coverage annotation only: the Vakil Exercise 20.2.B decline says “deferred to the
     selected order-897 pair”; AG-SURF-2 (897) is planned in `plan-spec.json` but is not
     one of this run's 30 selected pairs (absent from the owner direction and the run
     scope ledger). The substance (surface Riemann-Roch/Hodge index are not part of
     AG-SURF-1) is correct; only the word “selected” is inaccurate. No file edited.

## Source coverage

- A page: 5 sources / 53 harvested rows (15 scaffolded, 17 inline, 21 declined with
  specific reasons, of which 3 are deferrals to the selected AV-26 page or to the
  planned AG-SURF-2 pair); B page: 2 sources / 9 rows (4 scaffolded, 3 inline,
  2 declined). `coverage-checklist` reports 2 pages, 62 harvested rows, 0 errors and
  the advisory `coverage-low-yield` warning (15/53 scaffolded); this review confirms the
  declines are consistent with the design contract, so the warning is accepted.
- Fetch state: `source-fetch-check` 7/7 fetch-verified on the current coverage file.
- The design's source gate (“second independent surface-intersection treatment”) is
  closed by Stacks *Varieties* §§33.44–33.45; the load-bearing statements were re-read
  live and match the manifest: deg = χ-difference (0AYR), intersection number as the
  `n₁⋯n_d` coefficient (0BEP), reduction to an effective Cartier divisor (0BEU),
  `(L·Z) = deg(L|_Z)` (0BEY). The Vakil lane was checked against the author-hosted
  2025-10-21 PDF whose SHA-256 matches the recorded audited hash; the local
  `research/algebraic-geometry-expansion-2026-09-30/source-vakil.md` is a planning
  annotation, not the PDF text, so the PDF itself was re-fetched for this review.

## Intended role and residual uncertainty

- Role in the library: the pair supplies the surface intersection product, its
  bilinearity and restriction-degree forms, and the point-blowup intersection calculus
  that the later surface pairs (Riemann-Roch/Hodge index, birational geometry) are
  designed to consume; within this run it is a supplier leaf (B depends on A only).
- Residual uncertainty: proof correctness and authoring are out of scope for 3a; the
  manifest strategies are routes, not proofs. The only open points are the two
  dependency-citation observations above (uncertainty level: low), both actionable by
  the Step 3b authors without scope change.

## Decision

**sufficient** — the definitions, results and examples commissioned by AG-SURF-1
(including its B inventory and the locally required curve-degree/dévissage base case)
are all present, correctly scoped, source-backed by two independent treatments, and
fully resolvable against the published library plus the current scaffold; no omission
requires owner merger or enrichment.
