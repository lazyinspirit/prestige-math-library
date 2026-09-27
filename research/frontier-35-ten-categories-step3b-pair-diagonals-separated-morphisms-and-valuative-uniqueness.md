# Step 3b report — pair `diagonals-separated-morphisms-and-valuative-uniqueness`

Run `frontier-35-ten-categories`; stage `3b-author`; role alpha-high; label
`step3b-pair-diagonals-separated-morphisms-and-valuative-uniqueness-1aa1e069dac4beda`.
A page `diagonals-separated-morphisms-and-valuative-uniqueness` (366.067, scheme-theory),
B page `...-examples` (366.068). Batch 6 shared manifest
`research/frontier-35-ten-categories-batch-6.pages.json` (sibling pair
`kahler-differentials-conormal-sequences-and-infinitesimal-lifting` preserved untouched).

## Scope and scaffold decisions (read)

- CLAUDE.md, SCHEMA.md, batch-6 notes/coverage/cross-batch ledger, Step 3a report and
  receipt (`sufficient`), owner direction (this pair is fully active), plan-spec rows
  366.067/366.068. All 37 final manifest items audited against the design (AV-14): the
  35 Step-1 items plus the two local suppliers added during authoring.
- Planned scaffold repairs: (1) `def-locally-closed-immersion` — the parenthetical
  "equivalently, an open immersion followed by a closed immersion locally on the target"
  is not supported (Stacks *Schemes* Remark 26.10.3, tag 01IP, printed p.18 says a general
  immersion does not so factor; Example 29.3.4 is the witness) and is dropped; the main
  clause matches Stacks Definition 26.10.2(5). (2) `thm-immersion-monomorphism-locally-finite-type`
  source line repointed to Stacks *Morphisms* §29.15 (tag 01T5) for the finite-type clause.
- Local supplier added to the assigned A page (registered in manifest/coverage/contracts):
  `lem-closed-immersion-local-on-target` (Stacks *Schemes* Lemma 26.4.2, tag 01HL, printed
  p.5), required by the diagonal-immersion proof, the affine-separatedness proof, the
  locality-on-base lemma and the overlap criterion (the same tool Stacks uses in 26.21.2/26.21.7).
- Other dependency repairs discovered while authoring are recorded per item below.

## Item checkpoints (all 37, prerequisite order)

Rows: `id | kind | status | deps used | source locators | checks | notes`. "contract ok" means the item passes the
batch-6 strict proof contract; "accept" means a Step 3b decision receipt at the current content hash with confidence 1.
Every item is `status: draft`, `pipeline_run: frontier-35-ten-categories`.

| # | item | page | deps | source locators | checks | notes |
|---|---|---|---|---|---|---|
| 1 | `def-locally-closed-immersion` | A | `def-open-immersion-schemes`, `def-closed-immersion-schemes` | Stacks Schemes, Definition 26.10.2(5) and Section 26.21.2, printed pp.18, 39-40 | n/a (no proof) | Factorization is exhibited, not intrinsic data; repair dropped the unsupported "open-then-closed locally on the target" parenthetical (Stacks *Schemes* Rem. 26.10.3, tag 01IP). |
| 2 | `def-separated-morphism-schemes` | A | `def-diagonal-morphism-scheme`, `def-closed-immersion-schemes`, `def-quasi-compact-and-quasi-separated-morphism` | Stacks Schemes, Definition 26.21.3 (tag 01KK), printed p.40 | n/a (no proof) | Separated = closed-immersion diagonal; quasi-separated = quasi-compact diagonal; scheme separated over S; absolute separatedness over Spec Z. |
| 3 | `lem-closed-immersion-local-on-target` | A | `def-closed-immersion-schemes` | Stacks Schemes, Lemma 26.4.2 (tag 01HL), printed p.5 | precheck pass (direct, 6 steps); contract ok | Local supplier (new). Iff test over an open cover: forward by surjectivity on stalks, converse assembles injectivity, closed image and surjective structure map. |
| 4 | `def-separated-scheme-over-base` | A | `def-separated-morphism-schemes`, `def-scheme-over-base` | Stacks Schemes, Definition 26.21.3 and Lemmas 26.21.13-15, printed pp.40-42 | n/a (no proof) | X separated over S iff the structure morphism is separated; absolutely separated means separated over Spec Z. |
| 5 | `lem-diagonal-is-immersion` | A | `def-diagonal-morphism-scheme`, `def-locally-closed-immersion`, `lem-closed-immersion-local-on-target`, `thm-affine-fibre-product-tensor-ring`, `thm-affine-closed-immersions-quotient-rings`, `lem-fibre-product-open-restriction`, `lem-points-of-scheme-fibre-product-residue-tensors` | Stacks Schemes, Lemmas 26.21.1-2 and Section 26.10, printed pp.35, 18; Vakil Sections 11.3.1-2, printed pp.306-307 | precheck pass (direct, 9 steps); contract ok | Delta is an immersion; a point lies in its image iff both projections agree on it and induce the same residue-field map. Affine-chart computation Q_i = Spec(B_i (x)_{A_i} B_i) with the multiplication map B_i (x) B_i -> B_i. Repair: step 4.1 now says X is identified with the closed subscheme Delta(X) of Q (not with Q itself), cut out on the chart Q_i by the kernel of m_i. |
| 6 | `lem-affine-morphism-separated` | A | `def-affine-morphism-schemes`, `def-separated-morphism-schemes`, `def-diagonal-morphism-scheme`, `thm-affine-fibre-product-tensor-ring`, `thm-affine-closed-immersions-quotient-rings`, `lem-fibre-product-open-restriction`, `lem-closed-immersion-local-on-target` | Stacks Schemes, Lemmas 26.21.1 and 26.21.15, printed pp.35, 42; Vakil Section 11.3.4, printed p.308 | precheck pass (direct, 6 steps); contract ok | Affine morphisms are separated, no finiteness hypotheses; each Q_W is affine and the restricted diagonal is the multiplication surjection. |
| 7 | `cor-affine-schemes-separated` | A | `lem-affine-morphism-separated`, `def-affine-morphism-schemes`, `def-separated-scheme-over-base`, `lem-fibre-product-open-restriction`, `thm-affine-fibre-product-tensor-ring` | Stacks Schemes, Lemma 26.21.15, printed p.42 | precheck pass (direct, 5 steps); contract ok | Every morphism of affine schemes is separated; every affine scheme is absolutely separated; affineness is not inferred from separatedness. |
| 8 | `lem-separated-stable-under-base-change` | A | `def-separated-morphism-schemes`, `def-base-change-morphism-schemes`, `lem-diagonal-base-change-identification`, `lem-base-change-open-closed-immersions` | Stacks Schemes, Lemma 26.21.12, printed p.41; Vakil Section 11.3.3, printed p.308 | precheck pass (direct, 5 steps); contract ok | Base change of separated is separated via X' x_{S'} X' = (X x_S X) x_S S'. |
| 9 | `lem-separated-stable-under-composition` | A | `def-separated-morphism-schemes`, `def-diagonal-morphism-scheme`, `def-closed-immersion-schemes`, `lem-graph-as-pullback-diagonal`, `lem-base-change-open-closed-immersions`, `thm-fibre-products-of-schemes-exist` | Stacks Schemes, Lemmas 26.21.9 and 26.21.12, printed p.41; Vakil Section 11.3.3, printed p.308 | precheck pass (direct, 6 steps); contract ok | Closed immersions compose; Delta_{X/S} = u o Delta_{X/Y} with u the base change of Delta_{Y/S}. |
| 10 | `lem-separated-local-on-base` | A | `def-separated-morphism-schemes`, `lem-diagonal-base-change-identification`, `lem-closed-immersion-local-on-target`, `lem-base-change-open-closed-immersions` | Stacks Schemes, Lemma 26.21.12, printed p.41; Vakil Section 11.3.3, printed p.308 | precheck pass (direct, 7 steps); contract ok | Iff on an open cover of the base, including empty and one-element covers; uses locality of closed immersions (tag 01HL). |
| 11 | `lem-monomorphism-diagonal-isomorphism` | A | `def-diagonal-morphism-scheme`, `def-separated-morphism-schemes`, `def-fibre-product-schemes-universal-property`, `thm-fibre-products-of-schemes-exist`, `lem-immersions-and-localizations-monomorphisms` | Stacks Schemes, Lemmas 26.23.1-3 (tags 01L1-01L4), printed p.47; Vakil Section 11.2.3, printed p.306 | precheck pass (direct, 6 steps); contract ok | j is a monomorphism iff Delta_{X/Y} is an isomorphism; a monomorphism is separated since an isomorphism is a closed immersion. |
| 12 | `lem-graph-closed-separated-target` | A | `def-separated-morphism-schemes`, `def-graph-morphism-over-base`, `lem-graph-as-pullback-diagonal`, `lem-base-change-open-closed-immersions`, `thm-fibre-products-of-schemes-exist` | Stacks Schemes, Lemma 26.21.10, printed p.41; Vakil Section 11.3.6, printed p.309 | precheck pass (direct, 4 steps); contract ok | Graph is a closed immersion when the target is separated; the graph is the base change of the diagonal. Repaired by adding thm-fibre-products-of-schemes-exist to deps. |
| 13 | `thm-morphisms-agree-closed-equalizer-separated-target` | A | `def-separated-morphism-schemes`, `def-diagonal-morphism-scheme`, `def-fibre-product-schemes-universal-property`, `thm-fibre-products-of-schemes-exist`, `lem-base-change-open-closed-immersions`, `lem-immersions-and-localizations-monomorphisms` | Stacks Schemes, Lemma 26.21.5, printed p.40; Vakil Section 11.4.A, printed pp.314-315 | precheck pass (direct, 5 steps); contract ok | Equalizer E -> X is a closed immersion and represents agreement; E is the base change of Delta_{Y/S} along (a,b). |
| 14 | `cor-morphisms-equal-on-dense-open-reduced-source` | A | `thm-morphisms-agree-closed-equalizer-separated-target`, `def-reduction-of-scheme`, `def-reduced-affine-scheme`, `def-closed-immersion-schemes`, `def-axiom-of-choice`, `thm-proper-ideal-contained-in-maximal-ideal`, `cor-maximal-ideals-are-prime` | Stacks Schemes, Lemma 26.21.5, printed p.40; Vakil Section 11.4.2, printed p.315 | precheck pass (direct, 7 steps); contract ok | AC item after repair: agreement on an open U with O_X -> j_*O_U injective forces equality; in the reduced + dense case a nonzero s gives a nonempty basic open D(s) disjoint from U, and producing a prime of the nonzero localization A_s is the exact AC use, cited as [F5] (thm-proper-ideal-contained-in-maximal-ideal + cor-maximal-ideals-are-prime). No item consumes this corollary, so no propagation was needed. |
| 15 | `lem-diagonal-quasi-compact-iff-quasi-separated` | A | `def-quasi-compact-and-quasi-separated-morphism`, `def-quasi-compact-and-quasi-separated-scheme`, `def-scheme`, `thm-affine-fibre-product-tensor-ring`, `lem-fibre-product-open-restriction`, `cor-affine-scheme-quasi-compact`, `def-diagonal-morphism-scheme` | Stacks Schemes, Lemma 26.21.6, printed p.40; Vakil Section 11.2.4, printed p.306 | precheck pass (direct, 8 steps); contract ok | Three equivalent conditions plus finite affine covers of pairwise intersections over a common affine base. |
| 16 | `def-valuative-diagram-separatedness` | A | `def-valuation-ring`, `def-separated-morphism-schemes`, `def-field-of-fractions` | Stacks Schemes, Definition 26.20.3 and Section 26.22, printed pp.37, 44; Vakil Section 13.7.4, printed p.383 | n/a (no proof) | Diagram = valuation ring R in its fraction field K with Spec K -> X and Spec R -> S commuting; lift = compatible Spec R -> X. |
| 17 | `lem-separated-implies-valuative-uniqueness` | A | `def-separated-morphism-schemes`, `def-valuative-diagram-separatedness`, `thm-morphisms-agree-closed-equalizer-separated-target`, `def-valuation-ring`, `thm-affine-closed-immersions-quotient-rings` | Stacks Schemes, Lemma 26.22.1 (tag 01KZ), printed p.44 | precheck pass (direct, 6 steps); contract ok | At most one lift, choice-free: the closed equalizer E = V(I) in Spec R contains the generic point (0) in its image, so I is contained in (0) and I = 0. Repair removed the unsupported sentence about primes containing a nonzero ideal of R; no prime existence is used, so the item stays choice-free. |
| 18 | `lem-quasi-compact-immersion-boundary-specialization` | A | `def-locally-closed-immersion`, `def-quasi-compact-and-quasi-separated-morphism`, `def-quasi-compact-and-quasi-separated-scheme`, `def-scheme`, `def-morphism-affine-schemes-from-ring-map`, `def-principal-distinguished-subset-of-spectrum`, `cor-specialisation-order-is-prime-inclusion`, `cor-affine-scheme-quasi-compact`, `lem-base-change-quasi-compact-morphisms`, `thm-proper-ideal-contained-in-maximal-ideal`, `def-axiom-of-choice` | Stacks Schemes, Lemma 26.19.7 (tag 05JL, printed p.36) and Commutative Algebra, Lemma 10.41.5 (tag 00HY, printed p.96); Stacks Commutative Algebra, printed p.96 | precheck pass (direct, 7 steps); contract ok | AC item: t in closure minus image yields eta <= t. Quasi-compactness gives a finite affine cover; a nonempty localization (colimit) yields a prime over p, the exact use of the AC maximal-ideal theorem. |
| 19 | `lem-local-domain-dominated-by-valuation-overring` | A | `def-valuation-ring`, `def-local-ring`, `def-field-of-fractions`, `def-integral-element-and-algebraic-integer`, `def-axiom-of-choice`, `thm-zorn`, `thm-lying-over` | Stacks Commutative Algebra, Lemmas 10.50.1-10.50.5 (tags 00I9, 00IA, 00IB, 00IC, 052K), printed p.117 | precheck pass (direct, 11 steps); contract ok | AC item: Zorn on local subrings dominating A; a maximal element has fraction field K and is integrally closed; x not in V forces 1 = sum t_i x^i, so x^{-1} is integral over V. |
| 20 | `lem-immersion-with-closed-image` | A | `def-locally-closed-immersion`, `def-closed-immersion-schemes` | Stacks Schemes, Lemma 26.10.4, printed p.18 | precheck pass (direct, 4 steps); contract ok | Local supplier (new). An immersion with closed image is a closed immersion; stalks outside the image are zero and inside factor through the open-immersion stalk isomorphism. |
| 21 | `thm-valuative-criterion-separatedness` | A | `def-valuative-diagram-separatedness`, `def-separated-morphism-schemes`, `def-diagonal-morphism-scheme`, `def-local-ring`, `def-residue-field-scheme-point`, `def-axiom-of-choice`, `lem-diagonal-is-immersion`, `lem-diagonal-quasi-compact-iff-quasi-separated`, `lem-separated-implies-valuative-uniqueness`, `lem-immersion-with-closed-image`, `lem-quasi-compact-immersion-boundary-specialization`, `lem-local-domain-dominated-by-valuation-overring`, `lem-field-valued-points-of-schemes` | Stacks Schemes, Lemma 26.22.2 (tag 01L0), printed p.44; Vakil Section 13.7.4, printed p.383 | precheck pass (direct, 11 steps); contract ok | Main AC theorem: quasi-separated f is separated iff all valuative diagrams over arbitrary valuation rings have at most one lift. Converse: boundary specialization, affine chart, dominating valuation ring V, two distinct projections; AC used exactly in the two AC lemmas. |
| 22 | `thm-immersion-monomorphism-locally-finite-type` | A | `def-locally-closed-immersion`, `def-open-immersion-schemes`, `def-closed-immersion-schemes`, `def-locally-finite-type-and-finite-type-morphism`, `lem-immersions-and-localizations-monomorphisms`, `lem-monomorphism-diagonal-isomorphism`, `lem-finite-type-local-on-source-and-target`, `def-scheme`, `thm-affine-closed-immersions-quotient-rings` | Stacks Morphisms of Schemes, Section 29.15 and Schemes, Section 26.23.8, printed pp.61, 48 | precheck pass (direct, 8 steps); contract ok | Immersion => monomorphism, locally of finite type and separated; finite presentation not claimed. Repaired: [F8] repointed to def-scheme, [F9] thm-affine-closed-immersions-quotient-rings added, step 1.3 split into 1.3 (open) and 1.4 (closed). |
| 23 | `lem-separatedness-of-open-and-closed-immersions` | A | `def-locally-closed-immersion`, `def-open-immersion-schemes`, `def-closed-immersion-schemes`, `def-separated-morphism-schemes`, `lem-immersions-and-localizations-monomorphisms`, `lem-monomorphism-diagonal-isomorphism`, `thm-immersion-monomorphism-locally-finite-type`, `lem-separated-stable-under-composition` | Stacks Schemes, Lemma 26.23.8, printed p.48; Vakil Section 11.3.C, printed p.308 | precheck pass (direct, 3 steps); contract ok | Open, closed and locally closed immersions are separated morphisms; monomorphism route plus composition. |
| 24 | `thm-separatedness-gluing-overlap-criterion` | A | `def-separated-morphism-schemes`, `def-diagonal-morphism-scheme`, `def-scheme`, `thm-affine-fibre-product-tensor-ring`, `thm-affine-closed-immersions-quotient-rings`, `lem-fibre-product-open-restriction`, `lem-closed-immersion-local-on-target` | Stacks Schemes, Lemmas 26.21.7-8 (tags 01KM-01KN), printed p.41; Vakil Sections 11.3.11-12, printed pp.311-312 | precheck pass (direct, 8 steps); contract ok | Affine-overlap criterion: U_ij cap U_ik affine and B_ij (x)_{A_i} B_ik -> Gamma(U_ij cap U_ik) surjective; affineness of intersections alone is not sufficient. |
| 25 | `cor-doubled-origin-not-separated` | A | `thm-separatedness-gluing-overlap-criterion`, `def-quasi-compact-and-quasi-separated-morphism`, `def-discrete-valuation-ring`, `lem-diagonal-quasi-compact-iff-quasi-separated`, `thm-gluing-affine-schemes` | Stacks Schemes, Lemmas 26.21.7-8 and Example 26.22.2, printed pp.41-45; Vakil Sections 11.3.I and 13.7.C, printed pp.309, 382 | precheck pass (direct, 7 steps); contract ok | Doubled origin is quasi-separated but not separated; the k[t]_(t) diagram has two lifts. Re-anchored to the published thm-gluing-affine-schemes for the construction of D. |
| 26 | `def-relative-projective-space-standard-charts` | A | `thm-gluing-affine-schemes`, `thm-fibre-products-of-schemes-exist`, `def-scheme-over-base`, `def-affine-scheme`, `def-open-immersion-schemes` | Vakil Section 11.3.8, printed pp.309-310; Stacks Schemes, Section 26.14.4, printed p.25 | n/a (no proof) | Standard charts U_i = Spec Z[x^(i)] with glueing along D(x^(i)_j); the B-page prerequisite for the P^n diagonal computation. |
| 27 | `lem-projective-space-diagonal-closed` | A | `def-relative-projective-space-standard-charts`, `thm-separatedness-gluing-overlap-criterion`, `lem-separated-local-on-base`, `thm-affine-fibre-product-tensor-ring`, `def-separated-morphism-schemes`, `def-diagonal-morphism-scheme` | Stacks Schemes, Lemma 26.21.8, printed p.41; Vakil Section 11.3.8, printed pp.309-310 | precheck pass (direct, 8 steps); contract ok | Diagonal of P^n_S is a closed immersion; chartwise surjections A[x^(i),y^(j)] -> A[x^(i)]_(x^(i)_j) with explicit kernel; base change reduces to affine S. |
| 28 | `rem-hausdorff-analogy-limited` | A | `def-separated-morphism-schemes`, `cor-affine-schemes-separated` | Vakil Exercise 11.3.B and Section 10.1.2, printed p.308; Stacks Schemes, Section 26.21 introduction, printed pp.39-40 | n/a (no proof) | Separated is not Zariski Hausdorff: the scheme-theoretic fibre product is not the product of point spaces. |
| 29 | `rem-valuative-criterion-quantifies-all-valuation-rings` | A | `thm-valuative-criterion-separatedness`, `def-valuative-diagram-separatedness`, `def-valuation-ring`, `def-discrete-valuation-ring`, `def-axiom-of-choice` | Vakil Theorems 13.7.1 and 13.7.4, printed pp.381-383; Stacks Schemes, Lemmas 26.22.1-2, printed p.44 | n/a (no proof) | The quantifier cannot be narrowed to DVRs without finite-type/locally Noetherian hypotheses; fields are included and never obstruct uniqueness; cites Vakil Thm 13.7.1 for the correct DVR context. |
| 30 | `ex-affine-line-diagonal-ideal` | B | `def-diagonal-morphism-scheme`, `thm-affine-fibre-product-tensor-ring`, `thm-affine-closed-immersions-quotient-rings`, `lem-closed-immersion-local-on-target`, `lem-diagonal-base-change-identification`, `thm-fibre-products-of-schemes-exist` | Stacks Schemes, Lemma 26.21.1 (tag 01KI) and Definition 26.21.3, printed pp.39-40; Vakil Proposition 11.3.1, printed pp.306-307 | precheck pass (direct, 5 steps); contract ok | Delta_{A^1} = V(x-y) ~= A^1 via the surjection A[x,y] -> A[x] with kernel (x-y); relative version over an arbitrary base. |
| 31 | `ex-projective-line-diagonal-bihomogeneous-equation` | B | `lem-projective-space-diagonal-closed`, `def-relative-projective-space-standard-charts`, `thm-affine-fibre-product-tensor-ring` | Stacks Schemes, Example 26.21.8 (tag 01KQ), printed p.41; Vakil Proposition 11.3.8, printed pp.309-310 | precheck pass (direct, 6 steps); contract ok | Bihomogeneous equation x_0 y_1 - x_1 y_0; chartwise reductions y - x = 0 and 1 - xz = 0; steps renumbered 2.3 -> 3.1 and 3.1 -> 4.1 with bracket corrected. |
| 32 | `cex-doubled-origin-diagonal-not-closed` | B | `cor-doubled-origin-not-separated`, `def-diagonal-morphism-scheme`, `thm-affine-fibre-product-tensor-ring` | Stacks Schemes, Lemma 26.21.7 and Example 26.21.8, printed p.41; Vakil Exercise 11.3.I, printed p.309 | precheck pass (counterexample, 6 steps); contract ok | Diagonal image of the doubled origin is dense but not closed in the cross chart U x_k V; witness (0,0). |
| 33 | `cex-doubled-origin-valuative-nonuniqueness` | B | `cor-doubled-origin-not-separated`, `def-valuative-diagram-separatedness`, `def-discrete-valuation-ring`, `def-discrete-valuation`, `def-valuation-on-a-field` | Vakil Exercise 13.7.C, printed p.382; Stacks Schemes, Lemma 26.22.2 and Example 26.22.2, printed p.44 | precheck pass (counterexample, 6 steps); contract ok | Two distinct lifts over the DVR k[t]_(t), so a single DVR diagram already fails uniqueness. |
| 34 | `ex-graph-closed-polynomial-map-scheme` | B | `def-graph-morphism-over-base`, `lem-graph-closed-separated-target`, `lem-affine-morphism-separated`, `thm-affine-fibre-product-tensor-ring`, `thm-affine-closed-immersions-quotient-rings` | Stacks Schemes, Lemma 26.21.10, printed p.42; Vakil Proposition 11.3.6, printed p.309 | precheck pass (direct, 7 steps); contract ok | Graph = V(y_1 - g_1(x), ..., y_n - g_n(x)) is a closed subscheme isomorphic to A^m via the first projection; n = 0 and m = 0 included. |
| 35 | `cex-zariski-space-nonhausdorff-yet-separated-scheme` | B | `cor-affine-schemes-separated`, `rem-hausdorff-analogy-limited` | Vakil Exercise 11.3.B, printed p.308; Stacks Schemes, Section 26.21 introduction, printed pp.39-40 | precheck pass (counterexample, 4 steps); contract ok | Separated does not imply Hausdorff: any two nonempty opens of Spec k[t] meet. |
| 36 | `ex-open-immersion-valuative-uniqueness-not-existence` | B | `lem-separatedness-of-open-and-closed-immersions`, `lem-separated-implies-valuative-uniqueness`, `def-valuative-diagram-separatedness`, `def-discrete-valuation`, `def-discrete-valuation-ring` | Vakil Theorem 13.7.4 and Exercise 13.7.A, printed p.383; Stacks Schemes, Lemma 26.22.1 and Section 26.23, printed pp.44-45 | precheck pass (direct, 6 steps); contract ok | D(t) in A^1: uniqueness holds (open immersions are separated) but the k[t]_(t) diagram has no lift, since t would have to become a unit. |
| 37 | `cex-dvr-only-test-unsafe-without-hypotheses` | B | `def-valuation-ring`, `def-discrete-valuation-ring`, `def-discrete-valuation`, `thm-gluing-affine-schemes`, `thm-separatedness-gluing-overlap-criterion`, `def-valuative-diagram-separatedness`, `def-morphism-of-schemes`, `lem-diagonal-quasi-compact-iff-quasi-separated`, `cor-affine-scheme-quasi-compact`, `lem-spectrum-localization-open-immersion` | Vakil Theorems 13.7.1 and 13.7.4, printed pp.381-383; Stacks Schemes, Lemma 26.21.7 and Lemma 26.22.2, printed pp.41, 44 | precheck pass (counterexample, 11 steps); contract ok | New ai-generated statement: glue Spec V along Spec K, V = union_n k[t^{1/n}]_(t^{1/n}) of value group Q; quasi-separated, non-separated, all DVR diagrams have <= 1 lift, two lifts over V. Repair: [F9] element form of lem-spectrum-localization-open-immersion; step 1.2 derives V_g = K. |

## Completed IDs

All 37 assigned items are authored, registered and decided; no assigned item is unresolved.

- A page `diagonals-separated-morphisms-and-valuative-uniqueness` (29): `def-locally-closed-immersion`,
  `def-separated-morphism-schemes`, `lem-closed-immersion-local-on-target`, `def-separated-scheme-over-base`,
  `lem-diagonal-is-immersion`, `lem-affine-morphism-separated`, `cor-affine-schemes-separated`,
  `lem-separated-stable-under-base-change`, `lem-separated-stable-under-composition`, `lem-separated-local-on-base`,
  `lem-monomorphism-diagonal-isomorphism`, `lem-graph-closed-separated-target`,
  `thm-morphisms-agree-closed-equalizer-separated-target`, `cor-morphisms-equal-on-dense-open-reduced-source`,
  `lem-diagonal-quasi-compact-iff-quasi-separated`, `def-valuative-diagram-separatedness`,
  `lem-separated-implies-valuative-uniqueness`, `lem-quasi-compact-immersion-boundary-specialization`,
  `lem-local-domain-dominated-by-valuation-overring`, `lem-immersion-with-closed-image`,
  `thm-valuative-criterion-separatedness`, `thm-immersion-monomorphism-locally-finite-type`,
  `lem-separatedness-of-open-and-closed-immersions`, `thm-separatedness-gluing-overlap-criterion`,
  `cor-doubled-origin-not-separated`, `def-relative-projective-space-standard-charts`,
  `lem-projective-space-diagonal-closed`, `rem-hausdorff-analogy-limited`,
  `rem-valuative-criterion-quantifies-all-valuation-rings`.
- B page `...-examples` (8): `ex-affine-line-diagonal-ideal`, `ex-projective-line-diagonal-bihomogeneous-equation`,
  `cex-doubled-origin-diagonal-not-closed`, `cex-doubled-origin-valuative-nonuniqueness`,
  `ex-graph-closed-polynomial-map-scheme`, `cex-zariski-space-nonhausdorff-yet-separated-scheme`,
  `ex-open-immersion-valuative-uniqueness-not-existence`, `cex-dvr-only-test-unsafe-without-hypotheses`.

Decisions: pair scope re-recorded `sufficient` for the post-author scope hash; every item recorded `accept` with
confidence 1 and its examined dependency list, in prerequisite order, after authoring and checks. No `--owner`
invocation, no judge or audit stamp; all items remain `draft`.

## Checks actually run (pair scope, explicit paths)

| Check | Result |
|---|---|
| `precheck.mts` on all 30 owned proof items | 30 checked, 0 failing |
| `proof-contract.mjs research/frontier-35-ten-categories-batch-6.proof-contracts.json --strict` | 0 errors, 0 warnings, 30/30 items (172 citations, 198 derivations, 240 boundary rows) |
| `rendercheck.mjs` on `library/scheme-theory/diagonals-separated-morphisms-and-valuative-uniqueness.md` and `...-examples.md` | clean |
| `content-policy.mjs research/frontier-35-ten-categories-batch-6.pages.json` | 0 errors attributable to the owned pair; 41 `scope-item-missing` rows are the sibling pair's unauthored items |
| `coverage-checklist.mjs research/frontier-35-ten-categories-batch-6.coverage.json --require-destination` | 2 pages, 161 harvested rows, 0 errors, 0 warnings |
| `manifest-deps.mjs research/frontier-35-ten-categories-batch-6.pages.json` | 78 items, 0 normalized, 0 errors |
| `validate-plan.mjs research/plan-spec.json` | pass; no item cycles, forward references, B-page dependencies or unresolved ids; pre-existing `redundant-prereq` notes only |
| `depcheck.mjs --quiet` | no owned id or owned page in the output (global failures unrelated: brauer/blocks page cycle, b-leaf-content, published-unaudited, multi-home, cited-not-in-deps, one link-unresolved) |
| `fwdcheck.mjs` | no owned id or owned page in the output |
| `frontier-35-ten-categories-batch-6.cross-batch-dependencies.json` | four sibling rows preserved unchanged; owned pair declares no cross-batch edge (46 published + 26 owned dependencies, zero foreign drafts) |

## Local suppliers added to the assigned A page

- `lem-closed-immersion-local-on-target` — closed immersions are local on the target, stated as an iff over an open
  cover. Stacks *Schemes* Lemma 26.4.2 (tag 01HL, printed p.5) supplies only the sufficiency direction in that form; the
  converse is proved locally in the item from the published two-condition definition `def-closed-immersion-schemes`.
  Required by `lem-diagonal-is-immersion`, `lem-affine-morphism-separated`, `lem-separated-local-on-base`,
  `thm-separatedness-gluing-overlap-criterion` and `ex-affine-line-diagonal-ideal`.
- `lem-immersion-with-closed-image` — an immersion with closed image is a closed immersion, proved from the
  factorization definition of an immersion and the two-condition definition of a closed immersion (Facts [F1], [F2]).
  Required by `thm-valuative-criterion-separatedness`. Source: Stacks *Schemes* Lemma 26.10.4, printed p.18.

Both are registered in the batch manifest, the coverage file, the batch proof contracts and the A-page library file.

## Published concerns

- No published item depends on any owned item (explicit scan of `items/*.md` found zero consumers), so this pair's
  authoring produces no published-consumer event.
- `thm-affine-closed-immersions-quotient-rings` (published, audit pass 2026-09-07) was checked for a convention
  mismatch between its cited Stacks *Schemes* Lemma 26.10.1 (tag 01IN, stated for a closed immersion of locally
  ringed spaces) and the two-condition `def-closed-immersion-schemes`. The conventions agree for morphisms of
  schemes: Stacks *Schemes* Definition 4.1 (tag 01HK) is the two-condition definition, and Lemma 24.2 (tag 01LD)
  proves that a morphism satisfying the two conditions is a closed immersion of schemes. **Not a defect**;
  confidence high; no repair proposed. Recorded here rather than in the serial ledger because nothing is claimed.
- Global gate findings outside this pair's closure (12 `extcheck` errors on `fs-every-subexponential-growth-group-...`,
  `thm-onan-scott-...` and nine unset-precheck remarks; the brauer/blocks `page-cycle`; published-unaudited rows)
  are unrelated and were not modified.

## Open obligations and plan mismatches

- Open obligations: none requiring owner action from this pair. The AC assumption is declared and propagated on the
  four AC items (`lem-quasi-compact-immersion-boundary-specialization`,
  `lem-local-domain-dominated-by-valuation-overring`, `thm-valuative-criterion-separatedness`,
  `cor-morphisms-equal-on-dense-open-reduced-source`; the last was added during this dispatch and has no consumers,
  so nothing further depends on the assumption); `lem-separated-implies-valuative-uniqueness` stays choice-free. The
  only `ai-generated` statement is `cex-dvr-only-test-unsafe-without-hypotheses`, which has no dependents and was
  checked by hand.
- Plan mismatches (for Step 4): none. Planned rows 366.067 / 366.068 still carry empty item lists; the batch manifest
  supplies the post-author inventory, and the shared plan file was not edited. No shared prose amendment is
  requested.
- Sibling pair `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`: untouched; its 32 A + 9 B items
  remain unauthored by this dispatch and are its own writer's responsibility.

---

# Second-pass audit — attempt 2

Label `step3b-pair-diagonals-separated-morphisms-and-valuative-uniqueness-ea06ccd0fccf0384` (the sections above were
written under attempt 1, label `1aa1e069dac4beda`). This pass re-read the pair, the batch-6 manifest/coverage/
contracts/notes and the two published suppliers of the valuative chain, re-ran the closure check (pair scope
`sufficient`; all 37 items closed at the current hashes), audited every Stacks tag cited by the 37 owned items
against the live site, and repaired three defects inside the pair. No statement and no inventory entry changed, so
the scope hash is unchanged; the sibling pair's manifest rows, page and four cross-batch rows were not touched.

## Confirmed defects and repairs (own files, exact IDs)

1. `lem-local-domain-dominated-by-valuation-overring`, step 5.2 — **undeclared load-bearing input (confirmed)**.
   The step inferred `𝔪_V A' = A'` from "there is no prime of `A' = V[x]` lying over `𝔪_V`" citing only [F2] and
   steps 3.1, 4.3. The inference needs the maximal-ideal theorem plus "maximal ⇒ prime". Repair: added facts
   [F7] `thm-proper-ideal-contained-in-maximal-ideal` and [F8] `cor-maximal-ideals-are-prime`, cited at step 5.2,
   stated the equivalence "`𝔪'` contains `𝔪_V A'` iff `𝔪'` lies over `𝔪_V`", extended deps to nine entries, updated
   the manifest row (deps and strategy) and the proof contract (two citation entries with exact Statement quotes,
   step-5.2 derivation inputs, `nonempty-choice` boundary evidence). Also corrected the reference line to
   "Definition 10.50.1 and Lemmas 10.50.2-10.50.5" (10.50.1 is a definition; all five tags verified live).
   The item already assumed AC and the new fact is AC-derived, so the AC declaration and propagation are unchanged.
   Confidence: high (the gap is textual and the repair is the cited published theorem). Consumers re-examined:
   `thm-valuative-criterion-separatedness` and `rem-valuative-criterion-quantifies-all-valuation-rings`.
2. `thm-separatedness-gluing-overlap-criterion` — **wrong source tags (confirmed)**. The reference line cited
   "tags 01KM-01KN" for Stacks Lemmas 26.21.7-8; live tags are 01KP (Lemma 26.21.7) and 01KQ (Example 26.21.8),
   while 01KM is Lemma 26.21.5 and 01KN is Lemma 26.21.15. Repair: tags corrected; statement, facts and proof
   unchanged. Confidence: high (fetched both tags).
3. `thm-valuative-criterion-separatedness`, steps 7.1 and 9.1 — **false equality / implicit residue-field step
   (confirmed, wording-level)**. Step 7.1 asserted `V/𝔪_V = κ(t)`; the local homomorphism `𝒪_{P,t} → V` induces only
   the canonical injective field map `κ(t) → V/𝔪_V`, which need not be an isomorphism. Step 7.1 now derives
   "closed point ↦ t" from the [F9] correspondence for the local homomorphism of step 6.1 and names the residue map
   as that injection; the generic-point clause keeps the kernel computation `ker(𝒪_{P,t} → K) = 𝔮R_𝔭` of step 5.1.
   Step 9.1 now states that the residue-field maps of `a` and `b` at the closed point factor as
   `κ(pr_i(t)) → κ(t) → V/𝔪_V`, and that the injection makes the two differing maps `κ(x) → κ(t)` distinguish the
   lifts. The conclusion of the theorem is unaffected. Contract derivations for 7.1 and 9.1 updated; confidence:
   high. Consumers re-examined: `rem-valuative-criterion-quantifies-all-valuation-rings`.

Dependent receipts refreshed after rechecking that each cites the repaired items through statements (none of which
changed): `cor-doubled-origin-not-separated`, `lem-projective-space-diagonal-closed`,
`ex-projective-line-diagonal-bihomogeneous-equation`, `cex-doubled-origin-diagonal-not-closed`,
`cex-doubled-origin-valuative-nonuniqueness`, `cex-dvr-only-test-unsafe-without-hypotheses`,
`rem-valuative-criterion-quantifies-all-valuation-rings`, plus the three repaired items themselves (recorded
`repaired`). All other 27 receipts are untouched and still current.

## Suspicion investigated and refuted (recorded for honesty)

The attempt-1 handoff flagged `thm-separatedness-gluing-overlap-criterion` as a false statement: it proposed that
the criterion needed a "`U_ij ∩ U_ik ≠ ∅`" hypothesis, with `X = Spec k ⊔ Spec k` over `S = Spec k` as a
counterexample, on the ground that `k ⊗_k k = k → Γ(∅, 𝒪_X) = 0` "is not surjective". This is **not a defect**:
the zero ring has a single element, so its image is the whole target and every map onto it is surjective; the empty
scheme is `Spec 0` and is affine. The separated disjoint union satisfies the criterion as stated. Stacks Lemma
26.21.7 (tag 01KP, printed p.41) states the condition for every pair of affine opens mapping into a common affine
open, with no nonemptiness hypothesis, and its proof produces `Spec((A ⊗_R B)/J)` with `J` the unit ideal exactly
when the intersection is empty. No change was made. Confidence: high (statement and proof read in full).

## Checks actually run on the post-repair content

- `precheck.mts` on the 30 owned proof items (explicit paths): 30 checked, 0 failing.
- `proof-contract.mjs ...batch-6.proof-contracts.json --strict`: 0 errors, 0 warnings, 30/30 items.
- `rendercheck.mjs` on `library/scheme-theory/diagonals-…-uniqueness.md` and `…-examples.md`: OK, 2 files.
- `content-policy.mjs ...batch-6.pages.json`: 41 errors, every one a `scope-item-missing` row of the sibling pair
  (the owned pair contributes zero errors); `coverage-checklist.mjs --require-destination`: 2 pages, 161 rows,
  0 errors, 0 warnings; `manifest-deps.mjs`: 78 items, 0 normalized, 0 errors; `validate-plan.mjs
  research/plan-spec.json`: OK.
- `depcheck.mjs --quiet` / `fwdcheck.mjs`: no owned id or owned page in either output (global findings elsewhere
  are unrelated); `frontier-dependency-ledger.mjs refresh --run frontier-35-ten-categories`: unified ledger and
  batch-6 input byte-identical, since the two new suppliers are published items outside this run's batches.
- Consumer scan over all `items/*.md` and `library/**`: zero non-owned references to any owned id; thus no
  published-consumer event and no edit to `research/published-consumer-supplier-ledger.md`.
- Live source checks 2026-09-24: all Stacks tags cited by the 37 items re-fetched and matched, except the
  01KM-01KN line repaired above; `lem-field-valued-points-of-schemes` and
  `lem-points-of-scheme-fibre-product-residue-tensors` were read and match their uses.

## Open obligations

No item unresolved, no owner-held escalation, no published defect to route. The obligations recorded above stand
(AC declared on the four AC items; the single `ai-generated` statement has no dependents; plan rows 366.067/366.068
keep empty item lists, so the Step 4 splice still supplies the post-author inventory). No shared prose amendment is
requested. The sibling pair remains fully untouched.

Plan-closure note for the two suppliers added in Repair 1: `thm-proper-ideal-contained-in-maximal-ideal` and
`cor-maximal-ideals-are-prime` are published items on `library/abstract-algebra/ideals-and-quotient-rings.md`
(already cited by frontier-35 batch 5), and that page lies in the A page's plan prerequisite closure (178 pages
reachable from `diagonals-separated-morphisms-and-valuative-uniqueness` in `research/plan-spec.json`), so the new
dependencies introduce no plan-order mismatch for the Step 4 splice.

## Owner Step-3 provenance renewal (2026-09-24)

The partial V2 certifier initially left both author-added A suppliers pending:
`lem-closed-immersion-local-on-target` and `lem-immersion-with-closed-image`.
Their owner receipts at 07:22Z preceded the shared batch-6 manifest write at
08:36:33Z, so they could no longer bind all current transitive inputs. The
current per-item manifest entries and mathematical suppliers were rechecked.
The first proof agrees with Stacks *Schemes* Lemma 26.4.2 (tag 01HL): closed
immersions are local on the target. In the second item's Facts, the open
immersion stalk isomorphism is now stated only for points of the open
subscheme; the proof already uses it only there. Its closed-image argument
remains valid.

Fresh `record-item --owner --decision repaired` receipts bind both suppliers
to their current hashes. The partial V2 certifier now lists both, with the
original successful pair-author result as origin and current owner repair
bindings, and certifies the pair's scope delta. The proof-only correction
changed the transitive input hashes of
`thm-valuative-criterion-separatedness` and
`rem-valuative-criterion-quantifies-all-valuation-rings`. Their uses depend
only on the unchanged supplier statement, so fresh owner item decisions
record that they remain valid. The Step-3 final check now has **zero work rows
for this 37-item pair**, with its scope decision closed. At this check there
are **73 rows outside this pair**: 43 in batch 15 and 30 in batch 17.

Focused checks: precheck passed both suppliers and the valuative theorem;
strict batch-6 proof contracts passed all three proof items with zero errors
or warnings; the A page rendered cleanly; manifest-deps passed for all 80
batch-6 items. No batch-15 or batch-17 carrier was edited here.
