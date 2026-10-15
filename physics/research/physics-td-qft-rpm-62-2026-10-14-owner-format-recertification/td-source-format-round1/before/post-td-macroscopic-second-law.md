---
id: post-td-macroscopic-second-law
kind: postulate
title: Macroscopic second law for isolated compounds
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Endpoint entropy changes for admitted macroscopic processes of an isolated compound, including its named auxiliaries; no pointwise entropy function is assigned to nonequilibrium intermediate configurations.
deps: [post-td-concave-fundamental-entropy, def-td-system-and-permitted-exchanges, def-td-process-and-protocol, def-td-reversible-process]
dependency_roles:
  post-td-concave-fundamental-entropy: physical-assumption
  def-td-system-and-permitted-exchanges: formulation-prerequisite
  def-td-process-and-protocol: formulation-prerequisite
  def-td-reversible-process: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Physics, Chapter 4 of the complete author-hosted lecture notes, §4.3
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§2.5–2.6
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.F and IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
dependency_level: 5
---

## Postulate

For every admitted closed process record $P\in\mathcal P_{\mathrm{cl}}(s)$ of an isolated compound, assume its declared outer boundary is isolated throughout, its material constitution is fixed, its center-of-mass kinetic and separately tracked external-field potential energies have zero endpoint change, and both endpoint preparations are equilibrium macrostates. Include every named auxiliary and work device in the compound, and restrict to constituent splits for which [[post-td-concave-fundamental-entropy]] supplies the additive total entropy. The adopted macroscopic second law is

$$S_{\mathrm{tot}}(x^+)-S_{\mathrm{tot}}(x^-)\ge0,$$

where $S_{\mathrm{tot}}$ is the sum of the constituent entropies in [[post-td-concave-fundamental-entropy]]. The process record and the zero-change conditions are those of [[def-td-process-and-protocol]]. The process may pass through nonequilibrium configurations; this postulate compares endpoint entropies only and assigns no entropy function to those intermediate configurations.

For an admitted reversible operation in the sense of [[def-td-reversible-process]], adopt zero total entropy change. An admitted irreversible adiabatic operation may have a strictly positive entropy increase, but strict increase is not required for every irreversible operation. The postulate does not state monotonicity for an open compound, an externally driven process, a subsystem that exchanges energy with an omitted environment, or every microscopic trajectory.
