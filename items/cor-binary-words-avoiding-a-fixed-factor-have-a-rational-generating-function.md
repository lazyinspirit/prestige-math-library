---
id: cor-binary-words-avoiding-a-fixed-factor-have-a-rational-generating-function
kind: corollary
title: "Binary words avoiding any fixed nonempty factor have a rational length generating function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-words-avoiding-finitely-many-factors-have-rational-generating-functions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "R. P. Stanley, Enumerative Combinatorics, vol. 1, 2nd ed., Proposition 4.7.8"
      url: "https://math.mit.edu/~rstan/ec/ec1.pdf"
pipeline_run: null
---

## Statement

Fix a nonempty binary word $w$. If $a_n$ is the number of words in $\{0,1\}^n$ that do not contain $w$ as a contiguous factor, then $\sum_{n\ge0}a_nx^n$ is a rational formal power series over $\mathbb Z$.

## Facts & Assumptions

**Given:** A nonempty word $w$ over the finite alphabet $\{0,1\}$.

[L1] Words over a finite alphabet that avoid a finite set of nonempty factors have a rational length generating function ([[thm-words-avoiding-finitely-many-factors-have-rational-generating-functions]]).

## Proof

**Proof technique:** specialization.

1.1 The alphabet $\{0,1\}$ is finite, and $B=\{w\}$ is a finite set of nonempty words. [given]

2.1 Apply [L1] using step 1.1. Its conclusion is the asserted rationality. [step 1.1, L1] ∎
