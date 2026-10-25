---
id: ex-eikonal-cones-are-not-classical-at-the-vertex
kind: example
title: "Eikonal cones are not classical at the vertex"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-fully-nonlinear-first-order-pde-and-complete-integral]
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Part I: Explicit methods — Lecture notes for MA342H"
      url: "https://www.maths.tcd.ie/~pete/pde2/part_1.pdf"
---

## Example

For $n\ge1$, on $\mathbb R^n$ the function $u(x)=|x|$ solves $|Du|=1$ away
from $x=0$, but is not a classical solution at its vertex.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and the Euclidean norm function $u(x)=|x|$.

## Verification

**Proof technique:** direct.

1.1 For $x\ne0$, $Du(x)=x/|x|$, so $|Du(x)|=1$. [given, algebra]

1.2 Along a unit vector $e$, the directional quotients at zero are $u(te)/t=1$ for $t>0$ and $u(te)/t=-1$ for $t<0$. [given, algebra]

2.1 They have no common limit, so $u$ is not differentiable at zero and cannot be classical there. [step 1.2, given] ∎
