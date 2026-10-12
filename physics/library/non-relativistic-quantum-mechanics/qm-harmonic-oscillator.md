---
page: qm-harmonic-oscillator
title: "Qm Harmonic Oscillator"
status: draft
library: physics
items:
  - lem-nrqm-oscillator-diagonal-eigenspaces
  - lem-nrqm-oscillator-unitary-transport-of-spectral-pvms
  - def-nrqm-oscillator-framework-quadratic-potential-model
  - pthm-nrqm-oscillator-energy-spectrum-and-completeness
  - def-nrqm-oscillator-coherent-states
  - pthm-nrqm-oscillator-coherent-state-fluctuations
  - pthm-nrqm-oscillator-coherent-state-evolution
  - rem-nrqm-oscillator-scope-and-empirical-status
examples: []
requires:
  - qm-uncertainty-and-compatibility
  - qm-math-oscillator
  - qm-math-fock-and-equilibrium
  - qm-framework-and-quantities
  - qm-state-geometry
  - qm-observables-and-born-probabilities
  - qm-autonomous-dynamics
  - qm-massive-particle-kinematics
---

This page presents the quadratic-potential (harmonic) oscillator as an
explicit model of the non-relativistic quantum framework and develops its
energy spectrum, its excitation structure and its coherent states. The model
itself is fixed by [[def-nrqm-oscillator-framework-quadratic-potential-model]]:
a declared spinless particle with a one-dimensional realization on
$L^{2}(\mathbb R,dx)$ and an isotropic three-dimensional realization on
$L^{2}(\mathbb R^{3},dx)$, parameters $m>0$ in kg, $\omega>0$ in
$\mathrm s^{-1}$ and the action constant $\hbar>0$, length scale
$\ell=\sqrt{\hbar/(m\omega)}$, position and momentum assigned as sharp
observables with units $\mathrm m$ and $\mathrm{kg}\,\mathrm m\,\mathrm s^{-1}$,
the dimensionless excitation-number observable $(N_\psi,1/\mathrm{count})$,
and the energy observable $(H_1,\mathrm J)$ fixed as the operator of the
scaling theorem, with the additive constant $V(0)$ subtracted from potential
energy. The formal
expression $-\frac{\hbar^{2}}{2m}\frac{d^{2}}{dx^{2}}+\frac{m\omega^{2}}{2}x^{2}$
is identified with $H_1$ on the scaled polynomial-Gaussian core
$\mathscr P_x=D\{p g_0:p\in\mathbb C[y]\}$ and weakly on its domain. The model
definition records explicitly that the quadratic potential is an adopted
idealization -- the leading quadratic term after subtracting the minimum
value of a $C^2$ potential-energy function near a non-degenerate minimum --
and that no numerical value of $m$, $\omega$ or $\hbar$ and no laboratory
identification is asserted.

The two local mathematical lemmas support the spectral readings.
[[lem-nrqm-oscillator-diagonal-eigenspaces]] records that a diagonal operator
with pairwise distinct real eigenvalues has one-dimensional eigenspaces
$\mathbb Ce_n$ and that in general the eigenspace at $\lambda$ is the closed
span of the basis vectors with eigenvalue $\lambda$;
[[lem-nrqm-oscillator-unitary-transport-of-spectral-pvms]] shows that a
self-adjoint operator conjugated by a bijective linear isometry keeps its
spectrum and has its spectral projection-valued measure and all scalar laws
transported accordingly. The Fourier-algebraic closure that these items
consume -- the diagonal operator, the Hermite family and its completeness, the
scaling realization, the closed ladder domains and the coherent-vector
convergence -- is the mathematical page [[qm-math-oscillator]] of this run,
whose items are consumed here as stated mathematical premises.

[[pthm-nrqm-oscillator-energy-spectrum-and-completeness]] proves the model's
exact spectrum $\sigma(H_1)=\{\hbar\omega(n+\frac12):n\in\mathbb N\}$, the
one-dimensional eigenspaces $\ker(H_1-E_nI)=\mathbb C\psi_n$, the completeness
of the Hermite eigenbasis, the identity $H_1=\hbar\omega(N_\psi+\frac12I)$ with
the excitation operators $a_\psi,a^\dagger_\psi$ and assigned number
observable $(N_\psi,1/\mathrm{count})$, the atomic energy
outcome law $\mu^{H_1}_f(\{E_n\})=|\langle f,\psi_n\rangle|^{2}$, and for the
isotropic three-dimensional realization the spectrum
$\{\hbar\omega(M+\frac32)\}$ with multiplicities $(M+1)(M+2)/2$.
[[def-nrqm-oscillator-coherent-states]] fixes the coherent-state family
$\Psi_z=e^{-|z|^{2}/2}\sum_n\frac{z^{n}}{\sqrt{n!}}\psi_n$, its unit norms,
the eigenvalue property $a_\psi\Psi_z=z\Psi_z$, the non-orthogonality
$|\langle\Psi_z,\Psi_w\rangle|=e^{-|z-w|^{2}/2}$ and the dimensionless reading
of the label $z$.

[[pthm-nrqm-oscillator-coherent-state-fluctuations]] computes the coherent
spreads $\Delta_{\Psi_z}Q=\ell/\sqrt2$, $\Delta_{\Psi_z}P=\hbar/(\ell\sqrt2)$
and their product $\hbar/2$, proves the model's position-momentum relation
$\Delta_fQ\Delta_fP\ge\hbar/2$ for every unit $f\in D(Q)\cap D(P)$, and shows
that every coherent preparation saturates the bound with centered vectors
satisfying $\langle x_z,y_z\rangle=-i\hbar/2$.
[[pthm-nrqm-oscillator-coherent-state-evolution]] proves that the model's flow
carries $[\Psi_z]$ to $[\Psi_{ze^{-i\omega t}}]$, that the preparation means
perform the classical harmonic motion $x(t)=x_0\cos\omega t+\frac{p_0}{m\omega}
\sin\omega t$, $p(t)=p_0\cos\omega t-m\omega x_0\sin\omega t$ with constant
spreads, and that the coherent energy law is the Poisson law of parameter
$|z|^{2}$ shifted by $\hbar\omega/2$ with spread $\hbar\omega|z|$.
[[rem-nrqm-oscillator-scope-and-empirical-status]] closes the page with the
adopted-versus-proved distinction, the empirical status of the model and the
list of deferred extensions.

Every item of this page is a conditional model deduction from the framework
postulates P1, P2, P4 and P5, the adopted oscillator model and the cited
mathematics. The page publishes nothing and asserts no measured value; the
identification of a laboratory oscillator, resonance or spectral line with
the model's quantities is a tested identification under the preparation and
apparatus postulate P7.
