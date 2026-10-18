---
id: def-piecewise-cubic-hermite-interpolant
kind: definition
title: Piecewise cubic Hermite interpolant
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-integer-power]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Carl R. de Boor, A Practical Guide to Splines, revised edition, Chapter IV, pp. 39–40"
      url: https://djvu.online/file/W5YE3VGOgt1Ml
---

## Definition

Let $N\ge1$ be an integer, let $x_0<\cdots<x_N$ be real nodes, let $y_0,\ldots,y_N\in\mathbb R$ be values, and let $m_0,\ldots,m_N\in\mathbb R$ be prescribed slopes. For $0\le i<N$ put $h_i=x_{i+1}-x_i>0$ and $t=(x-x_i)/h_i$ on $[x_i,x_{i+1}]$. Define
$$H_{00}(t)=2t^3-3t^2+1,\quad H_{01}(t)=-2t^3+3t^2,\quad H_{10}(t)=t^3-2t^2+t,\quad H_{11}(t)=t^3-t^2.$$
The cubic Hermite piece on $[x_i,x_{i+1}]$ is
$$P_i(x)=y_iH_{00}(t)+y_{i+1}H_{01}(t)+h_im_iH_{10}(t)+h_im_{i+1}H_{11}(t).$$
The piecewise cubic Hermite interpolant is the function whose restriction to each such interval is $P_i$; adjacent pieces use their common prescribed value $y_i$ at a shared node. The slopes $m_i$ are input data, not values inferred from neighboring pieces.
