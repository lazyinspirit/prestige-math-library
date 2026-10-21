---
id: def-e8-root-lattice
kind: definition
title: The E8 lattice from its Cartan Gram matrix
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-integral-intersection-lattice-of-a-simply-connected-four-manifold
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Tim Perutz, Lectures on Gauge Theory and Symplectic Geometry
      url: https://web.ma.utexas.edu/users/perutz/GaugeTheory/FullCourse.pdf
      locator: §24, pp. 119–126; E8 root-lattice conventions and comparison
---

## Definition

Let $L_{E_8}=\mathbb Z^8$ with ordered basis $e_1,\dots,e_8$ and symmetric bilinear form whose Gram matrix $C=(c_{ij})$ has $c_{ii}=2$, has $c_{ij}=c_{ji}=-1$ exactly when $\{i,j\}$ is one of $\{1,2\},\{2,3\},\{3,4\},\{4,5\},\{5,6\},\{6,7\},\{3,8\}$, and has all other entries zero. The associated graph is the E8 Dynkin diagram; each edge records a Gram entry $-1$ and each vertex records a diagonal entry $2$.

```tikz
\begin{tikzpicture}[baseline=-0.5ex]
\draw (-3,0)--(-2,0)--(-1,0)--(0,0)--(1,0)--(2,0)--(3,0);
\draw (-1,0)--(-1,1);
\foreach \x/\n in {-3/1,-2/2,-1/3,0/4,1/5,2/6,3/7} {
  \fill (\x,0) circle (2pt);
  \node at (\x,-0.35) {\n};
}
\fill (-1,1) circle (2pt);
\node at (-1.3,1) {8};
\end{tikzpicture}
```

## Definition references

[[def-integral-intersection-lattice-of-a-simply-connected-four-manifold|Integral lattice and Gram matrix conventions]]

