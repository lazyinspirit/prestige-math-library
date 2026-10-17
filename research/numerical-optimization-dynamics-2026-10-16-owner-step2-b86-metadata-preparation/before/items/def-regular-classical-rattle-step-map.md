---
id: def-regular-classical-rattle-step-map
kind: definition
title: Scaled classical RATTLE step map
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-regular-holonomic-phase-space-and-dynamics
  - def-leapfrog-step-map
justified_by: []
forward_refs: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ernst Hairer, Christian Lubich, and Gerhard Wanner, Geometric Numerical Integration, 2nd ed., Chapter VII.1.4, pp. 245–246"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/63242/1/131.pdf"
    - title: "Robert I. McLachlan, Klas Modin, Olivier Verdier, and Matt Wilkins, Geometric Generalisations of SHAKE and RATTLE, Foundations of Computational Mathematics 14 (2014), 339–370, §§4–5.1.3"
      url: "https://arxiv.org/pdf/1207.3367"
verification:
  precheck: n/a
---

## Definition

Use the data of [[def-regular-holonomic-phase-space-and-dynamics]]. For a consistent input $(q,p)\in\mathcal M$, put $v=M^{-1}p$ and
$$\lambda_* =\mu_* =\frac12A(q)^{-1}\bigl(D^2c(q)[v,v]-J(q)M^{-1}\nabla V(q)\bigr).$$
For nonzero signed $h$, form the sequential scaled residual equations
$$F_q(\lambda)=h^{-2}c\!\left(q+hM^{-1}\left(p-\frac h2\nabla V(q)-hJ(q)^T\lambda\right)\right)=0,$$
$$F_p(\mu;\lambda)=h^{-1}J(q_1)M^{-1}p_1=0,$$
where $q_1,p_{1/2},p_1$ are given by the updates below. The selected multiplier pair, when it exists uniquely, is the local root branch whose limits as $h\to0$ are $\lambda_*$ and $\mu_*$. This defines a partial exact step map; no root-existence assertion is part of this definition.

For such a selected pair $\lambda,\mu\in\mathbb R^m$, define
$$p_{1/2}=p-\frac h2\nabla V(q)-hJ(q)^T\lambda,\qquad q_1=q+hM^{-1}p_{1/2},$$
$$p_1=p_{1/2}-\frac h2\nabla V(q_1)-hJ(q_1)^T\mu.$$
The position and momentum equations are respectively $c(q_1)=0$ and $J(q_1)M^{-1}p_1=0$. At $h=0$ define the step to be the identity.

Here $\lambda,\mu$ are force-level multipliers: the corresponding constraint impulses are $hJ^T\lambda$ and $hJ^T\mu$. This scaling keeps the limiting multiplier equations nonsingular as $h\to0$. The position equation is SHAKE; the final momentum equation is the RATTLE tangency correction.
