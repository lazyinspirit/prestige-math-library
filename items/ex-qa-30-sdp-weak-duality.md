---
id: ex-qa-30-sdp-weak-duality
kind: example
title: "A one-constraint scalar SDP and its dual"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qa-30-sdp-primal-dual-pair
  - thm-qa-30-sdp-weak-duality
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument is finite-dimensional algebra, finite probability, or finite circuit reasoning and uses no choice axiom."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "https://arxiv.org/pdf/1705.01843v4"
      url: "https://arxiv.org/pdf/1705.01843v4"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Example

Take $n=m=1$, $A_1=C=[1]$, and $b_1=1$. The primal is maximize $x$ subject to $x\ge0$ and $x\le1$, so its feasible set is $[0,1]$ and its attained optimum is $1$. The dual is minimize $y$ subject to $y\ge0$ and $y-1\ge0$, so its feasible set is $[1,\infty)$ and its attained optimum is $1$. Every feasible pair obeys weak duality.

## Facts & Assumptions

**Given:** Scalar positivity is the condition $x\ge0$; the primal and dual signs are those of the finite SDP definition.

[F1] [[def-qa-30-sdp-primal-dual-pair]]: the scalar primal constraint is $x\le1$ and the dual constraint is $y-1\ge0$.

[F2] [[thm-qa-30-sdp-weak-duality]]: every primal-feasible/dual-feasible pair satisfies objective$_P\le$objective$_D$.

## Verification

**Proof technique:** direct.

1.1 The primal feasible interval is $[0,1]$, so $x\le1$ for every feasible $x$, and $x=1$ is feasible; hence the attained primal maximum is $1$. The dual constraints are $y\ge0$ and $y\ge1$, so every feasible $y$ is at least $1$, with equality feasible; hence the attained dual minimum is $1$. [given, F1, algebra]

2.1 For arbitrary feasible $x,y$, step 1.1 gives $x\le1\le y$, so the objectives satisfy weak duality, in agreement with [F2]. The equality of the two attained values is verified for this example only and is not inferred in general. [given, F2, step 1.1, algebra] ∎
