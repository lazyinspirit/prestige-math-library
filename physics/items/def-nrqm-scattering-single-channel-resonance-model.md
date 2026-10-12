---
id: def-nrqm-scattering-single-channel-resonance-model
aliases: [ nrqm-scattering-single-channel-resonance-model ]
kind: definition
domain: physics
title: "The declared single-channel resonance model: pole-shaped channel factor
  and its cross-section reading"
status: draft
origin: session
dependency_level: 13
deps:
  [
    def-nrqm-scattering-framework-short-range-model,
    def-nrqm-scattering-partial-wave-and-phase-shift-readings,
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
  def-nrqm-scattering-partial-wave-and-phase-shift-readings: formulation-prerequisite
  post-nrqm-framework-state-and-composition: formulation-prerequisite
  post-nrqm-framework-observable-and-probability: formulation-prerequisite
  post-nrqm-framework-autonomous-dynamics: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: "The declared single-channel resonance model for one
  partial-wave channel of the pair's central scattering reading: the pole-shaped
  unit-modulus channel factor with resonance energy and width parameters read in
  joules, the induced phase shift, and the channel cross-section reading in m^2.
  The model is a declared conditional model of one channel; it makes no
  assertion that a potential produces this factor, claims no decay law or
  lifetime identification, and asserts no measured line width or count."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Sections
        12.6-12.6.1 printed pages 281-284 (PDF pages 289-292): resonant
        scattering and the Breit-Wigner partial cross section"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin,
        author-hosted course text), Section 15.7 printed pages 219-221:
        low-energy scattering and the scattering length"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
verification:
  precheck: n/a
---

## Definition

**(a) Framework data.** Adopt the declared short-range scattering model
[[def-nrqm-scattering-framework-short-range-model]] with mass $m>0$, spin
zero and action constant $\hbar>0$, and its partial-wave and phase-shift
reading [[def-nrqm-scattering-partial-wave-and-phase-shift-readings]] for a
declared central short-range potential. Fix a **channel label** $l\in\{0,1,2,\dots\}$
in the sense of clause (b) of that reading. Units are those of
[[def-nrqm-framework-quantities-and-units]].

**(b) The declared single-channel resonance model.** As an additional model
assumption of the pair, fix real **resonance parameters** $E_{r}$ and
$\Gamma>0$, both read in joules, and **declare** the channel factor of the
label $l$ to be
$$S_{l}(E):=\frac{E-E_{r}-i\Gamma/2}{E-E_{r}+i\Gamma/2}\qquad(E>0),$$
read for positive energies only, with the **phase shift** of the channel read
from the relation $S_{l}=e^{2i\delta_{l}}$ modulo $\pi$ and the **channel
cross-section reading**
$$\sigma_{l}(E):=\frac{4\pi}{k(E)^{2}}(2l+1)\sin^{2}\delta_{l}(E), \qquad k(E):=\frac{\sqrt{2mE}}{\hbar},$$
read in $\mathrm{m^{2}}$. The model calls $E_{r}$ the **resonance energy** and
$\Gamma$ the **width parameter**; both are declared model parameters and
neither is identified with a measured quantity. The parameter $E_r$ may be
zero or negative; calling it a resonance energy does not assign a physical
cross section at that parameter value unless $E_r>0$. Auxiliary real-axis
algebraic comparisons of the Lorentzian factor do not extend $k(E)$ or
$\sigma_l(E)$ beyond the positive-energy domain.

**(c) Status and scope.** Clauses (a)-(b) declare a conditional one-channel
model. The pair asserts no analytic continuation, no pole of the resolvent and
no property of any potential that would produce the declared factor
$S_{l}$; the model is used only to compute the induced phase shift and channel
cross section of the declared factor. In particular, no exponential decay law,
no lifetime $\hbar/\Gamma$ and no Lorentzian line shape of a measured
distribution is asserted or derived; those would be separate models with their
own assumptions and their own uncertainty qualifications.

## Remarks

- **Relation to the full cross section.** Substituting the declared channel
  factor into the phase-shift series of
  [[pthm-nrqm-scattering-partial-wave-cross-section]] produces a conditional
  total cross section for an idealized situation in which a single channel
  dominates; the pair does not assert that any declared potential has that
  behavior.
- **Width versus rate.** The width parameter $\Gamma$ is an energy parameter
  of the declared factor, not a decay rate; the identification of $\Gamma$
  with a rate times $\hbar$ requires a separate decay model and is not made
  here.
