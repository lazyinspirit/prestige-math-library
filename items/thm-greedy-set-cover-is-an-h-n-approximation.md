---
id: thm-greedy-set-cover-is-an-h-n-approximation
kind: theorem
title: "Weighted greedy set cover has approximation factor H_n"
status: published
origin: pipeline
deps:
  - def-optimization-problem-and-approximation-ratio
  - def-greedy-set-cover
  - def-harmonic-number-for-set-cover-analysis
  - lem-greedy-set-cover-charging-bound
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Williamson and Shmoys, The Design of Approximation Algorithms, §1.6 Theorem 1.11 with proof, printed pp. 25–26"
      url: "https://designofapproxalgs.com/book.pdf"
    - title: "Ghaffari, Advanced Algorithms, Lecture 1: Approximation Algorithms I, §2.1 Theorem 3, PDF pp. 2–3"
      url: "https://people.csail.mit.edu/ghaffari/AA18/Notes/S_18_01.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

On a feasible weighted set-cover instance with $n=|U|$, the greedy algorithm
returns a cover in polynomial time with total cost at most $H_n\,\mathrm{OPT}$.
For $n=0$ both costs are zero. Thus it is an $H_n$-approximation for $n\ge1$.

## Facts & Assumptions

**Given:** A feasible weighted set-cover instance with universe $U$ of $n$ elements and a minimum total cost $\mathrm{OPT}$, together with a full run of the weighted greedy algorithm.

[F1] The greedy algorithm repeatedly chooses a listed set of positive newly covered count minimizing cost divided by that count, ties going to the smallest input index, charges each newly covered element that same ratio, and returns no set when $U$ is empty; the listed family covers $U$, so every round before termination finds a positive newly covered count. ([[def-greedy-set-cover]])

[F2] If $r\ge1$ elements remain uncovered before a greedy step, the price chosen per newly covered element is at most $\mathrm{OPT}/r$; ordering elements by first coverage with in-round ties by the fixed order of $U$, the $j$-th element receives charge at most $\mathrm{OPT}/(n-j+1)$. ([[lem-greedy-set-cover-charging-bound]])

[F3] The harmonic numbers are $H_n=\sum_{j=1}^{n}1/j$ for $n\ge1$ and $H_0=0$. ([[def-harmonic-number-for-set-cover-analysis]])

[F4] Every instance of the stated domain has a feasible solution, optimum values are attained nonnegative rationals, and a polynomial-time $\rho$-approximation for a minimization problem returns on every instance a feasible solution of value at most $\rho$ times the optimum. ([[def-optimization-problem-and-approximation-ratio]])

## Proof

**Proof technique:** direct.

1.1 Each round of the greedy algorithm covers at least one element that was uncovered before it, because the chosen set has positive newly covered count; hence after at most $n$ rounds the set of uncovered elements is empty, the algorithm halts, and the chosen list is a feasible cover of $U$. The total cost of the chosen cover equals the sum of the charges of all elements, since each chosen set's cost is divided equally among exactly the elements that it newly covers, and every element is newly covered in exactly one round. [F1, given, construct]

1.2 If $n=0$, that is $U=\varnothing$, the algorithm returns the empty cover of cost $0$, which is feasible; every feasible cover has nonnegative cost, so $\mathrm{OPT}=0$, and the asserted bound reads $0\le H_0\cdot0=0$ by [F3]. [F1, F3, F4, given, algebra]

2.1 Assume $n\ge1$ and order the elements by first coverage, breaking ties within a round by the fixed order of $U$. For the $j$-th element of this order the charging bound [F2] gives $\text{charge}_j\le\mathrm{OPT}/(n-j+1)$, a valid inequality because the round of first coverage has a positive remaining count and the index satisfies $n-j+1\ge1$. [F2, step 1.1, algebra]

3.1 Summing the bounds of step 2.1 over $j=1,\dots,n$ and substituting $k=n-j+1$, the total cost of the greedy cover satisfies $\sum_{j=1}^{n}\text{charge}_j\le\sum_{j=1}^{n}\mathrm{OPT}/(n-j+1)=\mathrm{OPT}\sum_{k=1}^{n}1/k=H_n\,\mathrm{OPT}$ by [F3]. The total cost is the sum of the charges by step 1.1, so the greedy cover has cost at most $H_n\,\mathrm{OPT}$. [F3, step 1.1, step 2.1, algebra]

4.1 For $n\ge1$ the algorithm returns a feasible cover of cost at most $H_n\,\mathrm{OPT}$ in deterministic polynomial time: there are at most $n$ rounds by step 1.1, each round scans the finitely many listed sets, computes exact rational ratios with positive denominators, and performs exact comparisons; for $n=0$ the bound is the zero identity of step 1.2. By [F4] the procedure is a polynomial-time $H_n$-approximation for weighted set cover. [F1, F4, step 1.2, step 3.1, algebra] ∎
