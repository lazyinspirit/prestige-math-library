---
id: lem-sugawara-modes-act-on-currents
kind: lemma
title: Sugawara modes act on affine currents with weight one
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - lem-sugawara-commutator-on-all-restricted-modules
  - def-sugawara-modes
  - def-positive-energy-affine-module
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Peter Haine, The Segal–Sugawara construction, §§3.2–3.3
      url: https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/12-11-19.pdf
---

## Statement

Let $V$ be a restricted affine-current module of any complex level $k\ne-h^\vee$ as in [[def-positive-energy-affine-module]]. For the modes of [[def-sugawara-modes]], every $x\in\mathfrak g$ and $m,n\in\mathbb Z$ satisfy
$$[L_m,J_x(n)]=-nJ_x(m+n).$$
In particular this holds on all positive-energy unitary modules in the previously considered nonnegative integral level branch.

## Facts & Assumptions

**Given:** The restricted affine-current module and its noncritical level.

[F1] [[lem-sugawara-commutator-on-all-restricted-modules]] proves the current commutator with precisely these hypotheses and normal ordering.

[F2] [[def-sugawara-modes]] defines locally finite modes whenever $k+h^\vee\ne0$.

## Proof

1.1 The assumed noncritical level makes the denominator in [F2] nonzero, and restrictedness makes all its mode operators defined on every vector. These are exactly the modes used by [F1]. [given, F1, F2]

2.1 Apply [F1] to each $x,m,n$. It yields the asserted identity as an equality of endomorphisms of $V$. Since no extra hypotheses were used, the positive-energy unitary subclass is included whenever its level is noncritical. [F1, step 1.1] ∎
