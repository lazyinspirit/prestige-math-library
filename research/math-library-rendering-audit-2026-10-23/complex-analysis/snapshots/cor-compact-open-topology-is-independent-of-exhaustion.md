---
id: cor-compact-open-topology-is-independent-of-exhaustion
kind: corollary
title: "The compact-open topology on C(Ω,C) is independent of the chosen compact exhaustion"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-compact-exhaustion-metric-characterizes-local-uniform-convergence, thm-compact-open-equals-compact-convergence]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 5 §§5.1-5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 2 §5.2 and Ch. 8 §3.2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, Ch. 2"
      url: "https://www.axler.net/HFT.pdf"
pipeline_run: frontier-22
---

## Statement

Any two compact exhaustions of a plane domain $\Omega$ induce the same topology
on $C(\Omega,\mathbb C)$ by the weighted exhaustion metric. Equivalently, the
compact-open topology on $C(\Omega,\mathbb C)$ is independent of the chosen
compact exhaustion.

## Facts & Assumptions

**Given:** Two compact exhaustions of the same plane domain $\Omega$.

[L1] An exhaustion metric induces exactly local uniform convergence ([[thm-compact-exhaustion-metric-characterizes-local-uniform-convergence]]).

[L2] On a metric domain and metric target, the compact-open topology is the topology of compact convergence ([[thm-compact-open-equals-compact-convergence]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], each exhaustion metric induces the same convergence notion, namely local uniform convergence on $\Omega$. [L1, given]

2.1 Fact [L2] identifies that convergence notion with compact convergence and hence with the compact-open topology on $C(\Omega,\mathbb C)$. Therefore the induced topology is independent of the chosen exhaustion. [L2, given] ∎
