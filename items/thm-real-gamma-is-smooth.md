---
id: thm-real-gamma-is-smooth
kind: theorem
title: 'The real Gamma function is smooth and its derivatives are logarithmic moments'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-gamma-function-by-the-euler-integral, thm-real-gamma-euler-integral-convergence, thm-differentiation-under-dominated-improper-multiple-integrals, thm-substitution-for-improper-integrals, thm-exponential-beats-every-polynomial, thm-comparison-test-for-improper-integrals, thm-logarithm-derivative-and-integral, thm-real-power-continuity-and-derivatives, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §1.3(a)"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(ii)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

The real Gamma function is smooth on $(0,\infty)$. For every natural $k$ and every $s>0$, $\Gamma^{(k)}(s)=\int_0^\infty(\log t)^kt^{s-1}e^{-t}\,dt$.

## Facts & Assumptions

**Given:** A compact parameter interval $[a,b]\subset(0,\infty)$ and a natural derivative order $k$.

[F1] If an integrand and its parameter derivative are continuous, one slice is absolutely improperly integrable, and on each compact parameter interval the derivative has a nonnegative improperly integrable uniform bound, then the integral is continuously differentiable and its derivative is the integral of the parameter derivative ([[thm-differentiation-under-dominated-improper-multiple-integrals]]).

[F2] For every natural $m$ and real $a>0$, $x^m/\exp(ax)\to0$ as $x\to+\infty$ ([[thm-exponential-beats-every-polynomial]]).

[F3] If a property holds at $0$ and passes from $n$ to $n+1$, then it holds for every natural $n$ ([[thm-induction-principle]]).

[F4] The Euler integral converges for every positive real parameter ([[thm-real-gamma-euler-integral-convergence]]).

## Proof

**Proof technique:** direct.

1.1 On $(0,1]$, put $u=-\log t$. Uniformly for $s\in[a,b]$, the absolute $k$th parameter derivative becomes $u^ke^{-su}\le u^ke^{-au}$ after substitution. By [F2] this is eventually bounded by $e^{-au/2}$ and is integrable. [given, F2, construct]

1.2 On $[1,\infty)$, $s\le b$ and $\log t\le t$ allow $|(\log t)^kt^{s-1}e^{-t}|$ to be bounded by $t^me^{-t}$ for one natural $m$ depending only on $b,k$. By [F2] this has an integrable exponential majorant. [given, F2, construct]

2.1 The case $k=0$ is the defining integral, convergent by [F4] and absolutely convergent because its integrand is nonnegative. If the displayed formula holds at order $k$, its integrand and parameter derivative are continuous; steps 1.1 and 1.2, applied at orders $k$ and $k+1$, give one absolutely integrable slice and an integrable uniform derivative bound. Thus [F1] differentiates once more. By [F3], the formula holds for every natural $k$. [step 1.1, step 1.2, F1, F3, F4]

3.1 Every $s>0$ lies in a compact interval $[a,b]\subset(0,\infty)$, so step 2.1 proves the formulas and smoothness throughout the positive axis. [step 2.1] ∎
