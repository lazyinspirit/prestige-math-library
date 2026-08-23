---
id: thm-real-gamma-is-log-convex
kind: theorem
title: 'The real Gamma function is strictly log-convex'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-log-convex-positive-function, def-real-gamma-function-by-the-euler-integral, thm-real-gamma-euler-integral-convergence, thm-exponential-two-point-convexity, thm-real-power-laws, thm-linearity-of-improper-integrals, thm-monotonicity-of-the-integral]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §1.5"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 7 §4"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

The real Gamma function is strictly log-convex on $(0,\infty)$.

## Facts & Assumptions

**Given:** Distinct $x,y>0$ and a weight $0<\lambda<1$.

[F1] For $0<\lambda<1$, exponential convexity is strict unless its two arguments are equal ([[thm-exponential-two-point-convexity]]).

[F2] A positive function is log-convex when its logarithm is convex ([[def-log-convex-positive-function]]).

## Proof

**Proof technique:** direct.

1.1 Fix $c>0$ and write $c^s\Gamma(s)=\int_0^\infty t^{-1}e^{-t}\exp(s\log(ct))\,dt$. By [F1], the integrand at $(1-\lambda)x+\lambda y$ is at most the corresponding convex combination, with strict inequality except at the single point $t=1/c$; integration makes $s\mapsto c^s\Gamma(s)$ strictly convex. [given, F1]

1.2 Choose $c=(\Gamma(x)/\Gamma(y))^{1/(y-x)}>0$. Then $c^x\Gamma(x)=c^y\Gamma(y)$. [construct, algebra]

2.1 Apply step 1.1 at $x,y$ with the $c$ from step 1.2. After cancelling $c^{(1-\lambda)x+\lambda y}$, one gets $\Gamma((1-\lambda)x+\lambda y)<\Gamma(x)^{1-\lambda}\Gamma(y)^\lambda$, which is strict log-convexity by [F2]. [step 1.1, step 1.2, F2, algebra] ∎
