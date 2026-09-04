---
id: def-frattini-subgroup-of-a-profinite-group
kind: definition
title: "The Frattini subgroup of a profinite group is the intersection of its maximal proper closed subgroups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
    - title: "Alexander Lubotzky, Combinatorial group theory for pro-p groups"
      url: "https://www.researchgate.net/publication/242982224_Combinatorial_group_theory_for_pro-p_groups"
---

## Definition

For a profinite group $G$, the **Frattini subgroup** is

$$ \Phi(G):=\bigcap\{M<M\text{ maximal proper closed subgroup of }G\}. $$

The closure condition is part of the definition: in the profinite setting the
maximal subgroups relevant to generation theory are maximal among proper closed
subgroups, not arbitrary abstract subgroups.
