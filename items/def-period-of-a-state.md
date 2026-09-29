---
id: def-period-of-a-state
kind: definition
title: "Period of a state"
status: draft
origin: pipeline
deps:
  - def-transition-matrix-and-n-step-transition-probabilities
  - def-common-divisor-and-gcd
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---
## Definition

For $x\in E$, let

$$R_x:=\{n\in\mathbb N:n\ge1\text{ and }p^{(n)}(x,x)>0\}.$$

If $R_x=\varnothing$, set $d(x):=0$. If $R_x\ne\varnothing$, define $d(x)$ to be the greatest positive integer dividing every element of $R_x$ (the gcd convention of [[def-common-divisor-and-gcd]]). This greatest divisor exists: fix one $t\in R_x$; every common positive divisor of $R_x$ is a divisor of $t$, so the set of such divisors is a nonempty finite subset of the positive divisors of $t$, and therefore has a greatest element. The set being maximized is intrinsic to $R_x$, so the result is independent of the auxiliary $t$. Only positive return times enter; $p^{(0)}(x,x)=1$ does not force $d(x)=1$.
