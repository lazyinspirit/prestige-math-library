---
id: cex-completed-product-sections-need-not-be-pointwise-measurable
kind: counterexample
title: "A completed-product measurable set can have a nonmeasurable exceptional section"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-product-of-complete-measures-need-not-be-complete, def-axiom-of-choice, def-vitali-set-on-the-unit-interval, thm-a-vitali-set-is-not-lebesgue-measurable]
proof_strategy: direct
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-04-receipts.jsonl (cex-completed-product-sections-need-not-be-pointwise-measurable). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 5.20"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement refuted

Assuming the Axiom of Choice, the assertion that every section of a
completed-product measurable function is measurable is false.

## Counterexample

**Proof technique:** direct.

Apply AC to the nonempty equivalence classes of $x\sim y\iff x-y\in\mathbb Q$
on $[0,1]$, selecting one point from each class. This gives a Vitali set
$N\subseteq[0,1]$ as in [[def-vitali-set-on-the-unit-interval]], and
[[thm-a-vitali-set-is-not-lebesgue-measurable]] proves that $N$ is not
Lebesgue measurable. Let
$$E:=\{0\}\times N \subseteq \mathbb R^2.$$
Put $f:=\mathbf 1_E$.

## Facts & Assumptions

**Given:** The function $f=\mathbf 1_E$ above.

[L1] The set $E=\{0\}\times N$ is contained in a planar null set, so it becomes measurable after completing the product measure. ([[cex-product-of-complete-measures-need-not-be-complete]])

[A1] [[def-axiom-of-choice]] supplies the Vitali selector in the construction above; the same AC premise covers the Lebesgue-measure contracts used by [L1] and the Vitali nonmeasurability theorem.

## Verification

1.1 By [A1] and [L1], the indicator $f$ is measurable for the completed product measure. [A1, L1]

2.1 The section at $0$ is $f_0=\mathbf 1_N$, whose support $N$ is not Lebesgue measurable. Hence $f_0$ is not measurable. So completed-product measurability gives section measurability only almost everywhere, not at every parameter. [step 1.1] ∎
