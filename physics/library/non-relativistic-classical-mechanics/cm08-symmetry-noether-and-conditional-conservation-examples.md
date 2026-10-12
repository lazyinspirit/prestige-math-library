---
page: cm08-symmetry-noether-and-conditional-conservation-examples
title: "Symmetry, Noether and conditional conservation — Examples"
status: draft
library: physics
items: []
examples:
  - ex-cm08-uniform-field-breaks-translation-and-boost
  - ex-cm08-pair-potential-charges-check
  - ex-cm08-rotating-chart-hamiltonian-not-mechanical-energy
  - ex-cm08-time-dependent-potential-breaks-energy
requires:
  - cm08-symmetry-noether-and-conditional-conservation
  - cm02-forces-initial-data-and-newtonian-flow
  - cm03-momentum-work-and-energy-balances
  - cm07-stationary-action-and-lagrangian-dynamics
  - cm01-framework-quantities-and-geometry
  - cm-math-variations
  - cm-math-geometry
---

Worked checks for
[[cm08-symmetry-noether-and-conditional-conservation]].
[[ex-cm08-uniform-field-breaks-translation-and-boost]] declares the
one-label global potential model ($d=0$) with the potential
$U=-m\,\mathbf g\cdot x$ and its explicit quadratic motion; the translation
condition holds exactly for dimensionless directions $a\perp\mathbf g$, the momentum
component along $a$ changes at rate $m\,a\cdot\mathbf g$, the boost charge
$K_{a}$, with units $\mathrm{kg\,m}$ for the velocity-valued boost parameter,
changes at rate
$t\,m\,a\cdot\mathbf g$, and the autonomous potential
keeps the mechanical energy
$\frac m2\lvert v_{0}\rvert^{2}-m\,\mathbf g\cdot x_{0}$ constant; the
numerical instance evaluates the failing and surviving charges at an explicit
time.
[[ex-cm08-pair-potential-charges-check]] works in a two-label global
potential model with potential $\psi(\lvert x_{1}-x_{2}\rvert^{2})$: the pair
force is antisymmetric and central, and translation and rotation invariance
make the total momentum, angular momentum, boost charge and mechanical energy
conserved. Its attractive Hooke-type specialisation
$\psi(s)=c_{0}+\kappa s$ uses $c_{0}$ in joules and $\kappa$ in
$\mathrm{kg\,s^{-2}}$; the rigid rotation with
$\Omega=\sqrt{2\kappa/\mu}$ has energy $c_{0}+2\kappa\rho^{2}$ and is
checked together with its charges and numerical values.
[[ex-cm08-rotating-chart-hamiltonian-not-mechanical-energy]] observes the
isotropic oscillator in the uniformly rotating chart $X(t,q)=R(t)q$: the
substituted Lagrangian has the chart momentum
$p=m(v+\boldsymbol\omega\times q)$ and chart Hamiltonian
$\lvert p\rvert^{2}/(2m)-p\cdot(\boldsymbol\omega\times q)+\frac k2\lvert q\rvert^{2}$,
which differs from the inertial mechanical energy by
$p\cdot(\boldsymbol\omega\times q)$; for $k=m\omega^{2}$ the circular motion
is a model motion whose chart Hamiltonian vanishes while its inertial
mechanical energy equals $m\omega^{2}r^{2}$, and the numerical instance
records both values.
[[ex-cm08-time-dependent-potential-breaks-energy]] declares the one-label
global potential model ($d=0$) with potential
$\frac k2\lvert x\rvert^{2}-f(t)\cdot x$: the
time-translation datum with a seconds-valued parameter satisfies the model
identity exactly when the drive is constant, the energy changes at rate
$-f'(t)\cdot x$ along motions, and for
the sinusoidally driven specialisation the explicit motion
$x_{p}=f_{0}\cos(\Omega t)\hat e/(k-m\Omega^{2})$ has nonzero energy
derivative at $t=\pi/(4\Omega)$, with a numerical instance at
$t=\pi/2$.
