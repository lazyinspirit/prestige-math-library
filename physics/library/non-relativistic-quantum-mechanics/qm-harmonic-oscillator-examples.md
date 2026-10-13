---
page: qm-harmonic-oscillator-examples
title: "Qm Harmonic Oscillator — Examples"
status: published
library: physics
items: []
examples:
  - ex-nrqm-oscillator-ground-state-gaussian
  - ex-nrqm-oscillator-ladder-norms
  - ex-nrqm-oscillator-coherent-trajectory
  - rem-nrqm-oscillator-examples-scope-limits
requires:
  - qm-harmonic-oscillator
  - the-heat-kernel-and-the-cauchy-problem
  - qm-framework-and-quantities
  - qm-observables-and-born-probabilities
  - qm-uncertainty-and-compatibility
  - qm-math-oscillator
  - qm-massive-particle-kinematics
  - qm-math-fock-and-equilibrium
---

The companion page to [[qm-harmonic-oscillator]] works three explicit
computations inside the adopted oscillator model.

[[ex-nrqm-oscillator-ground-state-gaussian]] fixes the ground state: the
representative $\psi_0(x)=\ell^{-1/2}\pi^{-1/4}e^{-x^{2}/(2\ell^{2})}$, its
unit norm and eigenvalue equation $H_1\psi_0=\frac{\hbar\omega}{2}\psi_0$; the
position outcome law with density $\ell^{-1}\pi^{-1/2}e^{-x^{2}/\ell^{2}}$,
mean zero and variance $\ell^{2}/2$; the momentum outcome law with density
$\frac{\ell}{\hbar\sqrt\pi}e^{-\ell^{2}p^{2}/\hbar^{2}}$, mean zero and
variance $\hbar^{2}/(2\ell^{2})$; and the saturated product
$\Delta_{\psi_0}Q\,\Delta_{\psi_0}P=\hbar/2$. The position law is read from the
multiplication spectral measure of $Q=M_x$ and the momentum law from the
Fourier multiplier form of $P$ together with the transport of spectral
measures along the Plancherel unitary; both densities are heat-kernel slices,
so their normalizations and second moments come from the heat-kernel items.

[[ex-nrqm-oscillator-ladder-norms]] checks the excitation structure at the
lowest levels: $a_\psi\psi_1=\psi_0$, $a_\psi\psi_2=\sqrt2\psi_1$,
$a^\dagger_\psi\psi_0=\psi_1$, $a^\dagger_\psi\psi_1=\sqrt2\psi_2$ with
corresponding norms $1,\sqrt2,1,\sqrt2$ in that order; the matrix elements
$\langle\psi_m,a_\psi\psi_n\rangle=\sqrt n\,\delta_{m,n-1}$,
$\langle\psi_m,a^\dagger_\psi\psi_n\rangle=\sqrt{n+1}\,\delta_{m,n+1}$ and
$\langle a_\psi\psi_n,a_\psi\psi_m\rangle=n\,\delta_{nm}$; and the point-mass
number and energy laws $\mu^{N_\psi}_{\psi_n}(\{n\})=1$ in the
dimensionless unit $1/\mathrm{count}$,
$\mu^{H_1}_{\psi_n}(\{E_n\})=1$. The example also records that the ladder
operators are not self-adjoint and therefore are not assigned sharp
observables: their norms are operator-theoretic, not outcome values. The
assigned sharp number observable is $(N_\psi,1/\mathrm{count})$.

[[ex-nrqm-oscillator-coherent-trajectory]] follows a nonzero-label coherent
preparation through time: the preparation is periodic with period
$2\pi/\omega$, the mean pair is
$x(t)=x_0\cos\omega t+\frac{p_0}{m\omega}\sin\omega t$,
$p(t)=p_0\cos\omega t-m\omega x_0\sin\omega t$ with the quarter-period values
$x(\frac{\pi}{2\omega})=\frac{p_0}{m\omega}$,
$p(\frac{\pi}{2\omega})=-m\omega x_0$, the phase-space ellipse
$\frac{x^{2}}{2\ell^{2}}+\frac{\ell^{2}p^{2}}{2\hbar^{2}}=|z|^{2}$ is
invariant, and the position and momentum spreads and their product $\hbar/2$
stay constant.

[[rem-nrqm-oscillator-examples-scope-limits]] records what the three
computations do not establish: they report no measurement, extract no
numerical value of $m$, $\omega$ or $\hbar$, identify no laboratory state with
$\psi_0$, $\psi_n$ or $\Psi_z$, and treat the displayed $x(t),p(t)$ as
preparation means rather than measured trajectory coordinates. The formal
non-normalizable solution of the ground-state equation is authored on the
[[qm-math-oscillator-examples|mathematical companion examples page]] as
[[ex-nrqm-oscillator-formal-nonnormalizable-solution|its formal solution
example]], and is cross-referenced there rather than duplicated here.
