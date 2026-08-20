---
id: fs-a-continuous-function-on-a-compact-interval-has-a-rectifiable-graph
kind: false-statement
title: "FALSE: every continuous function on a compact interval has a rectifiable graph"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-bounded-variation-and-total-variation,
       thm-rectifiable-iff-coordinate-functions-have-bounded-variation,
       thm-p-series-rational, thm-quarter-turn-values-and-shift-formulas,
       cor-trigonometric-parity-and-pythagorean-identity,
       cor-archimedean-reciprocal, thm-heine-borel-r,
       def-pi-via-first-positive-cosine-zero,
       thm-cosine-has-a-smallest-positive-zero,
       thm-sine-and-cosine-derivatives,
       cor-differentiable-implies-continuous,
       thm-algebra-of-continuous-functions,
       thm-composition-of-continuous-functions,
       thm-product-universal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Thomas Lam, 21-236 Recitation Notes, §4.3"
      url: "https://cims.nyu.edu/~tjl8195/21_236_Recitation_Notes_Final.pdf"
pipeline_run: null
---

## Statement

**False claim:** if $f:[a,b]\to\mathbb R$ is continuous on a compact interval,
then its graph path $x\mapsto(x,f(x))$ is rectifiable.

## Facts & Assumptions

**Given:** The universal claim in the Statement.

[L1] A function has bounded variation on $[a,b]$ exactly when its finite partition-variation sums are bounded above ([[def-bounded-variation-and-total-variation]]).

[L2] The harmonic series $\sum_{k\ge1}1/k$ diverges ([[thm-p-series-rational]], case $p=1$).

[L3] The shift formulas give $\sin((2k+1)\pi/2)=(-1)^k$ for $k\in\mathbb N$ ([[thm-quarter-turn-values-and-shift-formulas]]).

[L4] For every real $u$, $|\sin u|\le1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]).

[L5] A path in $\mathbb R^n$ is rectifiable if and only if each coordinate function has bounded variation ([[thm-rectifiable-iff-coordinate-functions-have-bounded-variation]]).

[L6] For every real $\varepsilon>0$, there is a positive integer $N$ with $1/N<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L7] Every closed bounded interval in $\mathbb R$ is compact ([[thm-heine-borel-r]]).

[L8] The number $\pi=2\gamma$ is positive because $\gamma\in(0,2)$ ([[def-pi-via-first-positive-cosine-zero]], [[thm-cosine-has-a-smallest-positive-zero]]).

[L9] Sine is continuous, the reciprocal is continuous away from zero, and algebraic combinations and composites of continuous real functions are continuous ([[thm-sine-and-cosine-derivatives]], [[cor-differentiable-implies-continuous]], [[thm-algebra-of-continuous-functions]], [[thm-composition-of-continuous-functions]]).

[L10] The identity real function is continuous, and a map into a product is continuous if each of its component maps is continuous ([[thm-algebra-of-continuous-functions]], claim 5, [[thm-product-universal-property]], claim 2).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that every continuous real function on a compact interval has a rectifiable graph. [assume-contra]

1.2 Define $f(0):=0$ and $f(x):=x\sin(1/x)$ for $0<x\le1$. By [L4], $|f(x)|\le x$, so $f$ is continuous at zero; [L9] gives continuity elsewhere. [L4, L9, algebra]

1.3 Put $x_k:=2/((2k+1)\pi)$. By [L6] and [L8], $x_k\downarrow0$, so choose $K$ with $x_K\le1$. By [L3], $f(x_k)=(-1)^kx_k$. [L3, L6, L8, choose, construct, algebra]

2.1 For $N>K$, use the partition with points $0,x_N,x_{N-1},\ldots,x_K,1$, omitting a duplicate endpoint if needed. Consecutive oscillatory nodes contribute $|f(x_k)-f(x_{k+1})|=x_k+x_{k+1}\ge x_k$ to its variation sum. [step 1.3, L1, construct, algebra]

3.1 Since $x_k=2/((2k+1)\pi)\ge1/(\pi(k+1))$, the variation sums in step 2.1 dominate partial tails of a fixed positive multiple of the harmonic series. They are unbounded by [L2], so [L1] says $f$ does not have bounded variation. [step 2.1, L1, L2, algebra]

4.1 The identity coordinate is continuous by [L10], and $f$ is continuous by step 1.2, so the same fact makes $\gamma(x)=(x,f(x))$ a path. Its second coordinate is not of bounded variation by step 3.1. The forward implication in [L5], read contrapositively, therefore shows that $\gamma$ is not rectifiable. [step 1.2, step 3.1, L5, L10]

5.1 The interval $[0,1]$ is compact by [L7] and $f$ is continuous by step 1.2, so step 1.1 would make its graph rectifiable, contradicting step 4.1. The universal claim is false. [step 1.1, step 1.2, step 4.1, L7, discharge-contradiction] ∎
