---
id: def-crossed-homomorphism-for-a-g-group
kind: definition
title: "Crossed homomorphism for a G-group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-action]
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
---

## Definition

Let $G$ be a group acting on a group $M$ by automorphisms, written
$g\cdot m$. A map $z:G\to M$ is a **crossed homomorphism** when

$$z(gh)=z(g)\,(g\cdot z(h))$$

for all $g,h\in G$.

When $M$ is abelian we write its law additively, and the same condition becomes

$$z(gh)=z(g)+g\cdot z(h).$$

This is the degree-one cocycle identity for a group object with
[[def-group-action]].
