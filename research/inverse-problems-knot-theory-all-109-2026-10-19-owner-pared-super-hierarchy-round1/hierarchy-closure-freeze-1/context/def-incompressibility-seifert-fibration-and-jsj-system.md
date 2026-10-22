---
id: def-incompressibility-seifert-fibration-and-jsj-system
kind: definition
title: "Incompressibility, Seifert fibrations, and JSJ systems"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 3
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-knot-connected-sum-and-prime-knot
  - def-satellite-pattern-companion-and-winding-number
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Allen Hatcher, Notes on Basic 3-Manifold Topology"
      url: "https://pi.math.cornell.edu/~hatcher/3M/3M.pdf"
      locator: "§1.2, definitions preceding Theorem 1.9 and Lemma 1.10, printed pp.11–16"
    - title: "Walter Neumann and Gadde Swarup, Canonical decompositions of 3-manifolds"
      url: "https://arxiv.org/pdf/math/9712227"
      locator: "§§1–4, canonical surfaces and torus-boundary JSJ conventions"
verification:
  precheck: n/a
---

## Definition

Let $M$ be a compact smooth $3$-manifold. A properly embedded surface is **two-sided** if it has a product neighbourhood $F\times[-1,1]$ in $M$. A **compressing disk** for a two-sided surface $F$ is an embedded disk $D\subset M$ with $\operatorname{int}(D)\cap F=\varnothing$ and $\partial D$ an essential simple closed curve in $F$; $F$ is **incompressible** if it has no compressing disk. A **boundary-compressing disk** is an embedded disk $D$ with $\partial D=\alpha\cup\beta$, where $\alpha=D\cap F$ is an arc not cutting off a disk in $F$, $\beta=D\cap\partial M$, and $\operatorname{int}(D)$ misses $F\cup\partial M$; $F$ is **boundary-incompressible** if it has no such disk. A surface is **boundary-parallel** if it cobounds a product with a subsurface of $\partial M$, and it is **essential** if it is incompressible, boundary-incompressible, and not boundary-parallel. $M$ is **irreducible** if every embedded $2$-sphere in its interior bounds an embedded $3$-ball in $M$. An incompressible torus is boundary-parallel if it cobounds a product $T^2\times[0,1]$ with a component of $\partial M$; $M$ is **atoroidal** if every incompressible torus is boundary-parallel. A **Seifert fibration** is a decomposition into circles with local models given by fibered solid tori; in the model $(D^2\times S^1)/\langle(z,w)\mapsto(e^{2\pi i/q}z,e^{2\pi ip/q}w)\rangle$, where $\gcd(p,q)=1$, the core fiber has multiplicity $q$. Fibers of multiplicity $1$ are **regular** and those of multiplicity greater than $1$ are **exceptional**. A finite family of pairwise disjoint incompressible tori is a **JSJ system** if every component obtained by cutting $M$ along the family is atoroidal or Seifert-fibered. It is **inclusion-minimal** if no proper subfamily is a JSJ system. Atoroidal does not mean hyperbolic.

## Definition references

[Allen Hatcher, *Notes on Basic 3-Manifold Topology*](https://pi.math.cornell.edu/~hatcher/3M/3M.pdf)

[Walter Neumann and Gadde Swarup, *Canonical decompositions of 3-manifolds*](https://arxiv.org/pdf/math/9712227)
