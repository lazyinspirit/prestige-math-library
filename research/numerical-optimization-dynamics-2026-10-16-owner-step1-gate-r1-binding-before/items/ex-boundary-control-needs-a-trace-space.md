---
id: ex-boundary-control-needs-a-trace-space
kind: example
title: A boundary flux control uses the H1 trace and a different control operator
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-pde-box-control-set
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Hannes Meinlschmidt, Optimization with Partial Differential Equations, FAU lecture notes
      url: "https://hannes.meinlschmidt.eu/lecture_notes/pde_opt.pdf"
      locator: "§3 boundary-control example, printed pp. 19–25: Neumann boundary controls enter through a trace-space functional."
---

## Statement

For $\Omega=(0,1)$, realize $V=H^1(0,1)$ by absolutely continuous representatives with $v,v'\in L^2(0,1)$. For a smooth state satisfying $-u''+u=f$, $u'(0)=0$, and $u'(1)=g$, integration by parts gives the weak boundary load $v\mapsto g v(1)$. It is not the distributed-control load $q\mapsto(v\mapsto\int_0^1qv)$ with $q\in L^2(0,1)$. A boundary control therefore uses a boundary measure space and trace map rather than silently reusing the interior-control set.

## Facts & Assumptions
**Given:** The interval, the energy space $H^1(0,1)$, and the one-dimensional weak formulation of a Neumann boundary load.

[F1] The control box [[def-pde-box-control-set]] consists of equivalence classes in an $L^2$ space over its declared measure domain; changing the domain changes the control space.

[L1] For absolutely continuous $v$ with $v,v'\in L^2(0,1)$, $v(1)=\int_0^1v(x)\,dx+\int_0^1xv'(x)\,dx$.

## Verification

1.1 Absolute continuity gives $v(1)=v(x)+\int_x^1v'(t)dt$; integrate over $x$ and reverse the order of integration to obtain [L1]. Cauchy--Schwarz gives $|v(1)|\le\|v\|_2+\|v'\|_2$. For a smooth state, integration by parts for $-u''+u=f$, $u'(1)=g$, and $u'(0)=0$ yields $\int_0^1(u'v'+uv)\,dx=\int_0^1fv\,dx+g v(1).$ Thus the boundary control operator is the trace functional $B_\partial g:v\mapsto g v(1)$, rather than an interior density. [L1, given, algebra]

2.1 The trace bound from step 1.1 gives $|g v(1)|\le |g|(\|v\|_2+\|v'\|_2)$, so $B_\partial g$ is bounded on $V$. For the one-point boundary its control parameter is a scalar (equivalently $L^2$ for counting measure); it is not an element of the interior $L^2(0,1)$ box from [F1]. Therefore an interior-control theorem applies only after its $U$ and $B$ are replaced and reverified. [F1, step 1.1, given, algebra] ∎
