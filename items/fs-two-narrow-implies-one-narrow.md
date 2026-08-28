---
id: fs-two-narrow-implies-one-narrow
kind: false-statement
title: "FALSE: every 2-narrow graph is 1-narrow"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-the-five-cycle-is-not-one-narrow]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
---

## Statement

**False claim.** Every two-narrow graph is one-narrow.

## Facts & Assumptions

**Given:** The cycle graph $C_5$.

[L1] The graph $C_5$ is two-narrow but not one-narrow ([[ex-the-five-cycle-is-not-one-narrow]]).

## Refutation

**Proof technique:** direct.

1.1 The example [L1] furnishes a graph $C_5$ that satisfies the hypothesis of the false claim but not its conclusion. [L1]

2.1 Therefore the implication is false. [step 1.1] ∎
