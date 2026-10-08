---
id: ex-hh-tensor-quotient-by-a-one-dimensional-subspace
kind: example
title: "The tensor quotient by a one-dimensional subspace and its kernel"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 2
deps: [def-hh-scalar-and-tensor-conventions, lem-hh-tensor-injections-quotients-and-kernels-over-a-field, thm-tensor-product-basis-from-bases]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Keith Conrad, Tensor products (University of Connecticut expository notes, 60 pp.)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/tensorprod.pdf"
      locator: "§4.5–4.9, printed pp. 15–22: quotient computations $(R/I)\\otimes_RM\\cong M/IM$ and free-module tensor bases"
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Example

Let $V=k^2$ with standard basis $e_1,e_2$, let $U=ke_1\subseteq V$, let $W=k^2$ with standard basis $f_1,f_2$ and let $Z=kf_2\subseteq W$. Then $\ker(p\otimes q)=\operatorname{span}\{e_1\otimes f_1,\,e_1\otimes f_2,\,e_2\otimes f_2\}=U\otimes W+V\otimes Z$ inside $V\otimes W$, and $p\otimes q$ sends the basis tensor $e_2\otimes f_1$ to a basis element of $(V/U)\otimes(W/Z)\cong k\otimes k\cong k$; in particular $p\otimes q$ is surjective and $\dim\ker(p\otimes q)=\dim U\dim W+\dim V\dim Z-\dim U\dim Z=3$, as predicted by [[lem-hh-tensor-injections-quotients-and-kernels-over-a-field]].

## Facts & Assumptions

**Given:** A field $k$, the space $V=k^2$ with standard basis $e_1,e_2$ and subspace $U=ke_1$, the space $W=k^2$ with standard basis $f_1,f_2$ and subspace $Z=kf_2$, and the quotient maps $p:V\to V/U$, $q:W\to W/Z$.

[F1] The tensor product conventions: every element is a finite sum of elementary tensors and the defining relations give bilinearity with $0\otimes w=0=v\otimes0$ ([[def-hh-scalar-and-tensor-conventions]]).

[F2] The elementary tensors of two bases form a basis of the tensor product ([[thm-tensor-product-basis-from-bases]]).

[F3] Under the Axiom of Choice, for subspaces $U\subseteq V$, $Z\subseteq W$ over a field, $\ker(p\otimes q)=U\otimes W+V\otimes Z$ inside $V\otimes W$, the inclusions being those of the lemma ([[lem-hh-tensor-injections-quotients-and-kernels-over-a-field]]).

## Verification

**Proof technique:** direct.

1.1 By [F2] the four tensors $e_i\otimes f_j$ form a basis of $V\otimes W$, and the classes $[e_2]\in V/U$ and $[f_1]\in W/Z$ form bases of the one-dimensional quotients, so $[e_2]\otimes[f_1]$ is the product basis of $(V/U)\otimes(W/Z)\cong k\otimes k\cong k$ by [F2]. Since $p$ kills $e_1$ and fixes the class of $e_2$, while $q$ kills $f_2$ and fixes the class of $f_1$, the map $p\otimes q$ kills exactly those basis tensors with $e_1$ in the first factor or $f_2$ in the second, namely $e_1\otimes f_1$, $e_1\otimes f_2$ and $e_2\otimes f_2$, and sends $e_2\otimes f_1$ to the basis element $[e_2]\otimes[f_1]$; in particular $p\otimes q$ is surjective by [F1] and [F2]. [given, F1, F2, algebra]

2.1 Since $(e_i\otimes f_j)$ is a basis of $V\otimes W$ by [F2], a tensor $\sum_{i,j}c_{ij}\,e_i\otimes f_j$ lies in the kernel of the linear map $p\otimes q$ exactly when $\sum_{i,j}c_{ij}\,(p\otimes q)(e_i\otimes f_j)=0$; step 1.1 shows that $(p\otimes q)(e_i\otimes f_j)=0$ for the three basis tensors $e_1\otimes f_1$, $e_1\otimes f_2$, $e_2\otimes f_2$, while $(p\otimes q)(e_2\otimes f_1)=[e_2]\otimes[f_1]\ne0$ is a nonzero product-basis element, so in the basis expansion the kernel condition is the vanishing of the single coefficient of $e_2\otimes f_1$ and the kernel is exactly $\operatorname{span}\{e_1\otimes f_1,\,e_1\otimes f_2,\,e_2\otimes f_2\}$. That span equals $U\otimes W+V\otimes Z$ inside $V\otimes W$ because $U\otimes W=\operatorname{span}\{e_1\otimes f_1,e_1\otimes f_2\}$ and $V\otimes Z=\operatorname{span}\{e_1\otimes f_2,e_2\otimes f_2\}$ as the product bases of the respective tensor products, and by the basis expansion of [F2] its dimension is $3$. The dimension formula reads $\dim U\dim W+\dim V\dim Z-\dim U\dim Z=1\cdot2+2\cdot1-1\cdot1=3$, in agreement with the kernel just computed and with the prediction of [F3], whose complement argument is not needed for this explicit computation. [step 1.1, F1, F2, F3, algebra] ∎
