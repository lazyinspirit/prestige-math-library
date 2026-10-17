---
id: ex-repeated-interior-root-preserves-bounded-powers
kind: example
title: "A repeated interior root preserves bounded companion powers"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
deps:
  - def-linear-multistep-method-consistency-order-and-root-condition
  - lem-companion-powers-bounded-under-root-condition
  - lem-linear-multistep-order-conditions-from-taylor
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
dependency_level: 2
---

## Example

Consider the three-step method with $\rho(\zeta)=(\zeta-1)(\zeta-\tfrac12)^2$ and $\sigma(\zeta)=\tfrac14$. It is consistent and satisfies the root condition even though the root $1/2$ is repeated; its homogeneous companion powers are bounded.

## Facts & Assumptions

**Given:** The method conventions and root condition in [[def-linear-multistep-method-consistency-order-and-root-condition]].

[F1] [[lem-linear-multistep-order-conditions-from-taylor]] identifies consistency from $\rho(1)=0$ and $\rho'(1)=\sigma(1)$.

[F2] [[lem-companion-powers-bounded-under-root-condition]] proves that repeated roots strictly inside the unit disk are permitted and still give bounded companion powers.

## Verification

1.1 Expanding gives $\rho(\zeta)=\zeta^3-2\zeta^2+\tfrac54\zeta-\tfrac14$, so $\rho(1)=0$ and $\rho'(1)=\tfrac14=\sigma(1)$. Hence [F1] gives consistency. [F1, algebra]

1.2 The factorization displays roots $1$ and $1/2$ with multiplicities one and two, respectively. The unit root is simple; the repeated root has modulus strictly below one. Thus the root condition holds. [given, algebra]

2.1 Apply [F2] to the root condition in step 1.2. The companion powers are uniformly bounded. In the scalar recurrence, the repeated-root mode $n2^{-n}$ is bounded as well, since $n2^{-n}\to0$. [F2, step 1.2, algebra] ∎
