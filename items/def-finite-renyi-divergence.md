---
id: def-finite-renyi-divergence
kind: definition
title: Finite Rényi divergence
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-finite-probability-vector
  - def-finite-kullback-leibler-divergence
  - def-natural-logarithm
  - def-real-power
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 7, §7.12, Definition 7.22"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
    - title: "Tim van Erven and Peter Harremoës, Rényi Divergence and Kullback-Leibler Divergence, §II-A, Definition 2"
      url: "https://arxiv.org/pdf/1206.2459"
---

## Definition

Let $P=(p_x)$ and $Q=(q_x)$ be probability vectors on the same finite
nonempty alphabet. For order $\alpha\in(0,\infty)$ with $\alpha\ne1$, put
$$S_\alpha(P,Q):=\sum_{x:q_x>0}p_x^\alpha q_x^{1-\alpha}.$$
If $\alpha>1$ and $p_x>0=q_x$ for some $x$, define
$S_\alpha(P,Q)=+\infty$; if $0<\alpha<1$, such coordinates contribute
zero. In the displayed sum, $p_x=0<q_x$ contributes zero. If the sum is
zero, then necessarily $\alpha<1$ and the logarithmic expression below is
defined as $+\infty$. The **Rényi divergence of order $\alpha$ from $P$ to
$Q$** is
$$D_\alpha(P\|Q):=\frac{\log S_\alpha(P,Q)}{\alpha-1}.$$
At order one define
$$D_1(P\|Q):=D(P\|Q),$$
using [[def-finite-kullback-leibler-divergence]]. All divergences are
extended-real-valued; the direction is always first argument to second.

For $0<\alpha<1$, a point with $p_x>0=q_x$ contributes zero to the affinity
$S_\alpha$ rather than infinity. For $\alpha>1$, the same support mismatch
makes $D_\alpha(P\|Q)=+\infty$. The sign of $\alpha-1$ is part of the
definition and reverses inequalities when $0<\alpha<1$.
