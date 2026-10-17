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

For consistent inputs in a compact regular chart, there is a uniform $h_0>0$ such that for $|h|<h_0$ the two scaled RATTLE equations in [[def-regular-classical-rattle-step-map]] have unique roots in neighborhoods of
$$\lambda_0=\mu_0=\frac12A(q)^{-1}\bigl(D^2c(q)[v,v]-J(q)M^{-1}\nabla V(q)\bigr),\qquad v=M^{-1}p.$$
The position root depends smoothly on $(h,q,p)$, and the momentum root depends smoothly on $(h,q,p,\lambda)$ when the position multiplier is treated as a parameter. At $h=0$ the derivatives of the two scaled residuals with respect to their own multiplier variables equal $-A(q)$; they remain uniformly invertible for small $|h|$ on a compact regular chart. The branch derivatives are uniformly bounded there, and the roots define the selected local branches.

## Facts & Assumptions

**Given:** Consistent $(q,p)\in\mathcal M$, the compact regular chart, smooth $c,V$, and sufficiently small signed $h$.

[F1] [[def-regular-classical-rattle-step-map]]: $q_1=q+hM^{-1}p_{1/2}$, $p_{1/2}=p-\frac h2\nabla V(q)-hJ(q)^T\lambda$, $p_1=p_{1/2}-\frac h2\nabla V(q_1)-hJ(q_1)^T\mu$, with residuals $c(q_1)$ and $J(q_1)M^{-1}p_1$.

[F2] [[lem-regular-holonomic-phase-space-is-symplectic-cotangent]]: $(q,p)$ has local coordinates on the smooth phase manifold, so those coordinates form an open parameter block for the implicit-function theorem.

[F3] [[lem-smooth-residual-quotient-extension]]: if a smooth residual and its first $r-1$ step derivatives vanish at zero, division by $h^r$ has a smooth extension whose value and derivatives are determined by the first nonzero Taylor coefficients.

[F4] [[thm-parametrized-implicit-function-theorem-with-higher-regularity]]: a smooth residual equation with invertible derivative in its multiplier variables has a unique smooth local multiplier branch.

[F5] [[thm-chain-rule-for-total-derivatives]]: derivatives of compositions are computed by the chain rule.

## Proof

1.1 Put $v=M^{-1}p$ and $w(\lambda)=-M^{-1}(\frac12\nabla V(q)+J(q)^T\lambda)$. Then $q_1=q+hv+h^2w(\lambda)$. Since $c(q)=0$ and $J(q)v=0$, [F3] extends $h^{-2}c(q_1)$ smoothly, with value $F_q(0,q,p,\lambda)=\frac12D^2c(q)[v,v]-\frac12J(q)M^{-1}\nabla V(q)-A(q)\lambda$. Its $\lambda$ derivative is $-A(q)$, which is invertible. Thus [F4] gives the unique local position multiplier branch and the root $\lambda_0$ in the Statement. [F1, F2, F3, F4, algebra]

2.1 Let $G(h,q,p,\lambda,\mu)=J(q_1)M^{-1}p_1$. Consistency gives $G(0,q,p,\lambda,\mu)=0$, and [F3] extends $h^{-1}G$ smoothly. By [F5], its value at zero is $F_p(0,q,p,\lambda,\mu)=D^2c(q)[v,v]-J(q)M^{-1}\nabla V(q)-A(q)(\lambda+\mu)$. Its $\mu$ derivative is $-A(q)$. At $\lambda=\lambda_0$, the unique zero is $\mu=\lambda_0$, so [F4] gives a unique local momentum branch. [F1, F2, F3, F4, F5, step 1.1, algebra]

3.1 The branch equations are smooth in the local phase coordinates and $A^{-1}$ is uniformly bounded on the compact chart. Their pointwise neighborhoods therefore admit a finite subcover. On an overlap, both position branches agree at $h=0$ with the same smooth center $\lambda_*$, and both momentum branches agree there with the same center $\mu_*$; after shrinking the parameter neighborhoods and $h_0$, their values remain inside the same IFT uniqueness neighborhoods. Thus the local branches agree on overlaps and give the claimed uniform selected branches. [F2, F4, step 1.1, step 2.1, choose] ∎
