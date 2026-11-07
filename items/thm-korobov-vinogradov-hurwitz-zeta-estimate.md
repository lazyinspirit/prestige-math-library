---
id: thm-korobov-vinogradov-hurwitz-zeta-estimate
kind: theorem
title: "Korobov–Vinogradov bound for the Hurwitz zeta function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
  - def-hurwitz-zeta-function
  - lem-hurwitz-zeta-summation-formula
  - lem-hurwitz-zeta-sawtooth-tail-bound
  - thm-vinogradov-higher-derivative-exponential-sum-bound
  - def-natural-logarithm
  - def-complex-exponential
  - lem-abel-summation-by-parts
  - lem-integer-part
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24, Theorem 24.15"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed pp. 66–68, complete proof of Theorem 24.15."
---

## Statement

There is an absolute constant $C>0$ such that for $0<\alpha\le1$, $s=\sigma+it$ with $\sigma\ge1/2$, and $\tau=|t|+4$,
$$\zeta(s,\alpha)-\frac1{s-1}-\alpha^{-s}\ll (\log\tau)^{2/3}\tau^{C\Theta^{3/2}},\qquad \Theta:=\max(0,1-\sigma).$$
At $s=1$, the pole is removed by the displayed subtraction and the left side means its analytic limiting value.

## Statement references

[Montgomery–Vaughan, Theorem 24.15 and complete proof](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** $0<\alpha\le1$, $s=\sigma+it$, and $\sigma\ge1/2$.

[F1] The integer-cutoff Euler summation formula gives the finite sum, endpoint terms, and periodic sawtooth remainder ([[lem-hurwitz-zeta-summation-formula]]).

[F2] If $|t|\ge4$, $x\ge|t|/2$, and $1/2\le\sigma\le1$, then the sawtooth remainder after multiplication by $s$ is $O(x^{-\sigma})$ ([[lem-hurwitz-zeta-sawtooth-tail-bound]]).

[F3] For $r\ge1$, $N<N'\le2N$, and $t>N^{1/9}$ with $N^{r-1}<t\le N^r$, the higher-derivative estimate gives $\sum_{N<n\le N'}(n+\alpha)^{it}\ll N^{1-C/r^2}$ ([[thm-vinogradov-higher-derivative-exponential-sum-bound]]).

[F4] Abel summation by parts converts a bound for unweighted partial sums into a bound with the monotone weight $(n+\alpha)^{-\sigma}$ ([[lem-abel-summation-by-parts]]).

[F5] The floor is the greatest integer at most its argument and the ceiling is the least integer at least its argument; $\lceil x\rceil=-\lfloor-x\rfloor$ ([[lem-integer-part]]).

## Proof

**Proof technique:** truncate by Euler summation and sum dyadic intervals using higher-derivative cancellation.

1.1 First suppose $|t|\le4$ and $1/2\le\sigma\le2$. Apply [F1] with $N=1$. The quotient $((1+\alpha)^{1-s}-1)/(s-1)$ has a removable value at $s=1$ and is bounded on this compact parameter range; the finite terms and the absolutely convergent tail integral are bounded uniformly. If $\sigma\ge2$, the series $\sum_{n\ge1}(n+\alpha)^{-s}$ is uniformly bounded and the pole term is bounded. Thus the assertion holds for $|t|\le4$ and for $\sigma\ge2$. [given, F1, algebra]

1.2 It remains to treat $|t|\ge4$ and $1/2\le\sigma<2$. Put $T=|t|$ and $N=\lfloor T\rfloor$ by [F5]. By [F1], $$\zeta(s,\alpha)-\frac1{s-1}-\alpha^{-s}=\sum_{1\le n\le N}(n+\alpha)^{-s}+O(T^{-\sigma})$$ when $\sigma\le1$, by [F2] and $|((N+\alpha)^{1-s}-1)/(s-1)|\ll T^{-\sigma}$. When $1<\sigma<2$, the quotient is $O(T^{-1})$, the endpoint is $O(T^{-\sigma})$, and the tail is $O(T^{1-\sigma})=O(1)$ by the absolute bound $|B_1|\le1/2$, which suffices below. [given, F1, F2, algebra]

2.1 For each dyadic block $M<n\le M'\le2M$ with $2\le M<N$, choose the integer $r=\lceil\log T/\log M\rceil$ using [F5]. Then $M^{r-1}<T\le M^r$ and $T>M^{1/9}$. The summand's oscillatory factor is $$g_n=(n+\alpha)^{-it}=\exp\!\bigl(-it\log(n+\alpha)\bigr)=e\!\left(-\frac{t\log(n+\alpha)}{2\pi}\right).$$ By [F3] with parameter $T=|t|$, every unweighted partial sum of $g_n$ on the block is $\ll M^{1-C/r^2}$: for $t<0$ this is the supplied positive-frequency sum, while for $t>0$ it is its complex conjugate. Abel summation [F4] with the decreasing weight $(n+\alpha)^{-\sigma}$ then gives $$\sum_{M<n\le M'}(n+\alpha)^{-s}\ll M^{1-\sigma-C/r^2}\le M^{\Theta}\exp\!\left(-c\frac{(\log M)^3}{(\log T)^2}\right),$$ where $\Theta=\max(0,1-\sigma)$ and $c>0$ is absolute: indeed [F5] gives $r\le2\log T/\log M$, so $M^{-C/r^2}\le\exp(-c(\log M)^3/(\log T)^2)$, and $M^{1-\sigma}\le M^\Theta$. The first block contributes $O(1)$. [step 1.2, F3, F4, F5, algebra]

3.1 Write $M=2^j$. The block bound is at most $$\exp\!\left(\Theta j\log2-c'\frac{j^3}{(\log T)^2}\right).$$ The cubic expression has maximum $O(\Theta^{3/2}\log T)$; after factoring this maximum, the remaining sum is bounded by $\sum_{j\ge0}\exp(-c''j^3/(\log T)^2)\ll(\log T)^{2/3}$, by comparison with its integral. Summing the dyadic blocks and using $\tau=T+4$ gives $$\sum_{n\le N}(n+\alpha)^{-s}\ll(\log\tau)^{2/3}\tau^{C\Theta^{3/2}}.$$ Together with the remainder estimates in step 1.2, this proves the theorem. [step 1.2, step 2.1, algebra] ∎

