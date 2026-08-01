---
id: thm-p-series-real-exponents
kind: theorem
title: "The p-series for a real exponent p converges exactly when p is greater than one"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-integral-test-for-series, thm-real-power-continuity-and-derivatives, thm-real-power-laws, thm-natural-logarithm-laws, thm-logarithm-derivative-and-integral, thm-exponential-limits-and-range, lem-nth-term-test]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
pipeline_run: null
---

## Statement

For every real $p$,
$$\sum_{k\ge1}\frac1{k^p}\text{ converges}\quad\Longleftrightarrow\quad p>1.$$

## Facts & Assumptions

**Given:** A real exponent $p$.

[L1] The integral test applies to a nonnegative nonincreasing function on $[0,\infty)$ and compares convergence with boundedness of its proper-integral sequence ([[thm-integral-test-for-series]]).

[L2] Positive-base real powers are continuous and differentiable, with the stated power laws ([[thm-real-power-continuity-and-derivatives]], [[thm-real-power-laws]]).

[L3] $\int_1^xdt/t=\log x$, and $\log x\to+\infty$ as $x\to+\infty$ ([[thm-logarithm-derivative-and-integral]], [[thm-natural-logarithm-laws]], [[thm-exponential-limits-and-range]]).

[L4] A convergent series has terms tending to zero ([[lem-nth-term-test]]).

## Proof

**Proof technique:** direct.

1.1 If $p\le0$, then $1/k^p\ge1$ for $k\ge1$, so the terms do not tend to zero and the series diverges. [L2, L4]

1.2 Suppose $p>0$ and set $f(t)=(t+1)^{-p}$. By [L2] this is nonnegative and nonincreasing on $[0,\infty)$, and its sampled series is $\sum_{k\ge0}1/(k+1)^p$. [L1, L2]

2.1 If $p=1$, then $\int_0^Nf(t)\,dt=\log(N+1)$, which is unbounded by [L3]. [step 1.2, L3]

2.2 If $p\ne1$, the power derivative gives $\int_0^Nf(t)\,dt=((N+1)^{1-p}-1)/(1-p)$; this is bounded exactly when $p>1$, using the exponential limits in [L3]. [step 1.2, L2, L3]

3.1 The integral test gives convergence exactly for $p>1$ when $p>0$, and step 1.1 handles $p\le0$. [step 1.1, step 2.1, step 2.2, L1] ∎
