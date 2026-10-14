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
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-separable-space
  - thm-reals-ordered-field
  - thm-of-square-roots
  - lem-of-abs-value
  - thm-reals-cauchy-complete
  - thm-rationals-countable
  - lem-rat-embeds-dense
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
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

[F2] With inner product $\langle x,y\rangle=xy$, $\mathbb R$ is a real inner-product space: ordered-field arithmetic gives bilinearity, symmetry, and $x^2\ge0$ with equality only for $x=0$ ([[thm-reals-ordered-field]], [[def-real-and-complex-inner-product-space]]). Its induced norm is $\sqrt{x^2}=|x|$ ([[thm-of-square-roots]], [[lem-of-abs-value]]), so completeness of the real line makes it a Hilbert space ([[thm-reals-cauchy-complete]], [[def-hilbert-space]]). The embedded rationals are countable and dense, so this Hilbert space is separable ([[thm-rationals-countable]], [[lem-rat-embeds-dense]], [[def-separable-space]]).

## Verification

**Proof technique:** direct.

**Given:** $M>0$ and the objective $F(z)=4|z|+|z-M|$.

1.1 If $z\le0$, then $F(z)=M-5z\ge M$, with equality only at $z=0$. If $0\le z\le M$, then $F(z)=M+3z\ge M$, again with equality only at $0$. [F1, F2, algebra]

2.1 If $z\ge M$, then $F(z)=5z-M\ge4M>M=F(0)$. Therefore $0$ is the unique minimizer, and the minimum-norm selection rule also returns $0$. Four of five centers are exact while the fifth can be arbitrarily far away. [F1, step 1.1, algebra] ∎

