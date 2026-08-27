---
id: thm-nonnegative-measurable-functions-admit-increasing-simple-approximations
kind: theorem
title: "Every nonnegative measurable function admits an explicit increasing sequence of simple approximations"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-simple-function-and-canonical-representation, thm-threshold-characterisations-of-real-and-extended-real-measurability]
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration and Real Analysis, Theorem 2.89"
      url: "https://measure.axler.net/MIRA.pdf"
---

## Statement

Let $(X,\mathcal{A})$ be a measurable space and let
$f : X \to [0,+\infty]$ be measurable. For $k \in \mathbb{N}$ define

$$s_k := \sum_{j=0}^{k2^k-1} j2^{-k}\, \mathbf{1}_{\{j2^{-k} \le f < (j+1)2^{-k}\}} + k\,\mathbf{1}_{\{f \ge k\}}.$$

Then each $s_k$ is a simple measurable function,

$$0 \le s_k \le s_{k+1} \le f,$$

and $s_k(x) \to f(x)$ for every $x \in X$. If $E \subseteq X$ is a set on which
$f \le M < +\infty$, then $s_k \to f$ uniformly on $E$.

## Facts & Assumptions

**Given:** A measurable space $(X,\mathcal{A})$, a measurable function
$f : X \to [0,+\infty]$, and the dyadic truncations $s_k$ displayed above.

[L1] Threshold measurability characterizes measurable
$\overline{\mathbb{R}}$-valued functions.
([[thm-threshold-characterisations-of-real-and-extended-real-measurability]])

[L2] A measurable real-valued function with finite range is simple, and its
canonical representation is the sum over its level sets.
([[def-simple-function-and-canonical-representation]])

## Proof

**Proof technique:** direct.

1.1 For fixed $k$, each set [L1, L2]
$\{j2^{-k} \le f < (j+1)2^{-k}\}$ and $\{f \ge k\}$ is measurable by [L1].
Hence $s_k$ is a measurable real-valued function. Its values belong to the
finite set
$\{0,2^{-k},2\cdot2^{-k},\dots,(k2^k-1)2^{-k},k\}$, so [L2] makes $s_k$ a
simple function. [L1, L2]

1.2 Fix $x \in X$. If $f(x) \ge k$, then $s_k(x)=k \le f(x)$ and also [given, algebra]
$s_{k+1}(x) \ge k = s_k(x)$. If $f(x) < k$, choose $j$ with
$j2^{-k} \le f(x) < (j+1)2^{-k}$. Then $s_k(x)=j2^{-k} \le f(x)$ and
$f(x)-s_k(x)<2^{-k}$. At the finer scale $2^{-k-1}$, the same point lies in one
of the two adjacent dyadic cells over that coarse cell, so
$s_{k+1}(x)$ is either $j2^{-k}$ or $j2^{-k}+2^{-k-1}$. Thus
$s_k(x) \le s_{k+1}(x) \le f(x)$. [given, algebra]

2.1 The inequalities of step 1.2 hold for every $x$, so [step 1.2]
$0 \le s_k \le s_{k+1} \le f$. If $f(x)<+\infty$, then for all $k>f(x)$ the
second case of step 1.2 applies and gives
$0 \le f(x)-s_k(x)<2^{-k}$, hence $s_k(x)\to f(x)$. If $f(x)=+\infty$, then
$s_k(x)=k$ for every $k$, so $s_k(x)\to +\infty = f(x)$. [step 1.2]

3.1 If $f \le M < +\infty$ on a set $E$, then for every $k>M$ the second case of [step 1.2, step 2.1]
step 1.2 applies to every $x \in E$ and gives
$0 \le f(x)-s_k(x)<2^{-k}$. Therefore

$$\sup_{x \in E} |f(x)-s_k(x)| \le 2^{-k},$$

so $s_k \to f$ uniformly on $E$. [step 1.2, step 2.1] ∎
