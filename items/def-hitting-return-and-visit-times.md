---
id: def-hitting-return-and-visit-times
kind: definition
title: "Hitting, return, and visit times"
status: draft
origin: pipeline
deps:
  - def-discrete-stopping-time
  - def-stochastic-process-and-finite-dimensional-distributions
landmark: false
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin, Peres and Wilmer, Markov Chains and Mixing Times, second edition"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---
## Definition

Let $(X_n,\mathcal F_n)_{n\ge0}$ be an adapted [[def-stochastic-process-and-finite-dimensional-distributions]] with values in a countable set $E$ equipped with $2^E$. For $A\subseteq E$, define

$$T_A:=\inf\{n\ge0:X_n\in A\},\qquad T_x:=T_{\{x\}},\qquad T_x^+:=\inf\{n\ge1:X_n=x\}.$$

The infimum of the empty set is $+\infty$. The visit count is the extended nonnegative integer

$$N_x:=\sum_{n\ge0}\mathbf 1_{\{X_n=x\}}\in\mathbb N_0\cup\{+\infty\}.$$

For a process started at $x$, put $R_0=0$ and define recursively

$$R_k=\begin{cases}\inf\{n>R_{k-1}:X_n=x\},&R_{k-1}<\infty,\\+\infty,&R_{k-1}=\infty.\end{cases}$$

Thus a later return time is assigned $+\infty$ if the preceding one is infinite; the expression $X_\infty$ is never used. For every $A$ and $n\ge0$,

$$\{T_A\le n\}=\bigcup_{j=0}^{n}\{X_j\in A\},\qquad \{T_x^+\le n\}=\bigcup_{j=1}^{n}\{X_j=x\},$$

where the second union is empty when $n=0$. Adaptedness makes these events belong to $\mathcal F_n$, so these are stopping times under [[def-discrete-stopping-time]].
