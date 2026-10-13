---
id: pthm-nrqm-scattering-partial-wave-cross-section
aliases: [ nrqm-scattering-partial-wave-cross-section ]
kind: physics-theorem
domain: physics
title: "Partial-wave expansion, unit-modulus channel factors and the phase-shift
  cross-section series"
status: draft
origin: session
dependency_level: 13
deps:
  [
    def-nrqm-scattering-framework-short-range-model,
    def-nrqm-scattering-stationary-beam-and-cross-section-model,
    def-nrqm-scattering-partial-wave-and-phase-shift-readings,
    pthm-nrqm-scattering-stationary-wave-amplitude-and-flux,
    lem-nrqm-scattering-model-scaling-correspondence,
    thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    def-nrqm-framework-quantities-and-units,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-countable-choice,
    def-axiom-of-choice
  ]
dependency_roles:
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  def-nrqm-scattering-stationary-beam-and-cross-section-model: formulation-prerequisite
  def-nrqm-scattering-partial-wave-and-phase-shift-readings: formulation-prerequisite
  pthm-nrqm-scattering-stationary-wave-amplitude-and-flux: physical-result
  lem-nrqm-scattering-model-scaling-correspondence: mathematical-premise
  thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence: mathematical-premise
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared short-range scattering model with a real bounded
  central compactly supported potential in the pair's stationary elastic beam
  reading: rotational reduction of the amplitude to a function of the scattering
  angle, its convergent Legendre expansion, the unit-modulus channel factors,
  the phase shift read modulo pi, and the total cross section as a convergent
  phase-shift series in m^2. Conditional on the declared model and the cited
  mathematics; no measured angular distribution, no low-energy extrapolation
  beyond the stated series and no channel identification for material systems is
  asserted."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.5, printed pages 273-278 (PDF pages 281-286)"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin,
        author-hosted course text), Sections 15.5-15.6 printed pages 217-219:
        partial waves, phase shifts and the low-energy limit of hard-sphere
        scattering"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared short-range scattering model
[[def-nrqm-scattering-framework-short-range-model]] with mass $m>0$, spin
zero and a **declared central short-range potential** $V(x)=v(|x|)$ in the
sense of [[def-nrqm-scattering-partial-wave-and-phase-shift-readings]]
clause (a): $v$ is real, bounded and $V$ is supported in a ball $B_{R}$. Adopt
the stationary elastic beam model at wave number $k>0$ and direction
$d\in S^{2}$, with amplitude $f_{k}$ as in
[[pthm-nrqm-scattering-stationary-wave-amplitude-and-flux]], and the
channel vocabulary of
[[def-nrqm-scattering-partial-wave-and-phase-shift-readings]] clauses (b),
(c). Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Then:

(a) $f_{k}$ depends only on $\cos\theta=\Omega\cdot d$, and its **Legendre
expansion**
$$f_{k}(\theta)=\frac{1}{2ik}\sum_{l\ge0}(2l+1)\bigl(S_{l}(k)-1\bigr)P_{l}(\cos\theta)$$
converges in $L^{2}(S^{2})$ and absolutely, so the model's cross-section
reading is
$$\frac{d\sigma}{d\Omega}(\theta)=|f_{k}(\theta)|^{2};$$

(b) the channel factors are unit modulus, $|S_{l}(k)|=1$, the phase shifts
$\delta_{l}(k)$ are real modulo $\pi$, and the **total cross section** of the
beam model is
$$\sigma=\frac{\pi}{k^{2}}\sum_{l\ge0}(2l+1)|S_{l}(k)-1|^{2} =\frac{4\pi}{k^{2}}\sum_{l\ge0}(2l+1)\sin^{2}\delta_{l}(k)\qquad\text{in }\mathrm{m^{2}},$$
the series converging, with the channel readings of
[[def-nrqm-scattering-partial-wave-and-phase-shift-readings]] clause (c) as
its summands;

(c) the objects $\varphi_{l}$, $f_{l}$, $S_{l}$ and $\delta_{l}$ of the
channel vocabulary are exactly the regular and outgoing radial solutions, the
Wronskian ratio and the phase shift constructed by the cited mathematics for
the reduced radial potential $w=(2m/\hbar^2)v$ at the model's wave number $k$; the phase shifts
are not asserted to have a definite sign and no low-energy limit is asserted
beyond the convergence of the series.

The statement is conditional on the declared central model, the beam model
and the cited mathematics; it asserts no measured angular distribution and no
identification of $l$ with a measured angular momentum.

## Facts & Assumptions

**Given:** the declared central short-range potential $V=v(|\cdot|)$ supported in $B_{R}$, the wave number $k>0$, the direction $d$, the amplitude $f_{k}$ of the stationary theorem, and the channel vocabulary of the pair.

[F1] **Partial-wave cross-section convergence.** Assume Countable Choice. For real bounded central $V_{0}$ supported in $B_{R}$ and $k>0$, with $f$ the amplitude of the stationary outgoing solution, $f$ depends only on $\cos\theta$, its Legendre expansion with $S_{l}$ equals $\overline{W(\varphi_{l},f_{l})}/W(\varphi_{l},f_{l})=e^{2i\delta_{l}}$ converges in $L^{2}(S^{2})$ and absolutely, $|S_{l}|=1$, and the total cross section equals the phase-shift series ([[thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence]] clauses (a), (b)).

[F2] **The model's amplitude and cross-section reading.** The stationary theorem of the pair constructs the model's amplitude $f_{k}$ and reads $d\sigma/d\Omega=|f_{k}|^{2}$ and $\sigma=\int|f_{k}|^{2}$, and the channel vocabulary declares $\varphi_{l},f_{l},S_{l},\delta_{l}$ and $\sigma_{l}$ ([[pthm-nrqm-scattering-stationary-wave-amplitude-and-flux]] clauses (b), (c), [[def-nrqm-scattering-partial-wave-and-phase-shift-readings]] clauses (b), (c)).

[F3] **The energy-divided equation in physical coordinates.** Dividing the physical stationary equation by $c=\hbar^{2}/(2m)$ gives the energy-divided equation with the reduced central potential $W=(2m/\hbar^{2})V=v_{W}(|\cdot|)$, with $W$ and $k^2$ in inverse-square-length units; the numerical mathematical problem uses the same $k$ ([[lem-nrqm-scattering-model-scaling-correspondence]] clauses (a), (b)).

## Proof

**Proof technique:** direct; reduce the physical stationary problem to its energy-divided form in physical coordinates, note that centrality is preserved, and instantiate the cited partial-wave theorem, whose amplitude is the model's amplitude.

**Given:** the data and hypotheses of the statement and [F1]-[F3].

1.1 By [F3] the physical stationary problem at wave number $k$ and reduced potential $W=(2m/\hbar^{2})V$ is the energy-divided problem with $W(x)=w(|x|)$, $w=(2m/\hbar^{2})v$, which is real, bounded and supported in $B_{R}$; hence $W$ is a central potential of the class of [F1]. [F3, given, algebra]

2.1 By [F2] the model's amplitude $f_{k}$ is the amplitude of the stationary outgoing solution of the energy-divided problem of step 1.1, so [F1] gives that $f_{k}$ depends only on $\cos\theta$, that its Legendre expansion has the displayed coefficients $S_{l}$ and converges in $L^{2}(S^{2})$ and absolutely, and by [F2] the model reads $d\sigma/d\Omega=|f_{k}|^{2}$. This is (a). [F1, F2, step 1.1]

3.1 By [F1] the factors satisfy $S_{l}=e^{2i\delta_{l}}$ with $|S_{l}|=1$ for real $\delta_{l}$ modulo $\pi$, and the total cross section equals the displayed phase-shift series; substituting the model's channel readings $\sigma_{l}=(4\pi/k^{2})(2l+1)\sin^{2}\delta_{l}$ from [F2] exhibits the series as the sum of the channel readings, and its convergence is [F1]'s. This is (b). [F1, F2, step 2.1, algebra]

4.1 Since the energy-divided problem of step 1.1 has the same reduced radial equation and the same wave number $k$ as the model's channel vocabulary, the functions $\varphi_{l},f_{l}$ and the Wronskian ratio $S_{l}=\overline{W(\varphi_{l},f_{l})}/W(\varphi_{l},f_{l})$ of the vocabulary are exactly those constructed by [F1]; the phase shift is the half-argument $\delta_{l}$ modulo $\pi$ by definition of the vocabulary, and no sign or low-energy statement is added. This is (c) and completes the proof. [F1, step 1.1, F2, algebra] ∎

## Remarks

- **Resonance models.** A single-channel model of the phase shift is declared
  and analysed separately on this page
  ([[def-nrqm-scattering-single-channel-resonance-model]]); this theorem
  asserts nothing about the existence of resonances for a given potential.
- **Low-energy behaviour.** The series converges for every $k>0$ of the
  declared class; no statement is made about its behaviour as $k\to0$, where
  the class hypotheses themselves remain in force but the pair asserts no
  limiting formula.
