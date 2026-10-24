---
id: "def-real-tree-tripods-and-geodesic-triangle-minsize"
kind: "definition"
title: "Real trees, tripod triangles, slimness and minsize"
status: published
origin: "pipeline"
deps: ["def-geodesic-and-geodesic-metric-space", "def-metric-space", "thm-heine-borel-r", "thm-metric-hausdorff-separation", "thm-metric-continuity-characterisations", "thm-compactness-under-continuous-maps"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §9.7.4 Definitions 9.101–9.102; §11.21 Definition 11.175"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
justified_by: ["lem-triangle-extrema-and-real-tree-tripod-rules"]
---

## Definition

A **real tree** is a geodesic metric space in which every two distinct points are joined by a unique topological arc. An arc means a subspace homeomorphic to $[0,1]$, with the two specified endpoints. An injective continuous parameterization by $[0,1]$ also suffices: the interval is compact by [[thm-heine-borel-r]], the metric image is Hausdorff by [[thm-metric-hausdorff-separation]], metric and topological continuity agree by [[thm-metric-continuity-characterisations]], and the compact-to-Hausdorff clause of [[thm-compactness-under-continuous-maps]] makes the bijection onto its image a homeomorphism.

For three vertices, a **chosen geodesic triangle** consists of three specified geodesic segments ([[def-geodesic-and-geodesic-metric-space]]), allowing repeated vertices and zero-length sides. A **tripod triangle** is the union of three legs meeting at one branch point, with each side the union of the corresponding two legs and with distances given by the resulting tree metric; legs may have length zero.

For sides $S_1,S_2,S_3$ put

$$\operatorname{slim}(\Delta)=\max_i\max_{x\in S_i}d(x,S_j\cup S_k),\qquad \operatorname{minsize}(\Delta)=\min_{x_i\in S_i}\max_{i,j}d(x_i,x_j).$$

Here $\{i,j,k\}=\{1,2,3\}$ and $d(x,A)=\inf_{a\in A}d(x,a)$. The extrema are justified by the following local lemma, rather than assumed from the formulas. A triangle is **$\delta$-slim** if its slimness is at most $\delta\ge0$; a space is **hyperbolic** here if some finite $\delta$ works for every chosen triangle.

For a nonempty geodesic space and $P\ge0$ define $m_X(P)=\sup\{\operatorname{minsize}(\Delta):\operatorname{perimeter}(\Delta)\le P\}$. Degenerate triangles at each point ensure a nonempty family; each diameter is at most the perimeter, so $0\le m_X(P)\le P$. No profile is assigned to the empty space, which is nevertheless vacuously $\delta$-slim for every $\delta\ge0$.

For nonempty subsets define $d_H(A,B)=\max\{\sup_{a\in A}d(a,B),\sup_{b\in B}d(b,A)\}$, allowing $+\infty$. This extends the finite metric convention of [[def-metric-space]] only for subset distance, not for distances between points.

In the profile formula, if the triangle has vertices $a,b,c$, then
$\operatorname{perimeter}(\Delta)$ means the sum of the three chosen side
lengths, namely $d(a,b)+d(b,c)+d(c,a)$. A zero-length side contributes $0$.
