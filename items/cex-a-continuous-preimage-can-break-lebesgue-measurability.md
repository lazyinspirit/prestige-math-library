---
id: cex-a-continuous-preimage-can-break-lebesgue-measurability
kind: counterexample
title: "A continuous preimage of a Lebesgue measurable set can be nonmeasurable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Example 2.22"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement refuted

That a continuous preimage of a Lebesgue measurable subset of $\mathbb{R}$ must
be Lebesgue measurable.

## Facts & Assumptions

**Given:** The Axiom of Choice, a Lebesgue measurable set $E \subseteq \mathbb{R}$, a subset
$X \subseteq \mathbb{R}$, and a continuous map $g : X \to \mathbb{R}$ such that
$g^{-1}[E]$ is not Lebesgue measurable.

[L1] Assuming the Axiom of Choice, such data exist.
([[cor-a-continuous-preimage-of-a-lebesgue-measurable-set-can-be-nonmeasurable]])

## Counterexample

**Proof technique:** direct.

1.1 By [L1], the set $E$ is Lebesgue measurable and the map $g$ is continuous. [L1]
[L1]

2.1 The same fact [L1] says that $g^{-1}[E]$ is not Lebesgue measurable, which [step 1.1, L1]
is exactly the required failure. [step 1.1, L1] ∎
