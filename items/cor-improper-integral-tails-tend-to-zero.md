---
id: cor-improper-integral-tails-tend-to-zero
kind: corollary
title: "Tails of a convergent improper integral tend to zero"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-improper-integral-at-infinity,
       def-improper-integral-at-a-finite-endpoint,
       lem-improper-integral-splitting-and-tail-invariance,
       thm-cauchy-criterion-for-improper-integrals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 8.3"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

If $\int_a^\infty f$ converges, then
$$\lim_{R\to\infty}\int_R^\infty f=0.$$
Equivalently, for every $\varepsilon>0$ all sufficiently remote proper tails $\int_u^v f$ have absolute value below $\varepsilon$. The corresponding tails tend to zero at $-\infty$ and at either finite singular endpoint.

## Facts & Assumptions

**Given:** A convergent one-ended improper integral of $f$.

[L1] A convergent integral may be split at every finite truncation ([[lem-improper-integral-splitting-and-tail-invariance]]).

[L2] Its proper remote tails satisfy the Cauchy criterion ([[thm-cauchy-criterion-for-improper-integrals]]).

## Proof

**Proof technique:** direct.

1.1 Write $I=\int_a^\infty f$. By [L1], $\int_R^\infty f=I-\int_a^R f$, which tends to zero by the definition of $I$.

2.1 The epsilon formulation is exactly [L2]. Reversing orientation or replacing infinite truncations by one-sided finite truncations proves all other stated forms. ∎
