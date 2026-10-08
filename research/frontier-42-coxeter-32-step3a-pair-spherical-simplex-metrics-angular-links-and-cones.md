# Step 3a scope review — pair `spherical-simplex-metrics-angular-links-and-cones`

Run `frontier-42-coxeter-32` · role alpha · pair label
`step3a-pair-spherical-simplex-metrics-angular-links-and-cones-5389c3aee4e182e5` · design label CG-05.

- A page: `spherical-simplex-metrics-angular-links-and-cones` (order 1732, batch 8, kind A).
- B page: `spherical-simplex-metrics-angular-links-and-cones-examples` (order 1733, batch 8, kind B).
- Decision: **sufficient** for the A page (scope only; no item approval, no owner record).
  Receipt: `research/frontier-42-coxeter-32-step3a-review-spherical-simplex-metrics-angular-links-and-cones.json`.

## Inputs read

`research/frontier-42-coxeter-32-batch-8.pages.json`, `.coverage.json`, `.notes.md`,
`.cross-batch-dependencies.json`, the seven `research/frontier-42-coxeter-32-step1-<id>.json`
readiness records; `library/coxeter-groups/spherical-simplex-metrics-angular-links-and-cones{,-examples}.md`,
`library/coxeter-groups/_pathway.md`; `research/plan-coxeter-groups-track.md` §CG-05 (lines 197–211);
`research/plan-spec.json` (orders 1732/1733, requires, empty item arrays);
`research/coxeter-scaffold/inventory.json` CG-05 and `definition-justifications.json`;
`research/frontier-42-coxeter-32-owner-authoring-direction.md`, `-owner-scope.json`,
`-scope-ledger.json`; `research/frontier-42-coxeter-32-alpha-step1-drift.md` § pair;
the current statements/strategies of every in-run supplier item the pair uses (batches 4 and 6)
and of the 18 item-level consumer rows in batches 11, 19, 22 and 30; the batch-11 manifest and
coverage for the recorded deferral destination.

## 1. Prose design versus scaffold (A page)

The native prose page names four ordered supplier contracts; the scaffold keeps all four ids,
kinds, order and content, and adds no item. The two `def` items carry exactly the named
justifiers (`def…gram-simplex` ← `lem…existence`, `def…cone-and-join-metrics` ← `thm…cone-join`,
matching `definition-justifications.json`).

| Design contract (§CG-05 and native prose) | Scaffolded item | Coverage |
|---|---|---|
| Gram matrix with diagonal 1 → unit vertices by Cholesky, positive cone ∩ unit sphere; angular link of a Euclidean face from unit normals + induced intrinsic spherical metric; import the combinatorial link | `def-cg-spherical-gram-simplex-and-angular-link` (1): `K(C)`, `Σ(C)`, tangent cone via inward unit normals, `Lk_C(F)=T_FC∩S(V)`, angular distance `arccos⟨ξ,η⟩`, gluing identification of cell links, combinatorial link imported from `def-simplicial-subcomplex-star-closure-and-link`; no property asserted beyond the construction | complete |
| Gram realisation exists, unique up to orthogonal isometry; functional 1 on vertices positive on the cone, open hemisphere, unique barycentric ray coordinates; radial normalisation comparable with Euclidean cell metrics over finitely many shapes → compactness, length topology, minimizing short paths; Schur-complement link formula with positivity and face compatibility; disconnected convention only in cone formulas | `lem-cg-spherical-simplex-existence-and-link-gram-formula` (i)–(vi): (i) existence/uniqueness via `C=LL^T`; (ii) hemisphere functional, unique radial coordinates, explicit Lipschitz estimates both ways, round-vs-chord bound; (iii) finite spherical complexes: bi-Lipschitz to the Euclidean gluing, compact/proper/complete length space, minimizing geodesic for every pair of a component (AC use named); (iv) `c^{lk}_{ij}=(c_{ij}-c_{i0}c_{j0})/√((1-c_{i0}²)(1-c_{j0}²))`, positivity witness, order-independent face iteration; (v) tangent-cone description, link = intrinsic round metric of diameter ≤ π; (vi) `+∞` between components as auxiliary only | complete |
| `d_path` auxiliary extended metric with `+∞` across components; finite `d_π=min{π,d_path}` with its metric axioms; `D_π`-geodesic CAT(1) convention for triangles of perimeter < 2π; cone `C(L)={o}⊔(0,∞)×L` with separate apex, `C(∅)={o}`, through-apex geodesics at angular distance π; spherical joins by cosine formula/endpoint quotients with `L*∅=L`, `∅*∅=∅`; no infinity passed to a metric value | `def-cg-euclidean-cone-and-spherical-join-metrics` (1)–(5): (1) `d_path` componentwise with `+∞` auxiliary; (2) `d_π=min{π,d_path}` (metric axioms proved by the justifier); (3) cone with `d_C(o,(r,x))=r`, `d_C²=r²+s²−2rs cos d_π`, `C(∅)={o}`, angle-π/cross-component distance `r+s`; (4) `D_π`-geodesic convention and agreement with componentwise intrinsic tests, side π as antipodal pair; (5) join as quotient of `L₁×L₂×[0,π/2]` with cosine formula and empty conventions, equivalence with the unit link of the product cone deferred to the justifier | complete |
| Cone triangle inequality by 2-dimensional comparison sectors with truncated angular metric, including angle π and disconnected cases; apex path minimizing; sector development of a minimizing segment; empty link = point cone and zero-dimensional charts; joins as unit links in product cones with associativity, endpoint/empty conventions, face metrics; local product chart `R^k × C(Lk_X(F))` preserving intrinsic lengths; `+∞` never an ordinary metric value | `thm-cg-cone-join-metric-and-local-product-chart` (1)–(4): (1) truncation agreement, perimeter-<2π triples; (2) cone metric and geodesics incl. angle π, development, containment in the `max{r,s}`-ball, `D_π`-geodesic ⇒ geodesic space; (3) join metric with descent, associativity, product-cone isometry `C(L₁)×C(L₂)≅C(L₁*L₂)`, face metrics, `S^{m-1}*S^{n-1}≅S^{m+n-1}`; (4) local product chart for a point in a `k`-cell of an isometric polyhedral gluing with (H2)/(H3), `Lk_X(p)≅S^{k-1}*Lk_X(F)` | complete |

Route realisations that are not scope changes: the design's "bounded derivatives" of radial
normalisation are proved as explicit Lipschitz estimates (differentiability-free and serving the
same bi-Lipschitz comparison), and "minimizing short paths" is proved as minimizing geodesics
between every pair of a connected finite spherical complex (stronger, with the Axiom of Choice
use named). The design's sources for the cone/join metric (BH I.5, Davis I.2) supply both routes
used.

## 2. B companion versus design

Design B tasks (§CG-05 "B companion", native prose) map one-to-one onto three `example` items:

| Design B task | B item | Coverage |
|---|---|---|
| Build a spherical simplex from a positive-definite Gram matrix and compute a vertex-link Schur complement | `ex-cg-spherical-simplex-and-vertex-link-schur-complement` (i)–(iv): `c=1/2`, `4×4` Gram positive definite by quadratic-form identity, Cholesky realisation, hemisphere functional `φ(x)=⅖Σx_i`, Schur link matrix `⅓` off-diagonal positive definite, iterated two-step Schur value `arccos(1/4)` matching the projection computation | complete |
| Compare edge length `π−π/m` with mirror angle `π/m` | `ex-cg-link-edge-lengths-versus-dihedral-angles` (i)–(iv): regular `2m`-gon interior angle `π−π/m` as the vertex-link edge length; inward normals at distance `π/m`; canonical rank-two form with `B(e_s,e_t)=−cos(π/m)`, mirror angle via `H_s`, `H_t`, product `r_sr_t` a rotation of order `m`; link Gram matrix with `−cos(π/m)`, complementary values not interchangeable | complete |
| Use a disconnected universal-Coxeter nerve to test the angular-distance truncation convention | `ex-cg-disconnected-universal-coxeter-nerve-and-angular-truncation` (i)–(iv): discrete `n`-point nerve, `d_path=+∞` vs `d_π=π` off the diagonal; cone is the metric star with branch distance `r+s`; `D_π`-geodesic hypothesis vacuous; any truncation `<π` contradicts the local star geometry | complete |

The B page is a consumption leaf exactly as its prose requires: a run-wide scan finds no page
whose `requires` list names it and no item outside batch 8 that references any of its three ids
(also no `forward_refs`). Its items depend only on the A page's items, published items, and the
batch-4 items `def-cg-real-coxeter-form-and-reflection` /
`lem-cg-reflection-form-invariance-and-rank-two-orders`, which lie inside the A page's declared
prerequisite closure (`real-forms-and-reflection-geometry`).

## 3. Source coverage

`batch-8.coverage.json` records the A page with two fetch-verified primary treatments:

- Bridson–Haefliger, *Metric Spaces of Non-Positive Curvature* (`sha256_16 894ac23c8033d213`,
  669 pp): I.5.6–I.5.10 (cone, truncation `min{π,d}`, metric proof by case analysis, geodesic
  characterisation), I.5.13–I.5.16 (spherical join, product-cone isometry, `S^n*S^m`),
  I.7.14–I.7.16 (links of points, intrinsic pseudometric with the value ∞ between components,
  cone neighbourhoods).
- Davis, *The Geometry and Topology of Coxeter Groups* (`sha256_16 ccefbb950fdcfce9`, 600 pp):
  Appendix I.2 (cone on a CAT(1)-space, truncated angle, I.2.17–I.2.19, join), Appendix I.3
  (`Lk(F,P)=Cone(F,P)∩S(E(F,P))`, link of a point, facial identification in the proof of
  Theorem I.3.5), Appendix A.4 (joins of polytopes/complexes), §7.1 (Definition 7.1.1 and
  Examples 7.1.2–7.1.7, including the discrete universal-Coxeter nerve).

All 21 harvested results are dispositioned: 6 `included`, 10 `inline`, 2 `out-of-scope` with
reasons (BH I.5.9(2) cone completeness; BH I.7.17–I.7.18 m-string development), and 3
`deferred` to `cat-comparison-link-criteria-and-local-globalization` (Davis Lemma I.2.19 join
CAT(1); Theorem I.3.5(a)–(e) link criterion; Lemma I.3.6 local-geodesic link characterisation).
The deferral destination is live in the run: batch 11 (order 1738) requires this A page and its
own items consume the A page's clauses; the CAT page's coverage claims I.2.18–I.2.19. Bowditch
§§3.3–3.4 is deliberately not claimed (owned by the CAT and short-loop pages), and the pair
still carries two independent primary treatments. The B page has no coverage-file entry, which
is this run's convention (22 of 32 batch coverage files list only the A page; none lists only a
B page); its items carry per-item BH/Davis references.

`coverage-checklist --require-destination`: 0 errors, 1 advisory warning (`coverage-low-yield`,
6/21 scaffolded) of the same kind the sibling batches carry.

## 4. Intended role in the library

The page sits in pathway part `reflection-and-metric-foundations`
(`library/coxeter-groups/_pathway.md` line 10) between `canonical-roots-signs-and-faithful-reflections`
and `tits-cones-chambers-and-parabolic-stabilizers`, and its declared role is that "their
spherical geometry must be proved before a link criterion can be used". The link criterion
itself is correctly deferred to the CAT page; this pair supplies the angular link/cone/join
vocabulary and metric facts the criterion and the Davis-complex development consume:

- one page-level consumer: `cat-comparison-link-criteria-and-local-globalization` (order 1738,
  batch 11) requires the A page, and its items `def-cg-cat-zero-cat-one-and-local-geodesic` and
  `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion` use all four A items (the
  truncation agreement in the definition of the CAT(1) class, and the local product chart plus
  cone/link vocabulary in the link criterion);
- 18 further item-level consumer rows: batch 19 (3 items of
  `bipartite-coxeter-elements-and-ordered-root-complexes`, using the Gram simplex, hemisphere
  and Schur clauses), batch 22 (10 items incl. 2 examples of
  `large-spherical-metric-flags-and-the-moussong-girth-theorem`, using the finite spherical
  complex, the Schur-complement link formula and the join/product-cone clauses), batch 30
  (3 items incl. 1 example of `davis-cat-zero-geometry-and-finite-subgroup-fixed-points`, using
  `lem`(v) tangent-cone directions, the Schur formula and the local product chart);
- no consumer needs a claim from this pair that the four items do not state; consumers instantiate
  the items as suppliers (e.g. batch 30's `thm-cg-finite-rank-davis-moussong-cat-zero-theorem`(2)
  uses `thm` clause (4) for the chart `R^{|T|}×C(Lk_Σ(wW_T))`, and batch 22's
  `lem-cg-cat-zero-products-and-cat-one-joins`(ii) uses `def` clause (5) and `thm` clause (3)).

## 5. Prerequisite availability

- Dependency scan over the current manifests: all **88** declared edges of the seven items
  (`deps` + `justified_by`) resolve — **15** within the pair, **63** to **28** distinct published
  items (all with `status: published`), **10** to **7** distinct in-run scaffold suppliers
  (`def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric`,
  `thm-cg-polyhedral-chain-metric-topology-and-properness`,
  `thm-cg-proper-polyhedral-spaces-have-minimizing-geodesics`,
  `lem-cg-metric-target-length-reparametrization-and-lower-semicontinuity`,
  `lem-cg-polyhedral-face-coherence-and-uniform-star-radius` in batch 6;
  `def-cg-real-coxeter-form-and-reflection`,
  `lem-cg-reflection-form-invariance-and-rank-two-orders` in batch 4). **0** edges point to a
  later batch, **0** are unresolved, and the transitive closure (133 nodes, walking in-run
  suppliers) has no missing target.
- Page-requires closure: all four prerequisites exist — the in-run drafts
  `coxeter-polyhedral-gluings-and-intrinsic-metrics` (order 1728, batch 6) and
  `real-forms-and-reflection-geometry` (order 1724, batch 4), and the published pages
  `direct-matrix-factorisations-lu-cholesky-and-qr` (linear algebra) and
  `simplicial-complexes-and-simplicial-homology` (algebraic topology).
- The clauses consumed were read in the current supplier statements and are adequate:
  batch-6 `def` (H2 local finiteness, H3 finite shapes, chain metric candidate, weak topology);
  batch-6 `thm-cg-polyhedral-chain-metric-topology-and-properness` (1) metric, (2) metric
  topology = weak topology, (3) properness/completeness; batch-6
  `lem-cg-polyhedral-face-coherence-and-uniform-star-radius` (i) compatible barycentric
  triangulation, (ii) global hat coordinates with uniform Lipschitz constant, (iii) uniform star
  radius `δ=1/(2L(D+1))`; batch-6 length-lemma (lower semicontinuity, arc-length
  reparametrisation) and the AC hypothesis of the proper-target Ascoli corollary; batch-4 `def`
  (Coxeter form with `B(e_s,e_s)=1`, reflections) and rank-two lemma (3)(i)–(iv) (positive
  definite `B|_P` for finite `m`, mirror kernels, `tr A=2cos(2π/m)`, order `m`).
- **Confirmed unmet prerequisites: none.** Residual uncertainty, stated honestly: this is a
  manifest/statement-level verification; the supplier proofs and the pair's own proofs are
  Step-3b authoring work and no item file exists yet, so the prerequisites are scaffolded, not
  certified. The batch-8 notes also record an authoring obligation left open by the repaired
  join-metric route ("the link metric recovered from the product-cone metric is a metric" must be
  written out from BH I.5.13–I.5.16); that is a proof-route obligation inside the pair, not a
  missing prerequisite.

## 6. Checks actually run

| Check | Command | Actual result |
|---|---|---|
| manifest deps | `node tools/manifest-deps.mjs research/frontier-42-coxeter-32-batch-8.pages.json` | exit 0; `7 item(s), 0 normalized, 0 error(s)` |
| coverage | `node tools/coverage-checklist.mjs research/frontier-42-coxeter-32-batch-8.coverage.json --require-destination` | exit 0; `1 page(s), 21 harvested result(s), 0 error(s), 1 warning(s)` (advisory `coverage-low-yield`, 6/21) |
| plan | `node tools/validate-plan.mjs research/plan-spec.json` | exit 0; order acyclic/consistent, no item cycles, forward refs, B-page deps or unresolved ids among the 1599 item-listed pages; for this pair only the informational `[redundant-prereq]` note that `simplicial-complexes-and-simplicial-homology` is reachable through `coxeter-polyhedral-gluings-and-intrinsic-metrics` |
| frontier gate | `node tools/frontier-item-gate.mjs --run frontier-42-coxeter-32 --tool validate-plan` | exit 0 |
| dependency scan | ad-hoc script over all 32 `batch-*.pages.json` + `items/` | 88/88 edges resolved (15 pair-internal, 63 published, 10 in-run batch 4/6); 0 later-batch; 0 missing; 133-node transitive closure clean |
| B-leaf scan | ad-hoc script over all 32 `batch-*.pages.json` | 0 pages require the B page; 0 items outside batch 8 reference any B id |
| drift review | `research/frontier-42-coxeter-32-alpha-step1-drift.md` § pair | `VERDICT: no-drift`; "No prerequisite gap"; `step1-blockers.json` names no batch-8 item |

## 7. Non-blocking notes (documentation, no scope action)

1. The coverage row BH I.5.8 (the cone over `S^n` is Euclidean) is dispositioned `inline` in
   `thm-cg-cone-join-metric-and-local-product-chart`, whose clause (4) needs `C(S^{k-1})≅R^k`;
   the statement has no named clause for it, so the Step-3b author must discharge it inside
   clause (4) (it follows in two lines from the cone formula with `⟨x,y⟩` in the round sphere).
   The design did not promise it as a separate contract and the content is inside the pair.
2. `def-cg-euclidean-cone-and-spherical-join-metrics`(1) phrases `d_path` "for the angular link
   `Lk_X(F)` of a face of a finite spherical complex", while `def-cg-spherical-gram-simplex-and-angular-link`
   defines `Lk_X(F)` for a general isometric polyhedral gluing and `thm`(1)–(4) is stated for a
   general angular link; consumers in batches 11 and 30 use links of general gluings. The scope
   is present (the def's first sentence covers any set with an extended metric, and an ordinary
   metric is an instance); the narrower parenthetical should be read as a pointer to the
   construction, not as a restriction.
3. The deferral of Davis Lemma I.2.19 (the join of CAT(1) spaces is CAT(1)) names
   `cat-comparison-link-criteria-and-local-globalization`; that page's coverage marks
   I.2.18–I.2.19 `included` in `thm-cg-cone-cat-equivalence-and-polyhedral-link-criterion`,
   but the item's statement and strategy do not mention joins of CAT(1) spaces, whereas the
   run's explicit claim is batch 22's `lem-cg-cat-zero-products-and-cat-one-joins`(ii). The
   curvature claim has a live home either way; this is cross-page bookkeeping for the CAT page's
   own review, not a gap in this pair (which defers all curvature assertions by design).
4. The join triangle-inequality strategy was replaced after the batch hand-off: the previous
   "embed the three points in the round circle `S^1`" justification was found false (three
   pairwise-π points such as `(π,π,π)` do not embed in the circumference-`2π` circle, while a
   truncated circle of circumference exactly `3π` carries such a triple); the manifest now records the
   product-cone pullback route. The replacement's last passage (the metric property of the join
   from the product-cone isometry) remains an explicitly recorded authoring obligation. Reported
   here for continuity; it is a proof-route matter, outside this scope review.
5. No B example exercises the join/product-cone isometry or the local product chart directly;
   the design's B companion promised exactly the three present tasks, and those clauses are
   consumed by downstream items of batches 11, 22 and 30. No example gap was found.

## 8. Decision

**`spherical-simplex-metrics-angular-links-and-cones`: sufficient.** The planned definitions
(spherical Gram simplex, angular link and angular distance of a Euclidean face, extended path
metric, truncated angular metric, Euclidean cone, spherical join), results (Gram
existence/uniqueness, hemisphere and radial coordinates, bi-Lipschitz comparison with Euclidean
models, compactness/length topology/minimizing geodesics of finite spherical complexes, the
Schur-complement link formula with face compatibility, the cone and join metrics with
product-cone isometry and the local product chart `R^k×C(Lk_X(F))`) and examples (Schur
complement, link edge length versus mirror angle, disconnected-universal-Coxeter truncation)
adequately cover the intended subject of CG-05 and the role recorded in the pathway. No omitted
topic, result or example within the design or its sources was found; no enrichment or merger is
recommended; every declared prerequisite resolves to the published library or to current
in-run scaffold suppliers, and no unmet prerequisite was confirmed. Owner action: none required
for scope; proceed.
