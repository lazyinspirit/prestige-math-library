---
id: thm-nonnegative-improper-riemann-integral-agrees-with-the-lebesgue-integral-on-a-half-line
kind: theorem
title: "A nonnegative improper Riemann integral on a half-line agrees with the Lebesgue integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral, thm-monotone-convergence-for-the-integral, def-improper-integral-at-infinity]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Version 5.0, Exercise 9.4"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral: An Introduction to Real Analysis, Theorem (5.53)"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Statement

Assume the Axiom of Countable Choice. Let $a\in\mathbb R$ and let
$f:[a,\infty)\to[0,\infty)$ be Riemann integrable on every compact interval
$[a,R]$ with $R>a$. If the improper Riemann integral
$$\int_a^\infty f(x)\,dx$$
converges in the sense of [[def-improper-integral-at-infinity]], then $f$ is
Lebesgue integrable on $[a,\infty)$ and
$$\int_{[a,\infty)} f\,d\lambda_1=\int_a^\infty f(x)\,dx.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a real $a$, a nonnegative function $f:[a,\infty)\to[0,\infty)$ that is Riemann integrable on every $[a,R]$ with $R>a$, and a finite improper Riemann integral $L:=\int_a^\infty f(x)\,dx$.

[L1] On every compact interval, a bounded Riemann integrable function is Lebesgue integrable there with the same value. ([[thm-bounded-riemann-integrable-functions-are-lebesgue-measurable-and-have-the-same-integral]])

[L2] Monotone convergence holds for nonnegative measurable functions. ([[thm-monotone-convergence-for-the-integral]])

[L3] The improper integral over $[a,\infty)$ is the limit of the truncated Riemann integrals as the right endpoint tends to $+\infty$. ([[def-improper-integral-at-infinity]])

## Proof

**Proof technique:** direct.

1.1 For each natural number $n\ge1$, define $$f_n:=f\,\chi_{[a,a+n]}.$$ Then $0\le f_n\le f_{n+1}$ and $f_n(x)\uparrow f(x)$ for every $x\ge a$. By [L1] applied on $[a,a+n]$, $$\int_{[a,\infty)} f_n\,d\lambda_1 = \int_{[a,a+n]} f\,d\lambda_1 =\int_a^{a+n} f(x)\,dx.$$ [L1, construct]

2.1 Since $f_n\uparrow f$, [L2] gives $$\int_{[a,\infty)} f\,d\lambda_1 =\lim_{n\to\infty}\int_{[a,\infty)} f_n\,d\lambda_1 =\lim_{n\to\infty}\int_a^{a+n} f(x)\,dx.$$ Because $a+n\to+\infty$, [L3] identifies the last limit with the given improper integral $L$. Hence $$\int_{[a,\infty)} f\,d\lambda_1=L,$$ and in particular the Lebesgue integral is finite, so $f$ is integrable on the half-line. [step 1.1, L2, L3] ∎
