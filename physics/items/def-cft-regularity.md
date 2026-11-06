---
id: def-cft-regularity
kind: definition
title: Regularity of a vertex operator algebra
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
deps:
  - def-conformal-vertex-algebra
  - def-vertex-algebra-module
  - def-ordinary-vertex-module
dependency_roles:
  def-conformal-vertex-algebra: mathematical-premise
  def-vertex-algebra-module: mathematical-premise
  def-ordinary-vertex-module: mathematical-premise
domain: mathematics
library: mathematics
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Abe, Buhl, and Dong, Rationality, regularity, and C2-cofiniteness"
      url: "https://arxiv.org/pdf/math/0204021"
      locator: "§2, Definition 2.6; the paper assumes CFT type throughout."
    - title: "Chongying Dong and Cuipo Jiang, Rationality of Vertex Operator Algebras"
      url: "https://arxiv.org/pdf/math/0607679v1"
      locator: "§§1–2 and Corollary 5.5; module conventions kept distinct."
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $V$ be a conformal vertex algebra of CFT type. Say that $V$ is **regular** if every weak $V$-module, meaning a module with the field axioms but no grading assumption, is an internal direct sum of simple ordinary $V$-modules. “Ordinary” means semisimple $L(0)$ with finite-dimensional eigenspaces and weights bounded below. Regularity is stronger than complete reducibility of admissible modules and does not itself assert $C_2$-cofiniteness.

## Statement references

[[def-conformal-vertex-algebra]]

[[def-vertex-algebra-module]]

[[def-ordinary-vertex-module]]

## Facts & Assumptions

**Given:** $V$ is a conformal vertex algebra of CFT type.

[F1] [[def-conformal-vertex-algebra]]: CFT type supplies the conformal grading and the operator $L(0)$ used in ordinary modules.

[F2] [[def-vertex-algebra-module]]: a weak module satisfies lower truncation, vacuum and module Jacobi, with no grading requirement.

[F3] [[def-ordinary-vertex-module]]: an ordinary module has semisimple $L(0)$, finite-dimensional eigenspaces and a lower bound on real parts of weights.

## Proof

1.1 The definition quantifies over every module satisfying [F2] and requires it to be an internal direct sum of simple $V$-submodules. The zero module is the empty direct sum. [given, F1, F2, algebra]

2.1 The summands must satisfy each clause of [F3]; no grading of a general weak module, rationality, or $C_2$-cofiniteness is included in this definition. [given, F3, step 1.1, algebra] ∎

## Proof status

This definition records weak-module complete reducibility into ordinary modules under the explicit CFT-type convention; it asserts no equivalence with other notions.

