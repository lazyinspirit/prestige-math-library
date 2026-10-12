---
id: pthm-nrqm-scattering-stationary-dynamical-identification
aliases: [ nrqm-scattering-stationary-dynamical-identification ]
kind: physics-theorem
domain: physics
title: "Identification of the model's scattering operator with the on-shell
  stationary operator, and the central per-channel form"
status: draft
origin: session
dependency_level: 14
deps:
  [
    def-nrqm-scattering-framework-short-range-model,
    def-nrqm-scattering-stationary-beam-and-cross-section-model,
    def-nrqm-scattering-partial-wave-and-phase-shift-readings,
    pthm-nrqm-scattering-stationary-wave-amplitude-and-flux,
    pthm-nrqm-scattering-compact-support-asymptotic-completeness,
    pthm-nrqm-scattering-partial-wave-cross-section,
    lem-nrqm-scattering-model-scaling-correspondence,
    thm-nrqm-controlled-dynamics-stationary-dynamical-sector-identification,
    thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues,
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
  pthm-nrqm-scattering-compact-support-asymptotic-completeness: physical-result
  pthm-nrqm-scattering-partial-wave-cross-section: physical-result
  lem-nrqm-scattering-model-scaling-correspondence: mathematical-premise
  thm-nrqm-controlled-dynamics-stationary-dynamical-sector-identification: mathematical-premise
  thm-nrqm-controlled-dynamics-no-positive-compact-potential-eigenvalues: mathematical-premise
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
  compactly supported potential: identification of the model's dynamical
  scattering operator, read as the product of the wave operators, with the
  on-shell stationary operator built from the model's stationary amplitude,
  including the free energy-angular diagonalization, the rotational covariance,
  and the diagonal per-channel form with the unit-modulus channel factors for a
  central potential. Conditional on the declared model and the cited
  mathematics; the identification is an operator statement, not a measurement
  statement, and no cross-section observation is asserted."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections
        12.1-12.2 printed pages 257-270 (PDF pages 265-278): the scattering
        operator, the S-matrix as the on-shell operator and the scattering
        amplitude"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009,
        Section 12.1 printed pages 247-252 (PDF pages 259-264): the scattering
        operator and its intertwining with the free evolution"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared short-range scattering model
[[def-nrqm-scattering-framework-short-range-model]] with mass $m>0$, spin
zero and a **compact-support-class** potential $V$ supported in $B_{R}$; by
[[pthm-nrqm-scattering-compact-support-asymptotic-completeness]] the model's
wave operators exist and
$$S=\Omega_{+}^{*}\Omega_{-}$$
is unitary on $H_{0}$ and commutes with the free flow. Write $\sigma$ for
surface measure on $S^{2}$ and $\mathfrak h=L^{2}(S^{2},d\sigma)$, and for
every $d\in S^{2}$ let $f_{k}(\cdot,d)$ be the model's stationary amplitude
of [[pthm-nrqm-scattering-stationary-wave-amplitude-and-flux]] at incident
direction $d$, with the operator $\mathcal A_{k}$ on $\mathfrak h$ defined by
$$(\mathcal A_{k}a)(\Omega):=\int_{S^{2}}f_{k}(\Omega,d)\,a(d)\,d\sigma(d).$$
Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Then:

(a) the free flow is diagonalized by the free trace transform of the cited
mathematics, a unitary $F_{0}:H_{0}\to L^{2}((0,\infty),dE;\mathfrak h)$ with
$(F_{0}g)(E,\omega)=E^{1/4}2^{-1/2}\widehat g(\sqrt E\,\omega)$ in the
energy-divided variables of the scaling correspondence, where this auxiliary $E=k^2$ has units $\mathrm{m^{-2}}$ and the physical energy is $(\hbar^2/2m)E$, and the model's
scattering operator is carried into multiplication,
$$F_{0}\,S\,F_{0}^{*}=M_{S(E)};$$

(b) for almost every $E=k^{2}>0$ the on-shell operator is
$$S(E)=I+\frac{ik}{2\pi}\mathcal A_{k},$$
a unitary operator on $\mathfrak h$, and the model's stationary amplitude
$f_{k}(\Omega,d)$ is the kernel of $\mathcal A_{k}$;

(c) for $R\in SO(3)$ let $V_{R}(x):=V(R^{-1}x)$ and $(U_{R}a)(\omega):=a(R^{-1}\omega)$;
then
$$S[V_{R}](E)=U_{R}\,S[V](E)\,U_{R}^{-1};$$

(d) if $V$ is in addition central, the fiber decomposes in the spherical
harmonic basis as $S(E)Y_{lm}=S_{l}(k)Y_{lm}$, where $S_{l}$ and
$\delta_{l}$ are the model's channel factor and phase shift of
[[def-nrqm-scattering-partial-wave-and-phase-shift-readings]], equal to the
Wronskian ratio $\overline{W(\varphi_{l},f_{l})}/W(\varphi_{l},f_{l})$, and
the cross-section reading of
[[pthm-nrqm-scattering-partial-wave-cross-section]] is the phase-shift series
of that channel decomposition.

The statement identifies operators and operators-valued functions of the
declared model; it asserts no measurement of $S$ or $S(E)$, no detector model
and no empirical claim.

## Facts & Assumptions

**Given:** the declared model with $m,\hbar>0$, compact-support-class $V$ supported in $B_{R}$; the model's wave operators, scattering operator and stationary amplitude; the free trace transform $F_{0}$; the choice hypotheses.

[F1] **Stationary and dynamical sector identification.** Assume Countable Choice. For real bounded compactly supported $V_{0}$, with $H_{0}=-\Delta$, $H=H_{0}+M_{V_{0}}$ and $S=\Omega_{+}^{*}\Omega_{-}$ its complete scattering operator, the free trace transform $F_{0}g(E,\omega)=E^{1/4}2^{-1/2}\widehat g(\sqrt E\omega)$ is unitary onto $L^{2}((0,\infty),dE;\mathfrak h)$, $F_{0}SF_{0}^{*}=M_{S(E)}$ with $S(E)=I+\frac{ik}{2\pi}\mathcal A_{k}$ unitary, $\mathcal A_{k}$ built from the stationary amplitude, $S[V_{R}](E)=U_{R}S[V](E)U_{R}^{-1}$, and for radial $V_{0}$ the fiber is diagonal with $S_{l}(E)=\overline{W_{l}}/W_{l}$, $|S_{l}|=1$ ([[thm-nrqm-controlled-dynamics-stationary-dynamical-sector-identification]] clauses (a), (b), (c), (d)).

[F2] **The model's amplitude and $S$.** The model's amplitude $f_{k}(\cdot,d)$ is the stationary theorem's amplitude for the reduced potential $W=(2m/\hbar^{2})V$, and the model's $S=\Omega_{+}^{*}\Omega_{-}$ is the unitary operator of the compact-support completeness theorem ([[pthm-nrqm-scattering-stationary-wave-amplitude-and-flux]] clause (b), [[pthm-nrqm-scattering-compact-support-asymptotic-completeness]] clause (c)).

[F3] **The channel vocabulary.** For a central short-range potential the model declares $S_{l}=e^{2i\delta_{l}}=\overline{W(\varphi_{l},f_{l})}/W(\varphi_{l},f_{l})$ and $\sigma_{l}=(4\pi/k^{2})(2l+1)\sin^{2}\delta_{l}$ ([[def-nrqm-scattering-partial-wave-and-phase-shift-readings]] clause (c)).

## Proof

**Proof technique:** direct; represent physical-coordinate $W=W_x$, $k$ and $E=k^2$ numerically in the fixed metre convention; the model's operators and amplitude are the cited energy-divided ones through the scaling correspondence, so the energy-divided identification theorem applies and supplies all four clauses.

**Given:** the data and hypotheses of the statement and [F1]-[F3].

1.1 The reduced potential $W=(2m/\hbar^{2})V$ is real, bounded and supported in $B_{R}$, so [F1] applies to it; by the scaling correspondence the model's operators $H^{\mathrm{free}},H$ are $cA_{0},cA$ with $A_{0}=-\Delta$, $A=-\Delta+M_{W}$ and the physical and energy-divided wave operators coincide. [F1, F2, given]

2.1 By [F2] the model's stationary amplitude for direction $d$ is the amplitude of [F1]'s stationary problem for $W$ at the same wave number $k$; hence $\mathcal A_{k}$ is exactly the on-shell amplitude operator of [F1]. [F1, F2, step 1.1]

3.1 By [F1] the free trace transform $F_{0}$ diagonalizes the free flow and $F_{0}SF_{0}^{*}=M_{S(E)}$ with $S(E)=I+\frac{ik}{2\pi}\mathcal A_{k}$; since the model's $S$ and $\mathcal A_{k}$ are the same operators as in [F1] by steps 1.1 and 2.1, the displays of (a) and (b) follow, including unitarity of the on-shell operator. [F1, step 1.1, step 2.1, algebra]

4.1 By [F1] the covariance identity $S[V_{R}](E)=U_{R}S[V](E)U_{R}^{-1}$ holds for the energy-divided potential; since rotations act on $W$ exactly as on $V$ through $R^{-1}$, the same identity is the model's (c). [F1, step 3.1, algebra]

5.1 If $V$ is central, so is $W$; [F1] gives $S(E)Y_{lm}=S_{l}(k)Y_{lm}$ with $S_{l}=\overline{W_{l}}/W_{l}$; by [F3] the model's channel vocabulary names exactly these objects $S_{l}=\overline{W(\varphi_{l},f_{l})}/W(\varphi_{l},f_{l})$ and $\delta_{l}$, and the phase-shift series of the partial-wave theorem is the total cross-section reading of this decomposition. This is (d) and completes the proof. [F1, F3, step 4.1, algebra] ∎

## Remarks

- **What the identification is.** The identity $F_{0}SF_{0}^{*}=M_{S(E)}$ is an
  operator identity for the declared model; it is the precise sense in which
  the pair may speak of "the S-matrix at physical energy $(\hbar^2/2m)E$", and it makes no claim
  that any apparatus measures $S(E)$.
- **Non-central potentials.** For a non-central potential no individual
  spherical-harmonic channel is asserted; only the covariance of (c) holds.
