---
page: discrete-memoryless-channel-capacity-examples
title: "Discrete Memoryless Channel Capacity — Examples"
status: draft
requires: [discrete-memoryless-channel-capacity]
items: []
examples:
  - ex-binary-symmetric-channel-capacity
  - ex-binary-erasure-channel-capacity
---

These calculations apply the finite-DMC capacity formula to binary symmetric and binary erasure channels. They use natural logarithms and include the deterministic, fully erased, and fully noisy endpoints.

Average and maximal error can differ for a finite code. For one use of the BEC with erasure probability $\epsilon$, send messages $1,2$ as $0,1$ and decode $0,1,\star$ as $1,2,1$, respectively, where $\star$ denotes erasure. The two message error probabilities are $0$ and $\epsilon$, so the uniform-message average error is $\epsilon/2$ while the maximal error is $\epsilon$ ([[def-fixed-length-channel-code-errors]], [[ex-binary-erasure-channel-capacity]]). In general, average error is at most maximal error; the expurgation lemma retains at least half the messages with maximal error at most twice the original average error ([[lem-discrete-memoryless-channel-average-to-maximal-expurgation]]). These finite-code criteria nevertheless give the same asymptotic capacity: the A-page theorem proves $C_{\rm av}(W)=C_{\max}(W)=C(W)$ for every finite DMC without a cost constraint ([[thm-discrete-memoryless-channel-capacity-formula]]).
