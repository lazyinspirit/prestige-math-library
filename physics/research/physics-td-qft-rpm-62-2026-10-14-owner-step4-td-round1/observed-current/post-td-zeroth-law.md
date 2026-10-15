---
id: post-td-zeroth-law
kind: postulate
title: Zeroth law for the declared thermal-contact family
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Transitivity of thermal-contact equilibrium only within the explicitly declared family of admissible material states and contact protocols; no numerical temperature scale or universal cross-material calibration is assumed.
deps: [def-td-thermal-contact-constraints]
dependency_roles:
  def-td-thermal-contact-constraints: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Physics, Chapter 4 of the complete author-hosted lecture notes, §4.1
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §2.2
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
dependency_level: 5
---

## Postulate

For the declared thermal-contact family $\mathcal T$ and the contact relation $\sim_T$ of [[def-td-thermal-contact-constraints]], assume that $\sim_T$ is an equivalence relation: for all $x,y,z\in\mathcal T$,

$$x\sim_T x,\qquad x\sim_T y\Longrightarrow y\sim_T x,\qquad x\sim_T y\ \text{and}\ y\sim_T z\Longrightarrow x\sim_T z.$$

This is an adopted physical assumption about the stated contact protocols. It does not by itself construct a real-valued thermometer reading, an absolute temperature, a differentiable temperature state function, or a common calibration across different material families. Those require further operational, entropy, regularity, and calibration hypotheses.
