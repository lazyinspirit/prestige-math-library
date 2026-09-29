# Step 5a Reader Report — Batch 23

Run: `frontier-36-complete`  
Role: `reader-23`  
Batch: `23`

## Opened inventory

### Pages

- `library/homological-algebra/hochschild-homology-and-diagonal-koszul-resolutions.md` (A): metadata, item list, and page summary.
- `library/homological-algebra/hochschild-homology-and-diagonal-koszul-resolutions-examples.md` (B): metadata, example list, and page summary.

### Assigned items

Every assigned item file was read in full. Each was `status: draft` and assigned to `frontier-36-complete`.

| Level | Item | Verdict |
|---:|---|---|
| 0 | `def-enveloping-algebra-and-bimodule-module-dictionary` | Pass |
| 1 | `def-two-sided-bar-resolution-of-an-associative-algebra` | Pass |
| 2 | `lem-bar-differential-and-augmentation-form-a-complex` | Pass |
| 3 | `thm-two-sided-bar-complex-is-an-enveloping-projective-resolution` | Pass |
| 3 | `def-hochschild-chain-complex-of-a-bimodule` | Pass |
| 4 | `lem-hochschild-chains-are-bar-tensor-chains` | Pass |
| 5 | `thm-hochschild-homology-is-tor-over-the-enveloping-algebra` | Pass |
| 6 | `thm-hochschild-homology-is-functorial-and-has-coefficient-long-exact-sequences` | Pass |
| 4 | `prop-hochschild-degree-zero-is-bimodule-coinvariants` | Pass |
| 1 | `def-diagonal-koszul-bimodule-complex-of-a-polynomial-ring` | Pass |
| 2 | `lem-polynomial-diagonal-differences-form-a-regular-sequence` | Pass |
| 3 | `thm-the-diagonal-koszul-complex-resolves-the-polynomial-ring` | Pass |
| 6 | `thm-polynomial-hochschild-homology-is-computed-by-the-diagonal-koszul-complex` | Pass |
| 7 | `cor-polynomial-diagonal-bimodule-hochschild-homology` | Repaired; passes after repair |
| 5 | `ex-hochschild-homology-of-the-ground-field` | Pass |
| 7 | `ex-one-variable-diagonal-koszul-computation` | Pass |
| 7 | `ex-one-variable-twisted-bimodule-hochschild-computation` | Pass |
| 8 | `ex-two-variable-diagonal-koszul-signs` | Pass |

I also read all 18 entries in `research/frontier-36-complete-batch-23.proof-contracts.json` against their current item proofs and the cited source statements.

### Dependency statements and definitions opened

For the algebra, tensor, module, and homology steps: `def-algebra-over-a-commutative-ring`, `def-bimodule`, `def-opposite-ring`, `thm-tensor-product-of-algebras-over-a-commutative-ring`, `def-augmented-chain-complex-over-an-object`, `def-tensor-product-of-modules-by-generators-and-relations`, `def-left-and-right-modules`, `def-vector-space`, `def-cycle-and-boundary-subobjects-of-a-complex`, `def-homology-object-of-a-chain-complex`, `thm-module-kernel-image-and-injectivity`, `def-module-homomorphism-kernel-image-and-cokernel`, `def-projective-module`, `cor-finite-iterated-tensor-products-represent-multilinear-maps`, `thm-unit-isomorphisms-for-module-tensor-products`, `thm-universal-property-of-module-tensor-products`, `thm-tensor-product-basis-from-bases`, `thm-tensor-products-commute-with-arbitrary-direct-sums`, and `def-free-module-on-a-set-and-standard-basis`.

For the Tor, choice, comparison, and long exact sequence steps: `def-axiom-of-choice`, `cor-every-vector-space-has-a-basis`, `def-tor-by-resolving-the-right-module`, `def-balanced-tor-bifunctor`, `cor-every-module-admits-a-projective-resolution`, `thm-choice-implies-dependent-implies-countable-choice`, `thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object`, `thm-chain-homotopic-maps-induce-the-same-map-on-homology`, `thm-a-chain-map-induces-a-well-defined-map-on-homology`, `def-short-exact-sequence-of-complexes`, `def-morphism-of-short-exact-sequences-of-complexes`, `thm-long-exact-sequence-in-homology`, `thm-naturality-of-the-homology-connecting-morphism`, `thm-modules-over-a-ring-form-an-abelian-category`, and `cor-free-modules-are-projective-and-flat`.

For the Koszul, grading, and coinvariant witness steps: `def-graded-ring-module-bimodule-and-internal-shift`, `def-graded-balanced-tensor-product-and-homogeneous-hom`, `def-koszul-complex-of-a-sequence-with-coefficients`, `def-regular-sequence-on-a-module`, `thm-regular-sequences-give-acyclic-koszul-complexes`, `thm-basic-koszul-homology`, `lem-exterior-algebra-basis-monomials`, `def-exterior-algebra-of-a-finite-free-module`, `thm-free-modules-are-projective-with-choice-boundary`, `def-projective-resolution-in-an-abelian-category`, `thm-coproduct-property-of-tensor-products-of-commutative-algebras`, `thm-universal-property-of-a-polynomial-ring-on-a-family`, `def-linear-combination-and-span`, `lem-span-is-the-set-of-linear-combinations`, `def-matrix-space`, `cor-square-matrices-form-a-ring`, `thm-matrix-multiplication-laws`, `def-matrix-product-and-identity-matrix`, `def-matrix-units`, `lem-matrix-unit-multiplication`, `def-trace-of-a-square-matrix`, `prop-trace-is-linear`, `thm-trace-of-ab-equals-trace-of-ba`, `def-quotient-module`, and `thm-quotient-module-laws`.

## Mathematical and source review

The bimodule/enveloping-algebra actions and the bar-to-Hochschild chain map use the stated left/right conventions and preserve the two module sides. The inserted-unit contraction is only claimed to be `k`-linear; the proof correctly gets module exactness from the linear differentials and augmentation. The coefficient face identities include the cyclic endpoint pair, and the alternating-sign cancellation is correct. The Tor argument distinguishes relative Tor in Weibel from the absolute Tor obtained from the AC-qualified projective bar resolution. The coefficient long exact sequence uses AC to make each `A^{⊗ n}` free over `k`, so its tensoring step applies to arbitrary short exact coefficient sequences. The commutator-span witness in `M_2(k)` is valid in every field characteristic: trace kills the span, while `E_01` belongs to `D` and `E_01 E_10 = E_00` does not.

The polynomial diagonal differences are regular by the explicit polynomial substitutions and monic-variable argument. The Koszul resolution and its coefficient differential have the claimed signs. The resolution comparison, its naturality in coefficients, the top centralizer condition, and the homogeneous comparison/homotopy lifts preserve the stated hypotheses and grading.

I checked the cited primary sources at the relevant locations:

- Weibel, *An Introduction to Homological Algebra*, Chapter 9, §9.1.1, printed p. 300: Hochschild faces and the degree-zero commutator quotient; §9.1.2, Exercise 9.1.2, printed p. 301: the stated long exact sequence under a `k`-split hypothesis; Lemma 9.1.3 and Corollary 9.1.5, printed pp. 302–303: relative Tor, the bar tensor identification, and the flat/projective-ground-ring condition for absolute Tor; Exercise 9.1.3, printed p. 304: the polynomial Koszul computation posed as an exercise, not supplied as a proof. [PDF](https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf)
- Khovanov, “Triply-graded link homology and Hochschild homology of Soergel bimodules,” “Hochschild homology” section, first PDF page, lines 9–17 and 33–62: coinvariants/Tor, the polynomial Koszul resolution and coefficient differential, and the top centralizer description. [PDF](https://arxiv.org/pdf/math/0510265)

## Repair and validation

In `items/cor-polynomial-diagonal-bimodule-hochschild-homology.md`, the statement called its isomorphism graded without stating the grading on `R`. I separated the general `R`-module formula from the graded formula and now state that the graded assertion places `k` in degree `0`, gives `x_i` degree `2`, and gives each exterior generator degree `2`. The matching `Facts & Assumptions` clause now states the same grading. The proof already used this grading in its hypotheses and shift calculation.

I updated the `F1` quote for that corollary in the batch proof contract to include the source theorem's exact graded clause. The assigned direct consumer, `ex-two-variable-diagonal-koszul-signs`, already assumes `deg x = deg y = 2` for its graded regular-coefficient calculation; I refreshed its `F4` contract quote to match the corrected corollary. Searches of item/page carriers and the run's batch manifests found no other direct consumer. I did not edit the consumer item text or the B page. No `verification.judge` record was present on the repaired item, so none required removal.

Validation:

- `node tools/tsx-run.mjs tools/reflow.mts items/cor-polynomial-diagonal-bimodule-hochschild-homology.md` — completed; no further reflow changes.
- `node tools/tsx-run.mjs tools/precheck.mts items/cor-polynomial-diagonal-bimodule-hochschild-homology.md` — PASS, 1 checked, 0 failing.
- Recomputed status with the active `.autopilot` state: `frontier-36-complete` is at Step 5a read; batch 23 is assigned to `reader-23`.

## Page verdicts

- **A — Hochschild Homology and Diagonal Koszul Resolutions:** Pass after the corollary grading clarification. The summary agrees with the current items, including the AC qualification for the general coefficient computation.
- **B — Examples:** Pass. The summary matches the four assigned computations; the examples' boundary cases and grading assumptions agree with their proofs.

## Uneditable defects

None found in the assigned batch or the published dependency statements opened for these proof routes.

## Blocker

No batch-23 blocker. Other batch-23 work is outside this reader assignment. I did not audit the entire transitive dependency closure or unrelated published library content; the review covered this batch's carriers, contracts, direct mathematical proof routes, the cited dependency statements listed above, and the relevant primary-source sections.
