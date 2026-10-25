---
id: thm-qa-11-known-count-query-cost
kind: theorem
title: Known-count Grover search uses O of the square root of N over t bit queries
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 25
proof_strategy: direct
deps:
  - alg-qa-11-known-count-grover-search
  - def-qa-quantum-query-complexity
  - lem-ceiling-and-least-positive-integer-threshold
  - lem-of-square-monotone
  - thm-of-square-roots
  - thm-qa-11-grover-iterate-query-cost
  - thm-qa-11-known-count-success-bound
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: 'Ronald de Wolf, Quantum Computing: Lecture Notes, §7.2'
      url: https://arxiv.org/pdf/1907.09415
    - title: Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation, §2
      url: https://arxiv.org/pdf/quant-ph/0005055
axiom_use: None; only finite sums, finite random choices, elementary real arithmetic, and natural-number induction are used; no choice principle is needed.
---
 
## Statement
 
For $0<t\le N$, the exact known-count procedure uses $O(\sqrt{N/t})$ standard bit queries: one query for each Grover iterate and at most one separate verification query. If $t=0$ and the exact count is supplied, it returns none with no query. This is only a query bound; exact classical maximization can cost exponentially many bit operations in $n$.
 
## Facts & Assumptions
 
**Given:** The exact known-count algorithm and the worst-case quantum query-cost convention.
 
[F1] [[alg-qa-11-known-count-grover-search]]: if $t=0$, the algorithm returns none without a query. If $t>0$, it computes the recurrence and every candidate value for $0\le k\le K=\lceil\sqrt{N/t}\rceil$, chooses the least maximizer, applies $k$ iterates, then makes one verification query.
 
[F2] [[thm-qa-11-grover-iterate-query-cost]]: each iterate uses exactly one standard bit query.
 
[F3] [[def-qa-quantum-query-complexity]]: query cost counts the designated oracle invocations, separately from gates and classical work.
 
[F4] [[thm-qa-11-known-count-success-bound]]: the finite maximization has the stated success guarantee and the $t=0$ branch returns none.
 
[F5] [[lem-ceiling-and-least-positive-integer-threshold]] and [[thm-of-square-roots]]: $K=\lceil\sqrt{N/t}\rceil\le\sqrt{N/t}+1$ and $\sqrt{N/t}\ge1$.
 
[F6] [[lem-of-square-monotone]]: since $N/t\ge1$, its nonnegative square root is at least $1$.

## Proof

1.1 For $t>0$, [F1] uses at most $K$ iterates; by [F2] they contribute at most $K$ bit queries, and the separate verification contributes at most one. [F1, F2]

2.1 By [F5]–[F6], $K+1\le\sqrt{N/t}+2\le3\sqrt{N/t}$. This is the claimed worst-case query bound; no nonoracle gate or classical preprocessing cost is included by [F3]. For $t=1$, [F1] explicitly computes $K+1\ge\sqrt N=2^{n/2}$ candidate values, so its classical work can be exponential in $n$. [step 1.1, F1, F3, F5, F6, algebra]

3.1 For $t=0$, [F4] gives the correct output none, and the explicit early return in [F1] executes it without any oracle invocation. Thus its query cost is zero by [F3]. [given, F1, F3, F4] ∎
