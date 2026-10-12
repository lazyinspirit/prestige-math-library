---
page: qm-central-potentials-and-hydrogen
title: Qm Central Potentials And Hydrogen
status: draft
library: physics
items:
  - lem-nrqm-central-exponential-moments
  - lem-nrqm-central-free-operator-differential-identification
  - def-nrqm-central-framework-central-potential-model
  - pthm-nrqm-central-spherical-reduction-of-smooth-states
  - def-nrqm-central-framework-coulomb-and-hydrogen-model
  - pthm-nrqm-central-coulomb-energy-observable-and-flow
  - pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy
  - pthm-nrqm-central-coulomb-bound-state-radial-distributions
  - pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum
  - rem-nrqm-central-scope-and-empirical-status
examples: []
requires:
  - qm-composites-entanglement-and-reduced-states
  - qm-math-coulomb
  - qm-one-dimensional-potentials
  - qm-math-composites
  - qm-framework-and-quantities
  - qm-massive-particle-kinematics
  - qm-observables-and-born-probabilities
  - qm-state-geometry
  - qm-autonomous-dynamics
  - qm-math-orbital-and-spin
---

This page declares the central-potential model of the pair, its Coulomb and
two-body hydrogen specialization, and derives the model's spherical reduction,
energy observable, bound spectrum, radial distributions and two-body
threshold reading, with the exclusions and empirical qualifications of the
declared model.

The supporting mathematics comes first.
[[lem-nrqm-central-exponential-moments]] evaluates the half-line moments
$\int_{0}^{\infty}r^{k}e^{-\lambda r}dr=k!/\lambda^{k+1}$ used by the
low-lying radial computations,
[[lem-nrqm-central-free-operator-differential-identification]] identifies the
three-dimensional free Schr\"odinger operator of the composite-math page with
the weak Laplacian on its Sobolev domain, and
[[lem-nrqm-central-positive-scaling-spectral-measure]] transfers the spectral
projection-valued measure along positive scaling, which is what lets the
unscaled Coulomb spectral theory be read at the model's parameters.

[[def-nrqm-central-framework-central-potential-model]] fixes the pair's
declared model: state space, position and momentum assignments, the assigned
energy operator for a real bounded measurable central potential, the declared
spherical reading with effective potential
$v^{\mathrm{eff}}_{l}(r)=v(r)+\hbar^{2}l(l+1)/(2mr^{2})$, and the bound-state
and continuum-threshold vocabulary. [[pthm-nrqm-central-spherical-reduction-of-smooth-states]]
proves that on smooth reduced functions supported away from the origin the
assigned energy acts by the declared radial expression, so the declared
radial equation is the eigenvalue equation on that sector.
[[def-nrqm-central-framework-coulomb-and-hydrogen-model]] declares the
one-centre Coulomb operator $H_{\kappa}=-\frac{\hbar^{2}}{2m}\Delta-\frac{\kappa}{|\cdot|}$
on $H^{2}$ with scale $a_{\kappa}=\hbar^{2}/(m\kappa)$, the two-body model
with reduced mass $\mu$, the hydrogen-like identification and the scope
exclusions. [[pthm-nrqm-central-coulomb-energy-observable-and-flow]] reads
$H_{\kappa}$ as the model's assigned sharp energy observable with essential
spectrum $[0,+\infty)$ and discrete negative spectrum, its flow, its
stationary states and its spectral support, and
[[pthm-nrqm-central-coulomb-bound-spectrum-and-degeneracy]] proves the bound
energies $E_{n}=-\frac{m\kappa^{2}}{2\hbar^{2}n^{2}}$, the $n^{2}$-fold model
degeneracy, the completeness of the bound states in the negative spectral
subspace and the nonzero continuum.
[[pthm-nrqm-central-coulomb-bound-state-radial-distributions]] reads the
position law of a bound state as an angular weight times the radial density
$|u_{nl}|^{2}/\|u_{nl}\|_{2}^{2}$ and gives the ground-state density, its mean
radius $3a_{\kappa}/2$ and its mode $a_{\kappa}$;
[[pthm-nrqm-central-two-body-reduced-threshold-and-total-momentum]] proves the
centre-of-mass/relative decomposition,
$U_{\Phi}H_{2}U_{\Phi}^{-1}=T_{R}\otimes I+I\otimes C_{\mu}$, the relative
levels $\mathcal E_{n}=-\frac{\mu\kappa^{2}}{2\hbar^{2}n^{2}}$, the absence of
eigenvalues of the total operator and the two-body threshold reading; and
[[rem-nrqm-central-scope-and-empirical-status]] records what the page
establishes, what it excludes, and the empirical status of its conditional
statements.
