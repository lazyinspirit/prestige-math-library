# Step 3a scope review — `bruhat-decomposition-and-flags-over-finite-fields`

- Run: `frontier-35-ten-categories`; role alpha; label
  `step3a-pair-bruhat-decomposition-and-flags-over-finite-fields-3039517e47c4591b`.
- Pair: A `bruhat-decomposition-and-flags-over-finite-fields` / B
  `bruhat-decomposition-and-flags-over-finite-fields-examples` (batch 11,
  orders 510.053 / 510.054, category `representation-theory`, companion
  pointers both directions). Owned pair only; no scaffold, manifest, item,
  coverage, batch file or owner record was edited. Reviewed 2026-09-24.
- Decision: **sufficient** for the intended subject as designed. Every planned
  definition, result and example of the RG-12 contract is present, the source
  coverage supports each designed claim at the cited locators, and the pair
  supplies the interface its planned consumers need. No merger or enrichment is
  required; four boundary statements and one optional, non-blocking enrichment
  candidate are recorded below for the owner's information only.

## Evidence read

- Prose design: `research/plan-representation-theory-groups-track.md` §RG-12
  (L745–792): A page L747, requires L749–750, source backing L752–755,
  A inventory L757–775 (17 items), hard proof plan L777–782, B page L784,
  B inventory L788–792 (5 items). Index row L43 (“BN-pairs, Bruhat cells, flag
  permutation representations”); source table L2241–2242 (Dudas–Michel
  §§8–10, Taylor Bruhat/Harish–Chandra sections) and L2289 (pair source
  assignment); harvest map RG-12/H1–H5 L2383–2387; coverage-disposition table
  L2513 (arbitrary split-BN-pair reductive-group material is “inline”: “RG-12
  specializes the machinery to $GL_n(\mathbb F_q)$, the group commissioned”);
  page-requires table L2680; planned-inventory count §15.5 L2816 (“RG-12 22”
  = 17 A + 5 B).
- Consuming designs (role check): RG-13
  `principal-series-representations-of-gl-n-over-a-finite-field`
  (same file L794–851; “Requires: RG-8–RG-12” L798–799; hard proof plan L835
  “Use RG-12’s parabolic Mackey formula to calculate Hom support and standard
  intertwiners”; RG-13/H2 L2389 places the flag-permutation lemma, the Hecke
  basis and the cell-multiplication lemmas on RG-13). KL-1
  `kazhdan-lusztig-bases-polynomials-and-cells`
  (`research/plan-kazhdan-lusztig-track.md` L42–49), which consumes this page
  and fixes the boundary explicitly: “The permutation-statistics page is an
  already-published supplier of the rank-inequality Bruhat order; the
  finite-field Bruhat page does not silently supply that order.”
  `research/plan-spec.json` consumer entries: RG-13 (order 510.055) requires
  this A page directly; KL-1 (order 783) requires it transitively.
- Manifests: `research/frontier-35-ten-categories-batch-11.pages.json` A page
  L479–1074 (19 items, L481 id), B page L1076–1239 (5 items, L1078 id). A-page
  `requires` (L486–492) = `group-actions-and-cayleys-theorem`,
  `induced-representations-and-frobenius-reciprocity`,
  `matrices-and-the-matrix-of-a-linear-map`,
  `determinants-of-matrices-over-a-commutative-ring`,
  `gaussian-elimination-and-row-reduction`; B page requires A only. All five
  prerequisite pages are published (`library/abstract-algebra/…`,
  `library/linear-algebra/…`).
- Batches and checks: `research/frontier-35-ten-categories-batch-11.notes.md`
  (four documented design-vs-scaffold corrections; the two load-bearing local
  Mackey lemmas; the published-supplier list; batch-11 checks);
  `research/frontier-35-ten-categories-batch-11.coverage.json` (this A page: 21
  `included`, 2 `inline`, 4 `out-of-scope`, 2 `deferred` source rows — both
  deferred rows name destination
  `principal-series-representations-of-gl-n-over-a-finite-field` with reasons —
  plus 10 canonical local-specialisation rows; 39 dispositions total);
  `research/frontier-35-ten-categories-batch-11.cross-batch-dependencies.json`
  = `[]` (no in-run batch consumes this pair; only the B page requires the A
  page).
- Owner decisions: `research/frontier-35-ten-categories-owner-authoring-direction.md`
  names no instruction for this pair (only the batch-8 deferral and the Easton
  pseudointersection item); `frontier-35-ten-categories-deferred-pairs.json`
  and `…-deferred-items.json` do not list it; `…-scope-ledger.json` lists the
  pair as batch-11 in-run scope. No step-3a scope receipt existed for this page
  before this review (`research/frontier-35-ten-categories-step3a-review-*.json`).
- Checks re-run today, whole-repo tools:
  `node tools/coverage-checklist.mjs research/frontier-35-ten-categories-batch-11.coverage.json`
  → 2 pages, 71 harvested results, 0 errors, 0 warnings;
  `node tools/source-fetch-check.mjs --coverage research/frontier-35-ten-categories-batch-11.coverage.json`
  → 4/4 sources fetch-verified, 4/4 resolved, 0 documented drops;
  `node tools/manifest-deps.mjs research/frontier-35-ten-categories-batch-11.pages.json`
  → 40 items, 0 errors;
  `node tools/validate-plan.mjs /tmp/spec-with-b11.json` (plan-spec plus the
  batch-11 inventories spliced into the four owned pages) → 0 ERRORs, no
  undeclared-prereq, forward-ref, item-cycle, page-cycle, size, companion or
  duplicate-id finding on either page of this pair. Hygiene: all 24 pair item
  ids are new (absent from `items/`, from every `library/**/*.md` page and from
  every other run manifest), and all 20 direct external supplier ids are
  published items homed on library pages.
- Sources re-read directly today (complete relevant arguments, not only the
  evidence bundle), fetched to `/tmp/dm.pdf` and `/tmp/taylor.pdf`:
  - Dudas–Michel, *Lectures on Finite Reductive Groups and Their
    Representations*: printed p. 18 (Remark 4.4 relative position and
    `(B,N)`-pair formulation; Example 4.5 southwest-rank criterion with the
    invariants of the bottom-left ranks `m_{i,j}` on rows `i,…,n` and columns
    `1,…,j`, the permutation-matrix rank formula
    `|{k ≤ j : σ(k) ≥ i}|`, and the intersection-dimension formula
    `dim(F_i∩F'_j)/(dim(F_{i-1}∩F'_j)+dim(F_i∩F'_{j-1}))`; Lemma 4.7
    `BwB = UTwU_w` with `|U_w| = q^{ℓ(w)}`); printed pp. 35–39 (Example 9.1
    invariants/coinvariants of permutation modules and the amalgamated product;
    Definition 9.2 and Remark 9.3 parabolic induction as
    `Ind_P^G ∘ Inf_L^P` and restriction as `U^F`-invariants; Proposition 9.4
    exactness and biadjunction; Proposition 9.5 transitivity for nested Levis;
    Theorem 9.6 parabolic Mackey with its proof through Lemma 9.11; Lemmas 9.9,
    9.10, 9.11 parabolic double cosets `P\G/Q ≅ W_L\W/W_M` and the biset
    bijection `L/(L∩{}^xV) ×_{L∩{}^xM} ({}^xM∩U)\{}^xM ≅ U\PxQ/V`);
    printed pp. 42–44 (Lemma 10.3 existence of a cuspidal pair by a minimal Levi
    plus exactness and transitivity; Definition 10.5 Harish–Chandra series;
    Proposition 10.6 uniqueness over a field, proved by Mackey plus projective
    covers; §10.3 splitting result that the coverage defers to RG-13).
  - Taylor, *Finite Reductive Groups*: printed p. 38 (Exercise 4.28 finite
    Bruhat decomposition `G = ⊔_{w∈W} BẇB`), p. 42 (Definition 5.2
    Harish–Chandra induction/restriction, Exercise 5.3 adjunction, Exercise 5.4
    `Ind_P^G ∘ Inf_L^P`, Lemma 5.5 independence of the parabolic, Definition 5.7
    cuspidality, Proposition 5.9 existence plus conjugacy-uniqueness of minimal
    cuspidal support), p. 51 (Mackey-formula statement (†) and Theorem 5.34).

## Inventory against the design, and the boundary

- A = 19 items. The 17 design rows L759–775 are present with their designed
  content and in the design’s order up to one insertion: the two local lemmas
  `lem-standard-parabolic-double-cosets-are-young-double-cosets` (DM Lemma 9.9)
  and `lem-parabolic-mackey-biset-splitting-in-gl-n` (DM Lemmas 9.10–9.11) sit
  immediately before the parabolic Mackey theorem, and Mackey precedes
  transitivity, whose proof uses it. Both additions are documented in
  `…-batch-11.notes.md` as load-bearing proof joints, carry Dudas–Michel
  locators in the coverage file, and add no subject beyond the design.
- The four design corrections recorded in `…-batch-11.notes.md` are realized in
  the manifest and preserve the designed claims: southwest (not northwest)
  ranks for the cell criterion and the relative-position formula (design L765;
  DM Example 4.5, re-verified above); the Weyl group defined through the
  monomial subgroup `N` with `N/T ≅ S_n` (design L763), which stays correct at
  `q = 2` where the diagonal torus is trivial and `N_G(T) = G`; fixed-Levi
  parabolic independence asserted as an isomorphism over `ℂ` and explicitly
  “need not be canonical” (design L772), matching DM Lemma 5.5/Taylor Lemma 5.5
  and DM Theorem 10.1; and the tableau-side dominance correction, which belongs
  to the sibling Young pair, not this one.
- B = 5 items: exactly the design leaves L788–792 (the `n = 1`/`P_{(n)} = G`
  endpoints, the `GL_2` cell enumeration on `ℙ¹(𝔽_q)`, the six `GL_3` relative
  positions, the Grassmannian `G/P_{(r,n-r)}`, and parabolic induction of the
  trivial Levi module as functions on partial flags).
- Subject covered: complete flags as a transitive `G`-set `G/B`; partial flags
  and standard parabolics for positive compositions, with `P_{(n)} = G` and
  `P_{(1,…,1)} = B`; the `B = T⋉U` and `P_α = L_α⋉U_α` matrix models; the
  monomial Weyl group with inversion length; existence, disjointness and
  uniqueness of the Bruhat cells (`G = ⊔_{w∈S_n} BwB`, rank-matrix
  determination, `|BwB/B| = q^{ℓ(w)}`, relative position of flag pairs); the
  Harish–Chandra induction/restriction functors with exactness, adjunction,
  transitivity and fixed-Levi independence; the parabolic Mackey formula with
  its double-coset and biset inputs; and cuspidal pairs, Harish–Chandra series
  and existence/uniqueness of cuspidal support.
- Role satisfied: RG-13 needs the flag-permutation identification `G/B ≅` flags,
  the cell cardinalities, `B = T⋉U`, the adjunction and transitivity, and the
  parabolic Mackey formula; all are on this A page, and the deferred coverage
  rows (DM §10.3 endomorphism algebras; Taylor pp. 43–45 spherical Hecke
  algebra) are exactly RG-13’s material. KL-1 needs this page together with
  RG-13 and takes the Bruhat order from already-published items, not from here.
- Deliberate boundary statements, each consistent with the design and with the
  consumers, and therefore not omissions:
  1. No BN-pair/Tits-system axioms, no general finite-reductive-group
     statements, and no Bruhat decomposition for abstract BN-pairs: the plan
     records this as “inline” at L2513 and the design’s hard proof plan
     (L781–782) forbids importing general finite reductive groups where
     Gaussian elimination suffices for `GL_n`.
  2. No Bruhat order, no cell-closure order: owned by the published
     permutation-statistics page and `def-bruhat-order-on-the-symmetric-group`;
     KL-1 L47–49 states explicitly that this page does not supply it.
  3. No Hecke algebra, no cell-multiplication rule
     (`BwB·BsB ⊆ BwsB ∪ BwB`) and no endomorphism algebras: RG-13’s items
     (H1–H4, L2388–2391) own them; the two deferred coverage rows name RG-13 as
     destination.
  4. No algebraic-geometric flag-variety theory (no projective variety,
     Schubert varieties, cohomology): excluded by the design’s requires
     (L749–750) and by the run’s deferral of the separate flag-variety pair.
- Optional, non-blocking enrichment candidates (the owner may ignore them;
  their absence does not affect sufficiency, since both are immediate
  corollaries of items already planned): a B-page computation of `|BwB/B| =
  q^{ℓ(w)}` in rank ≥ 2 (e.g. the longest element of `GL_3`, `q^3`), and an
  A-page corollary stating the `B`-orbit (Bruhat-cell) decomposition
  `G/B = ⊔_{w∈S_n} BwB/B`. I am not proposing a merger: the A page is 19 items
  (well inside the 60-item ceiling) and its two halves are a single design unit
  that RG-13 consumes as one interface.

## Uncertainty, honestly stated

- I verified at the cited locators that each source statement the manifest
  relies on exists and says what the coverage claims, reading Dudas–Michel
  pp. 18, 35–39, 42–44 and Taylor pp. 38, 42–43, 51 in full including proofs.
  I did not read all of Dudas–Michel §§8–10 or all of Taylor pp. 36–45, so I do
  not exclude a further relevant statement elsewhere in those ranges; I read
  the complete arguments for every claim mapped to this pair.
- I did not check the mathematical correctness of the source statements
  themselves beyond the local argument sketches above (e.g. I re-derived the
  southwest-rank invariance and the `|U_w| = q^{ℓ(w)}` count, and traced
  Proposition 10.6’s use of Mackey and projective covers), and I did not assess
  proof feasibility. Proof-level judgement is Step 3b’s remit; a scope decision
  is not an item approval.
- Ten coverage rows are classified as “canonical local matrix specialization”,
  i.e. they are the scaffold’s own elementary `GL_n(𝔽_q)` formulations
  (`B = T⋉U`, `G/B ≅` flags, `W = N/T ≅ S_n`, the Gaussian-elimination pivot,
  relative position, and the five B examples) rather than transcribed results;
  I checked these at statement level and against the finite-case arguments, not
  against a printed proposition of the same name.
- If the owner intends this page to be the library’s general treatment of
  BN-pairs rather than the commissioned finite-`GL_n` development, then the
  missing Tits-system axioms and general reductive-group statements would be
  omissions and an enrichment would be the remedy. I did not record
  `insufficient` because the controlling design (item table L757–792), its
  hard proof plan (L777–782), the plan’s own disposition (L2513 “inline”) and
  §15.5’s count (L2816 “RG-12 22” = 17 A + 5 B) all fix the finite-`GL_n`
  scope, and every planned consumer is served by that scope.

## Minor record notes (not scope-affecting; no owner action required)

1. Proof provenance: 17 of 19 A items and all 5 B items are labelled
   `ai-altered` for the proof although the design table marks those proofs
   `literature-derived`. That is the honest consequence of the design’s own
   instruction to re-derive the statements in finite block-matrix terms instead
   of citing the BN-pair proofs; the labels will be settled by the Step-3b
   authors, and no claim or hypothesis is affected.
2. Design text L765 still says “Northwest-rank data”; the manifest statement
   (“rows `i,…,n` and columns `1,…,j`”, i.e. southwest) is the correct one, as
   Dudas–Michel Example 4.5 confirms. The correction is recorded in
   `…-batch-11.notes.md`; the stale design wording is not used by any item.
3. Design row L768 writes the cell size as `|BwB/B| = q^{ℓ(w)}` while the
   manifest writes “the number of right `B`-cosets in `BwB`”. These are the
   same count (the right-`B`-cosets inside `BwB`, equivalently the `B`-orbit of
   `wB` in `G/B`), so the RG-13 coefficient use is unaffected.

## Next action

Scope receipt recorded:
`research/frontier-35-ten-categories-step3a-review-bruhat-decomposition-and-flags-over-finite-fields.json`
(decision `sufficient`, tools/step3-decisions.mjs record-scope). Owner: no
scope amendment, merge or enrichment needed; Step-3b authoring of this pair may
proceed on the current scaffold.
