---
id: thm-uniform-limit-interchanges-riemann-integration
kind: theorem
title: "A uniform limit of Riemann-integrable functions is Riemann integrable, and its integral is the limit of their integrals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, thm-riemann-criterion, lem-uniform-integral-error-bound, def-darboux-integral, def-darboux-sums, lem-finite-sum-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B, Real Analysis, Lectures 20–21"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a<b$ be reals. Suppose every $f_k:[a,b]\to\mathbb{R}$ is Riemann
integrable and $f_k\to f$ uniformly on $[a,b]$. Then $f$ is Riemann
integrable and

$$\int_a^b f_k\longrightarrow\int_a^b f.$$

## Facts & Assumptions

**Given:** Reals $a<b$, integrable functions $f_k:[a,b]\to\mathbb{R}$, and uniform convergence $f_k\to f$.

[A1] Uniform convergence means that for every real $\eta>0$ one index makes $|f_k(x)-f(x)|<\eta$ for every later $k$ and every $x\in[a,b]$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[L1] An integrable function on $[a,b]$ is bounded; conversely, a bounded function $h$ there is Riemann integrable exactly when, for every real $\varepsilon>0$, some partition $P$ satisfies $U(h,P)-L(h,P)<\varepsilon$ ([[def-darboux-integral]], [[thm-riemann-criterion]]).

[L2] Darboux upper and lower sums are finite sums of the subinterval suprema and infima times the subinterval lengths; finite sums preserve inequalities and split and telescope in the usual way ([[def-darboux-sums]], [[lem-finite-sum-laws]]).

[L3] If two integrable functions differ by at most $\eta$ uniformly, then their integrals differ by at most $\eta(b-a)$ ([[lem-uniform-integral-error-bound]]).

## Proof

**Proof technique:** direct.

1.1 Let $\varepsilon>0$ be real, put $\eta:=\varepsilon/(4(b-a))>0$, and choose an index $j$ such that $|f_j(x)-f(x)|<\eta$ for every $x\in[a,b]$. [A1, choose]

1.2 By integrability of $f_j$ and [L1], choose a partition $P$ with $U(f_j,P)-L(f_j,P)<\varepsilon/2$. [L1, choose]

2.1 The integrable function $f_j$ is bounded, say $|f_j(x)|\le M$ on $[a,b]$; then $|f(x)|\le M+\eta$, so $f$ is bounded. [step 1.1, L1, algebra]

3.1 On each subinterval of $P$, step 1.1 gives $\sup f\le\sup f_j+\eta$ and $\inf f\ge\inf f_j-\eta$; these suprema and infima exist by step 2.1. Multiplying by the nonnegative subinterval lengths and summing gives $U(f,P)\le U(f_j,P)+\eta(b-a)$ and $L(f,P)\ge L(f_j,P)-\eta(b-a)$. [step 1.1, step 1.2, step 2.1, L2, algebra]

4.1 Therefore $U(f,P)-L(f,P)\le U(f_j,P)-L(f_j,P)+2\eta(b-a)<\varepsilon$, so [L1] makes $f$ integrable. [step 3.1, L1, algebra]

5.1 Now let $\varepsilon>0$ be real and choose $N$ such that $|f_k(x)-f(x)|<\varepsilon/(b-a+1)$ for every $k\ge N$ and every $x\in[a,b]$. [step 4.1, A1, choose]

6.1 For $k\ge N$, both functions are integrable, so [L3] gives $\left|\int_a^b f_k-\int_a^b f\right|\le \varepsilon(b-a)/(b-a+1)<\varepsilon$. [step 4.1, step 5.1, L3, algebra]

7.1 Step 6.1 proves $\int_a^b f_k\to\int_a^b f$, while step 4.1 proves integrability of $f$. [step 4.1, step 6.1] ∎
