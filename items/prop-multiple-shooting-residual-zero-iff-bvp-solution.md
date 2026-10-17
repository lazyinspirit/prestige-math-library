---
id: prop-multiple-shooting-residual-zero-iff-bvp-solution
kind: proposition
title: "Zeros of the exact multiple-shooting residual are exactly BVP solutions"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-nonlinear-two-point-bvp-and-boundary-residual
  - thm-picard-lindelof-local-existence-and-uniqueness
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "R. Verfürth, Numerical Methods and Stochastics, Part I: Numerical Methods, Lecture Notes"
      url: "https://homepages.rub.de/ruediger.verfuerth/files/lectures/NMS.pdf"
verification:
  precheck: pass
---

## Statement

Fix a mesh $a=t_0<\cdots<t_N=b$ and states $s_0,\ldots,s_N$. Suppose the unique IVP solution from each segment start $s_i$ exists as a $C^1$ curve on $[t_i,t_{i+1}]$ for $0\le i<N$, and $(s_0,s_N)\in D_B$. The exact multiple-shooting residual has rows $\phi_i(t_{i+1};s_i)-s_{i+1}$ and $B(s_0,s_N)$. For this fixed tuple, it vanishes exactly when there is a BVP solution $y$ with $y(t_i)=s_i$ for every $0\le i\le N$; that solution restricts to the given segment solutions on all mesh intervals.

## Facts & Assumptions

**Given:** The square BVP, mesh, segment starts, and unique segment IVP solutions on all mesh intervals.

[F1] [[def-nonlinear-two-point-bvp-and-boundary-residual]]: the multiple-shooting residual consists of segment endpoint mismatch rows and the boundary residual $B(s_0,s_N)$.

## Proof

1.1 If the residual vanishes, each row gives $\phi_i(t_{i+1};s_i)=s_{i+1}$. Define $y$ on each interval by the corresponding segment solution. At every interior mesh point, the left endpoint value equals the next initial state, so the pieces are continuous; the last residual row supplies $B(y(a),y(b))=0$. [given, F1]

2.1 At a mesh point $t_i$, both one-sided derivatives equal $f(t_i,y(t_i))$, since each $C^1$ segment solves the same ODE and the joined values agree. Thus the pieces join to a $C^1$ solution on $[a,b]$; the endpoint pair lies in $D_B$ and the last residual row gives its boundary equation, so it is a BVP solution. [given, step 1.1, F1]

3.1 Conversely, let $y$ be a BVP solution with $y(t_i)=s_i$ for every $0\le i\le N$, keeping the given tuple fixed. On each mesh interval its restriction and the given segment IVP solution have initial state $s_i$, so the assumed uniqueness identifies them. Thus $\phi_i(t_{i+1};s_i)=y(t_{i+1})=s_{i+1}$ for $0\le i<N$, and $B(s_0,s_N)=B(y(a),y(b))=0$. All residual rows vanish. [given, F1] ∎
