---
id: lem-dirac-heat-trace-and-mckeen-singer-index
kind: lemma
title: "The Dirac heat trace is smooth and its supertrace equals the index"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory
dependency_level: 6
deps:
  - lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel
  - lem-lichnerowicz-formula-for-geometric-dirac-operators
  - thm-spectral-theorem-for-compact-self-adjoint-operators
  - thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - def-axiom-of-choice
  - lem-dirac-maximal-domain-is-h1
justified_by:
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + full AC; inherited from compact elliptic and spectral suppliers"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Assume full AC. For a closed even-dimensional manifold and a graded Hermitian geometric Clifford module, let $P=D_V^2$ with the $H^2$ selfadjoint domain. Its spectrum is discrete, nonnegative, of finite multiplicities, and has smooth eigensections. For $t>0$, $e^{-tP}$ is trace class and has a smooth kernel $K_t(x,y)$. The diagonal series and its derivatives converge uniformly for each $t>0$, and
$$\operatorname{ind}_{\mathbb C}D_V^+=\operatorname{Str}(e^{-tP})=\int_M\operatorname{str}K_t(x,x)\,d\operatorname{vol}_g(x),\qquad t>0.$$

## Facts & Assumptions

**Given:** Full AC, compact boundaryless $M$, and the operator and domain from [[lem-dirac-maximal-domain-is-h1]] and [[lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel]].

[F1] $P$ is nonnegative, formally symmetric Laplace type with exact $H^2$ domain; elliptic estimates give $H^{k+2}$ regularity from $H^k$ data ([[lem-lichnerowicz-formula-for-geometric-dirac-operators]], [[thm-elliptic-differential-operators-on-compact-vector-bundles-have-parametrices-and-regularity]]).

[F2] The shifted inverse of $P$ is compact selfadjoint and the compact selfadjoint spectral theorem gives a complete orthogonal sum of finite-dimensional eigenspaces ([[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]], [[thm-spectral-theorem-for-compact-self-adjoint-operators]]).

[F3] Positive-eigenvalue eigenspaces of $P_+$ and $P_-$ are isomorphic under $D^+$, with inverse $\lambda^{-1}D^-$ ([[lem-chiral-dirac-is-fredholm-with-kernel-and-cokernel]]).

[A1] Full AC supplies the Countable Choice hypotheses in [F1]–[F3] ([[def-axiom-of-choice]]).

## Proof

**Given:** The positive selfadjoint operator $P=D^2$, its chiral blocks $P_\pm=D^\mp D^\pm$, and the compact analytic suppliers above.

1.1 By [F2], choose an orthonormal basis $u_j$ of each finite-dimensional $P$-eigenspace, with eigenvalues $\lambda_j\ge0$. For every integer $a\ge0$, the elliptic estimate in [F1], iterated on $P^a u_j=\lambda_j^a u_j$, gives $\|u_j\|_{H^{2a}}\le C_a(1+\lambda_j)^a$. If $2a>r+n/2$, Sobolev embedding bounds every $C^r$ norm by the same polynomial. The dimension of the spectral subspace $P\le L$ is polynomially bounded: point evaluation on that subspace has operator norm at most $C(1+L)^a$; summing its squared norm over an orthonormal basis and integrating over compact $M$ gives $\dim 1_{[0,L]}(P)L^2\le C'(1+L)^{2a}$. [A1, F1, F2, given]

2.1 The polynomial counting bound and the polynomial $C^r$ eigenfunction bounds imply $\sum_j e^{-t\lambda_j}(1+\lambda_j)^q<\infty$ for every fixed $t>0$ and integer $q$: split $[0,\infty)$ into dyadic shells, bound the number and $C^r$ norm on each shell polynomially, and use $e^{-t2^k}$ to dominate every polynomial. Thus $K_t(x,y)=\sum_j e^{-t\lambda_j}u_j(x)\otimes u_j(y)^*$ and every fixed space/time derivative converge absolutely and uniformly. The series solves $(\partial_t+P_x)K_t=0$, and integrating it against a smooth section gives $e^{-tP}$ by the orthonormal expansion. Termwise integration on the diagonal gives $\operatorname{Tr}(e^{-tP})=\sum_j e^{-t\lambda_j}<\infty$. [F1, step 1.1, algebra]

3.1 For each $\lambda>0$, [F3] pairs the $\lambda$-eigenspaces of $P_+$ and $P_-$ with equal multiplicity, so their contributions to the graded trace $\operatorname{Str}(e^{-tP})$ cancel. At $\lambda=0$, the eigenspaces are $\ker D_V^+$ and $\ker D_V^-$; their signed dimension difference is the Fredholm index from [F3]. The diagonal kernel series is uniformly convergent, so integrating its pointwise supertrace equals the sum of these eigenspace traces. This proves the stated identity for every $t>0$. [F3, step 2.1]

4.1 If $M$ is empty all Hilbert spaces and integrals are zero. In dimension zero the spectrum is the finite-dimensional zero operator and the same identity is direct; the analytic estimates above are only invoked in positive even dimension. The trace equality was obtained from the explicit smooth kernel series, not from an unproved diagonal trace theorem. [A1, F1, F2, step 2.1, step 3.1] ∎

