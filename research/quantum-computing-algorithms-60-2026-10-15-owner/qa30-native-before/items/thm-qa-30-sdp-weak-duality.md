---
id: thm-qa-30-sdp-weak-duality
kind: theorem
title: "Weak duality for the finite SDP pair"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 2
deps:
  - def-qa-30-sdp-primal-dual-pair
  - thm-non-negative-square-root-exists-and-is-unique
  - prop-trace-is-linear
  - thm-trace-of-ab-equals-trace-of-ba
  - def-qc-dirac-notation-conversion
  - lem-qa-30-positive-product-trace-nonnegative
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
verification:
  precheck: pass
---

## Statement

For every primal-feasible $X$ and dual-feasible $y$ in [[def-qa-30-sdp-primal-dual-pair]], $\operatorname{tr}(CX)\le b\cdot y$. More precisely,
$$b\cdot y-\operatorname{tr}(CX)=\sum_{j=1}^m y_j\bigl(b_j-\operatorname{tr}(A_jX)\bigr)+\operatorname{tr}\!\left(\left(\sum_{j=1}^m y_jA_j-C\right)X\right),$$
and every term on the right is nonnegative.

## Facts & Assumptions

**Given:** $X\succeq0$, $\operatorname{tr}(A_jX)\le b_j$, $y_j\ge0$, and $D:=\sum_jy_jA_j-C\succeq0$.

[F1] [[def-qa-30-sdp-primal-dual-pair]]: these are the exact primal and dual feasibility conditions and trace sign convention.

[F2] [[prop-trace-is-linear]]: trace is linear.

[F3] [[lem-qa-30-positive-product-trace-nonnegative]]: for positive semidefinite $P,Q$, $\operatorname{tr}(PQ)\ge0$.

## Proof

**Proof technique:** direct.

1.1 Expand $D=\sum_jy_jA_j-C$ and use [F2] to obtain the displayed identity. Each scalar term is nonnegative because both $y_j$ and $b_j-\operatorname{tr}(A_jX)$ are nonnegative by [F1]. The remaining term is nonnegative by [F1] and [F3] applied to $D,X$. [given, F1, F2, F3, algebra]

2.1 The right side of the identity in step 1.1 is a sum of nonnegative real numbers, so $b\cdot y-\operatorname{tr}(CX)\ge0$, which is the claimed inequality. No feasibility beyond [F1], optimizer, or strong-duality assumption is used. [step 1.1, F1, algebra] ∎
