---
id: post-csm-canonical-preparation
kind: postulate
title: "Canonical thermal preparation"
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
physical_scope: "Fixed finite particle number and fixed controls in a classical canonical model with a finite positive partition function; no claim that isolated Hamiltonian dynamics prepares or equilibrates this law."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, complete author-hosted lecture-note chapter 1, §§1.3.1–1.3.3"
      url: "https://davidtong.org/teaching/statistical-physics/statmechhtml/S1"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, complete course text, §4.4"
      url: "https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/STATMECH.pdf"
---

## Postulate

For a fixed $N$, controls $\lambda$, measurable classical Hamiltonian
$H_{N,\lambda}:\Gamma_N\to\mathbb R\cup\{+\infty\}$ and the declared
physical reference measure $m_N^{\rm phys}$ of
[[post-csm-counting-and-physical-observables]], choose $T>0$ and
$\beta=(k_BT)^{-1}$ in J$^{-1}$ using the SI temperature convention of
[[def-td-si-quantities]]. If
$$0<Z_N(\beta,\lambda):=\int_{\Gamma_N}e^{-\beta H_{N,\lambda}}\,dm_N^{\rm phys}<\infty,$$
adopt the canonical state with density
$$\rho_{\beta,\lambda}=Z_N(\beta,\lambda)^{-1}e^{-\beta H_{N,\lambda}}$$
relative to $m_N^{\rm phys}$. Set $e^{-\beta(+\infty)}=0$. Normalizability
is a required condition on the chosen model; bounded-below energy alone does
not imply it. This probability law is an adopted preparation, not a
consequence of deterministic mechanics or evidence of laboratory
equilibration.
