---
id: thm-qa-14-bbbv-search-lower-bound
kind: theorem
title: BBBV hybrid lower bound for unstructured search
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - def-qa-14-search-promise
  - lem-qa-14-cumulative-hybrid-bound
  - lem-qa-14-aggregate-hybrid-squared-distance
  - lem-qa-14-state-distance-from-acceptance-gap
  - lem-qa-14-coherent-query-normal-form
  - def-qa-bounded-error-promise-correctness
  - def-qa-quantum-query-complexity
proof_strategy: direct
axiom_use: None; the lower bound uses finite hybrid sums, bounded-error probabilities, and no choice principle.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Charles H. Bennett, Ethan Bernstein, Gilles Brassard, and Umesh Vazirani, Strengths and Weaknesses of Quantum Computing"
      url: "https://arxiv.org/pdf/quant-ph/9701001"
      locator: "§3.1, Theorem 3.3 and Corollary 3.4 (PDF pp.7–10): query-magnitude hybrid proof. Theorem 3.5 is a distinct random-oracle application and is not used here."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (2025)"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "§23.2, printed pp.110–112 (PDF pp.119–121): quantum query lower-bound methods."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
      locator: "§11.1, printed pp.89–90 (PDF pp.101–102): query model and query lower bounds."
---

## Statement

For the promise $P_N=\{0^N,e_1,\ldots,e_N\}$ of [[def-qa-14-search-promise]], every bounded-error quantum algorithm deciding whether the input is zero or one-marked uses at least $\sqrt N/24$ standard bit queries. Every bounded-error finder that outputs a marked coordinate on each $e_i$ and none on $0^N$ also uses at least $\sqrt N/24$ standard bit queries. The decision part satisfies the stronger bound $T\ge\sqrt N/12$.

## Facts & Assumptions

**Given:** The promise task, pure query normal form, final acceptance gap, aggregate hybrid bound, and worst-case query cost convention.

[F1] [[def-qa-14-search-promise]]: the no input is $0^N$, each yes input is $e_i$, and finding succeeds exactly when a valid marked coordinate is returned on a yes input or none on the no input.

[F2] [[lem-qa-14-coherent-query-normal-form]]: finite-branch algorithms with worst-case $T$ standard XOR queries have equivalent pure-state circuits with exactly $T$ ordinary queries and the same output law.

[F3] [[lem-qa-14-state-distance-from-acceptance-gap]]: a common final measurement with probabilities at least $2/3$ and at most $1/3$ forces final vector distance at least $1/6$.

[F4] [[lem-qa-14-aggregate-hybrid-squared-distance]]: the squared final-state distances over all singleton inputs sum to at most $4T^2$.

[F5] [[def-qa-bounded-error-promise-correctness]]: bounded-error decision correctness is per promised input with success probability at least $2/3$.

[F6] [[def-qa-quantum-query-complexity]]: query cost is the maximum number of oracle calls on any promised input and branch.

## Proof

1.1 Let a bounded-error decision algorithm use $T$ queries. Apply [F2] and use the common final acceptance event. For each $i$, correctness [F5] gives acceptance at least $2/3$ on $e_i$ and at most $1/3$ on $0^N$. By [F3], $\|\psi_T^i-\psi_T^0\|\ge1/6$. [F1, F2, F3, F5]

2.1 Summing the squares of these $N$ inequalities gives $N/36\le\sum_i\|\psi_T^i-\psi_T^0\|^2$. By [F4], the right side is at most $4T^2$, so $T\ge\sqrt N/12$. [F4, step 1.1, algebra]

3.1 Now let a bounded-error finder use $T$ queries. Append a decision step that measures its output and, if it is a coordinate $i$, makes one standard bit query at address $i-1$ with response initialized to $0$; accept exactly when that response is $1$. If the output is none or invalid, reject without a query. On $0^N$ this decision never accepts; on $e_i$ it accepts whenever the finder returns $i$, which has probability at least $2/3$ by [F1]. This is a bounded-error decision procedure with at most $T+1$ queries, so [F6] and step 2.1 give $T+1\ge\sqrt N/12$. [F1, F5, F6, step 2.1, construct]

4.1 If $N\ge576$, then $\sqrt N/12\ge2$, and step 3.1 gives $T\ge\sqrt N/12-1\ge\sqrt N/24$. If $1\le N<576$, a zero-query finder has the same output law on $0^N$ and $e_1$, yet success would require probability at least $2/3$ on the disjoint outcomes none and $1$ under this one common law. Their probabilities would sum to at least $4/3$, impossible; hence $T\ge1\ge\sqrt N/24$. [F1, step 3.1, algebra] ∎
