---
id: fs-every-atomless-borel-measure-on-r-has-a-density
kind: false-statement
title: "FALSE: every atomless Borel measure on $\\mathbb{R}$ is absolutely continuous with respect to Lebesgue measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-cantor-measure-is-a-singular-atomless-probability-measure]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.37"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

**False claim.** Every atomless Borel measure on $\mathbb{R}$ has a density with
respect to Lebesgue measure. The Cantor measure already separates atomlessness
from absolute continuity.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Cantor measure $\mu_c$.

[L1] Assuming Countable Choice, the Cantor measure is an atomless probability measure singular with
respect to Lebesgue measure.
([[prop-cantor-measure-is-a-singular-atomless-probability-measure]])

## Refutation

**Proof technique:** direct.

1.1 By [L1], the Cantor measure $\mu_c$ is atomless. [L1]

2.1 The same fact [L1] says that $\mu_c$ is singular and has total mass $1$. [step 1.1, L1]
If it were absolutely continuous with respect to Lebesgue measure, its
concentration on a Lebesgue-null set would force its total mass to be $0$.
Thus it is not absolutely continuous and cannot arise from a density. ∎
