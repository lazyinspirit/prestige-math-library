---
id: ex-cantor-measure-is-concentrated-on-the-cantor-set
kind: example
title: "The Cantor measure is concentrated on the Cantor set"
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
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.37"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Example

The Cantor measure $\mu_c$ is a probability measure with

$$\mu_c(C)=1,\qquad \mu_c(\mathbb{R} \setminus C)=0.$$

So it is entirely supported on the Cantor set even though the Cantor set has
Lebesgue measure $0$.

## Facts & Assumptions

**Given:** The Cantor measure $\mu_c$ and the Cantor set $C$.

[L1] The Cantor measure is a singular atomless probability measure concentrated
on the Cantor set. ([[prop-cantor-measure-is-a-singular-atomless-probability-measure]])

## Verification

**Proof technique:** direct.

1.1 By [L1], $\mu_c(\mathbb{R} \setminus C)=0$. [L1]

2.1 The same fact [L1] says $\mu_c([0,1])=1$, hence [step 1.1, L1]
$\mu_c(C)=1-\mu_c([0,1]\setminus C)=1$. This is exactly what concentration on
$C$ means. [step 1.1, L1] ∎
