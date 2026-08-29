---
id: cex-completed-product-sections-need-not-be-pointwise-measurable
kind: counterexample
title: "A completed-product measurable set can have a nonmeasurable exceptional section"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-product-of-complete-measures-need-not-be-complete]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 5.20"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement refuted

Every section of a completed-product measurable function is measurable.

## Counterexample

**Proof technique:** direct.

Let $N \subseteq \mathbb R$ be non-Lebesgue-measurable and let
$$E:=\{0\}\times N \subseteq \mathbb R^2.$$
Put $f:=\mathbf 1_E$.

## Facts & Assumptions

**Given:** The function $f=\mathbf 1_E$ above.

[L1] The set $E=\{0\}\times N$ is contained in a planar null set, so it becomes measurable after completing the product measure. ([[cex-product-of-complete-measures-need-not-be-complete]])

## Verification

1.1 By [L1], the indicator $f$ is measurable for the completed product measure. [L1]

2.1 The section at $0$ is $f_0=\mathbf 1_N$, whose support $N$ is not Lebesgue measurable. Hence $f_0$ is not measurable. So completed-product measurability gives section measurability only almost everywhere, not at every parameter. [step 1.1] ∎
