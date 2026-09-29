---
id: def-recurrent-and-transient-state
kind: definition
title: "Recurrent and transient states"
status: draft
origin: pipeline
deps:
  - def-hitting-return-and-visit-times
  - def-transition-matrix-and-n-step-transition-probabilities
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

For a specified Markov chain law with transition matrix $p$ and deterministic initial state $x$, write $\mathbb P_x$ for that law. The state $x$ is **recurrent** when

$$\mathbb P_x(T_x^+<\infty)=1,$$

and **transient** when

$$\mathbb P_x(T_x^+<\infty)<1.$$

Here $T_x^+$ is the strictly positive return time of [[def-hitting-return-and-visit-times]], so the initial visit at time zero does not count as a return. Since the displayed return probability lies in $[0,1]$, these alternatives exhaust all states. The definition concerns the specified law $\mathbb P_x$ and does not assert that laws for every state can be selected simultaneously.
