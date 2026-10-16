---
id: thm-qa-11-known-count-random-query-cost
kind: theorem
title: Query cost of randomized known-count Grover search
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 22
proof_strategy: direct
deps:
  - alg-qa-11-known-count-random-iteration-search
  - def-qa-quantum-query-complexity
  - lem-ceiling-and-least-positive-integer-threshold
  - lem-of-square-monotone
  - thm-of-square-roots
  - thm-qa-11-grover-iterate-query-cost
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, §2
      url: https://arxiv.org/pdf/quant-ph/0005055
axiom_use: None; only finite sums, finite random choices, elementary real arithmetic, and natural-number induction are used; no choice principle is needed.
---
 
## Statement
 
For $0<t\le N/2$, the nine-round randomized known-count procedure uses at most $9K=O(\sqrt{N/t})$ standard bit queries, where $K=\lceil\sqrt{N/t}\rceil$; rejected rounds use no oracle query and each accepted round uses $j\le K-1$ iterate queries plus one verification query. For $t>N/2$ it uses at most nine queries, and for $t=0$ it uses none. This is a query count only, not a gate or classical preprocessing bound.
 
## Facts & Assumptions
 
**Given:** The randomized known-count algorithm, exact $K$, and worst-case quantum query convention.
 
[F1] [[alg-qa-11-known-count-random-iteration-search]]: there are nine rounds; rejected labels use no query, accepted labels use $j<K$ iterates and one verification, the direct branch makes one query per round, and $t=0$ returns none.
 
[F2] [[def-qa-quantum-query-complexity]]: query cost counts oracle calls and excludes gates and classical work.
 
[F3] [[thm-qa-11-grover-iterate-query-cost]]: one Grover iterate uses one bit query.
 
[F4] [[lem-ceiling-and-least-positive-integer-threshold]] and [[thm-of-square-roots]]: $K=\lceil\sqrt{N/t}\rceil\le\sqrt{N/t}+1$.
 
[F5] [[lem-of-square-monotone]]: since $N/t\ge1$, its nonnegative square root is at least $1$.

## Proof

1.1 In the branch $0<t\le N/2$, an accepted round uses at most $K-1$ iterate queries by [F3] and one verification query by [F1], hence at most $K$ queries; rejected rounds use zero. Nine rounds use at most $9K$. [given, F1, F3]

2.1 Since $\sqrt{N/t}\ge1$ by [F5], [F4] gives $K\le2\sqrt{N/t}$, so $9K=O(\sqrt{N/t})$. In the direct branch there are at most nine queries, and for $t=0$ none; [F2] keeps these counts separate from gates and classical work. [step 1.1, F1, F2, F4, F5, algebra] ∎
