---
id: def-maxwell-edge-fem-semidiscretization
kind: definition
title: Edge-face Maxwell finite element semidiscretization
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 4
deps:
  - def-transient-maxwell-system-with-material-interfaces
  - def-na-lowest-order-whitney-de-rham-spaces
  - def-na-zero-tangential-hcurl
  - lem-na-whitney-moments-commute-with-grad-curl-div
  - def-countable-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "§§1.1–1.2, printed pp. 1–5: lowest-order Nedelec edge fields, RT0 face fields, edge and face moments, and the curl commuting identity."
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: from Hodge theory to numerical stability"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
      locator: "§§5.1–5.3, printed pp. 49–53: Whitney finite element subcomplex, degrees of freedom, and lowest-order Nedelec/RT0 spaces."
verification:
  precheck: n/a
---

## Definition

Let $\Omega$ be a bounded contractible Lipschitz polyhedron with a finite matching affine tetrahedral mesh $\mathcal T_h$, and use the real lowest-order spaces $W_h^0,N_h^1,N_h^2,N_h^3$ defined in [[def-na-lowest-order-whitney-de-rham-spaces]]. The electric trial field is $E_h(t)\in N_h^1\cap H_0(\operatorname{curl};\Omega)$; the magnetic flux field is $B_h(t)\in N_h^2$, with no imposed zero normal trace on $B_h$. PEC means the closure-defined zero tangential subspace from [[def-na-zero-tangential-hcurl]]. Periodic analogues use the periodic cell complex. Countable Choice is inherited from the H(div) and affine Piola space definitions in the suppliers; the finite matrix operations below use no additional choice.

Put $V_h:=N_h^1\cap H_0(\operatorname{curl};\Omega)$. Choose an edge basis $\{\phi_i\}_{i=1}^{N_e}$ of the electric trial space $V_h$ and a face basis $\{\psi_a\}_{a=1}^{N_f}$ of $N_h^2$, so $N_e=\dim V_h$ and $N_f=\dim N_h^2$. Define the symmetric mass matrices
$$ (M_e)_{ij}=\int_\Omega \phi_j^T\epsilon\phi_i\,dx,\qquad (M_b)_{ab}=\int_\Omega \psi_b^T\mu^{-1}\psi_a\,dx.$$
They are positive definite by the coefficient bounds in [[def-transient-maxwell-system-with-material-interfaces]] and linear independence of the finite element bases. Let $C$ and $D$ be the coefficient matrices, in these chosen bases, of the restricted map $\operatorname{curl}:V_h\to N_h^2$ and of $\operatorname{div}:N_h^2\to N_h^3$. The moment-commuting supplier gives $DC=0$ on the full spaces, hence also after restriction to $V_h$. Set $j_i(t)=\int_\Omega J_{\rm src}(t)\cdot\phi_i\,dx$, with $J_{\rm src}\in C([0,T];L^2(\Omega;\mathbb R^3))$. The lossless, conductivity-free semidiscretization with this source is
$$M_e\dot e-C^TM_b b=-j,\qquad \dot b+Ce=0.$$
The coefficient ODE is defined for arbitrary initial coefficients. To represent the magnetic constraint of the Maxwell model, require $Db(0)=0$: the Faraday row and $DC=0$ give $D\dot b=-DCe=0$, so $Db(t)=Db(0)$ and compatible data remain divergence-free. An incompatible initial divergence is preserved, not corrected by this ODE. This is a spatial Galerkin system only; no time integrator is included. The cochain convention and weak material-interface formulation come from the declared spaces and [[def-transient-maxwell-system-with-material-interfaces]]. Smooth interpolation and a uniformly bounded commuting projection are separate prerequisites for the later error estimate and are not asserted by this definition.
