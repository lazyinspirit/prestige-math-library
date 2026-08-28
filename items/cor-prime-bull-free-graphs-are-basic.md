---
id: cor-prime-bull-free-graphs-are-basic
kind: corollary
title: "Every prime bull-free graph is basic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-basic-and-composite-bull-free-graphs, def-prime-graph, thm-composite-bull-free-graphs-have-a-nontrivial-module]
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
    - title: "Maria Chudnovsky, The structure of bull-free graphs III: global structure, Theorem 4.2"
      url: "https://web.math.princeton.edu/~mchudnov/bulls3.pdf"
---

## Statement

Every prime bull-free graph is basic.

## Facts & Assumptions

**Given:** A prime bull-free graph $G$.

[F1] A bull-free graph is basic exactly when it is not composite ([[def-basic-and-composite-bull-free-graphs]]).

[F2] A prime graph has no nontrivial module ([[def-prime-graph]]).

[L1] Every composite bull-free graph has a nontrivial module ([[thm-composite-bull-free-graphs-have-a-nontrivial-module]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ were composite, then the composite-case theorem [L1] would supply a nontrivial module of $G$. This contradicts [F2], so $G$ is not composite. [F2, L1]

2.1 Since $G$ is bull-free and not composite, [F1] says that $G$ is basic. [step 1.1, F1] ∎
