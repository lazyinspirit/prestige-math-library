---
id: cor-algebraic-integer-minimal-polynomial-criterion
kind: corollary
title: "Minimal-polynomial criterion for algebraic integers"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ring-of-integers-of-a-number-field, def-integral-ring-extension, thm-integrality-and-finite-module-equivalences]
proof_strategy: direct
sources:
  references:
    - title: "Milne, Proposition 2.11"
      url: "https://www.jmilne.org/math/CourseNotes/ANT.pdf"
---

## Statement

For $\alpha\in K$, $\alpha\in\mathcal O_K$ if and only if its monic minimal polynomial over $\mathbb Q$ lies in $\mathbb Z[X]$.

## Facts & Assumptions

**Given:** $\alpha\in K$.

[F1] Integrality means satisfying a monic polynomial over the base ring ([[def-integral-ring-extension]]).

## Proof

**Proof technique:** direct.

1.1 If the minimal polynomial is monic over $\mathbb Z$, [F1] gives $\alpha\in\mathcal O_K$. [F1, given]

2.1 Conversely, a monic integral polynomial annihilating $\alpha$ is divisible by its monic minimal polynomial; Gauss's lemma makes the latter integral. [F1, step 1.1] ∎
