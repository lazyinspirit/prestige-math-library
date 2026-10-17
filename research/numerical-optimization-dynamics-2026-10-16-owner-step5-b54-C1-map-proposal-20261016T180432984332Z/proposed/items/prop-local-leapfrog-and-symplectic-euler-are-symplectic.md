---
id: prop-local-leapfrog-and-symplectic-euler-are-symplectic
kind: proposition
title: Local leapfrog and kick-then-drift symplectic Euler are symplectic
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-local-leapfrog-domain-on-an-open-configuration-set
  - alg-local-symplectic-euler-step
  - lem-canonical-kick-and-drift-shears-have-symplectic-jacobians
  - def-symplectic-form-and-symplectic-manifold
  - thm-chain-rule-for-total-derivatives
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Ernst Hairer, Geometric Numerical Integration, TU München Lecture 2: Symplectic integrators"
      url: "https://www.unige.ch/~hairer/poly_geoint/week2.pdf"
      locator: "PDF pp. 1–2 and 12–13"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF pp. 40–41"
---

## Statement

Under the hypotheses of [[lem-canonical-kick-and-drift-shears-have-symplectic-jacobians]], every admitted local leapfrog step and every admitted kick-then-drift symplectic Euler step is a $C^1$ map with a continuous Jacobian satisfying $D\Phi^TJD\Phi=J$ on its open admitted domain. The result concerns symplecticity, not energy conservation.

## Facts & Assumptions

**Given:** $V\in C^2(Q)$, symmetric positive-definite $M$, the local partial maps and their admitted domains.

[F1] The local kick, drift, and leapfrog composition have the domains and compositions stated in the local-domain definition. [[def-local-leapfrog-domain-on-an-open-configuration-set]]

[F2] The symplectic Euler step is the partial composition $D_h\circ K_h$. [[alg-local-symplectic-euler-step]]

[F3] Each admitted kick and drift Jacobian satisfies $A^TJA=J$. [[lem-canonical-kick-and-drift-shears-have-symplectic-jacobians]]

[F4] The derivative of a composition is the product of the derivatives in reverse written order. [[thm-chain-rule-for-total-derivatives]]

## Proof

**Proof technique:** composition of symplectic shears.

1.1 By [F1] and [F2], each step under discussion is a finite composition of admitted local kicks and drifts. The intermediate points lie in $Q$ by the admitted-domain conditions, so every derivative in the composition is defined. [given, F1, F2]

2.1 If $A$ and $B$ satisfy $A^TJA=J$ and $B^TJB=J$, then $(AB)^TJ(AB)=B^T(A^TJA)B=B^TJB=J$. Applying this identity successively to [F3], with [F4] identifying the Jacobian of each composition, proves the result for both step maps. [F3, F4, algebra] ∎
