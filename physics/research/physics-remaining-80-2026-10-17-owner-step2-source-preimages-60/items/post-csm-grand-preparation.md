---
id: post-csm-grand-preparation
kind: postulate
title: "Grand canonical particle-exchange preparation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - post-csm-counting-and-physical-observables
  - def-csm-statistical-state-observable
  - def-td-si-quantities
dependency_roles:
  post-csm-counting-and-physical-observables: formulation-prerequisite
  def-csm-statistical-state-observable: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
physical_scope: "Classical particle exchange across countably many finite-N sectors at fixed temperature and chemical potential, only when the grand normalization converges."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 1, §1.4"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.7"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Postulate

Let $T>0$, $\beta=(k_BT)^{-1}$ and let the chemical potential $\mu$ have
units J per particle under the SI convention
[[def-td-si-quantities]]. On the disjoint union
$\bigsqcup_{N=0}^\infty\Gamma_N$, use the sum of the sector reference
measures from [[post-csm-counting-and-physical-observables]], with a vacuum
sector of reference mass one. Let each $H_N$ be measurable and let
$$\Xi(\beta,\mu):=\sum_{N=0}^\infty\int_{\Gamma_N} e^{-\beta(H_N-\mu N)}\,dm_N^{\rm phys}$$
satisfy $0<\Xi<\infty$. Adopt the joint state with density
$\Xi^{-1}e^{-\beta(H_N-\mu N)}$ on sector $N$. The finiteness condition is
part of the model; it requires control of the sector sum and is not implied
by each finite-sector partition function being finite. Particle-exchange
preparation is an assumption, not a deduction from fixed-$N$ dynamics.
