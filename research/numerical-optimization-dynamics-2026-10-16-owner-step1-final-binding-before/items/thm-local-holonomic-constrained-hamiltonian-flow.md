---
id: thm-local-holonomic-constrained-hamiltonian-flow
kind: theorem
title: The constrained Hamiltonian vector field has a unique local flow
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-regular-holonomic-phase-space-and-dynamics
  - lem-regular-holonomic-phase-space-is-symplectic-cotangent
  - thm-picard-lindelof-local-existence-and-uniqueness
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1, §§VII.1.1–VII.1.4"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370"
      url: "https://arxiv.org/pdf/1207.3367"
---

## Statement

Assume the hypotheses of [[def-regular-holonomic-phase-space-and-dynamics]] on a compact regular chart. For every consistent initial pair $(q_0,p_0)\in\mathcal M$ there is a unique local solution of
$$\dot q=M^{-1}p,\qquad \dot p=-\nabla V(q)-J(q)^T\lambda(q,p),$$
with $\lambda$ as defined there. The solution remains in $\mathcal M$ throughout its local interval.

## Facts & Assumptions

**Given:** A compact regular chart, a consistent initial pair $(q_0,p_0)$, and the constrained equations in the Statement.

[F1] [[def-regular-holonomic-phase-space-and-dynamics]]: $A(q)=J(q)M^{-1}J(q)^T$ is uniformly invertible on the chart, and consistency means $c(q)=0$ and $J(q)M^{-1}p=0$.

[F2] [[lem-regular-holonomic-phase-space-is-symplectic-cotangent]]: the consistent phase set is a smooth manifold with local coordinates; in particular its ambient level set is regular.

[F3] [[thm-picard-lindelof-local-existence-and-uniqueness]]: a locally Lipschitz vector field on an open Euclidean domain has a unique local solution through each initial point.

## Proof

1.1 Since $J(q)$ has full row rank and $M^{-1}$ is SPD, for every nonzero $\eta\in\mathbb R^m$ we have $\eta^TA(q)\eta=(J(q)^T\eta)^TM^{-1}(J(q)^T\eta)>0$. Thus $A(q)$ is invertible; its inverse and the displayed multiplier are smooth on a neighborhood of the chart. [F1, algebra]

1.2 Extend the formula in [F1] to that open neighborhood and define the ambient vector field $(q,p)\mapsto(M^{-1}p,-\nabla V(q)-J(q)^T\lambda(q,p))$. It is smooth, hence locally Lipschitz, so [F3] gives a unique local solution through $(q_0,p_0)$. [F1, F3, construct]

1.3 Along this solution, the chain rule gives $\frac d{dt}c(q)=J(q)M^{-1}p$ and $\frac d{dt}(J(q)M^{-1}p)=D^2c(q)[v,v]-J(q)M^{-1}\nabla V(q)-A(q)\lambda(q,p)=0$, where $v=M^{-1}p$. Since the second constraint starts at zero, it remains zero; the first derivative is therefore zero and $c(q)$ also remains zero. By [F2], this invariant set is the smooth phase manifold, so the solution stays in $\mathcal M$ and satisfies the constrained equations. [F1, F2, given, algebra]

2.1 The local uniqueness from [F3] applies to every solution of the same ambient extension, so in particular the constrained solution is unique. [F3, step 1.2, step 1.3] ∎
