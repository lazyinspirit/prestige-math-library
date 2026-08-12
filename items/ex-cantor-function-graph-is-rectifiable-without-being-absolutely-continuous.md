---
id: ex-cantor-function-graph-is-rectifiable-without-being-absolutely-continuous
kind: example
title: "The graph path $t\\mapsto(t,c(t))$ of the Cantor function is rectifiable although its second coordinate is not absolutely continuous"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-rectifiable-iff-coordinate-functions-have-bounded-variation, thm-jordan-decomposition-for-bv-functions, def-bounded-variation-and-total-variation, def-absolutely-continuous-function, thm-cantor-function-properties, cor-cantor-function-is-continuous, thm-componentwise-limits-and-continuity, def-cantor-set, def-cantor-function, thm-cantor-set-ternary-description, lem-geometric-sequence-null]
justified_by: []
aliases: []
landmark: false
proof_strategy: construction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cantor function"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
pipeline_run: null
---

## Example

Let $c$ be the Cantor function and define $\gamma(t)=(t,c(t))$ on $[0,1]$. Then $\gamma$ is a rectifiable path, but its second coordinate $c$ is not absolutely continuous. Thus rectifiability, even together with continuity and coordinatewise monotonicity, does not imply absolute continuity.

## Facts & Assumptions

**Given:** The Cantor set stages and Cantor function.

[L1] The Cantor function is continuous, nondecreasing, and satisfies $c(0)=0$, $c(1)=1$ ([[cor-cantor-function-is-continuous]], [[thm-cantor-function-properties]]).

[L2] A real function has bounded variation exactly when it is a difference of two nondecreasing functions ([[thm-jordan-decomposition-for-bv-functions]]), and a path is rectifiable exactly when all coordinates have bounded variation ([[thm-rectifiable-iff-coordinate-functions-have-bounded-variation]]).

[L3] Absolute continuity requires small total input length to force small total endpoint increment over every finite family of intervals with disjoint interiors ([[def-absolutely-continuous-function]]).

[L4] At stage $n$, the Cantor construction retains $2^n$ disjoint closed intervals of length $3^{-n}$, indexed by the first $n$ ternary digits in $\{0,2\}$ ([[def-cantor-set]], [[thm-cantor-set-ternary-description]]).

[L5] The Cantor function reads those first $n$ ternary digits as binary digits, so its increments over the retained stage-$n$ intervals are all $2^{-n}$ and sum to $1$ ([[def-cantor-function]], [[thm-cantor-function-properties]]).

[L6] $(2/3)^n\to0$ ([[lem-geometric-sequence-null]]).

[L7] A vector-valued function is continuous exactly when all its coordinate functions are continuous ([[thm-componentwise-limits-and-continuity]]).

## Verification

**Proof technique:** construction.

1.1 The identity coordinate and $c$ are nondecreasing by [L1], hence have bounded variation by [L2]. Their pairing is continuous by componentwise continuity. [given, L1, L2, L7]

1.2 The $2^n$ retained stage intervals have pairwise disjoint interiors and total length $2^n3^{-n}=(2/3)^n$, which tends to zero by [L4] and [L6]. [L4, L6]

1.3 By [L5], the sum of the absolute increments of $c$ over those same intervals is $2^n2^{-n}=1$ for every $n$. [L5]

2.1 Therefore [L2] makes $\gamma$ rectifiable; quantitatively its length is at most the sum of the two coordinate variations, namely $2$. [step 1.1, L2]

3.1 Taking $\varepsilon=1/2$, every proposed $\delta>0$ is defeated by a sufficiently large $n$: step 1.2 makes the total interval length below $\delta$, while step 1.3 leaves total image increment $1$. This contradicts [L3], so $c$ is not absolutely continuous. [step 1.2, step 1.3, L3] ∎
