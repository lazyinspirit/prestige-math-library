---
id: cor-positive-entire-harmonic-functions-are-constant
kind: corollary
title: "Positive entire harmonic functions are constant"
status: draft
origin: pipeline
deps: [thm-liouville-theorem-for-bounded-harmonic-functions]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Gantumur, Harmonic functions"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§5 Corollary 6, p.8"
---

## Statement

For $n\ge2$, every nonnegative harmonic function on $\mathbb R^n$ is constant; this includes the zero function as well as strictly positive functions.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] A real entire harmonic function bounded above or bounded below is constant. ([[thm-liouville-theorem-for-bounded-harmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Nonnegativity is a global lower bound by the finite real number zero. [given]

2.1 The one-sided Liouville theorem therefore applies and yields constancy. The constant may be zero. [F1, step 1.1] ∎
