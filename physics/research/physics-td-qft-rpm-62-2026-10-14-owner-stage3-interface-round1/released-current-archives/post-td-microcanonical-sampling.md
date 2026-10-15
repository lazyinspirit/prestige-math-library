---
id: post-td-microcanonical-sampling
kind: postulate
domain: physics
title: Microcanonical sampling assumption
status: draft
origin: pipeline
library: physics
dependency_level: 4
deps: [def-axiom-of-choice, def-td-finite-microstate-model, def-td-regular-hamiltonian-shell-preparation, def-td-si-quantities]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-td-finite-microstate-model: formulation-prerequisite
  def-td-regular-hamiltonian-shell-preparation: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
provenance:
  statement: ai-altered
  proof: not-applicable
physical_scope: Adopted uniform weighting for a nonempty finite energy window or the normalized coarea law on an admitted regular compact Hamiltonian energy shell; neither rule is a consequence of dynamics or a claim about measured samples.
sources:
  references:
    - title: David Tong, Statistical Physics, complete lecture notes, §1.2 (printed pp. 2–16)
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §4.2 (printed pp. 192–198)
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf
verification:
  precheck: n/a
---

## Postulate

For the regular-shell branch below, assume AC as required by
[[def-td-regular-hamiltonian-shell-preparation]] and its coarea-measure
supplier. No choice assumption is needed for the separate finite-window branch.

For a finite microstate model and a declared energy value $E_0$ in joules and resolution $\delta\ge0$ in joules, define the admitted window
$$\Omega_{E_0,\delta}:=\{x\in\Omega:|E(x)-E_0|\le\delta\}.$$
When this set is nonempty, adopt the uniform preparation $P(x)=|\Omega_{E_0,\delta}|^{-1}$ on it and zero outside. Its dimensionless Boltzmann entropy is $\log|\Omega_{E_0,\delta}|$, and its physical entropy convention is $k_{\mathrm B}\log|\Omega_{E_0,\delta}|$ in $\mathrm{J\,K^{-1}}$. A zero-width window is allowed only when it contains at least one microstate.

For a continuous classical model, when the regular-band, nonempty-shell, and normalization hypotheses in [[def-td-regular-hamiltonian-shell-preparation]] hold, the microcanonical preparation is the normalized shell measure $\nu_{\hat E}$ defined there. The shell preparation does not require a globally defined flow. These finite-window and regular-shell rules are adopted model preparations. They do not assert Hamiltonian ergodicity, equality with long-time averages, canonical sampling, or equilibration.
