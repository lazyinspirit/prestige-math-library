---
id: ex-nrqm-scattering-single-channel-resonance-cross-section
aliases: [nrqm-scattering-single-channel-resonance-cross-section]
kind: example
domain: physics
title: "The declared single-channel resonance: Lorentzian factor, half-height points and resonance-value cross section"
status: draft
origin: session
dependency_level: 14
deps: [def-nrqm-scattering-single-channel-resonance-model, pthm-nrqm-scattering-single-channel-resonance-cross-section, def-nrqm-scattering-partial-wave-and-phase-shift-readings, def-nrqm-framework-quantities-and-units, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, def-nrqm-observables-framework-observable-and-outcome-law, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-scattering-single-channel-resonance-model: formulation-prerequisite
  pthm-nrqm-scattering-single-channel-resonance-cross-section: physical-result
  def-nrqm-scattering-partial-wave-and-phase-shift-readings: formulation-prerequisite
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
physical_scope: "The declared single-channel resonance model with the channel label l=0 and parameters E_r>0, Gamma>0: the explicit channel cross-section reading at the resonance energy, the ratio of the cross section to its resonance value, and the half-height points of the Lorentzian factor. Conditional algebra of the declared model; no potential producing the factor, no decay law and no measured width or count is asserted."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.6.1 printed pages 283-284 (PDF pages 291-292): the Breit-Wigner partial cross section sigma_l(E) = 4 pi hbar^2/p^2 (2l+1) (Gamma/2)^2 / ((E-E_R)^2 + (Gamma/2)^2) and the half-height width"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

**Setup.** Adopt the declared single-channel resonance model
[[def-nrqm-scattering-single-channel-resonance-model]] with channel label
$l=0$, mass $m>0$, action constant $\hbar>0$ and parameters $E_{r}>0$,
$\Gamma>0$; read the phase shift and channel cross section by
[[pthm-nrqm-scattering-single-channel-resonance-cross-section]] clauses (a)-(c).
Put $k_{r}:=k(E_{r})=\hbar^{-1}\sqrt{2mE_{r}}$.

## Verification

**Given:** the declared model data and the statements of
[[pthm-nrqm-scattering-single-channel-resonance-cross-section]].

1.1 At $E=E_{r}$ the Lorentzian factor of that theorem equals $1$, so $\sin^{2}\delta_{0}(E_{r})=1$ and $\sigma_{0}(E_{r})=4\pi/k_{r}^{2}=4\pi\hbar^{2}/(2mE_{r})$, read in $\mathrm{m^{2}}$; at $E=E_{r}\pm\Gamma/2$ the factor equals $1/2$. [given, algebra]

2.1 Dividing the general display by the resonance value with $x=E-E_{r}$ and $y=\Gamma/2$ gives $\sigma_{0}(E)/\sigma_{0}(E_{r})=(k_{r}/k(E))^{2}\,y^{2}/(x^{2}+y^{2})=(E_{r}/E)\,y^{2}/(x^{2}+y^{2})$, since $k(E)^{2}\propto E$; at $E=E_{r}\pm\Gamma/2$ this ratio equals $(E_{r}/(E_{r}\pm\Gamma/2))\cdot(1/2)$, which differs from $1/2$ by the slowly varying factor $E_{r}/E$ only. [step 1.1, algebra]

3.1 Take the declared parameters $E_{r}=4\,\Gamma$ (both in joules). Then at $E=E_{r}+\Gamma/2=(9/2)\Gamma$ the Lorentzian factor is $1/2$ and the ratio of step 2.1 is $(4/(9/2))(1/2)=4/9$; at $E=(7/2)\Gamma$ the factor is again $1/2$ and the ratio is $(4/(7/2))(1/2)=4/7$. The first value is strictly below $1/2$ and the second strictly above, so this is the explicit asymmetry produced by the $1/E$ factor, and the half-height points of $\sigma_{0}$ itself are therefore not exactly $E_{r}\pm\Gamma/2$. [step 2.1, algebra]

4.1 By the theorem the factor $\sin^{2}\delta_{0}$ takes the value $1$ at $E_{r}$ and $1/2$ exactly at $E_{r}\pm\Gamma/2$, so its full width at half maximum in energy is $\Gamma$; this is a statement about the declared factor only, not about a measured line shape. [given, algebra] ∎

## Remarks

- **No decay claim.** The width parameter $\Gamma$ is an energy parameter of
  the declared factor; the pair does not identify $\hbar/\Gamma$ with a
  lifetime and does not derive an exponential decay law.
- **No maximum claim.** Because of the factor $1/E$ in the ratio computed in
  step 2.1, the pair makes no statement that $\sigma_{0}$ attains its maximum
  at $E_{r}$; only the Lorentzian factor's half-height width is asserted.
