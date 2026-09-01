---
id: def-subgroup-separable-and-lerf
kind: definition
title: "A subgroup is separable when it is closed in the profinite topology, and a group is LERF when every finitely generated subgroup is separable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-profinite-topology-on-an-abstract-group, def-subgroup]
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

Let $G$ be a group with its profinite topology and let $H\le G$
([[def-profinite-topology-on-an-abstract-group]], [[def-subgroup]]). The
subgroup $H$ is **separable** when it is closed in that topology; equivalently,
for every $g\in G\setminus H$ there is a finite-index normal subgroup
$N\trianglelefteq G$ such that $H\subseteq HN$ but $g\notin HN$.

The group $G$ is **LERF** when every finitely generated subgroup of $G$ is
separable.
