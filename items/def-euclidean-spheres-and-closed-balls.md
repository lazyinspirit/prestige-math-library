---
id: def-euclidean-spheres-and-closed-balls
kind: definition
title: "Euclidean spheres and closed balls as subspaces of $\\mathbb{R}^n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-norm-and-normed-space, def-subspace-topology-top, def-metric-ball, lem-metrics-on-rn]
aliases: []
landmark: true
verification:
  repair: research/machine-learning-all-101-2026-10-19-owner-step4-published-alert-repair/application/receipts/def-euclidean-spheres-and-closed-balls.json
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Euclidean space"
      url: "https://en.wikipedia.org/wiki/Euclidean_space"
    - title: "Sphere"
      url: "https://en.wikipedia.org/wiki/Sphere"
pipeline_run: null
---

## Definition

Let $n \in \mathbb{N}$ with $n \ge 1$. Give $\mathbb{R}^n$ its Euclidean norm $\lVert\cdot\rVert_2$ and its induced Euclidean metric $d_2$ ($\mathbb{R}^n$ as the set of functions $n \to \mathbb{R}$, and $d_1$, $d_2$, $d_\infty$ are metrics on it, A norm on a real vector space, the induced metric, and the dictionary with the metric axioms). For $c \in \mathbb{R}^n$ and $r>0$, put

$$\overline B_2(c,r):=\{x\in\mathbb{R}^n:\lVert x-c\rVert_2\le r\},\qquad S_2(c,r):=\{x\in\mathbb{R}^n:\lVert x-c\rVert_2=r\}.$$

These are respectively the **Euclidean closed ball** and **Euclidean sphere** with centre $c$ and radius $r$. They carry the subspace topology inherited from $\mathbb{R}^n$ (Subspace topology: the traces of the open sets, its closed sets and its bases, the continuity of the inclusion, and the characteristic property of a map into a subspace). Since $d_2(c,x)=\lVert x-c\rVert_2$, they are precisely the closed ball and sphere $\bar B(c,r)$ and $S(c,r)$ of the metric-space definition (Open ball, closed ball and sphere in a metric space).

For the unit sphere centred at the origin write

$$S^{n-1}:=S_2(0,1).$$

The exponent is notation for this particular sphere, not a claim that a dimension theory has been developed here.

## Definition references

[[lem-metrics-on-rn]]

[[def-norm-and-normed-space]]

[[def-subspace-topology-top]]

[[def-metric-ball]]

