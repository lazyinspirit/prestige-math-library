---
id: ex-flat-exponential-function
kind: example
title: "The one-sided flat function is $C^\\infty$ with identically zero Taylor series"
status: published
origin: session
deps: [thm-exponential-beats-every-polynomial, thm-derivative-of-exponential, thm-chain-rule, thm-algebra-of-derivatives, cor-power-series-sums-are-smooth-with-coefficient-formula, cor-exponential-reciprocal-and-positivity, def-factorial-and-falling-factorial]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Analytic Functions"
      url: "https://www.jirka.org/ra/html/sec_analfuncs.html"
pipeline_run: null
---

## Example

Define
$$\phi(x)=\begin{cases}\exp(-1/x),&x>0,\\0,&x\le0.\end{cases}$$
Then $\phi\in C^\infty(\mathbb R)$ and $\phi^{(m)}(0)=0$ for every $m\in\mathbb N$, although $\phi(x)>0$ for $x>0$.

## Facts & Assumptions

**Given:** The displayed function.

[L1] Exponential dominates every polynomial ([[thm-exponential-beats-every-polynomial]]).

[L2] Exponential is smooth, with positive values ([[thm-derivative-of-exponential]], [[cor-power-series-sums-are-smooth-with-coefficient-formula]], [[cor-exponential-reciprocal-and-positivity]]).

[L3] Products and composites are differentiable by [[thm-algebra-of-derivatives]] and [[thm-chain-rule]].

## Verification

**Proof technique:** induction.

1.1 On $x>0$, repeated product and chain rules give $\phi^{(m)}(x)=P_m(1/x)\exp(-1/x)$ for a polynomial $P_m$; on $x<0$, every derivative is $0$.   [base, L2, L3, given]

2.1 If the formula holds at order $m$, differentiating produces another polynomial $P_{m+1}(1/x)$ times $\exp(-1/x)$. By [L1], this tends to $0$ as $x\to0^+$.  [ih, step 1.1, L1, L2, L3]

3.1 The difference quotient for the $m$-th derivative at $0$ is again a polynomial in $1/x$ times $\exp(-1/x)$, so it tends to $0$. Induction therefore extends every derivative continuously across $0$, with value $0$.   [step 2.1, L1, given, discharge-induction] ∎
