---
id: lem-nested-level-probability-factorization
kind: lemma
title: Nested-event probabilities factor into conditional levels
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-nested-rare-event-levels
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Gino Biondini, An Introduction to Rare Event Simulation and Importance Sampling, Handbook of Statistics 33, Chapter 2, §8"
      url: "https://www.math.buffalo.edu/~biondini/papers/handbookstatistics2015v33chapter2.pdf"
---

## Statement

For the nested event levels of [[def-nested-rare-event-levels]],
$
P(A_L)=\prod_{\ell=1}^L p_\ell.
$

## Facts & Assumptions

**Given:** A nested sequence $A_0=\Omega\supseteq A_1\supseteq\cdots\supseteq A_L$ with all prefix probabilities positive.

[F1] [[def-nested-rare-event-levels]]: $p_\ell=P(A_\ell)/P(A_{\ell-1})$ and $P(A_0)=1$.

## Proof

1.1 The definition gives $P(A_\ell)=p_\ell P(A_{\ell-1})$ for every $1\le\ell\le L$. [F1, given, algebra]

2.1 Applying these identities successively from $\ell=1$ to $L$ yields $P(A_L)=P(A_0)\prod_{\ell=1}^Lp_\ell=\prod_{\ell=1}^Lp_\ell$, since $P(A_0)=1$. [F1, step 1.1, algebra] ∎
