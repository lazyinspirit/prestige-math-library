---
id: cex-ae-zero-derivative-does-not-determine-endpoint-change
kind: counterexample
title: "The Cantor function is continuous, has derivative $0$ off a null set, and still rises from $0$ to $1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cantor-function-properties, cor-cantor-function-is-continuous, thm-cantor-set-properties, def-derivative]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cantor function"
      url: "https://en.wikipedia.org/wiki/Cantor_function"
pipeline_run: null
---

## Counterexample

Let $c:[0,1]\to[0,1]$ be the Cantor function. It is continuous, $c(0)=0$, and $c(1)=1$. At every point outside the Cantor set $C$, the function is constant on a neighbourhood and hence $c'=0$. Since $C$ has measure zero, $c'=0$ almost everywhere, but

$$c(1)-c(0)=1.$$

Thus an almost-everywhere derivative identity alone cannot replace the continuity and integrability hypotheses in Newton--Leibniz.

## Facts & Assumptions

**Given:** The Cantor set $C$ and Cantor function $c$.

[L1] The Cantor function is continuous and satisfies $c(0)=0$, $c(1)=1$ ([[cor-cantor-function-is-continuous]], [[thm-cantor-function-properties]]).

[L2] Every $x\in[0,1]\setminus C$ lies in a neighbourhood on which $c$ is constant ([[thm-cantor-function-properties]]).

[L3] The Cantor set has measure zero ([[thm-cantor-set-properties]]).

[L4] The derivative of a locally constant function is $0$ directly from the difference quotient ([[def-derivative]]).

## Verification

**Proof technique:** direct.

1.1 If $x\notin C$, [L2] makes $c$ constant near $x$, so every sufficiently local difference quotient is $0$ and [L4] gives $c'(x)=0$. [L2, L4]

2.1 The exceptional set is contained in $C$, which has measure zero by [L3]; therefore $c'=0$ almost everywhere. [step 1.1, L3]

3.1 By [L1], $c(1)-c(0)=1-0=1$, despite step 2.1. [step 2.1, L1]

4.1 Hence the implication from an almost-everywhere zero derivative to zero endpoint change is false without further regularity. [step 3.1] ∎
