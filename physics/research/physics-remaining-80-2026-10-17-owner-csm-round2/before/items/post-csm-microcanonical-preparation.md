---
id: post-csm-microcanonical-preparation
kind: postulate
title: "Accessible shell or band preparation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - post-csm-counting-and-physical-observables
  - def-csm-statistical-state-observable
  - def-csm-phase-space-reference
  - thm-csm-regular-shell-coarea
  - def-axiom-of-choice
dependency_roles:
  post-csm-counting-and-physical-observables: formulation-prerequisite
  def-csm-statistical-state-observable: formulation-prerequisite
  def-csm-phase-space-reference: formulation-prerequisite
  thm-csm-regular-shell-coarea: formulation-prerequisite
  def-axiom-of-choice: formulation-prerequisite
physical_scope: "Fixed-N classical models with a nonempty compact regular energy shell or a finite compact regular energy band under the declared phase reference; the shell branch carries its exact full-AC mathematical premise, and neither branch infers ergodicity or equilibration."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 1, §1.2"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.2"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Postulate

For the full-shell branch, assume the Axiom of Choice required by the
mathematical supplier [[thm-csm-regular-shell-coarea]]. For a chosen
Hamiltonian $H$ and a
nonempty compact regular full-energy shell $\Sigma_E=H^{-1}(\{E\})$ with
finite positive coarea measure $\mu_E$, adopt the microcanonical state
$$P_E=\mu_E/\mu_E(1)$$
as the probability law for the specified preparation. Here $\mu_E$ is the
shell measure disintegrating the declared phase reference over energy; its
construction and hypotheses are exactly those in that theorem. The constant
$c_N$ in the mathematical reference is chosen to match the fixed-$N$ physical
reference of [[post-csm-counting-and-physical-observables]]; the normalization
defining $P_E$ also cancels a common positive rescaling of that reference.

Alternatively, for a specified compact regular energy band $B\subset J$ with
$$0<m_N^{\rm phys}(H^{-1}(B))=\int_B\mu_E^{\rm phys}(1)\,dE<\infty,$$
one may adopt the normalized restricted physical reference
$$P_B(A)=\frac{m_N^{\rm phys}(A\cap H^{-1}(B))}{m_N^{\rm phys}(H^{-1}(B))}$$
for each measurable phase event $A$. Here $m_N^{\rm phys}$ is the declared
fixed-$N$ reference of
[[post-csm-counting-and-physical-observables]], and
$\mu_E^{\rm phys}$ is its coarea measure; choosing this physical positive
constant in [[def-csm-phase-space-reference]] scales both measures in the
coarea identity equally. This is a distinct finite-band
preparation, uniform relative to phase volume in the band. Restricting either
law to a dynamically accessible invariant subset or imposing further
conserved quantities defines another preparation and requires a separately
specified measure. Neither law nor ergodicity is deduced from deterministic
Hamiltonian evolution.
