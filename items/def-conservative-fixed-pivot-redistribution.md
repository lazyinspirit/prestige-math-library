---
id: def-conservative-fixed-pivot-redistribution
kind: definition
title: Conservative fixed-pivot redistribution on a finite positive grid
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Jitendra Kumar, Numerical approximations of population balance equations in particulate systems, Chapter 2, §2.2
      url: https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf
---

## Definition

Let $x_0<x_1<\cdots<x_M=R$ be a finite grid of positive pivot masses with integer $M\ge1$, and let $\Delta=\max_{0\le i<M}(x_{i+1}-x_i)$. For $z\in[x_i,x_{i+1}]$, define the fixed-pivot probability measure

$$P_\Delta(z)=\frac{x_{i+1}-z}{x_{i+1}-x_i}\,\delta_{x_i}+\frac{z-x_i}{x_{i+1}-x_i}\,\delta_{x_{i+1}}.$$

At a grid node this rule returns the single Dirac mass at that node, including at both endpoints. For $z>R$, the rule returns an overflow record of mass $z$ and no last-bin particle. For $z<x_0$ it returns an invalid-grid status. The domain convention is therefore part of the method: every retained aggregation product and every daughter size must be at least $x_0$, and a product above $R$ is handled by the overflow rule.

For error analysis, the same barycentric formula is also used on a semi-infinite grid $x_0<x_1<\cdots$ with $x_i\to\infty$ and $\sup_i(x_{i+1}-x_i)\le\Delta$. On that grid it is defined for every $z\ge x_0$ and never overflows; this is an auxiliary unbounded-pivot dynamics, distinct from the finite-cutoff method above.
