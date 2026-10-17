---
id: lem-p0-box-projection-is-clipped-cell-average
kind: lemma
title: The L2 projection onto a cellwise constant box clips cell averages
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-matching-affine-simplicial-meshes
  - def-pde-box-control-set
  - thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null
  - thm-holder-inequality-for-integrals
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Eduardo Casas and Fredi Tröltzsch, Error estimates for linear-quadratic elliptic control problems
      url: "https://depositonce.tu-berlin.de/bitstreams/f510d18c-727d-4bc0-b10a-e30c36bd82af/download"
      locator: "§1.1, printed pp. 3–5: admissible cell averages and box-constrained control projection."
---

## Statement

Assume Countable Choice. Let $E$ be a bounded polyhedral open control domain and let $\mathcal T_h$ be a finite matching affine simplicial mesh of $E$ as in [[def-matching-affine-simplicial-meshes]]. Let $U_h\subset L^2(E)$ be the subspace of functions constant on each cell. Let the bounds $q_a,q_b$ in [[def-pde-box-control-set]] be constant on each cell and satisfy $q_a\le q_b$. Put $Q_h=U_h\cap Q_{ad}(q_a,q_b)$. For $r\in L^2(E)$ define
$$
(P_{Q_h}r)|_K=\operatorname{clip}_{[q_a|_K,q_b|_K]}\left(\frac1{|K|}\int_Kr(x)\,dx\right),\qquad K\in\mathcal T_h,
$$
where $\operatorname{clip}_{[a,b]}(s)=\min\{b,\max\{a,s\}\}$. Then $P_{Q_h}r$ is the unique $L^2(E)$-nearest point in $Q_h$ to $r$, and $P_{Q_h}$ is nonexpansive: $\|P_{Q_h}r-P_{Q_h}s\|_{L^2(E)}\le\|r-s\|_{L^2(E)}$.

## Facts & Assumptions
**Given:** Countable Choice; the finite matching partition into nondegenerate simplices; $r\in L^2(E)$; and cellwise constant ordered bounds.

[F1] The continuous box consists of the $L^2$ functions between its bounds almost everywhere ([[def-pde-box-control-set]]); intersecting it with $U_h$ gives independent closed intervals for the cell values.

[F2] The mesh is a finite collection of nondegenerate cells with disjoint interiors covering $E$ up to measure-zero facets ([[def-matching-affine-simplicial-meshes]]).

[F3] Every facet lies in an affine hyperplane, and every affine hyperplane is Lebesgue null; hence the finite union of mesh facets is null ([[thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null]]).

[F4] Hölder with exponents $2,2$ shows that each $L^2(K)$ function is integrable on a finite-measure cell, so the cell averages are finite ([[thm-holder-inequality-for-integrals]]).

## Proof

1.1 For a cell $K$, [F4] makes $\bar r_K=|K|^{-1}\int_K r$ finite. For any constant value $z_K$, $\int_K|z_K-r|^2=|K||z_K-\bar r_K|^2+\int_K|r-\bar r_K|^2,$ because the cross term vanishes by $\int_K(r-\bar r_K)=0$. The second term is independent of $z_K$. [F2, F4, given, algebra]

2.1 Among real $z_K\in[q_a|_K,q_b|_K]$, the square $|z_K-\bar r_K|^2$ is uniquely minimized by the clipped value: if $\bar r_K$ is below the interval the nearest endpoint is the lower bound; if it is inside, it is itself; if it is above, the nearest endpoint is the upper bound. Thus the displayed cell value uniquely minimizes the cell integral, and it lies in the required interval by [F1]. [F1, step 1.1, algebra]

3.1 The cell choices are independent, so summing the cellwise minima from step 2.1 over the partition up to its null facets [F3] proves that $P_{Q_h}r$ is the unique global minimizer. For $v\in Q_h$, convexity makes $p+t(v-p)$ feasible, where $p=P_{Q_h}r$ and $0<t\le1$. Minimality gives $\|p+t(v-p)-r\|_2^2-\|p-r\|_2^2=2t(p-r,v-p)_2+t^2\|v-p\|_2^2\ge0.$ Divide by $2t$ and let $t\downarrow0$ to obtain the projection variational inequality $(p-r,v-p)_2\ge0$. [F1, F2, F3, step 2.1, algebra]

4.1 Let $p=P_{Q_h}r$ and $q=P_{Q_h}s$. Apply the variational inequality from step 3.1 with $v=q$ and $v=p$, respectively. Adding gives $\|p-q\|_2^2\le(r-s,p-q)_2$. Hölder with exponents $2,2$ then yields $\|p-q\|_2\le\|r-s\|_2$ when $p\ne q$; if $p=q$ the inequality is immediate. [F4, step 3.1, algebra] ∎
