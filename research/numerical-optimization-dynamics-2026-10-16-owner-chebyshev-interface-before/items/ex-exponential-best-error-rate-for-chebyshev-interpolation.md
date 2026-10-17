---
id: ex-exponential-best-error-rate-for-chebyshev-interpolation
kind: example
title: "An exponential best-error rate transferred to Chebyshev interpolation"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants
  - thm-chebyshev-interpolation-near-best-error-bound
  - thm-chebyshev-interpolation-lebesgue-constant-log-bound
  - def-real-exponential-function-and-e
  - lem-exponential-series-has-infinite-radius
  - def-factorial-and-falling-factorial
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
  - lem-geometric-sequence-null
  - def-canonical-natural
  - lem-of-naturals-positive
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Lloyd N. Trefethen, Approximation Theory and Approximation Practice, Ch. 2"
      url: "https://people.maths.ox.ac.uk/trefethen/ATAP/first6.pdf"
      locator: "Exercise 2.5 and Ch. 6; the explicit factorial rate is derived here"
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, Problems and conditioning"
      url: "https://fncbook.com/conditioning/"
      locator: "Complete §1.2 article; the explicit rate is derived here"
verification:
  precheck: pass
---

## Example

Let $f(x)=\exp(x)$ on $[-1,1]$. For every $n\geq1$,
$$E_n(f)\leq\frac{e}{(n+1)!}, \qquad \|f-I_n^\sigma f\|_\infty \leq \left(1+C\log(n+1)\right)\frac{e}{(n+1)!}, \quad \sigma\in\{R,L\},$$
where $C=4+(\pi+4)/\log2$. In particular, both Chebyshev interpolants
converge uniformly for this function with the displayed rate.

## Facts & Assumptions

**Given:** $n\geq1$, the function $f(x)=\exp(x)$, and either Chebyshev node family.

[F1] [[def-best-uniform-polynomial-approximation-error-and-chebyshev-interpolants]]: $E_n(f)=\inf_{p\in\mathcal P_n}\|f-p\|_\infty$, and $I_n^\sigma$ is its specified interpolation operator.

[F2] [[thm-chebyshev-interpolation-near-best-error-bound]]: $\|f-I_n^\sigma f\|_\infty\leq(1+\Lambda_n^\sigma)E_n(f)$.

[F3] [[thm-chebyshev-interpolation-lebesgue-constant-log-bound]]: $\Lambda_n^\sigma\leq C\log(n+1)$ for $n\geq1$.

[F4] [[def-real-exponential-function-and-e]]: $\exp(x)=\sum_{k=0}^\infty x^k/k!$ and $e=\exp(1)=\sum_{k=0}^\infty1/k!$.

[F5] [[lem-exponential-series-has-infinite-radius]]: the exponential series converges absolutely for every real argument.

[F6] [[def-factorial-and-falling-factorial]]: $0!=1$ and $(m+1)!=(m+1)m!$.

[F7] [[def-natural-logarithm]] and [[thm-logarithm-derivative-and-integral]]: $\log$ is the natural logarithm and $\log x=\int_1^xdt/t$ for $x>0$.

[F8] [[lem-geometric-sequence-null]]: if $0<q<1$, then $q^n\to0$.

[F9] [[def-canonical-natural]] and [[lem-of-naturals-positive]]: natural indices and factorials in real inequalities are read through their canonical real images, and every positive natural has positive real image.

## Verification

1.1 Put $p_n(x)=\sum_{k=0}^n x^k/k!$, which belongs to $\mathcal P_n$. For $|x|\leq1$, [F4]–[F6] give $|\exp(x)-p_n(x)|\leq\sum_{m=0}^\infty1/(n+1+m)!\leq\frac1{(n+1)!}\sum_{m=0}^\infty1/m!=e/(n+1)!$. The middle inequality follows from $(n+2)\cdots(n+1+m)\geq1\cdots m=m!$, including the empty product for $m=0$. Taking the infimum over $\mathcal P_n$ proves $E_n(\exp)\leq e/(n+1)!$. [given, F1, F4, F5, F6, algebra]

2.1 Apply the near-best estimate [F2] and then the norm bound [F3] to step 1.1. This gives $\|\exp-I_n^\sigma\exp\|_\infty\leq(1+\Lambda_n^\sigma)E_n(\exp)\leq(1+C\log(n+1))e/(n+1)!$ for each $\sigma\in\{R,L\}$. [given, F2, F3, step 1.1, algebra]

3.1 By [F7], $\log(n+1)=\int_1^{n+1}dt/t\leq n$ and $\log2=\int_1^2dt/t>0$, so $C>0$. For $n\geq1$, $(n+1)!=2\cdot3\cdots(n+1)\geq2^n$ because this product has $n$ factors, each at least $2$, so the bound in step 2.1 is at most $e(1+Cn)/2^n$. For $n\geq2$, the ratio of successive terms of $n2^{-n}$ is $(n+1)/(2n)\leq3/4$, hence induction gives $n2^{-n}\leq2(3/4)^{n-2}$. The geometric-sequence limit [F8] now shows both $2^{-n}$ and $n2^{-n}$ tend to zero, so the interpolation errors tend to zero. [given, F7, F8, F9, step 2.1, algebra] ∎
