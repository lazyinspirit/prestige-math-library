# Step 3a scope review — `spherical-parabolic-cosets-and-the-davis-complex`

- Run: `frontier-42-coxeter-32`; role alpha; label
  `step3a-pair-spherical-parabolic-cosets-and-the-davis-complex-29dbf2de6132bed9`.
- Pair: A `spherical-parabolic-cosets-and-the-davis-complex` / B
  `spherical-parabolic-cosets-and-the-davis-complex-examples` (batch 26,
  orders 1768 / 1769, category `coxeter-groups`, design label CG-22,
  companion pointers both directions). Owned pair only; no scaffold, manifest,
  item, coverage, batch file, plan or owner record was edited. Reviewed
  2026-10-07.
- Decision: **sufficient**. The four CG-22 design contracts
  (`research/plan-coxeter-groups-track.md` L487–L492) are all present with
  their designed claims, the three documented local additions carry exactly the
  designed proof routes, the B page delivers exactly the designed companion,
  and the pair supplies every claim its one in-run consumer pair (CG-27,
  batch 30) cites. No merger or enrichment is required and no unmet
  prerequisite was confirmed.
- Required Step-3b scaffold repairs are listed in “Defects found” below with
  exact counterexamples. They are correctness defects in the scaffold's own
  claims/proof routes, not omissions of the designed scope; because four of
  them edit *statements*, the engine will (correctly) require an owner
  `proceed` for the resulting scope after they are applied.

## Evidence read

- Prose design: `research/plan-coxeter-groups-track.md` §CG-22 (L481–L495:
  `requires` L483 = the three earlier Coxeter pages plus
  `cw-complexes-and-cellular-homology`,
  `simplicial-subdivision-and-simplicial-approximation`,
  `simplicial-complexes-and-simplicial-homology`,
  `hurewicz-whitehead-freudenthal-and-cw-approximation`; four local supplier
  contracts L489–L492; B companion L494). Native prose:
  `library/coxeter-groups/spherical-parabolic-cosets-and-the-davis-complex.md`
  and `…-examples.md`. `research/plan-spec.json` entries 1768/1769 agree with
  the design in title, category, companion and `requires`; the design inventory
  `research/coxeter-scaffold/inventory.json` CG-22 lists exactly the four
  contracts.
- Manifests: `research/frontier-42-coxeter-32-batch-26.pages.json` (A: 7 items,
  B: 5 items; all statements and strategies read in full),
  `…-scope-ledger.json` (pair listed as in-run scope, batch 26),
  `…-owner-authoring-direction.md` (no pair-specific instruction),
  `…-owner-scope.json` (pair part of the authorized 30 Coxeter pairs).
- Coverage and records: `…-batch-26.coverage.json` (50 harvested rows,
  including the page-level `canonical` row; dispositions 35 included / 4
  inline / 7 out-of-scope / 1 already-published / 2 deferred),
  `…-batch-26.notes.md` (route decisions, two post-recording A5/A6 formula
  corrections, reading limits, dependency verification),
  `…-batch-26.cross-batch-dependencies.json` (39 reviewed edges),
  `…-batch-26-url-liveness.json` (3/3 live).
- Sources re-read today from the cited editions (downloads hashed; the
  sha256_16 of each file matches the batch's fetch stamp):
  Davis, *The Geometry and Topology of Coxeter Groups* (author manuscript,
  stamp `ccefbb950fdcfce9`): Theorem 4.1.6 with proof via Cor. 4.1.2, §7.1
  (Definition 7.1.1, the poset `WS` paragraph with (7.1)), §7.2 (Lemma 7.2.3
  with proof, Theorem 7.2.4, `K` as the cone on the barycentric subdivision of
  `L`), §7.3 (Definition 7.3.1, Examples 7.3.2, Lemma 7.3.3 with proof, “The
  General Case”, Proposition 7.3.4, Lemma 7.3.5 with proof), §2.2 (the Cayley
  2-complex definition, whose relator set `R'` excludes the words `s` and
  `s²`, and Proposition 2.2.3); Boyd, *Homology of Coxeter and Artin groups*
  (stamp `32d53ca3f9c0fc6a`): Definitions 1.3.1, 1.3.4, 1.3.10, Lemma 1.3.2,
  Example 1.3.11; Davis MSC slides (stamp `aecaecc666d60d38`): Theorem 2.19
  (i)–(xi) and Proposition 2.21. Not re-read today: Bridson–Haefliger,
  Bowditch and the further references listed for CG-22 in the inventory — the
  batch did not use them, and the items' arguments route through the three
  sources above plus in-run scaffolds (see uncertainty).
- Consumers (role check): `plan-spec.json` gives exactly two pages requiring
  this A page — the B companion and CG-27
  `davis-cat-zero-geometry-and-finite-subgroup-fixed-points` (batch 30). Every
  item-level consumer is in batch 30
  (`lem-cg-davis-angular-vertex-link-is-metric-flag-nerve`,
  `thm-cg-finite-rank-davis-moussong-cat-zero-theorem`,
  `thm-cg-finite-subgroups-lie-in-spherical-parabolics` and three B-area
  examples). The clauses they cite were read: the link lemma uses the cell
  face poset, projection and face isometry (A4(1)–(3)), the `H`-description
  (A3(5)) and the cellulation/stabilizer clauses (A5(1),(2)); the CAT(0)
  theorem uses the gluing structure, the cell-interior partition, the chain
  metric and `thm-cg-davis-complex-is-simply-connected` (A7); the
  finite-subgroup theorem uses the point-stabilizer formula (A5(2)) and
  A2(1),(2). All of these are present. The B page is a dependency leaf: no
  item anywhere in the run consumes a B item.

## Checks re-run today

- `node tools/coverage-checklist.mjs …batch-26.coverage.json
  --require-destination` → 2 pages, 50 harvested, 0 errors, 0 warnings.
- `node tools/source-fetch-check.mjs --coverage …batch-26.coverage.json` →
  6/6 fetch-verified, 6/6 resolved; url-liveness file 3/3 live.
- Independent finite re-check (own script in `/tmp`, 2026-10-07) in the
  dihedral systems `D_m`, m = 3,4,5,6, over all `w,w' ∈ W` and all
  `T,T' ∈ {∅,{s},{t},S}`: the corrected intersection criterion
  `wW_T ∩ w'W_{T'} ≠ ∅ ⟺ w^{-1}w' ∈ W_T W_{T'}` holds in 576/576, 1024/1024,
  1600/1600 and 2304/2304 cases; the corrected cell-meeting characterisation
  `vW_V ∩ wW_T ≠ ∅ ⟺ v ∈ wW_T W_V` holds with 0 failures; the corrected
  properness set `{w : w(uW_T) ∩ vW_{T'} ≠ ∅} = vW_{T'}W_Tu^{-1}` holds with
  0 failures; the counts of the B examples were reproduced (A₂: 13 cells,
  12 triangles; B₂: 17 cells, 16 triangles; cube: 27 cells, 48 tetrahedra;
  Euler characteristics 1,1,1), as were the coset lists for `S₃`.

## Inventory against the design, and the boundary

- A = 7 items. The four design contracts are present with their designed
  claims: `def-cg-spherical-nerve-coset-poset-and-davis-realization`
  (spherical subsets with downward closure, nerve `L`, poset `WS` of spherical
  cosets with the empty-coset vertices, `Σ = |WS|`, chamber `K = |S|`, left
  action and chambers — clauses (1)–(4) with explicit abstentions (5)),
  `lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics` (cells `C_T`,
  projection `x_U`, face isometries with intrinsic metrics depending only on
  the `d_s`, cocycle), `thm-cg-davis-complex-cell-incidence-and-stabilizers`
  (gluing with intersection condition, cells/orbits/stabilizers, properness
  from finite incidence, compact chamber quotient, `U(W,K)` model), and
  `thm-cg-davis-complex-is-simply-connected` (2-skeleton computation and
  `π₁ = 1`). The three local additions are documented in the batch notes as
  required for closure and inherit the design's own routes: the coset
  equality/inclusion/intersection lemma (Davis 4.1.6(iii); used by the
  definition's well-definedness, the gluing intersection condition and the
  quotient), the exposed-faces/normal-cone lemma (the supporting-functional
  reduction the design names for the orbit-polytope lemma), and the
  cellulation CW-structure/Cayley-skeleta lemma (the design's simple
  connectivity route explicitly requires its CW hypotheses first).
- B = 5 items, exactly the design's companion content: the A₂ hexagon, the B₂
  octagon, the right-angled cube, the universal-Coxeter tree, and the
  residues / chamber quotient / finite-sphere-versus-contractible-Davis-cell
  comparison.
- Deliberate boundaries (not omissions): contractibility and CAT(0) for
  infinite `W` are deferred to CG-27, with the two deferred coverage rows
  pointing at live batch-30 items; the finite-type sphere is treated through
  the fixed earlier page `thm-cg-finite-chamber-tiling-and-coset-face-identification`;
  no homology of `Σ` is claimed on this page (the design assigns it to the
  `cw-complexes-and-cellular-homology` prerequisite page).

## Defects found in the scaffold (required Step-3b repairs)

These are the only scope-relevant findings; each was reproduced independently.

1. **A2 clause (3), second sentence is false.** `lem-cg-spherical-coset-inclusion-and-intersection`
   (3) claims “moreover `wW_T ∩ w'W_{T'} ≠ ∅` if and only if
   `wW_{T∩T'} = w'W_{T∩T'}`”. Counterexample: `T = ∅`, `T' = {s}`,
   `w = 1`, `w' = s`: `wW_T = {1}`, `w'W_{T'} = {s,1}`, intersection
   `{1} ≠ ∅`, but `wW_∅ = {1} ≠ {s} = w'W_∅`. (Rank-two version in `S₃`:
   `T={s₁}`, `T'={s₂}`, `w=1`, `w'=s₁s₂`, as also flagged by the sibling
   CG-07 review.) The first sentence of (3) is correct and is the clause the
   gluing uses; Davis 4.1.6(iii) and Boyd Lemma 1.3.2 contain no such
   “moreover”. Recommended repair: delete the sentence or replace it with the
   correct criterion `wW_T ∩ w'W_{T'} ≠ ∅ ⟺ w^{-1}w' ∈ W_T W_{T'}`
   (verified above). This edits a statement.
2. **A6 clause (2) closure-finiteness characterisation is false.**
   `lem-cg-davis-cellulation-cw-structure-and-cayley-skeleta` (2) claims “the
   cells meeting the closed cell `wW_T` are exactly the cells `vW_V` with
   `v ∈ wW_{V∩T}`”. Counterexample: `W = S₃`, `w = 1`, `T = {a}`, `V = {b}`:
   the cell `aW_{b} = {a, ab}` meets the closed cell `W_a = {1,a}` (at the
   vertex `{a}`), but no representative of `aW_b` lies in `wW_{V∩T} = W_∅ =
   {1}`. Recommended repair: “the cells meeting the closed cell `wW_T` are
   exactly the cells `vW_V` with `vW_V ∩ wW_T ≠ ∅`, equivalently
   `v ∈ wW_T W_V`; these are finitely many because `W_T` and `W_V` are finite”
   (verified above). This edits a statement.
3. **A5 strategy slips on the same point.** In
   `thm-cg-davis-complex-cell-incidence-and-stabilizers`, strategy (2) infers
   from A2(3) “this forces `v ∈ wW_{V∩T}`”, and strategy (3) bounds the
   properness set by `vW_{T∩T'}u^{-1}`; these are the cell-meeting
   misstatement of item 2 and the properness-set misstatement of item 3 above
   (the batch notes' properness paragraph repeats the same set).
   Correct finite sets: cells meeting `wW_T` lie over `wW_T W_V`; and
   `{w : w(uW_T) ∩ vW_{T'} ≠ ∅} = vW_{T'}W_Tu^{-1}`. Both conclusions
   (closure finiteness, properness) remain true. Strategy edits only.
4. **A5 strategy (4) overclaims uniqueness.** “w fixes every vertex of a
   simplex of K, in particular the vertex `W_∅ = {1}`, whence `w = 1`” fails
   when the carrier chain of `x ∈ K` has nonempty minimum (`s` fixes every
   point of the vertex `W_{s} ∈ K`, with `s ≠ 1`). The strict-fundamental-domain
   conclusion survives via the correct step: matching carrier chains give
   `wW_{T_i} = W_{T_i}` for all `i`, so `w` fixes each vertex of the carrier
   simplex and hence fixes `x`, giving `x' = x`. Strategy edit only.
5. **B4(iv) claims an unsupported identification.** “The Davis complex of a
   universal Coxeter system is the universal cover of the wedge of `|S|`
   projective lines, a tree.” For `|S| = 2` the Davis complex is the line
   (2-regular) while the universal cover of `S¹ ∨ S¹` is 4-regular; for
   `|S| = 1` the interval is not the universal cover of `RP¹ = S¹` (`ℝ`);
   and with `RP²` intended, Davis §2.2 explains precisely that the order-two
   relators distinguish `Cay(G,⟨S|R⟩)` from the presentation complex's
   universal cover. The surrounding statements (i)–(iii) are correct, and (ii)
   already states the true fact (the Cayley graph, i.e., the Bass–Serre tree of
   the free product). Recommended repair: delete the clause or replace it by
   that Bass–Serre-tree statement. This edits a statement.
6. **B3(iii)/B5(iii) conflate two cellulations for `|S| ≥ 3`.** B3(iii) says
   the boundary is “the eight vertices … with 6 square faces” and “it is the
   Coxeter complex”, and B5(iii) says “`∂Σ` is the Coxeter complex …, a
   triangulated `(|S|−1)`-sphere”. With the library's own definition of the
   Coxeter complex (`thm-cg-finite-chamber-tiling-and-coset-face-identification`
   (4)), the complex is the dual triangulation (for `(ℤ/2)³` the octahedron:
   6 vertices, 8 triangles), while `∂Σ` cellulated by the proper spherical
   cosets is the cubical boundary (8 vertices, 6 squares), its dual; the
   identification is exact only in rank two. Recommended repair: say that the
   boundary cells form the dual cellulation of the Coxeter complex (or cite
   the barycentric subdivision), without calling the square cellulation a
   triangulation. B1(iii)/(v) and B2(ii) are fine (rank two, where the two
   structures are isomorphic). Statements of B3/B5 would be edited.
7. **Stale clause pointers to the dihedral `2m`-gon claim.** Six items cite
   `lem-cg-finite-coxeter-orbit-polytopes-and-face-metrics` (4) for the
   regular `2m`-gon/hexagon/octagon, but clause (4) there is the cocycle; the
   dihedral claim is A6 clause (4). Instances: A6's own strategy, B1(ii),
   B2(ii),(iv) (owned pair), and 4 batch-30 items
   (`ex-cg-link-angles-of-a2-affine-a2-and-universal-coxeter-nerve` ×2,
   `ex-cg-circumcenter-of-a-finite-orbit-in-a-metric-tree`,
   `ex-cg-fixed-points-and-cell-stabilizers-in-the-infinite-dihedral-tree`;
   cross-pair, reported not edited). Recommended repair: re-point to A6(4)
   (and add the A6 dependency where the citing item lacks it), or restate the
   dihedral instance as a clause of A4. Citations/deps only; no scope change
   if A6(4) is the target.

No other claim of the pair failed an independent check: the definition's
clauses, the exposed-faces lemma, the orbit-polytope lemma, the cellulation
theorem's other clauses, the simple-connectivity theorem, and the A₂/B₂/cube
computations were all consistent with Davis §7.1–7.3, §2.2, Boyd §1.3 and the
finite checks above.

## Prerequisites

- All 39 cross-batch item edges and the 3 page edges of the pair resolve:
  in-run suppliers are batches 2, 4, 6, 7, 9, 10, 13 and 17 (all scaffolded,
  all earlier than 26, none from a later batch) and 30 distinct published
  items on disk; every `[[…]]` target in every statement and strategy is
  declared in `deps`/`justified_by` or is a page prose link. `manifest-deps`
  (0 errors) and the batch's recorded review rows agree with this review.
- The two deferred coverage rows (Moussong CAT(0)-ness and contractibility of
  `Σ`) have live destinations in batch 30
  (`thm-cg-finite-rank-davis-moussong-cat-zero-theorem` and the CG-27
  globalization items), which is exactly the design's split.
- Clause-level spot checks of the cited supplier clauses were made in the
  current scaffold: `thm-cg-finite-type-positive-definite-criterion` (1),
  `thm-cg-dual-chamber-intersections-and-point-stabilizers` (4),
  `thm-cg-parabolic-intersections-and-coset-factorization` (1),(2),
  `thm-cg-finite-chamber-tiling-and-coset-face-identification` (1)–(4),
  `lem-cg-polyhedral-face-coherence-and-uniform-star-radius` (i),
  `thm-cg-polyhedral-chain-metric-topology-and-properness` (1)–(3),
  `thm-hh-parabolic-minimal-representatives-and-length-additivity` (1),(2),(4),
  and the published CW/cellular-approximation and presentation items
  (including the finite-source, choice-free clause used for `π₁(Σ²) → π₁(Σ)`).
  All state what the consumers use, with the correct hypotheses.
- **No unmet prerequisite was confirmed.** The only forward-facing references
  are the definition's `justified_by` items on the same page, which is the
  designed encoding (the definition abstains from the properties until A2/A5
  prove them).

## Uncertainty, honestly stated

- I re-read the sources that carry this pair's distinctive claims and
  reproduced its finite content; I did not re-read Bridson–Haefliger, Bowditch
  or the other inventory references not used by the batch, so I do not exclude
  a further standard statement elsewhere in their ranges.
- This is a scope decision, not an item approval or proof check. Every
  batch-26 item is a scaffold awaiting Step 3b authoring; the two statement
  defects above (items 1 and 2) and the two statement imprecisions (items 5
  and 6) must be repaired before those items can be accepted, and the repairs
  to statements will invalidate this scope receipt. No proof here is
  certified, and the corrected clauses are judged only as scope-compatible.
- The B-page example counts were reproduced locally; the drawings Davis refers
  to were not available in the text extraction, so the regular-polygon
  identifications rest on Example 7.3.2(ii) and the finite checks.

## Next action

Scope receipt recorded with `tools/step3-decisions.mjs record-scope`
(decision `sufficient`, non-owner) as
`research/frontier-42-coxeter-32-step3a-review-spherical-parabolic-cosets-and-the-davis-complex.json`.
Owner: no scope amendment, merger or enrichment is needed; Step-3b authoring
may proceed on this scaffold, repairing defects 1–7 above (statements 1, 2, 5,
6 will require an owner `proceed` for the amended scope once applied; defect 7
touches four batch-30 items owned by the CG-27 pair and must be routed there).
Report path:
`research/frontier-42-coxeter-32-step3a-pair-spherical-parabolic-cosets-and-the-davis-complex.md`.
