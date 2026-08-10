---
id: thm-improper-convergence-implies-principal-value
kind: theorem
title: "Separate improper convergence implies convergence of the principal value"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cauchy-principal-value, def-mixed-improper-integral,
       lem-improper-integral-splitting-and-tail-invariance,
       thm-linearity-of-improper-integrals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William F. Trench, Introduction to Real Analysis, Section 8.4"
      url: "https://people.math.sc.edu/girardi/m5545/TrenchBook/FreeHyperlinkedEdition2pt04.pdf"
pipeline_run: null
---

## Statement

If the two one-sided improper integrals at an interior singularity converge separately, then the Cauchy principal value exists and equals their sum. If both tails of a whole-line improper integral converge separately, its principal value exists and equals the whole-line improper integral.

The converses need not hold.

## Facts & Assumptions

**Given:** Separate convergence at the two singular ends in either setting.

[L1] A mixed improper value is the sum of the two independent limits ([[def-mixed-improper-integral]]).

[L2] Moving finite split points preserves both convergence and value ([[lem-improper-integral-splitting-and-tail-invariance]]).

[L3] Principal values use coupled symmetric truncations ([[def-cauchy-principal-value]]).

## Proof

**Proof technique:** direct.

1.1 At an interior point $c$, the two truncated terms in [L3] tend separately to the two finite one-sided values. Their sum therefore tends to the sum in [L1]. [L3, L1]

1.2 On the real line, split at zero. As $R\to\infty$, $\int_{-R}^0f$ and $\int_0^Rf$ tend separately to their two tail values, so their sum tends to the mixed value. Split-point invariance [L2] removes any dependence on zero. [L2]

2.1 These arguments prove only that independent limits imply the coupled limit; the coupled limit can exist by cancellation even when neither independent limit is finite. [given] ∎
