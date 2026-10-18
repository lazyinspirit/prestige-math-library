---
page: nonlinear-parabolic-compactness-and-monotone-evolution
title: "Nonlinear parabolic compactness and monotone evolution"
status: published
items:
  - def-pe12-gelfand-triple
  - lem-pe12-w1p-compact-l2-embedding
  - lem-pe12-bochner-lp-mollification
  - lem-pe12-w0p-separable-reflexive
  - thm-pe12-bochner-lp-completeness
  - lem-pe12-outward-zero-brouwer
  - lem-pe12-quasiuniform-mass-inverse-decay
  - def-pe12-monotone-diffusion-flux
  - def-pe12-stable-conforming-fem-family
  - lem-pe12-evolution-energy-chain-rule
  - thm-pe12-aubin-lions-compactness
  - lem-pe12-space-time-gradient-weak-compactness
  - thm-pe12-discrete-aubin-lions-compactness
  - lem-pe12-boundary-preserving-quasi-interpolation
  - lem-pe12-minty-identification
  - thm-pe12-strong-monotone-residual-estimate
  - thm-pe12-l2-projector-w1p-stability
  - thm-pe12-backward-euler-galerkin-existence-energy
  - thm-pe12-monotone-fem-limit
examples: []
---

This page proves continuous and piecewise-constant discrete Aubin–Lions
compactness, then uses nonlinear backward Euler Galerkin steps, energy
bounds, weak space-time compactness and Minty's argument to identify a
subsequential limit for coercive monotone diffusion. The Sobolev state space
is $W_0^{1,p}(\Omega)$ on any bounded open domain, including $d=1$.

The concrete $H=L^2(\Omega)$ branch uses $V=W_0^{1,p}(\Omega)$ with
$p>\max(1,2d/(d+2))$. In $d=1$, compactness follows from zero extension,
the one-dimensional fundamental theorem and Arzelà–Ascoli; in $d\ge2$, the
proof reduces to a subcritical exponent on an arbitrary bounded open set.
The page states the Axiom of Choice required by its compact Sobolev embedding
and weak compactness interfaces. The energy identity and continuous $H$ trace follow from $u\in L^p(0,T;V)$
and $u'\in L^{p'}(0,T;V^*)$ for every $p>1$; no prior $L^\infty(H)$
assumption is needed.

The FEM convergence theorem uses a uniformly $V$-bounded $H$-orthogonal
projector that converges strongly on $V$. Local mass-matrix decay and a
boundary-preserving quasi-interpolant prove this interface for fixed-degree
globally quasi-uniform shape-regular simplex meshes in $d\ge2$ and directly
defined interval partitions in $d=1$. Uniform Kuhn/Freudenthal meshes of a
unit cube and uniform meshes of a unit interval give explicit nonempty
instances. Spatial and time refinement are independent; arbitrary
conforming families still meet the abstract projector hypotheses explicitly.

Theorem paths assume the literal hypotheses of
[[parabolic-finite-element-methods]] for the Hilbert evolution convention
and [[homology-axioms-degree-and-classical-applications]] only for its
published Brouwer fixed-point theorem. The nonlinear flux existence,
compactness and identification arguments are proved locally.

The quantitative residual estimate is separate and assumes a strong
$p$-monotonicity inequality. No smooth error rate is asserted for
degenerate porous-medium fronts.

Companion examples: [[nonlinear-parabolic-compactness-and-monotone-evolution-examples]].
