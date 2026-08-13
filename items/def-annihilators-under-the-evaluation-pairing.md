---
id: def-annihilators-under-the-evaluation-pairing
kind: definition
title: 'The annihilator $U^\circ\leq V^*$ of $U\leq V$ and the preannihilator ${}^\circ S\leq V$ of $S\leq V^*$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-algebraic-dual-and-linear-functional, def-linear-subspace]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'H. Pinkham, Linear Algebra, §6.4'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
    - title: 'K. Conrad, Infinite-Dimensional Dual Spaces'
      url: 'https://kconrad.math.uconn.edu/blurbs/linmultialg/dualspaceinfinite.pdf'
pipeline_run: null
---

## Definition

Let $U\leq V$ be a linear subspace. Its **annihilator** in the algebraic dual is

$$U^\circ:=\{f\in V^*:f(u)=0\text{ for every }u\in U\}\leq V^*.$$

For a linear subspace $S\leq V^*$, its **preannihilator** in $V$ is

$$ {}^\circ S:=\{v\in V:f(v)=0\text{ for every }f\in S\}\leq V.$$

Both are linear subspaces because all their defining equations are homogeneous and linear. The superscript position records which side of the evaluation pairing $V^*\times V\to F$ is being annihilated.
