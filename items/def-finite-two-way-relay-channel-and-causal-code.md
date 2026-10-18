---
id: def-finite-two-way-relay-channel-and-causal-code
kind: definition
title: Finite two-way relay channel and causal code
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
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 17, §§17.4–17.6, relay channel with feedback, two-way channel, and directed information, printed pp. 444–453.
    - title: Sung Hoon Lim, Young-Han Kim, Abbas El Gamal, and Sae-Young Chung, Noisy Network Coding, IEEE Transactions on Information Theory 57(5), 2011
      url: https://isl.stanford.edu/~abbas/papers/Noisy%20Network%20Coding.pdf
      locator: §II, AWGN two-way relay model and general DMN causal code, PDF pp. 7–9.
---

## Definition

A **finite two-way relay channel** is the three-node DMN of [[def-finite-discrete-memoryless-network-and-code]] with terminal inputs $X_1,X_2$, relay input $X_r$, terminal outputs $Y_1,Y_2$, relay observation $Y_r$, and transition law $W(y_1,y_2,y_r\mid x_1,x_2,x_r)$. Terminals 1 and 2 have independent uniform messages $M_1$ and $M_2$ and wish to exchange them. A causal code uses $X_{1,i}=f_{1,i}(M_1,Y_1^{i-1})$, $X_{2,i}=f_{2,i}(M_2,Y_2^{i-1})$, and $X_{r,i}=f_{r,i}(Y_r^{i-1})$; terminal 1 estimates $M_2$ from $(M_1,Y_1^n)$ and terminal 2 estimates $M_1$ from $(M_2,Y_2^n)$. The probability of error is the probability either estimate is wrong. This is a full-duplex model: all three nodes choose an input at every use, and each input depends only on that node's message and past observations.
