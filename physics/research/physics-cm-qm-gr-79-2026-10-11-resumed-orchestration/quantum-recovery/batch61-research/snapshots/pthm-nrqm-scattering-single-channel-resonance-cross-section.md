---
id: pthm-nrqm-scattering-single-channel-resonance-cross-section
aliases: [nrqm-scattering-single-channel-resonance-cross-section]
kind: physics-theorem
domain: physics
title: "The resonance model's phase-shift law, unitarity and channel cross section"
status: draft
origin: session
dependency_level: 13
deps: [def-nrqm-scattering-single-channel-resonance-model, def-nrqm-scattering-partial-wave-and-phase-shift-readings, pthm-nrqm-scattering-partial-wave-cross-section, thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence, def-nrqm-framework-quantities-and-units, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, def-nrqm-observables-framework-observable-and-outcome-law, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-scattering-single-channel-resonance-model: formulation-prerequisite
  def-nrqm-scattering-partial-wave-and-phase-shift-readings: formulation-prerequisite
  pthm-nrqm-scattering-partial-wave-cross-section: physical-result
  thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence: mathematical-premise
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared single-channel resonance model of the pair: unitarity of the declared channel factor for positive energies, the Lorentzian phase-shift law, the channel cross section with its value and half-height width at the resonance energy, and the conditional reading of a single-channel total cross section. Conditional algebra of a declared model; the item asserts no potential producing the factor, no decay law, no lifetime and no measured width or count."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.6.1 printed pages 283-284 (PDF pages 291-292): the Breit-Wigner partial cross section and the half-height width"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Section 15.7 printed pages 219-221: low-energy scattering and the scattering length"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
verification:
  precheck: pass
---

## Statement

Adopt the declared single-channel resonance model
[[def-nrqm-scattering-single-channel-resonance-model]] with channel label $l$,
mass $m>0$, action constant $\hbar>0$ and parameters $E_{r}\in\mathbb R$,
$\Gamma>0$, with the phase shift read modulo $\pi$ from $S_{l}=e^{2i\delta_{l}}$
and the channel cross-section reading $\sigma_{l}(E)$ of that definition.
Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Then for every $E>0$:

(a) $|S_{l}(E)|=1$, so the declared channel is elastic, and the phase shift is
$$\delta_{l}(E)=-\arctan\frac{\Gamma/2}{E-E_{r}}\quad(\text{modulo }\pi);$$

(b) the phase-shift factor is Lorentzian,
$$\sin^{2}\delta_{l}(E)=\frac{(\Gamma/2)^{2}}{(E-E_{r})^{2}+(\Gamma/2)^{2}},$$
with value $1$ at $E=E_{r}$ and value $1/2$ exactly at
$E=E_{r}\pm\Gamma/2$, so that the **half-height width in energy** of the
factor is $\Gamma$;

(c) the channel cross-section reading is
$$\sigma_{l}(E)=\frac{4\pi}{k(E)^{2}}(2l+1)\frac{(\Gamma/2)^{2}}{(E-E_{r})^{2}+(\Gamma/2)^{2}}, \qquad k(E)=\frac{\sqrt{2mE}}{\hbar},$$
read in $\mathrm{m^{2}}$, with value at the resonance energy
$$\sigma_{l}(E_{r})=\frac{4\pi\hbar^{2}}{2mE_{r}}(2l+1),$$
and the pair asserts no maximum statement for $\sigma_{l}$ itself, whose
energy dependence contains the slowly varying factor $k(E)^{-2}$ in addition
to the Lorentzian.

Every display is a conditional algebraic statement about the declared model;
no potential producing $S_{l}$, no decay law, no lifetime and no measured
quantity is asserted.

## Facts & Assumptions

**Given:** the declared single-channel resonance model with channel label $l$, parameters $E_{r}$, $\Gamma>0$, the phase-shift and cross-section readings, and the choice hypotheses.

[F1] **The declared channel factor.** For $E>0$, $S_{l}(E)=\frac{E-E_{r}-i\Gamma/2}{E-E_{r}+i\Gamma/2}$ and $S_{l}=e^{2i\delta_{l}}$ modulo $\pi$, with $\sigma_{l}(E)=\frac{4\pi}{k(E)^{2}}(2l+1)\sin^{2}\delta_{l}(E)$ and $k(E)=\hbar^{-1}\sqrt{2mE}$ ([[def-nrqm-scattering-single-channel-resonance-model]] clause (b)).

[F2] **Resonance model algebra in the cited mathematics.** For the single-channel model $S(E)=\frac{E-E_{r}-i\Gamma/2}{E-E_{r}+i\Gamma/2}$ with $\Gamma>0$, $|S(E)|=1$ for real $E$ and $\sin^{2}\delta=(\Gamma/2)^{2}/((E-E_{r})^{2}+(\Gamma/2)^{2})$, and substituting into the phase-shift series gives the corresponding single-channel cross section ([[thm-nrqm-controlled-dynamics-partial-wave-cross-section-convergence]] clause (c)).

[F3] **The pair's channel reading.** The channel cross-section reading of the pair is the summand of the phase-shift series of the partial-wave theorem, with $l$, $\delta_{l}$ and $k$ read as in the resonance model ([[def-nrqm-scattering-partial-wave-and-phase-shift-readings]] clause (c), [[pthm-nrqm-scattering-partial-wave-cross-section]] clause (b)).

## Proof

**Proof technique:** direct; compute $|S_{l}|$ and the phase of the declared factor, then substitute the declared function into the model's channel reading.

**Given:** the data and hypotheses of the statement and [F1]-[F3].

1.1 Writing $E-E_{r}=x$ and $\Gamma/2=y>0$, the numerator and denominator of $S_{l}(E)=(x-iy)/(x+iy)$ are complex conjugates, so $|S_{l}(E)|=|x-iy|/|x+iy|=1$; this is (a)'s first assertion. [F1, given, algebra]

2.1 Since $(x-iy)/(x+iy)=\exp(-2i\arctan(y/x))$ for $x\ne0$ by the arctangent addition formula, and $\arctan(y/0^{+})=\pi/2$, the phase shift is $\delta_{l}(E)=-\arctan\frac{\Gamma/2}{E-E_{r}}$ modulo $\pi$; this completes (a). [F1, step 1.1, algebra]

3.1 With $y=\Gamma/2$ and $x=E-E_{r}$, $\sin^{2}\delta_{l}=\sin^{2}\arctan(y/x)=y^{2}/(x^{2}+y^{2})$, which is the display of (b); at $x=0$ the value is $1$, and $\sin^{2}\delta_{l}=1/2$ exactly when $x^{2}=y^{2}$, i.e. at $E=E_{r}\pm\Gamma/2$, so the half-height width in energy is $2\cdot\Gamma/2=\Gamma$. [F2, step 2.1, algebra]

4.1 Substituting 2.1 into the declared channel reading of [F1] gives $\sigma_{l}(E)=\frac{4\pi}{k(E)^{2}}(2l+1)\frac{(\Gamma/2)^{2}}{(E-E_{r})^{2}+(\Gamma/2)^{2}}$; at $E=E_{r}$ the Lorentzian factor equals $1$ and $k(E_{r})^{2}=2mE_{r}/\hbar^{2}$, so $\sigma_{l}(E_{r})=(2l+1)4\pi\hbar^{2}/(2mE_{r})$; since the $k(E)^{-2}$ factor decreases with $E$, no maximum statement at $E=E_{r}$ is made for $\sigma_{l}$ itself. This is (c) and completes the proof. [F1, step 3.1, F3, algebra] ∎

## Remarks

- **Why no peak claim.** The Lorentzian factor peaks at $E_{r}$, but the full
  channel reading carries the factor $k(E)^{-2}$ as well; the pair states the
  half-height width of the Lorentzian factor, which is exactly $\Gamma$,
  without asserting where the maximum of $\sigma_{l}$ lies.
- **Modulo $\pi$.** Both $\sin^{2}$ and the cross-section reading are
  insensitive to the modulo-$\pi$ ambiguity of $\delta_{l}$.
