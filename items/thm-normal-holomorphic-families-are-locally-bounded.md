---
id: thm-normal-holomorphic-families-are-locally-bounded
kind: theorem
title: "Normal holomorphic families are locally bounded"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-normal-family-of-holomorphic-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
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

**Assume the Axiom of Countable Choice.** Every normal family of holomorphic
functions on a plane domain is locally bounded.

## Facts & Assumptions

**Given:** Countable Choice and a normal family $\mathcal F\subseteq H(\Omega)$.

[L1] Normality means that every sequence in $\mathcal F$ has a subsequence converging locally uniformly to a holomorphic limit ([[def-normal-family-of-holomorphic-functions]]).

## Proof

**Proof technique:** direct.

1.1 If $\mathcal F$ were not locally bounded at some point, then on some closed disc there would be a sequence $(f_n)$ in $\mathcal F$ with $\sup|f_n|>n$. [given, choose]

2.1 By [L1], a subsequence would converge uniformly on that disc to a holomorphic limit, and uniform convergence on a compact disc forces that subsequence to be uniformly bounded there. This contradicts step 1.1, so the family is locally bounded. [L1, given, algebra] ∎
