---
id: fs-the-riemann-surface-of-a-multivalued-function-is-always-a-subset-of-c-squared
kind: false-statement
title: "FALSE: the Riemann surface of a multivalued function is automatically a subset of C squared"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-riemann-surface-of-a-complete-analytic-function, ex-helicoid-model-of-the-logarithm-surface]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  references:
    - title: "Curtis T. McMullen, Riemann Surfaces, Theorem 4.3"
      url: "https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf"
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.3"
      url: "https://mccuan.math.gatech.edu/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Statement

**False claim.** The Riemann surface of a multivalued function is, by
definition and without further work, a subset of $\mathbb C^2$.

## Facts & Assumptions

**Given:** The abstract germ-space definition and the logarithm-surface model.

[L1] A Riemann surface of a complete analytic function is defined abstractly as a
germ space equipped with basis sets $N(f,U)$ and a projection to the base domain
([[def-riemann-surface-of-a-complete-analytic-function]]).

[L2] The logarithm surface admits a convenient helicoid model only after one
chooses an additional realization
([[ex-helicoid-model-of-the-logarithm-surface]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] shows that the definition itself produces an abstract space of germs, not an a priori subset of $\mathbb C^2$. [L1]

2.1 The geometric model in [L2] is an extra construction, not part of the definition. Therefore the claim that such a subset model is automatic is false. [L2, step 1.1] ∎
