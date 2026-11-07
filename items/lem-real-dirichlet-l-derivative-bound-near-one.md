---
id: lem-real-dirichlet-l-derivative-bound-near-one
kind: lemma
title: Uniform derivative bound for a real primitive Dirichlet L-function near one
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - thm-polya-vinogradov-partial-sum-bound
  - def-primitive-dirichlet-character-and-conductor
  - thm-primitive-dirichlet-l-analytic-continuation
  - def-dirichlet-l-function
  - thm-identity-theorem-holomorphic-functions
  - lem-dirichlet-character-values
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
  - thm-natural-logarithm-laws
  - thm-logarithm-slower-than-every-positive-power
  - def-complex-exponential
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-fundamental-theorem-for-complex-line-integrals
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-dirichlet-series-absolute-half-plane-holomorphy
  - thm-weierstrass-convergence-holomorphic-functions
  - lem-abel-summation-for-complex-series
  - def-real-power
  - thm-real-power-laws
  - thm-p-series-real-exponents
  - thm-real-power-continuity-and-derivatives
  - thm-algebra-of-derivatives
  - thm-newton-leibniz-with-interior-derivative
  - thm-monotonicity-of-the-integral
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Ian Petrow, Introduction to Analytic Number Theory
      url: https://www.homepages.ucl.ac.uk/~ucahpet/IANTnotes2018.pdf
      locator: Corollary 10.5 proof, printed p. 79; derivative bound near one.
    - title: Sheng-Chi Liu, Lecture Notes in Analytic Number Theory
      url: https://bpb-us-w2.wpmucdn.com/faculty.umaine.edu/dist/1/19/files/2022/08/analyticnumbertheory.pdf
      locator: Theorem 31.2.2 proof, printed p. 81; conversion from L(1) to zero distance.
---




## Statement

There is an absolute constant $C>0$ such that, for every primitive real nonprincipal Dirichlet character $\chi$ of conductor $q\ge3$ and every real
$$\max\!\left\{\frac12,1-\frac1{\log q}\right\}\le\sigma\le1,$$
one has $|L'(\sigma,\chi)|\le C(\log q)^2$.

## Statement references

Ian Petrow, *Introduction to Analytic Number Theory*, Corollary 10.5 proof, printed p. 79.

Sheng-Chi Liu, *Lecture Notes in Analytic Number Theory*, Theorem 31.2.2 proof, printed p. 81.

## Facts & Assumptions

**Given:** A primitive real nonprincipal Dirichlet character $\chi$ of conductor $q\ge3$ and a real $\sigma$ in the interval in the statement.

[F1] The Pólya–Vinogradov theorem gives $|\sum_{n\le x}\chi(n)|\le C_0\sqrt q\log q$ for every real $x\ge1$ after replacing $x$ by $\lfloor x\rfloor$ ([[thm-polya-vinogradov-partial-sum-bound]]).

[F2] A primitive character is not induced from a proper divisor of its modulus; for primitive nonprincipal $\chi$, $L(s,\chi)$ is entire ([[def-primitive-dirichlet-character-and-conductor]], [[thm-primitive-dirichlet-l-analytic-continuation]]).

[F3] On $\operatorname{Re}s>1$, $L(s,\chi)=\sum_{n\ge1}\chi(n)n^{-s}$ ([[def-dirichlet-l-function]]).

[F4] Two holomorphic functions on a connected open set that agree on a nonempty open subset agree everywhere ([[thm-identity-theorem-holomorphic-functions]]).

[F5] Character values are zero on nonunits and roots of unity on units, so $|\chi(n)|\le1$ ([[lem-dirichlet-character-values]]).

[F6] The logarithm in the estimate is the natural logarithm ([[def-natural-logarithm]]).

[F7] The natural logarithm satisfies $\log(n+1)-\log n=\int_n^{n+1}dt/t\le1/n$; it is increasing, and $\log x=o(x^\alpha)$ for every $\alpha>0$ ([[thm-logarithm-derivative-and-integral]], [[thm-natural-logarithm-laws]], [[thm-logarithm-slower-than-every-positive-power]]).

[F8] The complex exponential is entire with derivative itself, and $|\exp z|=\exp(\operatorname{Re}z)$; integrating its derivative on the segment from $0$ to $z$ gives $|\exp z-1|\le |z|e^{|z|}$ ([[def-complex-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-fundamental-theorem-for-complex-line-integrals]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F9] The Dirichlet series and its derivative converge locally uniformly and termwise differentiation is valid on $\operatorname{Re}s>1$ ([[thm-dirichlet-series-absolute-half-plane-holomorphy]]).

[F10] A locally uniform limit of holomorphic functions is holomorphic, and two holomorphic functions on a connected domain agreeing on a nonempty open subset agree throughout ([[thm-weierstrass-convergence-holomorphic-functions]], [[thm-identity-theorem-holomorphic-functions]]).

[F11] Finite Abel summation holds for complex sequences and weights ([[lem-abel-summation-for-complex-series]]).

[F12] For positive real $x$, $x^{-s}=\exp(-s\log x)$ and $x^{-\sigma}=\exp(-\sigma\log x)$ for real $\sigma$ ([[def-real-power]], [[thm-real-power-laws]]).

[F13] A series $\sum_{n\ge1}n^{-p}$ converges when $p>1$ ([[thm-p-series-real-exponents]]).

[F14] For real $\sigma$, $(x^{-\sigma})'=-\sigma x^{-\sigma-1}$ on $(0,\infty)$; the product rule gives $(\log x\,x^{-\sigma})'=x^{-\sigma-1}(1-\sigma\log x)$ ([[thm-real-power-continuity-and-derivatives]], [[thm-algebra-of-derivatives]], [[thm-logarithm-derivative-and-integral]]).

[F15] Newton–Leibniz applies to a continuous function on a closed interval whose interior derivative is integrable; the integral preserves pointwise order ([[thm-newton-leibniz-with-interior-derivative]], [[thm-monotonicity-of-the-integral]]).

## Proof

**Given:** The character and real number $\sigma$ in the statement.

1.1 Put $A(n)=\sum_{k\le n}\chi(k)$ and $B=C_0\sqrt q\log q$, so $|A(n)|\le B$ by [F1]. Fix a compact set $K\subset\{s:\operatorname{Re}s>0\}$, and put $\sigma_0=\min_{s\in K}\operatorname{Re}s>0$ and $R=\max_{s\in K}|s|$. For $g_s(n)=\log n\,n^{-s}$, set $h_n=\log(n+1)-\log n$. By [F7], $0\le h_n\le1/n$; [F8] and [F12] give $$|g_s(n+1)-g_s(n)|\le n^{-1-\sigma_0}(1+R e^R\log n)\qquad(s\in K).$$ This majorant is summable: [F7] gives $\log n\le C_{\sigma_0}n^{\sigma_0/2}$ for large $n$, and [F13] gives convergence of the resulting $p$-series. Abel summation [F11] therefore bounds every tail uniformly on $K$ by $$B\log(N+1)N^{-\sigma_0}+B\sum_{n>N}n^{-1-\sigma_0}(1+R e^R\log n),$$ which tends to zero. Thus the derivative partial sums converge locally uniformly on $\operatorname{Re}s>0$; by [F10] their limit is holomorphic there. On $\operatorname{Re}s>1$ this limit is $L'(s,\chi)$ by [F3] and [F9], so the identity theorem [F10] identifies it with the derivative of the entire continuation in [F2] throughout the connected half-plane. [F1, F2, F3, F7, F8, F9, F10, F11, F12, F13, given, algebra]

1.2 For $n\le q$, the interval condition gives $n^{1-\sigma}\le q^{1-\sigma}\le e$ by [F6] and [F12], while [F5] gives $|\chi(n)|\le1$. Hence $$\sum_{n\le q}\frac{|\chi(n)|\log n}{n^\sigma}\le e\log q\sum_{n\le q}\frac1n\le e\log q(1+\log q)\le C_1(\log q)^2,$$ using the integral comparison $\sum_{n=2}^q1/n\le\int_1^q dx/x=\log q$ from [F7] and $\log q\ge\log3>0$. [F5, F6, F7, F12, given, algebra]

2.1 For the tail apply [F11] to $a_n=\chi(n)$ and $g(n)=\log n\,n^{-\sigma}$. The endpoint at infinity tends to zero by [F1]. By [F14] and [F15], $|g(n+1)-g(n)|\le\int_n^{n+1}x^{-\sigma-1}(1+\sigma\log x)\,dx$ for $n\ge q$. Hence Abel summation bounds the tail by $$B\log(q+1)(q+1)^{-\sigma}+B\int_q^\infty x^{-\sigma-1}(1+\sigma\log x)\,dx.$$ Since $\log(q+1)\le2\log q$, $\sigma\ge1/2$, and $\sigma\le1$, the integral equals $q^{-\sigma}(\log q+2/\sigma)$ and is at most $q^{-\sigma}(2\log q+4)$. Thus the tail is at most $Bq^{-\sigma}(4\log q+4)$. The inequalities $q^{1-\sigma}\le e$ and $\log q\ge\log3>0$ imply this is at most $C_2(\log q)^2$ for an absolute $C_2$. [F1, F11, F14, F15, step 1.1, algebra]

3.1 Combining the finite part in step 1.2 and the tail in step 2.1 in the differentiated series from step 1.1 proves $|L'(\sigma,\chi)|\le(C_1+C_2)(\log q)^2$, with an absolute constant. [step 1.1, step 1.2, step 2.1, algebra] ∎

