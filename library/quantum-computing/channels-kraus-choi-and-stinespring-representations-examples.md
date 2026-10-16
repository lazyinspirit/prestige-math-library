---
page: channels-kraus-choi-and-stinespring-representations-examples
title: Channels, Kraus, Choi, and Stinespring Representations — Examples
status: draft
items: []
examples:
  - ex-qc-dephasing-channel-kraus-choi
requires:
  - channels-kraus-choi-and-stinespring-representations
---

The worked qubit phase-flip family uses Kraus operators $\sqrt p I$ and $\sqrt{1-p}Z$ for $0\le p\le1$. Its action multiplies off-diagonal entries by $2p-1$, so $p=1/2$ is complete dephasing. The Choi calculation uses the same input-first/output-second order as the A page and explicitly checks positivity and the output partial trace.
