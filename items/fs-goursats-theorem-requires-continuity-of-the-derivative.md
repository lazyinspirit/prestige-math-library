---
id: fs-goursats-theorem-requires-continuity-of-the-derivative
kind: false-statement
title: "FALSE: Goursat's triangle conclusion requires a separate continuity hypothesis on $f'$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-goursat-triangle-theorem]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 2, Theorem 1.1"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Lars Ahlfors, Complex Analysis, third edition, Ch. 4, Section 1.4"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

**False claim:** To conclude that a holomorphic function has zero integral around the boundary of every filled triangle in its open domain, one must separately assume that its derivative is continuous.

## Facts & Assumptions

**Given:** The asserted need for a separate continuity hypothesis on the derivative.

[L1] Goursat's triangle theorem assumes only that $f$ is holomorphic on an open set containing the filled triangle and concludes that its boundary integral is zero; it explicitly makes no continuity assumption on $f'$ ([[thm-goursat-triangle-theorem]]).

## Refutation

**Proof technique:** direct.

1.1 Under the holomorphy and containment hypotheses, [L1] already gives the claimed zero boundary integral. [L1]

2.1 Since continuity of $f'$ is absent from the hypotheses of [L1], it is not a separately required assumption for that conclusion, and the claim is false. [step 1.1, L1] ∎
