---
id: fs-square-roots-of-a-non-negative-operator-are-unique
kind: false-statement
title: "FALSE: A non-negative operator has a unique square root among all operators"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-non-negative-square-root-exists-and-is-unique]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Linear Algebra Done Right, fourth edition"
      url: "https://linear.axler.net/LADR4e.pdf"
---

## Statement

A non-negative operator has a unique square root among all operators.

## Facts & Assumptions

**Given:** The identity operator $I$ on $\mathbb R^2$.

[L1] A non-negative operator has a unique non-negative square root ([[thm-non-negative-square-root-exists-and-is-unique]]).

## Refutation

**Proof technique:** direct.

1.1 The operator $I$ is non-negative, and [L1] says its non-negative square root is uniquely $I$ itself. [L1]

2.1 Nevertheless $(-I)^2=I^2=I$ and $-I\ne I$. So $I$ has at least two square roots, and uniqueness fails once the non-negative condition on the square root is dropped. [step 1.1, algebra] ∎
