# Step 5a reader report — batch 19

Run: `frontier-37-owner-30`  
Role: reader  
Batch: `19`

## Opened inventory

Read the assigned manifest `research/frontier-37-owner-30-batch-19.pages.json`, the reader brief, and both listed page files:

- A page: `library/homological-algebra/hochschild-hyperhomology-and-cyclic-tensor-invariance.md`
- B page: `library/homological-algebra/hochschild-hyperhomology-and-cyclic-tensor-invariance-examples.md`

Read all eight assigned A items and all three assigned example items in their current form:

- `def-hochschild-hyperhomology-of-a-bimodule-complex`
- `thm-hochschild-hyperhomology-is-resolution-independent`
- `def-termwise-hochschild-homology-complex-and-iterated-homology`
- `thm-termwise-hochschild-homology-respects-bimodule-chain-homotopies`
- `thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex`
- `lem-double-bar-comparison-for-cyclic-bimodule-tensor-products`
- `thm-derived-cyclicity-of-hochschild-hyperhomology`
- `thm-termwise-hochschild-cyclicity-for-bounded-projective-bimodule-complexes`
- `ex-hochschild-bicomplex-total-and-separate-degrees`
- `ex-cyclic-tensor-coinvariants-of-matrix-bimodules`
- `ex-double-bar-rotation-sign-in-two-complex-degrees`

Opened the statement or definition needed for each of the 45 unique dependencies in the assigned closure:

`def-hochschild-chain-complex-of-a-bimodule`; `def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization`; `def-graded-ring-module-bimodule-and-internal-shift`; `def-cohomology-object-of-a-cochain-complex`; `thm-two-sided-bar-complex-is-an-enveloping-projective-resolution`; `lem-hochschild-chains-are-bar-tensor-chains`; `lem-projective-modules-are-flat-over-an-arbitrary-ring`; `lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms`; `thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object`; `thm-chain-homotopic-maps-induce-the-same-map-on-homology`; `thm-choice-implies-dependent-implies-countable-choice`; `def-axiom-of-choice`; `def-opposite-ring`; `def-two-sided-bar-resolution-of-an-associative-algebra`; `def-enveloping-algebra-and-bimodule-module-dictionary`; `thm-a-chain-map-induces-a-well-defined-map-on-homology`; `def-chain-homotopy`; `thm-the-cohomological-filtered-complex-construction`; `thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology`; `def-cochain-complex-in-an-abelian-category`; `def-cohomological-spectral-sequence`; `def-abutment-to-a-filtered-object`; `prop-a-filtered-chain-map-induces-a-morphism-of-spectral-sequences`; `prop-hochschild-degree-zero-is-bimodule-coinvariants`; `cor-every-vector-space-has-a-basis`; `thm-a-direct-summand-of-a-projective-is-projective`; `lem-graded-balanced-tensor-and-shift-isomorphisms`; `thm-acyclic-assembly-lemma-for-a-first-quadrant-double-complex`; `thm-projective-module-characterizations`; `def-generated-cyclic-finitely-generated-and-free-modules`; `lem-bimodule-tensor-totalization-respects-differentials-and-homotopies`; `def-derived-tensor-product-in-the-bounded-above-setting`; `thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility`; `thm-a-bounded-below-acyclic-complex-of-projective-objects-is-contractible-when-its-cycle-epimorphisms-split`; `cor-polynomial-diagonal-bimodule-hochschild-homology`; `def-matrix-units`; `lem-matrix-unit-multiplication`; `def-trace-of-a-square-matrix`; `def-matrix-space`; `thm-matrix-multiplication-laws`; `def-matrix-product-and-identity-matrix`; `thm-trace-of-ab-equals-trace-of-ba`; `prop-trace-is-linear`; `def-algebra-over-a-commutative-ring`; `thm-unit-isomorphisms-for-module-tensor-products`.

## Source passages checked

- Beliakova–Putyra–Wehrli, [*Quantum Link Homology via Trace Functor I*](https://arxiv.org/pdf/1605.03523), §3.8.4, especially Eqs. (3.37)–(3.39), and §3.8.6, Eq. (3.44), printed pp. 36–38. These passages describe the Hochschild/bar models, cyclic twist after the comparison, and componentwise Hochschild homology for complexes.
- Weibel, [Chapter 9: *Hochschild and Cyclic Homology*](https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf), §9.1.1 and Exercise 9.1.3, printed pp. 300–304; §§9.5.1–9.5.4, pp. 326–328; Definition 9.5.7 and Corollary 9.5.8, pp. 329–330. The polynomial Koszul computation, row/column Morita pair, finite projectivity, and trace context match the uses made in the items.
- Khovanov, [*Triply-graded link homology and Hochschild homology of Soergel bimodules*](https://arxiv.org/pdf/math/0510265), pp. 5–7, for componentwise Hochschild homology and its gradings.
- Weibel, [Chapter 5: *Spectral Sequences*](https://math.mit.edu/~hrm/palestine/weibel/05-spectral_sequences.pdf), §§5.4–5.6, including Construction Theorem 5.4.1 and Classical Convergence Theorem 5.5.1, for the filtered-complex construction and convergence convention.
- Weibel, [Chapter 1: *Chain Complexes*](https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf), §1.4, Lemma 1.4.5, printed p. 17. The lemma states that homotopic chain maps induce the same map on homology and proves it on a cycle representative. The earlier item citation to printed pp. 23–27 was inaccurate; the item now cites Lemma 1.4.5 at p. 17.

## Repairs made

1. In `thm-termwise-hochschild-homology-respects-bimodule-chain-homotopies.md`, proof 2.1 had asserted internal-degree preservation without hypotheses that the maps and homotopy preserve internal degree. The theorem only assumes cochain-degree-zero bimodule maps, so I changed the proof to state that its result is ungraded unless `f`, `g`, and `h` are also internal-degree-zero. I corrected its Weibel locator from pp. 23–27 to §1.4, Lemma 1.4.5, p. 17. The local proof contract's step 2.1 now records the same qualification.
2. In `ex-double-bar-rotation-sign-in-two-complex-degrees.md`, proof 3.1 had said all differential-compatibility checks were vacuous. That is too strong: the example computes the degree-zero Hochschild class, while the chain-level rotation also has higher bar-degree terms. I limited the claim to the degree-zero class, noted that `b_0=0` makes it a cycle, and left higher-degree compatibility with the cited derived-cyclicity theorem. The proof-contract derivation and zero-boundary evidence were synchronized.
3. In `ex-hochschild-bicomplex-total-and-separate-degrees.md`, the numbers `0,2,4,6` were called internal degrees of the groups. They are the internal degrees of the free `R`-generators, or equivalently the shift parameters of `R`, `R{2}`, `R{4}`, and `R{6}`; the groups are not concentrated in those degrees. I corrected the statement and proofs 3.1, 4.1, and 6.1 to say generator degrees. Its proof contract now uses the same language and records that the degree-zero extension splits because the zero-differential total complex is the direct sum of its two columns, not because the generator degrees differ.

The affected entries in `research/frontier-37-owner-30-batch-19.proof-contracts.json` were updated. The three items had no `verification.judge` record to remove. For each changed item, reflow reported `unchanged`; precheck passed:

- `thm-termwise-hochschild-homology-respects-bimodule-chain-homotopies`: PASS.
- `ex-double-bar-rotation-sign-in-two-complex-degrees`: PASS.
- `ex-hochschild-bicomplex-total-and-separate-degrees`: PASS.

## Uneditable defects

None found in the assigned batch or its dependency closure.

## Page verdicts

- A page: no defect found. Its total-complex signs, finite filtration, spectral-sequence pages, bounded-resolution hypotheses, and one-sided projectivity qualifications agree with the current item statements.
- B examples page: no defect found. Its polynomial shifts and total degrees, matrix trace comparison, and degree-one rotation sign agree with the current examples.

No page prose was changed. No blocker remains.

## Coverage limitation

All assigned pages and items were read, along with the statement or definition sections of all 45 dependency items and the cited passages listed above. I did not independently audit every proof in every published dependency or material outside the cited source sections; the review was limited to what was needed to check this batch's claims.
