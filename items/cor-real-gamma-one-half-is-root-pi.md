---
id: cor-real-gamma-one-half-is-root-pi
kind: corollary
title: '$\Gamma(1/2)=\sqrt\pi$ from the Gaussian integral'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-gamma-function-by-the-euler-integral, thm-substitution-for-improper-integrals, thm-gaussian-integral, thm-linearity-of-improper-integrals]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "University of Toronto MAT237Y1, The Gamma Function and the Beta Function, §1.4"
      url: "https://www.math.toronto.edu/campesat/ens/1920/gamma-beta.pdf"
pipeline_run: null
---

## Statement

$\Gamma(1/2)=\sqrt\pi$.

## Facts & Assumptions

**Given:** Euler's Gamma integral at $s=1/2$.

[F1] If $\phi:I\to J$ is a monotone differentiable surjection with locally integrable derivative, the proper change-of-variable hypotheses hold on every compact truncation, and $f$ is locally integrable on $J$, then the improper integrals of $f$ and $f(\phi)|\phi'|$ converge simultaneously and are equal when convergent ([[thm-substitution-for-improper-integrals]]).

[F2] The Gaussian integral is $\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi$ ([[thm-gaussian-integral]]).

## Proof

**Proof technique:** direct.

1.1 In $\Gamma(1/2)=\int_0^\infty t^{-1/2}e^{-t}\,dt$, use $t=u^2$ on proper truncations. By [F1], the improper limit is $2\int_0^\infty e^{-u^2}\,du$. [F1, algebra]

2.1 The integrand is even, so splitting [F2] at zero shows $2\int_0^\infty e^{-u^2}\,du=\sqrt\pi$. [step 1.1, F2, algebra]

3.1 Combining the two identities gives $\Gamma(1/2)=\sqrt\pi$, with the positive square root selected because Gamma is positive. [step 2.1] ∎

## Remarks

The independent Wallis-product route is [[thm-real-gamma-one-half-wallis-proof]].
