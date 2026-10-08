---
id: def-cg-cyclic-small-mesh-polygon-and-midpoint-energy
kind: definition
title: "Uniform local radii, cyclic small-mesh polygons, mesh, length, energy, the midpoint operation and the zero-limit basin"
status: published
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 10
deps: [def-cg-cat-zero-cat-one-and-local-geodesic, lem-cg-comparison-convexity-and-model-spaces, def-metric-space, def-metric-ball, def-metric-compactness, def-geodesic-and-geodesic-metric-space, def-real-limit, cor-pi-is-the-first-positive-sine-zero]
justified_by: [lem-cg-polygon-midpoint-drop-and-equality]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "B. H. Bowditch, Notes on locally CAT(1) spaces (Aberdeen preprint, 27 scanned sheets)"
      url: "https://www.bhbowditch.com/papers/bhb-catone.pdf"
      locator: "§§3.3.1–3.3.6, printed pp. 22–24 (the midpoint operation on cyclic polygons, mesh, length, energy and the zero-limit class)"
    - title: "Martin R. Bridson and André Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "II.1.4(2)–(3) (local geodesics and convex balls of radius $<D_\\kappa/2$)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2.6–I.2.19, printed pp. 502–507 (local geodesics I.2.16, the cone on a CAT(1)-space I.2.17–I.2.18)"
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $X$ be a compact locally CAT(1) metric space ([[def-cg-cat-zero-cat-one-and-local-geodesic]], [[def-metric-compactness]]).

**(1) Uniform local CAT(1) radius.** A real number $l>0$ is a **uniform local CAT(1) radius** for $X$ if every closed ball $\bar B(x,r)\subseteq X$ with $x\in X$ and $0<r\le l$ ([[def-metric-ball]]), with the induced metric, is a CAT(1) space. Such an $l$ exists and may be chosen with $l<\pi/2$ ([[cor-pi-is-the-first-positive-sine-zero]]); the existence proof is part of [[lem-cg-polygon-midpoint-drop-and-equality]] and is not asserted by this definition. Fix such an $l$ for the remainder of the page.

**(2) Cyclic tuples, mesh, length, energy.** Fix an integer $n\ge3$ and a real $h$ with $0<h<l$. For a tuple $x=(x_0,\dots,x_{n-1})\in X^n$ the indices are read modulo $n$, and
$$\operatorname{mesh}(x):=\max_{0\le i<n}d(x_i,x_{i+1}),\qquad L(x):=\sum_{i=0}^{n-1}d(x_i,x_{i+1}),\qquad E(x):=\sum_{i=0}^{n-1}d(x_i,x_{i+1})^2 .$$
The **mesh-$h$ polygon space** is $P_h(n):=\{x\in X^n:\operatorname{mesh}(x)\le h\}$; its points are called **cyclic small-mesh polygons**. Fixing $n$ (rather than letting the vertex count grow) is essential: the quantitative constants of this page depend on $n$ but not on $h$, and they are not uniform in a variable vertex count.

**(3) The midpoint operation.** For $x\in X^n$ with $\operatorname{mesh}(x)<l$, consecutive vertices satisfy $d(x_i,x_{i+1})<l<\pi/2$, and the closed ball $\bar B(x_i,l)$ is CAT(1); by the convexity and uniqueness clause for balls of radius $<\pi/2$ ([[lem-cg-comparison-convexity-and-model-spaces]]) the geodesic segment $[x_i,x_{i+1}]$ inside that ball is unique ([[def-geodesic-and-geodesic-metric-space]]) and has a unique midpoint. Define $f(x)\in X^n$ by $f(x)_i:=\operatorname{mid}(x_i,x_{i+1})$ for $0\le i<n$. Continuity of $f$ on $\{\operatorname{mesh}<l\}$ and the invariance $\operatorname{mesh}(fx)\le\operatorname{mesh}(x)$, which make $f$ a self-map of $P_h(n)$, are proved in [[lem-cg-polygon-midpoint-drop-and-equality]]. Write $f^k$ for the $k$-fold iterate.

**(4) The zero-limit basin.** $C^0_h(n):=\{x\in P_h(n): f^k(x)\text{ is defined for every }k\ge0\text{ and }\lim_{k\to\infty}L(f^k x)=0\}$ ([[def-real-limit]]). By (3) the definability condition is automatic on $P_h(n)$, so $C^0_h(n)=\{x\in P_h(n):\lim_k L(f^k x)=0\}$; this set is the **zero-limit basin**. It is defined purely through the iterated lengths, without reference to short-loop homotopy; its identification with a short-loop class is proved later on this page, after its topological properties are established.

**(5) Conventions.** A tuple is **constant** if all its entries are equal; a constant tuple has $\operatorname{mesh}=L=E=0$ and is fixed by $f$ (the midpoint of a degenerate segment is its point, in accordance with [[def-geodesic-and-geodesic-metric-space]]). If some consecutive vertices coincide while the tuple is not constant, the corresponding edge contributes $0$ to mesh, length and energy, and the midpoint operation is applied to the (possibly degenerate) pair by the same rule.
