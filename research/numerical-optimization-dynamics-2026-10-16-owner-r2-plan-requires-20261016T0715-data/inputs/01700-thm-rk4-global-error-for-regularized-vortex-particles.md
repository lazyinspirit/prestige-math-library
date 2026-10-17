---
id: thm-rk4-global-error-for-regularized-vortex-particles
kind: theorem
title: Fourth-order global error for RK4 on a regularized vortex particle tube
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-mean-field-and-weighted-vortex-particle-systems
  - def-one-step-ode-method-local-defect-order-and-stability
  - def-euler-midpoint-rk4-tableaus
  - prop-euler-midpoint-rk4-orders-and-stability-functions
  - lem-classical-rk4-map-is-lipschitz-on-a-controlled-tube
  - thm-global-error-from-one-step-defect-and-stability
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Tobias Embree, Lecture Notes on Numerical Analysis, Sections 5.2.3-5.3
      url: https://personal.math.vt.edu/embree/math5466/nanotes.pdf
    - title: MIT OpenCourseWare 18.330, Introduction to Numerical Analysis, Chapter 5
      url: https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf
---

## Statement

Fix $\varepsilon>0$, finitely many vortex weights, $T>0$, and the regularized finite-particle vector field of [[def-mean-field-and-weighted-vortex-particle-systems]], possibly with an added common smooth force correction $g_q(t,X,x_i)$ for spatial force quadrature. Suppose the resulting nonautonomous state field $f(t,X)$ is jointly $C^4$ on an open time-state domain, with derivatives through order four bounded on a common compact convex tube $\mathcal T$ compactly contained in that domain. Assume the exact path, RK4 grid states, and every RK4 stage lie in that tube for $h=T/N\le h_0$, and the common force correction is included in these bounds. Let $C_4$ be a uniform exact-start defect constant, so the local defect is at most $C_4h^5$ as in [[def-one-step-ode-method-local-defect-order-and-stability]]. Let $L_*h$ be the stability coefficient from [[lem-classical-rk4-map-is-lipschitz-on-a-controlled-tube]]. For exact initialization, the state errors $E_k$ satisfy
$$\max_{0\le k\le N}E_k\le \begin{cases} C_4\dfrac{e^{L_*T}-1}{L_*}h^4,&L_*>0,\\ C_4Th^4,&L_*=0. \end{cases}$$
The tube and stage-admissibility assumptions are conditional; no invariance or global numerical-domain claim is made. The constant $C_4$ may depend on $\varepsilon$, particle count, the quadrature field, and the tube.

## Facts & Assumptions

**Given:** The smooth nonautonomous finite-particle field, the common tube, bounded derivatives through order four, exact initialization, and admitted RK4 stages.

[F1] Classical RK4 has local order at least four for a $C^4$ autonomous field with bounded derivatives and exact-start stages in a compact convex tube; adjoining the time equation $t'=1$ gives the same local order for the stated nonautonomous field ([[prop-euler-midpoint-rk4-orders-and-stability-functions]]).

[F2] The one-step defect is measured from the exact starting state, and local order four means a uniform $O(h^5)$ bound ([[def-one-step-ode-method-local-defect-order-and-stability]]).

[F3] At each common stage time, the RK4 map is Lipschitz in the state with factor at most $1+L_*h$ ([[lem-classical-rk4-map-is-lipschitz-on-a-controlled-tube]]).

[F4] The global error theorem gives the finite-time bound from initial error, local defect, and one-step stability ([[thm-global-error-from-one-step-defect-and-stability]]).

[F5] The Euclidean state-error norm and its triangle inequality have the conventions in [[def-euclidean-inner-product]] and [[thm-cauchy-schwarz-and-the-euclidean-norm]].

## Proof
1.1 Apply [F1] to the autonomous augmentation $(t,X)'=(1,f(t,X))$. The time component is integrated exactly by RK4 because its weights sum to one; the state component therefore has the same exact-start defect order. The tube and derivative assumptions in the Given clause make the defect uniform, so [F2] gives the bound $C_4h^5$. [given, F1, F2]

2.1 The stage-wise estimate [F3] supplies the global theorem's stability inequality, and exact initialization gives $C_0=0$. Apply [F4] with $p=4$, $C=C_4$, and $L=L_*$; its $L_*>0$ and $L_*=0$ cases are exactly the displayed bound. [F3, F4, F5, step 1.1] ∎
