---
id: def-pro-p-completion-of-an-abstract-group
kind: definition
title: "The pro-p completion of an abstract group is the inverse limit over its finite p-group quotients"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-profinite-completion-of-an-abstract-group, def-pro-p-group]
verification:
  audited: 2026-09-04
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
---

## Definition

Fix a prime $p$, and let $G$ be an abstract group. Its **pro-$p$ completion** is

$$ \widehat G^{(p)}:=\varprojlim_{N\trianglelefteq G,\ G/N\text{ a finite }p\text{-group}} G/N, $$

where the indexing subgroups are ordered by reverse inclusion and the
transition map $G/N'\to G/N$ is the natural quotient homomorphism whenever
$N'\subseteq N$. This is a directed system: it contains $G$, and
$N_1\cap N_2$ is a common upper bound in the reverse-inclusion order because
$G/(N_1\cap N_2)$ embeds in the finite $p$-group $G/N_1\times G/N_2$.
Give every quotient the discrete topology and the limit its inverse-limit
topology.

This is the $p$-primary analogue of
[[def-profinite-completion-of-an-abstract-group]]: only finite quotients whose
order is a power of $p$ are retained, and the resulting topological group is
pro-$p$ by [[def-pro-p-group]].
