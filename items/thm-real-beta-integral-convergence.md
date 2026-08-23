---
id: thm-real-beta-integral-convergence
kind: theorem
title: 'Euler''s Beta integral converges exactly for two positive parameters'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-beta-integral, thm-real-power-continuity-and-derivatives, thm-comparison-test-for-improper-integrals, thm-ftc-second-part, thm-monotone-change-of-variable-for-riemann-integrals, thm-logarithm-derivative-and-integral, thm-natural-logarithm-laws]
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
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §2.1"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
pipeline_run: null
---

## Statement

Let $p,q$ be real. The Beta integral converges if and only if $p>0$ and $q>0$.

Here the Beta integral means $\int_0^1t^{p-1}(1-t)^{q-1}\,dt$.

## Facts & Assumptions

**Given:** Real parameters $p,q$, with the integral split at $1/2$.

[F1] If $0\le u\le v$ eventually at a finite singular endpoint and the improper integral of $v$ converges there, then the integral of $u$ converges ([[thm-comparison-test-for-improper-integrals]]).

[F2] For $x>0$, $\log'(x)=1/x$ and $\log x=\int_1^xdt/t$ ([[thm-logarithm-derivative-and-integral]]).

[F3] The natural logarithm is strictly increasing and maps $(0,\infty)$ onto $\mathbb R$ ([[thm-natural-logarithm-laws]]).

[F4] For real $\alpha$, $x^\alpha$ is differentiable on $(0,\infty)$ with derivative $\alpha x^{\alpha-1}$ ([[thm-real-power-continuity-and-derivatives]]).

## Proof

**Proof technique:** direct.

1.1 On $(0,1/2]$, the continuous positive factor $(1-t)^{q-1}$ is bounded above and below by positive constants. Thus [F1] reduces convergence at zero to that of $\int_0^{1/2}t^{p-1}\,dt$, whose primitive from [F4] converges exactly for $p>0$; at $p=0$, [F2] and [F3] give logarithmic divergence, and for $p<0$ the integrand dominates the same threshold. [given, F1, F2, F3, F4, algebra]

1.2 The substitution $u=1-t$ changes the end $t\uparrow1$ into $u\downarrow0$. There $t^{p-1}$ is bounded above and below by positive constants, so [F4] and the same comparison give convergence exactly for $q>0$, with logarithmic divergence at $q=0$. [given, F1, F2, F3, F4, algebra]

2.1 Both endpoint integrals converge exactly when $p>0$ and $q>0$. If either parameter is nonpositive, the corresponding endpoint diverges by step 1.1 or step 1.2. [step 1.1, step 1.2, algebra] ∎
