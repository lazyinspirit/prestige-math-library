---
page: qm-three-dimensional-scattering
title: "Qm Three Dimensional Scattering"
status: draft
library: physics
items: [lem-nrqm-scattering-model-scaling-correspondence,
        lem-nrqm-scattering-three-dimensional-current-and-flux,
        def-nrqm-scattering-framework-short-range-model,
        def-nrqm-scattering-stationary-beam-and-cross-section-model,
        pthm-nrqm-scattering-wave-operator-existence-and-free-continuity,
        pthm-nrqm-scattering-compact-support-asymptotic-completeness,
        pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness,
        pthm-nrqm-scattering-stationary-wave-amplitude-and-flux,
        def-nrqm-scattering-partial-wave-and-phase-shift-readings,
        def-nrqm-scattering-single-channel-resonance-model,
        pthm-nrqm-scattering-partial-wave-cross-section,
        pthm-nrqm-scattering-controlled-born-approximation,
        pthm-nrqm-scattering-stationary-dynamical-identification,
        def-nrqm-scattering-coulomb-dollard-model,
        pthm-nrqm-scattering-coulomb-dollard-completeness,
        pthm-nrqm-scattering-single-channel-resonance-cross-section,
        rem-nrqm-scattering-scope-and-empirical-status,
        rem-nrqm-scattering-long-range-and-threshold-limits]
examples: []
requires: ["qm-controlled-approximations"]
---

This page develops the pair's three-dimensional scattering model for the
spin-zero massive one-particle sector. The model is an explicitly adopted
assumption of the pair,
[[def-nrqm-scattering-framework-short-range-model]]: the state space is
$H_{0}=L^{2}(\mathbb R^{3};\mathbb C)$ with the position and momentum families
of the framework, the potential $V$ is prescribed, not derived, and two
declared short-range classes are fixed — the bounded compact-support class and
the resolvent-tail class $V=V_{2}+V_{\mathrm b}$ with $V_{2}\in L^{2}$,
$V_{\mathrm b}$ bounded and the shifted nondimensional free resolvent tail
integrable. The free and interacting assigned energy observables
$H^{\mathrm{free}}$ and $H=H^{\mathrm{free}}+M_{V}$ are read on the common
Sobolev domain $W^{2,2}(\mathbb R^{3};\mathbb C)$, energy in joules, and the
wave-operator, scattering-operator and asymptotic-completeness vocabulary is
declared in the same item. The pure Coulomb potential is explicitly outside
both classes and is treated by the separate long-range model of this page.

The local mathematics precedes the physical readings.
[[lem-nrqm-scattering-model-scaling-correspondence]] is the bookkeeping that
carries every statement about the nondimensional operators
$-\Delta+M_{W}$, $W=2mV/\hbar^{2}$, into the physical operators through
$\tau=\hbar t/(2m)$: the domain, the spectral-measure correspondence
$E_{H}(cB)=E_{A}(B)$, the flow identity $e^{-itH/\hbar}=e^{-i\tau A}$, the
equality of the physical and nondimensional strong limits and the eigenvector
correspondence.
[[lem-nrqm-scattering-three-dimensional-current-and-flux]] proves the
continuity identity $\partial_{t}n+\operatorname{div}\mathbf j=0$ for the
declared differentiable solutions, the vanishing stationary divergence and
sphere flux, and the two explicit current readings: the plane wave carries
$\mathbf j=(\hbar k/m)d$ and the outgoing field $(a(\omega)+ib(\omega))e^{ikr}/r$
carries radial density $(\hbar k/m)|f(\omega)|^{2}/r^{2}$; the general
outgoing field of the second reading is only $C^{1}$ and is not claimed to
solve the free equation.

The stationary elastic beam model
[[def-nrqm-scattering-stationary-beam-and-cross-section-model]] declares the
incident plane-wave reading at wave number $k$ and direction $d$, the
incident current density and flux density $J_{\mathrm{inc}}=\hbar k/m$, the
outgoing asymptotic reading with amplitude $f_{k}$, the declared generalized
stationary solution and the differential and total cross-section readings
$d\sigma/d\Omega=|f_{k}|^{2}$ and $\sigma=\int|f_{k}|^{2}$ as ratios of
current densities under explicitly stated equal-channel flux assumptions. A
generalized stationary solution is not an element of the state space and no
preparation, beam apparatus or counter appears in the model.

On the dynamical side,
[[pthm-nrqm-scattering-wave-operator-existence-and-free-continuity]] proves,
for the compact-support class, the Cook integrability of the potential along
the free flow, the existence of the model's wave operators as strong limits
of unitaries together with isometry and intertwining, the purely absolutely
continuous free spectrum with its spectral density, and the absence of
positive eigenvalues of $H$.
[[pthm-nrqm-scattering-compact-support-asymptotic-completeness]] proves
asymptotic completeness for that class: the ranges coincide with
$H_{\mathrm{ac}}(H)=H_{\mathrm c}(H)$, the singular continuous subspace is
$\{0\}$, and $S=\Omega_{+}^{*}\Omega_{-}$ is unitary and commutes with the
free flow.
[[pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness]] extends the
same conclusions to the resolvent-tail class, checks the sufficient
decaying-tail form $|V_{\mathrm{tail}}|\le C(1+|x|)^{-1-\delta}$, $\delta>0$,
and records the explicit failure of that sufficient decay for the Coulomb
tail.

On the stationary side,
[[pthm-nrqm-scattering-stationary-wave-amplitude-and-flux]] constructs the
outgoing stationary solution of the beam model, proves the bounded
invertibility that defines it, its $H^{2}_{\mathrm{loc}}$ regularity, the
uniform far-field expansion with smooth amplitude and $O(r^{-2})$ remainder
and the resulting cross-section readings;
[[pthm-nrqm-scattering-controlled-born-approximation]] gives the
operator-norm controlled Born approximation with its explicit condition
$q=\|K_{k}\|<1$ and the coupling-scaling form;
[[def-nrqm-scattering-partial-wave-and-phase-shift-readings]] fixes the
channel vocabulary for a declared central potential — the regular and
outgoing radial solutions, the unit-modulus channel factor
$S_{l}=\overline{W(\varphi_{l},f_{l})}/W(\varphi_{l},f_{l})=e^{2i\delta_{l}}$
with $\delta_{l}$ read modulo $\pi$, and the channel cross-section reading —
and [[pthm-nrqm-scattering-partial-wave-cross-section]] proves the Legendre
expansion, the phase-shift series for the total cross section and the
identification of the channel objects with those of the cited mathematics.
[[pthm-nrqm-scattering-stationary-dynamical-identification]] identifies the
stationary construction with the dynamical scattering operator:
$F_{0}SF_{0}^{*}=M_{S(E)}$ with $S(E)=I+ik\mathcal A_{k}/(2\pi)$ unitary on
the energy-angular fiber, the rotational covariance of the on-shell operator
and its diagonal channel decomposition for central potentials.
[[def-nrqm-scattering-single-channel-resonance-model]] and
[[pthm-nrqm-scattering-single-channel-resonance-cross-section]] declare and
analyse a single-channel resonance factor, its induced phase shift, the
Lorentzian $\sin^{2}\delta_{l}$ with half-height width $\Gamma$, and the
channel cross-section reading, with no lifetime, decay law or measured line
shape asserted.

The long-range case is separate and explicitly modified:
[[def-nrqm-scattering-coulomb-dollard-model]] declares the one-centre Coulomb
model with $\gamma=2m\kappa/\hbar^{2}$ and the Dollard-modified comparison
$U_{D}(t)=e^{-itH^{\mathrm{free}}/\hbar}h_{t}(H^{\mathrm{free}})$, and
[[pthm-nrqm-scattering-coulomb-dollard-completeness]] proves existence,
isometry, intertwining and asymptotic completeness of the modified wave
operators and unitarity of $S_{D}$; neither existence nor completeness of the
ordinary short-range comparison is asserted for the Coulomb potential.
[[rem-nrqm-scattering-scope-and-empirical-status]] and
[[rem-nrqm-scattering-long-range-and-threshold-limits]] collect the scope and
empirical status of the page: every statement is a conditional model
deduction, the page reports no experiment, no apparatus, no count and no
uncertainty budget, and a comparison of these readings with data would
require a declared preparation, target, fluence, detector acceptance and
background model together with a statistical model for the counts.
