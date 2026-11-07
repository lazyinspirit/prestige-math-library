---
id: thm-function-field-adelic-intersection-product-exists
kind: theorem
title: Well-defined adelic intersection product over a function curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
- def-adelic-metrized-line-bundle-over-function-curve
- def-one-variable-function-field-dynamical-setting
- lem-projective-flat-models-over-a-regular-curve-have-common-refinements
- lem-function-field-model-point-measures-and-height-normalization-in-zf
- lem-function-field-model-intersection-sums-in-all-dimensions-in-zf
- lem-function-field-mixed-model-measures-and-refinement-invariance-in-zf
- thm-numerically-nef-mixed-intersections-and-ample-approximation-in-zf
- lem-function-field-model-local-metric-variation-in-all-dimensions-in-zf
- lem-projective-curve-degrees-and-projection-formula-in-zf
- lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf
- thm-over-a-pid-flat-is-equivalent-to-torsion-free
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical
      Systems over Function Fields
    url: https://arxiv.org/pdf/1810.06342v2
    locator: §§2.1–2.4, Definitions 2.1–2.12 and the local-to-global intersection
      construction
proof_strategy: direct
axiom_use: Work in ZF with the supplied algebraically closed constant field. Every
  metric comparison chooses finitely many model approximants; uniform stability defines
  the limits without countable selections or exchanges of infinite place sums.
---

## Statement

Let $k$ be algebraically closed, let $K=k(B)$ for a smooth projective curve $B/k$, and let $X/K$ be geometrically normal, geometrically integral and projective. For integrable adelic metrized line bundles $\bar L_0,\ldots,\bar L_r$ and an $r$-dimensional integral subvariety $Y\subseteq X$, the local intersection numbers at the places of $K$ are summable; their sum is independent of the chosen rational sections, multilinear in the metrized line bundles and the cycle, and continuous under uniform limits taken on the nef factors in fixed decompositions $\bar L_i=\bar A_i-\bar B_i$, with the underlying line bundles $A_i,B_i$ fixed. In particular the normalized point and subvariety heights defined by these intersections are well-defined.

## Statement references

[[def-adelic-metrized-line-bundle-over-function-curve]]

[[def-one-variable-function-field-dynamical-setting]]

## Facts & Assumptions

**Given:** The algebraically closed field, smooth base curve, projective geometrically integral normal $X$, integral $Y$, and integrable adelic line bundles in the Statement. A model metric means exactly an invertible sheaf extending the fixed generic line bundle, as in the cited Definition; no division of a model norm by an auxiliary tensor exponent is implicit.

[F1] A nef adelic metric is a uniform limit of globally curve-nef model metrics, and an integrable metrized bundle is a difference of two nef ones. Uniform distance on a fixed line bundle is the maximum over places of the local supremum of its logarithmic norm ratio. [[def-adelic-metrized-line-bundle-over-function-curve]]

[F2] In all dimensions, signed model local intersections exist for admissible rational sections, have finite place support and sum to the actual symmetric tensor-multilinear model Euler intersection. Their global sum is independent of sections, normal refinement and the model representing fixed metrics. [[lem-function-field-model-intersection-sums-in-all-dimensions-in-zf]]

[F3] Mixed model measures exist as finite signed atoms in all dimensions, have generic mixed-Euler mass, are symmetric and tensor multilinear, and depend only on the local metrics. Their weights are the fibre multiplicity times the component mixed intersection. [[lem-function-field-mixed-model-measures-and-refinement-invariance-in-zf]]

[F4] Every mixed Euler intersection of line bundles nonnegative on all integral curves is nonnegative, in every projective dimension over an infinite field and with arbitrary coherent support. [[thm-numerically-nef-mixed-intersections-and-ample-approximation-in-zf]]

[F5] Changing any one metric in a signed model local intersection changes its local value by the integral of the logarithmic quotient potential against the actual mixed model measure of the other entries. Its absolute value is bounded by supremum distance times total variation. Directly induced model local terms are integers. [[lem-function-field-model-local-metric-variation-in-all-dimensions-in-zf]]

[F6] Curve degrees are nonnegative for generated bundles; pullback along a curve-image morphism multiplies them by its positive generic field degree, and a point-image pullback has degree zero. [[lem-projective-curve-degrees-and-projection-formula-in-zf]]

[F7] On any projective model over $k$, a sufficiently large very ample twist of each supplied line bundle is globally generated. [[lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf]]

[F8] The finite local point measures, exact ramification weights, finite height sums, section independence and normalized field-extension compatibility are constructed including inseparability. [[lem-function-field-model-point-measures-and-height-normalization-in-zf]]

[F9] Finitely many projective flat curve-base models of a specified integral generic scheme admit a projective flat common refinement by generic diagonal closure. [[lem-projective-flat-models-over-a-regular-curve-have-common-refinements]]

[F10] A torsion-free module over a PID is flat. [[thm-over-a-pid-flat-is-equivalent-to-torsion-free]]

## Proof

1.1 Choose any finite collection of model approximants on $X$ to the nef factors that will occur below. They admit a common refinement by [F9]. The schematic closure of $Y$ there is an integral projective flat $B$-model: on each affine chart its ideal is the contraction of the generic ideal, so its coordinate ring injects the generic localization; over each base DVR it is torsion-free, hence flat by [F10]. Normalize as in [F3]. Pulling the model bundles through these morphisms preserves curve-nefness. Indeed every projective integral curve upstairs has point or curve image downstairs, and [F6] gives zero or a positive-degree multiple of its old degree. Thus all restricted component bundles of every nef approximant remain numerically nef. This also works on any further finite common refinement. [F3, F6, F9, F10, given, construct, algebra]

1.2 For any $r$ of those nef model bundles, each coefficient of its local mixed measure is nonnegative by [F4], applied on the reduced $r$-dimensional fibre component. Its mass by [F3] is the fixed nonnegative integer $J_{O_Y}(A_1,\ldots,A_r)$ of its underlying generic bundles, independent of place and models. This proves actual positivity and a uniform total-mass bound; it is not inferred merely from finiteness of an individual model measure. The zero-dimensional case is the positive point measure in [F8]. [F3, F4, F8, step 1.1, algebra]

2.1 Fix finite generic nef-factor lists $A_i,B_i$ for each entry, temporarily allowing two such lists per entry when two decompositions are compared. For every finite model choice write the signed entry as $A_i-B_i$, with the indicated model metrics. Expand a mixed measure of $r$ signed entries by [F3]. Every term, including every mixed choice across two model indices or decompositions, is a positive nef-model measure by step 1.2. Its mass is a fixed generic mixed integer. There are only finitely many possible lists of underlying factors, so the sum of their masses gives a finite constant $C_i\ge0$ bounding the total variation of the measure omitting entry $i$, simultaneously for all places and all models in this family. Constants may be enlarged to cover the finitely many intermediate tuples of a telescoping comparison. They depend on the fixed underlying nef-factor bundles, not on the approximating models. [F3, step 1.2, algebra]

2.2 For two signed model tuples in that fixed finite factor family, [F5] and finite telescoping give, at every place,
$$|\lambda_v(\bar L_0,\ldots,\bar L_r)-\lambda_v(\bar L'_0,\ldots,\bar L'_r)|\le\sum_{i=0}^r C_i\epsilon_i,$$
where $\epsilon_i$ is their global supremum distance. Both local values are integers by [F5]. Whenever the finite right side is strictly below one, the values are exactly equal at every place. This is uniform equality of the whole place family, not a sum of estimates over an uncontrolled growing exceptional set. It supplies the global convergence argument that local mass bounds alone would not give. [F5, step 2.1, algebra]

3.1 For the specified integrable $\bar L_i$, take one of the decompositions $\bar L_i=\bar A_i-\bar B_i$ guaranteed by [F1], with fixed generic bundles. For every positive tolerance there are globally nef model metrics within that tolerance of each of the finitely many factors. Choose them only for this tolerance and combine them on a common model as in step 1.1. Their signed model tuples approximate the original metrics uniformly. Fix any admissible generic rational sections, available by [F2]. Choose a tolerance so small that any two such signed approximating tuples have $\sum C_i\epsilon_i<1$ in step 2.2; for example factor tolerances less than $1/(8(1+\sum C_i))$ suffice, since signed distances between two choices are at most four times their factor tolerance. Their entire local family is then the same. Define the local intersection values to be this common family. This is a unique-value construction from nonempty approximation sets; it does not select a countable sequence of models or require countable choice. [F1, F2, step 1.1, step 2.2, construct, algebra]

3.2 A different nef decomposition produces the same local values for those fixed sections. Put its finite generic factor lists together with the original ones in step 2.1. Both kinds of model tuples can be chosen arbitrarily close to the same original metrics. Step 2.2 identifies their local families at a sufficiently small common tolerance. This proves independence of every approximation and of the chosen nef decomposition, with no presumption that arbitrary signed sequences have a common uniform bound. Generic bundle isometries give the same comparisons after the specified generic identifications, so the construction is intrinsic to the metrized bundles. [step 2.1, step 2.2, step 3.1, algebra]

4.1 The resulting local family equals the family of one sufficiently close finite model tuple from step 3.1. By [F2] that family has finite support. Hence the local terms are summable, with no interchange of an infinite sum and a limit. The construction agrees with model intersections. To see that models belong to the stated integrable class, use [F7] on any projective model: both a large very ample twist $H^a$ and $H^a\otimes\mathcal L$ are generated, so [F6] makes their model metrics globally nef and their difference is the original model metric. Such fixed model factors can be used as constant approximants in step 3.1. At a point the finite atomic formula [F8] is also preserved: uniform logarithmic convergence gives convergence of its finitely weighted evaluations, and its eventual model value is therefore its actual norm evaluation. Thus the point normalization is the prescribed one. [F2, F6, F7, F8, step 3.1, algebra]

5.1 Choose two admissible generic section tuples. The constants in step 2.1 and the comparison tolerance depend on metrics and factors, not on sections. The same sufficiently close model tuple therefore computes both global sums, which agree by [F2]. This proves section independence. For a symmetry or multilinearity identity, take the finite collection of nef factors of all its entries, including the tensor-product decompositions for a combined entry. Tensor products of nef factors are nef: their model curve degrees add, and their logarithmic approximation errors add. Approximate this finite collection consistently closely enough that every term in the identity has stabilized. The exact model symmetry/multilinearity in [F2] gives the desired identity for their global sums. Finite cycles are handled by finite linearity and normalization, as in [F2]. The point degrees and field-extension weights are those of [F8], and the generic subvariety degrees are the model-independent integers of [F3]. Consequently every stated height normalization, whenever its defining degree is positive, has its fixed model-independent denominator and the just constructed numerator. [F2, F3, F8, step 2.1, step 2.2, step 3.1, step 4.1, algebra]

6.1 Finally consider uniform convergence on the nef factors of fixed decompositions as in the corrected Statement. All pairs of tuples in this family use the same finite generic factor lists, so step 2.1 supplies the same constants $C_i$. Given two such limiting tuples, approximate their factors by model metrics within an arbitrarily small extra tolerance. Their local values are the stabilized values of those approximants by step 3.1. Applying step 2.2 and then decreasing the extra tolerance gives the same finite bound, with signed metric distances bounded by the sums of the corresponding factor distances. In particular these distances tending to zero make the right side strictly below one, so the entire local families and their finite global sums are eventually equal. This proves the asserted continuity through fixed nef decompositions. It does not infer unrestricted signed joint continuity from per-model finiteness. All dimensions and all integrable bundles from the original scope have been retained. The proof uses directly induced model norms exactly as defined, their actual integer local terms, and the proved mixed-nef positivity; no general analytic measure representation theorem is required for the numerical assertions of this Statement. [step 2.1, step 2.2, step 3.1, step 3.2, step 4.1, algebra] ∎

## Continuity scope

The former unqualified signed-sequence clause has a fixed-place integral-model counterexample: successive regular point blowups give fresh fibre components $E_n$ of multiplicity $n$ with $E_n^2=-1$, while the model potential of $O(E_n)$ has supremum $1/n$. These integrable metrics tend uniformly to the trivial metric, but their self-intersections remain $-1$. The smallest correction is the nef-factor-controlled continuity now stated. The construction, summability, all integrable inputs, heights and other original assertions are unchanged.
