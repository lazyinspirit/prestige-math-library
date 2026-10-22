---
id: def-qftx-scaling-cocycle
kind: definition
title: Formal scaling and renormalization cocycle
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 10
deps:
  - def-qftx-local-time-ordered-system
  - prop-qftx-finite-renormalization-composition
justified_by: []
forward_refs: []
dependency_roles:
  def-qftx-local-time-ordered-system: mathematical-premise
  prop-qftx-finite-renormalization-composition: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Klaus Fredenhagen and Katarzyna Rejzner, Perturbative algebraic quantum field theory (full lecture notes)
      url: https://arxiv.org/html/1208.1428
      locator: Section 7, equations (79)–(80), coefficientwise formal S-matrices and finite local renormalization maps.
    - title: Romeo Brunetti, Michael Dütsch, and Klaus Fredenhagen, Perturbative Algebraic Quantum Field Theory and the Renormalization Groups
      url: https://arxiv.org/html/0901.2038
      locator: Section 4.2, equations (60)–(65), scaling action on scalar fields and mass-indexed algebras, and the formal cocycle convention.
verification:
  precheck: pass
---

## Definition

Let $\mathbb M=\mathbb R^4$ have Minkowski metric $\eta=\operatorname{diag}(-1,1,1,1)$. A scalar local polynomial functional is a finite sum
$$F(\phi)=c+\sum_{j=1}^{N}\int_{\mathbb M} f_j(x)P_j(j^{s_j}\phi(x))\,d^4x,$$
where $\phi\in C^\infty(\mathbb M;\mathbb R)$, $c\in\mathbb C$, $f_j\in C_c^\infty(\mathbb M;\mathbb C)$, each $P_j$ is a polynomial in finitely many coordinate derivatives of $\phi$, and each $s_j<\infty$. This is the local functional class used by the supplied scalar time-ordered system.

For every mass label $m\ge0$, suppose a normalized scalar time-ordered system $T_n^{(m)}$ with the same local scalar contract is supplied. Define its coefficientwise formal S-map by
$$\mathcal S_m(V)=\sum_{n=0}^{\infty}\frac{1}{n!}T_n^{(m)}(V,\ldots,V),\qquad T_0^{(m)}=1,\quad T_1^{(m)}=\operatorname{id}.$$
The series is formal in the interaction degree; no analytic convergence is asserted.

Use units $c=\hbar=1$. The dimensionless scale parameter is $\rho>0$. On scalar field configurations put
$$(C_\rho\phi)(x)=\rho^{-1}\phi(\rho^{-1}x),$$
the engineering scaling of a four-dimensional scalar field. On a family of mass-labelled functionals or maps $A=(A_m)_{m\ge0}$, define
$$(\sigma_\rho A)_m=C_\rho^*(A_{\rho^{-1}m}),\qquad (C_\rho^*F)(\phi)=F(C_{\rho^{-1}}\phi).$$
Extend this action coefficientwise to formal series and maps. It obeys $\sigma_1=\operatorname{id}$ and $\sigma_{\rho\tau}=\sigma_\rho\sigma_\tau$; the mass label scales as $m\mapsto\rho m$. The dilation sends compact supports to compact supports and normalizes the proper orthochronous Poincare action.

Assume for each $\rho>0$ that $\mathcal S$ and its scale conjugate $\sigma_\rho\mathcal S\sigma_\rho^{-1}$ are both normalized scalar time-ordered systems for the same mass-indexed free data after the stated mass relabelling. Define $Z_\rho$ to be the unique formal local map with identity linear term satisfying
$$\sigma_\rho\mathcal S\sigma_\rho^{-1}=\mathcal S\circ Z_\rho.$$
Here $Z_\rho(V)=V+O(V^2)$ means that all terms after the linear term have interaction degree at least two. This is a conditional definition: no existence of a time-ordered system for any particular model is asserted.

## Definition references

[[def-qftx-local-time-ordered-system]]

[[prop-qftx-finite-renormalization-composition]]

## Facts & Assumptions

**Given:** The mass-indexed normalized systems and scale-admissibility condition in the Definition.

[A1] The systems $\mathcal S_m$ and $\sigma_\rho\mathcal S\sigma_\rho^{-1}$ satisfy the same scalar local contract componentwise after mass relabelling; this is an explicit hypothesis.

[F1] [[def-qftx-local-time-ordered-system]]: a scalar time-ordered system is a sequence of symmetric maps on compactly supported finite-jet polynomial functionals of a smooth real scalar field, with $T_0=1$, $T_1=\operatorname{id}$, and the stated causal, covariance, scaling, and formal unitarity conditions.

[F2] [[prop-qftx-finite-renormalization-composition]]: for two systems satisfying that contract for the same free data and first-order normalization, there is a unique formal local map $Z(V)=V+O(V^2)$ with $S'=S\circ Z$; these maps preserve support and scalar Poincare covariance.

## Proof

**Proof technique:** direct verification of the scaling action and conditional well-definedness.

**Given:** [A1] and [F1]–[F2].

1.1 Direct substitution gives $C_\rho C_\tau\phi(x)=(\rho\tau)^{-1}\phi((\rho\tau)^{-1}x)=C_{\rho\tau}\phi(x)$. The mass relabelling composes as $\tau^{-1}\rho^{-1}m=(\rho\tau)^{-1}m$, including $m=0$, so $\sigma_{\rho\tau}=\sigma_\rho\sigma_\tau$ and $\sigma_{\rho^{-1}}$ is the inverse action. A positive dilation maps compact sets to compact sets; its conjugation sends a translation by $a$ to a translation by $\rho^{-1}a$ and preserves Lorentz transformations, so it preserves the local-support and Poincare-covariance conditions. [given, algebra]

2.1 By [A1], at each mass component the unscaled and scale-conjugated systems have the same free data and satisfy the normalization hypotheses of [F2]. Applying [F2] gives a unique formal local map $Z_\rho(V)=V+O(V^2)$ preserving support and covariance and satisfying the displayed equation. This defines $Z_\rho$ only under [A1]. [A1, F1, F2, step 1.1]

3.1 For $\rho=1$, step 1.1 gives $\sigma_1=\operatorname{id}$, so the defining equation is $\mathcal S=\mathcal S\circ Z_1$. The identity map also satisfies the finite-renormalization conditions, and uniqueness in [F2] gives $Z_1=\operatorname{id}$. [F2, step 1.1, algebra] ∎

## Remarks

The finite-renormalization supplier currently has an escalated Step 1 readiness record because its graphwise product-scaling input is unresolved. This definition therefore remains conditional on that supplier's exact statement and does not assert unconditional existence of the systems or maps.
