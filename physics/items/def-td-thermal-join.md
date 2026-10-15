---
id: def-td-thermal-join
kind: definition
title: Thermal joins and thermal equivalence
status: published
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
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: "André Thess, The Lieb–Yngvason Machine: A didactical tool for the definition of entropy in classical thermodynamics, §§2–3"
      url: https://www.dlr.de/de/tt/downloads/dokumente/institut/institutsleitung/Entropie.pdf/@@download/file
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
dependency_level: 6
---

## Definition

For the simple-compressible physical branch, a primitive label is a pair $i=(c_i,n^i)$ of constitution and fixed positive mole amounts. Its numerical state domain is exactly $\Gamma_i=\Gamma_{c_i,n^i}$ of [[def-td-equilibrium-state-domain]], with embedding $b_i(u,v)=(u,v,\hat n^i)\in D_{c_i}$. The unit map sends $(u,v)$ to $(u\,\mathrm J,v\,\mathrm{m^3})$; thus $u$ is the numerical value of the fixed internal energy, not a newly oriented energy coordinate. The underlying accessibility is the pullback of the admitted physical endpoint relation along $b_i$. Positive bulk scaling uses the declared scaling of [[post-td-bulk-additivity]], carries the mole vector to $\lambda n^i$, and retains the distinct scaled tag. More general work coordinates or formal thermometer examples require their own explicitly declared domain, coordinate unit map and endpoint relation; no identification with $D_c$ is supplied by this definition.

For two named simple-system types $i,j$ with energy/work coordinates $x=(u_i,v_i)$ and $y=(u_j,v_j)$, a thermal join is the model-declared compound state $J_{ij}(x,y)$ whose energy coordinate is $u_i+u_j$ and whose work coordinates retain the ordered pair $(v_i,v_j)$. Its join domain consists exactly of those tuples $(u,v_i,v_j)$ for which there are $u_i,u_j$ with $(u_i,v_i)$ and $(u_j,v_j)$ in the component domains and $u=u_i+u_j$. This is a tagged join state, distinct from the separated pair $(x,y)$, even when their total coordinates agree. The joined domain retains both work coordinates and has aggregate mole composition $n^i+n^j$ (in a common declared species list); it is not thereby a simple-compressible slice of one $D_c$. The contact model supplies its joined equilibrium endpoint space, endpoint coordinate map and admitted process relation. The contact model declares the pair encoding and join encoding to have the same aggregate composition and extends its accessibility relation to these two encodings; the contact axioms specify which such comparisons are admitted.

Write $x\sim_T y$ exactly when the pair $(x,y)$ and its join state $J_{ij}(x,y)$ are accessible in both directions under the declared contact operation. Here $\sim_T$ is a relation between states of the two named systems; it is not numerical equality of temperature. Nested joins use only the model’s declared reassociation and permutation identifications. The coordinate sum alone supplies no accessibility comparison.
