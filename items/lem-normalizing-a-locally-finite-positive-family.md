---
id: lem-normalizing-a-locally-finite-positive-family
kind: lemma
title: "A locally finite nonnegative family with positive pointwise sum normalizes to a partition of unity"
status: published
origin: session
deps: [lem-locally-finite-sums-are-continuous, def-partition-of-unity-subordinate-to-a-cover, lem-algebra-of-continuous-real-maps-on-a-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. Robbin, Partitions of Unity"
      url: "https://people.math.wisc.edu/~jwrobbin/partitions_of_unity.pdf"
pipeline_run: null
---

## Statement

Let $\{f_s:X\to[0,\infty)\}_{s\in S}$ be continuous with locally finite cozero
family, and suppose $f:=\sum_s f_s$ is positive at every point. Then
$\varphi_s:=f_s/f$ form a partition of unity; their cozero sets and supports are
the same as those of the corresponding $f_s$.

## Facts & Assumptions

**Given:** A locally finite nonnegative continuous family whose pointwise sum is everywhere positive.

[L1] The sum $f=\sum_s f_s$ is continuous ([[lem-locally-finite-sums-are-continuous]]).

[L2] A quotient of continuous real-valued maps is continuous on the cozero set of its denominator ([[lem-algebra-of-continuous-real-maps-on-a-space]]).

[F1] A family of continuous maps $X\to[0,1]$ is a partition of unity exactly when its cozero family is locally finite and its pointwise sum is one ([[def-partition-of-unity-subordinate-to-a-cover]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the function $f$ is continuous, and the positivity hypothesis makes $\operatorname{coz}(f)=X$. [L1]

2.1 Therefore each $\varphi_s=f_s/f$ is continuous by [L2] and nonnegative. Since $f_s(x)\le f(x)$, it takes values in $[0,1]$, and positivity of $f$ gives $\operatorname{coz}(\varphi_s)=\operatorname{coz}(f_s)$. [step 1.1, L2]

3.1 At every $x\in X$, local finiteness makes the sum finite and gives $\sum_s\varphi_s(x)=\sum_sf_s(x)/f(x)=f(x)/f(x)=1$. [step 2.1]

4.1 The cozero family is unchanged, hence locally finite, and equality of cozero sets also gives equality of supports. Thus [F1] says that $\{\varphi_s\}$ is a partition of unity. [step 2.1, step 3.1, F1] ∎
