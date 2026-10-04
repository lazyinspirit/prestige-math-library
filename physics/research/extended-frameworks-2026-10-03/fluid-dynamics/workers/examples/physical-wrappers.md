# Conditional physical interpretation wrappers

Research only. These wrappers establish predictions conditional on the explicitly adopted continuum, stress and boundary models. They contain no empirical premises. Units and primitive/derived roles are exactly X00, including μ as constitutive input and pressure as incompressible multiplier. The corresponding mathematical theorem proves every formula; these wrappers supply only the required model-to-mathematics identification. Each wrapper inherits its supplier’s full domain/regularity/data hypotheses and ACω where stated.

<a id="px-incompressible-euler"></a>

## Physical incompressible Euler model definition

In a specified Newtonian inertial chart and spatial region Ω, a smooth incompressible inviscid model has constant density ρ₀>0 (kg/m³), velocity u (m/s), scalar pressure multiplier p (Pa), div u=0 and stress σ=−pI. Adopt the restricted inviscid constitutive assumption (zero viscous stress) and the stated mass/momentum balances, with specified body acceleration b (m/s²), initial and impermeable-slip or other chosen boundary data. They give ρ₀(u_t+u·∇u)=−∇p+ρ₀b. Pressure is a constraint multiplier, unique only modulo a function of time after the velocity/data fix its gradient; no equation of state p=P(ρ₀) is imposed. The classical solution notion here requires u C¹ in time/C² in space and p C¹ in space on the stated domain; use the stronger smoothness of each consumer. This is an adopted ideal continuum model, not a deduction of zero viscosity in actual liquids. Source: Stewart MIT fluid chapter's actual §6.4 potential-flow/sphere argument, read extent in supplier-reading.md. Density, motion and balances are primitive adopted model data; pressure's multiplier role is part of this formulation. Stress and force are defined from p. The barotropic model with constitutively determined P(ρ) is a separate branch and cannot replace this definition at fixed density with nonconstant pressure.

<a id="px01"></a>

## PX01 — Exact Reynolds and Mach nondimensionalization — worked interpretation

**Given:** The adopted incompressible constant-density Newtonian fluid model with stress σ=−pI+μ(Du+Duᵀ), μ>0, and the stated boundary/initial data, all hypotheses in X01, and the specified observables. Scaling is a coordinate and unit substitution into the adopted PDE. Re and Ma are derived ratios; no small-parameter convergence or regime applicability follows. For Ma the specified compressible barotropic branch and its c²>0 sound-speed derivative are additionally assumed.

1.1 Under the adopted incompressible constant-density Newtonian balances, componentwise div[μ(Du+Duᵀ)]=μΔu since μ is constant and ∂j∂i uj=∂i div u=0. Consequently the momentum equation is exactly N(u,p)=0 with ν=μ/ρ₀, while the mass condition is div u=0. Its chosen geometry, smoothness and prescribed data are those in X01. The compressible Mach scaling assertion additionally uses the explicitly given barotropic branch and c²=P′(ρ₀)>0; it is an algebraic scaling statement only. [given, algebra]

1.2 Apply thm-fd-x01 to those same fields/parameters under its full stated hypotheses. Its complete calculation in proofs.md establishes precisely the formulas, counterexample or quantitative estimate in the wrapper scope. Flux, stress, circulation, energy and force are evaluated by their X00 definitions with the stated normal conventions, so the mathematical formula is the conditional prediction for those observables, retaining excluded domains, assumed smooth existence, ACω when present and every approximation qualification. Nothing in this identification proves that the adopted model or boundary data describe an experiment. [step 1.1, given] ∎

<a id="px04"></a>

## PX04 — Plane and pipe Couette–Poiseuille verification — worked interpretation

**Given:** The adopted incompressible constant-density Newtonian fluid model with stress σ=−pI+μ(Du+Duᵀ), μ>0, and the stated boundary/initial data, all hypotheses in X04, and the specified observables. The stated infinite or fully developed channel/pipe geometry and prescribed wall velocities are exact adopted boundary conditions; stress components and fluxes are calculated from those prescribed fields.

1.1 Under the adopted incompressible constant-density Newtonian balances, componentwise div[μ(Du+Duᵀ)]=μΔu since μ is constant and ∂j∂i uj=∂i div u=0. Consequently the momentum equation is exactly N(u,p)=0 with ν=μ/ρ₀, while the mass condition is div u=0. Its chosen geometry, smoothness and prescribed data are those in X04. [given, algebra]

1.2 Apply thm-fd-x04 to those same fields/parameters under its full stated hypotheses. Its complete calculation in proofs.md establishes precisely the formulas, counterexample or quantitative estimate in the wrapper scope. Flux, stress, circulation, energy and force are evaluated by their X00 definitions with the stated normal conventions, so the mathematical formula is the conditional prediction for those observables, retaining excluded domains, assumed smooth existence, ACω when present and every approximation qualification. Nothing in this identification proves that the adopted model or boundary data describe an experiment. [step 1.1, given] ∎

<a id="px05"></a>

## PX05 — Vortex topology and global-Bernoulli counterexamples — worked interpretation

**Given:** The adopted incompressible inviscid Euler model defined above, with constant positive density, constraint pressure p and zero body acceleration, all hypotheses in X05, and the specified observables. Use the explicit punctured vortex/solid-rotation fields and their pressures. The excluded axis and regularity are part of the chosen domain. The conclusion about circulation/potential or streamline Bernoulli is conditional on those exact fields.

1.1 The adopted incompressible inviscid stress is σ=−pI, with p a free constraint multiplier and ρ₀ constant. Componentwise div σ=−∇p; the adopted continuum momentum balance with zero body acceleration therefore becomes u_t+u·∇u=−∇p/ρ₀, and its mass constraint is div u=0. This is exactly the incompressible Euler equation independently verified by the explicit velocity and spatially varying multiplier pressure in X05. No constitutive restriction p=P(ρ₀) is imposed. The specified boundary conditions and excluded domains are part of the adopted model. [given, algebra]

1.2 Apply thm-fd-x05 to those same fields/parameters under its full stated hypotheses. Its complete calculation in proofs.md establishes precisely the formulas, counterexample or quantitative estimate in the wrapper scope. Flux, stress, circulation, energy and force are evaluated by their X00 definitions with the stated normal conventions, so the mathematical formula is the conditional prediction for those observables, retaining excluded domains, assumed smooth existence, ACω when present and every approximation qualification. Nothing in this identification proves that the adopted model or boundary data describe an experiment. [step 1.1, given] ∎

<a id="px-creeping-postulate"></a>

## Restricted creeping-flow force-balance postulate

Adopt an alternative steady incompressible force-balance model, on the specified Newtonian spatial domain and with the specified stress/data: div u=0 and div σ+ρ₀b=0, with constant ρ₀>0 and the Newtonian stress definition σ=−pI+μ(Du+Duᵀ), μ>0. For X06 and the Stokes comparison in X07 take b=0. This replaces the full material-acceleration momentum law for this field. It does not simultaneously assert ρ₀(u_t+u·∇u)=div σ+ρ₀b for the same Stokes field. The adopted balance is an ideal creeping-flow restriction motivated by Stewart §6.8's small-Re scaling; source inspection does not turn that heuristic into an NS solution-error theorem. Pressure is a multiplier, the velocity/pressure domain, boundary/far-field data and regularity are exactly those of each consumer, and stress has Pa while each term in this balance has N/m³. This postulate supplies no empirical premise or proof of physical applicability. In PX07 it is imposed on the auxiliary Stokes field only; the distinct NS field retains the full continuum momentum postulate.

Source formulation and scope: Iain Stewart MIT8.09 §6.8, printed135–138/PDF139–142, complete argument personally read as recorded in supplier-reading.md; original complete source URL is recorded in sources.json. No deductive Proof is attached to this adopted model assumption.

<a id="px-stokes-model"></a>

## Restricted incompressible creeping-flow model definition

On a specified region Ω, adopt constant positive density and μ>0, div u=0, Newtonian stress σ=−pI+μ(Du+Duᵀ), and post-fd-creeping-force-balance, giving the restricted steady force balance div σ=0 with zero body acceleration. This alternative model replaces rather than simultaneously adopting the full acceleration balance for the same field; it is not derived from Re alone. Therefore μΔu=∇p with pressure multiplier p. Prescribe the stated no-slip boundary velocities and, for exterior spheres, the uniform far-field velocity and X06 decay class. Classical solutions require u C² and p C¹ up to each finite smooth boundary, with stronger smoothness as used in the consumers. μ has Pa s, u m/s, p Pa; stress and force are derived observables. The stationary Stokes solution is used as an auxiliary comparison model in PX07; the NS solution there retains its full convective acceleration. MIT Stewart §6.8 actually read source argument motivates this scoped assumption without providing an unconditional approximation error.

<a id="px06"></a>

## PX06 — Exterior sphere Stokes solution, force and decay-class uniqueness — worked interpretation

**Given:** The alternative restricted creeping-flow model with stress σ=−pI+μ(Du+Duᵀ), μ>0, and the stated boundary/far-field data, all hypotheses in X06, and the specified observables. For this wrapper adopt def-fd-creeping-stokes-model above: its adopted balance contains no material-acceleration term, an alternative restricted force law. No claim of an NS limit or finite-Re error is made. The sphere is no-slip, far field and decay class are exactly X06. The observable force on the solid is defined by ∫σn dA with n directed from the solid into fluid.

1.1 The adopted alternative creeping-flow balance contains no material-acceleration term. It does not assert that the kinematic material acceleration of its velocity field vanishes. With constant μ and div u=0, stress divergence is −∇p+μΔu because ∂j∂i uj=∂i div u=0. Thus the restricted force balance gives μΔu=∇p, exactly the Stokes exterior PDE with the no-slip sphere and uniform far-field decay conditions in X06. This adoption itself supplies no bound on the acceleration neglected relative to Navier–Stokes. [given, algebra]

1.2 Apply thm-fd-x06 to those same fields/parameters under its full stated hypotheses. Its complete calculation in proofs.md establishes precisely the formulas, counterexample or quantitative estimate in the wrapper scope. Flux, stress, circulation, energy and force are evaluated by their X00 definitions with the stated normal conventions, so the mathematical formula is the conditional prediction for those observables, retaining excluded domains, assumed smooth existence, ACω when present and every approximation qualification. Nothing in this identification proves that the adopted model or boundary data describe an experiment. [step 1.1, given] ∎

<a id="px07"></a>

## PX07 — Bounded-domain Stokes residual estimate — worked interpretation

**Given:** The adopted incompressible constant-density Newtonian fluid model with stress σ=−pI+μ(Du+Duᵀ), μ>0, and the stated boundary/initial data, all hypotheses in X07, and the specified observables. Assume the actual smooth stationary NS and Stokes comparison solutions already exist with identical boundary data. The derived quantitative difference estimate uses their evaluated convection residual, never Re alone. The restricted Stokes comparison is separately adopted as the auxiliary def-fd-creeping-stokes-model above.

1.1 For the already existing stationary incompressible Newtonian solution, stress divergence is −∇p+μΔu and its full balance retains ρ₀(u·∇)u. The separately adopted auxiliary Stokes solution sets acceleration to zero. Subtracting the two balances, with identical boundary velocities, gives −μΔw+∇q=−ρ₀(u_NS·∇)u_NS and zero boundary trace for w=u_NS−u_S. This is exactly the residual system and its explicit Poincare hypotheses in X07. [given, algebra]

1.2 Apply thm-fd-x07 to those same fields/parameters under its full stated hypotheses. Its complete calculation in proofs.md establishes precisely the formulas, counterexample or quantitative estimate in the wrapper scope. Flux, stress, circulation, energy and force are evaluated by their X00 definitions with the stated normal conventions, so the mathematical formula is the conditional prediction for those observables, retaining excluded domains, assumed smooth existence, ACω when present and every approximation qualification. Nothing in this identification proves that the adopted model or boundary data describe an experiment. [step 1.1, given] ∎

<a id="px08"></a>

## PX08 — Exact viscous diffusion layer and material-circulation decay — worked interpretation

**Given:** The adopted incompressible constant-density Newtonian fluid model with stress σ=−pI+μ(Du+Duᵀ), μ>0, and the stated boundary/initial data, all hypotheses in X08, and the specified observables. Take the half-space wall-start model on t>0,y>0 excluding its incompatible corner, or the specified periodic sine shear and material loop. The layer bound and circulation history concern those exact ideal fields.

1.1 Under the adopted incompressible constant-density Newtonian balances, componentwise div[μ(Du+Duᵀ)]=μΔu since μ is constant and ∂j∂i uj=∂i div u=0. Consequently the momentum equation is exactly N(u,p)=0 with ν=μ/ρ₀, while the mass condition is div u=0. Its chosen geometry, smoothness and prescribed data are those in X08. [given, algebra]

1.2 Apply thm-fd-x08 to those same fields/parameters under its full stated hypotheses. Its complete calculation in proofs.md establishes precisely the formulas, counterexample or quantitative estimate in the wrapper scope. Flux, stress, circulation, energy and force are evaluated by their X00 definitions with the stated normal conventions, so the mathematical formula is the conditional prediction for those observables, retaining excluded domains, assumed smooth existence, ACω when present and every approximation qualification. Nothing in this identification proves that the adopted model or boundary data describe an experiment. [step 1.1, given] ∎

<a id="px09"></a>

## PX09 — Barotropic Kelvin and Bernoulli with exact hypotheses — worked interpretation

**Given:** The adopted barotropic inviscid Euler model with the positive-density and conservative-force assumptions in X00, all hypotheses in X09, and the specified observables. Adopt barotropic pressure and conservative body acceleration −∇V, and the smooth material-loop/steady-flow hypotheses. No circulation theorem is inferred for viscous, shocked or generic nonbarotropic motion.

1.1 Under the adopted barotropic inviscid stress σ=−P(ρ)I and conservative body acceleration −∇V, the momentum balance becomes D_tu=−ρ⁻¹∇P(ρ)−∇V for the positive, possibly varying density ρ. Together with the stated smooth continuity equation this is the barotropic Euler system used in X09. Its enthalpy derivative P′(ρ)/ρ and material-loop hypotheses are exactly those in that supplier; no independent incompressible multiplier pressure is substituted. [given, algebra]

1.2 Apply thm-fd-x09 to those same fields/parameters under its full stated hypotheses. Its complete calculation in proofs.md establishes precisely the formulas, counterexample or quantitative estimate in the wrapper scope. Flux, stress, circulation, energy and force are evaluated by their X00 definitions with the stated normal conventions, so the mathematical formula is the conditional prediction for those observables, retaining excluded domains, assumed smooth existence, ACω when present and every approximation qualification. Nothing in this identification proves that the adopted model or boundary data describe an experiment. [step 1.1, given] ∎

<a id="px10"></a>

## PX10 — Conditional nonlinear Couette energy stability — worked interpretation

**Given:** The adopted incompressible constant-density Newtonian fluid model with stress σ=−pI+μ(Du+Duᵀ), μ>0, and the stated boundary/initial data, all hypotheses in X10, and the specified observables. Assume a smooth solution on the stated interval exists with periodic horizontal boundaries, matched Couette walls, and zero perturbation trace. The energy conclusion is conditional stability on that interval, not global existence or an optimal transition threshold.

1.1 Under the adopted incompressible constant-density Newtonian balances, componentwise div[μ(Du+Duᵀ)]=μΔu since μ is constant and ∂j∂i uj=∂i div u=0. Consequently the momentum equation is exactly N(u,p)=0 with ν=μ/ρ₀, while the mass condition is div u=0. Its chosen geometry, smoothness and prescribed data are those in X10. [given, algebra]

1.2 Apply thm-fd-x10 to those same fields/parameters under its full stated hypotheses. Its complete calculation in proofs.md establishes precisely the formulas, counterexample or quantitative estimate in the wrapper scope. Flux, stress, circulation, energy and force are evaluated by their X00 definitions with the stated normal conventions, so the mathematical formula is the conditional prediction for those observables, retaining excluded domains, assumed smooth existence, ACω when present and every approximation qualification. Nothing in this identification proves that the adopted model or boundary data describe an experiment. [step 1.1, given] ∎

<a id="px13"></a>

## PX13 — Exterior potential sphere and zero ideal force — worked interpretation

**Given:** The adopted incompressible inviscid Euler model defined above, with constant positive density, constraint pressure p and zero body acceleration, all hypotheses in X13, and the specified observables. Adopt the smooth inviscid incompressible constant-density branch with an impermeable slip sphere. Its stress is σ=−pI, so the force observable uses pressure traction alone. No-slip viscosity is not a premise of this prediction.

1.1 The adopted incompressible inviscid stress is σ=−pI, with p a free constraint multiplier and ρ₀ constant. Componentwise div σ=−∇p; the adopted continuum momentum balance with zero body acceleration therefore becomes u_t+u·∇u=−∇p/ρ₀, and its mass constraint is div u=0. This is exactly the incompressible Euler equation independently verified by the explicit velocity and spatially varying multiplier pressure in X13. No constitutive restriction p=P(ρ₀) is imposed. The specified boundary conditions and excluded domains are part of the adopted model. [given, algebra]

1.2 Apply thm-fd-x13 to those same fields/parameters under its full stated hypotheses. Its complete calculation in proofs.md establishes precisely the formulas, counterexample or quantitative estimate in the wrapper scope. Flux, stress, circulation, energy and force are evaluated by their X00 definitions with the stated normal conventions, so the mathematical formula is the conditional prediction for those observables, retaining excluded domains, assumed smooth existence, ACω when present and every approximation qualification. Nothing in this identification proves that the adopted model or boundary data describe an experiment. [step 1.1, given] ∎
