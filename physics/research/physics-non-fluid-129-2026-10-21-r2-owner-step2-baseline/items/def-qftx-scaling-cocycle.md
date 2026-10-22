---
id: def-qftx-scaling-cocycle
kind: definition
title: Formal scaling and renormalization cocycle
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 8
deps:
  - def-qftx-local-time-ordered-system
  - prop-qftx-finite-renormalization-composition
  - def-countable-choice
justified_by: []
forward_refs: []
dependency_roles:
  def-qftx-local-time-ordered-system: mathematical-premise
  prop-qftx-finite-renormalization-composition: mathematical-premise
  def-countable-choice: mathematical-premise
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

Assume Countable Choice.

Let $\mathbb M=\mathbb R^4$ have Minkowski metric $\eta=\operatorname{diag}(-1,1,1,1)$. A scalar local polynomial functional is a finite sum
$$F(\phi)=c+\sum_{j=1}^{N}\int_{\mathbb M} f_j(x)P_j(j^{s_j}\phi(x))\,d^4x,$$
where $N$ is a finite nonnegative integer, $\phi\in C^\infty(\mathbb M;\mathbb R)$, $c\in\mathbb C$, and $f_j\in C_c^\infty(\mathbb M;\mathbb C)$. For a finite integer $s_j\ge0$, the $s_j$-jet is $j^{s_j}\phi(x)=(\partial^\alpha\phi(x))_{\alpha\in\{0,1,2,\ldots\}^4,\,|\alpha|\le s_j}$; each $P_j$ is a complex polynomial in these finitely many jet coordinates. This is the local functional class used by the supplied scalar time-ordered system.

For every mass label $m\ge0$, suppose a normalized scalar time-ordered system $T_n^{(m)}$ with the same local scalar contract is supplied. Define its coefficientwise formal S-map by
$$\mathcal S_m(V)=\sum_{n=0}^{\infty}\frac{1}{n!}T_n^{(m)}(V,\ldots,V),\qquad T_0^{(m)}=1,\quad T_1^{(m)}=\operatorname{id}.$$
The series is formal in the interaction degree; no analytic convergence is asserted.

Use units $c=\hbar=1$, so the mass label $m$ has mass dimension one. The scale parameter $\rho>0$ is dimensionless. On scalar field configurations put
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

[[def-countable-choice]]

## Facts & Assumptions

**Given:** Countable Choice, the mass-indexed normalized systems, and the scale-admissibility condition in the Definition.

[A1] Assume Countable Choice [[def-countable-choice]] for the supplied scalar contraction contract and the given-systems comparison result. No new arbitrary graph extension is chosen in this scale-action construction.

[F1] [[def-qftx-local-time-ordered-system]]: a scalar time-ordered system is a sequence of symmetric maps on compactly supported finite-jet polynomial functionals of a smooth real scalar field, with $T_0=1$, $T_1=\operatorname{id}$, and the stated causal, covariance, scaling, and formal unitarity conditions.

[F2] [[prop-qftx-finite-renormalization-composition]]: for two systems satisfying that contract for the same free data and first-order normalization, there is a unique formal local map $Z(V)=V+O(V^2)$ with $S'=S\circ Z$; these maps preserve support and scalar Poincare covariance.

[F3] [[def-qftx-local-time-ordered-system]]: for $\gamma=(a,\Lambda)$ in the proper orthochronous Poincare group, $(\gamma\cdot\phi)(x)=\phi(\Lambda^{-1}(x-a))$ and $(\gamma\cdot F)(\phi)=F(\gamma^{-1}\cdot\phi)$.

[F4] [[def-qftx-local-time-ordered-system]]: the time-ordered maps are equivariant under this action, as expressed by the covariance condition in its Definition.

## Proof

**Proof technique:** direct verification of the scaling action and conditional well-definedness.

**Given:** [A1] and [F1]–[F4].

1.1 Direct substitution gives $C_\rho C_\tau\phi(x)=(\rho\tau)^{-1}\phi((\rho\tau)^{-1}x)=C_{\rho\tau}\phi(x)$. Repeated chain rule gives $\partial^\alpha(C_\rho\phi)(x)=\rho^{-1-|\alpha|}(\partial^\alpha\phi)(\rho^{-1}x)$, so field substitution preserves finite polynomial jets; positive dilations also send compact coefficient supports to compact sets. Thus the induced functional pullback preserves the local polynomial class and has inverse $C_{\rho^{-1}}^*$. The mass relabelling composes as $\tau^{-1}\rho^{-1}m=(\rho\tau)^{-1}m$, including $m=0$, so $\sigma_{\rho\tau}=\sigma_\rho\sigma_\tau$ and $\sigma_{\rho^{-1}}$ is the inverse action. For $T_a\phi(x)=\phi(x-a)$, direct substitution gives $C_\rho T_a C_\rho^{-1}=T_{\rho a}$; scalar dilations commute with each Lorentz transformation. By [F3] this action normalizes the proper orthochronous Poincare group, and by [F4] conjugation preserves covariance of the time-ordered system. [given, F1, F3, F4, algebra]

2.1 At each mass component the unscaled and scale-conjugated systems have the same free data and satisfy the normalization hypotheses of [F2] by the scale-admissibility condition in the Definition. Under [A1], applying [F2] gives a unique formal local map $Z_\rho(V)=V+O(V^2)$ preserving support and covariance and satisfying the displayed equation. This defines $Z_\rho$ only under these hypotheses. [A1, F1, F2, step 1.1]

3.1 For $\rho=1$, step 1.1 gives $\sigma_1=\operatorname{id}$, so the defining equation is $\mathcal S=\mathcal S\circ Z_1$. The identity map also satisfies the finite-renormalization conditions, and uniqueness in [F2] gives $Z_1=\operatorname{id}$. [A1, F2, step 1.1, algebra] ∎

## Remarks

The time-ordered systems and scale-admissibility condition are supplied inputs. Their comparison map is determined uniquely by a triangular coefficient recursion under Countable Choice from the actual contraction contract. Constructing time-ordered systems is a separate theorem with its own Choice hypotheses; no existence of a system for a particular model is asserted here.
