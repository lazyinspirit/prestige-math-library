---
id: ex-a-strictly-increasing-singular-function-from-a-dense-cantor-series
kind: example
title: "A strictly increasing singular function from a dense series of scaled Cantor functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-singular-function, cor-cantor-function-is-continuous, thm-cantor-function-properties, thm-cantor-set-properties, thm-fubini-term-by-term-differentiation-for-series-of-increasing-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. M. Bruckner, J. B. Bruckner, and B. S. Thomson, Real Analysis, 2nd ed."
      url: "https://classicalrealanalysis.info/documents/BBT-AlllChapters-Landscape.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

There exists a strictly increasing singular function on $[0,1]$.

## Facts & Assumptions

**Given:** Countable Choice, the Cantor function, and its basic properties.

[A1] The symbols are those of the statement.

## Verification

**Proof technique:** direct.

1.1 Enumerate all closed rational intervals $I_n=[u_n,v_n]$ with $0 \le u_n < v_n \le 1$. For each $n$, let $c_n$ be the function that is $0$ on $[0,u_n]$, is $1$ on $[v_n,1]$, and on $[u_n,v_n]$ is the affine rescaling of the Cantor function. The Cantor function is continuous by [[cor-cantor-function-is-continuous]], so each $c_n$ is continuous, nondecreasing, and takes values in $[0,1]$. Define $S(x) := \sum_{n \ge 1} 2^{-n-1} c_n(x)$. The series converges uniformly because each summand is bounded by $2^{-n-1}$, so $S$ is continuous and nondecreasing. [given, choose]

2.1 If $x<y$, choose a rational interval $I_n$ with $x < u_n < v_n < y$. Then $c_n(x)=0$ and $c_n(y)=1$, so $S(y)-S(x) \ge 2^{-n-1} > 0$. Hence $S$ is strictly increasing. For each $n$, the derivative of $c_n$ is $0$ almost everywhere because off the scaled Cantor set inside $I_n$ the function is locally constant by [[thm-cantor-function-properties]], and that scaled Cantor set is null by [[thm-cantor-set-properties]]. Since each $c_n$ is nondecreasing and Countable Choice is assumed, the term-by-term differentiation theorem [[thm-fubini-term-by-term-differentiation-for-series-of-increasing-functions]] applies and gives $S'(x) = \sum_{n \ge 1} 2^{-n-1} c_n'(x) = 0$ almost everywhere. [step 1.1]

3.1 The function $S$ is continuous, nondecreasing, strictly increasing, and has derivative $0$ almost everywhere, so it is a singular function by [[def-singular-function]]. [step 1.1, step 2.1]

4.1 Steps 1.1 through 3.1 prove the example. [step 1.1, step 2.1, step 3.1] ∎
