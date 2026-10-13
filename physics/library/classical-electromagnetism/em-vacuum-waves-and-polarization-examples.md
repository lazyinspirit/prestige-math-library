---
page: em-vacuum-waves-and-polarization-examples
title: "Vacuum waves and polarization — Examples"
status: published
items: []
examples: [ex-em-polarization-examples,
           ex-em-plane-wave-infinite-energy,
           texp-em-radiation-pressure-example,
           ex-em-two-beam-fringes]
---

**Objective.** The companion collects the four leaf items of the pair: explicit
polarization cases, the infinite-energy contrast for the ideal plane wave, a
conditional radiation-pressure computation, and the deterministic two-beam
fringe geometry with its measurement-model qualifications.

**Polarization cases.** With $k=Ke_3$, $\omega=cK$ and $b=k\times e/\omega$,
the example verifies six amplitude choices
([[ex-em-polarization-examples]]): the linear case $e=E_0e_1$ with trace the
segment $[-E_0,E_0]e_1$; the circular cases $e=E_0(e_1\pm ie_2)$ of radius
$E_0$ with the two signs of the helicity $H$; the elliptical case
$e=E_0(e_1+2ie_2)$ with semiaxes $E_0$ and $2E_0$; the zero wave; and the
dependent-amplitude linear edge case $e=E_0(1+i)e_1$, which the classification
covers without requiring $a$ and $d$ to be orthogonal. Every choice satisfies
the amplitude equations and $|B|=|E|/c$ pointwise.

**Infinite energy of the ideal plane wave.** For the explicit configuration
$E=E_0\cos\theta\,e_1$, $B=(E_0/c)\cos\theta\,e_2$ the density is
$u=\varepsilon_0E_0^2\cos^2\theta$, positive on average and vanishing only on
the nodal planes; the box integrals are bounded below by
$\pi\varepsilon_0E_0^2R^2/K\to\infty$ along the sequence $R=NP$ with
$P=2\pi/K$ ([[ex-em-plane-wave-infinite-energy]]). In contrast, the
compactly supported branch of the constrained initial-value theorem has
compact spatial support at each time and hence finite instantaneous energy:
the ideal whole-space plane wave is not a finite-energy configuration.

**Radiation pressure under stated idealisations.** The thought experiment
adopts an ideal absorber or an ideal reflector at $x_3=0$ together with an
explicit pillbox boundary-force law
([[texp-em-radiation-pressure-example]]). For the incident wave of intensity
$I=\varepsilon_0cE_0^2/2$ the period-averaged normal stress is $-I/c$ near the
surface, giving pressure $I/c$ on the absorber, and the standing wave formed
by the incident and reflected fields has averaged normal stress
$-2I/c$ at the surface, giving pressure $2I/c$ on the reflector. The
vanishing-field idealisations and the force law are adopted model
assumptions, not derived material laws; no measured pressure is reported.

**Two-beam fringes.** For the two crossing waves with
$k_{1,2}=K(\pm\sin\alpha\,e_1+\cos\alpha\,e_3)$ and amplitudes
$E_0e_2$, $E_0e^{i\varphi}e_2$, the averaged energy density is
$\varepsilon_0E_0^2[1+\cos^2\alpha\cos(2K\sin\alpha\,x_1-\varphi)]$, with
fringe period $\lambda/(2\sin\alpha)$ and spatial visibility
$\cos^2\alpha=\frac12(1+\hat k_1\cdot\hat k_2)$
([[ex-em-two-beam-fringes]]). The copropagating equal-amplitude law
$\langle u\rangle\propto|1+e^{i\Delta}|^2$ is the form used in the content
model's double-slit discussion, and phase-scan visibility is a different
quantity from spatial visibility. The item reports no observation and no
finite-sample visibility estimate: a measured fringe pattern would
additionally require a declared detector, binning, background, integration
and sampling model, and classical waves interfere, so the prediction alone
does not discriminate between classical and quantum descriptions.

All four items are conditional computations inside the framework's declared
models; none reports an observation, and none asserts an empirical
conclusion.
