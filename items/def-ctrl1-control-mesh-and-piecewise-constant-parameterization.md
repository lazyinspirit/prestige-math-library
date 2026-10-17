---
id: def-ctrl1-control-mesh-and-piecewise-constant-parameterization
kind: definition
title: "Time meshes and piecewise-constant control parameterization"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-ctrl1-linear-lqr-control-problem]
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
    - title: "S. Gros and M. Diehl, Numerical Optimal Control, draft course manuscript, Chapter 13 §§13.1–13.3"
      url: "https://www.syscop.de/files/2019ss/NOC/book-NOCSE.pdf"
      locator: "Printed pp. 234–243: finite time grids and piecewise-constant controls in single shooting, multiple shooting and collocation."
---

## Definition

For the horizon $[0,T]$ of [[def-ctrl1-linear-lqr-control-problem]], a time mesh is a finite partition $0=t_0<t_1<\cdots<t_N=T$ with $N\ge1$. Its cell widths are $h_j=t_{j+1}-t_j>0$ and its mesh size is $|\Delta|=\max_{0\le j<N}h_j$. A piecewise-constant control vector is $(u_0,\ldots,u_{N-1})$ and represents the measurable control $u^\Delta(t)=u_j$ for $t\in[t_j,t_{j+1})$; its value at $T$ is immaterial in $L^2$. If $u_j\in U_c$ for every $j$, then $u^\Delta\in\mathcal U_c$. A mesh family is refining when its mesh sizes tend to zero.
