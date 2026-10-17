---
page: inequality-kkt-duality-and-optimality-certificates
title: Inequality KKT duality and optimality certificates
status: draft
items:
  - def-inequality-constrained-program-and-kkt-geometry
  - def-convex-program-duality-and-slater-condition
  - lem-finitely-generated-euclidean-cones-are-closed
  - lem-second-order-jet-on-a-regular-level-set
  - def-kkt-residual-and-normal-cone
  - thm-farkas-alternative-for-finite-linear-systems
  - thm-mfcq-linearized-cone-equals-bouligand-tangent-cone
  - thm-critical-cone-equivalence-under-kkt
  - thm-lagrangian-weak-duality
  - thm-convex-value-function-support-at-relative-interior-domain-points
  - thm-first-order-kkt-necessity-under-mfcq
  - thm-convex-kkt-sufficiency-and-normal-cone-certificate
  - thm-kkt-residual-vanishes-exactly-on-kkt-tuples
  - thm-second-order-sufficient-condition-on-the-critical-cone
  - thm-slater-strong-duality-and-dual-attainment
  - prop-licq-implies-mfcq-and-unique-kkt-multipliers
  - thm-second-order-necessary-condition-on-the-critical-cone
examples: []
---

We fix the inequality convention $g_i(x)\le 0$ and the Lagrangian
$L(x,\nu,\lambda)=f(x)+\nu^T h(x)+\lambda^Tg(x)$ with $\lambda\ge0$.
The page defines the feasible, tangent, linearized, and critical cones,
LICQ, MFCQ, the KKT system and its residual, the convex normal cone, and the
finite-dimensional Lagrangian dual. Farkas is proved using a closed finitely
generated cone and Euclidean projection. MFCQ gives the tangent-cone identity
and multiplier existence; LICQ gives uniqueness. Convex KKT sufficiency,
Slater strong duality, and second-order necessary and sufficient conditions
retain their distinct hypotheses.
