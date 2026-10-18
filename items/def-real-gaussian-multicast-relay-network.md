---
id: def-real-gaussian-multicast-relay-network
kind: definition
title: Real scalar Gaussian multicast relay network and power constraints
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
aliases: []
axiom_use: The model definition uses no axiom; Gaussian distributions and differential entropy in later results use the stated finite-dimensional conventions.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 18, Gaussian relay networks and cut-set bounds, printed pp. 466–477.
    - title: Sung Hoon Lim, Young-Han Kim, Abbas El Gamal, and Sae-Young Chung, Noisy Network Coding, IEEE Transactions on Information Theory 57(5), 2011
      url: https://isl.stanford.edu/~abbas/papers/Noisy%20Network%20Coding.pdf
      locator: §IV, Gaussian relay networks, PDF pp. 11–14.
---

## Definition

A **real scalar Gaussian relay network** has node set $[N]$ for an integer $N\ge1$, source set $\mathcal S\subseteq[N]$, destination set $\mathcal D\subseteq[N]$, one real input $X_i$ and output $Y_i$ at each node, and channel equations
$$Y_j=\sum_{i=1}^N g_{ji}X_i+Z_j,\qquad j\in[N],$$
where the gains $g_{ji}\in\mathbb R$ are fixed and the noises $Z_j$ are independent $N(0,1)$ random variables, independent across channel uses and of all source messages. At each use the current noise vector is independent of all past observations and the current inputs; future inputs may depend on past noises through feedback. Each node has a nonnegative power budget $P_i\ge0$ and average power constraint $\frac1n\sum_{t=1}^n\mathbb E[X_{i,t}^2]\le P_i$. Each source $i\in\mathcal S$ has an independent uniform message $M_i$ in a finite nonempty set $\mathcal M_i$. For every non-source node $i\notin\mathcal S$, set $\mathcal M_i=\{*\}$ and $M_i=*$, so its encoder has no message information. A length-$n$ causal code uses measurable encoders $X_{i,t}=f_{i,t}(M_i,Y_i^{t-1})$ and destination decoders based on $(Y_d^n,M_d)$, where $M_d$ is its own source message when $d\in\mathcal S$ and a singleton otherwise; multicast means every destination must decode every other source message, while its own message is already known. The average error probability is the probability that any required destination estimate is wrong. Write $G_{B,A}$ for the matrix with rows indexed by $B$ and columns by $A$ whose entries are $g_{ji}$.

Rates in this page's Gaussian formulas are measured in bits per use, $R_i=n^{-1}\log_2|\mathcal M_i|$.
