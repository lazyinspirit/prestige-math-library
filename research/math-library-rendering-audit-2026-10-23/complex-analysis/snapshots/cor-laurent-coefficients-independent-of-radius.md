---
id: cor-laurent-coefficients-independent-of-radius
kind: corollary
title: "Laurent coefficients are independent of the intermediate radius"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-annulus, thm-laurent-coefficient-formula-and-uniqueness]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §1.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

Let $f$ be holomorphic on the annulus $A(a;r,R)$ ([[def-complex-annulus]]) and
let $(c_n)_{n\in\mathbb Z}$ be its Laurent coefficients. If $r<\rho_1,\rho_2<R$,
then for every integer $n$,

$$\frac{1}{2\pi i}\int_{|\zeta-a|=\rho_1}\frac{f(\zeta)}{(\zeta-a)^{n+1}}\,d\zeta=c_n=\frac{1}{2\pi i}\int_{|\zeta-a|=\rho_2}\frac{f(\zeta)}{(\zeta-a)^{n+1}}\,d\zeta.$$

## Facts & Assumptions

**Given:** A holomorphic function on $A(a;r,R)$, its Laurent coefficients $(c_n)$, and radii $\rho_1,\rho_2$ with $r<\rho_1,\rho_2<R$.

[L1] Every Laurent coefficient is given by the contour integral on every intermediate circle inside the annulus ([[thm-laurent-coefficient-formula-and-uniqueness]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the integral over $|\zeta-a|=\rho_1$ equals the coefficient $c_n$, and so does the integral over $|\zeta-a|=\rho_2$. [L1]

2.1 Therefore the two integrals are equal to each other. [step 1.1] ∎
