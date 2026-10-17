---
id: def-xd-countable-nonexplosive-ctmc
kind: definition
title: "Given countable nonexplosive pure-jump chain with finite rates"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-countable
  - def-real-exponential-function-and-e
  - def-random-element-and-real-random-variable
  - def-composition-of-probability-kernels
  - lem-kernel-composition-is-well-defined-and-associative
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§§2–3, printed pp. 2–15; transition kernels, holding times, rates, and the finite-state restriction in the matrix ODE argument."
    - title: "Brian Munsky and Mustafa Khammash, The Finite State Projection Algorithm for the Solution of the Chemical Master Equation"
      url: "https://www.engr.colostate.edu/~munsky/Papers/JChemPhys_124_044104.pdf"
      locator: "§II, equations (2.3)–(2.5), printed pp. 044104-2–044104-3; countable reaction state space and transition-rate matrix."
verification:
  precheck: n/a
---

## Definition

Let $S$ be a nonempty at most countable state space, and let $q(x,y)\ge0$ be a finite transition rate for each pair $x,y\in S$ with $x\ne y$. For a nonnegative family indexed by an at most countable set, its sum is the supremum of its finite subsums, including the empty subsum $0$; if these subsums are unbounded, the sum is $+\infty$. Require the total exit rate

$$\lambda(x):=\sum_{y\ne x}q(x,y)$$

to be finite for every $x$. The associated **column rate matrix convention** is $Q_{yx}=q(x,y)$ for $y\ne x$ and $Q_{xx}=-\lambda(x)$; thus the source state indexes the column. No finite-dimensional matrix is asserted for an infinite $S$.

A **given time-homogeneous pure-jump Markov chain with rates $q$** is a process $X=(X_t)_{t\ge0}$ with values in $S$ whose conditional future law given its history depends only on its present state and elapsed time, and whose paths are constant between successive jumps. Its transition kernels $K_t$ depend only on elapsed time, satisfy $K_0=I$, and obey $K_{s+t}=K_sK_t$ using the composition $(K_sK_t)(x,A):=\int_S K_t(z,A)\,K_s(x,dz)$ of [[def-composition-of-probability-kernels]]. At state $x$ with $\lambda(x)>0$, its holding time has survival $e^{-\lambda(x)t}$ and its next state is $y\ne x$ with probability $q(x,y)/\lambda(x)$, independently of that holding time; at $\lambda(x)=0$ it stays at $x$. It is **nonexplosive** when almost surely it has only finitely many state changes on every bounded time interval.

The chain and nonexplosion are input hypotheses in this item and in the projection results below. This definition does not construct a chain from an arbitrary countable rate matrix and proves no general nonexplosion claim.
