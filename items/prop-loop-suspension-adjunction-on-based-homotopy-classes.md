---
id: prop-loop-suspension-adjunction-on-based-homotopy-classes
kind: proposition
title: Loop suspension adjunction on based homotopy classes
deps: ["def-reduced-cone-suspension-and-cofiber-sequence", "lem-interval-exponential-law-and-quotient-homotopies"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 8 §2 pp.57–58
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

Naturally for a well-pointed based CGWH space $X$ and a based CGWH space $Y$, there is a bijection $[\Sigma X,Y]_*\cong[X,\Omega Y]_*$, where $\Omega Y$ is the kified compact-open space of loops based at $y_0$.

## Facts & Assumptions

[F1] Suspension is the quotient collapsing both ends and the basepoint track. [[def-reduced-cone-suspension-and-cofiber-sequence]]

[F2] Interval transposition preserves continuity, kification, based restrictions and homotopies. [[lem-interval-exponential-law-and-quotient-homotopies]]


## Proof

**Given:** The spaces, maps, and hypotheses in the statement above.

1.1 A based map $a:\Sigma X\to Y$ pulls back to $A:X\times I\to Y$ with A(x,0)=A(x,1)=y0 and A(x0,t)=y0. By F2 its transpose $b(x)(t)=A(x,t)$ is continuous into the based loop space and maps x0 to the constant loop. Conversely a based b uncurries continuously and satisfies exactly those three equations, so descends to a based a by F1. Evaluation at (x,t) verifies both inverse identities. [F1, F2]

2.1 Apply F2 with the additional homotopy parameter: the same formulas identify homotopies fixing the basepoint in either mapping set, and their inverses preserve both endpoint maps. Thus the map bijection descends to a bijection on based homotopy classes. Replacing x by f(x) or postcomposing each value with g commutes with evaluation, proving naturality in both variables. [F1, F2, step 1.1] ∎
