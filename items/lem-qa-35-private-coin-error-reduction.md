---
id: lem-qa-35-private-coin-error-reduction
kind: lemma
title: "Constant private-coin error reduction by repetition"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps: ["def-qa-35-finite-communication-protocol", "def-qa-35-equality-promise", "lem-chernoff-bound-for-bernoulli-trials"]
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all distributions, sums, bases, and selection sets are finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 16 §§16.1 and 16.6, PDF pp.147–153; private/public-coin SMP and equality lower-bound context (§16.1), quantum fingerprint construction and SWAP-test analysis (§16.6)."
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: https://theory.cs.princeton.edu/complexity/book.pdf
      locator: "Chapter 10, Chernoff bounds; local amplification argument uses the published Bernoulli lower-tail form."
---

## Statement

If a private-coin simultaneous-message Equality protocol has worst-case error at most 1/3 and each sender sends at most c bits, then for any fixed odd t independent repetitions followed by majority have error at most exp(−t/48) and each sender sends at most t(c+1) bits under a fixed-length encoding.

## Facts & Assumptions

**Given:** A classical private-coin SMP Equality protocol whose error on every promised pair is at most $1/3$, whose individual messages have length at most $c$ bits, and an odd integer $t\ge1$. Run $t$ independent copies and output the majority decision.

[F1] [[lem-chernoff-bound-for-bernoulli-trials]]: For independent Bernoulli$(p)$ variables $X_1,\ldots,X_k$, $S=\sum_iX_i$, $\mu=pk$, and $0<\alpha<1$, $\Pr(S\le(1-\alpha)\mu)\le\exp(-\alpha^2\mu/2)$.

## Proof

**Proof technique:** direct.

1.1 Fix a promised input. Let $X_i$ indicate that copy $i$ is correct. The independent private random tapes make these Bernoulli variables independent with common success probability $p\ge2/3$. Thus $\mu=pt\ge2t/3$. Since $t$ is odd, majority is wrong only if $S<t/2$, an event contained in $S\le(3/4)\mu$ because $(3/4)\mu\ge t/2$. [given, F1, algebra]

2.1 Apply [F1] with $\alpha=1/4$: the error is at most $\exp(-\mu/32)\le\exp(-t/48)$. Each original message is a binary string of length at most $c$, so has fewer than $2^{c+1}$ possibilities. A tuple of $t$ such messages has at most $2^{t(c+1)}$ possibilities and can be injectively encoded by a fixed-length string of at most $t(c+1)$ bits. Thus repetition preserves private independence, yields the stated error, and charges at most $t(c+1)$ bits to each sender. [step 1.1, F1, algebra] ∎
