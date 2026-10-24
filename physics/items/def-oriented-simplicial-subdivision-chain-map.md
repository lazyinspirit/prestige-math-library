---
id: def-oriented-simplicial-subdivision-chain-map
kind: definition
title: "Oriented simplicial subdivision operator"
status: published
origin: pipeline
deps: ["def-barycentric-subdivision-of-an-abstract-simplicial-complex", "def-simplicial-chain-groups-and-boundary", "lem-barycentric-face-chains-triangulate-a-geometric-simplex", "def-augmentation-and-reduced-simplicial-homology"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
---

## Definition

On oriented integral chains define the **graded subdivision operator** $S:C_n(K)\to C_n(\operatorname{sd}K)$ by sending an oriented simplex to the sum of its top-dimensional chain simplices with the orientation inherited through the barycentric realization. The triangulation in [[lem-barycentric-face-chains-triangulate-a-geometric-simplex]] makes these pieces nondegenerate. The source and target groups use [[def-simplicial-chain-groups-and-boundary]], and target vertices are faces as in [[def-barycentric-subdivision-of-an-abstract-simplicial-complex]].

Equivalently, using [[def-augmentation-and-reduced-simplicial-homology]], augment with $C_{-1}=\mathbb Z$, $\partial[v]=1$, set $S_{-1}=1$, and recursively set
$$S(s)=c_\sigma S(\partial s),\qquad c_\sigma[t_0,\ldots,t_j]=[\sigma,t_0,\ldots,t_j],\qquad c_\sigma(1)=[\sigma],$$
where $\sigma$ is the underlying face of $s$. Every face label occurring in $S(\partial s)$ is a proper face of $\sigma$, so coning is defined. The boundary of a geometric oriented cone with its apex first induces the given orientation on its opposite face: this follows from the positive coefficient of that face in the alternating boundary. Coning the oriented boundary triangulation therefore gives precisely the inherited orientations of the pieces. Reversing the original orientation changes every summand's sign, so this defines the graded operator on oriented chains. In degree zero $S[v]=[\{v\}]$. Boundary compatibility is a separate result; no chain-map property is assumed here.

## Source locators

2.1, pp.121–122, recursive subdivision.
