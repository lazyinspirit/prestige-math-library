---
id: def-td-thermal-join
kind: definition
title: Thermal joins and thermal equivalence
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: The energy-summing contact operation for the declared simple-system family; it does not prescribe a temperature scale or guarantee that contact equilibrates any chosen pair.
deps: [def-td-adiabatic-accessibility, def-td-scaled-products-and-comparison, def-td-equilibrium-state-domain, post-td-bulk-additivity]
dependency_roles:
  def-td-adiabatic-accessibility: formulation-prerequisite
  def-td-scaled-products-and-comparison: formulation-prerequisite
  def-td-equilibrium-state-domain: formulation-prerequisite
  post-td-bulk-additivity: physical-assumption
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
dependency_level: 6
---

## Definition

For two named simple-system types $i,j$ with energy/work coordinates $x=(u_i,v_i)$ and $y=(u_j,v_j)$, a thermal join is the model-declared compound state $J_{ij}(x,y)$ whose energy coordinate is $u_i+u_j$ and whose work coordinates retain the ordered pair $(v_i,v_j)$. Its join domain consists exactly of those tuples $(u,v_i,v_j)$ for which there are $u_i,u_j$ with $(u_i,v_i)$ and $(u_j,v_j)$ in the component domains and $u=u_i+u_j$. This is a tagged join state, distinct from the separated pair $(x,y)$, even when their total coordinates agree. The contact model declares the pair encoding and join encoding to have the same aggregate composition and extends its accessibility relation to these two encodings; the contact axioms specify which such comparisons are admitted.

Write $x\sim_T y$ exactly when the pair $(x,y)$ and its join state $J_{ij}(x,y)$ are accessible in both directions under the declared contact operation. Here $\sim_T$ is a relation between states of the two named systems; it is not numerical equality of temperature. Nested joins use only the model’s declared reassociation and permutation identifications. The coordinate sum alone supplies no accessibility comparison.
