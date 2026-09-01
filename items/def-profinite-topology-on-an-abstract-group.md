---
id: def-profinite-topology-on-an-abstract-group
kind: definition
title: "The profinite topology on a group uses finite-index normal subgroups as an identity-neighbourhood basis"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group, def-normal-subgroup, def-index]
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Definition

Let $G$ be an abstract group ([[def-group]]). The **profinite topology** on $G$
is the group topology whose neighbourhood basis at the identity consists of the
finite-index normal subgroups of $G$ ([[def-normal-subgroup]], [[def-index]]).

A subset $U\subseteq G$ is then declared open when for every $g\in U$ there is
a finite-index normal subgroup $N\trianglelefteq G$ with $gN\subseteq U$.
