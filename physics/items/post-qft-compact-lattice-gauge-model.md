---
id: post-qft-compact-lattice-gauge-model
kind: postulate
domain: physics
library: physics
title: Specified finite spatial compact U(1) gauge regulator
status: published
origin: pipeline
pipeline_run: physics-td-qft-rpm-62-2026-10-14
dependency_level: 4
deps:
  - def-qft-framework-units
  - def-qft-compact-lattice-gauge-data
  - post-qft-constructed-model-and-measurement
  - def-countable-choice
dependency_roles:
  def-qft-framework-units: formulation-prerequisite
  def-qft-compact-lattice-gauge-data: formulation-prerequisite
  post-qft-constructed-model-and-measurement: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: "Adopted fixed finite-graph U(1) rotor and finite-CAR regulator with a fixed background and bounded interaction data. Hamiltonian coefficients are assigned energy units; no spatial embedding, continuum approximation or limit, continuum QED identification, empirical realization, or measured prediction is asserted."
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "John B. Kogut, An Introduction to Lattice Gauge Theory and Spin Systems, Reviews of Modern Physics 51 (1979), §VI.C"
      url: "https://chimera.roma1.infn.it/ENZO/FC/ESTRATTI/DUALITY/kogut1979.pdf"
      locator: "Complete 55-page review; printed pp. 694–696, compact angular links, integer electric spectrum, Hamiltonian, local gauge generator and Gauss law."
    - title: "Patrick Emonts and Erez Zohar, Gauss Law, Minimal Coupling and Fermionic PEPS for Lattice Gauge Theories, SciPost Physics Lecture Notes 12 (2020), §§2.1–2.2"
      url: "https://arxiv.org/html/1807.01294"
      locator: "Full-text HTML lecture notes; printed pp. 3–6, compact U(1) link rotor, integer electric basis, fermionic matter and physical Gauss sector. Their worked model is not identified with this finite-graph model."
verification:
  sources_checked:
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    by: "Completed delegated workflow source/scope reviewers and adjudicators; owner accepted existing evidence"
---

## Postulate

Adopt as one selected regulated physical model the finite oriented-graph data
of [[def-qft-compact-lattice-gauge-data]], with finite nonempty vertex and link
sets, compact $U(1)$ rotor variables on links, finite CAR matter at vertices,
fixed integer background $b_x\in\{0,\ldots,s\}$, and the displayed Gauss
operators. The mathematical definition specifies
$\mathcal H_{\rm kin}=L^2(\mathbb T^E)\widehat\otimes\mathcal F_a(\mathbb C^{s|V|})$,
the integer-spectrum electric operators $E_e$, link unitaries $U_e$, and the
Hamiltonian $H=H_0+V_B+V_F$ on its stated maximal domain
$D(H_0)$. This physical adoption does not add an embedding of the graph into
space or alter the mathematical definition's operator domains.

For the physical-unit assignment, the link angles, $E_e$, $U_e$, and finite CAR
operators are dimensionless. Assign units joules to $\lambda_E$, every
$\lambda_p$, and every entry of $M_x$ and $T_e$ in the displayed Hamiltonian;
then $H$ has units joules and $tH/\hbar$ is dimensionless with $t$ in seconds
and $\hbar$ in joule-seconds, as in [[def-qft-framework-units]]. The graph is
finite regulator data, not a coordinate lattice with an assigned spacing.

The adopted reading is limited to a model whose mathematical data are actually
constructed, consistent with [[post-qft-constructed-model-and-measurement]].
The CAR construction inside [[def-qft-compact-lattice-gauge-data]] is
conditional on Countable Choice and its inspected draft Fock/CAR supplier
interfaces; this postulate does not confer proof acceptance on those carriers.
It adopts no experimental result, measurement probability, continuum
approximation, Lorentz-invariant continuum theory, or claim that the model
describes nature.
