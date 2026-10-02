# Step 3a scope review — `smooth-proper-curves-divisors-genus-and-ramification`

- Run: `frontier-37-owner-30`, batch 6, role alpha (step 3a scope review).
- A page: `smooth-proper-curves-divisors-genus-and-ramification`.
- B page: `smooth-proper-curves-divisors-genus-and-ramification-examples`.
- Scope decision: **sufficient** (see `research/frontier-37-owner-30-step3a-review-smooth-proper-curves-divisors-genus-and-ramification.json`).
- This report decides scope only. It is not an item approval, proof review, or owner record.

## Inputs read (exact paths)

- Design: `research/plan-algebraic-geometry-track.md` AV-23, lines 1572–1721
  (A inventory line 1589, B inventory line 1692, ordering note line 1709).
- Contract: `research/plan-spec.json` rows for both page ids (order 366.085/366.086,
  empty item lists; the A row's nine `requires` match the manifest);
  `research/frontier-37-owner-30-scope-ledger.json`.
- Manifest: `research/frontier-37-owner-30-batch-6.pages.json` (A: 36 items, B: 12 items).
- Coverage: `research/frontier-37-owner-30-batch-6.coverage.json` (112 harvest rows).
- Construction record: `research/frontier-37-owner-30-batch-6.notes.md`.
- Cross-batch edges: `research/frontier-37-owner-30-batch-6.cross-batch-dependencies.json`
  (49 reviewed edges, all open against batch-5 draft suppliers).
- Owner direction: `research/frontier-37-owner-30-operator-record.md` (AV-23 local
  normalization/model route; 2026-09-30 05:23 UTC batch-6 owner repair).
- Downstream destination manifests: batches 5, 7, 8 `pages.json`/`coverage.json`.
- Source spot checks: Stacks tags 0C1F and 0C1D fetched live on 2026-09-30;
  Vakil §19.7 checked in the 2025 PDF text.

## Design vs delivered scaffold

- Every one of the 45 design rows (33 A + 12 B) is present in the manifest:
  0 design ids missing from either page, and the B page is exactly the 12 design leaves.
- The A page adds three owner-visible local items, all recorded in the batch notes and
  the operator record: `def-rational-map-integral-schemes`,
  `lem-torsion-quotient-invertible-sheaves-effective-divisor` (construction-pass additions)
  and `lem-curve-different-local-support-and-index-bound` (owner-directed ramification
  repair). None is a scope expansion; each supplies a locally needed interface.
- Delivered counts: A = 15 definitions, 10 theorems, 9 lemmas, 2 corollaries;
  B = 9 examples, 3 counterexamples. All statements are substantive (no placeholders).

## Subject coverage (definitions, results, examples)

- Curves and function fields: curve definition; affine-closure normalization gluing;
  rational-map extension from smooth sources to proper targets; function-field
  equivalence and smooth projective models; birational smooth proper curves are
  isomorphic; local rings of smooth curves are DVRs.
- Divisors and linear systems: divisors as finite sums of closed points with residue
  degree; Cartier–Weil agreement on curves; `L(D)` and its section/divisor bijection;
  complete linear systems; base points; base-point-free linear system morphism to `P^r`.
  The general divisor formalism (degree, principal divisors, linear equivalence,
  `O(D)`, degree on Pic) is consumed from batch 5, which is declared and in-run.
- Genus: arithmetic genus `h^1(O_C)` and `H^0(O_C)=k`; canonical bundle and canonical
  class; geometric genus of singular curves via the normalization; delta invariant;
  normalization lowers arithmetic genus by the delta sum; plane-curve arithmetic genus
  `(d-1)(d-2)/2` and its geometric-genus delta correction.
- Ramification: degree of a nonconstant morphism and finiteness/surjectivity; fibre
  degree-sum formula; ramification index; separate index and differential ramification
  loci with the imperfect-field caveat; different divisor via `Omega_{C/D}` with the
  local support/length/tameness lemma; canonical-bundle ramification formula
  `omega_C ≅ f^*omega_D ⊗ O_C(R_f)`; inseparability counterexample.
- B-page examples/counterexamples cover `P^1` linear systems, conics, hyperelliptic
  double covers, nodal/cuspidal cubics, plane quartics, tame power maps, divisor degree
  over `R`, base points, the singular-source extension failure, the inseparable
  Riemann–Hurwitz failure, and the degree-zero bundle with no section.

## Deferred subjects, with destinations verified on disk

The design itself rehomes the numerical Riemann–Hurwitz formula, the unramified-cover
genus relation, and the degree-`2g`/`2g+1` base-point-freeness and very-ampleness
theorems to AV-25, and `deg K_C = 2g-2`, `h^0(omega_C)=g`, Serre duality, and full
Riemann–Roch to batches 7–8. I verified the destinations exist in this run's current
manifests:

- batch 8 A: `thm-riemann-hurwitz-complete`, `cor-unramified-cover-curves-genus-complete`,
  `thm-degree-two-g-line-bundle-basepoint-free`, `thm-degree-two-g-plus-one-line-bundle-very-ample`,
  `cor-canonical-degree-two-g-minus-two`, `cor-h0-canonical-differentials-genus`,
  `thm-serre-duality-curves-line-bundles`, `thm-canonical-map-nonhyperelliptic-curve`;
- batch 7 A: `thm-riemann-roch-euler-characteristic-curve`,
  `lem-riemann-roch-space-finite-dimensional`, `cor-riemann-theorem-large-degree`.

The four rehomed theorem ids carry batch-6 items in their `deps`
(`thm-canonical-bundle-ramification-formula`, `def-different-divisor-curve-map`,
`lem-curve-different-local-support-and-index-bound`, `def-divisor-smooth-proper-curve`,
`thm-cartier-weil-divisors-curves-agree`), so the promise chain is closed inside the run
as of this review.

## Prerequisites and dependency scope

- 8 of the 9 `requires` pages are published in `library/`; the ninth,
  `cartier-and-weil-divisors-line-bundles-and-picard-groups`, is run batch 5
  (order 366.079), scaffolded with 36 A + 10 B items.
- All 19 batch-5 supplier ids consumed by batch-6 items exist in the batch-5 manifest
  (checked id by id), and all 49 cross-batch edges are recorded as open-until-authored
  in the batch-6 cross-batch file — expected for a draft supplier, not a scope defect.
- `node tools/manifest-deps.mjs` over all 30 batch manifests: 0 errors (batch 6: 48 items).

## Source coverage

- Four independent treatments, each with a full-text fetch stamp: Stacks *Algebraic
  Curves* (tag 0BRV; 745,082 bytes, SHA-256 prefix `c4e3d4c0fc533a3d`), Vakil 2025
  (9,643,655 bytes, `d07177aa0317c134`), Fulton (706,612 bytes, `937a5c2a962b5de1`),
  Gao–Zhang (796,444 bytes, `ffe0b153244db990`). 112 harvest rows: 19 included,
  44 inline, 23 deferred, 18 out-of-scope, 8 already published.
- `node tools/coverage-checklist.mjs --require-destination` on batch 6: 0 errors,
  1 advisory (`coverage-low-yield`, 19/112 scaffolded) that asks alpha to confirm the
  declines; the 44 inline dispositions are the largest decline class.
- Spot checks against live sources: Stacks 0C1F (53.12.4) states
  `d_x = length(O_{X,x}(Omega))`, `d_x >= e_x - 1`, equality iff tame — matched by
  `lem-curve-different-local-support-and-index-bound` and the canonical-formula item;
  Stacks 0C1D (53.12.2) states the numerical formula under generically-etale hypotheses
  and `k = H^0(O_X) = H^0(O_Y)` — the local inputs are on this page (`thm-h0-structure-sheaf-proper-curve`)
  with the numerical statement correctly deferred.

## Residual uncertainty and owner attention (no action taken here)

1. The 23 deferred and 44 inline rows were not each read one by one in this dispatch;
   I confirmed the scope-critical ones and the disposition categories. Full harvest
   confirmation remains the step-5 alpha review.
2. One disposition label reads imprecisely: Vakil §19.7.1–19.7.4 ("canonical embedding
   of nonhyperelliptic curves; plane quartics as genus-3 canonical curves") is marked
   `inline` into the batch-6 B item `ex-plane-quartic-genus-three-smooth`, whose
   statement covers only the quartic-to-genus-3 direction. The canonical-curve content
   is scaffolded downstream (batch 8 `ex-plane-quartic-canonical-hyperplane`,
   `thm-canonical-map-nonhyperelliptic-curve`), so nothing is lost; the row would read
   more accurately as deferred to batch 8. Flagged for the owner; no file edited.
3. This decision's receipt is bound to the current batch-6 A+B manifest hash. Any later
   item-list, title or statement change voids it and requires a fresh 3a decision.
4. The downstream promise closure depends on batch 8's current scope; it was verified
   today, but it is not part of the hashed receipt.

## Decision

`sufficient`: the scaffolded A/B pair carries all definitions, results, examples and
counterexamples the AV-23 design and the library role require, its deferrals name
in-run destinations that exist on disk, and no omitted topic warrants enrichment or a
pair merger.
