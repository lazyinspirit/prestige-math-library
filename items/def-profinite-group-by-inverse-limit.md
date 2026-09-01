---
id: def-profinite-group-by-inverse-limit
kind: definition
title: "A profinite group is a topological group isomorphic to an inverse limit of finite discrete groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected, def-topological-group]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Definition

A **profinite group** is a topological group that is topologically isomorphic to
an inverse limit of finite discrete groups.

Because inverse limits on this page are given concretely as compatible tuples,
this means precisely that the group admits a homeomorphic group isomorphism
onto some $\varprojlim G_i$ as in
[[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]
and [[def-topological-group]].
