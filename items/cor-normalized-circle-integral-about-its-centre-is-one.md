---
id: cor-normalized-circle-integral-about-its-centre-is-one
kind: corollary
title: "The normalized integral around a positively oriented circle centred at a is 1"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-circle-integrals-of-integer-monomials, thm-complex-numbers-form-a-field, def-pi-via-first-positive-cosine-zero]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "L. Ahlfors, Complex Analysis, 3rd ed., Ch. 4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

For a positively oriented circle $\gamma(t)=a+r\exp(it)$ with $r>0$,
$$\frac1{2\pi i}\int_\gamma\frac{dz}{z-a}=1.$$

## Facts & Assumptions

**Given:** A positively oriented circle of positive radius centred at $a$.

[L1] The integer-monomial circle formula gives $\int_\gamma(z-a)^{-1}\,dz=2\pi i$ ([[thm-circle-integrals-of-integer-monomials]]).

[L2] The complex numbers form a field containing the embedded real field, every complex number has a unique form $a+bi$, and every nonzero element has an inverse ([[thm-complex-numbers-form-a-field]]).

[L3] The real number $\pi$ is positive ([[def-pi-via-first-positive-cosine-zero]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], $2\pi\ne0$ in the embedded real field; the unique complex-coordinate form in [L2] then gives $2\pi i\ne0$, so division is licensed. [L2, L3, algebra]

2.1 Substitute [L1] and divide to obtain $1$. The value is independent of the positive radius, and no winding-number or Cauchy theorem is used. [step 1.1, L1, algebra] ∎
