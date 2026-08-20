---
id: thm-comparison-test-for-improper-multiple-integrals
kind: theorem
title: "Comparison and absolute comparison tests for improper multiple integrals"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-improper-multiple-integral-and-absolute-convergence, thm-nonnegative-improper-multiple-integral-by-exhaustion, thm-multidimensional-integral-properties]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "V. Guillemin, MIT 18.101 Analysis II Lecture Notes, §§3.7–3.8"
      url: "https://ocw.mit.edu/courses/18-101-analysis-ii-fall-2005/babd982be745679b6d691f78b1c18f53_lectures.pdf"
pipeline_run: null
---

## Statement

For locally integrable $0\le f\le g$, comparison on compact subsets gives the same inequality for improper integrals:

$$0\le\int_Df\le\int_Dg.$$

If $|f|\le g$ and $\int_Dg<+\infty$, then $f$ is absolutely improperly integrable.

## Facts & Assumptions

**Given:** An open set $D$ and locally Riemann-integrable functions with the pointwise inequalities in the Statement.

[L1] Every compact Jordan exhaustion computes a nonnegative improper integral ([[thm-nonnegative-improper-multiple-integral-by-exhaustion]]).

[L2] A signed function is improperly integrable precisely when the nonnegative improper integral of its absolute value is finite ([[def-improper-multiple-integral-and-absolute-convergence]]).

[L3] Proper Riemann integrals preserve pointwise inequalities ([[thm-multidimensional-integral-properties]]).

## Proof

**Proof technique:** direct.

1.1 On every compact Jordan $K\subseteq D$, [L3] gives $0\le\int_Kf\le\int_Kg$; taking the defining suprema, equivalently using [L1] on any exhaustion, gives $0\le\int_Df\le\int_Dg$. [L1, L3]

2.1 If $|f|\le g$ and $\int_Dg$ is finite, step 1.1 applied to $|f|$ gives $\int_D|f|\le\int_Dg<+\infty$, so [L2] gives absolute improper integrability of $f$. [step 1.1, L2] ∎
