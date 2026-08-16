---
id: fs-absolute-value-passes-through-a-contour-integral
kind: false-statement
title: "FALSE: the modulus of a contour integral always equals the absolute line integral"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-contour-integral-of-a-constant-is-an-endpoint-increment, cor-absolute-integral-of-one-is-path-length, thm-fundamental-inequality-for-complex-line-integrals]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Lars Ahlfors, Complex Analysis, third edition, Ch. 4 §1.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

**False claim.** For every continuous $f$ and rectifiable contour $\gamma$,
$$\left|\int_\gamma f(z)\,dz\right|=\int_\gamma|f(z)|\,|dz|.$$

## Facts & Assumptions

**Given:** The constant function $1$ on a positively oriented circle $\gamma$ of radius $r>0$.

[L1] A constant contour integral is the constant times the endpoint displacement ([[cor-contour-integral-of-a-constant-is-an-endpoint-increment]]).

[L2] The absolute integral of $1$ is the contour length ([[cor-absolute-integral-of-one-is-path-length]]).

[L3] The correct general relation is the fundamental inequality $|\int f\,dz|\le\int|f|\,|dz|$ ([[thm-fundamental-inequality-for-complex-line-integrals]]).

## Refutation

**Proof technique:** direct.

1.1 Since the circle is closed, [L1] gives $\int_\gamma1\,dz=0$. [L1]

1.2 By [L2], its absolute integral is its positive length $2\pi r$. [L2, algebra]

2.1 Thus equality fails: $0<2\pi r$. The values still satisfy the inequality in [L3]. [step 1.1, step 1.2, L3] ∎
