---
page: least-squares-fem-and-practical-dpg
title: First-order least-squares FEM and practical DPG
status: draft
items:
  - lem-na-ultraweak-poisson-rotation-trace-2d
  - def-na-least-squares-poisson-first-order
  - def-na-ultraweak-poisson-dpg-formulation
  - lem-na-least-squares-poisson-residual-norm-equivalence
  - alg-na-practical-dpg-finite-riesz-solves
  - lem-na-hdiv-normal-trace-surjectivity
  - lem-na-ultraweak-poisson-skeleton-quotients
  - rem-na-practical-dpg-roundoff-and-normal-equations
  - lem-na-ultraweak-poisson-bilinear-form-bounded
  - lem-na-ultraweak-poisson-trial-kernel
  - lem-na-least-squares-poisson-space-conformity
  - lem-na-practical-dpg-fortin-p1-r3
  - alg-na-ultraweak-poisson-ideal-trial-to-test
  - thm-na-least-squares-poisson-best-approximation
  - lem-na-ultraweak-poisson-bounded-load-lifting
  - thm-na-ultraweak-poisson-adjoint-graph-infsup
  - thm-na-ideal-ultraweak-poisson-energy-best-approximation
  - thm-na-practical-dpg-fortin-quasioptimality
  - thm-na-practical-dpg-residual-estimator-equivalence
  - cor-na-practical-dpg-poisson-quasioptimality-estimator
examples: []
---

This page fixes the PE30 plan-spec sign convention for the first-order Poisson system: $\sigma=-\nabla u$, $\operatorname{div}\sigma=f$, and residual $(\sigma+\nabla u,\operatorname{div}\sigma-f)$. The prose design writes the negative of this flux and the corresponding opposite second residual; negating its flux identifies the two squared objectives. All norms below are real and all integrals exact.

For the conforming least-squares family, $\Omega$ is a bounded connected Lipschitz polygon, the flux lies in $H(\operatorname{div})$, and the scalar lies in $H^1_0$. The residual map is a norm equivalent to the product graph norm by the homogeneous Dirichlet Poincaré inequality. Thus the finite RT0/P1 minimizer exists uniquely and is the residual-orthogonal best approximation. Its boundary condition is part of the scalar trial space. Quadrature, geometry and algebraic-solve perturbations are separate questions.

In dimension two the rotation $R(a,b)=(-b,a)$ carries the H(div) normal trace to the H(curl) tangential trace. The edge convention is $t=Rn$ for the cell-outward normal; adjacent cells therefore reverse both. The diagram records this local distributional identity.

```tikzcd
H(\operatorname{div};K) \arrow[r,"R"] \arrow[d,"\operatorname{div}"'] & H(\operatorname{curl};K) \arrow[d,"\operatorname{curl}"] \\
L^2(K) \arrow[r,"\mathrm{id}"'] & L^2(K)
```

The horizontal map is the fixed planar rotation, the vertical maps are distributional divergence and scalar curl, and the bottom map is the identity on real $L^2(K)$. Lemma [[lem-na-ultraweak-poisson-rotation-trace-2d]] proves the diagram commutes and establishes the trace orientation; no proof relies on the drawing.

For practical DPG, the ultraweak trial variables are $(\sigma,u,\widehat u,\widehat\sigma_n)$ in $L^2\times L^2$ and compatible global scalar/normal trace quotient ranges. Tests are broken $H(\operatorname{div})\times H^1$ with graph norm. The local form is
$$b(x;\tau,v)=(\sigma,\tau)-(u,\operatorname{div}_h\tau)+\langle\widehat u,\tau\cdot n\rangle-(\sigma,\nabla_hv)+\langle\widehat\sigma_n,v\rangle,$$
with each normal outward from its cell and right-hand side $(f,v)$. The local normal-trace surjectivity result supplies the trace-duality separation used in the kernel proof. The trace quotient, boundedness and trial-kernel results make these pairings well-defined and identify the ideal energy norm.

For every $F\in V'$, the bounded-load lifting uses one global $H^1_0$ Lax–Milgram solve and actual global scalar and normal traces to construct $R F\in U$ with $B R F=F$. Its norm depends only on the fixed-domain Poincaré constant, not on mesh size. This proves the connected-domain primal and adjoint graph bounds in dimensions two and three without a Hodge decomposition, simple connectivity, or connected boundary. The diagram records the right-inverse identity established in [[lem-na-ultraweak-poisson-bounded-load-lifting]]; its commutativity is proved in that item, not inferred from the drawing.

```tikzcd
V' \arrow[r,"R"] \arrow[dr,"\mathrm{id}_{V'}"'] & U \arrow[d,"B"] \\
& V'
```

The top and right arrows are the bounded load lifting and trial operator, and the diagonal is the identity on the real test dual.

For the two-dimensional P1 volume trial, continuous P2 scalar trace, P1 normal trace and broken P3 vector/scalar tests, the page supplies a local Fortin map. The proof uses seven scalar moments and twelve restricted RT2 moments, including the full unisolvence argument; it yields a mesh-uniform graph bound and the four DPG moment identities. Each local practical Riesz solve forms exact Gram data and uses an exact $LDL^{\mathsf T}$ factorization; a dependent generating family returns `singular-test-matrix`, while a fixed basis gives the unique bounded linear Riesz map. Under continuous inf-sup assumptions, the practical DPG system is the mixed residual Riesz problem and has the proved conditional quasi-optimal bound. The residual estimator is reliable and efficient up to the Fortin data oscillation; for this Fortin map it is bounded by cell-average $L^2$ oscillation and vanishes on cellwise constant data.

The practical corollary uses only the dimension-two triangular P1/R3 family selected by PE30, on all bounded connected Lipschitz polygons including holes. The continuous graph theorem covers dimensions two and three. The PE09 page prerequisite remains declared as assigned; its current tangential-trace result is three-dimensional, so the local planar rotation proof uses the actual PE08 H(div) normal-trace supplier instead. Variational-crime estimates remain a declared page prerequisite; this exact conforming residual analysis does not use a Strang inequality.
