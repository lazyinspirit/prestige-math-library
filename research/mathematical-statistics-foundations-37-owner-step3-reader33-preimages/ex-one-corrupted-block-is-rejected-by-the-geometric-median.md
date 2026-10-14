---
id: ex-one-corrupted-block-is-rejected-by-the-geometric-median
kind: example
title: One corrupted block is rejected by the geometric median
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - alg-geometric-median-of-block-means
  - lem-measurable-minimum-norm-geometric-median-selection
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Stanislav Minsker, Geometric Median and Robust Estimation in Banach
        Spaces, Lemma 2.1
      url: https://arxiv.org/pdf/1308.1334
      locator: PDF pp. 3–5; the geometric median's resistance to a minority of
        displaced points.
---

## Example

Take five real block means $0,0,0,0,M$ with $M>0$. Their geometric median is exactly $0$, regardless of how large $M$ is.

## Facts & Assumptions

**Given:** Countable Choice and the five block means $0,0,0,0,M$ with $M>0$. Countable Choice is a prerequisite of the minimum-norm selector used by [[alg-geometric-median-of-block-means]], through [[lem-measurable-minimum-norm-geometric-median-selection]].

[F1] A geometric median minimizes the sum of distances to the listed block means ([[alg-geometric-median-of-block-means]]).

## Verification

**Proof technique:** direct.

**Given:** $M>0$ and the objective $F(z)=4|z|+|z-M|$.

1.1 If $z\le0$, then $F(z)=M-5z\ge M$, with equality only at $z=0$. If $0\le z\le M$, then $F(z)=M+3z\ge M$, again with equality only at $0$. [F1, algebra]

2.1 If $z\ge M$, then $F(z)=5z-M\ge4M>M=F(0)$. Therefore $0$ is the unique minimizer, and the minimum-norm selection rule also returns $0$. Four of five centers are exact while the fifth can be arbitrarily far away. [F1, step 1.1, algebra] ∎

