---
id: def-finite-discrete-memoryless-relay-channel-and-causal-code
kind: definition
title: Finite discrete memoryless relay channel and causal code
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-finite-discrete-memoryless-network-and-code]
aliases: []
axiom_use: No choice axiom is used; all channel alphabets and message sets are finite.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: Thomas M. Cover and Abbas A. El Gamal, Capacity Theorems for the Relay Channel, IEEE Transactions on Information Theory 25(5), 1979
      url: https://isl.stanford.edu/groups/elgamal/abbas_publications/J003.pdf
      locator: §§I–II, printed pp. 572–575; finite channel model, causal relay encoder, and block-Markov coding convention.
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 16, §§16.1–16.2, printed pp. 383–386.
---

## Definition

A **finite discrete memoryless relay channel** is the three-node instance of [[def-finite-discrete-memoryless-network-and-code]] with source input $X\in\mathcal X$, relay input $X_r\in\mathcal X_r$, relay observation $Y_r\in\mathcal Y_r$, destination observation $Y\in\mathcal Y$, and transition law $W(y_r,y\mid x,x_r)$. For a positive integer message-set size $M$, the one-way message is uniform on $[M]$ and the destination estimates it from $Y^n$.

In the **relay-only causal model**, $X_i=f_i(M)$ and $X_{r,i}=g_i(Y_r^{i-1})$. In the **full output-feedback model**, both encoders know the past pair $(Y^{i-1},Y_r^{i-1})$, so $X_i=f_i(M,Y^{i-1},Y_r^{i-1})$ and $X_{r,i}=g_i(Y^{i-1},Y_r^{i-1})$. In either model the channel outputs at time $i$ are drawn from $W(\cdot,\cdot\mid X_i,X_{r,i})$; no encoder sees a current-time output before choosing its current input. The rate is $n^{-1}\ln M$, and achievability uses average error under the uniform message law.
