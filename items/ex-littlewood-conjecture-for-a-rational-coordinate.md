---
id: ex-littlewood-conjecture-for-a-rational-coordinate
kind: example
title: "Littlewood approximation when one coordinate is rational"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-littlewood-product-limsup-expression
  - def-distance-to-nearest-integer
proof_strategy: direct
sources:
  references:
    - title: "Chow–Technau 2024"
      url: "https://arxiv.org/pdf/2307.14871v1"
      locator: "Theorem 1.5 and discussion in §§1–4"
    - title: "Kleinbock 1999"
      url: "https://arxiv.org/pdf/math/9808057v2"
      locator: "§1.2: badly approximable affine forms and the rational/irrational distinction"
---

## Example

Let $\alpha=r/s\in\mathbb Q$ with integers $r$ and $s\ge1$. For every $\beta\in\mathbb R$, the Littlewood product liminf satisfies $\mathcal L(\alpha,\beta)=0$.

## Example references

[Chow–Technau 2024](https://arxiv.org/pdf/2307.14871v1) — Theorem 1.5 and discussion in §§1–4.

[Kleinbock 1999](https://arxiv.org/pdf/math/9808057v2) — §1.2: badly approximable affine forms and the rational/irrational distinction.


## Facts & Assumptions

**Given:** $\alpha=r/s$, arbitrary $\beta$, and the product liminf.

[F1] The Littlewood expression is $\liminf_n n\|n\alpha\|\|n\beta\|$. [[def-littlewood-product-limsup-expression]]

[F2] Distance to the nearest integer is nonnegative and vanishes at integers. [[def-distance-to-nearest-integer]]

## Verification

1.1 For each positive integer $k$, the integer $n=ks$ satisfies $n\alpha=kr\in\mathbb Z$, hence $\|n\alpha\|=0$ by [F2]. [given, F2, algebra]

2.1 Along the infinite sequence $n=ks$, the nonnegative expression in [F1] is zero. Its liminf over all positive integers is therefore zero. [step 1.1, F1, algebra] ∎

