---
id: lem-total-oracle-functional-has-computable-use-bound
kind: lemma
title: "An everywhere-total functional has a computable use bound"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-truth-table-reduction, lem-oracle-computation-has-a-finite-query-witness]
proof_strategy: contradiction
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Theorem 5.11"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

Let $\Gamma$ be an oracle functional which is total, with a natural-number
output, on every oracle. There is a total computable $b:\mathbb N\to\mathbb N$ such that for
every $n$ and every oracle $X$, the computation $\Gamma^X(n)$ halts after
querying only numbers below $b(n)$.

## Facts & Assumptions

**Given:** an everywhere-total natural-valued oracle functional $\Gamma$.

## Proof

**Proof technique:** contradiction.

1.1 For fixed $n$, effectively search for length $m$ and time $t$ such that every binary string $\sigma$ of length $m$ makes $\Gamma^\sigma(n)$ halt by $t$ without querying outside $m$. [given, construct]

2.1 If this search never succeeded, the finitely branching tree of strings whose finite-oracle simulation has not supplied such a transcript would have nodes at every length. König's lemma yields an infinite oracle on which $\Gamma(n)$ never halts, contradicting totality. [step 1.1, assume-contra]

3.1 Therefore the search halts; let $b(n)$ be its first successful length. The finite exhaustive test makes $b$ computable, and its defining property forces every oracle computation on $n$ to use only positions below $b(n)$. [step 1.1, step 2.1, discharge-contradiction] ∎
