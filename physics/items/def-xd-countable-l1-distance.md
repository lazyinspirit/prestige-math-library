---
id: def-xd-countable-l1-distance
kind: definition
title: "Countable-state l1 distance for mass functions"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-countable]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Brian Munsky and Mustafa Khammash, The Finite State Projection Algorithm for the Solution of the Chemical Master Equation"
      url: "https://www.engr.colostate.edu/~munsky/Papers/JChemPhys_124_044104.pdf"
      locator: "§II, Theorem 2.2, printed p. 044104-4; componentwise probability error and lost-mass control."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $S$ be at most countable. For nonnegative functions $a,b:S\to[0,\infty)$ with finite total masses, define

$$\|a-b\|_{\ell^1(S)}:=\sum_{x\in S}|a(x)-b(x)|.$$

For a nonnegative family, $\sum_{x\in S}$ means the supremum of its finite subsums; this agrees with the ordinary series under any enumeration of $S$. The distance is finite because $|a(x)-b(x)|\le a(x)+b(x)$ termwise, so $\|a-b\|_{\ell^1(S)}\le\sum_xa(x)+\sum_xb(x)$. In particular it is defined for probability and subprobability mass functions.
