---
id: def-path-system-and-non-intersecting-path-system
kind: definition
title: "Path systems between two families of lattice points, and non-intersecting systems"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-monotone-lattice-path, def-finite-symmetric-group-and-permutation-notation, thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient, thm-product-rule, def-finite-cardinality, thm-subset-of-a-finite-set]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: 'C. Krattenthaler, "Lattice Path Enumeration", ch. 10 of the Handbook of Enumerative Combinatorics, §10.13'
      url: "https://arxiv.org/pdf/1503.05930"
pipeline_run: null
---

## Definition

Fix a natural number $r$, start points $(A_i)_{i<r}$ and end points
$(E_i)_{i<r}$ in $\mathbb{Z}^2$.

For a permutation $\pi\in S_r$
([[def-finite-symmetric-group-and-permutation-notation]]), a **$\pi$-system** is
an $r$-tuple

$$\mathbf{P}=(P_i)_{i<r}$$

such that for each index $i<r$, the path $P_i$ is a monotone lattice path from
$A_i$ to $E_{\pi(i)}$ ([[def-monotone-lattice-path]]).

Two monotone lattice paths **intersect** when they share a lattice point, that
is, when the images of their point functions have a common element of
$\mathbb{Z}^2$. A $\pi$-system is **non-intersecting** when no two of its paths
intersect.

Write $\mathcal{S}_\pi(A,E)$ for the set of $\pi$-systems and
$\mathcal{N}_\pi(A,E)\subseteq\mathcal{S}_\pi(A,E)$ for the non-intersecting
ones.

Each set $\mathcal{S}_\pi(A,E)$ is finite. Indeed, for every index $i<r$, either
the endpoints $A_i$ and $E_{\pi(i)}$ are compatible and
[[thm-monotone-lattice-paths-in-a-rectangle-are-counted-by-a-binomial-coefficient]]
counts a finite set of monotone paths between them, or they are incompatible and
[[def-monotone-lattice-path]] makes that set empty. Repeated use of
[[thm-product-rule]] therefore makes the product of those finite sets finite,
and that product is exactly $\mathcal{S}_\pi(A,E)$. Therefore the subset
$\mathcal{N}_\pi(A,E)$ is finite as well ([[thm-subset-of-a-finite-set]]).

## Remarks

- The definition uses all lattice points of the paths, not only their step
  words. Two paths that merely cross between lattice points are not visible in
  this model; everything below is about sharing a lattice vertex.

- The permutation is part of the datum. A path system records not only which
  paths occur but also which start is matched to which end.
