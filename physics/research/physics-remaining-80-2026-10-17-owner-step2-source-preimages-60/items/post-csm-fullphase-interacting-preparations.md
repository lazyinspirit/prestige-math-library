---
id: post-csm-fullphase-interacting-preparations
kind: postulate
title: Classical full-phase interacting ensemble preparations
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-csm-full-marked-model
  - post-csm-counting-and-physical-observables
  - post-csm-canonical-preparation
  - post-csm-grand-preparation
  - thm-csm-total-canonical-window
dependency_roles:
  def-csm-full-marked-model: formulation-prerequisite
  post-csm-counting-and-physical-observables: formulation-prerequisite
  post-csm-canonical-preparation: formulation-prerequisite
  post-csm-grand-preparation: formulation-prerequisite
  thm-csm-total-canonical-window: mathematical-premise
physical_scope: "Adopted classical massive-particle preparations for a specified superstable regular pair model; no assertion of dynamical equilibration, measured accuracy, or finite-volume grand convergence."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture notes"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
      locator: "§§1.2–1.4: microcanonical, canonical, and grand-canonical ensembles as statistical preparations."
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
      locator: "§§4.2, 4.4, and 4.5, printed pp.192–198, 205–215 / PDF viewer pp.220–226, 233–243."
---

## Postulate

Fix the model, physical reference conventions, mass, potential and energy window specified by [[def-csm-full-marked-model]] and [[thm-csm-total-canonical-window]]. Identify the action reference a_0 of [[post-csm-counting-and-physical-observables]] with h_ref=ℓ_0p_* from the marked model. Adopt the following alternative preparations whenever their normalizations are finite and positive:

1. At fixed exact particle number $N$, controls and $T>0$, use the canonical density proportional to $e^{-\beta H}$ relative to the declared phase reference, as in [[post-csm-canonical-preparation]].
2. For a sequence satisfying all hypotheses of [[thm-csm-total-canonical-window]]—including AC, the ultrafilter extension principle, DC, HB, an interior attainable density, the periodic exact-particle log-rate hypothesis near $b$, and differentiability at $b$—at fixed exact $N_n$ use the uniform full-phase reference law restricted to its constructed band $A_n$. “Uniform” means normalized restriction of that finite reference measure; it is an energy-window preparation, not a zero-width surface measure. This postulate makes no existence claim for that specific band when those theorem hypotheses fail.
3. For particle exchange, use the countable-sector grand preparation of [[post-csm-grand-preparation]]. Its full dimensionless activity is the fugacity $z_{\rm ph}:=e^{\beta_{\rm phys}\mu}>0$, where $\beta_{\rm phys}=1/(k_BT)$ in J$^{-1}$ and the chemical potential $\mu$ is in J per particle. When matching positional activity $z=e^\alpha$ at inverse temperature $b$, choose $z_{\rm ph}=z/\kappa_b$, as in [[def-csm-full-marked-model]].

These laws are adopted statistical preparations. They do not follow from Hamiltonian energy conservation, do not assert that any isolated dynamics reaches these distributions, and do not encode an experimental observation. The band sequence is the particular controlled shrinking window constructed conditionally by [[thm-csm-total-canonical-window]].
