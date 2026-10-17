---
id: thm-polynomial-inverse-and-discrete-trace-estimates
kind: theorem
title: Polynomial inverse and discrete trace inequalities
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps: [def-matching-affine-simplicial-meshes, def-reference-finite-element-and-unisolvent-dofs, lem-reference-polynomial-norm-equivalence, lem-shape-regular-affine-simplex-scaling, lem-affine-simplex-gauss-green-formula, lem-affine-pullback-weak-derivatives-and-scaling, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 12
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap12.pdf
      locator: "§12.2, printed pp. 134–137: inverse estimates and discrete trace inequalities."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 4
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "§4.2, printed pp. 56–57: polynomial inverse scaling on finite-dimensional reference spaces."
verification: {}
---

## Statement

Assume Countable Choice. Fix polynomial degree $k\ge0$, $1\le p,q\le\infty$, and integers
$0\le m\le\ell\le k$. Let the shape-regular affine simplex family be as in
[[def-matching-affine-simplicial-meshes]]. For every cell $K$ in that family,
there is a constant independent of cell size such that, for every
$v\in\mathbb P_k(K)$ and every facet $F\subset\partial K$,
$$|v|_{W^{\ell,p}(K)} \le C h_K^{m-\ell+d(1/p-1/q)}|v|_{W^{m,q}(K)},$$
$$\|v\|_{L^p(F)} \le C h_K^{(d-1)/p-d/q}\|v\|_{L^q(K)}.$$
Use $1/\infty=0$. Constants may depend on $d,k,p,q$ and the family shape
regularity bound, but not on $K$ or $h_K$.

## Facts & Assumptions

**Given:** Countable Choice, the fixed reference simplex, a shape-regular affine mesh family, polynomial degree $k$, the displayed exponents, and a cell polynomial $v$.

[F1] On the fixed finite-dimensional polynomial space, $|v|_{W^{\ell,p}}\le C|v|_{W^{m,q}}$ when $m\le\ell$, and every facet $L^p$ norm is bounded by the cell $L^q$ norm, for all $p,q\in[1,\infty]$. ([[lem-reference-polynomial-norm-equivalence]])

[F2] Under an affine map, order-$r$ Sobolev seminorms acquire factors $\|A\|^r|\det A|^{-1/q}$ on pullback and $\|A^{-1}\|^r|\det A|^{1/p}$ on pushforward. Its oriented face area vector is $\det(A)A^{-T}\widehat n\,d\widehat S$. ([[lem-affine-pullback-weak-derivatives-and-scaling]], [[lem-affine-simplex-gauss-green-formula]])

[F3] Shape regularity gives $\|A_K\|\asymp h_K$, $\|A_K^{-1}\|\asymp h_K^{-1}$, $\det A_K\asymp h_K^d$, and each facet Jacobian is comparable to $h_K^{d-1}$. ([[lem-shape-regular-affine-simplex-scaling]])

[F4] The reference polynomial norm result [F1] uses Sobolev norms whose definition assumes Countable Choice. ([[def-countable-choice]])

## Proof

1.1 Pull $v$ back to $\widehat v=v\circ F_K\in\mathbb P_k(\widehat S_d)$. By [F1], $|\widehat v|_{W^{\ell,p}}\le C|\widehat v|_{W^{m,q}}$ and $\|\widehat v\|_{L^p(\widehat F)}\le C\|\widehat v\|_{L^q}$ for each reference facet; finitely many facets allow one constant. [F1, given]

2.1 Apply the affine derivative estimates [F2] in both directions and then [F3]. For the cell inequality the total factor is bounded by $$\|A_K^{-1}\|^\ell\|A_K\|^m |\det A_K|^{1/p-1/q} \le C h_K^{m-\ell+d(1/p-1/q)}.$$ For the face inequality it is bounded by the physical face Jacobian to power $1/p$ times the inverse cell Jacobian to power $1/q$, namely $C h_K^{(d-1)/p-d/q}$. These are the two claimed estimates. [F2, F3, F4, step 1.1, algebra] ∎
