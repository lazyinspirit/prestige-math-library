---
id: prop-shooting-residual-zero-iff-bvp-solution
kind: proposition
title: "Zeros of the exact shooting residual are exactly BVP solutions"
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
    - title: "T. A. Driscoll and R. J. Braun, Fundamentals of Numerical Computation, Chapter 10"
      url: "https://fncbook.com/shooting/"
verification:
  precheck: pass
---

## Statement

On an open set $U$ of initial states, suppose each IVP has a unique solution $\phi(\cdot;s)$ on $[a,b]$ that is a $C^1$ curve, and $(s,\phi(b;s))\in D_B$ for every $s\in U$. Define the exact shooting residual by $R(s)=B(s,\phi(b;s))$. Then $R(s)=0$ if and only if $\phi(\cdot;s)$ is a BVP solution. Any BVP solution with initial state $s$ equals this shot.

## Facts & Assumptions

**Given:** The BVP data and an initial state $s$ whose unique IVP solution exists on $[a,b]$.

[F1] [[def-nonlinear-two-point-bvp-and-boundary-residual]]: a BVP solution is a continuously differentiable IVP curve satisfying $B(y(a),y(b))=0$, and $R(s)=B(s,\phi(b;s))$.

## Proof

1.1 If $R(s)=0$, then $\phi(\cdot;s)$ already solves the IVP with initial state $s$ and satisfies $B(s,\phi(b;s))=0$ by the definition of $R$. It is continuously differentiable and lies in the BVP domain, so [F1] makes it a BVP solution. [given, F1]

1.2 Conversely, let $y$ be any BVP solution with $y(a)=s$. It solves the same IVP as $\phi(\cdot;s)$; the assumed uniqueness implies $y(t)=\phi(t;s)$ throughout $[a,b]$. The boundary equation then gives $R(s)=B(s,\phi(b;s))=B(y(a),y(b))=0$. [given, F1]

2.1 The same uniqueness argument shows that any BVP solution with initial state $s$ is exactly this trajectory, proving both the equivalence and the asserted trajectory identity. [step 1.1, step 1.2] ∎
