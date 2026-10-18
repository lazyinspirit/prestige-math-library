---
page: energy-stable-incompressible-navier-stokes-discretization
title: "Evolutionary incompressible flow discretization"
status: draft
items: [lem-na-solenoidal-scalar-equations-give-weak-continuity, def-na-evolutionary-skew-convective-form, lem-na-evolutionary-skew-convective-form-bound, def-na-evolutionary-incompressible-ns-weak-solution, lem-na-evolutionary-ns-weak-form-is-well-defined, def-na-solenoidal-energy-weak-ns-velocity, def-na-mini-navier-stokes-backward-euler-scheme, thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d, lem-na-mini-be-scheme-is-well-defined, lem-na-continuous-pressure-recovery-from-solenoidal-residual, lem-na-mini-fortin-l2-approximation, thm-na-mini-be-step-existence-energy, lem-na-mini-weak-solenoidal-compactness, thm-na-mini-solenoidal-stokes-projection-error, thm-na-mini-navier-stokes-be-subsequential-limit, lem-na-solenoidal-evolution-integrated-pressure-recovery, thm-na-mini-be-smooth-velocity-error, thm-na-mini-be-smooth-integrated-pressure-error, rem-na-pe06-pressure-recovery-escalation]
examples: []
---

# Evolutionary incompressible flow discretization

This draft treats Newtonian incompressible Navier–Stokes on bounded connected Lipschitz polygonal or polyhedral domains in dimensions two and three, with viscosity $\nu>0$, homogeneous Dirichlet velocity data, and pressure in the zero-mean gauge $L^2_0(D)$. The bilinear viscosity convention is $a_\nu(u,v)=2\nu(\varepsilon(u),\varepsilon(v))$ and $b(v,p)=-(p,\operatorname{div}v)$. The nonlinear term is the real skew form in [[def-na-evolutionary-skew-convective-form]]; its cancellation is independent of pointwise discrete incompressibility.

## Evolution problem and discrete step

The energy weak formulation and its time-space integrability are stated in [[def-na-evolutionary-incompressible-ns-weak-solution]] and [[lem-na-evolutionary-ns-weak-form-is-well-defined]]. The weak MINI kernel $Z_h$ is distinguished from the exact divergence-free kernel; the scheme uses the stable continuous P1-bubble/P1 pair supplied by [[mixed-finite-elements-and-stokes-stability]].

[[def-na-mini-navier-stokes-backward-euler-scheme]] defines the mixed backward Euler equations with cell-average forcing. [[thm-na-mini-be-step-existence-energy]] proves finite-step existence by an outward-pointing Brouwer argument and records both the work-form energy inequality and its mesh-independent consequence. The coercivity, pressure reconstruction at each finite step, skew cancellation, and forcing estimate are given in the local proof.

## Velocity compactness, limits, and uniqueness

The Fortin map estimates in [[lem-na-mini-fortin-l2-approximation]] and the finite-probe argument in [[lem-na-mini-weak-solenoidal-compactness]] give strong $L^2_tL^2_x$ compactness without treating weakly divergence-free MINI velocities as pointwise divergence-free. The local [[lem-na-solenoidal-scalar-equations-give-weak-continuity]] turns the scalar test identities into a weakly continuous $H_\sigma$ representative. [[thm-na-mini-navier-stokes-be-subsequential-limit]] proves the subsequential solenoidal velocity equation, weak initial trace, and work-form energy inequality for arbitrary vanishing mesh and time-step sizes. The additive [[lem-na-solenoidal-evolution-integrated-pressure-recovery]] reconstructs a unique mean-zero pressure distribution with a bounded weakly continuous primitive for that limit, and proves bounded discrete pressure primitives and convergence of the discrete pressures as time distributions. These conclusions do not place the limit pressure in $L^{4/3}_tL^2_0$; that original pressure-bearing clause remains escalated.

[[thm-na-ns-weak-solution-uniqueness-2d-and-weak-strong-3d]] proves unconditional uniqueness in two dimensions and weak–strong uniqueness in three dimensions only under its explicit strong-solution regularity and equation hypotheses.

## Smooth branch and open pressure obligation

[[thm-na-mini-solenoidal-stokes-projection-error]] supplies the finite-dimensional energy projection and its MINI approximation rate. [[thm-na-mini-be-smooth-velocity-error]] proves a fully discrete velocity estimate on a smooth no-slip branch, including the required time-step restriction and explicit viscosity dependence. Its Gronwall factor contains $\nu^{-3}$; it makes no Reynolds-uniform claim. The additive [[thm-na-mini-be-smooth-integrated-pressure-error]] proves the corresponding first-order estimate for the pressure primitive and a precise negative time norm under the same initialization.

The PE06 design asks for instantaneous pressure regularity and an instantaneous smooth pressure-error rate in addition to these primitive results. [[rem-na-pe06-pressure-recovery-escalation]] records the exact missing full-time-derivative and discrete derivative-error inputs. The proposed uniform $H^1$ stability of the $L^2$-orthogonal projector onto $Z_h$ is false on the square MINI family and is not used as a supplier. The source's pressure-free formulation does not establish impossibility for the exact Newtonian and $L^2$-forcing claims here.

## Worked cases

The periodic Taylor–Green solution, the no-forcing discrete energy budget, the zero-mean pressure gauge, a matching unit-square mesh family, and a conditional three-dimensional computation are on [[energy-stable-incompressible-navier-stokes-discretization-examples]]. The periodic vortex uses a torus and is explicitly separate from the no-slip theorem branch.
