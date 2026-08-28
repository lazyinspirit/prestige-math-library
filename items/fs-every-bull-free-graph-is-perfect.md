---
id: fs-every-bull-free-graph-is-perfect
kind: false-statement
title: "FALSE: every bull-free graph is perfect"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cex-the-five-cycle-is-bull-free-but-not-perfect]
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

**False claim.** Every bull-free graph is perfect.

## Facts & Assumptions

**Given:** The five-cycle $C_5$.

[L1] The graph $C_5$ is bull-free but not perfect ([[cex-the-five-cycle-is-bull-free-but-not-perfect]]).

## Refutation

**Proof technique:** direct.

1.1 By [L1], the graph $C_5$ is already a counterexample to the claim. [L1]

2.1 Therefore the claim is false. [step 1.1] ∎
