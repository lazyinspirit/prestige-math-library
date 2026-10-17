---
id: post-csm-examples-ensemble-preparations
kind: postulate
title: "Declared example preparations and thermodynamic interpretation"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - lem-csm-examples-gamma-gaussian-tools
  - post-csm-counting-and-physical-observables
dependency_roles:
  lem-csm-examples-gamma-gaussian-tools: mathematical-premise
  post-csm-counting-and-physical-observables: formulation-prerequisite
physical_scope: "Separate finite classical canonical, grand-canonical, spherical-shell and product preparations in the named model examples; no claim of equilibration, empirical truth, or statistical inference from observations."
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, §§1.2–1.5 and §2.2"
      url: "https://davidtong.org/pdfs/teaching/statistical-physics/statphys.pdf"
    - title: "Mehran Kardar, MIT OpenCourseWare 8.333, Statistical Mechanics I, Lecture 14, §§IV.G and IV.I (Fall 2013)"
      url: "https://live.ocw.mit.edu/courses/8-333-statistical-mechanics-i-statistical-mechanics-of-particles-fall-2013/89259a8fd183acfaec06922c88a6024b_MIT8_333F13_Lec14.pdf"
verification:
  precheck: n/a
---

## Postulate

For each named finite classical model in this page, adopt the preparation explicitly stated in its theorem. In a canonical branch, take a measurable phase space with a specified reference measure $\nu$, a measurable Hamiltonian $H$, an inverse energy parameter $\beta>0$, and a finite positive partition function $Z=\int e^{-\beta H}\,d\nu$; the adopted probability measure is $dP=Z^{-1}e^{-\beta H}\,d\nu$. In a grand-canonical branch, take disjoint particle-number sectors with sector partition functions $Z_N$ and a dimensionless activity $z>0$ for which $\Xi=\sum_{N\ge0}z^N Z_N$ is finite; sector $N$ has probability weight $z^N Z_N/\Xi$. The spherical-shell and product preparations are separate explicitly specified probability laws in their consuming theorem statements. These are alternative model assumptions, not consequences of a Hamiltonian flow and not assertions that a laboratory system realizes them.

For a canonical model whose reference measure and Hamiltonian are fixed, adopt the statistical thermodynamic definitions $U=\mathbb E_P[H]$, $F=-\beta^{-1}\log Z$, and $S=k_B(\log Z+\beta U)$ when the displayed integrals are finite. For a volume-dependent model, define the model pressure as $-\partial_V F$ only along the declared fixed-shape volume family. Here $k_B>0$ has SI units J K$^{-1}$, temperature $T>0$ has units K, and $\beta=(k_BT)^{-1}$ has units J$^{-1}$. The fixed reference measure is part of the preparation; changing it changes the numerical partition function and entropy convention.

The examples are planned to use the CSM counting interface: operational species resolution, a fixed positive action scale $a_0$ in J s, the adopted factor $1/\prod_s N_s!$ for species counts $N_s$, and explicit SI identifications. The current batch-26 draft [[post-csm-counting-and-physical-observables]] now exists and states $m_N^{\mathrm{phys}}=(\prod_aN_a!\,a_0^{dN})^{-1}dq\,dp$ for operationally indistinguishable species, with declared dependencies `def-csm-phase-space-reference` and `def-csm-statistical-state-observable`. Its phrase “dimensionless canonical coordinates” is inconsistent with assigning $a_0$ physical action units, and it does not identify the physical-coordinate normalization or equate $a_0$ with the $h_0$ references used by the consuming model items. Thus the actual carrier has been inspected but its interface is not a verified match to the planned SI convention; those consumers remain conditional and readiness-escalated pending batch-26 reconciliation. The Gaussian and gamma calculations in [[lem-csm-examples-gamma-gaussian-tools]] establish normalization identities where their hypotheses hold; they do not establish this physical preparation or any empirical equilibration.

## Remarks

A finite partition function and normalized density are mathematical conditions of each canonical consumer. No negative-temperature unbounded gas, ergodic hypothesis, observed outcome, or universal ensemble-selection principle is included.

