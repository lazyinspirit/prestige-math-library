---
id: ex-nrqm-scattering-long-range-tail-and-coulomb-warning
aliases: [nrqm-scattering-long-range-tail-and-coulomb-warning]
kind: example
domain: physics
title: "A Yukawa tail satisfies the resolvent-tail class while the Coulomb limit does not"
status: draft
origin: session
dependency_level: 15
deps: [def-nrqm-scattering-framework-short-range-model, pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness, def-nrqm-scattering-coulomb-dollard-model, def-nrqm-framework-quantities-and-units, post-nrqm-framework-state-and-composition, post-nrqm-framework-observable-and-probability, post-nrqm-framework-autonomous-dynamics, def-nrqm-observables-framework-observable-and-outcome-law, def-real-exponential-function-and-e, thm-exponential-beats-every-polynomial, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  def-nrqm-scattering-framework-short-range-model: formulation-prerequisite
  pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness: physical-result
  def-nrqm-scattering-coulomb-dollard-model: formulation-prerequisite
  def-nrqm-framework-quantities-and-units: formulation-prerequisite
  post-nrqm-framework-state-and-composition: physical-assumption
  post-nrqm-framework-observable-and-probability: physical-assumption
  post-nrqm-framework-autonomous-dynamics: physical-assumption
  def-nrqm-observables-framework-observable-and-outcome-law: formulation-prerequisite
  def-real-exponential-function-and-e: mathematical-premise
  thm-exponential-beats-every-polynomial: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
physical_scope: "The declared short-range scattering model with a Yukawa (screened Coulomb) potential of coupling g>0 and screening parameter mu>0: the explicit split into a compactly supported square-integrable part and a bounded exponentially decaying tail, the verification that the tail satisfies the decaying-tail hypothesis of the resolvent-tail class, hence asymptotic completeness of the model, and the failure of that hypothesis in the unscreened Coulomb limit mu=0, whose treatment belongs to the declared long-range model. Conditional on the declared model and cited mathematics; no measured screening length, coupling or cross section is asserted."
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Section 15.4 printed pages 214-215: the Yukawa potential reducing to the Coulomb potential as the screening parameter tends to zero"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "J. Binney and D. Skinner, The Physics of Quantum Mechanics, Section 12.4 printed pages 271-275 (PDF pages 279-283): scattering off hydrogen with a shielded Coulomb potential"
      url: "https://www-thphys.physics.ox.ac.uk/people/JamesBinney/qb.pdf"
verification:
  precheck: pass
---

## Example

**Setup.** Adopt the declared short-range scattering model
[[def-nrqm-scattering-framework-short-range-model]] with mass $m>0$, spin
zero, action constant $\hbar>0$, and declare the **Yukawa potential**
$$V_{g,\mu}(x):=-g\,\frac{e^{-\mu|x|}}{|x|}\qquad(x\ne0),\qquad g>0,\ \mu>0,$$
read in joules, with $g$ in $\mathrm{J\,m}$ and $\mu$ in $\mathrm{m^{-1}}$.

## Verification

**Given:** the declared model data and the hypotheses of
[[pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness]] clauses (c), (d).

1.1 Put $V_{\mathrm{loc}}:=V_{g,\mu}\mathbf 1_{\{|x|<1\}}$ and $V_{\mathrm{tail}}:=V_{g,\mu}\mathbf 1_{\{|x|\ge1\}}$, so that $V_{g,\mu}=V_{\mathrm{loc}}+V_{\mathrm{tail}}$; $V_{\mathrm{loc}}$ is supported in the closed unit ball, and $\int_{\mathbb R^{3}}|V_{\mathrm{loc}}|^{2}dx=4\pi g^{2}\int_{0}^{1}e^{-2\mu r}dr\le4\pi g^{2}<\infty$, so $V_{\mathrm{loc}}\in L^{2}(\mathbb R^{3})$ is compactly supported and $V_{\mathrm{tail}}$ is bounded by $g$. [given, algebra]

2.1 For $|x|\ge1$ one has $|V_{\mathrm{tail}}(x)|=g\,e^{-\mu|x|}/|x|\le g\,e^{-\mu|x|}$, and for every $\delta>0$ the function $r\mapsto e^{-\mu r}(1+r)^{1+\delta}$ is bounded on $[0,\infty)$: on a compact initial interval it is continuous hence bounded, and beyond some $R_{0}$ the estimate $e^{\mu r}\ge C(1+r)^{\delta+1}$ of the cited dominance theorem gives $e^{-\mu r}(1+r)^{1+\delta}\le C^{-1}$; hence with the constant $C_{\delta}:=\sup_{r\ge0}e^{-\mu r}(1+r)^{1+\delta}<\infty$ one has $|V_{\mathrm{tail}}(x)|\le gC_{\delta}(1+|x|)^{-1-\delta}$ for all $|x|\ge1$, and a fortiori almost everywhere on $\mathbb R^{3}$ after adjusting the constant, since the region $|x|<1$ is anyway covered by the local part. [step 1.1, given, algebra]

3.1 By 1.1 and 2.1 the declared Yukawa potential has the decaying-tail form of [[pthm-nrqm-scattering-resolvent-tail-asymptotic-completeness]] clause (c) with any $\delta>0$; hence, by that theorem, the model's interacting operator is self-adjoint on $W^{2,2}$, its wave operators exist and are asymptotically complete with vanishing singular continuous spectrum, and its scattering operator is unitary. [step 2.1, given, algebra]

4.1 As $\mu\to0^{+}$ the potential $V_{g,\mu}$ tends pointwise to $-g/|x|$, the pure Coulomb form with $\kappa=g$; for the limiting potential, and for every split into a compactly supported part and a remainder, the quotient $(1+|x|)^{1+\delta}|V_{\mathrm{tail}}(x)|=g(1+|x|)^{1+\delta}/|x|$ tends to $+\infty$ as $|x|\to\infty$ for every $\delta>0$, so the sufficient decay hypothesis of that theorem fails and the Coulomb case is not covered by the short-range class; its treatment is the separate declared long-range model [[def-nrqm-scattering-coulomb-dollard-model]], for which the theorem supplies no ordinary-comparison statement. [step 2.1, given, algebra] ∎

## Remarks

- **What is checked.** The example verifies the class hypothesis for the
  screened potential through explicit integrability and boundedness, and it
  verifies the failure of the sufficient decay hypothesis in the unscreened
  limit; it asserts nothing about the actual size of the resolvent tail
  function $h(r)$ for the Yukawa potential beyond the class membership.
- **No measured screening.** The screening parameter $\mu$ is a declared
  model parameter, not a measured inverse length, and the limit $\mu\to0^{+}$
  is a limit inside the declared family of models.
