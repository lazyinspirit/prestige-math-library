---
id: cex-cm-sine-tail-bound-fails-for-rough-data
kind: counterexample
title: "FALSE: the $O(N^{-4})$ sine-tail bound holds for every continuous odd periodic function. A $C^1$ datum with coefficients $n^{-3}$ refutes it"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [thm-cm-smooth-string-fourier-series-solution, def-cm-sine-coefficients-of-periodic-functions, lem-cm-cosine-sine-orthogonality-and-odd-extension, lem-cm-sine-coefficient-decay-by-integration-by-parts, thm-weierstrass-m-test-for-function-series, def-series-of-real-functions, thm-integral-test-for-series, thm-uniform-limit-continuous-real-functions, def-integral-over-a-measurable-set, thm-linearity-of-the-integral, def-ck-euclidean-maps-and-diffeomorphisms, thm-ftc-first-part, thm-substitution, def-oriented-integral, thm-additivity-over-subintervals]
dependency_roles:
  thm-cm-smooth-string-fourier-series-solution: mathematical-premise
  def-cm-sine-coefficients-of-periodic-functions: mathematical-premise
  lem-cm-cosine-sine-orthogonality-and-odd-extension: mathematical-premise
  lem-cm-sine-coefficient-decay-by-integration-by-parts: mathematical-premise
  thm-weierstrass-m-test-for-function-series: mathematical-premise
  def-series-of-real-functions: mathematical-premise
  thm-integral-test-for-series: mathematical-premise
  thm-uniform-limit-continuous-real-functions: mathematical-premise
  def-integral-over-a-measurable-set: mathematical-premise
  thm-linearity-of-the-integral: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-substitution: mathematical-premise
  def-oriented-integral: mathematical-premise
  thm-additivity-over-subintervals: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "R. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845), Chapters 1 and 5 (smoothness and decay of Fourier coefficients; Fourier series in L²(T))"
      url: "https://arxiv.org/pdf/0903.3845"

  precheck: pass
proof_strategy: direct
---

## Statement refuted

**False statement.** For every continuous odd $2L$-periodic function $F$ there is a constant $C_F$ such that, for every $N\ge1$,

$$\sup_{x\in\mathbb R}\Bigl|F(x)-S_N^{\rm s}F(x)\Bigr|\le C_F\,(N+1)^{-4},$$

where $S_N^{\rm s}F$ is the $N$-th partial sum of the sine series of [[def-cm-sine-coefficients-of-periodic-functions]].

(The theorem of this collection proves the bound only under the $C^5$ hypothesis of [[thm-cm-smooth-string-fourier-series-solution]]; the statement above drops that hypothesis, and that is exactly what fails.)

## Facts & Assumptions

**Given:** A period $L>0$ and the function $F:\mathbb R\to\mathbb R$ defined by the absolutely convergent series

$$F(x):=\sum_{n\ge1}n^{-3}\sin\Bigl(\frac{n\pi x}{L}\Bigr).$$

[L1] Convergence and regularity: $\sum n^{-3}<\infty$ and $\sum n^{-2}<\infty$, so by the Weierstrass majorant test the series for $F$ and for the formal derivative $\sum(\pi/L)n^{-2}\cos(n\pi x/L)$ converge uniformly; hence $F$ is continuous, odd, $2L$-periodic, and $C^1$ with the displayed derivative ([[thm-weierstrass-m-test-for-function-series]], [[def-series-of-real-functions]], [[thm-uniform-limit-continuous-real-functions]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L2] Coefficients: termwise integration of the uniformly convergent series against $\sin(k\pi x/L)$ using the orthogonality $\int_0^L\sin(n\pi x/L)\sin(k\pi x/L)dx=(L/2)\delta_{nk}$ gives $b_k(F)=k^{-3}$ for every $k\ge1$ ([[def-cm-sine-coefficients-of-periodic-functions]], [[lem-cm-cosine-sine-orthogonality-and-odd-extension]], [[def-integral-over-a-measurable-set]], [[thm-linearity-of-the-integral]]).

[L3] Orthogonality of the remainder: for the tail $R_N:=F-S_N^{\rm s}F=\sum_{n>N}n^{-3}\sin(n\pi x/L)$, termwise integration of $R_N^2$ (a uniformly convergent series of continuous functions) gives $\int_0^LR_N(x)^2dx=\frac{L}{2}\sum_{n>N}n^{-6}$ ([[lem-cm-cosine-sine-orthogonality-and-odd-extension]], [[thm-linearity-of-the-integral]]).

[L4] Sum lower bound: $\sum_{n>N}n^{-6}\ge\int_{N+1}^{\infty}x^{-6}dx=\frac15(N+1)^{-5}$ ([[thm-integral-test-for-series]], [[thm-substitution]]).


## Counterexample

**Proof technique:** direct; the tail's $L^2$ norm forces its sup norm to exceed any $C(N+1)^{-4}$ along a subsequence.

1.1 By [L2] each $S_N^{\rm s}F=\sum_{n\le N}n^{-3}\sin(n\pi x/L)$ is continuous, and $F$ is continuous by [L1]; hence each $R_N$ is continuous and $2L$-periodic. By [L3] and [L4], $$\int_0^LR_N(x)^2dx=\frac{L}{2}\sum_{n>N}n^{-6}\ \ge\ \frac{L}{10}(N+1)^{-5}.$$ [given, L1, L2, L3, L4, algebra]

2.1 Since $R_N$ is continuous on the compact interval $[0,L]$ by [L1], its squared sup norm dominates its mean: $\sup_xR_N(x)^2\ge\frac1L\int_0^LR_N^2dx\ge\frac{1}{10}(N+1)^{-5}$. Taking square roots, $$\sup_{x\in\mathbb R}\bigl|F(x)-S_N^{\rm s}F(x)\bigr|\ \ge\ \frac{1}{\sqrt{10}}\,(N+1)^{-5/2}.$$ [step 1.1, L1, algebra]

3.1 Suppose a constant $C_F$ satisfied the false statement's bound for all $N$. Then for every $N$, $\frac{1}{\sqrt{10}}(N+1)^{-5/2}\le C_F(N+1)^{-4}$, i.e. $C_F\ge\frac{1}{\sqrt{10}}(N+1)^{3/2}$; letting $N\to\infty$ gives $C_F\ge+\infty$, a contradiction. Hence no such $C_F$ exists, and the false statement is refuted. [step 2.1, algebra] ∎


## Remarks

- The datum $F$ is $C^1$ but not $C^2$: formally differentiating twice produces $\sum n^{-1}\sin(n\pi x/L)$, which does not converge absolutely, so the $C^5$ hypothesis of the string theorem is genuinely necessary for the displayed $O(N^{-4})$ displacement tail. The counterexample refutes the hypothesis-free statement only; the theorem itself is not contradicted.

- The lower bound uses the $L^2$ tail of the sine coefficients; it shows the tail cannot be better than order $N^{-5/2}$ in sup norm for this datum, while any $O(N^{-4})$ assertion would require the considerably faster decay of the $C^5$ class.
