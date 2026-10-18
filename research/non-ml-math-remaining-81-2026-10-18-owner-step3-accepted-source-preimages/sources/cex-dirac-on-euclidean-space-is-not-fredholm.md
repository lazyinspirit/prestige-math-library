---
id: cex-dirac-on-euclidean-space-is-not-fredholm
kind: counterexample
title: "The Euclidean Dirac operator has nonclosed range at zero"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory-examples
dependency_level: 2
deps:
  - def-graded-hermitian-clifford-module-and-geometric-dirac
  - def-clifford-algebra-of-a-quadratic-space
  - thm-plancherel
  - lem-weak-derivatives-are-polynomial-fourier-multipliers
  - def-sobolev-space-wkp-and-its-norm
  - def-countable-choice
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + countable choice"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
---

## Statement

Assume Countable Choice.

For $n\ge1$, let $S_0$ be a nonzero finite-dimensional Hermitian module for the negative-sign complex Clifford algebra, with skew-Hermitian generators $c(e^j)$ satisfying $c(\xi)^2=-|\xi|^2I$. On $\mathbb R^n$ with its Euclidean metric, let
$$D=\sum_{j=1}^n c(e^j)\partial_j,\qquad \operatorname{Dom}(D)=H^1(\mathbb R^n;S_0)\subset L^2(\mathbb R^n;S_0).$$
Then $D$ is closed and densely defined, its range is dense but not all of $L^2$, and therefore it is not Fredholm.

## Facts & Assumptions

**Given:** Countable choice, the Euclidean Clifford module, and the stated $H^1$ domain.

[F1] The Clifford relation implies $c(\xi)^*c(\xi)=|\xi|^2I$ and $c(\xi)$ is invertible for $\xi\ne0$ with inverse norm $|\xi|^{-1}$ ([[def-graded-hermitian-clifford-module-and-geometric-dirac]], [[def-clifford-algebra-of-a-quadratic-space]]).

[F2] The Fourier transform extends to a unitary map on $L^2(\mathbb R^n)$; distributional derivatives transform to multiplication by $2\pi i\xi_j$ ([[thm-plancherel]], [[lem-weak-derivatives-are-polynomial-fourier-multipliers]]).

[F3] $H^1(\mathbb R^n;S_0)$ consists of $L^2$ sections whose first distributional derivatives are in $L^2$, componentwise ([[def-sobolev-space-wkp-and-its-norm]]).

[A1] Countable choice is the exact Fourier-transform hypothesis in [F2] ([[def-countable-choice]]).

## Proof

**Given:** The domain and operator above.

1.1 Under the unitary Fourier transform [F2], $D$ is multiplication by $2\pi i c(\xi)$. By [F1], its maximal multiplier domain is exactly $\{u\in L^2:|\xi|\widehat u\in L^2\}$. If $u\in H^1$, [F3] and the distributional derivative identity in [F2] put $|\xi|\widehat u$ in $L^2$. Conversely, if $|\xi|\widehat u\in L^2$, then each $2\pi i\xi_j\widehat u$ is in $L^2$; its inverse Plancherel transform is the distributional derivative $\partial_j u$, by the Fourier differentiation identity and injectivity of the Fourier transform on tempered distributions. Hence $u\in H^1$ by [F3]. A multiplication operator by a measurable finite matrix is closed, since convergence of $u_k$ and $c(\xi)u_k$ in $L^2$ has an almost-everywhere convergent subsequence and the pointwise multiplication identity passes to the limit. Schwartz sections are dense in $L^2$, so $D$ is densely defined and closed. [A1, F1, F2, F3, construct]

2.1 If $h$ is orthogonal to the range, then distributionally $D^*h=0$. Fourier transformation and [F2] give $c(\xi)\widehat h(\xi)=0$ almost everywhere. By [F1], $c(\xi)$ is invertible for every $\xi\ne0$, and the singleton $\{0\}$ has Lebesgue measure zero; hence $\widehat h=0$ almost everywhere and $h=0$. Thus the range is dense. [F1, F2, step 1.1]

2.2 Fix a unit vector $v\in S_0$ and define $\widehat g(\xi)=\mathbf 1_{\{0<|\xi|<1\}}|\xi|^{-(n/2-1)}v$. Polar coordinates give $\|\widehat g\|_2^2=C_n\int_0^1 r^{n-1-2(n/2-1)}\,dr=C_n\int_0^1r\,dr<\infty$, so [F2] gives $g\in L^2$. If $g=Du$ for some $u\in H^1$, then for almost every $\xi\ne0$, [F1] forces $|\widehat u(\xi)|=(2\pi)^{-1}|\xi|^{-1}|\widehat g(\xi)|$. Consequently its squared norm near zero is a positive constant times $\int_0^1r^{n-1-2(n/2)}\,dr=\int_0^1r^{-1}\,dr=\infty$, contradicting $u\in L^2$. Thus $g$ is not in the range, so the dense range is proper and not closed. A Fredholm operator must have closed range, hence $D$ is not Fredholm. [F1, F2, step 1.1, algebra]

3.1 The construction works also for $n=1$, where the exponent in $\widehat g$ is $1/2$ and the displayed $L^2$ integral is still finite; the logarithmic divergence after division by $|\xi|$ is unchanged. The zero-frequency set has measure zero, but arbitrarily small nonzero frequencies cause the obstruction. Countable choice is used only through [A1] and [F2]. [A1, F1, F2, step 2.2] ∎

