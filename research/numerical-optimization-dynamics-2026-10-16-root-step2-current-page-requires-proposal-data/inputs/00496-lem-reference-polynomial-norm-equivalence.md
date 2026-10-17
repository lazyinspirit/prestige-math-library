---
id: lem-reference-polynomial-norm-equivalence
kind: lemma
title: Polynomial derivative and face norms are controlled on a reference simplex
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-matching-affine-simplicial-meshes, def-reference-finite-element-and-unisolvent-dofs, def-sobolev-space-wkp-and-its-norm, thm-all-norms-on-rn-are-equivalent, thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent, def-equivalent-norms, def-equivalent-complex-norms, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 12
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap12.pdf
      locator: "§12.1, printed pp. 131–134: finite-dimensional norm equivalence on the reference polynomial space."
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 4
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "§4.2, printed pp. 56–57: reference-cell interpolation and polynomial norm estimates."
verification: {}
---

## Statement

Assume Countable Choice. Let $\mathbb K\in\{\mathbb R,\mathbb C\}$,
$\widehat S_d$ be the reference simplex, let $\widehat P$ be a finite
dimensional $\mathbb K$-space of polynomial functions on it, let
$\widehat F$ be any facet, and let integer $m\ge0$. For $1\le p,q\le\infty$ there is a finite
constant $C$ such that
$$|v|_{W^{m,p}(\widehat S_d)}+\|v\|_{L^p(\widehat F)}\le C\|v\|_{L^q(\widehat S_d)}\qquad(v\in\widehat P).$$
For every pair of integers $0\le m\le\ell$, there is also a finite
constant $C$ such that
$$|v|_{W^{\ell,p}(\widehat S_d)} \le C|v|_{W^{m,q}(\widehat S_d)}\qquad(v\in\widehat P).$$
For finitely many facets, one constant works for all of them. In particular,
every linear degree-of-freedom functional on $\widehat P$ is bounded with
respect to the $L^q(\widehat S_d)$ norm.

## Facts & Assumptions

**Given:** Countable Choice; the reference simplex has nonempty interior and finite positive volume; $\widehat P$ has a finite ordered basis; Sobolev norms use the finite-derivative convention of [[def-sobolev-space-wkp-and-its-norm]], and degrees of freedom use [[def-reference-finite-element-and-unisolvent-dofs]].

[F1] On every finite-dimensional real normed space, any two norms are equivalent. ([[thm-all-norms-on-rn-are-equivalent]], [[def-equivalent-norms]])

[F2] On every finite-dimensional complex normed space, any two complex norms are equivalent. ([[thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent]], [[def-equivalent-complex-norms]])

[F3] A degree of freedom is a linear functional on the finite-dimensional polynomial space. ([[def-reference-finite-element-and-unisolvent-dofs]])

[F4] The Sobolev-space norm convention assumes Countable Choice. ([[def-countable-choice]])

[F5] The canonical open simplex and its facets are defined by
[[def-matching-affine-simplicial-meshes]]; in particular the cell has
nonempty interior and positive finite volume, and each facet is a bounded
nondegenerate simplex of positive finite surface measure.

## Proof

1.1 The cell expression $N_0(v):=\|v\|_{L^q(\widehat S_d)}$ is a norm on $\widehat P$. If it is zero, then for finite $q$ the continuous polynomial vanishes almost everywhere, and for $q=\infty$ it vanishes essentially everywhere. In either case, if it were nonzero at an interior point, continuity would make it bounded away from zero on an interior ball of positive measure, a contradiction. It therefore vanishes on the open simplex and hence is the zero polynomial, since its finite Taylor expansion at any interior point is exact. [F5, given, algebra]

2.1 If $\widehat P=\{0\}$, all displayed estimates and functional bounds hold immediately, so assume $\dim\widehat P>0$. The expression $N_1(v):=\|v\|_{L^p(\widehat S_d)}+|v|_{W^{m,p}(\widehat S_d)} +\|v\|_{L^p(\widehat F)}$ is a norm: it is nonnegative, homogeneous and subadditive, and $N_1(v)=0$ forces the cell $L^p$ norm to vanish, so the preceding argument gives $v=0$. For real coefficients apply [F1], and for complex coefficients apply [F2], to $N_0$ and $N_1$; norm equivalence gives $N_1(v)\le C N_0(v)$. Taking the maximum over the finitely many facets proves their uniform estimate. By [F3], any degree-of-freedom functional is linear on $\widehat P$; it is bounded for $N_1$ by finite-dimensional norm equivalence and hence by $N_0$. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 If $\widehat P=\{0\}$, the second estimate is immediate. If $m=0$, the second estimate is the derivative part of step 2.1 with its order there set to $\ell$. If $m\ge1$, let $\mathbb P_{m-1}$ be the polynomials of degree at most $m-1$. The seminorm $|v|_{W^{m,q}}$ vanishes exactly on $\widehat P\cap\mathbb P_{m-1}$: every monomial of degree at least $m$ has a nonzero derivative of order $m$, and every derivative of order $m$ kills lower-degree monomials. It is therefore a norm on the finite- dimensional quotient $\widehat P/(\widehat P\cap\mathbb P_{m-1})$. If this quotient is zero, then the target seminorm vanishes on all of $\widehat P$ because $\ell\ge m$, so the estimate is immediate. Otherwise add the target seminorm $|v|_{W^{\ell,p}}$ to the quotient norm; it is well-defined because it also vanishes on $\widehat P\cap\mathbb P_{m-1}$. The sum is another norm. Applying [F1] or [F2] to these two norms bounds the target seminorm by the order-$m$ seminorm. This proves the second estimate. [F1, F2, step 2.1, algebra] ∎
