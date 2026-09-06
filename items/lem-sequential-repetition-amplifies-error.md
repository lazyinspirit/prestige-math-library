---
id: lem-sequential-repetition-amplifies-error
kind: lemma
title: "Sequential repetition amplifies completeness and soundness gaps"
status: draft
origin: session
deps: [def-completeness-and-soundness, lem-chernoff-bound-for-bernoulli-trials]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Goldreich, Foundations of Complexity Theory, Claim 11.2.1"
      url: "https://www.wisdom.weizmann.ac.il/~oded/PS/CC/all.pdf"
---

## Statement

If a protocol has completeness $c>1/2$ and soundness $s<1/2$, then for every $\varepsilon>0$ a polynomially bounded odd number of sequential fresh-coin repetitions, accepting by strict majority, has completeness at least $1-\varepsilon$ and soundness at most $\varepsilon$.

## Facts & Assumptions

**Given:** constants $c>1/2>s$, a target $\varepsilon>0$, and sequential independent verifier coins.

## Proof

1.1 For the honest prover, the acceptance indicators are independent Bernoulli variables of mean at least $c$; the lower-tail Chernoff bound [[lem-chernoff-bound-for-bernoulli-trials]], applied to these success indicators, makes majority failure exponentially small in the number $k$ of copies. [given]

1.2 Against any adaptive prover, conditional on every earlier transcript, the next copy accepts with probability at most $s$ by [[def-completeness-and-soundness]]. Induction on copies gives $\mathbb E e^{\lambda\sum X_i}\le(1-s+se^\lambda)^k$, so the usual Chernoff upper-tail calculation makes majority acceptance exponentially small. [given, algebra]

2.1 Choose odd $k$ large enough that both exponential bounds are at most $\varepsilon$; for fixed $c,s,\varepsilon$ this is constant and preserves polynomial bounds. [step 1.1, step 1.2, choose] ∎
