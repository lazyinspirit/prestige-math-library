---
id: "def-hg-toolkit-local-geodesics-and-hausdorff-control"
kind: "definition"
title: "Hg toolkit local geodesics and hausdorff control"
deps: ["def-hg-toolkit-slim-triangles-products-and-four-point-constants", "def-quasi-geodesic-and-quasi-geodesic-metric-space"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Druţu–Kapovich Theorem 9.38 and §9.6"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: "draft"
origin: "pipeline"
---

## Definition

Use the metric, segment and point-to-set conventions of [[def-hg-toolkit-slim-triangles-products-and-four-point-constants]]. A path parametrized by arc length is a continuous map $q:I\to X$ on a real interval such that each compact restriction $q|_{[s,t]}$ has length $t-s$. Here length is the supremum, over finite subdivisions $s=t_0<\cdots<t_n=t$, of $\sum_i d(q(t_{i-1}),q(t_i))$. In particular $d(q(s),q(t))\le t-s$.

For $k\ge0$, an arc-length path is **$k$-local geodesic** if each restriction to a compact subinterval of length at most $k$ is an isometric parametrization. The $k=0$ condition is vacuous beyond the arc-length requirement. Results converting locality into global estimates must specify a positive radius when needed.

As in [[def-quasi-geodesic-and-quasi-geodesic-metric-space]], a **$(\lambda,\varepsilon)$-quasi-geodesic** is a map $q:I\to X$, where $\lambda\ge1$, $\varepsilon\ge0$, satisfying
$$ \lambda^{-1}|s-t|-\varepsilon\le d(q(s),q(t))\le\lambda|s-t|+\varepsilon $$
for all $s,t\in I$. This does not assume continuity, arc-length parametrization or properness. A compact-interval segment has nonempty domain $[a,b]$ with $a\le b$; a one-point domain is allowed.

For nonempty subsets $A,B\subseteq X$, their **Hausdorff distance** is
$$ d_H(A,B)=\max\left\{\sup_{a\in A}d(a,B),\sup_{b\in B}d(b,A)\right\}. $$
A supremum is $+\infty$ if its set of values is unbounded; otherwise it exists by completeness. Thus $d_H$ takes values in $[0,+\infty]$, and no finite-valued metric on all subsets is claimed. In particular $d_H(A,B)\le R$ means both point-to-set suprema are at most $R$, even if closest points do not exist. The formula excludes empty subsets. These are definitions and require no simultaneous choices.
