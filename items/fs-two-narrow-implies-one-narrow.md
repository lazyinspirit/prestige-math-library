---
id: fs-two-narrow-implies-one-narrow
kind: false-statement
title: "FALSE: every 2-narrow graph is 1-narrow"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-the-five-cycle-is-not-one-narrow]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky and Shmuel Safra, The Erdős-Hajnal conjecture for bull-free graphs"
      url: "https://web.math.princeton.edu/~mchudnov/EHbullfree.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: 'Bounded delegated accept review: research/ap-prerequisite-followup/agent-02-receipts.jsonl;
      root proof reading: research/ap-prerequisite-followup/root-local-proof-review.md.
      Not an independent judge verdict or owner-human audit.'
    delegated_by: user
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
