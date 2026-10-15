---
id: post-td-equilibrium-join-coherence
kind: postulate
title: Equilibrium-join coherence C1
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: An explicit coherence assumption for nested thermal joins of equilibrated pairs; it supplements the energy-summing join rule and is not inferred from that rule.
deps: [def-td-thermal-join, post-td-thermal-join-axioms]
dependency_roles:
  def-td-thermal-join: formulation-prerequisite
  post-td-thermal-join-axioms: operational-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§IV.A–IV.B
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: "André Thess, The Lieb–Yngvason Machine: A didactical tool for the definition of entropy in classical thermodynamics, §§2–3"
      url: https://www.dlr.de/de/tt/downloads/dokumente/institut/institutsleitung/Entropie.pdf/@@download/file
verification:
  precheck: n/a
---

## Postulate

Adopt **C1 (equilibrium-join coherence)**: whenever $x\sim_T y$, the joined state $J_{ij}(x,y)$ is thermally equivalent to each constituent, $J_{ij}(x,y)\sim_T x$ and $J_{ij}(x,y)\sim_T y$, using the model’s declared nested-join identifications.

C1 is an additional postulate of this completed contact branch. The source’s Theorem 4.8 is stated with T1–T4; the local conditional calibrator route uses the constituent-to-join bridge in addition to the stronger T5 range assumption. Neither fact licenses deriving C1 from $u=u_i+u_j$, from T1–T4, or from transitivity alone. The displayed source supports the contact context, not the claim that its bare printed axioms already contain C1.
