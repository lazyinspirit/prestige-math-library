---
id: cor-holomorphic-functions-are-closed-for-local-uniform-convergence
kind: corollary
title: "Holomorphic functions form a closed subspace for locally uniform convergence"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-completeness-of-continuous-functions-for-local-uniform-convergence, thm-weierstrass-convergence-holomorphic-functions, thm-compact-exhaustion-metric-characterizes-local-uniform-convergence]
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
    - title: "Matthias Weber, Complex Analysis, Ch. 5 §§5.1-5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 2 §5.2 and Ch. 8 §3.2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, Ch. 2"
      url: "https://www.axler.net/HFT.pdf"
pipeline_run: frontier-22
---

## Statement

The holomorphic functions on a plane domain form a closed subspace of
$C(\Omega,\mathbb C)$ for the topology of locally uniform convergence.
Equivalently, a $d_K$-limit of holomorphic functions is holomorphic.

## Facts & Assumptions

**Given:** A sequence of holomorphic functions converging in the exhaustion metric to a continuous limit $f$.

[L1] Convergence in the exhaustion metric is exactly local uniform convergence ([[thm-compact-exhaustion-metric-characterizes-local-uniform-convergence]]).

[L2] A locally uniform limit of holomorphic functions is holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 Fact [L1] turns the metric convergence into local uniform convergence on the domain. [L1, given]

2.1 Applying [L2] shows that the limit function $f$ is holomorphic. Hence holomorphic functions form a closed subspace for local uniform convergence. [L2, given] ∎
