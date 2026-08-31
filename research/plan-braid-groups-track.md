# Braid Groups Track Plan

This document commissions a five-pair braid-groups track. It is a prose scaffold, not page-body prose: builders must preserve the item order, dependencies, provenance choices, and proof obligations while writing complete library pages.

---

## 0. Executive summary

| Pair | A-page purpose | B-page purpose | A items | Level |
|---|---|---|---:|---:|
| BG-1 | Define braid groups by ordered and unordered configuration spaces | Compute loops, permutations, and stacking | 18 | 21 |
| BG-2 | Define braid groups as marked-disk mapping class groups | Compute half twists and isotopy examples | 19 | 19 |
| BG-3 | Define the Artin braid group by presentation | Calculate with words and quotients | 14 | 17 |
| BG-4 | Prove the configuration/mapping-class equivalence by point pushing | Compute lifted endpoints and conventions | 21 | 22 |
| BG-5 | Prove the Artin/configuration equivalence by Fadell–Neuwirth combing | Work low-strand combing examples | 23 | 24 |

The published library is sufficient for the three definition pages after those pages supply their local definitions and elementary lemmas. It is **not** presently sufficient for either equivalence proof. BG-4 therefore proves the narrowly needed path- and square-lifting results for locally trivial bundles; BG-5 proves Fadell–Neuwirth local triviality and the combing argument. No unpublished plan is silently treated as available.

Every theorem and proposition receives a full proof. A citation may determine provenance and proof architecture, but never replace proof. Each B-page requires only its A-page, is a leaf, and contains examples and counterexamples rather than reusable theory.

### Published seams consumed

- `subspaces-products-and-quotients`
- `function-space-topologies`
- `uniform-spaces`
- `homotopy-and-homotopy-equivalence`
- `the-fundamental-group`
- `covering-spaces-and-lifting`
- `classification-of-covering-spaces`
- `the-seifert-van-kampen-theorem`
- `free-groups-and-presentations`
- `group-actions-and-cayleys-theorem`
- `symmetric-groups-and-the-sign-homomorphism`

### New seams supplied here

Configuration-space coverings; compact-open disk-homeomorphism groups; the Alexander contraction; locally trivial bundle path lifting and relative square lifting; the component boundary map for a contractible total space; the split fundamental-group sequence for a bundle with a based section; evaluation and point-forgetting bundle charts; punctured-plane free meridians; geometric generation; and Artin combing.

The track does not require higher homotopy groups, a fibration long exact sequence, general isotopy extension, a CW structure on configuration space, or mapping class groups of arbitrary surfaces.

---

## 1. Mathematical arc

“The braid group” commonly names three objects: a fundamental group of an unordered configuration space, a mapping class group of a marked disk, and the group given by Artin's presentation. This track defines each without circularity and then constructs convention-correct isomorphisms:

1. point motions become loops in configuration space;
2. ambient disk motions become mapping classes;
3. elementary crossings become Artin generators;
4. point pushing identifies the first two models;
5. Fadell–Neuwirth combing proves that the geometric generators have exactly Artin's relations.

---

## 2. Global conventions

Fix `n >= 1`. Let

- `D = {z in C : |z| <= 1}` and `D^o = {z in C : |z| < 1}`;
- `[n] = {0,...,n-1}`;
- `b_i = ((2i-(n-1))/(n+1),0)`, `b=(b_0,...,b_{n-1})`, and `P={b_0,...,b_{n-1}}`.

The symmetric group acts on ordered configurations on the left by `(sigma.x)_i=x_{sigma^{-1}(i)}`.

Loop concatenation `alpha*beta` traverses `alpha` first and `beta` second. Homeomorphism composition is functional, and `[f][g]=[f composed with g]`. These choices force the endpoint-reordering and point-pushing formulas.

The mapping-class model uses all homeomorphisms of `D` fixing `boundary D` pointwise. An orientation adjective is unnecessary: the Alexander contraction shows the unmarked boundary-relative group is path connected. “Marked disk” means distinguished interior points, not punctures replaced by boundary circles. Pure means pointwise; full means setwise.

For the presentation, generators are `sigma_1,...,sigma_{n-1}` and the adjacent transposition is `t_i=(i-1 i)`, compatible with the library's zero-based `S_n`.

---

## 3. Dependency order and placement

Build the A-pages in this order:

1. `configuration-spaces-and-configuration-braid-groups`
2. `marked-disks-and-mapping-class-groups`
3. `artin-braid-groups-by-generators-and-relations`
4. `point-pushing-and-the-mapping-class-configuration-isomorphism`
5. `fadell-neuwirth-combing-and-the-artin-presentation`

BG-1, BG-2, and BG-3 are independent definition branches. BG-4 joins BG-1 and BG-2. BG-5 joins BG-3 to BG-4.

| Page | Direct page-level `requires` | Derived level |
|---|---|---:|
| BG-1 A | `covering-spaces-and-lifting`; `symmetric-groups-and-the-sign-homomorphism` | 21 |
| BG-1 B | BG-1 A only | 22 |
| BG-2 A | `function-space-topologies`; `homotopy-and-homotopy-equivalence`; `uniform-spaces`; `symmetric-groups-and-the-sign-homomorphism` | 19 |
| BG-2 B | BG-2 A only | 20 |
| BG-3 A | `free-groups-and-presentations`; `symmetric-groups-and-the-sign-homomorphism` | 17 |
| BG-3 B | BG-3 A only | 18 |
| BG-4 A | BG-1 A; BG-2 A | 22 |
| BG-4 B | BG-4 A only | 23 |
| BG-5 A | BG-3 A; BG-4 A; `the-seifert-van-kampen-theorem` | 24 |
| BG-5 B | BG-5 A only | 25 |

These are intended transitive reductions. Recompute levels if the published graph changes. No later page may require a B-page.

---

## 4. Provenance policy

Use the repository vocabulary:

- `[LN]`: literature-derived statement; proof not applicable;
- `[LL]`: literature-derived statement and proof;
- `[LA]`: literature-derived statement with a substantially altered or synthesized proof;
- `[AN]`: AI-altered formulation; proof not applicable;
- `[AA]`: AI-altered formulation and proof.

Do not use `ai-generated` for a statement. Give every literature item a pinpoint locator. For an altered proof, name both the source and the alteration.

---

## 5. Well-definedness and choice ledger

The finished run must explicitly establish the left quotient action and unordered basepoint; endpoint-reordering independence and multiplication; mapping classes as compact-open path components; paths versus isotopies; labeled and unlabeled evaluation fibers; the antihomomorphism law for raw lifted endpoints; correction by endpoint inversion; half-twist sign; and basedness of every Fadell–Neuwirth section.

Choices:

1. Disk is primary; an equivariant disk-plane homeomorphism permits planar computation.
2. Unordered/ordered configurations define full/pure groups.
3. Setwise/pointwise marked homeomorphisms define full/pure mapping-class groups.
4. If a loop lifts from `id` to `h_1`, set `Push([gamma])=[h_1^{-1}]`.
5. Prove only the locally trivial bundle lifting needed here.
6. Use Fadell–Neuwirth combing rather than an unbuilt CW computation.
7. Avoid the faulty published adjacent-transpositions item; prove the zero-based lemma locally.

BG-1 through BG-3 are buildable now. BG-4 and BG-5 become buildable after their bridge items below are authored in order. No page before BG-5 may claim all three definitions agree.

---

## 6. BG-1A — Configuration Spaces and Configuration Braid Groups

**Page id:** `configuration-spaces-and-configuration-braid-groups`

**Purpose.** Define full and pure braid groups from unordered and ordered configuration spaces, construct the permutation map, and connect loops with level-preserving geometric braids. Do not introduce mapping classes or the Artin presentation.

**Direct requires.** `covering-spaces-and-lifting`; `symmetric-groups-and-the-sign-homomorphism`.

### Ordered item inventory

1. `def-standard-marked-disk-and-base-configuration` `[AN]` — fix `D,D^o,[n],b,P`, including `n=1`.
2. `def-ordered-and-unordered-configuration-spaces` `[LN]` — define `Conf_n(X)` and its symmetric quotient `UConf_n(X)`.
3. `lem-configuration-space-is-open-and-locally-path-connected` `[LA]` — use diagonal inequalities and disjoint convex balls.
4. `lem-open-disk-minus-finitely-many-points-is-polygonally-connected` `[LA]` — give finite polygonal detours.
5. `thm-ordered-disk-configuration-space-is-path-connected` `[LA]` — move points one at a time.
6. `def-coordinate-permutation-action-on-configurations` `[LN]` — state the left action and prove freeness.
7. `lem-coordinate-action-is-a-covering-space-action` `[LA]` — use disjoint coordinate disks.
8. `thm-ordered-to-unordered-configuration-is-regular-cover` `[LA]` — identify deck group `S_n` and degree `n!`.
9. `thm-disk-and-plane-configuration-spaces-are-equivariantly-homeomorphic` `[AA]` — use `z -> z/(1-|z|)` and descend.
10. `def-configuration-pure-and-full-braid-groups` `[LN]` — define `PB_n^conf=pi_1(Conf_n(D^o),b)` and `B_n^conf=pi_1(UConf_n(D^o),[b])`.
11. `def-endpoint-reordering-homomorphism` `[LA]` — lift from `b`; state that the resulting `sigma` is inverse to physical start-label-to-end-position.
12. `thm-configuration-braid-permutation-exact-sequence` `[LA]` — prove `1 -> PB_n^conf -> B_n^conf -> S_n -> 1`.
13. `def-level-preserving-geometric-braid` `[LN]` — define disjoint strands in `D^o x [0,1]` modulo level-preserving isotopy.
14. `thm-configuration-loops-equal-level-preserving-geometric-braids` `[LA]` — use worldlines and prove the inverse correspondence.
15. `prop-configuration-braid-product-is-stacking` `[LA]` — check stacking and relabeling against concatenation.
16. `fs-free-action-always-gives-covering` `[AN]` — false: freeness alone lacks local separation.
17. `fs-pure-braid-group-is-a-subgroup-before-q-star` `[AN]` — false as logic: first prove injectivity of the covering-induced map.
18. `fs-braid-permutation-exact-sequence-splits` `[AN]` — false for `n>=2`; the paired page treats `n=2` directly.

Prove connectedness before monodromy surjectivity. Compute the endpoint permutation of a concatenation. Do not replace level-preserving isotopy by arbitrary ambient isotopy.

**Sources:** Fadell–Neuwirth, Theorem 3, pp. 113–114, <https://journals.msp.org/mscand/article/view/2674>; Fox–Neuwirth, pp. 119–126, <https://journals.msp.org/mscand/article/view/2675>; González-Meneses, Sections 1 and 2.1, <https://arxiv.org/abs/1010.0321>; Hatcher, Section 1.3, <https://pi.math.cornell.edu/~hatcher/AT/AT.pdf>.

**Forward references:** none.

## 7. BG-1B — Configuration Braid Group Examples

**Page id:** `configuration-spaces-and-configuration-braid-groups-examples`. **Requires:** BG-1A only. **Leaf:** yes.

Include `ex-one-strand-configuration-braid-group`, `ex-two-strand-exchange-loop`, `ex-square-of-exchange-is-pure`, `ex-stacking-and-permutation-order`, `ex-disk-plane-radial-transport`, `ce-free-action-without-covering-neighborhoods`, `ce-pure-subgroup-before-injectivity`, and `ce-two-strand-permutation-extension-does-not-split`. The last example must use the two-point winding model available from BG-1A, not later Artin theory.

---

## 8. BG-2A — Marked Disks and Mapping Class Groups

**Page id:** `marked-disks-and-mapping-class-groups`

**Purpose.** Define full and pure braid groups as mapping class groups of a boundary-relative marked disk, construct the permutation map, and prove the unmarked group contractible.

**Direct requires.** `function-space-topologies`; `homotopy-and-homotopy-equivalence`; `uniform-spaces`; `symmetric-groups-and-the-sign-homomorphism`.

### Ordered item inventory

1. `def-boundary-relative-marked-disk-homeomorphism-groups` `[LN]` — define setwise `Homeo_boundary(D;P)` and pointwise `PHomeo_boundary(D;P)`.
2. `lem-marked-disk-homeomorphisms-form-groups` `[AA]`.
3. `def-compact-open-topology-on-disk-homeomorphisms` `[LN]` — include the compact-metric uniform description.
4. `thm-boundary-relative-disk-homeomorphisms-form-topological-group` `[LA]` — prove composition and inversion continuous.
5. `def-boundary-relative-setwise-and-pure-isotopy` `[LN]`.
6. `lem-isotopy-is-path-in-homeomorphism-group` `[LA]` — use the published compact-open seam.
7. `lem-marked-point-permutation-is-constant-along-isotopy` `[AA]`.
8. `def-marked-disk-mapping-class-groups` `[LN]` — define `Mod(D,P)=pi_0(Homeo_boundary(D;P))` and `PMod(D,P)`.
9. `thm-path-components-inherit-mapping-class-group-structure` `[LA]`.
10. `def-marked-disk-permutation-homomorphism` `[LN]`.
11. `thm-pure-mapping-class-group-is-permutation-kernel` `[LA]`.
12. `def-half-twist-about-an-arc` `[LN]` — use a supported disk exchanging two arc endpoints.
13. `prop-half-twists-realize-all-marked-point-transpositions` `[LA]`.
14. `thm-marked-disk-permutation-exact-sequence` `[LA]` — prove `1 -> PMod(D,P) -> Mod(D,P) -> S_n -> 1`.
15. `thm-alexander-contraction-of-boundary-relative-disk-homeomorphisms` `[LA]` — set `A_r(h)(x)=r h(x/r)` for `|x|<=r` and `x` otherwise; use `d(A_r(h)(x),x)<=2r` at `r=0`.
16. `cor-unmarked-disk-mapping-class-group-is-trivial` `[LA]`.
17. `fs-homotopy-through-maps-is-a-mapping-class-isotopy` `[AN]` — false: every slice must remain a relevant homeomorphism.
18. `fs-setwise-marked-means-pointwise-marked` `[AN]` — false; half twists exchange points.
19. `fs-alexander-trick-kills-marked-mapping-class-group` `[AN]` — false; the contraction leaves the marked stabilizer.

Establish the topological group before taking components. At `r=0`, prove uniform rather than pointwise continuity. Never claim the contraction preserves `P`.

**Sources:** Farb–Margalit, Sections 2.1, 2.2.1, 9.1, 9.3, <https://press.princeton.edu/books/hardcover/9780691147949/a-primer-on-mapping-class-groups>; Margalit–Winarski, <https://londmathsoc.onlinelibrary.wiley.com/doi/full/10.1112/blms.12456>; Alexander, <https://doi.org/10.1073/pnas.9.12.406>.

**Forward references:** none.

## 9. BG-2B — Marked-Disk Mapping Class Examples

**Page id:** `marked-disks-and-mapping-class-groups-examples`. **Requires:** BG-2A only. **Leaf:** yes.

Include `ex-one-marked-point`, `ex-half-twist-in-local-coordinates`, `ex-square-of-half-twist-is-pure`, `ex-compose-two-marked-permutations`, `ex-alexander-contraction-uniform-estimate`, `ce-homotopy-is-not-isotopy`, `ce-setwise-is-not-pointwise`, and `ce-alexander-contraction-leaves-the-marked-subgroup`.

---

## 10. BG-3A — Artin Braid Groups by Generators and Relations

**Page id:** `artin-braid-groups-by-generators-and-relations`

**Purpose.** Define general Artin groups, specialize to type `A_{n-1}`, and define the algebraic pure kernel and basic invariants. Do not yet identify this group with a geometric model.

**Direct requires.** `free-groups-and-presentations`; `symmetric-groups-and-the-sign-homomorphism`.

### Ordered item inventory

1. `def-alternating-artin-word` `[LN]`.
2. `def-finite-coxeter-matrix-and-graph` `[LN]`.
3. `def-artin-and-coxeter-groups-from-matrix` `[LN]` — Coxeter adds `s^2=1`.
4. `prop-artin-group-surjects-onto-coxeter-group` `[LA]`.
5. `def-type-a-artin-braid-group` `[LN]` — display generators `sigma_1,...,sigma_{n-1}`, adjacent braid relations, and far commutations.
6. `lem-empty-and-one-generator-artin-braid-groups` `[LA]` — prove `B_1^Art=1` and `B_2^Art=Z`.
7. `lem-correctly-indexed-adjacent-transpositions` `[LA]` — prove `t_i=(i-1 i)` generate zero-based `S_n` from the valid transposition theorem.
8. `prop-artin-braid-permutation-epimorphism` `[LA]` — send `sigma_i` to `t_i`.
9. `def-algebraic-pure-artin-braid-group` `[LN]` — define the kernel.
10. `prop-artin-braid-exponent-sum` `[LA]` — construct `exp:B_n^Art->Z` with generator value one.
11. `cor-artin-generators-have-infinite-order` `[LA]`.
12. `fs-artin-braid-generators-are-involutions` `[AN]` — false; involutions occur only in the Coxeter quotient.
13. `fs-classical-braid-group-is-type-bn` `[AN]` — false; it is type `A_{n-1}`.
14. `fs-missing-coxeter-edge-means-no-relation` `[AN]` — false in the chosen convention; it means `m=2`, hence commutation.

Translate equality relations into free-group relators when using the published presentation machinery. Never add `sigma_i^2=1`. Keep the superscript `Art` until BG-5.

**Sources:** Paris, introductory definitions, <https://arxiv.org/abs/0711.2372>; González-Meneses, Section 3, <https://arxiv.org/abs/1010.0321>; Artin, <https://doi.org/10.2307/1969218>.

**Forward references:** none.

## 11. BG-3B — Artin Presentation Examples

**Page id:** `artin-braid-groups-by-generators-and-relations-examples`. **Requires:** BG-3A only. **Leaf:** yes.

Include `ex-artin-braid-groups-on-one-and-two-strands`, `ex-three-strand-braid-relation`, `ex-far-commutation-on-four-strands`, `ex-permutation-and-exponent-sum`, `ex-pure-square-generator`, `ce-generator-is-not-an-involution`, `ce-type-a-versus-type-b`, and `ce-no-edge-does-not-mean-no-relation`.

---

## 12. BG-4A — Point Pushing and the Mapping-Class–Configuration Isomorphism

**Page id:** `point-pushing-and-the-mapping-class-configuration-isomorphism`

**Purpose.** Supply the absent bundle-lifting bridge, prove evaluation is a locally trivial bundle, and use lifted endpoints plus Alexander contraction to identify the configuration and mapping-class models.

**Direct requires.** BG-1A and BG-2A.

### Ordered item inventory

1. `def-locally-trivial-bundle-and-fiber` `[LN]`.
2. `lem-product-bundle-path-and-square-lifting` `[AA]` — include prescribed lower and vertical boundary data.
3. `thm-relative-path-and-square-lifting-for-locally-trivial-bundles` `[LA]` — subdivide compact parameter spaces into chart-controlled pieces.
4. `thm-contractible-total-space-component-boundary-bijection` `[LA]` — for contractible path-connected `E`, prove lifted endpoint gives `pi_1(B)->pi_0(F)` directly.
5. `thm-based-section-gives-split-fundamental-group-sequence` `[LA]` — for path-connected fiber, prove split exactness using relative square lifting, not an LES.
6. `def-disk-homeomorphism-evaluation-map` `[LN]` — `e:Homeo_boundary(D)->UConf_n(D^o)`, `e(h)=h(P)`, with setwise stabilizer fiber.
7. `def-radial-fan-point-moving-homeomorphism` `[AN]` — in a convex disk centered at `p`, send `(1-t)p+tu` to `(1-t)q+tu`.
8. `lem-radial-fan-continuity-and-inverse` `[AA]` — prove joint parameter continuity and the inverse.
9. `thm-evaluation-map-has-local-sections` `[LA]` — use disjoint support disks and unique local labels.
10. `thm-evaluation-map-is-locally-trivial-bundle` `[LA]` — trivialize by `(Q,k)->s(Q)k` and write the inverse.
11. `def-lifted-endpoint-mapping-class-map` `[AN]` — define `Push([gamma])=[h_1^{-1}]`.
12. `lem-lifted-endpoint-map-is-well-defined` `[LA]` — use relative square lifting.
13. `lem-raw-evaluation-endpoint-reverses-products` `[AA]` — show a lift of `alpha*beta` ends at `k_1 h_1`.
14. `thm-point-pushing-is-homomorphism-after-endpoint-inversion` `[AA]`.
15. `thm-point-pushing-is-bijective` `[LA]` — use item 4 and Alexander contraction; also spell out direct surjectivity and injectivity.
16. `thm-configuration-and-mapping-class-braid-groups-are-isomorphic` `[LA]`.
17. `cor-pure-configuration-and-mapping-class-braid-groups-are-isomorphic` `[LA]` — prove compatibility with permutation kernels.
18. `prop-half-twist-normalization-under-point-pushing` `[LA]` — for an isotopy `H_t`, use `gamma(t)=H_t^{-1}(P)` so it maps to `[H_1]`.
19. `fs-raw-evaluation-endpoint-is-a-homomorphism` `[AN]` — false under the global conventions.
20. `fs-alexander-contraction-stays-in-marked-stabilizer` `[AN]` — false.
21. `fs-mapping-class-isomorphism-is-basepoint-free-canonical` `[AN]` — false without qualification.

The bundle lemmas must precede use and may not cite an unbuilt long exact sequence. Check whether the fiber factor multiplies on the right or left. The raw endpoint computation is mandatory. Do not contract inside the marked stabilizer.

**Sources:** Hatcher, Proposition 4.48, <https://pi.math.cornell.edu/~hatcher/AT/AT.pdf>; Farb–Margalit, Theorem 9.1, <https://press.princeton.edu/books/hardcover/9780691147949/a-primer-on-mapping-class-groups>; Palmer–Tillmann, <https://arxiv.org/abs/2007.11613>; Palais, <https://doi.org/10.1007/BF02565942>.

**Forward references:** none.

## 13. BG-4B — Point-Pushing Examples

**Page id:** `point-pushing-and-the-mapping-class-configuration-isomorphism-examples`. **Requires:** BG-4A only. **Leaf:** yes.

Include `ex-local-evaluation-chart-for-two-points`, `ex-lifted-two-point-exchange`, `ex-raw-endpoints-reverse-products`, `ex-half-twist-normalization`, `ex-pure-loop-gives-pointwise-endpoint`, `ce-raw-endpoint-homomorphism`, `ce-alexander-contraction-in-the-fiber`, and `ce-canonical-without-base-data`.

---

## 14. BG-5A — Fadell–Neuwirth Combing and the Artin Presentation

**Page id:** `fadell-neuwirth-combing-and-the-artin-presentation`

**Purpose.** Construct half-twist generators, prove the Fadell–Neuwirth split sequence, and use combing to prove Artin's listed relations complete. This page completes the equivalence triangle.

**Direct requires.** BG-3A; BG-4A; `the-seifert-van-kampen-theorem`.

### Ordered item inventory

1. `def-positive-configuration-half-twist-generators` `[LN]` — define `beta_i` by specified positive exchanges in the planar model.
2. `lem-half-twist-generators-have-adjacent-permutations` `[LA]` — compute `mu(beta_i)=t_i=(i-1 i)`.
3. `lem-far-half-twists-commute` `[LA]` — use disjoint supports and a two-parameter homotopy.
4. `lem-three-strand-half-twists-satisfy-braid-relation` `[LA]` — give an explicit three-point homotopy.
5. `thm-generic-braid-position-relative-endpoints` `[LA]` — polygonally approximate relative endpoints and avoid finitely many bad parameters; do not cite unexplained transversality.
6. `thm-half-twists-generate-configuration-braid-group` `[LA]` — read crossings in generic position.
7. `def-forgetting-last-point-map` `[LN]` — `p_n:Conf_n(C)->Conf_{n-1}(C)`, with fiber the plane minus `n-1` points.
8. `thm-fadell-neuwirth-local-triviality` `[LA]` — build charts from disjoint point-moving homeomorphisms.
9. `lem-fadell-neuwirth-basepoint-preserving-section` `[AA]` — use `s(z_1,...,z_m)=(z_1,...,z_m,1+max_i|z_i|)` with compatible recursive basepoints, or supply an explicit basepoint path.
10. `thm-punctured-plane-deformation-retract-and-free-meridian-basis` `[LA]` — construct a wedge retract or an explicit van Kampen cover; identify oriented meridians.
11. `thm-pure-braid-split-exact-sequence` `[LA]` — prove `1 -> F_{n-1} -> PB_n^conf -> PB_{n-1}^conf -> 1`.
12. `def-point-pushing-free-kernel-generators` `[LN]` — define `x_i=(beta_{n-1}^{-1}...beta_{i+1}^{-1}) beta_i^2 (beta_{i+1}...beta_{n-1})`.
13. `thm-point-pushing-generators-form-free-basis` `[LA]` — identify `x_i` with fiber meridians.
14. `def-canonical-artin-to-configuration-braid-homomorphism` `[LA]` — `Phi_n(sigma_i)=beta_i`.
15. `thm-canonical-artin-map-is-surjective` `[LA]` — apply item 6.
16. `lem-artin-combing-six-factor-reductions` `[LA]` — with `alpha_r=sigma_r...sigma_{n-1}`, state all six positive/negative and relative-position rewrite cases.
17. `lem-artin-combing-conjugation-and-collection` `[LA]` — prove
   `sigma_i^{-1}x_j sigma_i=x_j` outside `{i,i+1}`,
   `sigma_i^{-1}x_i sigma_i=x_{i+1}`, and
   `sigma_i^{-1}x_{i+1}sigma_i=x_{i+1}x_i x_{i+1}^{-1}`,
   plus inverse formulas; collect a pure word as `UV` with `U` in the `x_i` and `V` on the first `n-1` strands.
18. `thm-completeness-of-artin-relations-by-induction` `[LA]` — comb a kernel word to `UV`; kill `V` by induction and `U` by the free fiber basis.
19. `thm-configuration-braid-group-has-artin-presentation` `[LL]` — conclude `Phi_n` is an isomorphism.
20. `cor-all-three-braid-group-definitions-agree` `[LA]` — compose with point pushing and verify full groups, pure kernels, permutations, and half-twist normalization.
21. `fs-checking-artin-relations-proves-completeness` `[AN]` — false: it proves only existence of a homomorphism.
22. `fs-fadell-neuwirth-section-alone-proves-kernel-injective` `[AN]` — false: fiber injectivity still needs lifting.
23. `fs-fadell-neuwirth-sequence-is-the-permutation-sequence` `[AN]` — false: their maps and kernels differ.

Items 5–6 must replace “general position” by an elementary relative-endpoint proof. Item 9 must reconcile its formula with chosen basepoints. Item 16 may not be summarized as “standard combing.” Item 18 is the indispensable completeness proof. Correct the apparent concluding typo in González-Meneses: the free basis is `x_1,...,x_{n-1}`, not a new `x_n`.

**Sources:** Fadell–Neuwirth, Theorem 3, pp. 113–114, <https://journals.msp.org/mscand/article/view/2674>; González-Meneses, Sections 1, 2.1, 3.1, <https://arxiv.org/abs/1010.0321>; Fox–Neuwirth, <https://journals.msp.org/mscand/article/view/2675>; Artin, <https://doi.org/10.2307/1969218>.

**Forward references:** none.

## 15. BG-5B — Braid Combing and Presentation Examples

**Page id:** `fadell-neuwirth-combing-and-the-artin-presentation-examples`. **Requires:** BG-5A only. **Leaf:** yes.

Include `ex-fadell-neuwirth-sequence-for-three-pure-strands`, `ex-free-kernel-generators-on-three-strands`, `ex-comb-a-three-strand-pure-word`, `ex-comb-a-four-strand-word`, `ex-artin-to-configuration-to-mapping-class-generator`, `ex-pure-kernels-agree-in-all-three-models`, `ce-relations-without-completeness`, `ce-section-without-fiber-injectivity`, and `ce-confusing-the-two-exact-sequences`.

---

## 16. Source corpus and sequential comparison

Consult sources in this order:

1. González-Meneses for a consistent overview of all models and combing.
2. Fadell–Neuwirth for the original point-forgetting bundle.
3. Fox–Neuwirth for the configuration-space model.
4. Farb–Margalit and Margalit–Winarski for mapping classes and point pushing.
5. Hatcher for surrounding covering and bundle topology, while still proving the narrow bundle results here.
6. Artin and Paris for the presentation and the Artin/Coxeter distinction.

Record exact page, section, and theorem locators. Where sources use opposite products or point-pushing signs, preserve this plan's convention and mark the proof `[LA]`.

---

## 17. Canonical coverage harvest

| Topic | Location |
|---|---|
| Ordered/unordered configuration spaces | BG-1 items 2, 6–8 |
| Full/pure configuration braid groups | BG-1 items 10–12 |
| Worldline model | BG-1 items 13–15 |
| Full/pure marked-disk mapping class groups | BG-2 items 1, 5, 8–11 |
| Mapping-class permutation sequence | BG-2 items 12–14 |
| Alexander contraction | BG-2 items 15–16 |
| General/type-A Artin groups | BG-3 items 1–6 |
| Algebraic pure kernel | BG-3 items 7–10 |
| Bundle lifting bridge | BG-4 items 1–5 |
| Evaluation bundle | BG-4 items 6–10 |
| Point-pushing isomorphism | BG-4 items 11–18 |
| Fadell–Neuwirth split sequence | BG-5 items 7–13 |
| Completeness of Artin relations | BG-5 items 14–19 |
| All three definitions equivalent | BG-5 item 20 |

---

## 18. Deferred topics

Defer surface braid groups; spherical, annular, affine, and other Artin families; centers and Garside theory; word and conjugacy algorithms; classifying spaces and asphericity; general-surface mapping class groups and Birman sequences; braid representations, closures, and knot invariants; and unordered point-forgetting maps.

---

## 19. Amendments and hazards

1. The published `thm-adjacent-transpositions-generate-the-symmetric-group` lists `(1 2),...,(n-1 n)` while `S_n` acts on `{0,...,n-1}`. Its last transposition is outside the set. Do not depend on it; BG-3 item 7 proves `(i-1 i)` locally. Record a separate maintenance amendment rather than silently editing an existing id.
2. Artin's 1947 DOI is `10.2307/1969218`, not `10.2307/1969050`.
3. Endpoint maps are convention-sensitive.
4. The radial fan construction needs joint parameter continuity, not just a picture.
5. The Fadell–Neuwirth section must exactly match its basepoints.

---

## 20. ID, dependency, provenance, and acceptance audit

Before drafting page prose, verify:

- all ten page ids and all item ids are globally unused;
- every B id is exactly its A id plus `-examples`;
- every B requires exactly its A and is never required later;
- no BG-4 item depends on BG-5;
- BG-5 is first to identify Artin and configuration groups;
- every symbol is local or inherited from a prerequisite;
- `justified_by` is used only for well-definedness;
- every theorem and proposition has a complete proof;
- every literature item has a pinpoint locator and valid URL/identifier;
- every altered proof records the alteration;
- every false statement has its counterexample/correction on the paired B-page;
- page requirements match Section 3 after plan-spec validation;
- levels are recomputed before build;
- A-page counts 18, 19, 14, 21, and 23 stay below the owner ceiling of 60.

The run is accepted only if a reader can verify, in order:

1. `B_n^conf=pi_1(UConf_n(D^o),[b])` and its pure kernel;
2. `Mod(D,P)` and its pure kernel;
3. `B_n^Art` from the displayed presentation;
4. a convention-correct isomorphism `B_n^conf ~= Mod(D,P)`;
5. a generator-preserving isomorphism `B_n^Art ~= B_n^conf` whose injectivity is proved by combing;
6. compatibility of all three permutation maps and pure subgroups.

“No appeal to reputation,” no unproved fibration exact sequence, and no relation-check-only argument satisfies this audit.
