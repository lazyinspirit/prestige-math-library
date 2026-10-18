---
id: def-finite-f-divergence
kind: definition
title: Finite f-divergence with support conventions
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-finite-probability-vector
  - def-convex-and-strictly-convex-functions-on-euclidean-sets
  - lem-convex-generator-boundary-limits-exist
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 7, §7.1, Definition 7.1"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-2022.pdf"
    - title: "Igal Sason and Sergio Verdú, f-Divergence Inequalities, §II-B, Definition 3 and equations (35)–(39)"
      url: "https://arxiv.org/pdf/1508.00335"
---

## Definition

Let $P=(p_x)$ and $Q=(q_x)$ be probability vectors on a finite nonempty
alphabet $\mathcal X$ ([[def-finite-probability-vector]]). A **convex
generator** is a finite convex function $f:(0,\infty)\to\mathbb R$ with
$f(1)=0$; convexity uses the two-point inequality of
[[def-convex-and-strictly-convex-functions-on-euclidean-sets]]. Use its
extended boundary values
$$f(0):=\lim_{t\downarrow0}f(t),\qquad f_\infty:=\lim_{t\to\infty}\frac{f(t)}t.$$
These limits exist in $\mathbb R\cup\{+\infty\}$ by
[[lem-convex-generator-boundary-limits-exist]]. Define the **finite
f-divergence from $P$ to $Q$**
by
$$D_f(P\|Q):=\sum_{x:q_x>0}q_x f(p_x/q_x)+
f_\infty\sum_{x:q_x=0}p_x.$$
In the first sum, if $p_x=0$, the term means $q_x f(0)$. A coordinate with
$p_x=q_x=0$ contributes zero and is omitted. The second term is defined as
zero when its coefficient $\sum_{q_x=0}p_x$ is zero, even if
$f_\infty=+\infty$; if that coefficient is positive and $f_\infty=+\infty$,
the divergence is $+\infty$.

The boundary term is essential when $P\not\ll Q$. It is the recession
contribution of the generator and is not the value $f(0)$.

