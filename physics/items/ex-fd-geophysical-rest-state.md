---
id: ex-fd-geophysical-rest-state
kind: example
title: Resting depth and stratification states
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-fd-rotating-stratified-shallow-equations
  - thm-fd-shallow-water-smooth-energy
  - def-countable-choice
  - thm-lebesgue-measure-of-a-box-of-every-kind
dependency_roles:
  def-fd-rotating-stratified-shallow-equations: mathematical-premise
  thm-fd-shallow-water-smooth-energy: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
sources:
  references:
    - title: "Geoffrey K. Vallis, Fluid Dynamics of the Atmosphere and Ocean, University of Exeter lecture notes, Autumn 2018, §§1.6.3 and 2.4.2"
      url: "https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf"
    - title: "Darryl D. Holm, Ideal shallow water dynamics in a rotating frame, Imperial College London MPE CDT PDE lecture notes, Autumn 2016, §§1.1 and 1.4"
      url: "https://www.ma.ic.ac.uk/~dholm/classnotes/MPE2015-RSWlectures-6Dec.pdf"
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Example

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $I\subseteq\mathbb R$ be a nonempty open time interval. For $d=2,3$, let $\mathbb T^d:=\mathbb R^d/(2\pi\mathbb Z)^d$ and represent fields by $2\pi$-periodic lifts, integrating over $Q_d=[0,2\pi]^d$ with $dx=d\lambda_d(x)$ as defined for the equation family. For any constants $f\in\mathbb R$, $N>0$, and $\nu,\kappa\ge0$, the fields $u=b=\pi=0$ on $I\times\mathbb T^3$ solve the rotating linear stratified equations and have $E_s=\frac12\int_{Q_3}(|u|^2+b^2/N^2)\,dx=0$. For any constants $f\in\mathbb R$, $g>0$, and $H>0$, the fields $h\equiv H$, $v\equiv0$ on $I\times\mathbb T^2$ solve the one-layer rotating shallow-water equations and have normalized total energy $E_h=\int_{Q_2}(h|v|^2/2+gh^2/2)\,dx=2\pi^2gH^2$. Both are stationary smooth periodic states of the stated mathematical systems, not observed fluid states.

## Example references

Rotating stratified and shallow-water equations: [[def-fd-rotating-stratified-shallow-equations]].

Countable Choice $\mathrm{AC}_\omega$, assumed for the Lebesgue measure convention: [[def-countable-choice]].

Lebesgue measurability and volume of $Q_d$: [[thm-lebesgue-measure-of-a-box-of-every-kind]].

The smooth rotating shallow-water energy balance: [[thm-fd-shallow-water-smooth-energy]].

## Facts & Assumptions

**Given:** Countable Choice $\mathrm{AC}_\omega$, $f\in\mathbb R$, $N>0$, $g>0$, $H>0$, and the periodic equation systems and energy definitions from the stated suppliers.

[A1] Countable Choice $\mathrm{AC}_\omega$ means that every $\mathbb N$-indexed family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] [[def-fd-rotating-stratified-shallow-equations]]: the rotating, linear, constant-stratification Boussinesq equation family is $u_t+f e_3\times u+\nabla\pi=b e_3+\nu\Delta u$, $\nabla\cdot u=0$, and $b_t+N^2u_3=\kappa\Delta b$.

[F2] [[def-fd-rotating-stratified-shallow-equations]]: the inviscid one-layer shallow-water equation family is $h_t+\nabla\cdot(hv)=0$ and $(hv)_t+\nabla\cdot(hv\otimes v)+\nabla(gh^2/2)+fhJv=0$.

[F3] [[thm-fd-shallow-water-smooth-energy]]: for every smooth periodic positive-depth solution of the flat-bottom, inviscid shallow-water system, the energy density $E=h|v|^2/2+gh^2/2$ satisfies $\partial_tE+\nabla\cdot((E+gh^2/2)v)=0$ and its integral over $Q_2$ is conserved.

[F4] Under $\mathrm{AC}_\omega$, the closed box $Q_d=[0,2\pi]^d$ is Lebesgue measurable and has measure $(2\pi)^d$ ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Verification

1.1 For $u=b=\pi=0$, every time derivative, spatial derivative, Coriolis term, diffusion term, and buoyancy coupling in the stratified equations vanishes; hence all equations and incompressibility hold pointwise. The stated energy integrand is identically zero. [given, F1, algebra]

1.2 For $h\equiv H>0$ and $v\equiv0$, the mass time derivative and flux vanish, and every term in the conservative momentum equation vanishes because $h$ is spatially constant and $v=0$. Thus this is a smooth periodic solution to which [F3] applies. [given, F2, F3, algebra]

2.1 Substitution into [F3]'s energy density gives $E= gH^2/2$. By [F4], the cell $Q_2$ has Lebesgue area $(2\pi)^2$, so its integral is $(2\pi)^2gH^2/2=2\pi^2gH^2$, independent of time. [given, A1, F3, F4, step 1.2, algebra] ∎
