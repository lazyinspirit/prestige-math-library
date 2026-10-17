---
id: lem-canonical-kick-and-drift-shears-have-symplectic-jacobians
kind: lemma
title: Canonical kick and drift shears satisfy the symplectic Jacobian identity
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-leapfrog-step-map
  - def-local-leapfrog-domain-on-an-open-configuration-set
  - def-symplectic-form-and-symplectic-manifold
  - thm-symmetry-of-higher-mixed-partials
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
      locator: "PDF pp. 1–2"
    - title: "Nikolaj Nordkvist and Poul G. Hjorth, Classical Mechanics and Symplectic Integration"
      url: "https://backend.orbit.dtu.dk/ws/files/2512495/lecture_notes-1.pdf"
      locator: "§3.5, PDF pp. 40–41"
---

## Statement

Let $Q\subseteq\mathbb R^d$ be open, $V\in C^2(Q)$, and $M$ be symmetric positive definite. Put $J=\begin{pmatrix}0&I\\-I&0\end{pmatrix}$. At every point of their open domains, the local kick and drift from [[def-local-leapfrog-domain-on-an-open-configuration-set]] are $C^1$ and their Jacobians $A$ satisfy $A^TJA=J$. Here this matrix identity is the finite-regularity meaning of symplecticity; no smooth-manifold definition is being applied to a map of insufficient regularity.

## Facts & Assumptions

**Given:** $Q,V,M$, the local restrictions of the kick and drift from [[def-local-leapfrog-domain-on-an-open-configuration-set]], and the canonical matrix $J$.

[F1] The published force-kick and drift are $K_a(q,p)=(q,p-a\nabla V(q))$ and $D_b(q,p)=(q+bM^{-1}p,p)$. [[def-leapfrog-step-map]]

[F2] The local domain restriction leaves these formulas unchanged wherever the operation is admitted. [[def-local-leapfrog-domain-on-an-open-configuration-set]]

[F3] Positive definiteness makes $M$ injective, hence invertible in finite dimension; since $M^T=M$, $(M^{-1})^T=(M^T)^{-1}=M^{-1}$. The Hessian of a $C^2$ scalar function is symmetric. [[thm-symmetry-of-higher-mixed-partials]]

## Proof

**Proof technique:** direct block-matrix calculation.

1.1 At an admitted point, differentiation of [F1] gives $DK_a=\begin{pmatrix}I&0\\-a\nabla^2V(q)&I\end{pmatrix}.$ Writing $C=-a\nabla^2V(q)=C^T$, block multiplication gives $DK_a^T J DK_a=\begin{pmatrix}C-C^T&I\\-I&0\end{pmatrix}=J.$ [F1, F2, F3, given, algebra]

1.2 Differentiation of the drift gives $DD_b=\begin{pmatrix}I&bM^{-1}\\0&I\end{pmatrix}.$ Writing $B=bM^{-1}=B^T$, multiplication yields $DD_b^T J DD_b=\begin{pmatrix}0&I\\-I&B^T-B\end{pmatrix}=J.$ [F1, F2, F3, given, algebra]

2.1 Thus each admitted shear satisfies the claimed identity at every point of its open domain. [step 1.1, step 1.2] ∎

