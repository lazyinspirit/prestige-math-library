---
id: def-td-isolated-compound-feasible-set
kind: definition
title: Isolated compound and feasible equilibrium set
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Feasible endpoint macrostates for a declared isolated compound of nonrelativistic macroscopic thermodynamic systems; only explicitly permitted exchanges and retained constraints are included.
deps: [def-cartesian-product, def-natural-numbers, def-td-equilibrium-state-domain, def-td-system-and-permitted-exchanges, def-td-thermal-contact-constraints, post-td-bulk-additivity, post-td-concave-fundamental-entropy]
dependency_roles:
  def-cartesian-product: mathematical-premise
  def-natural-numbers: mathematical-premise
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-system-and-permitted-exchanges: formulation-prerequisite
  def-td-thermal-contact-constraints: formulation-prerequisite
  post-td-bulk-additivity: physical-assumption
  post-td-concave-fundamental-entropy: physical-assumption
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Physics, Chapter 4 of the complete author-hosted lecture notes, §§4.1 and 4.3.3
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§2.2, 2.6 and 2.9
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.F and IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
dependency_level: 5
---

## Definition

Fix a finite list of named subsystems $s_1,\ldots,s_m$, where $m\in\mathbb N$ and $m\ge1$ ([[def-natural-numbers]]), each having its own equilibrium state domain $D_{c_i}$ as defined in [[def-td-equilibrium-state-domain]]. Their separated endpoint state space is the Cartesian product ([[def-cartesian-product]])

$$\mathcal D:=D_{c_1}\times\cdots\times D_{c_m}.$$

An **isolated compound** is the system consisting of those subsystems and any named auxiliaries or work devices included inside a declared outer boundary, with no matter or energy transfer across that outer boundary during the admitted process, in the sense of [[def-td-system-and-permitted-exchanges]]. Transfers between constituents are internal to the compound. Its total energy and other extensive coordinates use the composition convention of [[post-td-bulk-additivity]]. The additive entropy sum applies only when the constituent split is admitted by [[post-td-concave-fundamental-entropy]] as a collection of independent separated macroscopic systems; an interacting compound outside that scope needs its own total-entropy model.

For specified totals and retained barriers, an **equilibrium feasible set** is the model-declared subset $\mathcal F\subseteq\mathcal D$ of endpoint tuples satisfying those totals and exactly the exchange permissions in the declared protocol. Totals are imposed on the dimensioned coordinate maps $U_c,V_c,n_{c,j}$ of [[def-td-equilibrium-state-domain]], not by treating the dimensionless numerical coordinates as quantities with units. For example, if two constituents are in thermal contact through [[def-td-thermal-contact-constraints]] while their volumes and mole amounts remain fixed, $\mathcal F$ consists of the energy partitions $(x_A,x_B)$ with the prescribed total energy and those fixed volumes and amounts. Allowing volume or species exchange changes $\mathcal F$ only when the protocol explicitly permits that exchange; retained walls keep the corresponding coordinates fixed.

The set $\mathcal F$ may be empty, noncompact, or otherwise fail to contain an entropy-maximizing state. This definition imposes no existence, compactness, convexity, uniqueness, or attainment assumption.
