---
page: metropolis-hastings-algorithm-and-invariance
title: Metropolis–Hastings kernels
status: published
items:
  - lem-common-submeasure-density-is-pointwise-minimum
  - lem-common-submeasure-and-bounded-radon-nikodym-density
  - alg-metropolis-hastings-kernel
  - lem-metropolis-hastings-density-ratio
  - thm-metropolis-hastings-kernel-is-reversible-and-invariant
examples: []
---

This page constructs the Metropolis–Hastings transition kernel from a target
probability and a general proposal kernel. It defines the accepted flow as the
greatest measure dominated by the forward and reverse proposal flows, selects a
measurable Radon–Nikodym acceptance version, and retains rejected proposals as
self-transitions. A local common-density calculation recovers the familiar
pointwise minimum density for the accepted flow and the familiar proposal ratio
when the target and proposal have compatible densities. The common-density
version fixes acceptance at one on the forward-zero set; versions agree only
almost everywhere under the forward flow. The main theorem proves reversibility
and target invariance; these facts alone do not imply irreducibility, uniqueness,
convergence, mixing rates, or a central limit theorem. See
[[general-state-mcmc-kernels-and-reversibility]] for the general-state kernel
and reversibility interface.
