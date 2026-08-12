---
id: cex-graph-of-x-sin-one-over-x-is-not-rectifiable
kind: counterexample
title: "The continuous path $\\gamma(x)=(x,x\\sin(1/x))$ on $[0,1]$, with $\\gamma(0)=(0,0)$, is not rectifiable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-rectifiable-iff-coordinate-functions-have-bounded-variation, thm-p-series-rational, thm-nonnegative-series-bounded-partial-sums, def-pi-via-first-positive-cosine-zero, thm-quarter-turn-values-and-shift-formulas, cor-trigonometric-parity-and-pythagorean-identity, cor-archimedean-reciprocal, def-bounded-variation-and-total-variation]
justified_by: []
aliases: []
landmark: true
proof_strategy: divergent-variation
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. R. Shastri, Metric Spaces, Section 6"
      url: "https://www.math.iitb.ac.in/~ars/ma403.pdf"
pipeline_run: null
---

## Counterexample

Define $f:[0,1]\to\mathbb R$ by $f(0)=0$ and $f(x)=x\sin(1/x)$ for $x>0$. Then $f$ is continuous, but the graph path $\gamma(x)=(x,f(x))$ is not rectifiable.

## Facts & Assumptions

**Given:** The function $f$ and graph path $\gamma$.

[L1] The number $\pi$ is positive, and the shift formulas give $\sin(\pi/2+k\pi)=(-1)^k$ for integers $k\ge0$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-quarter-turn-values-and-shift-formulas]]).

[L2] The harmonic series diverges, the $p=1$ case of the rational $p$-series theorem ([[thm-p-series-rational]]); a nonnegative series converges exactly when its partial sums are bounded above ([[thm-nonnegative-series-bounded-partial-sums]]).

[L3] Bounded variation means that all partition variation sums are bounded above ([[def-bounded-variation-and-total-variation]]).

[L4] A path is rectifiable exactly when all of its coordinate functions have bounded variation ([[thm-rectifiable-iff-coordinate-functions-have-bounded-variation]]).

[L5] Reciprocals of positive naturals tend below every positive bound ([[cor-archimedean-reciprocal]]).

[L6] $|\sin x|\le1$ for every real $x$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

## Verification

**Proof technique:** divergent-variation.

1.1 Since $|f(x)|\le x$ for $x>0$, $f(x)\to0=f(0)$ as $x\downarrow0$; away from zero it is continuous. Thus $\gamma$ is a path. [given, L6]

1.2 Put $x_k=2/((2k+1)\pi)$. By [L1], $x_k\downarrow0$ and $f(x_k)=(-1)^kx_k$. [given, L1, L5]

2.1 For the partition containing $0,x_N,x_{N-1},\ldots,x_0,1$, the variation contribution from consecutive $x_k$ is $|f(x_k)-f(x_{k+1})|=x_k+x_{k+1}\ge x_k$. [step 1.2, L3]

3.1 Since $x_k=2/((2k+1)\pi)\ge1/(\pi(k+1))$, [L2] says the partial sums of $\sum x_k$ are unbounded. Hence the variation sums in step 2.1 are unbounded and $f$ is not of bounded variation. [step 2.1, L2]

4.1 The first coordinate $x\mapsto x$ has bounded variation, but the second does not by step 3.1. Therefore [L4] says the graph path is not rectifiable. [step 3.1, L4] ∎
