---
id: lem-rattle-scaled-position-and-momentum-branches
kind: lemma
title: Scaled RATTLE equations have unique local multiplier branches
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-regular-classical-rattle-step-map
  - lem-regular-holonomic-phase-space-is-symplectic-cotangent
  - lem-smooth-residual-quotient-extension
  - thm-parametrized-implicit-function-theorem-with-higher-regularity
  - thm-chain-rule-for-total-derivatives
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; compactness is used only for a finite subcover."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1.4, pp. 245–246"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370, §§4.1 and 5.1.3"
      url: "https://arxiv.org/pdf/1207.3367"
---

## Statement

Let $C$ be a compact subset of the regular phase manifold whose configuration projection lies in a compact regular chart. For each $(q,p)\in C$, the two scaled RATTLE equations in [[def-regular-classical-rattle-step-map]] have unique local roots in neighborhoods of
$$\lambda_0=\mu_0=\frac12A(q)^{-1}\bigl(D^2c(q)[v,v]-J(q)M^{-1}\nabla V(q)\bigr),\qquad v=M^{-1}p.$$
In local phase coordinates the position root depends smoothly on $(h,q,p)$, and the momentum root depends smoothly on $(h,q,p,\lambda)$ when the position multiplier is treated as a parameter near its selected root. The local branches agree on overlaps after shrinking their neighborhoods. A finite cover of $C$ therefore gives a common $h_0(C)>0$ for $|h|<h_0(C)$; the derivatives of each fixed finite order are uniformly bounded on this cover, and the two multiplier Jacobians remain uniformly invertible there. The exact position roots can also be kept in an ambient neighborhood of the compact regular configuration projection where $J$ has full row rank, so their constrained positions remain in $Q_{\mathrm{reg}}$. At $h=0$ both Jacobians equal $-A(q)$.

## Facts & Assumptions

**Given:** A compact phase subset $C\subset\mathcal M$ over a compact regular configuration chart, consistent $(q,p)\in C$, smooth $c,V$, and signed $h$ with $|h|<h_0(C)$.

[F1] [[def-regular-classical-rattle-step-map]]: $q_1=q+hM^{-1}p_{1/2}$, $p_{1/2}=p-\frac h2\nabla V(q)-hJ(q)^T\lambda$, $p_1=p_{1/2}-\frac h2\nabla V(q_1)-hJ(q_1)^T\mu$, with residuals $c(q_1)$ and $J(q_1)M^{-1}p_1$.

[F2] [[lem-regular-holonomic-phase-space-is-symplectic-cotangent]]: $(q,p)$ has local coordinates on the smooth phase manifold, so those coordinates form an open parameter block for the implicit-function theorem.

[F3] [[lem-smooth-residual-quotient-extension]]: if a smooth residual and its first $r-1$ step derivatives vanish at zero, division by $h^r$ has a smooth extension whose value and derivatives are determined by the first nonzero Taylor coefficients.

[F4] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]: a smooth residual equation with invertible derivative in its multiplier variables has a unique smooth local multiplier branch.

[F5] [[thm-chain-rule-for-total-derivatives]]: derivatives of compositions are computed by the chain rule.

## Proof

1.1 Put $v=M^{-1}p$ and $w(\lambda)=-M^{-1}(\frac12\nabla V(q)+J(q)^T\lambda)$. Then $q_1=q+hv+h^2w(\lambda)$. Since $c(q)=0$ and $J(q)v=0$, [F3] extends $h^{-2}c(q_1)$ smoothly, with value $F_q(0,q,p,\lambda)=\frac12D^2c(q)[v,v]-\frac12J(q)M^{-1}\nabla V(q)-A(q)\lambda$. Its $\lambda$ derivative is $-A(q)$, which is invertible. Since $A$ is smooth and invertible, $A^{-1}=\operatorname{adj}(A)/\det A$ is smooth locally, so the center $\lambda_0$ varies smoothly with the phase input. Thus [F4] gives the unique local position multiplier branch at that center. [F1, F2, F3, F4, algebra]

2.1 Let $G(h,q,p,\lambda,\mu)=J(q_1)M^{-1}p_1$. Consistency gives $G(0,q,p,\lambda,\mu)=0$, and [F3] extends $h^{-1}G$ smoothly. By [F5], its value at zero is $F_p(0,q,p,\lambda,\mu)=D^2c(q)[v,v]-J(q)M^{-1}\nabla V(q)-A(q)(\lambda+\mu)$. Its $\mu$ derivative is $-A(q)$. At $\lambda=\lambda_0$, the unique zero is $\mu=\lambda_0$, so [F4] gives a unique local momentum branch. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 The branch equations are smooth in local phase coordinates, and $A^{-1}$ is uniformly bounded on the compact configuration projection of $C$. Since $J$ has full row rank on that compact projection, continuity gives an ambient neighborhood where it remains full row rank. Around each point of $C$, shrink the phase and multiplier neighborhoods so both roots remain in common IFT uniqueness neighborhoods on overlaps and exact $q_1$ remains in this regular neighborhood. These neighborhoods cover $C$; compactness gives a finite subcover and the minimum of their positive step radii is a common $h_0(C)$. The smooth branch derivatives are bounded on smaller compact neighborhoods covering $C$ for $|h|\le h_0(C)$, and continuity of the multiplier Jacobians preserves uniform invertibility after a further shrink. [F2, F4, step 1.1, step 2.1, choose] ∎
