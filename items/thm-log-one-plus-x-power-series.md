---
id: thm-log-one-plus-x-power-series
kind: theorem
title: "The power series for log(1+x) on (-1,1], including the Abel endpoint"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-logarithm-derivative-and-integral, thm-geometric-series, cor-termwise-integration-of-a-real-power-series, thm-alternating-series-test, thm-abel-limit-theorem, thm-p-series-rational]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
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

For $-1<x\le1$,
$$\log(1+x)=\sum_{n=1}^{\infty}\frac{(-1)^{n+1}x^n}{n}.$$
The series converges at $x=1$ to $\log2$ and diverges at $x=-1$.

## Facts & Assumptions

**Given:** A real $x$ with $-1<x<1$.

[L1] $\log'(u)=1/u$ on $(0,\infty)$, so $(\log(1+x))'=1/(1+x)$ and $\log1=0$ ([[thm-logarithm-derivative-and-integral]]).

[L2] For $|x|<1$, $\sum_{n\ge0}(-x)^n=1/(1+x)$ ([[thm-geometric-series]]).

[L3] A real power series may be integrated term by term inside its radius of convergence ([[cor-termwise-integration-of-a-real-power-series]]).

[L4] The alternating harmonic series converges, Abel's limit theorem identifies the limit at $r\uparrow1$ of a convergent power series with its sum, and the harmonic series diverges ([[thm-alternating-series-test]], [[thm-abel-limit-theorem]], [[thm-p-series-rational]]).



## Proof

**Proof technique:** direct.

1.1 Integrating the series of [L2] from $0$ to $x$ gives $\sum_{n\ge1}(-1)^{n+1}x^n/n$. [L2, L3]

2.1 By [L1], the integral of $1/(1+t)$ from $0$ to $x$ is $\log(1+x)$, so the displayed series formula holds for $-1<x<1$. [L1, step 1.1]

3.1 At $x=1$ the series is alternating harmonic and converges by [L4]; Abel's theorem and step 2.1 identify its sum with $\log2$. [step 2.1, L4]

4.1 At $x=-1$ every term is $-1/n$, so the series is the negative harmonic series and diverges. [L4, algebra] ∎
