# Step 3a scope review — `parabolic-subgroups-and-double-coset-geometry`

- Run: `frontier-42-coxeter-32`; role alpha; label
  `step3a-pair-parabolic-subgroups-and-double-coset-geometry-f07d33d885e91196`.
- Pair: A `parabolic-subgroups-and-double-coset-geometry` / B
  `parabolic-subgroups-and-double-coset-geometry-examples` (batch 10, orders
  1736 / 1737, category `coxeter-groups`, design label CG-07, companion
  pointers both directions). Owned pair only; no scaffold, manifest, item,
  coverage, batch file or owner record was edited. Reviewed 2026-10-07.
- Decision: **sufficient**. Every designed definition, result and example of
  the CG-07 contract is present with its designed claims, the seven sources
  cover the planned claims at the cited locators, and the pair supplies the
  interface its planned consumers use. No merger or enrichment is required.
  No unmet prerequisite was confirmed. One defect found in a *sibling* pair
  is reported below for the owner's attention; it does not affect this
  decision.

## Evidence read

- Prose design: `research/plan-coxeter-groups-track.md` §CG-07 (L227–240;
  requires L229 = `coxeter-presentations-exchange-and-reduced-word-theorems`,
  `canonical-roots-signs-and-faithful-reflections`; four A contracts L235–238;
  B companion L240). Native prose:
  `library/coxeter-groups/parabolic-subgroups-and-double-coset-geometry.md`
  (27 lines) and `…-examples.md` (13 lines).
- Manifests: `research/frontier-42-coxeter-32-batch-10.pages.json` (5 A + 3 B
  items; all statements and strategies read), `research/plan-spec.json`
  entries 1736/1737 (empty item arrays, no conflict with the manifest),
  `…-scope-ledger.json` (pair listed as batch-10 in-run scope),
  `…-owner-authoring-direction.md` (no pair-specific instruction),
  `…-closeout-scope.json`. No step-3a receipt for this page existed before
  this review.
- Coverage and notes: `…-batch-10.coverage.json` (7 sources, 43 results),
  `…-batch-10.notes.md` (route decisions, five corrected defects of the
  attempt-1 draft, reading limits, S_5/S_4 checks),
  `…-batch-10.cross-batch-dependencies.json` (37 rows).
- Sources re-read in full today from the cited editions: Lusztig,
  *Hecke Algebras with Unequal Parameters* (arXiv:math/0208154v2), Prop. 9.15
  with the complete proof 9.16(a)–(g), printed pp. 44–46; Qi, *A Note on
  Parabolic Subgroups of a Coxeter Group* (arXiv:math/0512408), Lemma 3.1 with
  its complete proof and the surrounding Thm. 2.3 / Lemma 3.2 context,
  pp. 3–5; Davis, *The Geometry and Topology of Coxeter Groups* (author
  manuscript), Thm. 4.1.6(iii), Lemma 4.2.3 and §4.3 (Lemma 4.3.1 with proof,
  Def. 4.3.2, Lemma 4.3.3); Björner–Brenti, *Combinatorics of Coxeter Groups*,
  §2.4 (Prop. 2.4.4, Cor. 2.4.5(i)) and Exercise 15(a),(b) on printed p. 58.
  Michel, Stembridge and BKPS were not re-read today (see uncertainty).
- Consumers (role check): plan requires at L263 (CG-09), L294 (CG-11), L436
  (CG-18), L467 (CG-20), L483 (CG-22); item-level uses in batches 12, 16, 23,
  25, 26, 29, 30, 32. The consuming statements that name this pair's results
  were read: `thm-cg-bruhat-parabolic-projection-and-quotients` (12, uses the
  def. and the global-minimum clause (3)), `lem-cg-full-descent-element-
  characterizes-finite-type` (23, uses the parabolic root subsystem Φ_J =
  Φ ∩ V_J), `thm-cg-parabolic-growth-factorization-and-rationality` (25, uses
  W_I, D_L, D_R and the transversal factorization), `def-cg-spherical-nerve-
  coset-poset-and-davis-realization` (26, uses W_T and the support
  characterisation), `lem-cg-positive-span-of-transported-simple-roots` (29),
  `thm-cg-finite-subgroups-lie-in-spherical-parabolics` (30, uses W_T as
  spherical standard parabolic), `thm-cg-sortable-meet-join-closure-and-
  cambrian-quotient` (32).
- Checks re-run today: `node tools/coverage-checklist.mjs …batch-10.coverage.json
  --require-destination` → 1 page, 43 results, 0 errors, 1 warning
  (`coverage-low-yield`, 12/43 scaffolded — honest); `node tools/source-fetch-
  check.mjs --coverage …batch-10.coverage.json` → 7/7 fetch-verified, 7/7
  resolved; `node tools/manifest-deps.mjs …batch-10.pages.json` → 8 items,
  0 errors. Independent finite re-check (own script, `/tmp`, 2026-10-07): all
  8×8 = 64 and 16×16 = 256 subgroup pairs in S_4 and S_5, 281 and 2961 double
  cosets — unique descent-free minimum, its global minimality, the additive
  bijection W_I^K × W_J → W_I d W_J, the intersection lemma
  W_I ∩ dW_Jd^{-1} = W_K and the letter property of its clause (2) all hold
  with 0 failures, and the S_4 example's tables (sizes 18/6 and 4,4,4,4,4,2,2;
  K values; 2143 = 2134·1234·1243) were reproduced exactly.

## Inventory against the design, and the boundary

- A = 5 items. The four design contracts are present with their designed
  claims and roles: `def-cg-parabolic-quotient-and-two-sided-minima` (W_I,
  W^I, {}^IW, {}^IW^J with explicitly fixed left/right conventions; general
  parabolic vs reflection subgroup, no converse asserted),
  `thm-cg-parabolic-intersections-and-coset-factorization` (W_I ∩ W_J =
  W_{I∩J}; Φ_I = Φ ∩ V_I with the reflection dictionary; coset minima are
  *global* minima), `lem-cg-double-coset-intersection-parabolic`
  (W_I ∩ dW_Jd^{-1} = W_K for d ∈ {}^IW^J, K = I ∩ dJd^{-1}, with the
  explicit "simple root, never a non-simple positive combination" clause),
  `thm-cg-double-coset-unique-minimum-and-normal-form` (unique minimum,
  bijection W_I^K × W_J → W_I d W_J, length additivity, and clause (4)
  recording that arbitrary u ∈ W_I destroys uniqueness). The one addition,
  `lem-cg-double-coset-descent-reduction-and-minimality`, is a documented
  decomposition of the designed route (the design's own lemma is proved "by
  conjugated positive roots and minimality", and the minimality input is
  scaffolded as this lemma); it changes no claim and is load-bearing only for
  item 4.
- B = 3 items, exactly the design's three tasks: S_4 left/right minima and a
  double-coset decomposition (including the normal form of a single element
  and a second pair of parabolics where K varies), the infinite dihedral
  double-coset decomposition, and the two-conjugate-reflection subgroup that
  is parabolic but not standard — plus the design-consistent extra
  computation of an infinite-dihedral reflection subgroup that is not
  parabolic. The B page is a dependency leaf: no item or page anywhere in the
  run consumes any B item.
- Subject covered: standard parabolics and their intrinsic Coxeter structure;
  descents and one-/two-sided transversals with both factorizations and their
  length additivity; global minimality of coset minima; the intersection and
  root-subsystem theorem; parabolic intersections of conjugates at minimal
  representatives; unique minimal double-coset representatives with the
  additive udv normal form, its size formula and the necessity of the W_I^K
  restriction; the standard ⊊ parabolic ⊊ reflection-subgroup distinctions.
- Deliberate boundary statements (consistent with the design and with the
  consumers, hence not omissions): no arbitrary parabolic-intersection
  theorem (Qi Thm. 1.1 declined on the page with an explicit reason, since the
  page forms intersections only as W_I ∩ dW_Jd^{-1}); no maximal-length
  double-coset elements or Bruhat-interval structure of double cosets (Lusztig
  9.15(e), BKPS Prop. 2.7(c)); no flag-of-subsets product normal form (BB
  Cor. 2.4.6) and no weak-order ideal structure of the quotients (Stembridge
  Prop. 1.5–1.6); no Tits-cone/geometric realisation content, which is homed
  on CG-06 and CG-22 with the two deferred coverage rows pointing there.
- Optional, non-blocking enrichment candidate only: if a later consumer ever
  needs the maximal element of a finite double coset (Lusztig 9.15(e)), it
  would be a one-clause addition; no consumer in the current plan does.

## Prerequisites

- All 61 dependency edges of the 8 items resolve over 22 distinct suppliers:
  15 in-run (batches 2, 4, 7 and this page; none from a later batch) and 7
  published (`def-generated-subgroup`, `def-coset`, `def-group`,
  `def-natural-numbers`, `thm-well-ordering-principle`,
  `def-linear-combination-and-span`, `def-group-homomorphism`). Every `[[…]]`
  link used in the 8 statements and strategies resolves, and the used clauses
  were verified in the current supplier statements: HH-11 (1)–(3) (support,
  intrinsic parabolic presentation and both transversal factorizations),
  HH exchange/deletion (1),(3), the dihedral lemma (3),(4),(7) (exact orders
  and ambient reducedness of alternating words), the batch-4 canonical
  reflection homomorphism and descent lemma (1),(3),(4), and the batch-7 root
  sign (2), root-length criterion (1) and root-reflection/strong-exchange
  (1)–(3) clauses.
- Deferred coverage rows have live destinations: Michel Lemma 5.11 → the
  disjoint-chambers clause (2) of `thm-cg-root-length-criterion-and-
  faithfulness` (batch 7); Qi Thm. 2.3(a),(b) → `thm-cg-dual-chamber-
  intersections-and-point-stabilizers` and `thm-cg-tits-cone-interior-and-
  local-finiteness` (batch 9). Both are present in those manifests.
- No confirmed unmet prerequisite: I found no claim used by these items that
  is absent from both the published library and the current 32-batch
  scaffold. Residual uncertainty is limited to the fact that the suppliers
  themselves are scaffolds whose proofs begin in Step 3b; the clauses quoted
  above were checked at statement level only.

## Cross-pair observation (outside the owned pair; for the owner's attention)

`lem-cg-spherical-coset-inclusion-and-intersection` (batches 26, pair
`spherical-parabolic-cosets-and-the-davis-complex`) clause (3) second sentence
is false as stated: "wW_T ∩ w'W_{T'} ≠ ∅ if and only if wW_{T∩T'} =
w'W_{T∩T'}". Counterexample in S_3 with s_1 = (1 2), s_2 = (2 3), T = {s_1},
T' = {s_2}, w = 1, w' = s_1s_2: wW_T = {1, s_1}, w'W_{T'} = {s_1s_2, s_1},
so the intersection is {s_1} ≠ ∅, but wW_{T∩T'} = {1} while w'W_{T∩T'} =
{s_1s_2}. The first sentence of the same clause (intersection = uW_{T∩T'} for
u in it) is correct and is the statement the Davis-cell gluing actually uses
(`thm-cg-davis-complex-cell-incidence-and-stabilizers` cites only that); the
strategy for the lemma proves only the first sentence. Davis Thm. 4.1.6(iii)
(quoted as the item's source) states wW_T ⊆ w'W_{T'} / = iff T ⊆ T' / = and
w^{-1}w' ∈ W_{T'}, and says nothing of the false form; the correct criterion
for nonempty intersection is w^{-1}w' ∈ W_T·W_{T'}. Recommended owner action:
have the owning pair delete the false "moreover" sentence or replace it with
the correct criterion before Step 3b. I did not edit that pair's scaffold.

## Minor record notes (not scope-affecting)

1. The batch-10 notes' disposition tally says "18 absorbed inline, 1 deferred";
   the coverage file itself holds 12 included, 16 inline, 13 out-of-scope,
   2 deferred (43 total). The declared totals (12 included / 43 harvested) are
   correct; only the prose tally is stale.
2. The definition item's `justified_by` names two later items of the same page
   (`thm-cg-parabolic-intersections-and-coset-factorization`,
   `thm-cg-double-coset-unique-minimum-and-normal-form`); this matches the
   prose design ("Definition justification: thm-…"), and the definition's
   substantive claims are quoted from the earlier HH-11 clauses, so this is
   the designed encoding, not a forward prerequisite.

## Uncertainty, honestly stated

- I re-read in full the arguments that carry the pair's distinctive claims
  (Lusztig 9.15–9.16, Qi Lemma 3.1, Davis §4.3, BB §2.4 and Exercise 15) and
  reproduced the finite content of both pages computationally, but I did not
  re-read Michel, Stembridge or BKPS today, so I do not exclude a further
  relevant statement elsewhere in their read ranges; the step-1 notes record
  where each was read.
- This is a scope decision, not an item approval or a proof check. Every
  batch-10 item is still a scaffold awaiting Step 3b authoring; nothing here
  certifies a proof, and the added lemma's decomposition claim is judged only
  by its design compatibility.

## Next action

Scope receipt recorded with `tools/step3-decisions.mjs record-scope`
(decision `sufficient`) as
`research/frontier-42-coxeter-32-step3a-review-parabolic-subgroups-and-double-coset-geometry.json`.
Owner: no scope amendment, merge or enrichment needed for this pair;
Step-3b authoring may proceed on the current scaffold, after the sibling-pair
observation above is routed to the owning pair. Report path:
`research/frontier-42-coxeter-32-step3a-pair-parabolic-subgroups-and-double-coset-geometry.md`.
