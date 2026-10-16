---
id: thm-qa-14-grover-search-upper-query-cost
kind: theorem
title: Grover search upper-bound query cost
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 23
deps:
  - def-qa-14-search-promise
  - alg-qa-14-one-marked-search-with-verification
  - thm-qa-14-zero-completion-query-simulation-correct
  - thm-qa-11-grover-iterate-query-cost
  - def-qa-quantum-query-complexity
proof_strategy: direct
axiom_use: None; the query count follows from the finite loop bounds and one-query simulation.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§7.2, printed pp.53–56 (PDF pp.65–68): one-query Grover iterations and square-root query schedule."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§19.1, printed pp.87–89 (PDF pp.96–98): Grover query upper bound and separate query cost."
---

## Statement

For every $N\ge1$, [[alg-qa-14-one-marked-search-with-verification]] uses at most $3\sqrt{2N}$ standard bit queries, including the final candidate verification. Hence its query cost is $O(\sqrt N)$. Address comparison, reversible computation, recurrence evaluation, state preparation, reflection gates, and all other nonoracle work are separate costs; no polynomial-time claim is made.

## Facts & Assumptions

**Given:** The fixed-one algorithm, the Grover-iterate query count, exact zero-completion simulation, and the worst-case query-cost convention.

[F1] [[alg-qa-14-one-marked-search-with-verification]]: the chosen iteration count satisfies $k\le K=\lceil\sqrt M\rceil$, and one verification query is made.

[F2] [[thm-qa-11-grover-iterate-query-cost]]: each Grover iterate contains exactly one standard bit query.

[F3] [[thm-qa-14-zero-completion-query-simulation-correct]]: each padded bit query, including verification, uses exactly one raw standard bit query.

[F4] [[def-qa-quantum-query-complexity]]: the query coordinate counts designated oracle invocations and excludes gates and classical work.

[F5] [[alg-qa-14-one-marked-search-with-verification]]: the padded domain size obeys $N\le M<2N$.

## Proof

1.1 The procedure of [F1] makes $k$ Grover iterates and one verification. By [F2] each iterate needs one padded bit query, and [F3] replaces every one of those calls and the verification with exactly one raw query. Therefore the total raw query count is at most $K+1$. [F1, F2, F3]

2.1 Since $K=\lceil\sqrt M\rceil\le\sqrt M+1$, we have $K+1\le\sqrt M+2\le3\sqrt M$ because $M\ge1$. By [F5], $3\sqrt M<3\sqrt{2N}$. Thus the worst-case standard bit-query cost is at most $3\sqrt{2N}$ by [F4]. None of the reversible address tests, classical recurrence steps, or gates were counted as oracle invocations, so this estimate makes no claim about their cost. [F4, F5, step 1.1, algebra] ∎
