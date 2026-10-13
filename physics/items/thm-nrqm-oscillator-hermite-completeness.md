---
id: thm-nrqm-oscillator-hermite-completeness
aliases: [nrqm-oscillator-hermite-completeness]
kind: theorem
domain: mathematics
title: "Hermite completeness"
status: published
origin: pipeline
dependency_level: 2
deps: [thm-nrqm-oscillator-hermite-recurrence, thm-nrqm-oscillator-hermite-orthogonality, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, thm-parseval-equivalences-for-a-complete-orthonormal-family, def-fourier-transform-on-l-one-of-rn, cor-uniqueness-of-the-l-one-fourier-transform, thm-dominated-convergence, cor-cauchy-schwarz-inequality-for-l-two, def-l-p-space-as-a-quotient-by-null-functions, def-complex-lp-and-euclidean-test-function-conventions, def-complex-exponential, lem-complex-exponential-series-converges-everywhere, thm-nonnegative-series-bounded-partial-sums, lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization, def-countable-choice]
dependency_roles:
  thm-nrqm-oscillator-hermite-recurrence: mathematical-premise
  thm-nrqm-oscillator-hermite-orthogonality: mathematical-premise
  def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis: mathematical-premise
  thm-parseval-equivalences-for-a-complete-orthonormal-family: mathematical-premise
  def-fourier-transform-on-l-one-of-rn: mathematical-premise
  cor-uniqueness-of-the-l-one-fourier-transform: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-complex-lp-and-euclidean-test-function-conventions: mathematical-premise
  def-complex-exponential: mathematical-premise
  lem-complex-exponential-series-converges-everywhere: mathematical-premise
  thm-nonnegative-series-bounded-partial-sums: mathematical-premise
  lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §8.3 pp. 177-179 (span of the oscillator eigenfunctions and Theorem 8.5)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, §7 pp. 155-170 (Fourier transform of the Gaussian and the L1 uniqueness argument)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $L^2=L^2(\mathbb R,dy)$ be the complex Lebesgue space with inner product linear in the first argument, and let $g_0,P,(g_n)_{n\in\mathbb N}$ and $H_n$ be as in [[thm-nrqm-oscillator-hermite-recurrence]]. Define $h:=fg_0\in L^1(\mathbb R)$ for $f\in L^2$ and write $\widehat h(\xi)=\int_{\mathbb R}h(y)e^{-2\pi i\xi y}\,dy$ for its $L^1$ Fourier transform. Then:

(a) (moment criterion) if $\int_{\mathbb R}f\,q\,g_0=0$ for every polynomial $q\in\mathbb C[y]$, then $f=0$ almost everywhere;

(b) the family $(g_n)_{n\in\mathbb N}$ is a complete orthonormal family, i.e. a Hilbert basis, of $L^2$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]): the only $f\in L^2$ with $\langle f,g_n\rangle=0$ for all $n$ is $f=0$, and consequently every $f\in L^2$ satisfies $f=\sum_n\langle f,g_n\rangle g_n$ in $L^2$ with $\|f\|^2=\sum_n|\langle f,g_n\rangle|^2$ ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]]);

(c) the polynomial-Gaussian space $P$ is dense in $L^2$.

## Facts & Assumptions

**Given:** the orthonormal family $(g_n)$ with $g_n=H_ng_0/\sqrt{2^nn!}$ and $H_n$ a real polynomial of degree $n$ with leading coefficient $2^n$ ([[thm-nrqm-oscillator-hermite-recurrence]](a),(f)); the measures and integrals are Lebesgue measure on $\mathbb R$.

[F1] $(g_n)$ is orthonormal in $L^2$ and $P$ is a linear subspace of $L^2$ containing every $g_n$ ([[thm-nrqm-oscillator-hermite-orthogonality]](a), [[thm-nrqm-oscillator-hermite-recurrence]](a)).

[F2] For a complete orthonormal family the following are equivalent: the closed linear span is $H$; the only vector orthogonal to every member is $0$; Parseval holds; and the finite-subset net of partial sums converges to each vector ([[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F3] $\|fg\|_1\le\|f\|_2\|g\|_2$ for $f,g\in L^2$, so $h=fg_0\in L^1$ with $\|h\|_1\le\|f\|_2$ because $\|g_0\|=1$ ([[cor-cauchy-schwarz-inequality-for-l-two]], [[thm-nrqm-oscillator-hermite-recurrence]](a)).

[F4] The $L^1$ Fourier transform is $\widehat h(\xi)=\int h(y)e^{-2\pi i\xi y}dy$ ([[def-fourier-transform-on-l-one-of-rn]]), and $\widehat h=0$ implies $h=0$ a.e. ([[cor-uniqueness-of-the-l-one-fourier-transform]]); if $h_N\to h$ pointwise a.e. with $|h_N|\le G$ a.e. for a fixed $G\in L^1$, then $\int h_N\to\int h$ ([[thm-dominated-convergence]]).

[F5] For real $w$, $e^{w}=\sum_{j\ge0}w^j/j!$ is the sum of an absolutely convergent series ([[def-complex-exponential]], [[lem-complex-exponential-series-converges-everywhere]]), and for nonnegative terms every partial sum is at most the full sum ([[thm-nonnegative-series-bounded-partial-sums]]).

[F6] The Lebesgue Gaussian transform at $n=1$, $\xi=0$ and parameter $1/(2\pi)$ gives $\int_{\mathbb R}e^{-y^2/2}dy=\sqrt{2\pi}<\infty$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

## Proof

1.1 [Reduction to the moment criterion] Since $(g_n)$ is orthonormal by [F1], [F2] reduces completeness to the statement that no nonzero $f\in L^2$ is orthogonal to every $g_n$; the expansion and Parseval identities are part of the same equivalence. The moment criterion (a) is proved first, and then applied. [given, F1, F2]

1.2 [Vanishing moments] Let $f\in L^2$ satisfy the moment hypothesis of (a), and put $h:=fg_0$. By [F3], $h\in L^1$ and $\|h\|_1\le\|f\|_2$; every polynomial moment is integrable by Cauchy–Schwarz because $qg_0\in L^2$ by [F1], and the hypothesis gives $\int hq=0$, in particular $\int h(y)y^jdy=0$ for every $j\ge0$. If instead $f$ is orthogonal to every $g_n$, then real-valuedness of $H_n$ and $g_0$ gives $0=\langle f,g_n\rangle=(2^nn!)^{-1/2}\int fH_ng_0$. The polynomials $H_0,\ldots,H_m$ have respective degrees $0,\ldots,m$ and nonzero leading coefficients, so successive subtraction of leading terms expresses every polynomial of degree at most $m$ as their linear combination. Thus orthogonality implies the moment hypothesis of (a). It remains to prove $h=0$ under that hypothesis. [given, F1, F3, algebra]

2.1 [The transform vanishes] Fix $\xi\in\mathbb R$, write $w:=2\pi\xi y$ and $S_N(y):=\sum_{j=0}^N(-2\pi i\xi y)^j/j!$. Then $S_N(y)\to e^{-2\pi i\xi y}$ for every $y$ by [F5], and $|S_N(y)|\le\sum_{j=0}^N|2\pi\xi y|^j/j!\le e^{2\pi|\xi||y|}=:G(y)$ by [F5]. Moreover $hG\in L^1$: by [F3], $\int |h(y)|G(y)dy\le\|f\|_2\|g_0G\|_2=\|f\|_2\bigl(\int G(y)^2g_0(y)^2dy\bigr)^{1/2}$, and $G(y)^2g_0(y)^2=\pi^{-1/2}e^{4\pi|\xi||y|-y^2}\le\pi^{-1/2}e^{8\pi^2\xi^2}e^{-y^2/2}$ because $4\pi|\xi||y|-y^2\le8\pi^2\xi^2-|y|^2/2$; the last integral is finite by [F6]. Hence [F4] applies with $\widehat h(\xi)=\lim_{N\to\infty}\int hS_N=\lim_{N\to\infty}\sum_{j=0}^N\frac{(-2\pi i\xi)^j}{j!}\int h(y)y^jdy=0$, the first equality by dominated convergence, the interchange of the finite sum with the integral by linearity of the integral, and the final equality because all moments of $h$ vanish by step 1.2. [step 1.2, F3, F4, F5, F6, algebra]

3.1 [Conclusion of (a) and (b)] Since $\widehat h=0$ identically, [F4] gives $h=fg_0=0$ a.e.; as $g_0(y)=\pi^{-1/4}e^{-y^2/2}>0$ for every $y$, $f=0$ a.e. This proves (a), and with step 1.1 it proves that $(g_n)$ is complete. By [F2] applied to the complete orthonormal family $(g_n)$, every $f\in L^2$ has the stated expansion and Parseval identity, which is (b). [step 1.1, step 1.2, step 2.1]

4.1 [Density of $P$] By [F2] and step 3.1 the closed linear span of $(g_n)$ is $L^2$. Since every $g_n\in P$ by [F1] and $P$ is a linear subspace, $P$ contains the span of the family; a subspace containing a dense subspace is dense, so $P$ is dense. This is (c). [step 3.1, F1] ∎
