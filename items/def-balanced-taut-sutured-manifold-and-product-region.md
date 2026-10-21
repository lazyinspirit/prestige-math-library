---
id: def-balanced-taut-sutured-manifold-and-product-region
kind: definition
title: "Balanced taut sutured manifolds and characteristic product regions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: []
dependency_level: 0
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Yi Ni, Knot Floer homology detects fibred knots, arXiv:math/0607156v4, §§2.1 and 6.1"
      url: "https://arxiv.org/pdf/math/0607156v4"
      locator: "Printed pp.3–5 and 16–17; sutured manifolds, product disks and annuli, horizontal surfaces, vertical primeness, and characteristic product region"
    - title: "Andras Juhasz, Floer homology and surface decompositions, arXiv:math/0609779v3, §§2 and 9"
      url: "https://arxiv.org/pdf/math/0609779v3"
      locator: "Printed pp.3–5 and 31–38; balanced and taut sutured manifolds, horizontal decompositions, and the rank-one/product criterion"
verification:
  precheck: n/a
---

## Definition

A **sutured manifold** $(M,\gamma)$ consists of a compact oriented $3$-manifold $M$ with boundary and a union $\gamma$ of pairwise disjoint annuli and tori in $\partial M$. Each annulus contains a suture, its oriented core circle; write $A(\gamma)$ for the annuli and $s(\gamma)$ for the union of their cores. Orient each component of $R(\gamma)=\partial M\setminus\operatorname{int}(\gamma)$ so that its boundary orientation agrees in the annulus with the homology class of the suture. The regions whose normal points out of $M$ form $R_+(\gamma)$ and those whose normal points into $M$ form $R_-(\gamma)$. The sutured manifold is **balanced** when $M$ has no closed component, $\chi(R_+)=\chi(R_-)$, and every component of $\partial M$ meets an annular component of $\gamma$. It is **irreducible** when every embedded $2$-sphere in $M$ bounds a $3$-ball in $M$. A properly embedded surface is **incompressible** when it has no compressing disk, meaning an embedded disk whose boundary is a loop on the surface that does not bound a disk on that surface. For a compact surface $S$ put $x(S)=\sum_{S_j}\max(0,-\chi(S_j))$, where the sum is over its connected components. The Thurston norm of a relative homology class in $H_2(M,\gamma;\mathbb Z)$ is the minimum of $x(S)$ over properly embedded oriented representatives. A balanced sutured manifold is **taut** when it is irreducible and $R(\gamma)$ is norm-minimizing in $H_2(M,\gamma;\mathbb Z)$.

A **product sutured manifold** is $(R\times[0,1],\partial R\times[0,1])$ for a compact oriented surface $R$, with positive and negative regions $R\times\{1\}$ and $R\times\{0\}$. A properly embedded oriented surface $S\subset M$ is a **decomposing surface** when every component $\lambda$ of $S\cap\gamma$ is either a properly embedded nonseparating arc in an annular component meeting its suture once, a simple closed curve in an annular component homologous to that suture, or a homotopically nontrivial curve in a toroidal component, with all such curves in one torus component representing the same homology class. A **product disk** is a decomposing surface that is a disk and meets the sutures in exactly two points. A **product annulus** is a decomposing annulus with one boundary circle in $R_+$ and one in $R_-$. A **horizontal surface** $S$ in a balanced sutured manifold has no closed component, $|\partial S|=|s(\gamma)|$, $[S]=[R_+]$ in $H_2(M,\gamma;\mathbb Z)$, and $\chi(S)=\chi(R_+)$. The sutured manifold is **vertically prime** when every horizontal surface is parallel to $R_+$ or $R_-$, where parallel means that the surfaces cobound an embedded product between them.

When $(M,\gamma)$ is irreducible, $\gamma$ has no torus component, and $R_+$ and $R_-$ are incompressible and diffeomorphic, a **product region** is a submanifold $\Phi\times[0,1]\subset M$ for a compact possibly disconnected surface $\Phi$ such that $\Phi\times\{0\}$ and $\Phi\times\{1\}$ are incompressible subsurfaces of $R_-$ and $R_+$, respectively. A **characteristic product region** is a product region $E\times[0,1]$ such that every product region $\Phi\times[0,1]$ can be carried into it by an ambient isotopy of $M$.

## Definition references

[Ni, *Knot Floer homology detects fibred knots*, §§2.1 and 6.1](https://arxiv.org/pdf/math/0607156v4)

[Juhasz, *Floer homology and surface decompositions*, §§2 and 9](https://arxiv.org/pdf/math/0609779v3)
