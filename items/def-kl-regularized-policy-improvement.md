---
id: def-kl-regularized-policy-improvement
kind: definition
title: Finite KL-regularized policy improvement
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-finite-kullback-leibler-divergence
  - def-natural-logarithm
justified_by: []
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Rafael Rafailov et al., Direct Preference Optimization: Your Language Model is Secretly a Reward Model, arXiv:2305.18290v3 (2024)"
      url: "https://arxiv.org/pdf/2305.18290v3"
    - title: "Purdue course lecture notes, Preference Optimization (PrefOpt)"
      url: "https://www.cs.purdue.edu/homes/ribeirob/courses/Spring2026/lectures/18-pref-opt/PrefOpt.html"
---

## Definition

Let $Y$ be a finite nonempty set. A probability vector on $Y$ is a family $p=(p_y)_{y\in Y}$ with $p_y\ge0$ and $\sum_{y\in Y}p_y=1$. For probability vectors $p,q$, define the finite relative entropy
$$D(p\|q)=\sum_{y:p_y>0}p_y\log\frac{p_y}{q_y}$$
when $p_y=0$ whenever $q_y=0$, and define $D(p\|q)=+\infty$ otherwise. Terms with $p_y=0$ are omitted. Given a real reward $r:Y\to\mathbb R$ and a coefficient $\beta>0$, define
$$F_{q,r,\beta}(p)=\sum_{y\in Y}p_y r(y)-\beta D(p\|q).$$
The finite KL-regularized policy-improvement problem is to maximize $F_{q,r,\beta}$ over all probability vectors $p$ on $Y$. The reference $q$ has full support when $q_y>0$ for every $y\in Y$; in that case $F_{q,r,\beta}(p)$ is finite for every $p$.

## Definition references

[[def-finite-kullback-leibler-divergence|Finite KL divergence]]: uses the same directed finite sum, omits zero first-coordinate terms, and assigns $+\infty$ when $p$ has positive mass where $q$ is zero.

[[def-natural-logarithm|Natural logarithm]]: defines $\log$ on $(0,\infty)$ as the inverse of the exponential function.
