---
page: fast-multipole-expansions-and-error
title: Fast multipole expansions and error
status: draft
items:
  - def-finite-planar-quadtree-fmm-pair-lists
  - def-three-dimensional-spherical-harmonic-space
  - alg-planar-laplace-fmm-fixed-order
  - lem-planar-fmm-pair-lists-partition-off-diagonal-pairs
  - lem-three-dimensional-laplace-spherical-harmonic-addition-theorem
  - lem-planar-fmm-multipole-local-translation-identities
  - thm-planar-fmm-operation-count-under-linear-list-assumptions
  - alg-three-dimensional-laplace-cluster-expansion
  - thm-planar-fmm-global-potential-force-error
  - thm-three-dimensional-laplace-expansion-error-and-work
examples: []
---

For planar charges, [[def-finite-planar-quadtree-fmm-pair-lists]] fixes half-open dyadic cells, a fixed logarithm branch per far pair, direct near pairs, and the separated-cell ratio $\rho=(a_C+a_D)/R_{CD}<1$. The finite traversal terminates and partitions every ordered off-diagonal source-target pair by [[lem-planar-fmm-pair-lists-partition-off-diagonal-pairs]]. The fixed-order procedure [[alg-planar-laplace-fmm-fixed-order]] carries P2M and M2M moments upward, converts far multipoles to local polynomials by M2L, shifts local polynomials by L2L, evaluates by L2P, and adds near pairs exactly. [[lem-planar-fmm-multipole-local-translation-identities]] derives each coefficient formula. [[thm-planar-fmm-global-potential-force-error]] sums the local potential and differentiated-series tails over the finite far list; force means the branch-independent complex derivative of the stated logarithmic potential.

The work claim keeps tree size, list construction visits, far-list size, and direct-near pair count explicit. Under the recorded linear-size level restriction and bounded-list hypotheses, [[thm-planar-fmm-operation-count-under-linear-list-assumptions]] bounds the arithmetic, prescribed logarithm evaluations, and list-processing work by $O(N(p+1)^2)$ after the tree and point-to-cell arrays are supplied. Deep clustered data must use its actual depth and counts.

For three-dimensional Laplace, [[def-three-dimensional-spherical-harmonic-space]] fixes the sphere inner product and regular solid harmonic convention. [[lem-three-dimensional-laplace-spherical-harmonic-addition-theorem]] proves the normalized addition identity and Legendre bound. The separate single-cluster procedure [[alg-three-dimensional-laplace-cluster-expansion]] and [[thm-three-dimensional-laplace-expansion-error-and-work]] give its spherical tail and basis-evaluation cost; they do not transfer the planar tree-translation count to 3D.

The schematic shows one admissible planar far pair. Each square has side $1$, the source and target centers are $c=0$ and $d=4$, and the dashed circles are their circumscribed disks of radius $a=b=\sqrt2/2$. Their center distance $R=4$ exceeds $a+b=\sqrt2$, so the local logarithm series converges throughout the source-target difference disk. The arrow labels the M2L coefficient conversion. The diagram records geometry only; every identity and error bound is proved algebraically in the items above.

```tikz
\begin{tikzpicture}[scale=0.8, every node/.style={font=\small}]
  \draw[fill=blue!10,draw=blue] (-0.5,-0.5) rectangle (0.5,0.5);
  \draw[fill=red!10,draw=red] (3.5,-0.5) rectangle (4.5,0.5);
  \draw[dashed,blue] (0,0) circle (0.70710678);
  \draw[dashed,red] (4,0) circle (0.70710678);
  \fill[blue] (0,0) circle (1.6pt);
  \fill[red] (4,0) circle (1.6pt);
  \draw[<->] (0,-1.05) -- node[below] {$R=4$} (4,-1.05);
  \draw[->,thick] (0.85,0.35) -- node[above] {M2L} (3.15,0.35);
  \node[blue] at (0,0.82) {$C$, radius $a$};
  \node[red] at (4,0.82) {$D$, radius $b$};
\end{tikzpicture}
```
