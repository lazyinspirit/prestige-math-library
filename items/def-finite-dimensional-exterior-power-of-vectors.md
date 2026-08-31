---
id: def-finite-dimensional-exterior-power-of-vectors
kind: definition
title: "The finite-dimensional exterior power of vectors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-alternating-k-covectors]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-01
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Definition

Let $V$ be a finite-dimensional real vector space and let $k\ge 0$. The **$k$th exterior power of
$V$** is the dual vector space

$$
\bigwedge^k V:=\operatorname{Alt}^k(V)^*.
$$

For $v_1,\ldots,v_k\in V$, the decomposable $k$-vector
$v_1\wedge\cdots\wedge v_k\in\bigwedge^kV$ is the functional

$$
\omega\mapsto \omega(v_1,\ldots,v_k).
$$
