---
id: def-knot-meridian-and-preferred-longitude
kind: definition
title: "Meridian and preferred longitude"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-knot-exterior
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-normal-and-conormal-bundles-of-an-embedded-submanifold
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf"
      locator: "Section 4.4, meridian, longitude, and peripheral-system conventions"
    - title: "Danny Calegari, Introduction to Knot Theory"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "Section 3.3, oriented meridian convention, pp. 29-30"
verification:
  precheck: n/a
---

## Definition

Assume countable choice as in the chosen tubular-neighbourhood data. Let $K$ be a smooth oriented knot with chosen exterior $E_K$ and boundary torus $T_K=\partial E_K$, and let $p:T_K\to K$ be the projection of the chosen normal-disk tube. Orient each normal disk so that its positive tangent direction followed by its oriented normal basis agrees with the orientation of $S^3$. A **meridian** $\mu$ is the oriented boundary of one such normal disk. A **degree-one parallel curve** is a simple closed curve $\lambda$ in $T_K$ for which $p|_\lambda:\lambda\to K$ has degree $+1$. A **preferred longitude** is a degree-one parallel curve satisfying $i_*[\lambda]=0$ in $H_1(E_K;\mathbb Z)$, where $i:T_K\hookrightarrow E_K$ is inclusion. This is a condition on a curve; this definition alone asserts neither existence nor uniqueness. Reversing the orientation of $K$ reverses the orientations of both $\mu$ and any degree-one parallel curve. If a subgroup $P\le\pi_1(E_K,x)$ is specified using a path from $x$ to $T_K$, record it only up to replacing it by $gPg^{-1}$ for $g\in\pi_1(E_K,x)$.

## Definition references

[Cattabriga and Francaviglia, §4.4](https://poisson.phc.dm.unipi.it/~camponovo/libri/knot.pdf)

[Calegari, §3.3](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)
