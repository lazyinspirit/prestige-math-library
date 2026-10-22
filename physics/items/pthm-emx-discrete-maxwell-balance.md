---
id: pthm-emx-discrete-maxwell-balance
kind: physics-theorem
title: Discrete Maxwell energy balance and exact incidence constraints
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 2
domain: physics
library: physics
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emx-whitney-semidescretization
  - thm-emx-matrix-energy-constraints
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emx-whitney-semidescretization: formulation-prerequisite
  thm-emx-matrix-energy-constraints: mathematical-premise
aliases: []
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: A conditional finite-dimensional Galerkin deduction for the lowest-order PEC Maxwell semidiscretization defined on a matching tetrahedral mesh with static symmetric uniformly positive material tensors, a symmetric nonnegative conductivity form, continuous forcing, and the stated compatible incidence maps. It gives exact semidiscrete energy and constraint identities, but no continuum convergence claim, no automatic charge-deposition scheme, no claim about actual materials, and no empirical conclusion.
sources:
  references:
    - title: "Long Chen, Finite Element Methods for Maxwell Equations, complete University of California, Irvine lecture notes, updated May 17 2024"
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "Entire 10-page PDF inspected. Section 2, PDF pp. 6-8: the weak Maxwell finite-element formulation and the need to distinguish discrete divergence constraints; Section 3, PDF pp. 8-10: the compatible de Rham complex."
    - title: "Ralf Hiptmair, Finite elements in computational electromagnetism, Acta Numerica 11 (2002), pp. 237-339, complete author-hosted PDF"
      url: https://people.math.ethz.ch/~hiptmair/Courses/CEM/HIP02.pdf
      locator: "Entire 103-page PDF inspected. Sections 2.3 and 3.1-3.3, printed pp. 248-268: material-weighted weak forms, incidence coboundaries, Whitney spaces, and the resulting Galerkin mass matrices."
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: from Hodge theory to numerical stability, Bulletin of the American Mathematical Society 47 (2010), pp. 281-354"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
      locator: "Entire 70-page PDF inspected. Sections 3.3-3.5 and 5.2, 5.6, PDF pp. 23-27, 49-52, 57-60: compatible subcomplexes, local degrees of freedom, commuting projections, and cohomology."
---

## Statement

Assume Countable Choice and the semidiscrete model of [[def-emx-whitney-semidescretization]] on a nonempty open time interval I. For every t0 in I, initial vectors e(t0)=e0 and b(t0)=b0, and continuous forcing J_ext:I -> L^2(Omega;R3), the finite compatible matrix system for the edge and face coefficients has a unique C1 solution on all of I. Define

$$W_h(t):=\frac12\int_\Omega\left(E_h(x,t)\cdot\varepsilon(x)E_h(x,t)+B_h(x,t)\cdot\mu(x)^{-1}B_h(x,t)\right)\,dx,\qquad q(t):=-G^TM_e e(t).$$

Then for every t in I,

$$\frac{d}{dt}W_h(t)=-e(t)^TSe(t)-e(t)^Tj(t),\qquad D b(t)=D b(t_0),\qquad \dot q(t)=G^T(Se(t)+j(t)).$$

The first identity is the exact semidiscrete field-energy balance in joules; e^T S e and e^T j have units watts, representing discrete conductivity loss and source work. The conserved vector D b has units webers and is the face-to-cell magnetic-divergence coordinate. The coordinate q has units coulombs and is the weak discrete-divergence quantity defined by the finite matrix system; dot q has units amperes. This theorem does not infer a nodal charge-deposition method from it.

## Statement references

[[def-emx-whitney-semidescretization]]

[[thm-emx-matrix-energy-constraints]]

## Facts & Assumptions

**Given:** Countable Choice, the coefficients and mesh of [[def-emx-whitney-semidescretization]], an open interval I, t0 in I, initial coefficient vectors e0,b0, and J_ext in C(I;L^2(Omega;R3)).

[F1] [[def-emx-whitney-semidescretization]]: the assembled matrices M_e,M_b are symmetric positive definite on nonzero finite-dimensional spaces, S is symmetric positive semidefinite, DC=CG=0, J_ext is continuous into L^2, and the weak Galerkin equations are exactly M_e dot e=C^T M_b b-Se-j and dot b=-Ce. Continuity of each load coordinate j_i follows in step 1.1 from the L^2 pairing.

[F2] [[thm-emx-matrix-energy-constraints]]: for that finite compatible matrix system and continuous j, every initial state has a unique C1 solution on I, with W'(e,b)=-e^TSe-e^Tj, Db(t)=Db(t0), and dot q=G^T(Se+j) for q=-G^TM_e e.

[A1] Countable Choice is inherited from the graph-space and real-L^2 conventions in the finite-element definition; the finite-dimensional ODE argument introduces no stronger choice principle. [[def-countable-choice]]

## Proof

1.1 By [F1], the semidiscrete Galerkin equations in the chosen edge and face bases are exactly the finite compatible matrix system; the positivity and compatibility hypotheses required by [F2] hold. Countable Choice is the stated graph-space strength [A1]. Each coordinate j_i(t) is continuous because J_ext is continuous in L^2 and phi_i is a fixed L^2 basis function, so Cauchy-Schwarz makes t -> integral(phi_i dot J_ext(t)) continuous. Applying [F2] gives a unique C1 coefficient solution for every initial pair on all of I. [given, F1, F2, A1, algebra]

2.1 The definitions of M_e and M_b give e^T M_e e=integral(E_h dot epsilon E_h) and b^T M_b b=integral(B_h dot mu^-1 B_h), so W_h is exactly the matrix energy W(e,b) in [F2]. Its derivative is therefore -e^T S e-e^T j. Since S is positive semidefinite, e^T S e>=0; this is a model deduction of discrete dissipation, not an observation about a material. For the same solution established in step 1.1, [F2] also gives D b(t)=D b(t0) and dot q=G^T(S e+j), with q=-G^T M_e e as defined in the Statement. The former is the exact face-to-cell magnetic-divergence constraint; the latter is the stated weak discrete-divergence evolution and does not infer a nodal charge-deposition method. [F1, F2, step 1.1, algebra] ∎
