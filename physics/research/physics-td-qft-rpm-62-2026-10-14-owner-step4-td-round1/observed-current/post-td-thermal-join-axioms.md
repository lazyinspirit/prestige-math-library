---
id: post-td-thermal-join-axioms
kind: postulate
title: Thermal-contact axioms T1–T4
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Adopted existence, reversible-splitting, transitivity and transversality assumptions for thermal contact among the declared simple-system family and its finite joins.
deps: [def-td-thermal-join, post-td-accessibility-a1-a6, post-td-simple-system-geometric-axioms]
dependency_roles:
  def-td-thermal-join: formulation-prerequisite
  post-td-accessibility-a1-a6: operational-prerequisite
  post-td-simple-system-geometric-axioms: operational-prerequisite
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: "André Thess, The Lieb–Yngvason Machine: A didactical tool for the definition of entropy in classical thermodynamics, §§2–3"
      url: https://www.dlr.de/de/tt/downloads/dokumente/institut/institutsleitung/Entropie.pdf/@@download/file
verification:
  precheck: n/a
dependency_level: 8
---

## Postulate

Use thermal joins and $\sim_T$ exactly as defined in [[def-td-thermal-join]]. For every ordered pair of simple systems and every admitted finite join, adopt:

**T1 (joining).** $(x,y)\prec J_{ij}(x,y)$.

**T2 (reversible splitting).** Every join state has at least one split into component states at its stated total energy and work coordinates that is reversible to the join state. Also, for every state $x$ and every $0<t<1$, the equal-state scaled split $(t x,(1-t)x)$ is reversible to $x$.

**T3 (thermal-equilibrium transitivity).** If $x\sim_T y$ and $y\sim_T z$ in the model’s declared contact family, then $x\sim_T z$. This requires the model to provide the relevant joined types and identifications.

**T4 (transversality).** For each simple-system state $x$, there are $x_0,x_1$ in that system with $x_0\prec\prec x\prec\prec x_1$ and $x_0\sim_T x_1$.

The axioms apply to admitted types and their joins only. T4 is an assumption about the contact relation; it is not a consequence of an equation of state or of a thermometer reading. The stronger range condition T5 is stated separately in [[post-td-universal-thermal-range]], and join coherence C1 is separately stated in [[post-td-equilibrium-join-coherence]].
