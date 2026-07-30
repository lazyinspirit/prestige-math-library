---
id: def-net-derived-from-a-filter
kind: definition
title: "The canonical net indexed by the pairs $(A,x)$ with $A$ in a filter and $x\\in A$"
status: published
origin: session
deps: [def-filter, def-directed-set-and-net]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
pipeline_run: null
---

## Definition

Let $\mathcal F$ be a filter on $X$. Its **derived-net index set** is

$$E_{\mathcal F}=\{(A,x):A\in\mathcal F,\ x\in A\},$$

ordered by $(A,x)\preceq(B,y)$ when $B\subseteq A$. It is a directed preorder: filters contain no empty set, and for two indices choose $z\in A\cap B$, so $(A\cap B,z)$ is above both. The **net derived from $\mathcal F$** is

$$x_{(A,x)}:=x\qquad ((A,x)\in E_{\mathcal F}).$$

This construction makes no arbitrary choice, because the point $x$ is included in the index.
