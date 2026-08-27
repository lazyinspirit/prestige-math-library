---
id: ex-a-lebesgue-measurable-function-that-is-not-borel
kind: example
title: "A Lebesgue measurable function that is not Borel measurable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel, prop-indicator-function-is-measurable-iff-its-set-is-measurable]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.22"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Example

Assuming the Axiom of Choice, there exists a Lebesgue measurable function on
$\mathbb{R}$ that is not Borel
measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice and a Lebesgue measurable set
$E \subseteq \mathbb{R}$ that is not Borel.

[L1] Assuming the Axiom of Choice, such a set exists.
([[cor-there-is-a-lebesgue-measurable-subset-of-r-that-is-not-borel]])

[L2] The indicator of a measurable set is measurable.
([[prop-indicator-function-is-measurable-iff-its-set-is-measurable]])

## Verification

**Proof technique:** direct.

1.1 Let $f:=\mathbf{1}_E$. Because $E$ is Lebesgue measurable, [L2] makes $f$ [L1, L2]
Lebesgue measurable. [L1, L2]

2.1 But [step 1.1, L1]

$$f^{-1}((1/2,\infty)) = E,$$

and $E$ is not Borel by [L1]. So $f$ is not Borel measurable. [step 1.1, L1]
∎
