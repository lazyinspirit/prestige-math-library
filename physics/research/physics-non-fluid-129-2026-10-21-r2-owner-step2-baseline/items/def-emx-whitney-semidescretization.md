---
id: def-emx-whitney-semidescretization
kind: definition
title: PEC Whitney edge-face Maxwell semidiscretization
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 1
domain: physics
library: physics
deps:
  - def-countable-choice
  - def-em-si-conventions
  - def-emx-finite-energy-boundary-model
  - def-emx-matrix-maxwell-system
  - def-na-hcurl-space
  - def-na-hdiv-space
  - def-na-lowest-order-whitney-de-rham-spaces
  - def-na-zero-tangential-hcurl
  - def-sobolev-space-wkp-and-its-norm
  - thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes
dependency_roles:
  def-countable-choice: mathematical-premise
  def-em-si-conventions: formulation-prerequisite
  def-emx-finite-energy-boundary-model: formulation-prerequisite
  def-emx-matrix-maxwell-system: mathematical-premise
  def-na-hcurl-space: mathematical-premise
  def-na-hdiv-space: mathematical-premise
  def-na-lowest-order-whitney-de-rham-spaces: mathematical-premise
  def-na-zero-tangential-hcurl: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes: mathematical-premise
aliases: []
verification:
  precheck: pending
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: A finite-dimensional, lowest-order, PEC edge-face Galerkin model of linear Maxwell evolution in a bounded laboratory polyhedron. Static measurable uniformly positive symmetric permittivity and permeability, and an optional bounded symmetric nonnegative conductivity field, are explicit model data in SI units. The definition asserts no continuum convergence, no existence of a continuum solution, no arbitrary H(curl) edge trace, and no empirical claim.
sources:
  references:
    - title: "Long Chen, Finite Element Methods for Maxwell Equations, complete University of California, Irvine lecture notes, updated May 17 2024"
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "Entire 10-page PDF inspected. Sections 1.1-1.3, PDF pp. 1-6: lowest-order Nedelec edge basis and circulations, RT0 face fluxes, Stokes commuting identity, and the limitation of canonical moments to sufficiently smooth fields. Section 2, PDF pp. 6-8: PEC H0(curl) variational formulation."
    - title: "Ralf Hiptmair, Finite elements in computational electromagnetism, Acta Numerica 11 (2002), pp. 237-339, complete author-hosted PDF"
      url: https://people.math.ethz.ch/~hiptmair/Courses/CEM/HIP02.pdf
      locator: "Entire 103-page PDF inspected. Sections 2.3-2.4, printed pp. 248-252: weak material laws and H(curl) graph-space conventions. Sections 3.1-3.3, printed pp. 255-268: oriented cochains, Whitney edge/face spaces, incidence matrices, cohomology, and Galerkin mass matrices."
    - title: "Douglas N. Arnold, Richard S. Falk, and Ragnar Winther, Finite element exterior calculus: from Hodge theory to numerical stability, Bulletin of the American Mathematical Society 47 (2010), pp. 281-354"
      url: https://sites.math.rutgers.edu/~falk/papers/bulletin-orig.pdf
      locator: "Entire 70-page PDF inspected. Sections 5.2-5.3, PDF pp. 49-53: degrees of freedom, conforming assembly, and Whitney forms; Section 5.6, PDF pp. 57-60: discrete de Rham complexes and cohomology."
---

## Definition

Assume Countable Choice as in the real L^2 and weak-derivative conventions. Let I be a nonempty open interval in R, and let Omega be a nonempty bounded Lipschitz polyhedron in one SI laboratory frame under [[def-em-si-conventions]]. Let T be a finite matching affine tetrahedral mesh with realization closure(Omega), with mesh and orientation conventions as in [[def-na-lowest-order-whitney-de-rham-spaces]]. Use the real graph space H(curl;Omega) of [[def-na-hcurl-space]] and define H_0(curl;Omega) by the closure of C_c^\infty(Omega;R^3) in that graph norm, as in [[def-na-zero-tangential-hcurl]]. Define H_0^1(Omega) as the closure of C_c^\infty(Omega;R) in W^{1,2}(Omega;R), using the norm and closure conventions of [[def-sobolev-space-wkp-and-its-norm]].

Let W_h^0 be the continuous piecewise P1 scalar space, where P1(K) is the real scalar-polynomial space of total degree at most one on tetrahedron K. On K with barycentric coordinates lambda_0,...,lambda_3, the lowest-order Whitney edge space is spanned by phi_ij=lambda_i grad(lambda_j)-lambda_j grad(lambda_i) for its six oriented edges. Globally N_h^1 consists of these piecewise fields with one common oriented circulation integral_e u dot t_e ds on each shared edge e, where t_e is its chosen unit tangent; it is H(curl)-conforming. The face space N_h^2 consists of piecewise RT0 fields, RT0(K)={x -> a+c x:a in R3,c in R}, with one common oriented flux integral_F u dot n_F dS on each shared face F, where n_F is its oriented unit normal; it is H(div)-conforming in the graph space [[def-na-hdiv-space]]. N_h^3 consists of cellwise constants. These spaces are the full spaces in [[def-na-lowest-order-whitney-de-rham-spaces]]. Set S_h := W_h^0 intersect H_0^1(Omega), V_h := N_h^1 intersect H_0(curl;Omega), and M_h := N_h^2. The finite-dimensional map grad:S_h -> V_h is well-defined: for q in S_h, its weak gradient is L^2, curl(grad q)=0 distributionally, and a sequence from C_c^\infty converging to q in W^{1,2} has gradients converging to grad q in H(curl); also, on each tetrahedron grad q is constant and its common edge circulation is the endpoint difference of the single continuous function q. Take the canonical full-space nodal and edge reference bases from [[def-na-lowest-order-whitney-de-rham-spaces]]. Since S_h and V_h are finite-dimensional subspaces of the full nodal and edge spaces, choose any bases chi_1,...,chi_ng of S_h and phi_1,...,phi_ne of V_h obtained by dimensionless real linear combinations of those reference bases. Choose psi_1,...,psi_nb for M_h dual to all oriented face-flux degrees of freedom, and theta_1,...,theta_nc for N_h^3 dual to the cell-integral degrees of freedom, with theta_l=|K_l|^-1 on cell K_l and zero on the other cells. Thus chi_j is dimensionless, phi_i has units m^-1, psi_alpha has units m^-2, and theta_l has units m^-3. Define the real coordinate matrices C,D,G by curl(phi_i)=sum_alpha C_{alpha i} psi_alpha, div(psi_alpha)=sum_l D_{l alpha} theta_l, and grad(chi_j)=sum_i G_{ij} phi_i. These matrices are dimensionless representations of the oriented differentials; D is the face-to-cell incidence matrix in the face-moment basis, and changes of basis in S_h,V_h give the corresponding matrices for their PEC subspaces. Because curl grad=0 and div curl=0 on the full finite-element complex, DC=0 and CG=0. Here D denotes only the magnetic face-to-cell incidence matrix.

Write Sym_3(R) for the real symmetric 3 by 3 matrices. Let epsilon,mu:Omega -> Sym_3(R) be measurable, essentially bounded, time-independent coefficient fields with constants 0<a_epsilon<=b_epsilon<infinity and 0<a_mu<=b_mu<infinity such that almost everywhere

$$a_\varepsilon |v|^2\le v\cdot\varepsilon(x)v\le b_\varepsilon |v|^2,\qquad a_\mu |v|^2\le v\cdot\mu(x)v\le b_\mu |v|^2\quad(v\in\mathbb R^3).$$

Their units are F m^-1 and H m^-1. Pointwise inversion makes mu^-1 measurable, symmetric and essentially bounded, with eigenvalues between b_mu^-1 and a_mu^-1. These coefficient fields are explicit local model data; no material-realization or constitutive derivation is asserted. Let sigma:Omega -> Sym_3(R) be another measurable, essentially bounded, time-independent field with sigma(x) positive semidefinite almost everywhere and units S m^-1. Let J_ext:I -> L^2(Omega;R^3) be continuous in time and have units A m^-2.

Define the real matrices and current-load vector by

$$ (M_e)_{ij}:=\int_\Omega \phi_i\cdot\varepsilon\phi_j\,dx,\qquad (M_b)_{\alpha\beta}:=\int_\Omega \psi_\alpha\cdot\mu^{-1}\psi_\beta\,dx,\qquad S_{ij}:=\int_\Omega\phi_i\cdot\sigma\phi_j\,dx,\qquad j_i(t):=\int_\Omega\phi_i\cdot J_{\rm ext}(x,t)\,dx.$$

All integrals are finite because the mesh is finite, its basis functions are piecewise polynomial, and the coefficient fields are essentially bounded. M_e and M_b are symmetric positive definite on nonzero basis spaces: their quadratic forms are the positive coefficient-weighted L^2 norms of the represented fields; if a basis space is zero-dimensional, the positive-definiteness condition is vacuous. S is symmetric positive semidefinite. The oriented matrices satisfy DC=CG=0. The edge coefficients e_i have units V and the edge basis functions units m^-1; the face coefficients b_alpha have units Wb and the face basis functions units m^-2. The incidence matrices C,D,G are dimensionless, M_e has units F, M_b has units H^-1, S has units S, and j has units A.

For C1 coefficient vectors e:I -> R^ne and b:I -> R^nb, define E_h(t):=sum_i e_i(t)phi_i and B_h(t):=sum_alpha b_alpha(t)psi_alpha, and put H_h:=mu^-1 B_h in L^2. The perfect-electric-conductor (PEC) semidiscrete model is the weak Galerkin system

$$\int_\Omega \bigl(\varepsilon\,\partial_t E_h+\sigma E_h+J_{\rm ext}\bigr)\cdot v_h\,dx=\int_\Omega H_h\cdot\operatorname{curl}v_h\,dx\quad(v_h\in V_h),\qquad \partial_t B_h=-\operatorname{curl}E_h\quad\text{in }M_h.$$

Here H_h is required only to be L^2; no H(curl) regularity or boundary trace for it is asserted. Testing the first identity against the edge basis and expanding the second in the face basis gives exactly M_e dot e=C^T M_b b-Se-j and dot b=-Ce, the finite compatible matrix system. The quadratic semidiscrete energy is the finite Joule-valued quantity one-half times the integral of E_h dot epsilon E_h plus B_h dot mu^-1 B_h.

## Definition references

[[def-countable-choice]]

[[def-em-si-conventions]]

[[def-emx-finite-energy-boundary-model]]

[[def-emx-matrix-maxwell-system]]

[[def-na-hcurl-space]]

[[def-na-hdiv-space]]

[[def-na-lowest-order-whitney-de-rham-spaces]]

[[def-na-zero-tangential-hcurl]]

[[def-sobolev-space-wkp-and-its-norm]]

[[thm-na-lowest-order-discrete-de-rham-cohomology-and-harmonic-modes]]
