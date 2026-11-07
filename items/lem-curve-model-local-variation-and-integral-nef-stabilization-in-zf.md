---
id: lem-curve-model-local-variation-and-integral-nef-stabilization-in-zf
kind: lemma
title: Curve local metric variation and integral nef-model stabilization without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - lem-function-field-model-curve-height-sums-and-section-independence-in-zf
  - lem-curve-model-chern-measures-and-refinement-invariance-in-zf
  - lem-normal-projective-surface-cartier-intersection-pairing-in-zf
  - lem-function-field-model-point-measures-and-height-normalization-in-zf
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF; metric sequences, generic line-bundle identifications and rational sections are supplied, and each model comparison uses finite refinements and finite divisor supports.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields
      url: https://arxiv.org/pdf/1810.06342v2
      locator: Sections 2.1–2.4 local pairing conventions; actual variation identities and the explicitly integral-model consequence are proved here, not imported.
---

## Statement

Work in ZF with $k$ algebraically closed, $K=k(B)$ for a smooth projective integral curve, and a normal integral projective curve $C/K$. Fix generic line bundles $L_0,L_1$ and rational sections $s_0,s_1$ with disjoint divisor supports. Write $\lambda_v(\bar L_0,\bar L_1)$ for their local model term constructed in [[lem-function-field-model-curve-height-sums-and-section-independence-in-zf]]. Given two model metrics on the same $L_i$, on a common normal model let $D_{i,v}$ be the part at $v$ of the Cartier divisor of the generic section $1$ of their quotient, and put $\phi_{i,v}=-\log\|1\|_v$ for this quotient metric. Then the exact single-variable variation formulas are
$$\lambda_v(\bar L_0,\bar L_1)-\lambda_v(\bar L'_0,\bar L_1)=\int\phi_{0,v}\,c_1(\bar L_1)_v,$$
$$\lambda_v(\bar L_0,\bar L_1)-\lambda_v(\bar L_0,\bar L'_1)=\int\phi_{1,v}\,c_1(\bar L_0)_v.$$
Consequently for nef model metrics, with $d_i=\deg_C L_i\ge0$ and $\epsilon_i=\sup_v\|\phi_{i,v}\|_\infty$,
$$|\lambda_v(\bar L_0,\bar L_1)-\lambda_v(\bar L'_0,\bar L'_1)|\le d_1\epsilon_0+d_0\epsilon_1$$
uniformly over all places.

For model metrics induced directly by invertible sheaves extending the fixed $L_i$, these local terms are integers. In this integral-model convention, if the last bound is strictly less than one, the two entire local families agree. A supplied globally supremum-Cauchy pair of nef integral-model sequences therefore has an eventually constant finite-support local family; the resulting global pairing is independent of the approximating sequences for their uniform metric limits and is symmetric and bilinear. It extends to differences of these nef limits, independently of their decomposition. This stabilization conclusion requires the stated integral-model convention; it is not asserted for metrics obtained by taking arbitrary tensor roots of model norms. No alteration of an ambient definition to remove such roots, and no higher-dimensional assertion, is part of this lemma.

## Facts & Assumptions

**Given:** The curve, fixed line bundles, fixed disjoint rational sections, model comparisons, and supplied Cauchy sequences where specified. The integral-model conclusion uses actual invertible sheaves extending the fixed line bundles, without division of a model norm by an auxiliary tensor exponent.

[F1] Local curve-model terms are finite point-norm sums plus the rational-section norm integral against the curve-model Chern measure. Their entire place family has finite support, and its global sum is the symmetric bilinear, section-independent surface pairing. [[lem-function-field-model-curve-height-sums-and-section-independence-in-zf]]

[F2] Curve-model measures are finite, additive and model independent, with positive mass $\deg L$ for nef models; their vertical-divisor potentials integrate to the multiplicity-weighted curve degree pairing, and normal common refinements preserve all norms. [[lem-curve-model-chern-measures-and-refinement-invariance-in-zf]]

[F3] Surface Cartier intersections are symmetric, bilinear and section independent, computed from divisor orders and curve degrees, and invariant under projective birational normal refinements. [[lem-normal-projective-surface-cartier-intersection-pairing-in-zf]]

[F4] The unnormalized point model term at $v$ is $\sum_{w\mid v}e_{w/v}(-\log\|s\|_w)$, and each weighted summand is the integer order of the section in a local model frame. Its global sum is the degree on the normal point curve, including inseparability. [[lem-function-field-model-point-measures-and-height-normalization-in-zf]]

## Proof

1.1 Work on a common normal model $S$ as constructed in [F2]. The quotient of two model bundles on the same specified generic bundle has rational section $1$ and a vertical Cartier divisor $D$. Its support meets only finitely many fibres. Its part $D_v$ at a given fibre is Cartier: use its equations on the complement of the other supporting fibres and the zero divisor on the complement of this fibre, gluing by the trivialization of the canonical section off the support. Its metric at $v$ is exactly the quotient metric, so its potential is $\phi_v$. All these potentials and Chern measures are unchanged by further normal refinement by [F2]. In particular these comparisons require no tensor powers and no non-Cartier splitting of an intersecting support. [F2, given, construct, algebra]

2.1 Changing only the metric on $L_0$ leaves the generic divisor of $s_0$, the point evaluations of $s_1$ and the measure $c_1(\bar L_1)$ unchanged in the formula [F1]. The difference of its remaining two logarithmic norms is $\phi_{0,v}$. This proves the first variation identity directly as an equality of finite atomic integrals. If $\bar L_1$ is nef, positivity and mass in [F2] bound the absolute value by $d_1\|\phi_{0,v}\|_\infty$. No generic support has moved in this calculation. [F1, F2, step 1.1, algebra]

3.1 Change only the metric on $L_1$, with quotient divisor $D_{1,v}$. For a horizontal closure $H_y$ of a point of $\operatorname{div}(s_0)$, the difference of the point term is the sum of the orders of the pullback of $D_{1,v}$ on the normalization of $H_y$ over $v$, by [F4]. Since this divisor is supported on that one fibre, this is exactly $\deg_{H_y}O(D_{1,v})$. The change in the curve-measure term, by additivity and the component formula in [F2], is $\sum_{V\subset S_v}\operatorname{ord}_V(s_0)\deg_VO(D_{1,v})$. Combining with the horizontal coefficients $\operatorname{ord}_y(s_0)$, the full difference is therefore the surface pairing $\operatorname{div}_S(s_0)\cdot D_{1,v}$. Symmetry [F3] rewrites it as $\sum_{V\subset S_v}\operatorname{ord}_V(D_{1,v})\deg_V\mathcal L_0$, which is $\int\phi_{1,v}c_1(\bar L_0)_v$ by [F2]. This proves the second exact identity, with no local reciprocity formula imported. If $\bar L_0$ is nef, its absolute value is at most $d_0\|\phi_{1,v}\|_\infty$. [F2, F3, F4, step 1.1, algebra]

4.1 Telescope through the intermediate pair $(\bar L'_0,\bar L_1)$. Both unchanged bundles in the single-variable estimates are nef, so steps 2.1–3.1 prove the stated bound, with the same constants at every $v$. For directly induced integral model norms, the point terms are integers by [F4]. The curve term is $\sum_V\operatorname{ord}_V(s_0)\deg_V\mathcal L_1$ by [F2], also an integer. Thus every $\lambda_v$ is an integer. If the uniform bound on their difference is strictly below one, each difference is zero. In particular this gives equality of the whole local family, without summing bounds over a growing exceptional set. This integrality argument would fail for arbitrary tensor-root norms; no such conclusion is drawn for that different convention. [F2, F4, step 2.1, step 3.1, algebra]

5.1 For globally supremum-Cauchy nef integral-model sequences, take one index $N$ such that for every two indices at least $N$, their two supremum distances give $d_1\epsilon_0+d_0\epsilon_1<1$; for example distances less than $1/(2(d_0+d_1+1))$ suffice. Step 4.1 makes the entire local family identical to its family at $N$, which has finite support by [F1]. Thus the limiting family and its global sum exist, with finite support. Two sequences converging uniformly to the same pair of metrics have mutual supremum distances tending to zero, so step 4.1 identifies these eventual families, proving approximation independence. The fixed sections may be changed using any other disjoint pair: the global sums for the two section choices coincide at every model index by [F1], hence their eventual sums coincide too. Symmetry of these global sums passes from [F1]. Tensoring two supplied nef model sequences gives a nef model sequence on the tensor product, on normal common refinements, because degrees on curves add. Its norms converge uniformly to the tensor product norm. Model bilinearity [F1] and eventual stabilization therefore prove bilinearity on the nef limits. Empty support and $d_i=0$ satisfy the same bounds; if both degrees are zero the local differences in step 4.1 vanish directly. [F1, step 4.1, algebra]

6.1 Extend this bilinear pairing to formal differences of nef limits by the four-term expansion. It depends only on the actual difference of metric line bundles. Indeed, if $A-B$ and $A'-B'$ are isometric, then the nef limits $A+B'$ and $A'+B$ are isometric on the same identified generic line bundle. Choose the corresponding tensor-product model sequences. Their mutual supremum distance tends to zero. Against any other supplied nef approximating sequence, the first or second identity in steps 2.1–3.1 and step 4.1 make their local differences zero for all sufficiently large indices. Thus the pairings with these two equal nef limits agree. Bilinearity gives the required equality for the two differences, and expanding the other variable proves independence in both. All additions and refinements here are finite at each index; no new model sequence or arbitrary approximation choices are needed beyond those supplied and their prescribed tensor products. This proves the precise integral-model limit consequence, without claiming any measure representation for arbitrary continuous metrics or any higher-dimensional parent theorem. [step 2.1, step 3.1, step 4.1, step 5.1, algebra] ∎
