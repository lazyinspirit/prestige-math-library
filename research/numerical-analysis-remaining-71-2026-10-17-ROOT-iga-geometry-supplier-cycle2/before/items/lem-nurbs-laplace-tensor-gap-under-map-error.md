---
id: lem-nurbs-laplace-tensor-gap-under-map-error
kind: lemma
title: Unit-Laplace pullback tensors are Lipschitz in the Jacobian matrix
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-nurbs-patch-map-and-rational-spline-space
  - lem-isogeometric-pullback-energy-norm-equivalence
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - cor-cauchy-schwarz-inequality-for-l-two
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Annalisa Buffa, Gregor Gantner, Carlotta Giannelli, Dirk Praetorius, Rafael Vázquez, Mathematical Foundations of Adaptive Isogeometric Analysis, Archives of Computational Methods in Engineering 29 (2022)"
      url: "https://link.springer.com/content/pdf/10.1007/s11831-022-09752-5.pdf"
    - title: "Stefan Takacs, Numerical Analysis of Isogeometric Methods, complete JKU lecture notes, 2018/19"
      url: "https://numa.jku.at/media/filer_public/3c/2a/3c2a6222-fd4d-4405-b866-e3757698fe8c/lecture_notes_iga.pdf"
---

## Statement

Let $d\in\{2,3\}$, let $F,G:(0,1)^d\to\mathbb R^d$ be admissible piecewise $C^1$ maps on a common finite refinement of their knot partitions, and suppose almost everywhere that both maps have positive Jacobian determinants and
$$\|DF\|_{\rm op},\|DG\|_{\rm op},\|DF^{-1}\|_{\rm op},\|DG^{-1}\|_{\rm op}\le M,\qquad M\ge1.$$
Set $\delta=\|DF-DG\|_{L^\infty({\rm op})}$, the essential supremum of the operator-norm difference on that common refinement, and define the unit-diffusion pullback tensors
$$K_F=(\det DF)DF^{-1}DF^{-\mathsf T},\qquad K_G=(\det DG)DG^{-1}DG^{-\mathsf T}.$$
Then, almost everywhere,
$$\|K_F-K_G\|_{\rm op}\le(dM^{d+1}+2M^{d+3})\delta.$$
Consequently, for $v,w\in H^1((0,1)^d)$,
$$\left|\int_{(0,1)^d}(K_F-K_G)\nabla v\cdot\nabla w\right|\le(dM^{d+1}+2M^{d+3})\delta\,\|\nabla v\|_2\|\nabla w\|_2.$$
The discrepancy is a derivative-map error; a bound on $\|F-G\|_\infty$ alone is not used.


## Facts & Assumptions

**Given:** Two piecewise $C^1$ admissible maps on a common finite refinement; the matrix and inverse bounds above; and $v,w\in H^1((0,1)^d)$.

[F1] [[def-nurbs-patch-map-and-rational-spline-space]]: an admissible patch has cellwise differentiable map, positive Jacobian and finite map/inverse derivative bounds.

[F2] [[lem-isogeometric-pullback-energy-norm-equivalence]]: the scalar unit-diffusion form pulls back to $\int (\det DF)DF^{-1}DF^{-\mathsf T}\nabla v\cdot\nabla w$ on the parameter box; the same formula holds with $G$.

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]] gives the Euclidean Cauchy--Schwarz inequality; [[cor-cauchy-schwarz-inequality-for-l-two]] gives integral Cauchy--Schwarz. The determinant multilinearity, Gram--Schmidt volume bound, and inverse identity are established explicitly below.

## Proof

1.1 By [F2], $K_F$ and $K_G$ are the unit-Laplace pullback tensors. Fix a point where the hypotheses hold and write $A=DF$, $B=DG$; [F1] supplies the cellwise map bounds. For any square matrix with columns $c_1,\ldots,c_d$, if they are dependent its determinant is zero. If independent, Gram--Schmidt replaces each $c_i$ by $q_i=c_i-\sum_{k<i}\operatorname{proj}_{q_k}c_i$; subtracting combinations of earlier columns preserves the determinant, the $q_i$ are orthogonal, and $\|q_i\|\le\|c_i\|$ by the Pythagorean identity. Since $|\det[q_1\ \cdots\ q_d]|^2=\det(Q^{\mathsf T}Q)=\prod_i\|q_i\|^2$, this proves $|\det[c_1\ \cdots\ c_d]|\le\prod_i\|c_i\|$. Now multilinearity replaces the columns of $B$ by those of $A$ one at a time. Each determinant difference has one column of norm at most $\|A-B\|_{\rm op}\le\delta$ and $d-1$ columns of norm at most $M$, so $|\det A-\det B|\le dM^{d-1}\delta$. The same volume bound gives $|\det B|\le M^d$. [F1, F2, F3, given, algebra]

2.1 The inverse identity $A^{-1}-B^{-1}=A^{-1}(B-A)B^{-1}$ gives $\|A^{-1}-B^{-1}\|_{\rm op}\le M^2\delta$. Put $S_A=A^{-1}A^{-\mathsf T}$ and $S_B=B^{-1}B^{-\mathsf T}$. Add and subtract $B^{-1}A^{-\mathsf T}$ to obtain $\|S_A-S_B\|_{\rm op}\le\|A^{-1}-B^{-1}\|\|A^{-1}\|+\|B^{-1}\|\|A^{-1}-B^{-1}\|\le2M^3\delta,$ while $\|S_A\|_{\rm op}\le M^2$. [given, step 1.1, algebra]

3.1 Write $(\det A)S_A-(\det B)S_B=(\det A-\det B)S_A+(\det B)(S_A-S_B)$. The bounds in steps 1.1 and 2.1 give $\|K_F-K_G\|_{\rm op}\le dM^{d-1}\delta\,M^2+M^d\,2M^3\delta=(dM^{d+1}+2M^{d+3})\delta.$ This proves the pointwise tensor estimate almost everywhere. [step 1.1, step 2.1, algebra]

4.1 Apply the pointwise estimate to the integrand and then the integral Cauchy--Schwarz inequality [F3] on the unit box: $\left|\int (K_F-K_G)\nabla v\cdot\nabla w\right|\le C\delta\int|\nabla v||\nabla w|\le C\delta\|\nabla v\|_2\|\nabla w\|_2,$ where $C=dM^{d+1}+2M^{d+3}$. The integral is well-defined because the tensor difference is essentially bounded and the gradients are square integrable. [F3, step 3.1, given] ∎
