---
id: thm-dependent-choice-detects-non-well-orders
kind: theorem
title: "DC detects non-well-orders by descending sequences"
status: published
origin: pipeline
deps: ["def-dependent-choice", "def-well-order"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Jech, The Axiom of Choice, §2.4 final proposition, p.23"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
---

## Statement

In ZF plus DC, a linear order $(X,<)$ is a well-order iff it has no sequence $(x_n)_{n<\omega}$ with $x_{n+1}<x_n$ for every $n$.

## Facts & Assumptions

[F1] [[def-well-order]]: Every nonempty subset of a well-order has a least member.

[F2] [[def-dependent-choice]]: A serial relation on a nonempty set admits an omega path from any initial point.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 In a well-order, the nonempty range of a descending sequence would have a least element $x_n$, contradicted by $x_{n+1}<x_n$. This direction needs no choice. [F1]

2.1 If the linear order is not a well-order, some nonempty $Y\subseteq X$ has no least point. Linearity implies that every $y\in Y$ has some $z\in Y$ with $z<y$. Apply DC to $yRz$ iff $z<y$, starting from any one point of $Y$. It gives the forbidden descending sequence. The empty order is a well-order and has no such sequence. [F1, F2] ∎
