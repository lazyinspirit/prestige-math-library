---
id: cor-fundamental-group-of-two-circle-wedge
kind: corollary
title: '$\pi_1(S^1\vee S^1)$ is the free group on two generators'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fundamental-group-of-finite-wedge-of-circles]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, Example 1.21"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
pipeline_run: null
---

## Statement

For the wedge of two quotient circles, the fundamental group at the wedge point is the free group $F(a,b)$ on the two standard once-around loop classes $a$ and $b$.

## Facts & Assumptions

**Given:** The wedge $W_2=(\mathbb R/\mathbb Z)\vee(\mathbb R/\mathbb Z)$ and its two standard loop classes $a,b$.

[L1] The fundamental group of a wedge of $r$ quotient circles is free on its $r$ standard circle loops ([[thm-fundamental-group-of-finite-wedge-of-circles]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L1] with $r=2$ to obtain that $\pi_1(W_2,w)$ is free on its standard circle loops. [L1, algebra]

2.1 Those standard loops are precisely $a$ and $b$, so $\pi_1(W_2,w)\cong F(a,b)$. [step 1.1] ∎
