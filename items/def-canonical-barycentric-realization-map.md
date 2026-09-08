---
id: def-canonical-barycentric-realization-map
kind: definition
title: "Canonical barycentric realization map"
status: draft
origin: pipeline
deps: ["def-barycentric-subdivision-of-an-abstract-simplicial-complex", "def-geometric-realization-of-an-abstract-simplicial-complex"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "C. R. F. Maunder, Algebraic Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/maunder.pdf"
---

## Definition

Write $e_v$ for the coordinate vertex of $|K|$. For each nonempty face $\sigma$ put $b_\sigma=\frac1{\#\sigma}\sum_{v\in\sigma}e_v$. The **canonical barycentric realization map** is
$$b_K:|\operatorname{sd}K|\longrightarrow |K|,\qquad b_K\left(\sum_{i=0}^q t_i e_{\sigma_i}\right)=\sum_{i=0}^q t_i b_{\sigma_i}.$$
Here $t_i\geq0$, $\sum_i t_i=1$ and $\sigma_0\subsetneq\cdots\subsetneq\sigma_q$, as in [[def-barycentric-subdivision-of-an-abstract-simplicial-complex]]. Each coordinate is nonnegative, the total is $1$, and the support lies in $\sigma_q$, so the formula belongs to the realization in [[def-geometric-realization-of-an-abstract-simplicial-complex]]. Zero coefficients can be deleted without changing the sum, so formulas on intersecting simplices agree. Each restriction is affine and continuous into the maximal original simplex, hence into $|K|$; the weak topology of the source makes $b_K$ continuous. For a vertex-free complex it is the unique empty map.

## Source locators

2.5.7–2.5.10, pp.49–52.

