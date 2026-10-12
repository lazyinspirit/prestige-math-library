---
id: ex-nrqm-scattering-single-channel-resonance-cross-section
kind: example
domain: physics
title: "The declared single-channel resonance: Lorentzian factor, half-height
  points and resonance-value cross section"
status: draft
origin: session
dependency_level: 15
deps:
  [
    def-nrqm-scattering-single-channel-resonance-model,
    pthm-nrqm-scattering-single-channel-resonance-cross-section,
    def-nrqm-scattering-partial-wave-and-phase-shift-readings,
    def-nrqm-framework-quantities-and-units,
    post-nrqm-framework-state-and-composition,
    post-nrqm-framework-observable-and-probability,
    post-nrqm-framework-autonomous-dynamics,
    def-nrqm-observables-framework-observable-and-outcome-law,
    def-countable-choice,
    def-axiom-of-choice
  ]
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
physical_scope: "The declared single-channel resonance model with l=0, E_r>0 and
  arbitrary Gamma>0: its resonance-centre cross section and positive-energy
  ratio, and the auxiliary full-real-axis Lorentzian half-height points and
  width. Each half-height point has a physical reading only if positive; no
  Gamma<2E_r restriction is imposed on the model. Conditional algebra only; no
  producing potential, decay law or measured width or count is asserted."
sources:
  references:
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section
        12.6.1 printed pages 283-284 (PDF pages 291-292): the Breit-Wigner
        partial cross section sigma_l(E) = 4 pi hbar^2/p^2 (2l+1) (Gamma/2)^2 /
        ((E-E_R)^2 + (Gamma/2)^2) and the half-height width"
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
Put $k_r:=k(E_r)=\hbar^{-1}\sqrt{2mE_r}$ and let $L(E)$ on
$\mathbb R$ denote the auxiliary Lorentzian factor of that theorem.

## Verification

**Given:** the declared model data and the statements of
[[pthm-nrqm-scattering-single-channel-resonance-cross-section]].

1.1 Since $E_r>0$, the theorem can be evaluated at the physical energy $E_r$, giving $\sin^2\delta_0(E_r)=L(E_r)=1$ and $\sigma_0(E_r)=4\pi/k_r^2=4\pi\hbar^2/(2mE_r)$ in $\mathrm{m^2}$. The real-axis factor has $L(E_r\pm\Gamma/2)=1/2$. The upper point is always positive; the lower point is positive exactly if $\Gamma<2E_r$, equals the excluded boundary $0$ if $\Gamma=2E_r$, and is negative if $\Gamma>2E_r$. Only positive points have physical phase and cross-section readings. [given, algebra]

2.1 For every physical $E>0$, with $x:=E-E_r$ and $y:=\Gamma/2>0$, dividing by the positive resonance-centre value yields $\sigma_0(E)/\sigma_0(E_r)=(k_r/k(E))^2 y^2/(x^2+y^2)=(E_r/E)L(E)$. At the always-positive upper point the ratio is $E_r/(2(E_r+y))$; at the lower point it is $E_r/(2(E_r-y))$ only when $E_r-y>0$. If that lower point is zero or negative, the real-axis identity $L(E_r-y)=1/2$ is still valid but no physical ratio is evaluated there. The factor $E_r/E$ is energy dependent and need not vary slowly for arbitrary $\Gamma$. [step 1.1, given, algebra]

3.1 Take the declared parameters $E_{r}=4\,\Gamma$ (both in joules). Then at $E=E_{r}+\Gamma/2=(9/2)\Gamma$ the Lorentzian factor is $1/2$ and the ratio of step 2.1 is $(4/(9/2))(1/2)=4/9$; at $E=(7/2)\Gamma$ the factor is again $1/2$ and the ratio is $(4/(7/2))(1/2)=4/7$. The first value is strictly below $1/2$ and the second strictly above, so this is the explicit asymmetry produced by the $1/E$ factor, so these factor half-height locations are not the locations where $\sigma_0(E)=\sigma_0(E_r)/2$; no maximum of $\sigma_0$ is used in this comparison. [step 2.1, algebra]

4.1 On the full real axis, $L$ reaches $1$ at $E_r$ and $1/2$ exactly at $E_r\pm\Gamma/2$, so its full width at half maximum is $\Gamma$. On the positive physical axis both half-height locations are present exactly when $\Gamma<2E_r$; for $\Gamma\ge2E_r$ the lower location is excluded. This qualifies the physical interpretation without narrowing the allowed $E_r>0$, $\Gamma>0$ parameters or changing the real-axis width identity. The example of step 3.1 keeps both half-height points positive and shows that the cross-section ratios there differ from $1/2$. [given, step 1.1, step 2.1, step 3.1, algebra] ∎

## Remarks

- **No decay claim.** The width parameter $\Gamma$ is an energy parameter of
  the declared factor; the pair does not identify $\hbar/\Gamma$ with a
  lifetime and does not derive an exponential decay law.
- **No maximum claim.** Because of the factor $1/E$ in the ratio computed in
  step 2.1, the pair makes no statement that $\sigma_{0}$ attains its maximum
  at $E_{r}$; only the auxiliary Lorentzian factor's full-real-axis half-height width is asserted, with positive-energy locations qualified above.
