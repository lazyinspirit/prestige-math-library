---
page: phase-field-and-energy-dissipative-discretization
title: Phase-field and dissipative gradient-flow computation
status: published
items:
  - def-phase-field-gradient-flow-and-double-well
  - def-phase-field-discrete-realizations
  - lem-phase-field-neumann-laplacian-kernel-and-gauge
  - lem-phase-field-interval-p1-projector-stability
  - def-phase-field-stabilized-semi-implicit-variant
  - alg-phase-field-sav-cahn-hilliard-step
  - alg-phase-field-convex-splitting-backward-euler
  - thm-phase-field-sav-modified-energy-law
  - thm-phase-field-convex-splitting-step-existence-and-energy
  - thm-phase-field-convex-splitting-ac-ch-time-error
  - thm-phase-field-convex-splitting-mesh-time-convergence
examples: []
---

This page fixes the quartic double-well energy and the no-flux Allen–Cahn
(AC) and Cahn–Hilliard (CH) gradient flows in
[[def-phase-field-gradient-flow-and-double-well]]. The finite-energy initial
class is $H^1(\Omega)\cap L^4(\Omega)$ on a bounded connected Lipschitz
domain. AC is the $L^2$ gradient flow; CH uses the mean-zero $H^{-1}$ metric
and conserves the spatial mean. In dimensions two and three, the stated
$H^1\hookrightarrow L^4$ consequences require the corresponding bounded
extension-domain hypotheses and the Axiom of Choice. In dimensions four and
higher, the page does not assert that every $H^1$ state has finite quartic
energy. No maximum principle or sharp-interface limit is part of these
definitions.

[[def-phase-field-discrete-realizations]] defines two distinct no-flux
realizations. The finite-volume branch uses cell-volume mass and the symmetric
sum of interior TPFA conductances; physical-boundary fluxes are zero and add
no boundary penalty. The conforming branch is on $\Omega=(0,L)$: its space is
affine between cell centers and constant on the boundary half-cells, with the
exact $L^2$ mass and exact integrals of both convex-split potential terms.
For either connected finite realization, the operator $A_h$ approximates
$-\Delta$. [[lem-phase-field-neumann-laplacian-kernel-and-gauge]] proves that
its kernel consists of constants, its range is the mean-zero subspace, and
its inverse there defines $A_h^\dagger$; for a general source, this operator
first projects onto the mean-zero subspace. Its Poincaré constant may depend
on the mesh. [[finite-volume-diffusion-and-mimetic-fluxes]] supplies the mesh
and TPFA conventions. The finite-dimensional results do not assert a Neumann
finite-volume PDE limit.

For fixed positive $\varepsilon,\kappa,M$ and step size $\tau>0$, the split
is $F_\varepsilon=F_c-F_e$, with
$F_c(s)=s^4/(4\varepsilon^2)+s^2/(2\varepsilon^2)$ and
$F_e(s)=s^2/\varepsilon^2-1/(4\varepsilon^2)$. The selected backward-Euler
method [[alg-phase-field-convex-splitting-backward-euler]] minimizes a
strictly convex objective: AC minimizes over the full space, while CH
minimizes over the affine set with the previous discrete mean. The proved
finite-dimensional theorem gives unique steps, CH mass conservation, and
decay of the original physical discrete energy for both realizations
([[thm-phase-field-convex-splitting-step-existence-and-energy]]). Its smooth
fixed-mesh time estimate is conditional on a $C^2$ semidiscrete trajectory
with compact range; its constants depend on the mesh, $\varepsilon$, the
trajectory, and final time, so it is not a spatial error estimate
([[thm-phase-field-convex-splitting-ac-ch-time-error]]).

Only the conforming interval branch has a mesh-and-time PDE limit here.
[[lem-phase-field-interval-p1-projector-stability]] proves the required
uniform $H^1$ stability and convergence of its exact-$L^2$ projector. With
fixed $\varepsilon$, $u_0\in H^1(0,L)$, and independent $h,\tau\to0$,
and initialization $u_h^0=P_hu_0$,
[[thm-phase-field-convex-splitting-mesh-time-convergence]] proves
subsequential strong space-time $L^2$ and weak $L^2(H^1)$ convergence to weak
no-flux AC or CH solutions. This theorem assumes the Axiom of Choice for
PE12 compactness and weak subsequence extraction. Its compactness step uses
the actual PE12 discrete Aubin–Lions theorem from
[[nonlinear-parabolic-compactness-and-monotone-evolution]]. This is a
one-dimensional convergence result, not a higher-dimensional or graph-mesh
limit. NA29 and NA36 remain quantitative conforming finite-element error
context; this selected branch claims no spatial error rate. The page-level
T04 interface
[[imex-and-operator-splitting-methods]] remains available as context; the
selected proof invokes no ARS, Lie, or Strang result.

On either stated finite-dimensional no-flux realization, with
$M,\tau,\kappa,C_0>0$, the SAV equations in
[[alg-phase-field-sav-cahn-hilliard-step]] have a proved unique solve and
dissipate the modified energy
$\kappa\langle A_hu,u\rangle_h/2+r^2$, not necessarily the original physical
energy ([[thm-phase-field-sav-modified-energy-law]]). The auxiliary variable
is independent after each step. The stabilized semi-implicit update is a
separate definition in
[[def-phase-field-stabilized-semi-implicit-variant]]; this page imports no
energy law, unconditional solvability, maximum-principle, or error estimate
for it.

Companion examples: [[phase-field-and-energy-dissipative-discretization-examples]].
