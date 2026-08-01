---
id: thm-picard-iterates-for-exponential
kind: theorem
title: "Picard iteration from $1$ produces the exponential partial sums"
status: published
origin: session
deps: [def-oriented-integral, thm-linearity-of-the-integral, thm-ftc-first-part, thm-ftc-second-part, lem-derivative-of-a-power, thm-uniform-limit-interchanges-riemann-integration, thm-uniform-limit-continuous-real-functions, thm-continuous-implies-integrable, thm-algebra-of-continuous-functions, thm-power-series-uniform-on-compact-subintervals, lem-exponential-series-has-infinite-radius, def-real-exponential-function-and-e, def-factorial-and-falling-factorial, def-finite-sum, lem-finite-sum-laws, thm-induction-principle]
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

## Statement

Define $u_0(x)=1$ and $u_{r+1}(x)=1+\int_0^x u_r(t)\,dt$. Then
$$u_r(x)=\sum_{k=0}^{r}\frac{x^k}{\iota(k!)}$$
and $u_r\to\exp$ uniformly on every bounded interval.
Moreover,
$$\exp(x)=1+\int_0^x\exp(t)\,dt,$$
and differentiating this integral equation recovers $\exp' = \exp$ and $\exp(0)=1$.

## Facts & Assumptions

**Given:** The displayed recursion with the oriented integral of [[def-oriented-integral]].

[L1] For $k\in\mathbb N$, the derivative of $t^{k+1}/\iota(k+1)$ is $t^k$ ([[lem-derivative-of-a-power]]), so the second fundamental theorem evaluates its oriented integral ([[thm-ftc-second-part]], [[def-oriented-integral]]); the integral is linear over finite sums ([[thm-linearity-of-the-integral]]), and the factorial recurrence is [[def-factorial-and-falling-factorial]].

[L2] The exponential series has infinite radius ([[lem-exponential-series-has-infinite-radius]], [[def-real-exponential-function-and-e]]), and a power series converges uniformly on compact subintervals of its interval of convergence ([[thm-power-series-uniform-on-compact-subintervals]]).

[L3] Polynomial functions are continuous ([[thm-algebra-of-continuous-functions]]); uniform limits of continuous real functions are continuous ([[thm-uniform-limit-continuous-real-functions]]); continuous functions on compact intervals are integrable ([[thm-continuous-implies-integrable]]); uniform limits interchange with Riemann integration ([[thm-uniform-limit-interchanges-riemann-integration]]); and the first fundamental theorem differentiates an integral of a continuous function ([[thm-ftc-first-part]]).

## Proof

**Proof technique:** induction.

1.1 At $r=0$, $u_0=1$, the stated finite sum.  [base, given]

1.2 If the formula holds at $r$, integrate its finite sum termwise from $0$ to $x$. By [L1], the integral of $t^k/\iota(k!)$ is $x^{k+1}/\iota((k+1)!)$, giving the formula at $r+1$.   [ih, L1, given]

2.1 Hence the iterates are precisely the partial sums of the exponential series. Its infinite radius and [L2] give uniform convergence on every bounded interval.   [step 1.1, step 1.2, L2, given]

3.1 Fix $x$ and work on the compact interval with endpoints $0$ and $x$. The polynomial iterates are continuous and integrable there, and step 2.1 gives uniform convergence to $\exp$. Thus [L3] lets the integrals in $u_{r+1}(x)=1+\int_0^x u_r(t)\,dt$ pass to the limit, giving $\exp(x)=1+\int_0^x\exp(t)\,dt$, with the orientation supplied by [[def-oriented-integral]] when $x<0$.  [step 2.1, L3, given]

4.1 Step 2.1 and [L3] make $\exp$ continuous. The first fundamental theorem applied to step 3.1 gives $\exp'(x)=\exp(x)$, and setting $x=0$ gives $\exp(0)=1$.  [step 2.1, step 3.1, L3, discharge-induction] ∎
