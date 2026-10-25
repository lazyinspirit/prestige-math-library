---
id: cor-major-index-generating-function-is-q-factorial
kind: corollary
title: "The major-index generating function of $S_n$ is $[n]_q!$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-foata-transformation-is-bijective, thm-foata-transformation-sends-major-index-to-inversion-number, thm-q-factorial-counts-permutations-by-inversions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Richard P. Stanley, Enumerative Combinatorics, Volume 1, second edition"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$,

$$\sum_{\sigma \in S_n} q^{\operatorname{maj}(\sigma)} = [n]_q!.$$

## Facts & Assumptions

**Given:** Foata's transformation and the inversion generating function of $S_n$.

[L0] Foata's transformation is a bijection of $S_n$ ([[lem-foata-transformation-is-bijective]]).

[L1] Foata's transformation sends major index to inversion number ([[thm-foata-transformation-sends-major-index-to-inversion-number]]).

[L2] The inversion generating function of $S_n$ is $[n]_q!$ ([[thm-q-factorial-counts-permutations-by-inversions]]).

## Proof

**Proof technique:** direct.

1.1 By [L0], Foata's transformation is a bijection of $S_n$, so reindexing the sum over $S_n$ by $\Phi$ and using [L1] gives $\sum_{\sigma \in S_n} q^{\operatorname{maj}(\sigma)} = \sum_{\sigma \in S_n} q^{\operatorname{inv}(\sigma)}$. [L0, L1]

2.1 Apply [L2] to the right-hand side. [step 1.1, L2] ∎
