---
id: thm-ae-equality-preserves-measurability-on-complete-spaces
kind: theorem
title: "On a complete measure space, equality almost everywhere preserves measurability"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-measure-space, prop-null-sets-form-a-sigma-ideal-in-a-complete-space, thm-threshold-characterisations-of-real-and-extended-real-measurability]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Section 3.5"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal{A},\mu)$ be a complete measure space, let
$f : X \to \overline{\mathbb{R}}$ be measurable, and let
$g : X \to \overline{\mathbb{R}}$ satisfy $g=f$ almost everywhere. Then $g$ is
measurable.

## Facts & Assumptions

**Given:** A complete measure space $(X,\mathcal{A},\mu)$, a measurable function $f : X \to \overline{\mathbb{R}}$, a function $g : X \to \overline{\mathbb{R}}$, and a measurable null set $N$ such that $f=g$ on $X \setminus N$.

[L1] In a complete measure space, every subset of a measurable null set is measurable and null. ([[prop-null-sets-form-a-sigma-ideal-in-a-complete-space]])

[L2] Threshold measurability characterizes measurable $\overline{\mathbb{R}}$-valued functions. ([[thm-threshold-characterisations-of-real-and-extended-real-measurability]])

## Proof

**Proof technique:** direct.

1.1 Fix a real $a$. On $X \setminus N$, the equality $g=f$ gives [given, algebra]

$$\{g>a\} \cap (X \setminus N) = \{f>a\} \cap (X \setminus N).$$

Therefore

$$\{g>a\} = \big(\{f>a\} \cap (X \setminus N)\big) \cup \big(\{g>a\} \cap N\big).$$

[given, algebra]

2.1 The set $\{f>a\}$ is measurable by [L2]. The set $\{g>a\} \cap N$ is a [step 1.1, L1, L2] subset of the measurable null set $N$, so [L1] makes it measurable. Hence $\{g>a\}$ is measurable for every real $a$. [step 1.1, L1, L2]

3.1 By [L2], step 2.1 proves that $g$ is measurable. [step 2.1, L2] ∎
