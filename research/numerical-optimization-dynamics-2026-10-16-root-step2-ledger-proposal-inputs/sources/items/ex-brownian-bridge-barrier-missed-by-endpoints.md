---
id: ex-brownian-bridge-barrier-missed-by-endpoints
kind: example
title: A Brownian bridge can cross a barrier missed by its endpoints
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - thm-scalar-brownian-bridge-barrier-crossing-probability
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Gregory F. Lawler, Stochastic Calculus: An Introduction with Applications, Proposition 2.7.2"
      url: "https://www.math.uchicago.edu/~lawler/finbook.pdf"
---

## Example

Assume AC. Let a scalar Brownian bridge run from $1$ to $1$ over duration $1$, with
barrier $0$. Both endpoints are above the barrier, but the bridge crosses
zero with probability $e^{-2}$.

## Facts & Assumptions

**Given:** AC and the scalar Brownian bridge crossing formula for endpoints above a fixed barrier. [[thm-scalar-brownian-bridge-barrier-crossing-probability]]

[A1] AC is inherited from the bridge conditional-law interface; the endpoint substitution uses no further choice. [[def-axiom-of-choice]]

## Proof

1.1 Apply the crossing theorem with $x=y=1$, $c=0$, and $h=1$. Its hypotheses $x,y\ge c$ and $h>0$ hold, and it gives $\mathbb P\{\inf_{0\le s\le1}B_s\le0\}= \exp(-2(1-0)(1-0)/1)=e^{-2}$. [given]

2.1 Since $e^{-2}>0$, the endpoint-only check “both endpoints exceed zero” does not certify that the path stayed above zero. If either endpoint were exactly zero, the crossing event would instead have probability one by the boundary case of the same theorem. [A1, given, step 1.1, algebra] ∎
