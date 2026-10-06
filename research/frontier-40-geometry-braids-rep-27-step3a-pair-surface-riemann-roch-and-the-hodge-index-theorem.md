# Step 3a scope review — `surface-riemann-roch-and-the-hodge-index-theorem`

- Run: `frontier-40-geometry-braids-rep-27`, batch 21, role alpha (step 3a scope review).
- A page: `surface-riemann-roch-and-the-hodge-index-theorem` (order 897).
- B page: `surface-riemann-roch-and-the-hodge-index-theorem-examples` (order 898).
- Scope decision: **sufficient** (receipt
  `research/frontier-40-geometry-braids-rep-27-step3a-review-surface-riemann-roch-and-the-hodge-index-theorem.json`).
- This report decides scope only. It is not an item approval, proof review, or owner record.

## Inputs read (exact paths)

- Design: `research/plan-algebraic-geometry-expansion-track.md` AG-SURF-2 row
  (id mention L42; contract row L253: the three A ids, three B ids, the
  V25 Exercise 20.2.B fill, "prove the Hodge index theorem from the exact
  hypotheses in V25", "state numerical equivalence/base field assumptions",
  and the open gate "a second independent full treatment and the exercise
  details").
- Contract: `research/plan-spec.json` rows 897/898 (ids, orders, category,
  companion, `requires`; both item lists still empty — the design inventories
  are the scope contract).
- Owner direction: `research/frontier-40-geometry-braids-rep-27-owner-authoring-direction.md`
  (27 selected pairs; lower-order in-run dependencies permitted; publication is
  an owner action).
- Manifest: `research/frontier-40-geometry-braids-rep-27-batch-21.pages.json`
  (A 12 items, B 6 items; A `requires` the four pages below, B `requires` A).
- Coverage: `research/frontier-40-geometry-braids-rep-27-batch-21.coverage.json`
  (2 pages, 5 source entries, 37 harvested rows: 24 included, 6 inline,
  2 already-published, 5 declined with reasons).
- Construction record: `research/frontier-40-geometry-braids-rep-27-batch-21.notes.md`.
- Scope selection: `research/frontier-40-geometry-braids-rep-27-scope-ledger.json`
  (897/898 selected, batch 21). Cross-batch records:
  `...-cross-batch-dependencies.json` (0 edges touching this pair) and
  `...-batch-21.cross-batch-dependencies.json` (empty).
- Readiness: the 18 `research/frontier-40-geometry-braids-rep-27-step1-<item>.json`
  records, 18/18 `decision: ready`.
- Published suppliers read at statement level (all `status: published` on disk):
  `def-divisor-intersection-number-on-smooth-projective-surface` (defining
  χ-alternating sum), `thm-surface-intersection-product-bilinear-and-symmetric`,
  `thm-serre-duality-smooth-projective-variety-locally-free-sheaves`,
  `thm-hilbert-polynomial-degree-support-dimension`, `thm-serre-vanishing`,
  `thm-ample-powers-very-ample-proper-base`,
  `lem-blowup-intersection-matrix-at-smooth-point`,
  `ex-intersection-pairing-on-blowup-of-p2`, `thm-blowup-projective`,
  `thm-blowup-regular-surface-closed-point-regular`,
  `thm-cohomology-and-base-change`,
  `lem-cohomology-base-change-finite-free-criterion`,
  `def-definiteness-inertia-and-signature-data-over-the-reals`.
- Sources re-verified live 2026-10-05 against the coverage fetch stamps:
  Vakil, *The Rising Sea* 2025-10-21 (9,643,655 B, sha256_16
  `d07177aa0317c134`) — §20.2.12–§20.2.20 read, including Theorem 20.2.13,
  the proof §§20.2.14–20.2.19, Exercise 20.2.B(a)(b), Exercises 20.2.C/20.2.D
  and 20.2.U; MIT 18.727 Lecture 2 (198,721 B, sha256_16
  `e279bfeed05297da`) — all 5 pages read, including Theorem 1
  (Riemann–Roch) with proof, Proposition 1/Corollary 1 (Hodge index for a
  hyperplane section) and Theorem 3 (signature); Stacks tag 0BEL (37,184 B,
  sha256_16 `b06d9390520fabee`) — Lemma 33.45.9 (0BEV) and Definition 33.45.10
  read. All three hashes match the recorded stamps.

## Design vs delivered scaffold

- All six commissioned ids are present verbatim and unweakened: A
  `thm-riemann-roch-for-smooth-projective-surfaces`,
  `thm-hodge-index-theorem-for-smooth-projective-surfaces`,
  `cor-negative-definiteness-of-primitive-numerical-divisors`; B
  `ex-hodge-index-on-p1-times-p1`, `ex-hodge-index-on-a-blowup`,
  `cex-intersection-form-not-negative-definite-on-all-divisors`.
- The A page expands the three promised items with nine in-subject route items:
  the canonical divisor, adjunction, numerical equivalence/N¹ (definition),
  ample-positivity, ample twists are very ample, top-cohomology vanishing,
  the effective-multiple lemma, the ample case of the Hodge index theorem, and
  a conventions remark. Each is consumed by a promised item (the remark is
  bookkeeping); no new subject is opened.
- The B page adds three example-specific prerequisite lemmas (P¹×P¹ is a
  smooth projective surface; Pic of P¹×P¹ and its intersection form; Pic of the
  point blowup of P²), used only by later B-page items. SCHEMA line 160 permits
  same-page B prerequisites; nothing outside the B page consumes them.
- Design exclusions are honoured with per-row reasons: the proper
  non-projective generalization (Vakil §20.2.20), ruled/Hirzebruch/nef-cone
  material (Vakil §§20.2.9–20.2.10, Exercises 20.2.F–20.2.T), Nakai–Moishezon
  (MIT §1.3) and asymptotic Riemann–Roch (Stacks 33.45.13) are declined.
- Base field, smoothness and numerical-equivalence conventions are explicitly
  stated in `def-canonical-divisor-of-a-smooth-projective-surface`,
  `def-numerical-equivalence-and-neron-severi-space` and
  `rem-surface-riemann-roch-hodge-index-conventions`; the Hodge index
  hypotheses are exactly Vakil Theorem 20.2.13 (H·H > 0, L·H = 0; equality iff
  L is numerically trivial), with no ampleness assumption on H.

## Subject coverage (definitions, results, examples)

- Riemann–Roch: `χ(X, O_X(D)) = χ(X, O_X) + ½ D·(D − K_X)` for invertible
  sheaves/Cartier divisors over an arbitrary field, matching Vakil Exercise
  20.2.B(b) and MIT Theorem 1; the scaffold's χ-definition route is exactly
  MIT's proof and Vakil's hinted route.
- Adjunction: `C·(K_X + C) = 2p_a(C) − 2` for nonzero effective Cartier
  divisors, matching Vakil Exercise 20.2.B(a) (χ-computation, no conormal or
  local-factorial input).
- Positivity: ample H meets nonzero effective divisors positively, with the
  no-Bertini Hilbert-polynomial route (Vakil Exercise 20.1.K; Stacks Lemma
  33.45.9/0BEV corroborates), supporting both RR and the Hodge index chain.
- Hodge index: threshold vanishing, effective-multiple lemma, the ample case
  (both the inequality and the equality case) and the general H·H > 0 case,
  following Vakil §§20.2.15–20.2.19 verbatim in structure; MIT Proposition 1
  and Corollary 1 supply the independent ample-case treatment.
- N¹ and the corollary: numerical equivalence, N¹_R(X) (possibly
  infinite-dimensional) and negative definiteness of h^⊥ for h = [H],
  H·H > 0. The index/signature normal form is stated conditionally on finite
  Picard number ρ(X) — Vakil's own wording ("we haven't proved it"); MIT
  Theorem 3 proves finiteness and signature through ℓ-adic cohomology, a route
  deliberately not imported locally. Negative definiteness is unconditional.
- B page: the two designed examples exhibit the H·H > 0 (not ample) case:
  H = ℓ on Bl_p P² with ℓ·E = 0 and H^⊥ = R·E, E² = −1; and H = ℓ + m on
  P¹×P¹ with H^⊥ = R(ℓ − m), (ℓ − m)² = −2, plus the visible equality case.
  The counterexample records that the form is not negative (semi)definite on
  all classes, delimiting the positivity hypothesis. This matches the design's
  B inventory exactly.

## Prerequisites and dependency scope

- Item level: 110 distinct external dependency ids (including one level through
  in-run items). 97 resolve to published item files, every one with
  `status: published`; the other 13 are in-run items and all lie inside this
  pair (batch 21). Zero unresolved ids; zero unresolved `[[...]]` links in the
  18 statements and proof strategies. No forward or circular reference found.
- Page level: A `requires` `intersection-products-on-smooth-projective-surfaces`,
  `cartier-and-weil-divisors-line-bundles-and-picard-groups`,
  `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes` and
  `smooth-projective-serre-duality-and-flag-variety-line-bundles` — all four are
  published pages on disk (`status: published`) and contain the exact suppliers
  used (`def-divisor-intersection-number-…`, `thm-surface-intersection-product-…`,
  `def-cartier-divisor`, `def-picard-group-scheme`,
  `thm-cartier-divisors-mod-principal-to-picard`, `thm-serre-vanishing`,
  `thm-cohomology-and-base-change`,
  `lem-cohomology-base-change-finite-free-criterion`,
  `thm-serre-duality-smooth-projective-variety-locally-free-sheaves`, …). B
  `requires` A only, scaffolded in-run.
- Cross-batch: the run dependency ledger has no edge into or out of batch 21,
  so this pair consumes and supplies nothing in-run outside itself; no other
  selected pair is blocked by it.
- Role in the library: AG-SURF-2 sits directly on the published AG-SURF-1 pair
  and the published coherent-cohomology and Serre-duality pages, and supplies
  the surface Riemann–Roch/Hodge-index interface for later surface work
  (classification, birational contractions, abelian surfaces). The design's
  two gates are closed: MIT 18.727 Lecture 2 is a genuine second full treatment
  (RR and the Hodge index ample case with proofs) and the V25 exercise details
  are written as local items with complete strategies.
- **Unmet prerequisites absent from both the published library and the current
  scaffold: none confirmed.** Three advisory observations, none requiring a
  scaffold addition for this pair:
  1. The corollary's `(1, ρ−1)` signature statement is deliberately conditional
     on finite Picard number; an unconditional statement needs a separate
     ℓ-adic-cohomology or Néron–Severi finiteness route (a future pair, not an
     enrichment of this one). The item and the conventions remark say so.
  2. RR/adjunction are stated for Cartier divisors/invertible sheaves, while
     Vakil's exercise says "Weil divisor"; nothing is lost because the
     published locally-factorial machinery
     (`thm-cartier-weil-isomorphism-locally-factorial`,
     `rem-regular-locally-noetherian-locally-factorial`,
     `thm-nonaffine-regular-local-ring-is-ufd`) transfers the statement, and
     the published intersection product is defined for Cartier divisors.
     Authors may optionally cite this transfer in the 3b proof.
  3. Placement of the three example lemmas on the B page is SCHEMA-permitted;
     a reviewer preferring them on the A page can re-home them without touching
     any dependency edge (already recorded in the batch notes).

## Checks run (2026-10-05)

| check | result |
|---|---|
| `node tools/manifest-deps.mjs …batch-21.pages.json` | 18 items, 0 errors |
| `node tools/content-policy.mjs --manifest-only …batch-21.pages.json` | 18 items, 0 errors, 0 warnings |
| `node tools/coverage-checklist.mjs …batch-21.coverage.json --require-destination` | 2 pages, 37 rows, 0 errors, 0 warnings |
| `node tools/source-fetch-check.mjs --coverage …batch-21.coverage.json` | 5/5 fetch-verified, 5/5 resolved |
| Own dependency-resolution scan (published ∪ in-run scaffold) | 110/110 resolved (97 published + 13 in-pair); 0 unresolved wikilinks |
| Step-1 readiness records for the 18 items | 18/18 `ready` |
| Live source re-fetch/hash comparison (Vakil, MIT, Stacks) | all three hashes match the coverage stamps; cited sections read |

## Uncertainty and caveats

- Vakil states the Hodge index theorem for irreducible smooth projective
  surfaces; the scaffold states it for integral smooth projective surfaces.
  For smooth projective surfaces over a field these describe the same objects
  (smooth ⟹ reduced, and integral ⟺ irreducible + reduced), and the integral
  phrasing matches the published AG-SURF-1 surface convention. No weakening.
- The MIT signature proof uses ℓ-adic cohomology and finite-dimensionality and
  is not the local proof route; the local claim (negative definiteness) is
  established by the Vakil-style ample-case reduction. No hidden dependence on
  unproved finiteness.
- No unresolved uncertainty and no potentially defective published item was
  found among the suppliers read for this review.

## Decision

**Sufficient.** The planned definitions, results and examples adequately cover
the intended subject (surface Riemann–Roch, adjunction, numerical
equivalence/N¹, Hodge index theorem, primitive-part negative definiteness, and
the designed examples/counterexample); the design promises are present and
unweakened; source coverage is closed by two independent full treatments plus
Stacks; and every prerequisite resolves to a published item or to this pair's
in-run scaffold. No enrichment or pair merger is needed; the owner may proceed.
