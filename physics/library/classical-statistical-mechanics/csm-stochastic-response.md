---
page: csm-stochastic-response
title: "Finite reversible stochastic rate model and thermal coupling"
status: draft
requires:
  - csm-collision-transport
  - csm-mean-field-hierarchy
  - cm01-framework-quantities-and-geometry
items:
  - def-csm-dk-finite-reversible-rate-model
  - post-csm-dk-selected-thermal-langevin-bath
  - post-csm-dk-selected-reversible-bath-rates
  - thm-csm-dk-nonexplosive-ctmc-and-gap
  - thm-csm-dk-ou-velocity-diffusion-response
  - pthm-csm-dk-ou-green-kubo-einstein
  - rem-csm-dk-hard-limit-dispositions
  - thm-csm-dk-finite-rate-fluctuation-response
  - thm-csm-dk-markov-entropy-and-strong-averages
  - thm-csm-dk-strong-lumpability
  - pthm-csm-dk-finite-bath-response
examples: []
library: physics
---
This page defines a finite reversible continuous-time rate model and separately adopts two restricted thermal couplings: a one-dimensional inertial velocity Langevin bath and a finite-state bath with a specified symmetric field-dependent rate rule. The mathematical theorems derive the finite-chain construction, spectral gap, relative-information decay, time averages, rate response and OU displacement variance from their stated inputs.

Physical theorems on the page are conditional predictions of those adopted models. They preserve the SI dimensions and the finite-state or scalar-OU regime; they assert no measured rates, material calibration, experimental observation or universal transport law.
