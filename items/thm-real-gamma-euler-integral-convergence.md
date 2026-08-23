---
id: thm-real-gamma-euler-integral-convergence
kind: theorem
title: 'Euler''s Gamma integral converges exactly for positive real parameters'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-gamma-function-by-the-euler-integral, thm-real-power-continuity-and-derivatives, thm-exponential-beats-every-polynomial, thm-comparison-test-for-improper-integrals, thm-ftc-second-part, thm-exponential-is-strictly-increasing, thm-of-archimedean, thm-logarithm-derivative-and-integral, thm-natural-logarithm-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(i)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §1.1"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
pipeline_run: null
---

## Statement

Let $s$ be real. The Euler integral $\int_0^\infty t^{s-1}e^{-t}\,dt$ converges if and only if $s>0$.

## Facts & Assumptions

**Given:** A real parameter $s$, with the integral split at $1$.

[F1] For every natural $m$ and real $a>0$, $x^m/\exp(ax)\to0$ as $x\to+\infty$ ([[thm-exponential-beats-every-polynomial]]).

[F2] If $0\le u\le v$ eventually at a singular end and the improper integral of $v$ converges there, then the integral of $u$ converges; the same assertion holds separately at infinity and at either finite singular endpoint ([[thm-comparison-test-for-improper-integrals]]).

[F3] For $x>0$, $\log'(x)=1/x$ and $\log x=\int_1^xdt/t$ ([[thm-logarithm-derivative-and-integral]]).

[F4] The natural logarithm is strictly increasing and maps $(0,\infty)$ onto $\mathbb R$ ([[thm-natural-logarithm-laws]]).

[F5] For real $\alpha$, $x^\alpha$ is differentiable on $(0,\infty)$ with derivative $\alpha x^{\alpha-1}$ ([[thm-real-power-continuity-and-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $s>0$. On $(0,1]$, $e^{-1}\le e^{-t}\le1$, and [F5] with the fundamental theorem gives $\int_0^1t^{s-1}\,dt=1/s<\infty$. Thus [F2] gives convergence at zero. [given, F2, F5, algebra]

1.2 If $s\le0$, then $t^{s-1}\ge t^{-1}$ on $(0,1]$, while $e^{-t}\ge e^{-1}$. At $s=0$ this is exactly the logarithmic threshold, and [F3] and [F4] show $\int_0^1dt/t$ diverges; the same lower comparison proves divergence for $s<0$. [given, F2, F3, F4, cases]

1.3 For arbitrary real $s$, choose a natural $m\ge\max\{s-1,0\}$. For $t\ge1$, $t^{s-1}e^{-t}\le t^me^{-t}$, and [F1] with $a=1/2$ makes $t^me^{-t}\le e^{-t/2}$ eventually. Since the latter has a convergent improper integral, [F2] gives convergence at infinity. [F1, F2, choose]

2.1 Steps 1.1 and 1.3 prove convergence for $s>0$, while step 1.2 proves divergence for every $s\le0$. Hence the two improper ends converge simultaneously exactly on the positive real axis. [step 1.1, step 1.2, step 1.3, cases-exhaustive] ∎
