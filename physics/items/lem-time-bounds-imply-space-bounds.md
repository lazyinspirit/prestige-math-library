---
id: lem-time-bounds-imply-space-bounds
kind: lemma
title: "An eventually positive time bound yields the same-order space bound"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-asymptotic-resource-comparison, def-worst-case-time-and-space-complexity]
justified_by: []
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 17. Space Complexity"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/space"
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-10-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

Let $M$ be a fixed $k$-tape machine that halts on every input, and let
$T:\mathbb N\to[0,\infty)$ be eventually at least $1$ at every length
for which an input word exists. If
$$ \operatorname{Time}_M(n)=O(T(n)), $$
then
$$ \operatorname{Space}_M(n)=O(T(n)). $$

## Facts & Assumptions

**Given:** A fixed halting $k$-tape machine $M$ and a bound $T$ with $\operatorname{Time}_M(n)=O(T(n))$, eventually $T(n)\ge1$ on inhabited input lengths.

[L1] Worst-case time and space count machine steps and visited tape cells, respectively, by [[def-worst-case-time-and-space-complexity]].

[L2] Big-$O$ means eventual domination up to a constant factor, by [[def-asymptotic-resource-comparison]].

## Proof

**Proof technique:** direct.

1.1 During one step, each of the $k$ heads can enter at most one new cell on its own tape. Therefore after $t$ steps, the total number of visited cells across all tapes is at most the initial $k$ cells plus $kt$. By [L1], every halting computation using $t$ steps uses at most $k(t+1)$ space. [L1, given]

2.1 If there are no length-$n$ inputs, the revised convention in [L1] makes both worst-case values zero. At an inhabited length, applying step 1.1 to the worst halting run gives $\operatorname{Space}_M(n)\le k(\operatorname{Time}_M(n)+1)$. For sufficiently large inhabited lengths the hypothesis $T(n)\ge1$ absorbs the additive constant, and [L2] converts the time bound into $\operatorname{Space}_M(n)=O(T(n))$. [L1, L2, step 1.1] ∎
