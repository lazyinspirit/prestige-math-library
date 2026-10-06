---
id: lem-schwartz-periodisation-over-a-lattice-is-smooth-and-uniformly-summable
kind: lemma
title: "Schwartz periodisation over a lattice is smooth with locally uniformly summable derivatives"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
design_row: FR-19
deps: [def-full-rank-lattice-covolume-and-dual-lattice, lem-invertible-linear-substitutions-preserve-schwartz-space, thm-poisson-summation-for-schwartz-functions, def-schwartz-space-and-its-seminorms, thm-uniform-derivative-limit-on-a-closed-interval, def-countable-choice, def-matrix-product-and-identity-matrix, thm-real-square-matrix-invertible-iff-determinant-nonzero, thm-compactness-under-continuous-maps, thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space, thm-symmetry-of-higher-mixed-partials, lem-a-uniformly-approximable-real-valued-map-is-continuous, thm-componentwise-limits-and-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lior Silberman, Fourier series and the Poisson summation formula (Math 604/613 notes, UBC)"
      url: "https://personal.math.ubc.ca/~lior/teaching/1011/613D_F10/Fourier+PoissonSum.pdf"
      locator: "§1, Exercise 4: if $f$ decays faster than $(1+|x|)^{-N}$ for large $N$ then $\\Pi_\\Lambda f\\in C(T)$, and for $f\\in\\mathcal S(\\mathbb R^n)$ the periodisation is $C^\\infty$, PDF p. 2"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "ch. 23, Definition 23.1 and Lemma 23.3 with the continuity discussion on p. 138: periodisation of a rapidly decaying continuous function converges absolutely and locally uniformly, PDF pp. 135-138"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE (author PDF)"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
      locator: "§7, (7.11)-(7.14): the periodisation $f^{\\flat}(x)=\\sum_{\\gamma\\in\\Gamma}f^{0}(x+\\gamma)$ over the lattice $\\Gamma$, printed p. 72"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $f\in\mathcal S(\mathbb R^n)$
and let $\Lambda$ be a full-rank lattice. Then the periodisation
$$P_\Lambda f(x):=\sum_{\lambda\in\Lambda}f(x+\lambda)$$
converges absolutely for every $x\in\mathbb R^n$, locally uniformly together
with the derivative series $\sum_{\lambda\in\Lambda}\partial^{\beta}f(x+\lambda)$
for every multi-index $\beta$; the sum $P_\Lambda f$ is smooth and
$\Lambda$-periodic with
$\partial^{\beta}(P_\Lambda f)=\sum_{\lambda\in\Lambda}\partial^{\beta}f(x+\lambda)$.

## Facts & Assumptions

**Given:** Countable Choice, a Schwartz function $f\in\mathcal S(\mathbb R^n)$ ([[def-schwartz-space-and-its-seminorms]]), a full-rank lattice $\Lambda=A\mathbb Z^n$ with $A$ an invertible real $n\times n$ matrix ([[def-full-rank-lattice-covolume-and-dual-lattice]], [[thm-real-square-matrix-invertible-iff-determinant-nonzero]]), and the series indexed by $\lambda=Ak\leftrightarrow k\in\mathbb Z^n$ ([[def-matrix-product-and-identity-matrix]]).

[F1] Invertible linear substitutions preserve Schwartz space: $h\mapsto h\circ A$ maps $\mathcal S(\mathbb R^n)$ to itself, for $A$ and for $A^{-1}$ ([[lem-invertible-linear-substitutions-preserve-schwartz-space]]).

[F2] Published Schwartz Poisson theorem: for $g\in\mathcal S(\mathbb R^n)$, $\sum_{k\in\mathbb Z^n}g(y+k)=\sum_{k\in\mathbb Z^n}\widehat g(k)e^{2\pi ik\cdot y}$; the left series converges locally uniformly with every derivative, and at $y=0$ both sums are absolutely convergent ([[thm-poisson-summation-for-schwartz-functions]]).

[F3] If continuously differentiable real functions on a closed interval converge at one point and their derivatives converge uniformly, then the limit is differentiable with derivative the limit of the derivatives ([[thm-uniform-derivative-limit-on-a-closed-interval]]).

[F4] Differentiation and translation are continuous linear operations on $\mathcal S(\mathbb R^n)$, and $h\mapsto h\circ A$ is a linear bijection of $\mathcal S$ with inverse $h\mapsto h\circ A^{-1}$ ([[thm-differentiation-polynomial-multiplication-translation-and-modulation-are-continuous-on-schwartz-space]], [[lem-invertible-linear-substitutions-preserve-schwartz-space]]).

[F5] Continuous images of compact sets are compact ([[thm-compactness-under-continuous-maps]]), so $A^{-1}(K)$ is compact for compact $K\subseteq\mathbb R^n$; local uniform convergence on compacta of a series in $y$ therefore transfers to local uniform convergence in $x=Ay$.

[F6] Smooth mixed coordinate derivatives commute, by applying [[thm-symmetry-of-higher-mixed-partials]] to the real and imaginary parts; thus $\partial_j\partial^\beta h=\partial^{\beta+e_j}h$ for smooth $h$.

[F7] A uniform limit of continuous real-valued functions is continuous ([[lem-a-uniformly-approximable-real-valued-map-is-continuous]]); complex continuity follows by treating real and imaginary parts ([[thm-componentwise-limits-and-continuity]]). Restricting to a closed box about each point gives the same conclusion for locally uniform limits.

## Proof

**Proof technique:** direct.

1.1 **Convergence of every derivative series.** Fix $h\in\mathcal S(\mathbb R^n)$ and a multi-index $\gamma$, and put $g:=(\partial^{\gamma}h)\circ A$, which lies in $\mathcal S$ by [F1]. For every $x$, writing $\lambda=Ak$ and $y=A^{-1}x$ gives $x+\lambda=A(y+k)$ and hence the termwise identity $\sum_{\lambda\in\Lambda}\partial^{\gamma}h(x+\lambda)=\sum_{k\in\mathbb Z^n}g(y+k)$; by [F2] applied to $g$, this series and the derivative series converge locally uniformly in $y$, hence by [F5] in $x$. Absolute convergence at each fixed $x$: for the fixed $y$, the translate $z\mapsto g(y+z)$ is in $\mathcal S$ by [F4], so the absolute-convergence clause of [F2] applied to that translate gives $\sum_k|g(y+k)|<\infty$. [F1, F2, F4, F5, given]

2.1 **Differentiation along coordinate lines.** Fix $h\in\mathcal S$, $x_0\in\mathbb R^n$ and a coordinate $j$, and for $t\in[-1/2,1/2]$ put $\Phi(t):=\sum_{\lambda\in\Lambda}h(x_0+te_j+\lambda)$, a sum that converges by step 1.1 applied to $h$. The finite partial sums $\Phi_N(t):=\sum_{|k|\le N}h(x_0+te_j+Ak)$ are continuously differentiable with $\Phi_N'(t)=\sum_{|k|\le N}\partial_jh(x_0+te_j+Ak)$, and $\Phi_N(0)\to\sum_\lambda h(x_0+\lambda)$ by step 1.1; by step 1.1 applied to $\partial_jh$, the derivatives $\Phi_N'$ converge uniformly on the closed interval $[-1/2,1/2]$ to $\sum_\lambda\partial_jh(x_0+te_j+\lambda)$. Applying [F3] on this closed interval to the real and imaginary parts gives that $\Phi$ is differentiable at every interior point, in particular at $t=0$, with $\Phi'(0)=\sum_{\lambda}\partial_jh(x_0+\lambda)$. Since $x_0$ and $j$ were arbitrary, the partial derivative $\partial_j$ of the sum function exists at every point and equals $\sum_\lambda\partial_jh(\cdot+\lambda)$, which is continuous by [F7] as a locally uniform limit of continuous functions. [step 1.1, F3, F4, F7, given]

3.1 Apply step 2.1 successively along any ordered word of coordinate differentiations, starting with $h=f$. At each stage its derivative is again Schwartz by [F4], so the next differentiation is licensed and the resulting derivative series is continuous and locally uniformly convergent. Induction on the word length establishes every ordered derivative of $P_\Lambda f$ and its continuity, hence smoothness. By [F6], grouping the derivatives of $f$ by their multi-indices gives $\partial^\beta(P_\Lambda f)=\sum_\lambda\partial^\beta f(\cdot+\lambda)$ for every $\beta$. Absolute and locally uniform convergence are supplied by step 1.1. [step 1.1, step 2.1, F4, F6, given]

4.1 **Periodicity.** For $\mu\in\Lambda$, reindexing the absolutely convergent series by the bijection $\lambda\mapsto\lambda+\mu$ of $\Lambda$ gives $P_\Lambda f(x+\mu)=\sum_{\lambda}f(x+\mu+\lambda)=\sum_{\lambda}f(x+\lambda)=P_\Lambda f(x)$. Countable Choice enters only through the published Poisson theorem's convergence clause in [F2], which is quoted for the Schwartz functions $(\partial^{\gamma}h)\circ A$; the lattice reindexing, the partial sums and the interval differentiations are explicit. [step 3.1, F2, given] ∎ 
