---
id: cex-cantor-measure-is-atomless-but-not-absolutely-continuous
kind: counterexample
title: "The Cantor measure is atomless but not absolutely continuous with respect to Lebesgue measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-cantor-measure-is-a-singular-atomless-probability-measure]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.37"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement refuted

That every atomless Borel measure on $\mathbb{R}$ must be absolutely continuous
with respect to Lebesgue measure.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and the Cantor measure $\mu_c$.

[L1] Assuming Countable Choice, the Cantor measure is an atomless probability measure singular with
respect to Lebesgue measure.
([[prop-cantor-measure-is-a-singular-atomless-probability-measure]])

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the measure $\mu_c$ is atomless. [L1]

2.1 The same fact [L1] says that $\mu_c$ is singular and has total mass $1$. [step 1.1, L1]
If it were also absolutely continuous with respect to Lebesgue measure, its
concentration on a Lebesgue-null set would force its total mass to be $0$, a
contradiction. Therefore atomlessness does not imply absolute continuity.
[step 1.1, L1] ∎
