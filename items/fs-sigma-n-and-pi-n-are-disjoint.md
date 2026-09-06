---
id: fs-sigma-n-and-pi-n-are-disjoint
kind: false-statement
title: "False: Sigma_n^0 and Pi_n^0 are disjoint"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sigma-n-pi-n-and-delta-n-sets, cor-delta-one-sets-are-exactly-decidable]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, §5.2"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

For every positive $n$, the classes $\Sigma_n^0$ and $\Pi_n^0$ are disjoint.

## Facts & Assumptions

**Given:** a positive finite $n$.

## Refutation

**Proof technique:** direct.

1.1 The decidable set $E=\{2k:k\in\mathbb N\}$ is $\Delta_1^0$, hence is both $\Sigma_1^0$ and $\Pi_1^0$. [given, construct]

2.1 Prefix padding puts both descriptions of $E$ at every positive level $n$. Thus $E\in\Sigma_n^0\cap\Pi_n^0$, refuting disjointness. [step 1.1] ∎
