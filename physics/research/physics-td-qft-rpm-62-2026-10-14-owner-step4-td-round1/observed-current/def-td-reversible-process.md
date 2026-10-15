---
id: def-td-reversible-process
kind: definition
title: Reversible thermodynamic process record
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Admitted closed process records with equilibrium endpoints in the nonrelativistic macroscopic thermodynamic framework; reversibility is relative to the declared system, auxiliary-device boundary, and transfer protocol.
deps: [def-td-process-and-protocol]
dependency_roles:
  def-td-process-and-protocol: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.F and IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: David Tong, Statistical Physics, Chapter 4 of the complete author-hosted lecture notes, §§4.3.1–4.3.4
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§2.5–2.6
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
dependency_level: 4
---

## Definition

Let $P=(I_P,x_P^-,x_P^+,z_P,\kappa_P,r_P)$ be an admitted closed process record as defined in [[def-td-process-and-protocol]], with equilibrium endpoints $x_P^-,x_P^+\in D_c$. The record is **reversible relative to its declared boundary and protocol** when the model also admits a reverse record $P^{\mathrm{rev}}$ for the same system and material constitution, starting at $x_P^+$ and ending at $x_P^-$, such that every auxiliary and device state specified by the protocol is restored to its initial state and every signed boundary transfer is reversed. In particular,

$$Q[P^{\mathrm{rev}}]=-Q[P],\qquad W_{\mathrm{on}}[P^{\mathrm{rev}}]=-W_{\mathrm{on}}[P].$$

If the protocol records additional transfer channels, their signed values must likewise be negatives of their forward values. A record that is slow is not reversible merely because it is slow; it must satisfy the reverse-record condition above. Reversibility is therefore relative to what the model includes inside the boundary and which reverse controls it admits.
