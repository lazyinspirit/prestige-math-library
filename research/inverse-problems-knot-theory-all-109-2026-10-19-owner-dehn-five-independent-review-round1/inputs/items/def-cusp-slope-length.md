---
id: def-cusp-slope-length
kind: definition
title: "Euclidean length of a slope on a horospherical cusp section"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-multicusped-dehn-filling
  - def-pared-hyperbolic-structures-and-volume
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "William P. Thurston, The Geometry and Topology of Three-Manifolds"
      url: "https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf"
      locator: "Chapter 4, §§4.3–4.5, horospherical cross-sections and Euclidean slope lengths"
    - title: "Danny Calegari, Kleinian Groups"
      url: "https://math.uchicago.edu/~dannyc/courses/kleinian_groups_2015/kleinian_groups.pdf"
      locator: "§§2.3.2–2.4.1, horospherical cusp sections, peripheral bases and slope equations"
verification:
  precheck: n/a
---

## Definition

Let $M$ be the interior of a compact connected orientable three-manifold with a complete finite-volume hyperbolic metric and torus cusps $C_1,\ldots,C_k$. For a chosen cusp $C_i$, choose a horospherical section $T_i$ and identify its Euclidean universal cover with $\mathbb R^2$ so its deck group is a rank-two translation lattice. A slope on $T_i$ is represented by a primitive lattice vector $v$ modulo sign. Its **Euclidean slope length on the chosen section** is $\ell_{T_i}(v)=\lVert v\rVert$ in the induced Euclidean metric. In upper half-space coordinates, if the section is the quotient of the horosphere of height $h>0$ by lattice $\Lambda$, then $\ell_{T_i}(p,q)=|p u+q w|/h$, where $u,w$ are the translation vectors representing the chosen basis. Replacing height $h$ by $h'>0$ multiplies every slope length by $h/h'$; therefore the length depends on the chosen section and is not an intrinsic number until that section is fixed.

## Definition references

[[def-multicusped-dehn-filling|Primitive torus slopes and generalized cusp parameters]]

[[def-pared-hyperbolic-structures-and-volume|Complete finite-volume hyperbolic structures and torus cusps]]

[William P. Thurston, *The Geometry and Topology of Three-Manifolds*, Chapter 4, §§4.3–4.5](https://library.slmath.org/nonmsri/gt3m/PDF/4.pdf)

[Danny Calegari, *Kleinian Groups*, §§2.3.2–2.4.1](https://math.uchicago.edu/~dannyc/courses/kleinian_groups_2015/kleinian_groups.pdf)
