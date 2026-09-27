---
id: cor-positive-entire-harmonic-functions-are-constant
kind: corollary
title: "Positive entire harmonic functions are constant"
status: published
origin: pipeline
deps: [thm-liouville-theorem-for-bounded-harmonic-functions, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (cor-positive-entire-harmonic-functions-are-constant). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  references:
    - title: "Gantumur, Harmonic functions"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§5 Corollary 6, p.8"
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. For $n\ge2$, every nonnegative harmonic function on $\mathbb R^n$ is constant; this includes the zero function as well as strictly positive functions.

## Facts & Assumptions

**Given:** Countable Choice and the objects and hypotheses in the statement ([[def-countable-choice]]).

[F1] A real entire harmonic function bounded above or bounded below is constant. ([[thm-liouville-theorem-for-bounded-harmonic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Nonnegativity is a global lower bound by the finite real number zero. [given]

2.1 The one-sided Liouville theorem therefore applies and yields constancy. The constant may be zero. [F1, step 1.1] ∎
