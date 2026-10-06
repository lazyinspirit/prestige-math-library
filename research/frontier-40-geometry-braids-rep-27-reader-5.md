# Reader 5 — batch 5

Independent Step 5a review of the current authored mathematics for run `frontier-40-geometry-braids-rep-27`. This report records local repairs and remaining reader findings; it supplies no judge or publication certification.

## Scope and opened inventory

Opened the exact dispatch manifest, `briefs/reader.md`, both assigned pages, and every one of the 26 assigned items below. The assigned items were read in their actual dependency order (the spine precedes the relative-module definition, despite their page-list order). The existing contracts were checked against current statements, facts, proof steps and boundary cases, rather than treated as evidence of mathematical acceptance. Some elementary external interfaces were opened during subsequent crosschecks; the external reading chronology was not a complete supplier-first traversal.

Assigned pages:

- `library/braid-groups/the-burau-representations.md` — A page; prose edited as described below.
- `library/braid-groups/the-burau-representations-examples.md` — B page; read only.

All assigned items were edited for checked bibliography/version corrections, with the material mathematical repairs distinguished below. The table records what was checked; it does not replace the proofs.

| Opened item ID | Checked mathematics |
| --- | --- |
| `def-total-winding-homomorphism-of-the-punctured-disk` | Free extension, surjectivity, generator exponent sums and geometric invariance. |
| `lem-the-punctured-disk-is-path-connected-locally-path-connected-and-semilocally-simply-connected` | Interior/boundary neighbourhoods, n=0, path concatenation; supplied the Euclidean norm theorem. |
| `def-the-laurent-polynomial-ring` | Unique Laurent coefficients, arbitrary unital target evaluation, augmentation kernel. |
| `lem-units-and-powers-of-the-laurent-polynomial-ring` | Normal form, domain, distinct powers, units and the nonunit geometric sum. |
| `def-burau-infinite-cyclic-cover` | Cover-classification hypotheses, based uniqueness, normal kernel, index and positive deck generator. |
| `def-reduced-burau-homology-module` | Deck-induced unit in End_Z, finite Laurent evaluation and the exponent action. |
| `def-unreduced-burau-relative-homology-module` | Whole-fibre pair, torsor, functoriality and Laurent action. |
| `lem-the-cyclic-cover-deformation-retracts-onto-the-lifted-flower-and-spine` | Lifted retraction, graph topology, explicit quotient homotopies, differential and both ranks; repaired title. |
| `lem-the-reduced-burau-module-is-free-of-rank-n-minus-one` | Transported absolute cycle basis, n=1 and deck action. |
| `lem-braid-mapping-classes-lift-equivariantly-to-the-burau-cover` | Abstract-model composition, lift criterion hypotheses, inverse, fibre fixing, equivariance and relative prism. |
| `def-reduced-burau-representation` | Fixed weighted adjacent basis, explicit inverse basis change, isotopy invariance and multiplicativity. |
| `def-unreduced-burau-matrices` | Rescaling e_i=t^(i-1) epsilon_i, columns, inverse block and deferred relations. |
| `lem-unreduced-burau-matrices-satisfy-the-artin-relations` | Disjoint supports, full 3-by-3 product and von Dyck, including n=1. |
| `lem-the-invariant-vector-and-covector-of-the-unreduced-burau` | Vector, covector recurrence, all scalar multiples, nonzero geometric sum, including n=1. |
| `prop-unreduced-burau-fits-an-exact-sequence-with-the-reduced-module` | Discrete-fibre chain differential, path-connected H_0, connector, exactness and naturality. |
| `lem-the-geometric-half-twist-acts-on-the-lifted-edge-basis-by-the-burau-block` | Actual lifted paths in X~, word lift, singular concatenation/reversal identities and deck-level rescaling. |
| `thm-topological-and-matrix-burau-representations-agree` | Generator agreement, explicit g-basis coefficients, b-to-g identification and three-strand full twist. |
| `prop-reduced-and-unreduced-burau-representations-have-the-same-kernel` | Coordinate tensor isomorphism, direct field decomposition, split kernel base change and both directions. |
| `lem-the-minus-one-specialization-of-three-strand-burau-has-kernel-generated-by-delta-to-the-fourth` | U,V, generation, inverse presentation transformations, PSL quotient, central order-two kernel and Delta^4 normal closure. |
| `lem-reduced-burau-detects-every-power-of-delta-to-the-fourth-in-b-three` | Full-twist square, all positive/negative powers and distinct Laurent powers. |
| `thm-reduced-burau-is-faithful-for-at-most-three-strands` | Trivial, cyclic and three-strand cases; specialization kernel followed by power detection. |
| `rem-current-faithfulness-status-of-the-reduced-burau-representation` | Correct local domain/AC; external n>=5 and recorded n=4 claim, pinned to v2. |
| `ex-unreduced-and-reduced-burau-matrices-for-b-three` | Both braid products, explicit g-basis spanning and reduced restrictions. |
| `ex-the-burau-image-of-the-full-twist` | Scalar center image, injectivity on powers and minus-one specialization. |
| `ex-specializing-burau-at-t-equals-one-recovers-permutation-data` | Explicit n>=2, permutation factorization, split-module quotient specialization and proper lattice. |
| `cex-an-invariant-line-need-not-have-an-invariant-complement-over-a-laurent-ring` | Equivariant projection yields invariant covector; its value forces the nonunit sum to be a unit. |

### Opened prerequisite interfaces

The following files were opened at `items/<id>.md`. For ordinary suppliers, the exact Definition/Statement/Example interface used by the batch was read. Full bodies were also read for the standard meridians, flower retraction, free-meridian theorem, Artin automorphisms, geometric meridian action, geometric mapping-class theorem and deck-normalizer lemma. The relative prism formula and its operator were opened to justify descent to relative chains. This is not a recursive audit of every published supplier proof.

- `cor-deck-group-of-a-regular-covering`
- `cor-homotopic-maps-induce-the-same-map-on-singular-homology`
- `cor-polynomial-ring-over-a-domain-is-a-domain`
- `cor-square-matrix-invertible-iff-determinant-is-a-unit`
- `cor-units-in-a-polynomial-ring-over-a-domain`
- `def-artin-automorphisms-of-the-free-group`
- `def-axiom-of-choice`
- `def-boundary-fixed-mapping-class-group-of-a-punctured-disk`
- `def-braid-group-by-the-artin-presentation`
- `def-cellular-boundary-from-three-consecutive-skeleta`
- `def-cellular-homology`
- `def-commutative-ring`
- `def-convex-subset-of-euclidean-space`
- `def-covering-map-and-evenly-covered-neighbourhoods`
- `def-cw-complex-with-closure-finiteness-and-weak-topology`
- `def-deck-transformation-and-deck-group`
- `def-elementary-geometric-half-twist`
- `def-euclidean-inner-product`
- `def-euclidean-spheres-and-closed-balls`
- `def-field-of-fractions`
- `def-finite-symmetric-group-and-permutation-notation`
- `def-free-group`
- `def-free-product-with-amalgamation`
- `def-garside-half-twist-and-simple-positive-braid`
- `def-group-homomorphism`
- `def-group-presentation`
- `def-induced-singular-chain-map`
- `def-invertible-matrix-and-similarity-over-a-commutative-ring`
- `def-locally-connected`
- `def-monodromy-action-on-a-covering-fibre`
- `def-multiplicative-subset-and-localisation`
- `def-norm-and-normed-space`
- `def-oriented-cellular-chain-group`
- `def-path-connected`
- `def-polynomial-degree-leading-coefficient-and-monic`
- `def-polynomial-ring-over-a-commutative-ring`
- `def-principal-localisation`
- `def-prism-operator-for-a-homotopy`
- `def-regular-covering`
- `def-relative-homology-connecting-homomorphism-on-cycles`
- `def-relative-singular-homology`
- `def-restriction-and-extension-of-scalars`
- `def-retraction-and-deformation-retract`
- `def-ring-homomorphism`
- `def-ring-matrix-product-identity-and-transpose`
- `def-semilocally-simply-connected-space`
- `def-singular-boundary-operator`
- `def-singular-chain-complex-and-singular-homology`
- `def-singular-simplex-and-singular-chain-group-with-coefficients`
- `def-standard-meridians-of-a-punctured-disk`
- `def-standard-topological-simplex-and-its-affine-face-maps`
- `def-standard-topologies`
- `def-subspace-topology-top`
- `def-the-artin-representation-on-a-free-group`
- `ex-convex-subsets-of-rn-are-path-connected`
- `ex-two-by-two-determinant-formula`
- `lem-deck-transformations-correspond-to-normalizer-cosets`
- `lem-subgroup-quotient-of-universal-cover`
- `lem-the-standard-flower-is-a-deformation-retract-with-free-meridian-basis`
- `lem-units-of-z`
- `prop-covering-maps-are-local-homeomorphisms-with-discrete-fibres`
- `prop-covering-spaces-are-stable-under-restriction-finite-products-and-pullback`
- `prop-deck-transformations-are-determined-by-one-point-and-act-freely`
- `prop-localisation-zero-equality-and-kernel-criteria`
- `prop-relative-homology-is-functorial-for-maps-of-pairs`
- `prop-singular-chains-and-homology-are-covariantly-functorial`
- `prop-the-geometric-action-on-meridians-is-the-artin-representation`
- `prop-units-in-a-localisation`
- `prop-zero-th-singular-homology-is-free-on-path-components`
- `thm-braid-group-is-the-boundary-fixed-mapping-class-group-of-the-punctured-disk`
- `thm-cauchy-schwarz-and-the-euclidean-norm`
- `thm-cellular-homology-computes-singular-homology`
- `thm-classification-of-connected-covering-spaces`
- `thm-connected-and-locally-path-connected-implies-path-connected`
- `thm-continuous-image-of-a-connected-space`
- `thm-convex-subsets-have-trivial-fundamental-group`
- `thm-covering-space-lifting-criterion`
- `thm-deck-group-as-normalizer-quotient`
- `thm-first-isomorphism-theorem-groups`
- `thm-five-lemma-for-modules`
- `thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology`
- `thm-homotopy-lifting-for-covering-maps`
- `thm-long-exact-sequence-of-a-pair-in-singular-homology`
- `thm-naturality-of-the-long-exact-sequence-of-a-pair`
- `thm-path-connected-implies-connected`
- `thm-path-lifting-for-covering-maps`
- `thm-polynomial-degree-of-a-product-over-a-domain`
- `thm-polynomial-ring-is-a-commutative-ring`
- `thm-presentation-of-a-free-product`
- `thm-presentation-of-a-free-product-with-amalgamation`
- `thm-regular-covering-characterizations`
- `thm-relative-homology-of-consecutive-cw-skeleta`
- `thm-ring-matrix-arithmetic-laws`
- `thm-sheets-equal-fundamental-group-index`
- `thm-singular-chain-homotopy-formula`
- `thm-the-artin-presentation-is-complete-for-geometric-braids`
- `thm-the-braid-group-surjects-onto-the-symmetric-group`
- `thm-the-center-of-b-n-is-generated-by-the-full-twist-for-n-greater-than-two`
- `thm-the-punctured-disk-fundamental-group-is-free-on-standard-meridians`
- `thm-the-symmetric-group-has-the-coxeter-presentation`
- `thm-the-two-strand-braid-group-is-infinite-cyclic`
- `thm-uniqueness-of-lifts-from-a-connected-space`
- `thm-universal-property-of-localisation`
- `thm-von-dyck`

Additional navigation/evidence opened: the published A pages `the-artin-action-on-a-free-group` and `artin-presentation-completeness-and-braid-combing`; the statements of `thm-the-artin-representation-is-faithful`; the full body of `cor-all-four-classical-braid-models-realize-the-artin-presentation` (considered as a possible identification supplier, then not used); and the dependency-proof sections of the deck normalizer theorem, the homotopy-invariance corollary and the convex-path example needed for the specific inference checks. The current-run batch-5 cross-batch-dependency artifact was also opened; its empty list was not used to limit prerequisite reading.

## Repairs and evidence

1. **Fixed reduced basis.** `def-reduced-burau-representation`, Definition and F2, formerly froze the absolute basis `h_i=epsilon_i-epsilon_n`; the agreement theorem and subsequent matrix identities use the different basis `g_i=t e_i-e_{i+1}`. The definition now fixes `b_i=t^i(h_i-h_{i+1})`, with `h_n=0`, and proves its inverse change of coordinates `h_i=sum_{k=i}^{n-1}t^{-k}b_k`. The agreement theorem explicitly identifies its inclusion-image with `g_i`, because `e_i=t^(i-1)epsilon_i`. This preserves all intended later matrices, rather than silently declaring two distinct bases equal. All assigned consumers using the reduced matrices were checked against this convention. This changes the Definition's fixed matrix basis; the Step 5b lead must assess any consumers outside this batch under the normal interface-change process. No outside consumer was edited or independently certified.

2. **Exact abstract braid identification.** The geometric mapping-class theorem's domain is `G_n`, whereas the batch repeatedly invokes the abstract Artin-presentation group `B_n`. The opened completeness theorem establishes `varphi_n:B_n -> G_n`; composition with `Psi:G_n -> Mod` supplies the exact needed isomorphism. Added that dependency and exact citation in the lift lemma, reduced definition, half-twist lemma and agreement theorem. The lift lemma now states the composition and supplies F9. Replaced ambiguous “isotopic relative to all punctures” wording for representatives that permute punctures by isotopies through boundary-fixed homeomorphisms preserving the marked set setwise, as required by the opened mapping-class definition.

3. **Laurent evaluation with noncommutative targets.** `def-the-laurent-polynomial-ring`, Universal property, cited a theorem whose target is commutative, then applied its asserted stronger property to endomorphism rings. The stronger assertion is true but needed proof. Added the explicit map `sum a_k t^k -> sum (a_k 1_A)u^k`, its finite convolution multiplication proof using central integer scalars and the identity `u^k u^l=u^(k+l)`, and uniqueness. The absolute and relative homology definitions therefore have the necessary endomorphism-ring input. Corrected “alternating sum” to “negative sum” in the negative-exponent augmentation formula.

4. **Cover and spine prerequisites/domains.** The covering definition's based-unique claim now explicitly uses lift uniqueness for two based covering isomorphisms. The punctured-disk regularity lemma now cites the opened Euclidean norm theorem, clause (2), for the triangle/homogeneity axioms used in proving convexity of the closed disk. The spine item's original title claimed a deformation retraction onto both flower and spine, although its Statement (2) proves a quotient homotopy equivalence. The title now says that the cover retracts onto the lifted flower and has a deck-equivariant spine model. The A-page prose states these two different constructions exactly. The explicit quotient homotopies were checked at both endpoints of every tether/circle edge; no withdrawal is proposed.

5. **Actual lifted paths and relative chain identities.** In the half-twist lemma, F4 and steps 1.1–1.2 formerly applied a homeomorphism of `X~` directly to an edge of the quotient spine `Sigma`. It now computes on the actual lifted meridian paths `a_j^(k)` in `X~` and transports their relative classes through the spine model. Added F5 and explicit singular triangles: the triangle `P(u_1/2+u_2)` for `P=a*b` has boundary `b-P+a`; the triangle `a(u_1)` has boundary `a^{-1}-c+a`, with `c` a fibre chain. These prove concatenation and reversal in relative homology. The lift lemma now gives F10 with the exact prism operator and chain-homotopy formula, explaining why the prism of a fibre simplex stays in the fibre and hence descends to relative chains. These repair proof prerequisites without changing the half-twist block.

6. **Correct H_0 hypothesis.** The exact-sequence proposition's F2 claimed `H_0=Z` for an arbitrary nonempty connected space, while its exact opened supplier says path components. F2 now requires path-connectedness. Step 1.2 explicitly joins spine vertices by finite edge strings, joins other spine points to vertices, and uses the homotopy equivalences to obtain path-connectedness of `X~`. Corrected F3's pair from `(X,A)` to `(X~,A)`. The discrete-fibre differential, the connector `(t-1)sigma`, and exactness remain valid.

7. **Specialization is not automatic left exactness.** The `t=1` example's step 3.1 established the image of the kernel but omitted why its specialization injects. It now uses `W=N direct-sum Lambda_1 e_1`, `N=ker sigma`, to prove `N cap (t-1)W=(t-1)N`. It explicitly identifies the target as `(t-1)Lambda_1/(t-1)^2Lambda_1`, rather than identifying the entire ideal with `Z`. This supplies the asserted specialized exact sequence. Added the essential `n>=2` to its Example paragraph, already present in its Given. The B-page prose has the corresponding uneditable missing hypothesis described below.

8. **Scalar-extension details.** The same-kernel proposition's step 1.1 now supplies the coordinate isomorphism of the scalar extension of a finite free module and writes `1 tensor (T-id)(x_j)` in the order of the defined tensor product. Step 1.2 gives the direct decomposition using `sigma_K(v)^{-1}` and identifies the scalar-extended kernel by the existing split decomposition with `e_1`; it does not silently invoke a separate dimension theorem or tensor exactness theorem. Neither kernel nor statement changed.

9. **Boundary cases and recorded status.** The matrix-relation and invariant-vector/covector lemmas' Given now admits `n=1`, matching their statements; the empty-generator case is immediate and was checked. The status remark now explicitly gives the local range `1<=n<=3` under AC, avoiding an undefined `n=0` reduced representation. Its external n=4 reference is pinned to v2, with the `external_dependency.source_url` matching. Its lack of a local n=4 proof is retained.

10. **Bibliography and source locators, all 26 items.** Version-labelled `arXiv:2607.05283v1` entries now use the v1 PDF URL; the external remark uses v2. The Survey descriptions formerly attributed relative modules, a pair sequence, invariant covectors, the full twist, or the minus-one kernel to sections that do not state those exact local computations. Descriptions now identify the Survey as background; local calculations remain proved in the items. Section 4.4 is located at printed p. 52, not a claim about pp. 52–54. Corrected the Stacks localisation/units locators, Conrad's nonexistent “Corollary 2.3” locator, the v1 Theorem 4.1 locator (printed p. 7), and the unrelated “one-vertex calculation” description of Bigelow's Lawrence–Krammer section. The minus-one lemma explicitly states Conrad's generation theorem as F7 instead of silently assuming the Euclidean algorithm. This changes citation descriptions and bindings, not the intended claims.

11. **Contracts and formatting.** Reconciled fact-to-source links, exact source-section quotations, every numbered proof row and all explicit inputs in the task-owned batch-5 contract. Corrected genuine boundary-evidence errors: interior versus boundary handling when `n=0`, unweighted versus weighted spine coordinates, the zero class at positive rank, identity-class versus identity-map lifts, isotopy/lift endpoints and representative-selection choice claims. Risk-review notes record repair evidence without a new judge or acceptance stamp. No `verification.judge` record remains in the edited items. Reflow was run on every changed item; every proof-bearing item passed precheck, while definitions/recorded remarks without proof sections were handled as such by the tools.

## Authoritative source reading

- [Birman–Brendle, Braids: A Survey](https://www.math.columbia.edu/~jb/Handbook-21.pdf): the complete relevant sections 4.2 (printed pp. 46–47) and 4.4 (printed p. 52). They give the matrix block, specialization context and absolute cover construction. They do not provide all this batch's relative and basis calculations.
- [Conrad, SL2(Z)](https://kconrad.math.uconn.edu/blurbs/grouptheory/SL(2,Z).pdf): Theorem 1.1 with its complete algebraic proof on p. 1, and Appendix C, Theorem C.1 with the complete normal-form argument on pp. 17–19. These supply generation by S,T and the PSL free-product presentation. The batch's central-kernel and inverse-generator transformations were checked separately.
- [Stacks, section 10.9](https://stacks.math.columbia.edu/tag/00CM), especially Definitions 10.9.1–10.9.2 and [Proposition 10.9.3](https://stacks.math.columbia.edu/tag/00CP): read the fraction relation and full universal-property proof. The stronger endomorphism-ring property is supplied locally.
- [Bigelow, Burau nonfaithfulness](https://arxiv.org/pdf/math/9904100): abstract, Definition 1.1 and Theorems 1.2/1.4, including their stated domains. The abstract explicitly records the n>=5 range. This was a check of the external statement, not an audit of the full nonfaithfulness proof.
- [Bharathram–Birman–Brendle v1](https://arxiv.org/pdf/2607.05283v1) and [v2](https://arxiv.org/pdf/2607.05283v2): introductions, Main Theorem and version metadata; also the v1 Theorem 4.1 passage and its proof, to locate the cited three-strand result. The batch's three-strand proof is the independent specialization argument. The n=4 proof was not audited, and its recorded external status was preserved.
- [Bigelow, Lawrence–Krammer representation](https://arxiv.org/pdf/math/0204057), complete section 2.1 (printed p. 3): this is an analogous cover/action construction on two-point configuration homology, not the advertised one-vertex Burau calculation. The batch proves its own graph calculation.

## Uneditable finding

**Subject:** `the-burau-representations-examples`, B-page summary, lines 26–31, especially “proper sublattice” at lines 29–30.

**Defect:** missing hypothesis, fatal as a defective mathematical prose claim. The paragraph omits `n>=2`, although the referred example uses that hypothesis. At `n=1`, `v=(1)`, the sum-zero lattice is `{0}`, and `Z v+{0}=Z`; the displayed congruence lattice modulo 1 is also all of `Z`. It is therefore not a proper sublattice, and the splitting is integral. Qualify this paragraph by `n>=2` (or state the n=1 exception). This is an elementary counterexample, requiring no new source. I did not edit the B-page prose because this dispatch forbids that edit. No published-dependency or another-batch draft defect was confirmed.

## Page verdicts

- **A page `the-burau-representations`: sound after the reported local repairs.** The retraction/equivalence and inherited-AC prose now match the items. The reduced basis, exact sequence, matrix agreement, both-kernel argument and local faithfulness range are supported. This is the reader's scoped conclusion, not a workflow or publication stamp.
- **B page `the-burau-representations-examples`: needs the n>=2 qualifier in its t=1 summary.** Its four item arguments are sound after the item repairs; the page-prose defect remains for the authorized lead.

## Validation and limitations

Reflow/precheck completed on all changed items, including reruns following the last mathematical edits. The strict batch contract check passed on all 26 items with zero errors and warnings. Final `node tools/rendercheck.mjs` on the explicit 26 item paths and two page paths passed: 28 files, no rendering/YAML errors. Final `node tools/proof-layout.mjs` on all 26 changed item paths in one command passed: 101 steps, zero defects. These are local formatting/contract checks, not independent proof certification.

No item was withdrawn, no published or another-batch item was edited, and no plan or B-page prose was edited. The remaining blocker is the B-page hypothesis correction. The reduced-definition basis change requires the lead's normal outside-consumer impact review; I reviewed the assigned consumers only. I did not audit the full n=4 preprint proof, the full external nonfaithfulness proof, or recursively reprove every published dependency. There was no separate rendered evidence bundle; source files and exact local interfaces supplied the review evidence.
