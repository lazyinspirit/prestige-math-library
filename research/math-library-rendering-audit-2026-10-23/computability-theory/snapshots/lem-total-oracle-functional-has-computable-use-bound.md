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
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

2.1 Suppose the search never succeeds. Call a string $\sigma$ of length $m$ bad if the computation with that finite oracle never halts without a query outside $m$. At every length $m$ there is a bad string: otherwise each of the finitely many length-$m$ strings would halt within $m$, and the maximum of their finite running times would make the search succeed. Every prefix of a bad string is bad, since a halting run using only queries below the prefix length would be the same on every extension. Thus the bad strings form a binary tree with nodes at every level. The empty string has bad extensions at arbitrarily large lengths. Whenever a bad string has bad extensions at arbitrarily large lengths, at least one of its two children does too; otherwise the two finite height bounds would bound all its extensions. Recursively take the child labelled $0$ if it has this property, and otherwise the child labelled $1$. This fixed rule yields an infinite path $X$ of bad strings without any choice principle. If $\Gamma^X(n)$ halted, its finite query witness would be contained below some $m$; then the length-$m$ prefix of $X$ would not be bad, a contradiction. This violates everywhere-totality. [step 1.1, given, assume-contra]

3.1 Therefore the search halts; let $b(n)$ be its first successful length. The finite exhaustive test makes $b$ computable, and its defining property forces every oracle computation on $n$ to use only positions below $b(n)$. [step 1.1, step 2.1, discharge-contradiction] ∎
